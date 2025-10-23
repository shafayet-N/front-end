import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const TermsOfService: React.FC = () => {
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
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </section>

          {/* Content Sections */}
          <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
            {/* Section 1: Acceptance of Terms */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using the Chipthem Pet Microchip System website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            {/* Section 2: Use License */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use License</h2>
              <p className="mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on Chipthem's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Modifying or copying the materials</li>
                <li>Using the materials for any commercial purpose or for any public display</li>
                <li>Attempting to decompile or reverse engineer any software contained on the website</li>
                <li>Removing any copyright or other proprietary notations from the materials</li>
                <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
              </ul>
            </section>

            {/* Section 3: Disclaimer */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Disclaimer</h2>
              <p className="mb-4">
                The materials on Chipthem's website are provided on an 'as is' basis. Chipthem makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            {/* Section 4: Limitations */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Limitations</h2>
              <p className="mb-4">
                In no event shall Chipthem or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Chipthem's website, even if Chipthem or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            {/* Section 5: Accuracy of Materials */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Accuracy of Materials</h2>
              <p className="mb-4">
                The materials appearing on Chipthem's website could include technical, typographical, or photographic errors. Chipthem does not warrant that any of the materials on the website are accurate, complete, or current. Chipthem may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            {/* Section 6: Links */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Links</h2>
              <p className="mb-4">
                Chipthem has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Chipthem of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            {/* Section 7: Modifications */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Modifications</h2>
              <p className="mb-4">
                Chipthem may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            {/* Section 8: Governing Law */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Governing Law</h2>
              <p className="mb-4">
                These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which Chipthem operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            {/* Section 9: Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Information</h2>
              <p className="mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="mb-2"><strong>Email:</strong> Info@chipthem.com</p>
                <p className="mb-2"><strong>Phone:</strong> +962-7-98-980504</p>
                <p><strong>Hours:</strong> Saturday to Thursday: 9:00 AM - 5:00 PM</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TermsOfService;
