import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const PrivacyPolicy: React.FC = () => {
  const { t, isRTL } = useLanguage();

  return (
    <div className={`flex flex-col min-h-screen ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </section>

          {/* Content Sections */}
          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            {/* Section 1: Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="mb-4">
                Chipthem Pet Microchip System ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
            </section>

            {/* Section 2: Information We Collect */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Personal Information</h3>
                  <p>We may collect personal information such as:</p>
                  <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                    <li>Name and contact information</li>
                    <li>Email address and phone number</li>
                    <li>Pet information (name, breed, microchip number)</li>
                    <li>Address and location information</li>
                    <li>Payment information for transactions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Automatically Collected Information</h3>
                  <p>When you visit our website, we automatically collect:</p>
                  <ul className="list-disc list-inside space-y-2 mt-2 ml-4">
                    <li>Browser type and version</li>
                    <li>IP address</li>
                    <li>Pages visited and time spent</li>
                    <li>Device information</li>
                    <li>Cookies and tracking technologies</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3: How We Use Your Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect for:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Providing and maintaining our microchip registration services</li>
                <li>Processing pet registrations and updates</li>
                <li>Facilitating pet reunions in case of loss</li>
                <li>Sending important service updates and notifications</li>
                <li>Responding to customer inquiries and support requests</li>
                <li>Improving our website and services</li>
                <li>Preventing fraud and ensuring security</li>
              </ul>
            </section>

            {/* Section 4: Information Sharing */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing</h2>
              <p className="mb-4">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Veterinary clinics and animal shelters (for pet recovery purposes)</li>
                <li>Service providers who assist in our operations</li>
                <li>Legal authorities when required by law</li>
                <li>Other parties with your explicit consent</li>
              </ul>
            </section>

            {/* Section 5: Data Security */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
              <p className="mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>SSL encryption for data transmission</li>
                <li>Secure database storage</li>
                <li>Regular security audits</li>
                <li>Access controls and authentication</li>
                <li>Employee confidentiality agreements</li>
              </ul>
            </section>

            {/* Section 6: Your Rights */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
              <p className="mb-4">
                Depending on your location, you may have the following rights:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Right to access your personal information</li>
                <li>Right to correct inaccurate data</li>
                <li>Right to delete your information</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to withdraw consent</li>
              </ul>
            </section>

            {/* Section 7: Cookies and Tracking */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies and Tracking</h2>
              <p className="mb-4">
                Our website uses cookies and similar tracking technologies to enhance your experience. You can control cookie settings through your browser. Some cookies are essential for website functionality, while others help us understand user behavior and improve our services.
              </p>
            </section>

            {/* Section 8: Third-Party Links */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Third-Party Links</h2>
              <p className="mb-4">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of external sites. We encourage you to review the privacy policies of any third-party websites before providing your information.
              </p>
            </section>

            {/* Section 9: Children's Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
              <p className="mb-4">
                Our services are not intended for children under 13 years old. We do not knowingly collect personal information from children. If we become aware of such collection, we will take steps to delete the information and terminate the child's account.
              </p>
            </section>

            {/* Section 10: Policy Changes */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Policy Changes</h2>
              <p className="mb-4">
                We may update this Privacy Policy periodically. Changes will be posted on this page with an updated "Last updated" date. Your continued use of our services following the posting of changes constitutes your acceptance of such changes.
              </p>
            </section>

            {/* Section 11: International Data Transfers */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. International Data Transfers</h2>
              <p className="mb-4">
                If you are located outside our primary jurisdiction, please be aware that your information may be transferred to, stored in, and processed in countries other than your country of residence. These countries may have data protection laws that differ from your home country.
              </p>
            </section>

            {/* Section 12: Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
              <p className="mb-4">
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2"><strong>Email:</strong> Info@chipthem.com</p>
                <p className="mb-2"><strong>Phone:</strong> +962-7-98-980504</p>
                <p className="mb-2"><strong>Hours:</strong> Saturday to Thursday: 9:00 AM - 5:00 PM</p>
                <p><strong>Address:</strong> Amman, Jordan</p>
              </div>
            </section>

            {/* Section 13: Data Protection Officer */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Data Protection Officer</h2>
              <p className="mb-4">
                For specific privacy concerns or to exercise your data rights, you can reach out to our Data Protection team at the contact information provided above.
              </p>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
