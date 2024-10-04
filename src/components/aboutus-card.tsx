import { Card, CardContent } from "@/components/ui/card"
interface Feature{
    icon:any;
    title:string;
    description:string;
}
const AboutusCard = ({feature}:{feature:Feature}) => {
  return (
    <Card  className="bg-primary/5">
                  <CardContent className="flex items-center space-x-4 p-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                    <div>
                      <h3 className="font-semibold">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
  )
}

export default AboutusCard
