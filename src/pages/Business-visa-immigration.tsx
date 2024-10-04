import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Businessservices } from "@/constants"

export default function BusinessVisaImmigration() {
 

  return (
    <div className="space-y-16 pb-12">
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <img className="object-cover h-full w-full"
          src="/values.jpg"
          alt="Business professionals in a meeting"
 />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center space-y-4 p-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Business & Visa Immigration Consultancy
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Comprehensive solutions for business formation, visa services, and legal documentation to support your global expansion.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 space-y-16">
        <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Businessservices.map((service, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <Accordion type="single" collapsible className="w-full">
                  {service.subServices.map((subService, subIndex) => (
                    <AccordionItem key={subIndex} value={`item-${subIndex}`}>
                      <AccordionTrigger className="text-left">{subService.name}</AccordionTrigger>
                      <AccordionContent>
                        {subService.description}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </section>

      </div>
    </div>
  )
}