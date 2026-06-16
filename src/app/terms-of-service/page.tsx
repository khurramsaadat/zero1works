import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const TermsOfService = () => {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: [
        "These Terms of Service (\"Terms\") govern your use of the website operated by Zero One Works Ltd (\"Company\", \"we\", \"us\", or \"our\") and any services we provide. By accessing our website or engaging our services, you agree to be bound by these Terms.",
        "If you do not agree with any part of these Terms, you must not use our website or services. We reserve the right to update these Terms at any time. Continued use of our website or services after changes constitutes acceptance of the revised Terms.",
        "These Terms apply to all visitors, users, and clients of Zero One Works Ltd, including those who browse our website, request quotations, or enter into a service agreement with us."
      ]
    },
    {
      title: "Services",
      content: [
        "Zero One Works Ltd provides web development, mobile application development, UI/UX design, e-commerce solutions, digital marketing, and related digital services to businesses in the United Kingdom and internationally.",
        "The scope, deliverables, timelines, and fees for specific projects will be defined in a separate proposal, statement of work, or service agreement agreed upon between you and Zero One Works Ltd prior to commencement of work.",
        "We strive to deliver all services to a high professional standard. However, we do not guarantee specific business outcomes such as increased revenue, search engine rankings, or conversion rates unless explicitly stated in a written agreement.",
        "You agree to provide timely feedback, content, assets, and approvals necessary for us to deliver the agreed services. Delays caused by your failure to provide required materials may affect project timelines and are not the responsibility of Zero One Works Ltd."
      ]
    },
    {
      title: "Payment Terms",
      content: [
        "Fees for our services will be outlined in your project proposal or service agreement. Unless otherwise agreed in writing, we require a deposit before work commences, with remaining payments due at agreed milestones or upon project completion.",
        "All prices are quoted in British Pounds (GBP) unless otherwise specified. VAT will be applied where applicable in accordance with UK tax law.",
        "Invoices are payable within 14 days of the invoice date unless a different payment schedule is agreed. Late payments may incur interest at the rate permitted under the Late Payment of Commercial Debts (Interest) Act 1998.",
        "We reserve the right to suspend work on any project where payment is overdue by more than 14 days. Ownership of deliverables may be withheld until all outstanding invoices are settled in full."
      ]
    },
    {
      title: "Intellectual Property",
      content: [
        "Upon full payment of all fees, you will receive ownership of the custom code, designs, and content created specifically for your project, as defined in your service agreement. Pre-existing tools, frameworks, libraries, and third-party components used in your project remain the property of their respective owners.",
        "Zero One Works Ltd retains the right to display completed projects in our portfolio, case studies, and marketing materials unless you request otherwise in writing before project completion.",
        "You warrant that any content, images, logos, or materials you provide to us do not infringe the intellectual property rights of any third party. You agree to indemnify Zero One Works Ltd against any claims arising from materials you supply.",
        "Our website content, branding, and proprietary methodologies remain the intellectual property of Zero One Works Ltd and may not be reproduced without our prior written consent."
      ]
    },
    {
      title: "Limitation of Liability",
      content: [
        "To the fullest extent permitted by applicable law, Zero One Works Ltd shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities, arising from your use of our website or services.",
        "Our total liability to you for any claim arising from or related to our services shall not exceed the total fees paid by you to Zero One Works Ltd for the specific project giving rise to the claim in the twelve months preceding the claim.",
        "Nothing in these Terms excludes or limits our liability for death or personal injury caused by negligence, fraud, or any other liability that cannot be excluded or limited under English law.",
        "We provide website hosting recommendations and third-party integrations as part of our services but are not responsible for the performance, uptime, or policies of third-party platforms or services."
      ]
    },
    {
      title: "Termination",
      content: [
        "Either party may terminate a service agreement by providing written notice as specified in the relevant project contract. For website browsing, you may stop using our website at any time.",
        "If you terminate a project before completion, you will be invoiced for all work completed up to the termination date, including any non-refundable deposit. Deliverables completed and paid for up to the termination date will be provided to you.",
        "We may terminate or suspend access to our website or services immediately if you breach these Terms, fail to make required payments, or engage in conduct that we reasonably believe is harmful to our business or other users.",
        "Provisions of these Terms that by their nature should survive termination, including intellectual property, limitation of liability, and governing law, will remain in effect after termination."
      ]
    },
    {
      title: "Governing Law",
      content: [
        "These Terms are governed by and construed in accordance with the laws of England and Wales, without regard to conflict of law principles.",
        "Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts of England and Wales.",
        "If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.",
        "For questions about these Terms, please contact us at khurram@zerooneworks.com or write to Zero One Works Ltd, 1791 Holmcroft Rd, Manchester M18 7WQ, United Kingdom."
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        className="pt-16 pb-12 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&h=1080&fit=crop&crop=center')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-100 max-w-3xl mx-auto">
              The terms and conditions governing your use of Zero One Works Ltd services.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              Please read these Terms of Service carefully before using the website or services
              of Zero One Works Ltd. These Terms constitute a legally binding agreement between
              you and Zero One Works Ltd, a company registered in the United Kingdom with its
              registered office at 1791 Holmcroft Rd, Manchester M18 7WQ.
            </p>
          </div>

          <div className="space-y-10">
            {sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                  {index + 1}. {section.title}
                </h2>
                <div className="space-y-4">
                  {section.content.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-gray-600 dark:text-gray-300 leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Related policies:{" "}
              <Link href="/privacy-policy" className="underline hover:text-gray-900 dark:hover:text-white">
                Privacy Policy
              </Link>
              {" "}|{" "}
              <Link href="/cookie-policy" className="underline hover:text-gray-900 dark:hover:text-white">
                Cookie Policy
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;
