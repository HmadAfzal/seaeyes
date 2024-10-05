import { Link } from 'react-router-dom'
import { buttonVariants } from './ui/button'

const Cta = () => {
  return (
    <section className="relative overflow-hidden rounded-lg ">
        <div className="absolute inset-0 bg-primary/10"></div>
        <div className="relative grid md:grid-cols-2 gap-8 items-center p-8 md:p-12 rounded-lg">
          <div className="space-y-6">
            <h2 className="text-2xl text-foreground md:text-3xl font-bold">
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
  )
}

export default Cta
