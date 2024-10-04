import { useState } from 'react'
import { Facebook, Linkedin, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="bg-gray-100 rounded-lg p-4">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Column - Contact Form */}
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-6">Get in Touch with Sea Eyes International Business LLC</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column - Contact Info and Map */}
          <div className="bg-gray-50 p-8">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <p className="flex items-center"><MapPin className="mr-2" size={18} /> Al Mawaleh South, Seeb, Muscat, Oman</p>
                  <p className="flex items-center"><Phone className="mr-2" size={18} /> +968 9485 0208</p>
                  <p className="flex items-center"><Mail className="mr-2" size={18} /> info@seaeyesintl.com</p>
                  <p className="flex items-center"><Clock className="mr-2" size={18} /> Everyday: 9:00 am - 9:00 pm</p>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-6">Find Us On Map</h2>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.7758533095395!2d58.1825!3d23.5875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM1JzE1LjAiTiA1OMKwMTAnNTcuMCJF!5e0!3m2!1sen!2sus!4v1635180126544!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-4 mt-8 ">Follow Us</h2>
                <div className="flex space-x-4">
                  <a href="#" className="text-primary bg-blue-200 p-2 rounded-full"><Facebook size={20} /></a>
                  <a href="#" className="text-primary bg-blue-200 p-2 rounded-full"><Linkedin size={20} /></a>
                  <a href="#" className="text-primary bg-blue-200 p-2 rounded-full"><Instagram size={20} /></a>
                  <a href="#" className="text-primary bg-blue-200 p-2 rounded-full"><Twitter size={20} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}