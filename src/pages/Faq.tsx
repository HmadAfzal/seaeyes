import { HelpCircle } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqCategories } from '@/constants'

export default function FAQPage() {
  

  return (
    <div className="bg-[#F8F9FF] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1E2B3A] mb-4">
            Our expert team gives answers to your common questions
          </h1>
          <p className="text-[#64748B]">
            Welcome to our FAQs section, where we address the most common questions and queries our clients and visitors often have.
          </p>
        </div>

        {faqCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <h2 className="text-2xl font-semibold text-[#1E2B3A] mb-6">{category.title}</h2>
            <div className="grid gap-4 md:grid-cols-1">
              {category.faqs.map((faq, faqIndex) => (
                <div key={faqIndex} className="bg-white rounded-lg shadow-sm p-6">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value={`item-${categoryIndex}-${faqIndex}`}>
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
        ))}
      </div>
    </div>
  )
}