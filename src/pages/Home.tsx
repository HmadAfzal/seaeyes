import AboutusSection from "@/components/home/aboutus-section"
import Divisions from "@/components/home/divisions"
import Hero from "@/components/home/hero"
import { MovingCards } from "@/components/home/moving-cards"
import WhyChooseUs from "@/components/home/why-us"


const Home = () => {
  return (
    <div>
<Hero/>
<MovingCards/>
<Divisions/>
<WhyChooseUs/>
<AboutusSection/> 
    </div>
  )
}

export default Home
