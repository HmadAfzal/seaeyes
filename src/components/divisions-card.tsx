import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

interface Division{
    icon:any;
    title:string;
    description:string;
    cta:string;
    slug:string;
}

const DivisionsCard = ({division}:{division:Division}) => {
    const navigate=useNavigate()
  return (
    <Card className="flex flex-col">
    <CardHeader>
      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
        <division.icon className="w-6 h-6 text-primary" />
      </div>
      <CardTitle className="text-xl font-semibold text-foreground">{division.title}</CardTitle>
    </CardHeader>
    <CardContent className="flex-grow">
      <p className="text-sm text-muted-foreground">{division.description}</p>
    </CardContent>
    <CardFooter>
      <Button variant="secondary" onClick={()=>navigate(`/service/${division.slug}`)} className="w-full">{division.cta}</Button>
    </CardFooter>
  </Card>
  )
}

export default DivisionsCard
