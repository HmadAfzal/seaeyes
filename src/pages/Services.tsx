import Cta from "@/components/cta"
import DivisionsCard from "@/components/divisions-card"
import { services } from "@/constants"

export default function Services() {

  return (
    <div className="container mx-auto px-6 py-16 space-y-16">
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
          Comprehensive Business Solutions Across Multiple Industries
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We offer a wide range of services, including business formation, legal documentation, visa & immigration, seafood supply, auto parts, and construction. Explore our divisions to find the right solutions for your business needs.
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        {services.map((service, index) => (
          <DivisionsCard key={index} division={service} />
        ))}
      </section>
      <Cta/>
    </div>
  )
}