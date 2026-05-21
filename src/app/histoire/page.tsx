"use client";

import Image from "next/image";
import Link from "next/link";

export default function HistoirePage() {
  return (
    <main className="w-full bg-chateau-anthracite text-white min-h-screen pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        
        {/* HERO SECTION POÉTIQUE */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-chateau-or block font-medium">
            Chroniques d'un Domaine Séculaire
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl tracking-wide leading-tight">
            Si le Château <br />
            <span className="italic font-normal text-chateau-pierre">pouvait parler...</span>
          </h1>
          <div className="w-12 h-[1px] bg-chateau-or/60 mx-auto my-6" />
          <p className="font-sans text-base text-chateau-pierre/80 leading-relaxed tracking-wide max-w-2xl mx-auto">
            Ancré dans la terre de Gascogne, le Château de Projan traverse les époques avec une grâce intemporelle. Des fondations médiévales à sa mue en demeure seigneuriale, découvrez les récits gravés dans la pierre blonde de notre domaine.
          </p>
        </div>

        {/* FRÈSQUE HISTORIQUE - SECTION 1 : LES ORIGINES (XVIIe siècle) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 relative h-[450px] sm:h-[550px] w-full shadow-2xl">
            <Image 
              src="/image5.jpg" // Idée de prompt d'image ci-dessous (Détail de la façade historique)
              alt="Détail architectural de la façade en pierre du XVIIe siècle du Château de Projan"
              fill
              className="object-cover brightness-[0.75]"
            />
          </div>
          <div className="lg:col-span-5 space-y-6">
            <span className="font-sans text-xs tracking-widest uppercase text-chateau-or font-semibold">1688 — L'Ancrage Seigneurial</span>
            <h2 className="font-serif text-3xl text-white tracking-wide">La Naissance d'un Domaine</h2>
            <p className="font-sans text-sm text-chateau-pierre/80 leading-relaxed">
              C’est au cœur du Grand Siècle que le château prend sa physionomie actuelle. Conçu à l'origine comme une demeure d'apparat pour la noblesse locale, il est pensé pour dominer les vallons du Gers et témoigner de la puissance de ses illustres bâtisseurs. 
            </p>
            <p className="font-sans text-sm text-chateau-pierre/80 leading-relaxed">
              Chaque bloc de pierre blonde, extrait des carrières de la région, a été taillé à la main pour capter la lumière dorée si particulière du Sud-Ouest. À cette époque, le domaine vit déjà au rythme de ses terres agricoles et des premières distillations qui feront la renommée de la Gascogne.
            </p>
          </div>
        </div>

        {/* FRÈSQUE HISTORIQUE - SECTION 2 : LA RENAISSANCE CONTEMPORAINE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center lg:flex-row-reverse">
          <div className="lg:col-span-5 space-y-6 lg:order-2">
            <span className="font-sans text-xs tracking-widest uppercase text-chateau-or font-semibold">Le Renouveau d'un Chef-d’œuvre</span>
            <h2 className="font-serif text-3xl text-white tracking-wide">De l'Histoire à l'Art Conjoint</h2>
            <p className="font-sans text-sm text-chateau-pierre/80 leading-relaxed">
              Traverser les siècles impose de savoir se réinventer. Après avoir abrité des générations d'épicuriens, le Château de Projan a bénéficié d'une restauration d'une exigence rare. L'enjeu ? Conserver l'âme des lieux — ses parquets d'origine, ses cheminées magistrales, ses volumes imposants — tout en y insufflant un esprit contemporain.
            </p>
            <p className="font-sans text-sm text-chateau-pierre/80 leading-relaxed">
              Aujourd'hui, les salons classiques côtoient des pièces d'art moderne, faisant du château un lieu de vie hybride, à la fois témoin du passé et vitrine de la création actuelle. 
            </p>
          </div>
          <div className="lg:col-span-7 relative h-[450px] sm:h-[550px] w-full shadow-2xl lg:order-1 bg-chateau-anthracite">
            <Image 
              src="/image2.jpg" // Réutilisation de ton superbe asset d'escalier ou de salon historique épuré
              alt="Mise en scène design au cœur de l'architecture historique du château"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* LES TROIS PILIERS DE NOTRE HÉRITAGE */}
        <div className="space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="font-sans text-xs tracking-widest uppercase text-chateau-or font-medium">Héritage</span>
            <h2 className="font-serif text-2xl text-white tracking-wide">Les Gardiens du Temps</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/20 border border-chateau-pierre/5 p-8 space-y-4">
              <h3 className="font-serif text-lg text-white">Le Parc & Les Arbres Rois</h3>
              <p className="font-sans text-xs text-chateau-pierre/70 leading-relaxed">
                Certains cèdres et chênes du domaine ont vu défiler les siècles. Ils forment aujourd'hui un écran de verdure protecteur, abritant une faune préservée et offrant une ombre bienveillante à nos résidents.
              </p>
            </div>

            <div className="bg-black/20 border border-chateau-pierre/5 p-8 space-y-4">
              <h3 className="font-serif text-lg text-white">L'Esprit d'Art</h3>
              <p className="font-sans text-xs text-chateau-pierre/70 leading-relaxed">
                Le château n'est pas un musée figé. Fidèle à la tradition des salons littéraires et artistiques d'autrefois, il continue d'accueillir des artistes et d'exposer des œuvres vibrantes entre ses murs sacrés.
              </p>
            </div>

            <div className="bg-black/20 border border-chateau-pierre/5 p-8 space-y-4">
              <h3 className="font-serif text-lg text-white">Le Terroir Préservé</h3>
              <p className="font-sans text-xs text-chateau-pierre/70 leading-relaxed">
                L'histoire du domaine est indissociable de celle de la Gascogne. Des cuisines au cellier, nous continuons de faire vivre les traditions artisanales qui font la fierté de notre coin de paradis gersois.
              </p>
            </div>
          </div>
        </div>

        {/* MAILLAGE INTERNE VERS LES SUITES */}
        <div className="border border-chateau-pierre/10 p-8 sm:p-12 text-center max-w-4xl mx-auto bg-black/20 space-y-6">
          <h3 className="font-serif text-2xl text-white">Devenez Acteur de son Histoire</h3>
          <p className="font-sans text-sm text-chateau-pierre/70 max-w-xl mx-auto">
            Séjourner au Château de Projan, c'est inscrire ses propres pas dans les pas de ceux qui, depuis plus de trois siècles, font battre le cœur de ce domaine.
          </p>
          <Link href="/contact" className="inline-block font-sans text-xs tracking-widest uppercase bg-chateau-or text-chateau-anthracite font-semibold px-8 py-4 hover:bg-white transition-colors duration-300">
            Écrire votre chapitre
          </Link>
        </div>

      </div>
    </main>
  );
}