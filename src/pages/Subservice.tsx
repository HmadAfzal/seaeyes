import { Card, CardContent } from "@/components/ui/card";
import { servicesDivisions } from "@/constants";
import { useParams } from "react-router-dom";

type Service = {
    title: string;
    description: string;
    icon: any;
}

type ServicesDivisions = {
    seafood: Service[];
    autoparts: Service[];
    construction: Service[];
}

export default function Subservice() {

    const { slug } = useParams<{ slug?: string }>();
    type SlugType = keyof ServicesDivisions;
    const serviceData = slug && (servicesDivisions[slug as SlugType]);


    if (!serviceData) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
                <div className="container mx-auto px-6 py-16 text-center">
                    <h1 className="text-4xl font-bold text-primary">Service not found</h1>
                    <p className="text-xl text-gray-600">The requested service does not exist.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            <div className="container mx-auto px-6 py-16 ">
                <section>
                    <div className="flex items-center">
                        <div className="py-8 md:py-12 lg:py-16 max-w-2xl">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">{slug.toUpperCase()}</h1>
                            <p className="text-xl mb-8">
                                Delivering premium, sustainably sourced {slug} to meet your business needs.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="grid md:grid-cols-2 pb-20 gap-8">
                    {serviceData.map((service: Service, index: number) => (
                        <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <CardContent className="p-6 md:p-8 flex items-start space-x-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                        <service.icon className="w-6 h-6 text-primary" />
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-primary mb-2">{service.title}</h2>
                                    <p className="text-gray-600">{service.description}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </section>

                <section className="text-center py-12">
                    <h2 className="text-3xl font-bold text-primary mb-4">Our Commitment to Sustainability</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        At Sea Eyes International, we're dedicated to providing the highest quality seafood while ensuring the long-term health of our oceans. Our sustainable practices support local fishing communities and preserve marine ecosystems for future generations.
                    </p>
                </section>
            </div>
        </div>
    );
}
