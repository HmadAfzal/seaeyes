import { useState, useEffect } from 'react'
import { Menu, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Link } from 'react-router-dom'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface NavItem {
  name: string
  href: string
}

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <Link
    to={href}
    className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
  >
    {children}
  </Link>
)

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const navItems: NavItem[] = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ]

  const serviceItems: NavItem[] = [
    { name: 'All Services', href: '/services' },
    { name: 'Business & Visa Immigration', href: '/service/business-visa-immigration' },
    { name: 'Seafood', href: '/service/seafood' },
    { name: 'Autoparts & Lubricants', href: '/service/autoparts' },
    { name: 'Construction', href: '/service/construction' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-sm shadow-sm' : 'bg-background'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/seaeyes.png" className="h-8" alt="SeaEyes Logo" />
          </Link>
          <div className="flex items-center md:gap-8">
            <nav className="hidden md:flex items-center space-x-10">
              {navItems.map((item) => (
                <NavLink key={item.name} href={item.href}>
                  {item.name}
                </NavLink>
              ))}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-1">
                    <span>Services</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {serviceItems.map((item) => (
                    <DropdownMenuItem key={item.name}>
                      <Link to={item.href} className="w-full">
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open main menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-4">
                    <h3 className="font-semibold mb-2">Services</h3>
                    {serviceItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block py-2 text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar