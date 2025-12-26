"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Home as HomeIcon,
  Building2,
  Ruler,
  Paintbrush,
} from "lucide-react";
// import ParallaxHero from '@/components/animations/ParallaxHero';
// import ParallaxHero from '@/components/animations/ParallaxHero';
import ParallaxVideoHero from "@/components/animations/ParallaxVideoHero";
import FadeIn from "@/components/animations/FadeIn";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import { ProductShowcase } from "@/components/ui/images-gallery";

// const heroImage = '/hero-home.jpg';
const portfolio1 = "/portfolio-1.jpg";
const portfolio2 = "/portfolio-2.jpg";
const portfolio3 = "/portfolio-3.jpg";
const portfolio4 = "/portfolio-4.jpg";
const testimonialBg = "/testimonial-bg.jpg";

const portfolioItems = [
  {
    image: portfolio1,
    title: "Espace de vie moderne",
    category: "Résidentiel",
  },
  { image: portfolio2, title: "Bureau d’entreprise", category: "Commercial" },
  { image: portfolio3, title: "Salle de bain de luxe", category: "Rénovation" },
  { image: portfolio4, title: "Maison contemporaine", category: "Extérieur" },
];

const services = [
  {
    icon: HomeIcon,
    title: "Rénovation de cuisine",
    description: "Transformez votre cuisine en un chef-d’œuvre culinaire",
  },
  {
    icon: Building2,
    title: "Conception commerciale",
    description: "Des espaces qui inspirent la productivité et la croissance",
  },
  {
    icon: Ruler,
    title: "Rénovation complète",
    description: "Transformation totale de votre espace de vie",
  },
  {
    icon: Paintbrush,
    title: "Design d’intérieur",
    description: "Des esthétiques soignées qui reflètent votre style",
  },
];

const stats = [
  { value: 215, suffix: "+", label: "Clients satisfaits" },
  { value: 550, suffix: "+", label: "Projets réalisés" },
  { value: 23, suffix: "+", label: "Années d’expérience" },
  { value: 25, suffix: "+", label: "Bureaux dans le monde" },
];

const testimonials = [
  {
    quote:
      "DWP Studio a transformé notre vision en réalité. Leur souci du détail et leur approche innovante ont dépassé toutes nos attentes.",
    author: "Sarah Mitchell",
    role: "Propriétaire, Manhattan",
  },
];

