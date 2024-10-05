import {  buttonVariants } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function PreFooter() {
    const profileImages = [
        "person1.png",
        "person2.png",
        "person3.png",
        "person4.png",
    ]


    return (
        <section className="bg-primary/10 text-white py-16 mb-16  lg:mx-20 md:mx-16 mx-4 rounded-xl relative overflow-hidden">
            <div className="container mx-auto max-w-4xl text-center relative z-10">
                <div className="flex justify-center -space-x-4 mb-8">
                    {profileImages.map((src, index) => (
                        <div key={index} className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                            <img
                                src={src}
                                alt={`Team member ${index + 1}`}
                                width={48}
                                height={48}
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
                <h2 className="text-3xl md:text-4xl text-black font-bold mb-4">Ready to Grow Your Business?                </h2>
                <p className="text-lg text-black mb-8">
                Get in touch with us today to discuss how SeaEyes International can help you achieve your business goals.
                </p>
                <Link to={'/contact'} className={buttonVariants({ variant: "default" })}>Contact Us</Link>
                
            </div>
            <div className="absolute left-0 bottom-0 w-full h-full opacity-10">
                <svg
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    className="w-full h-full"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                >
                    <path d="M0,0 Q50,100 100,0" />
                    <path d="M0,20 Q50,120 100,20" />
                    <path d="M0,40 Q50,140 100,40" />
                </svg>
            </div>
        </section>
    )
}