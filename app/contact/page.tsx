"use client";

import { useState } from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Twitter, Send } from 'lucide-react';
import ParallaxHero from '@/components/animations/ParallaxHero';
import FadeIn from '@/components/animations/FadeIn';
import { useToast } from '@/hooks/use-toast';
const heroImage = '/hero-contact.jpg';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Nous rendre visite',
    lines: ['123 Avenue de l’Architecture', 'Quartier Design, NY 10001']
  },
  {
    icon: Mail,
    title: 'Nous écrire',
    lines: ['contact@dwp.ma', 'careers@dwp.com']
  },
  {
    icon: Phone,
    title: 'Nous appeler',
    lines: ['+1 (234) 567-890', '+1 (234) 567-891']
  },
];

const services = [
  'Rénovation de cuisine',
  'Conception de bureau',
  'Rénovation complète',
  'Espaces commerciaux',
  'Design extérieur',
  'Autre'
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message envoyé avec succès !",
      description: "Nous vous répondrons sous 24h.",
    });
    
    setFormData({
      name: '',
      email: '',
      address: '',
      service: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  return (
    <>
      {/* Top Contact Bar */}

      {/* Hero Section */}
      <ParallaxHero image={heroImage} height="50vh">
        <div className="container-wide px-6 lg:px-12 text-center">
          <FadeIn>
            <p className="text-primary-foreground/80 text-sm tracking-widest uppercase mb-6">
              Prendre contact
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="heading-display text-primary-foreground max-w-4xl mx-auto">
              Nous <span className="text-accent">contacter</span>
            </h1>
          </FadeIn>
        </div>
      </ParallaxHero>

      {/* Contact Cards */}
      <section className="py-16 lg:py-20 bg-background -mt-16 relative z-10">
        <div className="container-wide px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <FadeIn key={info.title} delay={index * 0.1}>
                <div className="bg-background border border-border p-8 text-center shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center border border-accent text-accent">
                    <info.icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-lg tracking-wide mb-4">{info.title}</h3>
                  {info.lines.map((line, i) => (
                    <p key={i} className="text-muted-foreground text-sm">{line}</p>
                  ))}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <FadeIn direction="left">
              <div>
                <p className="text-accent text-sm tracking-widest uppercase mb-4">Discutons ensemble</p>
                <h2 className="heading-section mb-6">
                  Lancez votre projet dès aujourd’hui
                </h2>
                <p className="text-body mb-8">
                  Vous avez un projet en tête ? Nous serions ravis d’en discuter. Remplissez le formulaire et l’un de nos conseillers design vous contactera sous 24h pour échanger sur votre vision et comment la concrétiser.
                </p>
                <div className="space-y-4">
                  <p className="text-sm"><strong>Horaires de bureau :</strong></p>
                  <p className="text-muted-foreground text-sm">Lundi - Vendredi : 9h00 - 18h00</p>
                  <p className="text-muted-foreground text-sm">Samedi : 10h00 - 16h00</p>
                  <p className="text-muted-foreground text-sm">Dimanche : Fermé</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <form onSubmit={handleSubmit} className="space-y-6 bg-background p-8 lg:p-10">
                <div>
                  <label htmlFor="name" className="block text-sm tracking-wider uppercase mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                    placeholder="Votre nom complet"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm tracking-wider uppercase mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm tracking-wider uppercase mb-2">
                    Adresse
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                    placeholder="Lieu du projet"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm tracking-wider uppercase mb-2">
                    Service souhaité
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
                  >
                    <option value="">Sélectionnez un service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm tracking-wider uppercase mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Parlez-nous de votre projet..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Prendre contact'}
                  <Send className="ml-2" size={18} />
                </button>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative h-[400px] lg:h-[500px]">
        <div className="absolute inset-0 grayscale">
          <iframe
            src="https://www.google.com/maps?q=N%C2%B0%204%20rue%202%20Quartier%20Plaisance%20V%C3%A9lodrome%2C%20Rue%20Ibn%20Hamdisse%2C%20Casablanca&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="DWP Studio Casablanca Location"
          />
        </div>
        {/* Map Marker Overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full">
          <div className="relative">
            <MapPin size={48} className="text-accent drop-shadow-lg" fill="hsl(var(--accent))" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