const partners = [
  {
    name: "OCP",
    image: "/dwp-part-6.png",
  },
  {
    name: "masen",
    image: "/dwp-part-1.png",
  },
  {
    name: "lamatem",
    image: "/dwp-part-2.png",
  },
  {
    name: "CMC",
    image: "/dwp-part-3.png",
  },
  {
    name: "aefe",
    image: "/dwp-part-4.png",
  },
  {
    name: "ABS",
    image: "/dwp-part-5.png",
  },
];

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      {/*
      <ParallaxHero image={heroImage}>
        <div className="container-wide px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-primary-foreground/80 text-sm tracking-widest uppercase mb-6">
              Studio d’architecture & rénovation
            </p>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="heading-display text-primary-foreground max-w-5xl mx-auto mb-8"
          >
            L’innovation dans chaque ligne.{' '}
            <span className="text-accent">Solidité</span> dans chaque réalisation.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/services" className="btn-accent">
              Découvrir nos réalisations
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </motion.div>
        </div>
      </ParallaxHero>
      */}
      
      <ParallaxVideoHero videoSrc="/dwp-video.webm">
        <div className="container-wide px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-primary-foreground/80 text-sm tracking-widest uppercase mb-6">
              Studio d’architecture & rénovation
            </p>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="heading-display text-primary-foreground max-w-5xl mx-auto mb-8"
          >
            L’innovation dans chaque ligne.{" "}
            <span className="text-accent">Solidité</span> dans chaque
            réalisation.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/services" className="btn-accent">
              Découvrir nos portfolio
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </motion.div>
        </div>
      </ParallaxVideoHero>

      {/* About Preview Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn direction="left">
              <div className="image-hover aspect-[4/5] overflow-hidden relative">
                <Image
                  src={portfolio1}
                  alt="Modern interior design showcase"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div>
                <div className="flex">
                  <p className="bg-accent p-2 rounded-sm text-sm tracking-widest uppercase mb-4">
                    À propos
                  </p>
                </div>
                <h2 className="heading-section mb-6">
                  Créer des espaces qui inspirent
                </h2>
                <p className="text-body mb-6">
                  Avec plus de deux décennies d’expérience, DWP Studio est à la
                  pointe de l’innovation architecturale. Nous croyons que chaque
                  espace a le potentiel de transformer des vies, et notre
                  mission est de libérer ce potentiel grâce à un design réfléchi
                  et un savoir-faire méticuleux.
                </p>
                <p className="text-body mb-8">
                  Notre équipe d’architectes et de designers dévoués travaille
                  en collaboration avec les clients pour créer des
                  environnements à la fois beaux, fonctionnels et durables.
                </p>
                <Link href="/about" className="btn-primary">
                  En savoir plus
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section id="portfolio" className="section-padding bg-secondary">
        <div className="container-wide">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="flex justify-center">
                <p className="bg-accent p-2 rounded-sm text-sm tracking-widest uppercase mb-4">
                  Nos réalisations
                </p>
              </div>
              <h2 className="heading-section">Projets à la une</h2>
            </div>
          </FadeIn>

           <ProductShowcase />

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {portfolioItems.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.1}>
                <div className="group relative image-hover aspect-square cursor-pointer">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/70 transition-all duration-500 flex items-end">
                    <div className="p-6 lg:p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="text-accent text-sm tracking-wider uppercase mb-2">
                        {item.category}
                      </p>
                      <h3 className="text-primary-foreground font-serif text-xl lg:text-2xl tracking-wide">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div> */}
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="flex justify-center">
                <p className="bg-accent p-2 rounded-sm text-sm tracking-widest uppercase mb-4">
                  Notre expertise
                </p>
              </div>
              <h2 className="heading-section">Nos services</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <FadeIn key={service.title} delay={index * 0.1}>
                <div className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-accent text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                    <service.icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl tracking-wide mb-3">
                    {service.title}
                  </h3>
                  <p className="text-body text-sm">{service.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <div className="text-center mt-12">
              <Link href="/services" className="btn-outline">
                Voir tous les services
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container-wide px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat) => (
              <AnimatedCounter
                key={stat.label}
                end={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0">
          <Image src={testimonialBg} alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative container-wide px-6 lg:px-12">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-accent text-sm tracking-widest uppercase mb-8">
                Témoignages
              </p>
              <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-primary-foreground leading-relaxed mb-8">
                &ldquo;{testimonials[0].quote}&rdquo;
              </blockquote>
              <div>
                <p className="text-primary-foreground font-medium">
                  {testimonials[0].author}
                </p>
                <p className="text-primary-foreground/60 text-sm">
                  {testimonials[0].role}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container-wide px-6 lg:px-12">
          <FadeIn>
            <div className="text-center">
              <div className="flex justify-center">
                <p className="bg-accent p-2 rounded-sm text-sm tracking-widest uppercase mb-4">
                  Certifications
                </p>
              </div>
              <h2 className="heading-section mb-8">Nos engagements qualité</h2>
              <div className="flex justify-center items-center gap-12">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground font-bold text-xl">ISO</span>
                  </div>
                  <p className="text-sm">Certification ISO</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground font-bold text-xl">HQE</span>
                  </div>
                  <p className="text-sm">Haute Qualité Environnementale</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container-wide px-6 lg:px-12">
          <FadeIn>
            <div className="text-center">
              <div className="flex justify-center">
                <p className="bg-accent p-2 rounded-sm text-sm tracking-widest uppercase mb-4">
                  Certifications
                </p>
              </div>
              <h2 className="heading-section mb-8">Nos engagements qualité</h2>
              <div className="flex justify-center items-center gap-12">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <Image src="/dwp-iso.png" alt="ISO Certification" width={90} height={90} />
                  </div>
                  <p className="text-sm">Certification ISO</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                    <Image src="/dwp-HQE.webp" alt="HQE Certification" width={90} height={90} />
                  </div>
                  <p className="text-sm">Haute Qualité Environnementale</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>


      {/* CTA Section */}
      <section className="section-padding bg-background">
        <div className="container-wide text-center">
          <FadeIn>
            <div className="flex justify-center">
              <p className="bg-accent p-2 rounded-sm text-sm tracking-widest uppercase mb-4">
                Prêt à commencer ?
              </p>
            </div>
            <h2 className="heading-section mb-8">
              Créons quelque chose de beau
            </h2>
            <Link href="/contact" className="btn-primary">
              Créons ensemble
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default Home;
