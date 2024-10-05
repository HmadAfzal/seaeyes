import {buttonVariants } from "@/components/ui/button"
import { features } from "@/constants"
import AboutusCard from "../aboutus-card"
import { Link } from "react-router-dom"

export default function AboutusSection() {


  return (
    <div className="container mx-auto px-4 py-16 space-y-24">
      {/* About Us Section */}
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            About Sea Eyes International Business LLC
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A global leader in business formation, visa & immigration services, seafood supply, auto parts, and construction.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-lg md:text-left text-center text-muted-foreground">
              Sea Eyes International helps businesses expand and thrive globally with personalized, end-to-end solutions. Our expertise spans across multiple industries, ensuring comprehensive support for your business needs.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <AboutusCard key={index} feature={feature}/>
              ))}
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
  <img
    className="object-cover w-full h-full"
    src="aboutus.jpg"
    alt="Sea Eyes International Office"
  />
</div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 -skew-y-6 transform origin-top-left"></div>
        <div className="relative grid md:grid-cols-2 gap-8 items-center p-8 md:p-12 rounded-lg">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
             Have any queries?
            </h2>
            <p className="text-lg text-muted-foreground">
              Take the next step towards global success. Our team of experts is ready to provide you with personalized solutions tailored to your business needs.
            </p>
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