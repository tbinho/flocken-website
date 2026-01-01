import { HeroBlock } from '@/components/marketing/HeroBlock';
import { FeatureBlock } from '@/components/marketing/FeatureBlock';
import { TestimonialBlock } from '@/components/marketing/TestimonialBlock';
import { CTABlock } from '@/components/marketing/CTABlock';
import Image from 'next/image';

export const metadata = {
  title: "Flocken - Ett enklare liv som hundägare",
  description: "Underlätta vardagen som hundägare med funktionerna Para, Passa, Rasta och Besöka. För ett bättre liv som hund.",
  openGraph: {
    title: "Flocken - Ett enklare liv som hundägare",
    description: "Underlätta vardagen som hundägare med funktionerna Para, Passa, Rasta och Besöka",
    images: ['/assets/flocken/generated/hero.png'],
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroBlock
        title="Ett enklare liv som hundägare"
        tagline="– gå med i Flocken"
        subtitle="Underlätta vardagen som hundägare med funktionerna Para, Passa, Rasta och Besöka. För ett bättre liv som hund."
        ctaPrimary={{ text: "App Store", href: "#" }}
        ctaSecondary={{ text: "Google Play", href: "#" }}
        image="/assets/flocken/generated/flocken_image_malua-arlo-coco-jumping-dog-park_1x1.jpeg"
        launchOffer="Få alla premiumfunktioner gratis i 6 månader om du skapar konto senast den 31 januari"
      />
      
      {/* Community Section */}
      <section className="section-padding bg-flocken-sand" id="om-appen">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-flocken-brown mb-6">
                Allt du behöver på ett ställe
              </h2>
              <p className="text-lg text-flocken-brown leading-relaxed">
                I Flocken viktiga funktioner för dig i vardagen som hundägare. 
                Allt i en app, framtagen av svenska hundägare.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-card">
              <Image
                src="/assets/flocken/generated/flocken_image_malua-arlo-coco-chasing-ball_16x9.jpeg"
                alt="Hundägare med sina hundar i hundparken"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
      
      <div id="funktioner">
        {/* Feature: Para - För Marco */}
        <FeatureBlock
          title="Hitta en lekkamrat eller parningspartner som lever upp till dina standarder"
          subtitle="Enkel filtrering efter dina kriterier. Direktkontakt med med verifierade hundägare direkt i appen."
          bullets={[
            "Filtrera på kön, ras, storlek och region",
            "Se vilka hälsotester hunden har",
            "Alla profiler BankID-verifierade",
            "Betydligt enklare än Facebook-grupper"
          ]}
          screenshot="/assets/flocken/screenshots/flocken_para_karta-alla-hundar.png"
          microCta="Se hur Para fungerar"
          reverse={false}
        />
        
        {/* Feature: Passa - För Anna */}
        <FeatureBlock
          title="Hitta en hundvakt du och din hund är trygg med"
          subtitle="Välj rätt hundvakt i ditt närområde eller passa varandras hundar."
          bullets={[
            "Verifierade hundvakter med tydliga profiler",
            "Ta kontakt direkt i appen",
            "Byt passning kostnadsfritt med andra",
            "Annonsera dina egna passningstjänster"
          ]}
          screenshot="/assets/flocken/screenshots/flocken_passa_lista-personer-som-kan-passa.png"
          microCta="Hitta hundvakter"
          reverse={true}
        />
        
        {/* Quote Break - Jonas */}
        <section className="py-16 bg-flocken-cream">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <blockquote className="text-center">
                <p className="text-2xl lg:text-3xl font-semibold text-flocken-brown italic mb-4">
                  "Flocken är navet i mitt hundliv numera."
                </p>
                <footer className="text-flocken-gray">
                  — Jonas, erfaren hundägare med 2 hundar
                </footer>
              </blockquote>
            </div>
          </div>
        </section>
        
        {/* Feature: Rasta - För Anders */}
        <FeatureBlock
          title="Upptäck nya rastplatser och rundor"
          subtitle="Logga dina promenader, hitta nya rundor och se hur mycket din hund rör sig."
          bullets={[
            "GPS-tracking för att spara dina rundor",
            "Dela med andra och gå andras rundor",
            "Markera dina favoriter",
            "Samla kilometer och få belöningar"
          ]}
          screenshot="/assets/flocken/screenshots/flocken_rasta_starta-promenad.png"
          microCta="Upptäck Rasta"
          reverse={false}
        />
        
        {/* Feature: Besöka - För Alla */}
        <FeatureBlock
          title="Var är du välkommen att ta med hunden?"
          subtitle="Karta över caféer, restauranger och barer som välkomnar hundar."
          bullets={[
            "Alla Googles samlade hundvänliga verksamheter",
            "Användare lägger till sina ställen",
            "Perfekt att ha med på resan",
            "Spara din favoritlista"
          ]}
          screenshot="/assets/flocken/screenshots/flocken_besoka_karta-alla.png"
          microCta="Så fungerar Besöka"
          reverse={true}
        />
      </div>
      
      {/* USPs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-flocken-brown mb-4">
              Varför Flocken?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-flocken-sand rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-flocken-olive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-flocken-brown mb-2">Helhetsplattform</h3>
              <p className="text-flocken-brown">Allt på ett ställe istället för flera appar och grupper i sociala medier.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-flocken-sand rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-flocken-olive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-flocken-brown mb-2">Lugn och vuxen</h3>
              <p className="text-flocken-brown">Ingen social press, bara praktiska funktioner på dina villkor.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-flocken-sand rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-flocken-olive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-flocken-brown mb-2">Svensk vardag</h3>
              <p className="text-flocken-brown">Gjord för hur vi lever här, av svenska hundägare för svenska hundägare</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials - Alla 4 personas */}
      <TestimonialBlock
        testimonials={[
          {
            quote: "Jag tänker inte para min hund med vem som helst. Med Flocken ser jag hälsotester och vet att alla ägaren är verifierad.",
            author: "Marco",
            role: "Golden Retriever-ägare"
          },
          {
            quote: "När jag får en bild där hon sover gott hos hundvakten känns allt bra. Trygghet är allt för mig.",
            author: "Anna",
            role: "Bichon Havanais-ägare"
          },
          {
            quote: "Fantastiskt att hitta nya favoritställen genom appen, så att hunden kan följa med på stan.",
            author: "Anders",
            role: "Australian Shepherd-ägare"
          },
          {
            quote: "Flocken är navet i mitt hundliv numera. Otroligt mycket smidigare än grupper i sociala medier.",
            author: "Jonas",
            role: "Blandras-ägare"
          }
        ]}
      />
      
      {/* Retention Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-flocken-brown">
              För att använda varje dag
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              <div className="space-y-2">
                <div className="w-12 h-12 mx-auto bg-flocken-sand rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-flocken-olive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="font-semibold text-flocken-brown">Dagliga promenader</p>
              </div>
              
              <div className="space-y-2">
                <div className="w-12 h-12 mx-auto bg-flocken-sand rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-flocken-olive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <p className="font-semibold text-flocken-brown">Kontakta hundägare</p>
              </div>
              
              <div className="space-y-2">
                <div className="w-12 h-12 mx-auto bg-flocken-sand rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-flocken-olive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <p className="font-semibold text-flocken-brown">Nya platser som tar emot hundar</p>
              </div>
              
              <div className="space-y-2">
                <div className="w-12 h-12 mx-auto bg-flocken-sand rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-flocken-olive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <p className="font-semibold text-flocken-brown">Passning, parning och lek</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA */}
      <CTABlock
        title="Gå med i flocken idag"
        subtitle="En helt ny app och samlingsplats för alla hundägare"
        ctaPrimary={{ text: "App Store", href: "#" }}
        ctaSecondary={{ text: "Google Play", href: "#" }}
        launchOffer="Gratis premiumfunktioner i 6 månader för konton som skapas före 31 jan."
      />
    </>
  );
}

