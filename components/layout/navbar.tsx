import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Accueil', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '' },
  { name: 'Blog', path: '' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Bar */}
      {/* <div className="hidden lg:block bg-primary text-primary-foreground">
        <div className="container-wide flex justify-between items-center py-2 px-6 lg:px-12">
          <div className="flex items-center gap-6 text-sm">
            <a href="tel:+1234567890" className="flex items-center gap-2 link-hover">
              <Phone size={14} />
              <span>0522360314</span>
            </a>
            <a href="mailto:contact@dwp.ma" className="flex items-center gap-2 link-hover">
              <Mail size={14} />
              <span>contact@dwp.ma</span>
            </a>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span>Lun - Ven : 9h00 - 18h00</span>
          </div>
        </div>
      </div> */}

      {/* Main Navbar */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`bg-transparent absolute top-0 lg:top-5 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-md shadow-sm lg:top-0'
            : 'bg-transparent'
        }`}
      >
        <nav className="container-wide flex items-center justify-between py-4 lg:py-5 px-6 lg:px-12">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/DWP-logo.png"
              alt="DWP Logo"
              width={120}
              height={40}
              className="h-8 lg:h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm tracking-wider uppercase transition-colors duration-300 ${
                  pathname === link.path
                    ? 'text-accent'
                    : isScrolled
                    ? 'text-white/80 hover:text-accent'
                    : 'text-white/80 hover:text-accent'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-outline text-white text-xs py-2.5 px-5"
            >
              Créons ensemble
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background pt-20 lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.path}
                    className={`text-2xl font-serif tracking-wider ${
                      pathname === link.path
                        ? 'text-accent'
                        : 'text-foreground'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link href="/contact" className="btn-primary mt-4">
                  Prendre contact
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
