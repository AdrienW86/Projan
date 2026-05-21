"use client";

import Link from "next/link";

export default function MentionsLegalesPage() {
  return (
    <main className="w-full bg-chateau-anthracite text-white min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        
        {/* EN-TÊTE */}
        <div className="space-y-4">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-chateau-or block font-medium">
            Transparence & Cadre Légal
          </span>
          <h1 className="font-serif text-4xl tracking-wide text-chateau-pierre">
            Mentions <span className="italic font-normal text-white">Légales</span>
          </h1>
          <div className="w-12 h-[1px] bg-chateau-or/60 my-4" />
        </div>

        {/* CONTENU JURIDIQUE */}
        <div className="font-sans text-sm text-chateau-pierre/80 space-y-8 leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="font-serif text-xl text-white tracking-wide">1. Édition du site</h2>
            <p>
              En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site internet l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
            </p>
            <ul className="list-disc pl-5 space-y-1 text-chateau-pierre/70">
              <li><strong>Propriétaire :</strong> SARL DU CHATEAU, Société à responsabilité limitée au capital social de 600 000 EUR, immatriculée au Registre National des Entreprises (RNE) sous le numéro SIREN 347 985 319.</li>
              <li><strong>Adresse du siège social :</strong> 500 ROUTE DU CHATEAU, 32400 PROJAN, France.</li>
              <li><strong>Responsable de la publication :</strong> Villagrasa Nicolas — Contact : contact@chateau-projan.com.</li>
              <li>
                <strong>Design & Développement : </strong> 
                <Link 
                  href="https://code-v.fr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-chateau-or hover:text-white underline decoration-chateau-or/40 hover:decoration-white transition-all duration-300"
                >
                  Codev (code-v.fr)
                </Link>
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-white tracking-wide">2. Activité et réglementation</h2>
            <p>
              La société exerce une activité de nature commerciale (Code APE 5510Z - Hôtels et hébergement similaire) dont l'objet social englobe l'hôtellerie, la restauration ainsi que les loisirs touristiques.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-white tracking-wide">3. Hébergement</h2>
            <p>
              Le site est hébergé par <strong>Vercel Inc.</strong>, situé au 340 S Lemon Ave #4133 Walnut, CA 91789, États-Unis.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-white tracking-wide">4. Propriété intellectuelle</h2>
            <p>
              La structure générale ainsi que les textes, codes, images animées ou non, et tous les autres éléments composant ce site sont la propriété exclusive de la <strong>SARL DU CHATEAU</strong> ou font l'objet d'un droit d'usage régulier. 
            </p>
            <p>
              Toute représentation ou reproduction totale ou partielle de ce site, par quelque procédé que ce soit, sans l'autorisation expresse et écrite de l'exploitant est strictement interdite et constituerait une contrefaçon sanctionnée par les articles L 335-2 et suivants du Code de la propriété intellectuelle.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-white tracking-wide">5. Données personnelles</h2>
            <p>
              Conformément au règlement général sur la protection des données (RGPD), les informations recueillies via notre formulaire de contact font l'objet d'un traitement informatique destiné exclusivement à la gestion de vos demandes de séjour. Elles sont conservées par la SARL DU CHATEAU et ne sont en aucun cas cédées à des tiers. Vous disposez d'un droit d'accès, de rectification et de suppression de vos données en écrivant à contact@chateau-projan.com.
            </p>
          </section>
          
        </div>
      </div>
    </main>
  );
}