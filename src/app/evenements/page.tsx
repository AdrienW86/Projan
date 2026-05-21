"use client";

import Image from "next/image";
import Link from "next/link";

export default function EvenementsPage() {
  return (
    <main className="w-full bg-chateau-anthracite text-white min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        
        {/* HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-chateau-or block font-medium">
            Des Instants Hors du Commun
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl tracking-wide leading-tight">
            Privatisations & <br />
            <span className="italic font-normal text-chateau-pierre">Événements d'Exception</span>
          </h1>
          <div className="w-12 h-[1px] bg-chateau-or/60 mx-auto my-6" />
          <p className="font-sans text-base text-chateau-pierre/80 leading-relaxed tracking-wide max-w-2xl mx-auto">
            Qu'il s'agisse de sceller une union sacrée, de réunir vos collaborateurs ou de célébrer un jalon de vie, le Château de Projan offre un cadre confidentiel et somptueux où chaque détail devient une œuvre d'art.
          </p>
        </div>

        {/* SECTION 1 : SÉMINAIRES & BUSINESS (Focus Corporate de Prestige) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 relative h-[450px] sm:h-[550px] w-full shadow-2xl">
            <Image 
              src="/image9.jpg" // Réutilisation de ton asset table de réception / grande salle
              alt="Grande salle de réception dressée pour un séminaire de direction au château"
              fill
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-5 space-y-6">
            <span className="font-sans text-xs tracking-widest uppercase text-chateau-or font-semibold">Haute Volée & Réflexion</span>
            <h2 className="font-serif text-3xl text-white tracking-wide">Séminaires & Retraites Corporate</h2>
            <p className="font-sans text-sm text-chateau-pierre/80 leading-relaxed">
              Offrez à vos équipes ou à vos administrateurs le luxe d'une déconnexion totale pour stimuler la créativité. Nos espaces de réception se transforment en salons de travail modulables, alliant technologies discrètes et boiseries inspirantes.
            </p>
            <p className="font-sans text-sm text-chateau-pierre/80 leading-relaxed">
              Entre deux sessions de travail, ponctuez vos journées de <strong>team building exclusifs</strong> : dégustation de vieux Armagnacs dans nos chais, tournois de tennis sur le domaine ou déjeuners champêtres face à l'horizon gascon.
            </p>
          </div>
        </div>

        {/* SECTION 2 : ÉVÉNEMENTS PRIVÉS & MARIAGES (Focus Célébrations) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center lg:flex-row-reverse">
          <div className="lg:col-span-5 space-y-6 lg:order-2">
            <span className="font-sans text-xs tracking-widest uppercase text-chateau-or font-semibold">Instants Uniques</span>
            <h2 className="font-serif text-3xl text-white tracking-wide">Célébrations & Mariages Intimistes</h2>
            <p className="font-sans text-sm text-chateau-pierre/80 leading-relaxed">
              Devenez les maîtres d'un domaine du XVIIe siècle le temps d'un week-end. Le Château de Projan se privatise intégralement pour accueillir vos plus belles fêtes de famille, anniversaires ou dîners de gala.
            </p>
            <p className="font-sans text-sm text-chateau-pierre/80 leading-relaxed">
              Imaginez un cocktail au bord de la <strong>piscine miroir</strong> au coucher du soleil, suivi d'une haute expérience culinaire orchestrée par notre table gastronomique sous les arbres séculaires du parc. Un souvenir impérissable conçu sur mesure pour vous et vos invités.
            </p>
            <div className="pt-2">
              <Link href="/la-table" className="inline-block font-sans text-xs tracking-widest uppercase border border-chateau-or/40 text-chateau-or px-6 py-3 hover:bg-chateau-or hover:text-chateau-anthracite transition-all duration-300">
                Découvrir l'Art de la Table
              </Link>
            </div>
          </div>
          <div className="lg:col-span-7 relative h-[450px] sm:h-[550px] w-full shadow-2xl lg:order-1 bg-chateau-anthracite">
            <Image 
              src="/image4.jpg" // Réutilisation de ton asset table de jardin sous les arbres / déjeuner champêtre
              alt="Table extérieure dressée pour une célébration privée sous les arbres du domaine"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* GRILLE DES PRESTATIONS EXCLUSIVES */}
        <div className="space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="font-sans text-xs tracking-widest uppercase text-chateau-or font-medium">Les Services Clés</span>
            <h2 className="font-serif text-2xl text-white tracking-wide">Une Logistique Haute Couture</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/20 border border-chateau-pierre/5 p-8 space-y-4">
              <h3 className="font-serif text-lg text-white">Privatisation Totale</h3>
              <p className="font-sans text-xs text-chateau-pierre/70 leading-relaxed">
                L'accès exclusif au château, à ses suites de prestige, ses salons, son terrain de tennis et sa piscine pour une intimité absolue, sans aucun autre regard extérieur.
              </p>
            </div>

            <div className="bg-black/20 border border-chateau-pierre/5 p-8 space-y-4">
              <h3 className="font-serif text-lg text-white">Restauration Dédiée</h3>
              <p className="font-sans text-xs text-chateau-pierre/70 leading-relaxed">
                Des menus conçus sur-mesure par notre brigade : du dîner gastronomique officiel sous les dorures au brunch décontracté ou à la soirée plancha haut de gamme dans le parc.
              </p>
            </div>

            <div className="bg-black/20 border border-chateau-pierre/5 p-8 space-y-4">
              <h3 className="font-serif text-lg text-white">Coordination Intégrale</h3>
              <p className="font-sans text-xs text-chateau-pierre/70 leading-relaxed">
                En lien direct avec vos équipes ou vos *wedding planners*, notre service conciergerie assure la logistique locale et les activités d’accueil (navettes aéroports, prestataires artistiques).
              </p>
            </div>
          </div>
        </div>

        {/* CTA DIRECTION FORMULAIRE */}
        <div className="border border-chateau-pierre/10 p-8 sm:p-12 text-center max-w-4xl mx-auto bg-black/20 space-y-6">
          <h3 className="font-serif text-2xl text-white">Créons Votre Événement Sur Mesure</h3>
          <p className="font-sans text-sm text-chateau-pierre/70 max-w-xl mx-auto">
            Chaque projet est unique. Notre équipe étudie vos besoins avec la plus grande discrétion pour vous proposer une offre personnalisée.
          </p>
          <Link href="/contact" className="inline-block font-sans text-xs tracking-widest uppercase bg-chateau-or text-chateau-anthracite font-semibold px-8 py-4 hover:bg-white transition-colors duration-300">
            Demander un devis personnalisé
          </Link>
        </div>

      </div>
    </main>
  );
}