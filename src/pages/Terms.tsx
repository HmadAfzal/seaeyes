import { Book, Shield, Scale, Globe } from 'lucide-react'
import React from 'react'

type SectionProps = {
  title: string;
  icon: JSX.Element;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, icon, children }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-semibold text-gray-900 flex items-center mb-4">
      {icon}
      <span className="ml-2">{title}</span>
    </h2>
    <div className="text-gray-700">{children}</div>
  </div>
)

const TermsAndConditions: React.FC = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="px-6 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Terms and Conditions</h1>
          
          <div className="mb-8 text-gray-700 text-center">
            <p>
              These Terms and Conditions govern your use of the Sea Eyes International Business LLC website and services.
              By accessing or using our services, you agree to be bound by these terms.
            </p>
          </div>

          <Section title="Use of Services" icon={<Book className="text-blue-600" size={24} />}>
            <ul className="list-disc list-inside space-y-2">
              <li>You must be at least 18 years old to use our services.</li>
              <li>You agree to provide accurate and complete information when creating an account.</li>
              <li>You are responsible for maintaining the confidentiality of your account information.</li>
              <li>You agree not to use our services for any illegal or unauthorized purpose.</li>
              <li>We reserve the right to modify or terminate our services at any time without notice.</li>
            </ul>
          </Section>

          <Section title="Limitations of Liability" icon={<Shield className="text-blue-600" size={24} />}>
            <p>
              Sea Eyes International Business LLC and its affiliates will not be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Your access to or use of or inability to access or use the services;</li>
              <li>Any conduct or content of any third party on the services;</li>
              <li>Any content obtained from the services; and</li>
              <li>Unauthorized access, use or alteration of your transmissions or content.</li>
            </ul>
          </Section>

          <Section title="Governing Law" icon={<Scale className="text-blue-600" size={24} />}>
            <p>
              These Terms shall be governed and construed in accordance with the laws of Oman, without regard to its conflict of law provisions.
            </p>
            <p className="mt-2">
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
            </p>
          </Section>

          <Section title="Changes to Terms" icon={<Globe className="text-blue-600" size={24} />}>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any significant changes by posting the new Terms on this page.
            </p>
            <p className="mt-2">
              By continuing to access or use our services after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using our services.
            </p>
          </Section>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            <p className="mt-4 text-sm text-gray-500">
              If you have any questions about these Terms, please contact us at info@seaeyesintl.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsAndConditions
