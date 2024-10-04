import { Facebook, Instagram, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-black py-12">
    <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
                <h3 className="text-2xl font-bold text-primary mb-4">SeaEyes</h3>
                <p className="text-gray-300">Bringing culinary excellence to your table.</p>
            </div>
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
                <h4 className="text-lg font-semibold mb-4">Quick as</h4>
                <nav className="flex flex-col space-y-2">
                    <a href="/privacy" className="text-gray-300 hover:text-primary transition-colors">Privacy policy</a>
                    <a href="/terms" className="text-gray-300 hover:text-primary transition-colors">Terms and services</a>
                    <a href="/faq" className="text-gray-300 hover:text-primary transition-colors">FAQs</a>
                </nav>
            </div>
            <div className="w-full md:w-1/3">
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                    <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                        <Facebook />
                    </a>
                    <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                        <Twitter />
                    </a>
                    <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                        <Instagram />
                    </a>
                </div>
            </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-300">&copy; {new Date().getFullYear()} SeaEyes. All rights reserved.</p>
        </div>
    </div>
</footer>
  )
}

export default Footer