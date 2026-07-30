import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CONTACT_EMAIL } from "@/lib/utils";

export default function PrivacyPolicy() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-inter text-gray-800 bg-gray-50 min-h-screen flex flex-col">
      <Header scrolled={scrolled} />

      <main className="flex-1 pt-28 pb-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-ivoire-navy hover:text-ivoire-gold transition-colors mb-6"
            data-testid="link-back-home"
          >
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-ivoire-navy mb-2" data-testid="text-privacy-title">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 mb-10">Last updated: July 29, 2026</p>

          <div className="space-y-8 text-gray-700 leading-relaxed text-[15px]">
            <section>
              <h2 className="text-xl font-bold text-ivoire-navy mb-3">1. Who We Are</h2>
              <p>
                Ivoire Digital ("we," "us," or "our") is a digital marketing and AI automation
                agency based in Dallas, Texas. This Privacy Policy explains how we collect, use,
                and protect your personal information when you visit our website, submit our
                contact or lead forms, or otherwise interact with us.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ivoire-navy mb-3">2. Information We Collect</h2>
              <p className="mb-3">When you submit a form on our website, we may collect:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Your name and business name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Information about your business needs and inquiry details</li>
              </ul>
              <p className="mt-3">
                We may also automatically collect standard technical information such as browser
                type, device information, and pages visited, to operate and improve our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ivoire-navy mb-3">3. How We Use Your Phone Number (Calls &amp; SMS)</h2>
              <p className="mb-3">
                If you provide your phone number and check the express written consent box on our
                form, you agree that Ivoire Digital may contact you at that number by:
              </p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Phone calls (including calls placed using automated dialing technology)</li>
                <li>Text messages (SMS), including automated messages, regarding your inquiry, appointment reminders, and follow-ups related to our services</li>
              </ul>
              <p className="mt-3">
                Consent is not a condition of purchasing any goods or services. Message and data
                rates may apply. Message frequency varies depending on your interaction with us.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ivoire-navy mb-3">4. How to Opt Out</h2>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>
                  <span className="font-semibold">Text messages:</span> Reply{" "}
                  <span className="font-semibold">STOP</span> to any SMS from us at any time to
                  stop receiving text messages. Reply <span className="font-semibold">HELP</span>{" "}
                  for assistance.
                </li>
                <li>
                  <span className="font-semibold">Phone calls:</span> Tell us during any call that
                  you no longer wish to be contacted, or email us at{" "}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-ivoire-navy underline hover:text-ivoire-gold">
                    {CONTACT_EMAIL}
                  </a>
                  .
                </li>
                <li>
                  <span className="font-semibold">Email:</span> Use the unsubscribe link in any
                  marketing email or contact us directly.
                </li>
              </ul>
              <p className="mt-3">
                We will honor opt-out requests promptly, and in any event within the timeframes
                required by applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ivoire-navy mb-3">5. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>To respond to your inquiries and provide requested information or quotes</li>
                <li>To schedule and confirm consultations or appointments</li>
                <li>To provide, improve, and market our services</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ivoire-navy mb-3">6. Sharing of Information</h2>
              <p>
                We do not sell your personal information. We do not share your phone number or SMS
                opt-in consent with third parties or affiliates for their own marketing purposes.
                We may share information with service providers who help us operate our website
                and communications (for example, email or scheduling providers), who are required
                to protect your information, or when required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ivoire-navy mb-3">7. Data Retention &amp; Security</h2>
              <p>
                We retain lead and contact information only as long as needed for the purposes
                described above or as required by law. We use reasonable administrative and
                technical safeguards to protect your information; however, no method of
                transmission or storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ivoire-navy mb-3">8. Your Rights</h2>
              <p>
                You may request access to, correction of, or deletion of your personal information
                by contacting us at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-ivoire-navy underline hover:text-ivoire-gold">
                  {CONTACT_EMAIL}
                </a>
                . We will respond in accordance with applicable law, including the Texas Data
                Privacy and Security Act where it applies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ivoire-navy mb-3">9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The "Last updated" date above
                reflects the most recent revision. Continued use of our website after changes
                means you accept the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ivoire-navy mb-3">10. Contact Us</h2>
              <p>
                Ivoire Digital — Dallas, TX
                <br />
                Email:{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-ivoire-navy underline hover:text-ivoire-gold">
                  {CONTACT_EMAIL}
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
