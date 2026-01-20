import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | SCIT UIN Sunan Kalijaga",
  description: "Terms of Service for Science and Information Technology Community UIN Sunan Kalijaga",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
            <p className="text-muted-foreground text-lg">Last updated: October 22, 2025</p>
          </div>

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                Welcome to Science and Information Technology Community (SCIT) UIN Sunan Kalijaga. These Terms of Service (&quot;Terms&quot;) govern
                your use of our website scituinsk.com and all related services provided by SCIT. By accessing or using our website, you agree to be
                bound by these Terms. If you do not agree to these Terms, please do not use our services.
              </p>
            </section>

            {/* Description of Service */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">SCIT provides an online platform that offers:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Information about our community and activities</li>
                <li>Event registration and management</li>
                <li>Educational resources and workshops</li>
                <li>Community networking opportunities</li>
                <li>Project showcases and collaborations</li>
                <li>News and updates about technology and science</li>
              </ul>
            </section>

            {/* User Accounts */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">3. User Accounts and Registration</h2>

              <h3 className="text-xl font-medium mb-3">3.1 Account Creation</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To access certain features of our service, you may need to create an account. You agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and update your account information</li>
                <li>Keep your account credentials secure and confidential</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">3.2 Eligibility</h3>
              <p className="text-muted-foreground leading-relaxed">
                You must be at least 13 years old to use our services. If you are under 18, you represent that you have your parent&apos;s or
                guardian&apos;s permission to use our services.
              </p>
            </section>

            {/* Acceptable Use */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Acceptable Use Policy</h2>

              <h3 className="text-xl font-medium mb-3">4.1 Permitted Uses</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You may use our services for lawful purposes only and in accordance with these Terms.
              </p>

              <h3 className="text-xl font-medium mb-3">4.2 Prohibited Activities</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Use our services for any unlawful purpose or activity</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon intellectual property rights</li>
                <li>Transmit harmful, offensive, or inappropriate content</li>
                <li>Harass, threaten, or discriminate against others</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Distribute spam, viruses, or malicious code</li>
                <li>Interfere with the proper functioning of our services</li>
                <li>Impersonate others or provide false information</li>
              </ul>
            </section>

            {/* Content and Intellectual Property */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Content and Intellectual Property</h2>

              <h3 className="text-xl font-medium mb-3">5.1 Our Content</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All content on our website, including text, graphics, logos, images, and software, is the property of SCIT or its licensors and is
                protected by copyright and other intellectual property laws.
              </p>

              <h3 className="text-xl font-medium mb-3">5.2 User-Generated Content</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you submit content to our platform, you grant us a non-exclusive, worldwide, royalty-free license to use, modify, and display
                such content in connection with our services.
              </p>

              <h3 className="text-xl font-medium mb-3">5.3 Copyright Infringement</h3>
              <p className="text-muted-foreground leading-relaxed">
                We respect intellectual property rights. If you believe your copyrighted work has been infringed, please contact us with detailed
                information about the alleged infringement.
              </p>
            </section>

            {/* Privacy */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy, which explains how we collect, use, and protect your information
                when you use our services. By using our services, you consent to the collection and use of information as described in our Privacy
                Policy.
              </p>
            </section>

            {/* Events and Services */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Events and Educational Services</h2>

              <h3 className="text-xl font-medium mb-3">7.1 Event Registration</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">When you register for events through our platform:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Registration is subject to availability</li>
                <li>We reserve the right to cancel or reschedule events</li>
                <li>Refund policies will be specified for each event</li>
                <li>You are responsible for providing accurate registration information</li>
              </ul>

              <h3 className="text-xl font-medium mb-3">7.2 Code of Conduct</h3>
              <p className="text-muted-foreground leading-relaxed">
                All participants in SCIT events and activities must follow our code of conduct, which promotes respect, inclusivity, and professional
                behavior.
              </p>
            </section>

            {/* Disclaimers */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Disclaimers and Limitations</h2>

              <h3 className="text-xl font-medium mb-3">8.1 Service Availability</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We strive to maintain high availability of our services, but we do not guarantee uninterrupted or error-free operation. We may
                temporarily suspend services for maintenance or updates.
              </p>

              <h3 className="text-xl font-medium mb-3">8.2 Disclaimer of Warranties</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied,
                including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
              </p>

              <h3 className="text-xl font-medium mb-3">8.3 Limitation of Liability</h3>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, SCIT shall not be liable for any indirect, incidental, special, or consequential damages
                arising from your use of our services.
              </p>
            </section>

            {/* Third-Party Services */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Third-Party Services and Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party websites or services. We are not responsible for the content, privacy policies, or
                practices of these third-party services. Your use of third-party services is at your own risk and subject to their terms and
                conditions.
              </p>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Termination</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We reserve the right to terminate or suspend your access to our services at any time, with or without cause, and with or without
                notice, for any reason including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Violation of these Terms</li>
                <li>Fraudulent or illegal activity</li>
                <li>Long periods of inactivity</li>
                <li>At our sole discretion</li>
              </ul>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Governing Law and Jurisdiction</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the Republic of Indonesia. Any disputes arising under
                these Terms shall be subject to the exclusive jurisdiction of the courts in Yogyakarta, Indonesia.
              </p>
            </section>

            {/* Changes to Terms */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">12. Changes to These Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms at any time. We will notify users of significant changes by posting the updated Terms on
                our website and updating the &quot;Last updated&quot; date. Your continued use of our services after changes become effective
                constitutes acceptance of the new Terms.
              </p>
            </section>

            {/* Severability */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">13. Severability</h2>
              <p className="text-muted-foreground leading-relaxed">
                If any provision of these Terms is found to be unenforceable or invalid, the remaining provisions will continue to be valid and
                enforceable to the fullest extent permitted by law.
              </p>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">14. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">If you have any questions about these Terms of Service, please contact us:</p>
              <div className="bg-muted p-6 rounded-lg">
                <p className="font-medium mb-2">Science and Information Technology Community (SCIT)</p>
                <p className="text-muted-foreground">UIN Sunan Kalijaga Yogyakarta</p>
                <p className="text-muted-foreground">Email: scit@uin-suka.ac.id</p>
                <p className="text-muted-foreground">Website: scituinsk.com</p>
                <p className="text-muted-foreground">Address: Jl. Laksda Adisucipto, Yogyakarta 55281, Indonesia</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
