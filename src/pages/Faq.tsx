import { HelpCircle } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQPage() {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer business consultancy, seafood supply, auto parts, and construction services."
    },
    {
      question: "How long does the visa process take?",
      answer: "The time varies, but we work to ensure the fastest possible processing time."
    },
    {
      question: "How can I contact Sea Eyes International?",
      answer: "You can reach us via our contact page or by phone/email."
    }
  ]

  return (
    <div className="bg-[#F8F9FF] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1E2B3A] mb-4">
            Our expert team give answers to your common questions
          </h1>
          <p className="text-[#64748B]">
            Welcome to our FAQs section, where we address the most common questions and queries our clients and visitors often have.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-[#1E2B3A] mb-6">Frequently Asked Questions</h2>

        <div className="grid gap-4 md:grid-cols-1">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    <span className="flex items-center">
                      <HelpCircle className="text-blue-500 mr-2" size={20} />
                      <span className="text-[#1E2B3A] font-medium">{faq.question}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#64748B]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}