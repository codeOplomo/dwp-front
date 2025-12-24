
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, Twitter, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setEmail('');
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/DWP-logo.png"
                alt="DWP Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Transformer les espaces avec un design innovant et un savoir-faire exceptionnel.<br />
              Votre vision, notre expertise.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg tracking-wider mb-6">Liens rapides</h4>
            <ul className="space-y-3">
              {[
                { en: 'Home', fr: 'Accueil' },
                { en: 'Services', fr: 'Services' },
                { en: 'About', fr: 'À propos' },
                { en: 'Contact', fr: 'Contact' },
                { en: 'Portfolio', fr: 'Portfolio' },
              ].map((item) => (
                <li key={item.en}>
                  <Link
                    href={item.en === 'Portfolio' ? '/#portfolio' : `/${item.en.toLowerCase() === 'home' ? '' : item.en.toLowerCase()}`}
                    className="text-primary-foreground/70 text-sm hover:text-accent transition-colors"
                  >
                    {item.fr}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg tracking-wider mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                'Rénovation de cuisine',
                'Conception de bureau',
                'Rénovation complète de maison',
                'Espaces commerciaux',
                'Conception extérieure',
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="text-primary-foreground/70 text-sm hover:text-accent transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-serif text-lg tracking-wider mb-6">Contactez-nous</h4>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  N° 4 rue 2 Quartier Plaisance Vélodrome, Rue Ibn Hamdisse, Casablanca
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  7 Rue Salsola 552, Riad Agdal, Rabat
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <a href="tel:+1234567890" className="text-primary-foreground/70 text-sm hover:text-accent transition-colors">
                  0522360314
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <a href="mailto:contact@dwp.ma" className="text-primary-foreground/70 text-sm hover:text-accent transition-colors">
                  contact@dwp.ma
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <h4 className="font-serif text-lg tracking-wider mb-4">Newsletter</h4>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre email"
                className="flex-1 bg-primary-foreground/10 border border-primary-foreground/20 px-4 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-accent"
                required
              />
              <button
                type="submit"
                className="bg-accent text-accent-foreground px-4 hover:bg-accent/90 transition-colors"
                aria-label="Subscribe"
              >
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-wide flex flex-col md:flex-row justify-between items-center py-6 px-6 lg:px-12 gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} DWP. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-primary-foreground/50 text-sm hover:text-accent transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="text-primary-foreground/50 text-sm hover:text-accent transition-colors">
              Conditions d&apos;utilisation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
