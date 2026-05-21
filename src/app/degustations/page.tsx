"use client";

import Image from "next/image";
import Link from "next/link";

export default function ArmagnacPage() {
  return (
    <main className="w-full bg-chateau-anthracite text-white min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        
        {/* HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-chateau-or block font-medium">
            L'Élixir des Siècles
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl tracking-wide leading-tight">
            Les Secrets de <br />
            <span className="italic font-normal text-chateau-pierre">l'Armagnac Millésimé</span>
          </h1>
          <div className="w-12 h-[1px] bg-chateau-or/60 mx-auto my-6" />
          <p className="font-sans text-base text-chateau-pierre/80 leading-relaxed tracking-wide max-w-2xl mx-auto">
            Plus ancienne eau-de-vie de France, l'Armagnac est l'âme vibrante de la Gascogne. Au Château de Projan, nous vous ouvrons les portes d'un monde de flacons précieux, d'alambics de cuivre et de chais centenaires obscurs où le temps fait son œuvre.
          </p>
        </div>

        {/* SECTION 1 : EXPÉRIENCE AU CHÂTEAU (Focus Dégustation Privée) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 relative h-[450px] sm:h-[550px] w-full shadow-2xl">
            <Image 
              src="/armagnac2.png" // Réutilisation directe de ton asset galerie (Dégustation d'Armagnac précieux)
              alt="Dégustation privée de vieux Armagnacs millésimés dans les salons du château"
              fill
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-5 space-y-6">
            <span className="font-sans text-xs tracking-widest uppercase text-chateau-or font-semibold">Initiation Confidentielle</span>
            <h2 className="font-serif text-3xl text-white tracking-wide">Le Salon des Millésimes</h2>
            <p className="font-sans text-sm text-chateau-pierre/80 leading-relaxed">
              Le soir venu, confortablement installé sous les boiseries de nos salons feutrés, laissez-vous guider par notre sommelier pour une <strong>initiation sensorielle exclusive</strong>. 
            </p>
            <p className="font-sans text-sm text-chateau-pierre/80 leading-relaxed">
              De la robe ambrée aux notes complexes de pruneau, de vanille et de rancio, chaque goutte raconte une année, un terroir et le savoir-faire unique des grands maîtres de chais de la région. Une expérience intime réservée aux amateurs de spiritueux d'exception.
            </p>
          </div>
        </div>

        {/* SECTION 2 : ROUTE DE L'ARMAGNAC (Focus SEO Extérieur/Domaines) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center lg:flex-row-reverse">
          <div className="lg:col-span-5 space-y-6 lg:order-2">
            <span className="font-sans text-xs tracking-widest uppercase text-chateau-or font-semibold">Œnotourisme en Gascogne</span>
            <h2 className="font-serif text-3xl text-white tracking-wide">Au Cœur du Bas-Armagnac</h2>
            <p className="font-sans text-sm text-chateau-pierre/80 leading-relaxed">
              Le Château de Projan est idéalement situé pour rayonner sur la célèbre <strong>Route de l'Armagnac</strong>. Nous avons tissé des liens privilégiés avec les plus prestigieux domaines familiaux voisins.
            </p>
            <p className="font-sans text-sm text-chateau-pierre/80 leading-relaxed">
              Notre conciergerie organise pour vous des visites privées hors du commun : poussez les portes de propriétés confidentielles, rencontrez les vignerons et assistez, en automne, au spectacle fascinant du réveil de l'alambic qui distille en continu au cœur de la nuit gasconne.
            </p>
            <div className="pt-2">
              <Link href="/decouvrir-le-gers" className="inline-block font-sans text-xs tracking-widest uppercase border border-chateau-or/40 text-chateau-or px-6 py-3 hover:bg-chateau-or hover:text-chateau-anthracite transition-all duration-300">
                Découvrir la région
              </Link>
            </div>
          </div>
          <div className="lg:col-span-7 relative h-[450px] sm:h-[550px] w-full shadow-2xl lg:order-1 bg-chateau-anthracite">
            <Image 
              src="/armagnac.png" // Idée d'illustration ci-dessous
              alt="Fûts de chêne séculaires alignés dans un chai d'Armagnac traditionnel dans le Gers"
              fill
              className="object-cover brightness-[0.75]"
            />
          </div>
        </div>

        {/* TRIPTYQUE DES FORMULES */}
        <div className="space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="font-sans text-xs tracking-widest uppercase text-chateau-or font-medium">Sur Mesure</span>
            <h2 className="font-serif text-2xl text-white tracking-wide">Nos Expériences Autour de l'Or Liquide</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/20 border border-chateau-pierre/5 p-8 space-y-4">
              <span className="font-serif text-chateau-or text-xs tracking-widest uppercase block">Option I</span>
              <h3 className="font-serif text-xl text-white">Découverte des Terroirs</h3>
              <p className="font-sans text-xs text-chateau-pierre/70 leading-relaxed">
                Une dégustation comparative de trois Armagnacs d’âges différents (VSOP, XO, Hors d'Âge) pour comprendre l’impact du passage des années sous le chêne gascon.
              </p>
            </div>

            <div className="bg-black/20 border border-chateau-pierre/5 p-8 space-y-4">
              <span className="font-serif text-chateau-or text-xs tracking-widest uppercase block">Option II</span>
              <h3 className="font-serif text-xl text-white">Les Grands Millésimes</h3>
              <p className="font-sans text-xs text-chateau-pierre/70 leading-relaxed">
                Le privilège rare de déguster des pièces d'exception issues de décennies sélectionnées. Voyagez dans le temps à travers des nectars d'une complexité rare.
              </p>
            </div>

            <div className="bg-black/20 border border-chateau-pierre/5 p-8 space-y-4">
              <span className="font-serif text-chateau-or text-xs tracking-widest uppercase block">Option III</span>
              <h3 className="font-serif text-xl text-white">Accords Mets & Spiritueux</h3>
              <p className="font-sans text-xs text-chateau-pierre/70 leading-relaxed">
                En parfaite harmonie avec notre équipe en cuisine, découvrez des alliances surprenantes et raffinées entre nos Armagnacs et des touches de chocolats grands crus ou pièces fines de notre terroir.
              </p>
            </div>
          </div>
        </div>

        {/* CTA RENTABILITÉ */}
        <div className="border border-chateau-pierre/10 p-8 sm:p-12 text-center max-w-4xl mx-auto bg-black/20 space-y-6">
          <h3 className="font-serif text-2xl text-white">Ajoutez une Touche d’Éternité à Votre Séjour</h3>
          <p className="font-sans text-sm text-chateau-pierre/70 max-w-xl mx-auto">
            Nos ateliers et dégustations privées sont organisés sur demande pour nos hôtes résidents ou lors de vos événements de prestige.
          </p>
          <Link href='/contact' className="font-sans text-xs tracking-widest uppercase bg-chateau-or text-chateau-anthracite font-semibold px-8 py-4 hover:bg-white transition-colors duration-300 cursor-pointer">
            Dégustation privée
          </Link>
        </div>

      </div>
    </main>
  );
}