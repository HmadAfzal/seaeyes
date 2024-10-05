import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Package, Users } from "lucide-react"

const reasons = [
  {
    icon: Globe,
    title: "Global Expertise",
    description: "Years of international experience to guide your business through complex markets."
  },
  {
    icon: Package,
    title: "Comprehensive Solutions",
    description: "One-stop services from consultancy to product sourcing and construction."
  },
  {
    icon: Users,
    title: "Trusted by 350+ Clients",
    description: "Our dedication to delivering results has earned us the trust of clients worldwide."
  }
]

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="bg-white">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold">{reason.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}