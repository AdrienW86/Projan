"use client";

import Image from "next/image";
import Link from "next/link";

// Suggestions d'illustrations artistiques et immersives pour la Gascogne
const gersExperiences = [
  {
    id: "bastides",
    title: "Bastides & Plus Beaux Villages",
    description: "Explorez les ruelles médiévales de Larressingle, les arcades de Montréal-du-Gers ou la majesté de Lectoure. Un patrimoine de pierre blonde figé dans le temps.",
    image: "/gers-villages.jpg", // Idée d'illustration : Un gros plan texturé sur une arche en pierre blonde baignée de lumière avec une ombre douce
    alt: "Ruelle en pierre blonde d'un village médiéval gersois sous une lumière rasante"
  },
  {
    id: "vignobles",
    title: "Le Secret des Vignobles",
    description: "Parcourez les routes vallonnées à la rencontre des domaines de l'Armagnac et du Floc de Gascogne. Une immersion au cœur de chais séculaires où dort l'or liquide.",
    image: "/gers-vignes.jpg", // Idée d'illustration : Des rangées de vignes brumeuses au lever du soleil ou de vieux fûts de chêne sombres dans un chai éclairé à la bougie
    alt: "Vignes vallonnées de Gascogne au lever du jour dans la brume"
  },
  {
    id: "marches",
    title: "Les Marchés de Saison",
    description: "Vivez l'authenticité des marchés locaux de Samatan ou d'Eauze. Un festival de couleurs, de parfums du terroir et de rencontres sincères avec nos producteurs.",
    image: "/gers-marches.jpg", // Idée d'illustration : Une nature morte minimaliste sur un étal (gros plan esthétique sur des herbes fraîches, de l'ail violet de Cadours ou des melons de Lectoure)
    alt: "Produits de saison et étal de marché traditionnel dans le Gers"
  }
];

export default function DecouvrirGersPage() {
  return (
    <main className="w-full bg-chateau-anthracite text-white min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        
        {/* HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-chateau-or block font-medium">
            L'Éloge de la Lenteur
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl tracking-wide leading-tight">
            La Gascogne <br />
            <span className="italic font-normal text-chateau-pierre">Secrète & Authentique</span>
          </h1>
          <div className="w-12 h-[1px] bg-chateau-or/60 mx-auto my-6" />
          <p className="font-sans text-base text-chateau-pierre/80 leading-relaxed tracking-wide max-w-2xl mx-auto">
            Le Gers ne se visite pas, il se vit. Loin du tumulte du monde, la Toscane française déploie ses paysages de collines douces, ses tables généreuses et son art de vivre unique où le temps semble enfin suspendre son vol.
          </p>
        </div>

        {/* SECTION PANORAMIQUE : DOUCEUR DE VIVRE (Focus SEO Paysage) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 relative h-[450px] sm:h-[550px] w-full shadow-2xl">
            <Image 
              src="/vue2.avif" // Réutilisation de l'asset d'horizon gascon que tu possèdes
              alt="Les collines vallonnées du Gers et l'horizon gascon depuis le domaine"
              fill
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-5 space-y-6">
            <span className="font-sans text-xs tracking-widest uppercase text-chateau-or font-semibold">Une Terre Inspirante</span>
            <h2 className="font-serif text-3xl text-white tracking-wide">La Toscane Française</h2>
            <p className="font-sans text-sm text-chateau-pierre/80 leading-relaxed">
              Aux portes du Château de Projan, le paysage gersois s'offre comme un tableau vivant. Une succession de vallons parsemés de tournesols, de petits bois secrets et de clochers anciens se découpant sur la chaîne des Pyrénées par temps clair.
            </p>
            <p className="font-sans text-sm text-chateau-pierre/80 leading-relaxed">
              Adopter le <strong>slow tourisme</strong> en Gascogne, c'est s'accorder le luxe d'explorer sans se presser, guidé par la lumière changeante du Sud-Ouest et la poésie des routes de campagne.
            </p>
          </div>
        </div>

        {/* SECTION TRIPTYQUE : LES EXPÉRIENCES GASCONNES */}
        <div className="space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="font-sans text-xs tracking-widest uppercase text-chateau-or font-medium">Carnet de Route</span>
            <h2 className="font-serif text-2xl text-white tracking-wide">Les Incontournables de la Région</h2>
            <p className="font-sans text-xs text-chateau-pierre/70">
              Notre conciergerie a sélectionné pour vous des moments suspendus, à quelques minutes du domaine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {gersExperiences.map((exp) => (
              <div key={exp.id} className="bg-black/20 border border-chateau-pierre/5 overflow-hidden group">
                <div className="relative h-72 w-full bg-chateau-anthracite">
                  {/* Note : Remplacer par tes vrais visuels correspondants aux propositions ci-dessus */}
                  <Image 
                    src={exp.image} 
                    alt={exp.alt} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.85] group-hover:brightness-100"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-serif text-lg text-white group-hover:text-chateau-or transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <p className="font-sans text-xs text-chateau-pierre/80 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RETOUR VERS LE CHÂTEAU (Maillage Interne & Conversion) */}
        <div className="border border-chateau-pierre/10 p-8 sm:p-12 text-center max-w-4xl mx-auto bg-black/20 space-y-6">
          <h3 className="font-serif text-2xl text-white">Votre Point d'Ancrage en Gascogne</h3>
          <p className="font-sans text-sm text-chateau-pierre/70 max-w-xl mx-auto">
            Après une journée d'exploration au cœur du patrimoine gersois, retrouvez la sérénité de nos suites et les saveurs de notre table confidentielle.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link href="/suites-et-salons" className="font-sans text-xs tracking-widest uppercase bg-chateau-or text-chateau-anthracite font-semibold px-6 py-4 hover:bg-white transition-colors duration-300">
              Choisir sa Suite
            </Link>
            <Link href="/contact" className="font-sans text-xs tracking-widest uppercase border border-chateau-pierre/30 text-white px-6 py-4 hover:border-chateau-or transition-colors duration-300">
              Planifier son itinéraire
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}