"use client";

export default function CGVPage() {
  return (
    <main className="w-full bg-chateau-anthracite text-white min-h-screen pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        
        {/* EN-TÊTE */}
        <div className="space-y-4">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-chateau-or block font-medium">
            Séjours & Prestations Hôtelières
          </span>
          <h1 className="font-serif text-4xl tracking-wide text-chateau-pierre">
            Conditions Générales <span className="italic font-normal text-white">de Vente</span>
          </h1>
          <div className="w-12 h-[1px] bg-chateau-or/60 my-4" />
        </div>

        {/* CONTENU JURIDIQUE */}
        <div className="font-sans text-sm text-chateau-pierre/80 space-y-8 leading-relaxed">
          
          <p className="italic">
            Les présentes conditions générales de vente s'appliquent de plein droit à toutes les réservations d'hébergement et prestations associées conclues auprès de la <strong>SARL DU CHATEAU</strong>, que ce soit en direct ou via son écosystème numérique.
          </p>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-white tracking-wide">1. Tarification et Clôture des Exercices</h2>
            <p>
              Nos prix sont affichés en EUR, toutes taxes comprises (TVA applicable au jour de la commande), et s'entendent par chambre et par nuit. La taxe de séjour, collectée pour le compte de la municipalité, s'ajoute au montant global et est payable sur place.
            </p>
            <p>
              La facturation définitive s'établit sur la base des réservations souscrites. Les exercices commerciaux de l'entreprise se clôturent annuellement au 31 décembre.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-white tracking-wide">2. Garantie de Réservation</h2>
            <p>
              Toute réservation, pour être confirmée par nos services, doit être adossée à une carte bancaire valide ou faire l'objet du règlement d'un acompte, selon la nature de l'offre d'hébergement ou de loisirs touristiques choisie.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-white tracking-wide">3. Annulation et Non-présentation</h2>
            <p>
              Sauf mention contraire lors de votre réservation (tarifs fermes non-remboursables), l'annulation de votre séjour est sans frais jusqu'à <strong>7 jours</strong> avant la date planifiée de votre arrivée. Passé ce délai, ou en cas de non-présentation au domaine (no-show), la SARL DU CHATEAU retiendra l'intégralité de la première nuit ou la totalité de l'acompte versé.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl text-white tracking-wide">4. Règlement des Litiges</h2>
            <p>
              En cas de contestation relative à l'interprétation ou à l'exécution des présentes conditions, et à défaut de résolution amiable auprès de notre direction, les tribunaux compétents seront ceux du ressort du siège social de l'entreprise (500 ROUTE DU CHATEAU, 32400 PROJAN).
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}