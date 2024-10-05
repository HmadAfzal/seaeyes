import { Card, CardContent } from "@/components/ui/card"
import { servicesDivisions } from "@/constants"
import { useParams } from "react-router-dom"

type Service = {
    title: string;
    description: string;
    icon: any;
}

type ServicesDivisions = {
    "business-formation": Service[];
    "visa-immigration": Service[];
    seafood: Service[];
    autoparts: Service[];
    construction: Service[];
}

const serviceDescriptions = {
    "business-formation": "We offer a full suite of business formation services to help you get started with ease. From company registration to licensing and legal compliance, our team ensures that your business is set up for success.",
    "visa-immigration": "Our visa and immigration experts assist businesses and individuals with securing work visas, residency permits, and investor visas. We help you navigate complex legal requirements and streamline the immigration process.",
    seafood: "We provide high-quality, sustainably sourced seafood to hotels, restaurants, and wholesalers. Our seafood supply chain is designed to deliver fresh and frozen products with the utmost efficiency and quality assurance.",
    autoparts: "We supply durable, high-performance auto parts and lubricants for commercial and industrial vehicles. From engine parts to brake systems, we ensure your fleet stays in top condition, maximizing performance and longevity.",
    construction: "We specialize in residential and commercial construction projects, offering complete project management from design to execution. Our construction services ensure that your projects are completed on time and within budget."
};

const serviceImages = {
    "business-formation": "/business.jpg",
    "visa-immigration": "/visa.jpg",
    seafood: "/seafood.jpg",
    autoparts: "/autoparts.jpg",
    construction: "/construction.jpg"
};

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
            <div className="container mx-auto px-6 py-16">
                <section className="mb-16">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="md:w-1/2 py-8 md:py-12 lg:py-16">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4 capitalize">{slug.replace('-', ' ')}</h1>
                            <p className="text-xl mb-8">
                                {serviceDescriptions[slug as SlugType]}
                            </p>
                        </div>
                        <div className="md:w-1/2 relative h-64 md:h-96 w-full rounded-lg overflow-hidden">
                            <img className="h-full w-full object-cover"
                                src={serviceImages[slug as SlugType]}
                                alt={`${slug.replace('-', ' ')} service`}
                            />
                        </div>
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-primary mb-8">Key Services</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {serviceData.map((service: Service, index: number) => (
                            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <CardContent className="p-6 md:p-8 flex items-start space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                            <service.icon className="w-6 h-6 text-primary" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
                                        <p className="text-gray-600">{service.description}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>

                <section className="text-center py-12">
                    <h2 className="text-3xl font-bold text-primary mb-4">Our Commitment to Excellence</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        At Sea Eyes International, we're dedicated to providing the highest quality services while ensuring the success of our clients. Our commitment to excellence drives us to continuously improve and innovate in all aspects of our business.
                    </p>
                </section>
            </div>
        </div>
    );
}