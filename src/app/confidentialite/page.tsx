"use client";

import Link from "next/link";

export default function ConfidentialitePage() {
  return (
    <main className="w-full bg-chateau-anthracite text-white min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        
        {/* EN-TÊTE */}
        <div className="space-y-4">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-chateau-or block font-medium">
            Protection des données & RGPD
          </span>
          <h1 className="font-serif text-4xl tracking-wide text-chateau-pierre">
            Politique de <span className="italic font-normal text-white">Confidentialité</span>
          </h1>
          <div className="w-12 h-[1px] bg-chateau-or/60 my-4" />
        </div>

        {/* CONTENU JURIDIQUE */}
        <div className="font-sans text-sm text-chateau-pierre/80 space-y-8 leading-relaxed">
          
          <p className="italic">
            La présente Politique de Confidentialité a pour but d'informer les utilisateurs du site du <strong>Château de Projan</strong> sur la manière dont leurs données personnelles sont collectées, traitées et protégées conformément au Règlement Général sur la Protection des Données (RGPD).
          </p>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-white tracking-wide">1. Collecte des données personnelles</h2>
            <p>
              Nous collectons uniquement les informations personnelles que vous nous fournissez volontairement, notamment via le formulaire de contact présent sur le site :
            </p>
            <ul className="list-disc pl-5 space-y-1 text-chateau-pierre/70">
              <li><strong>Identité :</strong> Nom complet.</li>
              <li><strong>Coordonnées :</strong> Adresse électronique (email).</li>
              <li><strong>Contenu :</strong> Objet et corps du message lié à votre demande de réservation ou d'information.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-white tracking-wide">2. Finalité du traitement</h2>
            <p>
              Les données personnelles recueillies par la <strong>SARL DU CHATEAU</strong> sont exclusivement destinées à :
            </p>
            <ul className="list-disc pl-5 space-y-1 text-chateau-pierre/70">
              <li>Traiter et répondre à vos demandes de séjour, de privatisation ou de réservation de table.</li>
              <li>Assurer le suivi de la relation client lié aux activités hôtelières et de loisirs touristiques du domaine.</li>
            </ul>
            <p>
              Ces données ne sont jamais partagées, vendues ou cédées à des fins commerciales à des partenaires tiers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-white tracking-wide">3. Accès technique & Maintenance</h2>
            <p>
              Dans le cadre strict des opérations de maintenance technique, d'optimisation du site et de sécurité, l'agence de développement et design{" "}
              <Link 
                href="https://code-v.fr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-chateau-or hover:text-white underline decoration-chateau-or/40 hover:decoration-white transition-all duration-300"
              >
                Codev
              </Link>{" "}
              peut être amenée à superviser l'infrastructure numérique du site. Codev s'engage à respecter une confidentialité absolue concernant les données qui y transitent.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-white tracking-wide">4. Conservation des données</h2>
            <p>
              La SARL DU CHATEAU conserve vos données pour la durée strictement nécessaire à l'accomplissement des finalités mentionnées ci-dessus, ou dans la limite des durées de conservation légales imposées par la réglementation commerciale.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-white tracking-wide">5. Vos droits</h2>
            <p>
              Conformément à la réglementation en vigueur, vous disposez d'un droit d'accès, de rectification, de portabilité et de suppression des données vous concernant. Vous pouvez exercer ces droits à tout moment en adressant votre demande par courrier électronique à l'adresse suivante : <strong>contact@chateau-projan.com</strong>.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}