import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
          <a href="/" className="flex items-center space-x-2">
            <img src="/seaeyes.png" className="h-10 mb-2" alt="SeaEyes Logo" />
          </a>
            <p className="text-gray-300">Comprehensive business solutions across multiple industries.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick as</h4>
            <nav className="flex flex-col space-y-2">
              <a href="/about" className="text-gray-300 hover:text-primary transition-colors">About Us</a>
              <a href="/services" className="text-gray-300 hover:text-primary transition-colors">Services</a>
              <a href="/contact" className="text-gray-300 hover:text-primary transition-colors">Contact Us</a>
              <a href="/terms" className="text-gray-300 hover:text-primary transition-colors">Terms & conditions</a>
              <a href="/privacy" className="text-gray-300 hover:text-primary transition-colors">Privacy policy</a>
            </nav>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Information</h4>
            <div className="space-y-2">
              <p className="text-gray-300 flex items-center">
                <MapPin className="mr-2 h-4 w-4" />
                Al Mawaleh South, Seeb, Muscat, Oman
              </p>
              <p className="text-gray-300 flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                +968 9485 0208
              </p>
              <p className="text-gray-300 flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                info@seaeyesintl.com
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">&copy; {currentYear} SeaEyes International. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer