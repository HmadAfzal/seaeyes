import { divisions } from "@/constants"
import DivisionsCard from "../divisions-card"

export default function Divisions() {


  return (
    <div className="container mx-auto px-8 py-8 md:py-12 lg:py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8 md:mb-12">Our Key Divisions</h1>
      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-6">
        {divisions.map((division, index) => (
         <DivisionsCard key={index} division={division}/>
        ))}
      </div>
    </div>
  )
}