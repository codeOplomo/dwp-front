
"use client";

import { ArrowRight, Lightbulb, Shield, Leaf, Award } from 'lucide-react';
import ParallaxHero from '@/components/animations/ParallaxHero';
import FadeIn from '@/components/animations/FadeIn';
import Image from 'next/image';
import Link from 'next/link';

const heroImage = '/hero-about.jpg';
const team1 = '/team-1.jpg';
const team2 = '/team-2.jpg';
const team3 = '/team-3.jpg';
const team4 = '/team-4.jpg';

const timeline = [
  { year: '2001', title: 'Création', description: 'DWP Studio a été fondé avec la volonté de transformer les espaces.' },
  { year: '2008', title: 'Expansion', description: 'Ouverture du deuxième bureau et croissance de l’équipe à plus de 50 professionnels.' },
  { year: '2015', title: 'Distinction', description: 'Réception du Prix National d’Excellence en Design.' },
  { year: '2020', title: 'Présence internationale', description: 'Expansion à 25 bureaux dans 15 pays.' },
  { year: '2024', title: 'Innovation', description: 'Lancement de notre initiative de design durable pour des projets éco-responsables.' },
];

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Nous repoussons sans cesse les limites et adoptons les nouvelles technologies pour offrir des solutions de design à la pointe.'
  },
  {
    icon: Shield,
    title: 'Qualité',
    description: 'L’excellence est une exigence. Chaque projet répond à nos standards rigoureux de savoir-faire.'
  },
  {
    icon: Leaf,
    title: 'Durabilité',
    description: 'Nous nous engageons pour un design responsable, bénéfique à la fois pour l’humain et la planète.'
  },
];

const team = [
  { name: 'James Wilson', role: 'Fondateur & Architecte principal', image: team3 },
  { name: 'Emma Rodriguez', role: 'Designer d’intérieur principale', image: team2 },
  { name: 'Michael Chen', role: 'Directeur de projet', image: team3 },
  { name: 'Sofia Martinez', role: 'Coordinatrice design', image: team4 },
];

const certifications = [
  'Certifié LEED', 'Membre AIA', 'Certifié ASID', 'Certifié NCIDQ', 'Conseil du Bâtiment Vert'
];

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <ParallaxHero image={heroImage} height="70vh">
        <div className="container-wide px-6 lg:px-12 text-center">
          <FadeIn>
            <p className="text-primary-foreground/80 text-sm tracking-widest uppercase mb-6">
              Notre histoire
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="heading-display text-primary-foreground max-w-4xl mx-auto">
              À <span className="text-accent">propos</span>
            </h1>
          </FadeIn>
        </div>
      </ParallaxHero>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <FadeIn direction="left">
              <div>
                <p className="text-accent text-sm tracking-widest uppercase mb-4">Notre parcours</p>
                <h2 className="heading-section mb-6">
                  Réaliser des rêves depuis 2001
                </h2>
                <p className="text-body mb-6">
                  Depuis plus de vingt ans, DWP Studio transforme les espaces et dépasse les attentes. Ce qui a commencé comme une petite agence d’architecture est devenu un cabinet reconnu mondialement, avec un portefeuille couvrant des projets résidentiels, commerciaux et publics.
                </p>
                <p className="text-body mb-8">
                  Notre succès repose sur l’innovation, la qualité du savoir-faire et un engagement indéfectible envers la vision de nos clients. Nous croyons que le design a le pouvoir d’améliorer la vie, et cette conviction guide toutes nos actions.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="space-y-8">
                {timeline.map((item) => (
                  <div key={item.year} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <span className="font-serif text-2xl text-accent">{item.year}</span>
                    </div>
                    <div className="pt-1">
                      <h3 className="font-serif text-lg tracking-wide mb-1">{item.title}</h3>
                      <p className="text-body text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-accent text-sm tracking-widest uppercase mb-4">Ce qui nous anime</p>
              <h2 className="heading-section">Nos valeurs fondamentales</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={index * 0.15}>
                <div className="text-center p-8 bg-background">
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-accent text-accent-foreground">
                    <value.icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl tracking-wide mb-4">{value.title}</h3>
                  <p className="text-body text-sm">{value.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-accent text-sm tracking-widest uppercase mb-4">Les experts</p>
              <h2 className="heading-section">Rencontrez notre équipe</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <FadeIn key={member.name} delay={index * 0.1}>
                <div className="group text-center">
                  <div className="image-hover aspect-[3/4] overflow-hidden mb-6 relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-serif text-lg tracking-wide mb-1">{member.name}</h3>
                  <p className="text-muted-foreground text-sm">{member.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team Photo */}
      <section className="section-padding-sm bg-secondary">
        <div className="container-wide">
          <FadeIn>
            <div className="image-hover aspect-[21/9] overflow-hidden relative">
              <Image
                src={team1}
                alt="The complete DWP Studio team"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container-wide px-6 lg:px-12">
          <FadeIn>
            <p className="text-center text-muted-foreground text-sm tracking-widest uppercase mb-10">
              Certifications & distinctions
            </p>
          </FadeIn>
          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-12">
            {certifications.map((cert, index) => (
              <FadeIn key={cert} delay={index * 0.05}>
                <div className="flex items-center gap-2 px-6 py-3 border border-border">
                  <Award size={16} className="text-accent" />
                  <span className="text-sm tracking-wider">{cert}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-primary">
        <div className="container-wide px-6 lg:px-12 text-center">
          <FadeIn>
            <h2 className="heading-section text-primary-foreground mb-6">
              Prêt à démarrer votre <span className="text-accent">projet</span> ?
            </h2>
            <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-8">
              Collaborons pour donner vie à votre vision. Notre équipe est prête à vous aider à créer quelque chose d’extraordinaire.
            </p>
            <Link href="/contact" className="btn-accent">
              Créons ensemble
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default About;
