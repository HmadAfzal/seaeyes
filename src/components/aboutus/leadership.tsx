import { Card, CardContent } from "@/components/ui/card"
export default function Leadership() {

  return (
    <section className="w-full py-20 overflow-hidden bg-gradient-to-br from-background to-secondary/20 rounded-3xl">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center text-center space-y-4 mb-12">
        <h2 className="text-4xl font-extrabold tracking-tight text-primary">
          Meet Our Visionary Leader
        </h2>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Guiding Sea Eyes International towards new horizons
        </p>
      </div>
    
      <div className="relative">
        <Card className="overflow-hidden shadow-2xl">
          <CardContent className="p-0">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-2/5 relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay" />
                <img
                  src="/ceo.jpg"
                  alt="CEO Name"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="lg:w-3/5 p-8 lg:p-12 flex items-center bg-card">
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-card-foreground">CEO Name</h3>
                  <p className="text-xl text-card-foreground/80 leading-relaxed">
                  [CEO Name] has [X] years of experience leading Sea Eyes International through global expansion, helping hundreds of businesses succeed across multiple industries.
                  </p>
                  <div className="mt-8 flex items-center space-x-4">
                    <div className="h-px flex-1 bg-border" />
                    <span className="text-muted-foreground font-medium">CEO & Founder</span>
                    <div className="h-px flex-1 bg-border" />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
  )
}