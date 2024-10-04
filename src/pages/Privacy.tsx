import { Shield, Eye, Database, UserCheck, RefreshCw } from 'lucide-react'

type SectionProps = {
  title: string;
  icon: JSX.Element;
  children: React.ReactNode;
}

const Section:React.FC<SectionProps> = ({ title, icon, children }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-semibold text-gray-900 flex items-center mb-4">
      {icon}
      <span className="ml-2">{title}</span>
    </h2>
    <div className="text-gray-700">{children}</div>
  </div>
)

export default function Privacy() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="px-6 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Privacy Policy</h1>

          <div className="mb-8 text-gray-700 text-center">
            <p>
              This Privacy Policy outlines how we collect, use, and protect your personal information.
              By using our services, you agree to the collection and use of your data in accordance with this policy.
            </p>
          </div>

          <Section title="What Information We Collect" icon={<Eye className="text-blue-600" size={24} />}>
            <p>
              We collect information that you provide directly to us, such as when you create an account, make a purchase, or contact our customer support.
              This may include:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Name and contact information</li>
              <li>Payment information</li>
              <li>Account credentials</li>
              <li>Communication history with us</li>
            </ul>
          </Section>

          <Section title="How We Use Your Information" icon={<Database className="text-blue-600" size={24} />}>
            <p>
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Providing and improving our services</li>
              <li>Processing transactions</li>
              <li>Communicating with you about our services</li>
              <li>Analyzing usage of our services</li>
              <li>Protecting against fraud and unauthorized access</li>
            </ul>
          </Section>

          <Section title="How We Protect Your Data" icon={<Shield className="text-blue-600" size={24} />}>
            <p>
              We implement a variety of security measures to maintain the safety of your personal information:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Encryption of sensitive data</li>
              <li>Regular security audits</li>
              <li>Secure data storage practices</li>
              <li>Employee training on data protection</li>
            </ul>
          </Section>

          <Section title="Your Privacy Rights" icon={<UserCheck className="text-blue-600" size={24} />}>
            <p>
              You have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>The right to access your personal data</li>
              <li>The right to request correction of inaccurate data</li>
              <li>The right to request deletion of your data</li>
              <li>The right to opt-out of certain data uses</li>
            </ul>
          </Section>

          <Section title="Changes to This Policy" icon={<RefreshCw className="text-blue-600" size={24} />}>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
            </p>
            <p className="mt-2">
              By continuing to access or use our services after those changes take effect, you agree to the revised policy.
            </p>
          </Section>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            <p className="mt-4 text-sm text-gray-500">
              If you have any questions about this Privacy Policy, please contact us at info@seaeyesintl.com
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
