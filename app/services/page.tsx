"use client";

import Link from 'next/link';
import { ArrowRight, ChefHat, Building2, CornerUpRight, Home, Store, Trees, Check } from 'lucide-react';
import ParallaxHero from '@/components/animations/ParallaxHero';
import FadeIn from '@/components/animations/FadeIn';
import Image from 'next/image';

const heroImage = '/hero-services.jpg';
const portfolio1 = '/portfolio-1.jpg';
const portfolio2 = '/portfolio-2.jpg';
const portfolio3 = '/portfolio-3.jpg';
const portfolio4 = '/portfolio-4.jpg';
const team2 = '/team-2.jpg';

const services = [
  {
    icon: ChefHat,
    title: 'Rénovation de cuisine',
    description: 'Transformez votre cuisine en un paradis culinaire avec des appareils modernes, des rangements sur mesure et des finitions élégantes alliant fonctionnalité et style.',
    featured: true,
    image: portfolio3
  },
  {
    icon: Building2,
    title: 'Conception de bureau',
    description: 'Créez des espaces de travail inspirants qui stimulent la productivité et reflètent la culture de votre entreprise grâce à des solutions innovantes.',
    featured: false,
    image: portfolio2
  },
  {
    icon: CornerUpRight,
    title: 'Couloirs & Hallways',
    description: 'Optimisez vos espaces de transition avec des solutions de rangement astucieuses et des éléments de design qui valorisent chaque recoin.',
    featured: false,
    image: portfolio1
  },
  {
    icon: Home,
    title: 'Rénovation complète',
    description: 'Des transformations totales qui réinventent votre espace de vie, du sol au plafond, avec un design cohérent.',
    featured: false,
    image: portfolio4
  },
  {
    icon: Store,
    title: 'Espaces commerciaux',
    description: 'Concevez des environnements commerciaux qui améliorent l’expérience client et favorisent la réussite de votre entreprise.',
    featured: false,
    image: portfolio2
  },
  {
    icon: Trees,
    title: 'Design extérieur',
    description: 'Sublimez l’attrait de votre propriété avec des rénovations extérieures remarquables qui laissent une impression durable.',
    featured: false,
    image: portfolio4
  },
];

const processSteps = [
  { step: '01', title: 'Consultation', description: 'Nous commençons par une discussion approfondie pour comprendre votre vision, vos besoins et votre budget.' },
  { step: '02', title: 'Conception', description: 'Notre équipe élabore des concepts détaillés et des visualisations 3D pour votre validation.' },
  { step: '03', title: 'Planification', description: 'Nous développons des plans complets, sélectionnons les matériaux et établissons le calendrier.' },
  { step: '04', title: 'Exécution', description: 'Nos artisans qualifiés donnent vie au projet avec précision et soin.' },
  { step: '05', title: 'Livraison', description: 'Visite finale, contrôle qualité et remise de votre espace transformé.' },
];

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <ParallaxHero image={heroImage} height="70vh">
        <div className="container-wide px-6 lg:px-12 text-center">
          <FadeIn>
            <p className="text-primary-foreground/80 text-sm tracking-widest uppercase mb-6">
              Notre expertise
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="heading-display text-primary-foreground max-w-4xl mx-auto">
              Rénover votre <span className="text-accent">espace</span>
            </h1>
          </FadeIn>
        </div>
      </ParallaxHero>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-accent text-sm tracking-widest uppercase mb-4">Nos prestations</p>
              <h2 className="heading-section">Services de rénovation complets</h2>
            </div>
          </FadeIn>

          {/* Featured Service */}
          <FadeIn>
            <div className="mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-secondary p-8 lg:p-12">
                <div className="image-hover aspect-[4/3] overflow-hidden relative">
                  <Image
                    src={services[0].image}
                    alt={services[0].title}
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="w-14 h-14 mb-6 flex items-center justify-center border border-accent text-accent">
                    <ChefHat size={28} strokeWidth={1.5} />
                  </div>
                  <span className="text-accent text-xs tracking-widest uppercase">Service vedette</span>
                  <h3 className="heading-subsection mt-2 mb-4">{services[0].title}</h3>
                  <p className="text-body mb-6">{services[0].description}</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Check size={16} className="text-accent" />
                      Rangements et placards sur mesure
                    </li>
                    <li className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Check size={16} className="text-accent" />
                      Plans de travail et équipements haut de gamme
                    </li>
                    <li className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Check size={16} className="text-accent" />
                      Appareils économes en énergie
                    </li>
                  </ul>
                  <Link href="/contact" className="btn-primary">
                    Demander un devis
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Other Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(1).map((service, index) => (
              <FadeIn key={service.title} delay={index * 0.1}>
                <div className="group bg-secondary p-8 hover:bg-primary transition-all duration-500">
                  <div className="w-12 h-12 mb-6 flex items-center justify-center border border-accent text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                    <service.icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl tracking-wide mb-3 group-hover:text-primary-foreground transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-body text-sm group-hover:text-primary-foreground/70 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-accent text-sm tracking-widest uppercase mb-4">Notre méthode</p>
              <h2 className="heading-section">Notre processus</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <FadeIn key={step.step} delay={index * 0.1}>
                <div className="text-center lg:text-left">
                  <span className="font-serif text-5xl text-accent/30">{step.step}</span>
                  <h3 className="font-serif text-xl tracking-wide mt-2 mb-3">{step.title}</h3>
                  <p className="text-body text-sm">{step.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team Testimonial */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="left">
              <div className="image-hover aspect-[3/4] overflow-hidden relative">
                <Image
                  src={team2}
                  alt="Lead Designer"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div>
                <p className="text-accent text-sm tracking-widest uppercase mb-4">Message de notre équipe</p>
                <blockquote className="font-serif text-2xl lg:text-3xl font-light leading-relaxed mb-8">
                  « Chaque projet de rénovation est une opportunité de créer quelque chose d’extraordinaire.
                  Nous abordons chaque espace avec un regard neuf et l’engagement de dépasser les attentes. »
                </blockquote>
                <div>
                  <p className="font-medium">Emma Rodriguez</p>
                  <p className="text-muted-foreground text-sm">Designer d’intérieur principale</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-primary">
        <div className="container-wide px-6 lg:px-12 text-center">
          <FadeIn>
            <h2 className="heading-section text-primary-foreground mb-6">
              Envie de <span className="text-accent">rénover</span> ?
            </h2>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-8">
              Discutons de votre projet et donnons vie à vos idées. Planifiez une consultation gratuite dès aujourd’hui.
            </p>
            <Link href="/contact" className="btn-accent">
              Démarrer votre projet
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default Services;
