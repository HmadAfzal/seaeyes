import { buttonVariants } from "@/components/ui/button"
import { values } from "@/constants"
import AboutusCard from "../aboutus-card"
import { Link } from "react-router-dom"

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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h4 className="font-bold text-primary text-2xl">Mission: </h4>
              <p className="text-muted-foreground">To provide innovative and client-centric solutions that help businesses thrive in global markets.</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-bold text-primary text-2xl">Vision: </h4>
              <p className="text-muted-foreground">To be a trusted global leader, recognized for excellence and integrity across industries.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((feature, index) => (
                <AboutusCard key={index} feature={feature} />
              ))}
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl group">
            <img
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              src="values.png"
              alt="Sea Eyes International Office"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-2xl font-bold mb-2">Our Values in Action</h3>
              <p className="text-sm">Explore how we embody our core values in every aspect of our work.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 -skew-y-6 transform origin-top-left"></div>
        <div className="relative grid md:grid-cols-2 gap-8 items-center p-8 md:p-12 rounded-lg">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Expanding Horizons Globally
            </h2>
            <p className="text-lg text-muted-foreground">
            With operations in Oman, Dubai, Saudi Arabia, and more, Sea Eyes International is strategically positioned to provide global expertise with localized solutions            </p>
            <Link to={'/contact'} className={buttonVariants({ variant: "default" })}>Get in touch</Link>

          </div>
          <div className="relative h-[300px] rounded-lg overflow-hidden shadow-xl">
            <img
            className="object-cover h-full w-full"
              src="aboutus-2.png"
              alt="Business Growth Concept"
            />
          </div>
        </div>
      </section>

    </div>
  )
}