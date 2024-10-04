import AboutusSection from "@/components/home/aboutus-section"
import Divisions from "@/components/home/divisions"
import Hero from "@/components/home/hero"
import { MovingCards } from "@/components/home/moving-cards"


const Home = () => {
  return (
    <div>
<Hero/>
<MovingCards/>
<Divisions/>
<AboutusSection/> 
    </div>
  )
}

export default Home
