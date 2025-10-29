import React, { useState, FormEvent } from "react";
import { useLanguage } from '@/contexts/LanguageContext';

const LostFoundLostreport: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    pet_name: "",
    pet_type: "",
    breed: "",
    color: "",
    size: "",
    microchip: "",
    date_lost: "",
    time_lost: "",
    last_seen_location: "",
    loss_circumstances: "",
    owner_name: "",
    phone: "",
    email: "",
    alt_phone: "",
    pet_photo: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData((prev) => ({ ...prev, pet_photo: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create FormData object to handle file
    const data = new FormData();
    for (const key in formData) {
      if (key === "pet_photo" && formData.pet_photo) {
        data.append(key, formData.pet_photo);
      } else {
        data.append(key, (formData as any)[key]);
      }
    }

    fetch("https://localhost:5000/report-lost-pet", {
      method: "POST",
      body: data,
    })
      .then((response) => {
        if (response.ok) {
          alert(t('lostPet.successMessage'));
          // Reset form or handle success as needed
        } else {
          alert(t('lostPet.errorMessage'));
        }
      })
      .catch(() => alert(t('lostPet.networkError')));
  };

  return (
    <LanguageTransitionWrapper>
      <section id="report-lost" className="py-16 bg-red-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('lostPet.title')}</h2>
          <p className="text-lg text-gray-600">{t('lostPet.subtitle')}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-red-500 px-8 py-6 text-center">
            <h3 className="text-xl font-bold text-white">{t('lostPet.formTitle')}</h3>
            <p className="text-red-100">{t('lostPet.formSubtitle')}</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="px-8 py-8"
            encType="multipart/form-data"
          >
            {/* Pet Information */}
            <div className="mb-8">
              <h4 className="text-lg font-bold text-gray-800 mb-4">{t('lostPet.petInformation')}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('lostPet.petName')}
                  </label>
                  <input
                    type="text"
                    name="pet_name"
                    required
                    value={formData.pet_name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('lostPet.petType')}
                  </label>
                  <select
                    name="pet_type"
                    required
                    value={formData.pet_type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">{t('lostPet.selectPetType')}</option>
                    <option value="Dog">{t('lostPet.dog')}</option>
                    <option value="Cat">{t('lostPet.cat')}</option>
                    <option value="Bird">{t('lostPet.bird')}</option>
                    <option value="Other">{t('lostPet.other')}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t('lostPet.breed')}</label>
                  <input
                    type="text"
                    name="breed"
                    value={formData.breed}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('lostPet.color')}
                  </label>
                  <input
                    type="text"
                    name="color"
                    required
                    value={formData.color}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t('lostPet.size')}</label>
                  <select
                    name="size"
                    value={formData.size}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">{t('lostPet.selectSize')}</option>
                    <option value="Small">{t('lostPet.small')}</option>
                    <option value="Medium">{t('lostPet.medium')}</option>
                    <option value="Large">{t('lostPet.large')}</option>
                    <option value="Extra Large">{t('lostPet.extraLarge')}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('lostPet.microchip')}
                  </label>
                  <input
                    type="text"
                    name="microchip"
                    maxLength={15}
                    value={formData.microchip}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent font-mono"
                  />
                </div>
              </div>
            </div>

            {/* Loss Details */}
            <div className="mb-8">
              <h4 className="text-lg font-bold text-gray-800 mb-4">{t('lostPet.lossDetails')}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t('lostPet.dateLost')}</label>
                  <input
                    type="date"
                    name="date_lost"
                    required
                    value={formData.date_lost}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('lostPet.timeLost')}
                  </label>
                  <input
                    type="time"
                    name="time_lost"
                    value={formData.time_lost}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('lostPet.lastSeenLocation')}
                  </label>
                  <input
                    type="text"
                    name="last_seen_location"
                    required
                    placeholder={t('lostPet.locationPlaceholder')}
                    value={formData.last_seen_location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {t('lostPet.lossCircumstances')}
                  </label>
                  <textarea
                    name="loss_circumstances"
                    rows={3}
                    placeholder={t('lostPet.circumstancesPlaceholder')}
                    value={formData.loss_circumstances}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-8">
              <h4 className="text-lg font-bold text-gray-800 mb-4">{t('lostPet.contactInformation')}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t('lostPet.ownerName')}</label>
                  <input
                    type="text"
                    name="owner_name"
                    required
                    value={formData.owner_name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t('lostPet.phone')}</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t('lostPet.email')}</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">{t('lostPet.altPhone')}</label>
                  <input
                    type="tel"
                    name="alt_phone"
                    value={formData.alt_phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Photo Upload */}
            <div className="mb-8">
              <h4 className="text-lg font-bold text-gray-800 mb-4">{t('lostPet.photoUpload')}</h4>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <input
                  type="file"
                  name="pet_photo"
                  accept="image/*"
                  id="photo-upload"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <label htmlFor="photo-upload" className="cursor-pointer">
                  <svg
                    className="w-12 h-12 text-gray-400 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p className="text-gray-600">{t('lostPet.photoDescription')}</p>
                  <p className="text-sm text-gray-500">{t('lostPet.photoNote')}</p>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-red-500 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-red-600 transition-all duration-200"
              >
                {t('lostPet.submitButton')}
              </button>
              <p className="text-sm text-gray-500 mt-2">
                {t('lostPet.submitNote')}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
    </LanguageTransitionWrapper>
  );
};

export default LostFoundLostreport;
