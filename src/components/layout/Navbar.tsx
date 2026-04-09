import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Tariff', path: '/tariff' },
  {
    label: 'Information',
    path: '#',
    children: [
      { label: 'Policies', path: '/policies' },
      { label: 'Terms & Conditions', path: '/terms' },
      { label: 'Property Rules', path: '/property-rules' },
    ],
  },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Reviews', path: '/feedback' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const location = useLocation()

  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setDropdownOpen(false)
  }, [location])

  const navBg = isHome
    ? isScrolled
      ? 'bg-charcoal-900/95 backdrop-blur-md shadow-lg'
      : 'bg-transparent'
    : 'bg-charcoal-900/95 backdrop-blur-md shadow-lg'

  const textColor = 'text-white'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex flex-col items-start">
            <span className="font-serif text-2xl text-gold-400 leading-none tracking-wide">Rubaru</span>
            <span className="font-body text-[9px] tracking-[0.4em] uppercase text-white/60 mt-0.5">Hill Resort</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative group">
                  <button
                    className={`flex items-center gap-1 font-body text-xs tracking-[0.15em] uppercase ${textColor} hover:text-gold-400 transition-colors duration-200`}
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    {link.label}
                    <ChevronDown size={12} className="transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                  <div
                    className="absolute top-full left-0 mt-2 w-52 bg-charcoal-900/98 backdrop-blur-md border border-white/10 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block px-5 py-3.5 font-body text-xs tracking-[0.1em] uppercase text-white/70 hover:text-gold-400 hover:bg-white/5 transition-all duration-150 border-b border-white/5 last:border-0"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-body text-xs tracking-[0.15em] uppercase transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-gold-400'
                      : `${textColor} hover:text-gold-400`
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              to="/login"
              className="ml-4 border border-gold-500 text-gold-400 px-6 py-2.5 font-body text-xs tracking-[0.2em] uppercase hover:bg-gold-500 hover:text-white transition-all duration-300"
            >
              My Portal
            </Link>
          </div>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-charcoal-900/98 backdrop-blur-md border-t border-white/10">
          <div className="px-6 py-6 flex flex-col gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    className="w-full flex items-center justify-between py-3 font-body text-xs tracking-[0.2em] uppercase text-white/70"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {dropdownOpen && (
                    <div className="pl-4 border-l border-gold-500/30">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className="block py-2.5 font-body text-xs tracking-[0.15em] uppercase text-white/60 hover:text-gold-400 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`py-3 font-body text-xs tracking-[0.2em] uppercase transition-colors ${
                    location.pathname === link.path ? 'text-gold-400' : 'text-white/70 hover:text-gold-400'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              to="/login"
              className="mt-4 border border-gold-500 text-gold-400 px-6 py-3 font-body text-xs tracking-[0.2em] uppercase text-center hover:bg-gold-500 hover:text-white transition-all"
            >
              My Portal
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
