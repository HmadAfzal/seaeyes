import { values } from "@/constants"
import AboutusCard from "../aboutus-card"
import WhyChooseUs from "../home/why-us"

export default function Overview() {

  return (
    <div className="container mx-auto pt-16 px-4 space-y-24">
    <section className="space-y-12">
  <div className="text-center space-y-4">
    <h2 className="text-3xl md:text-5xl font-extrabold text-foreground">
      Who We Are
    </h2>
    <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
      Sea Eyes International Business LLC is a global consultancy offering expertise in business formation, visa & immigration services, seafood supply, auto parts, and construction. Our mission is to empower businesses and individuals by providing world-class solutions that enable growth and success in international markets.
    </p>
  </div>
  <div className="grid lg:grid-cols-2 gap-12 items-start">
    {/* Left column with Mission and Vision */}
    <div className="space-y-8">
      <div className="space-y-4">
        <h4 className="font-bold text-primary text-2xl">Mission:</h4>
        <p className="text-muted-foreground">
          To provide innovative and client-centric solutions that help businesses thrive in global markets.
        </p>
      </div>
      <div className="space-y-4">
        <h4 className="font-bold text-primary text-2xl">Vision:</h4>
        <p className="text-muted-foreground">
          To be a trusted global leader, recognized for excellence and integrity across industries.
        </p>
      </div>
    </div>

    {/* Right column with cards */}
    <div className="grid sm:grid-cols-2 gap-6">
      {values.map((feature, index) => (
        <AboutusCard key={index} feature={feature} />
      ))}
    </div>
  </div>
</section>

   <WhyChooseUs/>

    </div>
  )
}