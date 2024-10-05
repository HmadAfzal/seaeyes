import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

interface Division {
  icon: React.ElementType;
  title: string;
  description: string;
  cta: string;
  slug: string;
  imageUrl: string;
}

const DivisionsCard = ({ division }: { division: Division }) => {
  const navigate = useNavigate()

  return (
    <Card className="flex flex-col overflow-hidden">
      <div className="relative h-48 w-full">
        <img
        className="object-cover h-full w-full"
          src={division.imageUrl || "/placeholder.svg?height=300&width=400"}
          alt={division.title}
  
        />
      </div>
      <CardHeader>
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <division.icon className="w-6 h-6 text-primary" />
          </div>
          <CardTitle className="text-xl font-semibold text-foreground">{division.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">{division.description}</p>
      </CardContent>
      <CardFooter>
        <Button 
          variant="secondary" 
          onClick={() => navigate(`/service/${division.slug}`)} 
          className="w-full"
        >
          {division.cta}
        </Button>
      </CardFooter>
    </Card>
  )
}

export default DivisionsCard