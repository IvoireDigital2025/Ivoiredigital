import { useEffect, useState } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CONTACT_EMAIL } from "@/lib/utils";

export default function TermsOfService() {
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

          <h1 className="text-3xl md:text-4xl font-bold text-ivoire-navy mb-2" data-testid="text-terms-title">
            Terms of Service
          </h1>
          <p className="text-sm text-gray-500 mb-10">Last updated: July 29, 2026</p>

          <div className="space-y-8 text-gray-700 leading-relaxed text-[15px]">
            <section>
              <h2 className="text-xl font-bold text-ivoire-navy mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Ivoire Digital website, submitting a form, or engaging
                our services, you agree to these Terms of Service. If you do not agree, please do
                not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ivoire-navy mb-3">2. Our Services</h2>
              <p>
                Ivoire Digital provides digital marketing, website development, and AI automation
                services. Specific engagements, deliverables, pricing, and timelines are governed
                by separate written agreements or proposals between you and Ivoire Digital.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ivoire-navy mb-3">3. Communications Consent</h2>
              <p>
                When you submit our contact form and check the consent box, you provide express
                written consent for Ivoire Digital to contact you by phone call and text message
                (SMS), including through automated technology, at the number you provided. Consent
                is not a condition of purchase. Message and data rates may apply, and message
                frequency varies. You may opt out of texts at any time by replying{" "}
                <span className="font-semibold">STOP</span>, or reply{" "}
                <span className="font-semibold">HELP</span> for help. See our{" "}
                <Link href="/privacy-policy" className="text-ivoire-navy underline hover:text-ivoire-gold">
                  Privacy Policy
                </Link>{" "}
                for details on how we handle your information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ivoire-navy mb-3">4. Use of the Website</h2>
              <p className="mb-3">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Use the website for any unlawful purpose</li>
                <li>Submit false or misleading information through our forms</li>
                <li>Attempt to interfere with the operation or security of the website</li>
                <li>Copy, scrape, or reproduce site content without permission</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ivoire-navy mb-3">5. Intellectual Property</h2>
              <p>
                All content on this website — including text, graphics, logos, and design — is the
                property of Ivoire Digital or its licensors and is protected by applicable
                intellectual property laws. You may not use it without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ivoire-navy mb-3">6. Disclaimers</h2>
              <p>
                The website and its content are provided "as is" without warranties of any kind.
                While we strive for accuracy, we do not guarantee that the website will be
                error-free or uninterrupted, or that results described (such as case studies or
                testimonials) are typical or guaranteed for your business.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ivoire-navy mb-3">7. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Ivoire Digital shall not be liable for any
                indirect, incidental, consequential, or punitive damages arising out of your use
                of the website. Liability related to paid services is governed by the applicable
                service agreement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ivoire-navy mb-3">8. Governing Law</h2>
              <p>
                These Terms are governed by the laws of the State of Texas, without regard to
                conflict-of-law principles. Any disputes shall be resolved in the state or federal
                courts located in Dallas County, Texas.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-ivoire-navy mb-3">9. Changes to These Terms</h2>
              <p>
                We may update these Terms from time to time. The "Last updated" date above
                reflects the most recent revision. Continued use of the website after changes
                means you accept the updated Terms.
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
