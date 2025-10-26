import React, { useState, FormEvent } from "react";
import axios from "axios";
import { useLanguage } from "../contexts/LanguageContext";

const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const [subject, setSubject] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  // Show microchip input only if subject related (example conditional)
  const showMicrochip = subject === "microchip" || subject === "search";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    const formData = new FormData(e.currentTarget);
    const contactData = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phoneNumber: formData.get('phoneNumber'),
      subject: formData.get('subject'),
      microchipNumber: formData.get('microchip_number') || undefined,
      priorityLevelLevel: formData.get('priorityLevel'),
      message: formData.get('message')
    };

    try {
      const response = await axios.post('/api/contacts', contactData);
      if (response.data.success) {
        setSubmitMessage(t('contact.successMessage') || "Message sent successfully!");
        e.currentTarget.reset();
        setSubject("");
      } else {
        setSubmitMessage(response.data.message || "Failed to send message.");
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitMessage("An error occurred while sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-pet-primary bg-blue-600 px-8 py-6">
                <h2 className="text-2xl font-bold text-white mb-2">{t('contact.sendMessage')}</h2>
                <p className="text-blue-100">{t('contact.responseTime')}</p>
              </div>

              <form onSubmit={handleSubmit} className="px-8 py-8 space-y-6">
                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="firstName">
                      {t('contact.firstName')}
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="lastName">
                      {t('contact.lastName')}
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="email">
                      {t('contact.email')}
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="phoneNumber">
                      {t('contact.phoneNumber')}
                    </label>
                    <input
                      id="phoneNumber"
                      type="tel"
                      name="phoneNumber"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="subject">
                    {t('contact.subject')}
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                  >
                    <option value="" disabled>
                      {t('contact.selectTopic')}
                    </option>
                    <option value="general">{t('contact.generalInquiry')}</option>
                    <option value="registration">{t('contact.petRegistrationHelp')}</option>
                    <option value="search">{t('contact.microchipSearchIssue')}</option>
                    <option value="lost-pet">{t('contact.lostPetEmergency')}</option>
                    <option value="found-pet">{t('contact.foundPetReport')}</option>
                    <option value="clinic">{t('contact.veterinaryClinicServices')}</option>
                    <option value="success-story">{t('contact.shareSuccessStory')}</option>
                    <option value="technical">{t('contact.technicalSupport')}</option>
                    <option value="billing">{t('contact.billingQuestion')}</option>
                    <option value="other">{t('contact.other')}</option>
                  </select>
                </div>

                {/* Microchip Number (conditional) */}
                {showMicrochip && (
                  <div id="microchip-field">
                    <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="microchip_number">
                      {t('contact.microchipNumber')}
                    </label>
                    <input
                      id="microchip_number"
                      type="text"
                      name="microchip_number"
                      maxLength={15}
                      placeholder={t('contact.microchipPlaceholder')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200 font-mono"
                    />
                  </div>
                )}

                {/* priorityLevel Level */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="priorityLevel">
                    {t('contact.priorityLevelLevel')}
                  </label>
                  <select
                    id="priorityLevel"
                    name="priorityLevel"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                  >
                    <option value="">{t('contact.selectpriorityLevel')}</option>
                    <option value="Low">{t('contact.priority_Level_Low')}</option>
                    <option value="Normal">{t('contact.Priority_Level_Normal')}</option>
                    <option value="Urgent">{t('contact.Priority_Level_Urgent')}</option>
                    <option value="Emergency">{t('contact.Priority_Level_Emergency')}</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="message">
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder={t('contact.messagePlaceholder')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pet-primary focus:border-transparent transition-all duration-200"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-pet-primary bg-blue-600 text-white py-4 rounded-lg text-lg font-bold hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (t('contact.sending') || "Sending...") : t('contact.sendButton')}
                </button>

                {submitMessage && (
                  <p className={`text-sm text-center ${submitMessage.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
                    {submitMessage}
                  </p>
                )}

                <p className="text-sm text-gray-500 text-center">
                  {t('contact.responseNote')}
                </p>
              </form>
            </div>
          </div>

          {/* Contact Information Sidebar */}
          <div className="space-y-6">
            {/* General Contact */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">{t('contact.generalContact')}</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 font-semibold">{t('contact.emailSupport')}</p>
                  <a href="mailto:Info@chipthem.com" className="text-pet-primary hover:text-blue-600">
                    {t('contact.supportEmail')}
                  </a>
                </div>
                <div>
                  <p className="text-xs text-gray-500">{t('contact.hoursSatThu')}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">{t('contact.hoursFri')}</p>
                </div>
              </div>
            </div>

            {/* Business Information */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">{t('contact.businessHours')}</h3>
              <div className="space-y-3">
                <p className="text-sm text-gray-700">
                  {t('contact.businessHoursSatThu')}
                  <br />
                  {t('contact.businessHoursFri')}
                  <br />
                </p>
              </div>
            </div>

            {/* FAQ Quick Links */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">{t('contact.quickHelp')}</h3>
              <div className="space-y-2">
                <a href="/search" className="block text-sm text-pet-primary hover:text-blue-600">
                  {t('contact.searchFoundPet')}
                </a>
                <a href="/lostfound" className="block text-sm text-pet-primary hover:text-blue-600">
                  {t('contact.reportLostPet')}
                </a>
                <a href="/registerpet" className="block text-sm text-pet-primary hover:text-blue-600">
                  {t('contact.registerPet')}
                </a>
                <a href="/findclinic" className="block text-sm text-pet-primary hover:text-blue-600">
                  {t('contact.findClinic')}
                </a>
                <a href="/about" className="block text-sm text-pet-primary hover:text-blue-600">
                  {t('contact.learnAboutChips')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
