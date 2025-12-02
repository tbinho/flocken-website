export const metadata = {
  title: "Integritetspolicy",
  description: "Flockens integritetspolicy och hantering av personuppgifter",
};

export default function IntegritetspolicyPage() {
  return (
    <>
      <h1>Integritetspolicy</h1>
      
      <p className="lead">
        Senast uppdaterad: {new Date().toLocaleDateString('sv-SE')}
      </p>
      
      <p>
        Flocken ("vi", "oss", eller "vår") respekterar din integritet och är engagerade i att skydda 
        dina personuppgifter. Denna integritetspolicy förklarar hur vi samlar in, använder, delar 
        och skyddar dina personuppgifter när du använder vår mobilapplikation Flocken.
      </p>
      
      <h2 id="personuppgiftsansvarig">1. Personuppgiftsansvarig</h2>
      <p>
        Personuppgiftsansvarig för behandlingen av dina personuppgifter är:
      </p>
      <ul>
        <li><strong>Företag:</strong> Spitakolus AB</li>
        <li><strong>Organisationsnummer:</strong> 559554-6101</li>
        <li><strong>Adress:</strong> Svängrumsgatan 46, 421 71 Västra Frölunda</li>
        <li><strong>E-post:</strong> support@spitakolus.com</li>
      </ul>
      
      <h2 id="vilka-uppgifter">2. Vilka personuppgifter samlar vi in?</h2>
      
      <h3 id="uppgifter-kontoinformation">2.1 Kontoinformation</h3>
      <p>När du skapar ett konto samlar vi in:</p>
      <ul>
        <li><strong>Namn och kontaktuppgifter:</strong> Fullständigt namn, e-postadress, telefonnummer</li>
        <li><strong>Profilbild:</strong> Valfri avatar/profilbild</li>
        <li><strong>Kontotyp:</strong> Privatperson eller kennel</li>
        <li><strong>Kennelinformation</strong> (endast för kennelkonton): Kennelnamn, organisationsnummer, 
        webbplats, beskrivning</li>
      </ul>
      
      <h3 id="uppgifter-hundprofiler">2.2 Hundprofiler</h3>
      <p>När du lägger upp en hund samlar vi in:</p>
      <ul>
        <li><strong>Grundläggande information:</strong> Namn, ras, kön, födelsedatum, vikt, höjd, färg</li>
        <li><strong>Hälsoinformation:</strong> Hälsotester, tidigare kullar, hälsobeskrivning, stamtavla</li>
        <li><strong>Bilder:</strong> Upp till 5 bilder per hund</li>
        <li><strong>Platsuppgifter:</strong> Adress, postnummer, stad, GPS-koordinater (longitude/latitude)</li>
        <li><strong>Beskrivningar:</strong> Temperament, hundprofil, vad du söker</li>
        <li><strong>Preferenser:</strong> Öppen för parning, lek/promenader, söker hundvakt, jakt/arbetshund</li>
      </ul>
      
      <h3 id="uppgifter-platsdata">2.3 Platsdata och GPS-tracking</h3>
      <p>Flocken använder platsdata för olika funktioner:</p>
      <ul>
        <li><strong>Hundprofiler (Para/Passa):</strong> GPS-koordinater för att visa hundar och hundvakter på karta. 
        Din exakta adress visas inte publikt – endast ungefärlig plats.</li>
        <li><strong>Promenader (Rasta):</strong> När du använder Rasta-funktionen spårar vi din GPS-position 
        i realtid för att logga din promenadrunda. Du kan välja att spara rundor privat eller dela dem med andra användare.</li>
        <li><strong>Hundvänliga platser (Besöka):</strong> GPS-koordinater för hundvänliga caféer och restauranger.</li>
      </ul>
      <p><strong>OBS:</strong> GPS-data från promenader sparas i vår databas och kan delas med andra användare om du väljer 
      att göra dina rundor offentliga.</p>
      
      <h3 id="uppgifter-meddelanden">2.4 Meddelanden och kommunikation</h3>
      <p>Vi lagrar:</p>
      <ul>
        <li><strong>Konversationer:</strong> Meddelanden mellan användare via appen</li>
        <li><strong>Metadata:</strong> Tidsstämplar, lässtatus, redigeringshistorik</li>
      </ul>
      
      <h3 id="uppgifter-bokningar">2.5 Bokningar och betalningar (Passa)</h3>
      <p>När du bokar hundvakt eller erbjuder hundvaktstjänster samlar vi in:</p>
      <ul>
        <li><strong>Bokningsuppgifter:</strong> Datum, tid, tjänst, pris, status</li>
        <li><strong>Betalningsinformation:</strong> Via Stripe (se avsnitt 5.2)</li>
        <li><strong>Recensioner:</strong> Betyg och recensioner av hundvakter</li>
      </ul>
      
      <h3 id="uppgifter-prenumeration">2.6 Prenumerations- och betalningsdata</h3>
      <p>Vi samlar in:</p>
      <ul>
        <li><strong>Prenumerationsstatus:</strong> Aktiv, utgången, avbruten</li>
        <li><strong>Paketinformation:</strong> Privatperson (22 kr/mån) eller kennel (60 kr/mån)</li>
        <li><strong>Betalningshistorik:</strong> Transaktioner, belopp, datum</li>
        <li><strong>Lanserings-kampanj:</strong> Information om din 6-månadersperiod gratis</li>
      </ul>
      
      <h3 id="uppgifter-automatisk">2.7 Automatiskt insamlad data</h3>
      <ul>
        <li><strong>Enhetsdata:</strong> Enhetstyp, operativsystem, app-version</li>
        <li><strong>Användningsdata:</strong> Funktioner du använder, tidsåtgång, statistik</li>
        <li><strong>Loggar:</strong> Tekniska loggar för felsökning</li>
      </ul>
      
      <h2 id="hur-anvander">3. Hur använder vi dina personuppgifter?</h2>
      
      <h3 id="anvander-tillhandahalla">3.1 Tillhandahålla tjänsten</h3>
      <ul>
        <li>Skapa och hantera ditt konto</li>
        <li>Visa dina hundar på kartan (Para)</li>
        <li>Matcha dig med andra hundägare</li>
        <li>Hantera bokningar av hundvakter (Passa)</li>
        <li>Spåra och visa dina promenader (Rasta)</li>
        <li>Visa hundvänliga platser (Besöka)</li>
      </ul>
      
      <h3 id="anvander-kommunikation">3.2 Kommunikation</h3>
      <ul>
        <li>Skicka meddelanden mellan användare</li>
        <li>Skicka bokningsbekräftelser och påminnelser</li>
        <li>Skicka viktiga uppdateringar om tjänsten</li>
      </ul>
      
      <h3 id="anvander-betalning">3.3 Betalningar</h3>
      <ul>
        <li>Hantera prenumerationer</li>
        <li>Behandla betalningar för hundvaktstjänster</li>
        <li>Skicka kvitton och fakturor</li>
      </ul>
      
      <h3 id="anvander-forbattra">3.4 Förbättra tjänsten</h3>
      <ul>
        <li>Analysera användningsmönster</li>
        <li>Förbättra funktionalitet</li>
        <li>Felsöka tekniska problem</li>
      </ul>
      
      <h2 id="rattslig-grund">4. Rättslig grund för behandling</h2>
      
      <p>Vi behandlar dina personuppgifter baserat på följande rättsliga grunder enligt GDPR:</p>
      
      <h3 id="grund-avtal">4.1 Fullgörande av avtal (Art. 6.1.b GDPR)</h3>
      <p>
        Behandling av dina personuppgifter är nödvändig för att tillhandahålla tjänsten du har registrerat dig för, 
        inklusive att visa hundprofiler, hantera bokningar, och behandla betalningar.
      </p>
      
      <h3 id="grund-samtycke">4.2 Samtycke (Art. 6.1.a GDPR)</h3>
      <p>
        För vissa behandlingar (t.ex. marknadsföringsutskick, platsdata för vissa funktioner) ber vi om ditt 
        uttryckliga samtycke. Du kan när som helst återkalla ditt samtycke i appens inställningar.
      </p>
      
      <h3 id="grund-intresse">4.3 Berättigat intresse (Art. 6.1.f GDPR)</h3>
      <p>
        Vi kan behandla dina uppgifter baserat på vårt berättigade intresse att:
      </p>
      <ul>
        <li>Förbättra tjänstens säkerhet och förhindra bedrägeri</li>
        <li>Analysera användning för att förbättra appen</li>
        <li>Kontakta dig angående tjänsterelaterade ärenden</li>
      </ul>
      
      <h2 id="delning">5. Delning av personuppgifter</h2>
      
      <h3 id="delning-anvandare">5.1 Med andra användare</h3>
      <p>Vissa uppgifter delas med andra användare för att tjänsten ska fungera:</p>
      <ul>
        <li><strong>Hundprofiler:</strong> Visas för andra användare på kartan (med ungefärlig plats)</li>
        <li><strong>Kontaktuppgifter:</strong> Delas med användare du chattar med</li>
        <li><strong>Promenader:</strong> Om du väljer att dela dina rundor publikt</li>
        <li><strong>Recensioner:</strong> Recensioner du skriver är offentliga</li>
      </ul>
      
      <h3 id="delning-tjanster">5.2 Med tredjepartstjänster</h3>
      
      <h4>Supabase (Backend och databas)</h4>
      <ul>
        <li><strong>Vad:</strong> All appdata lagras hos Supabase (PostgreSQL-databas)</li>
        <li><strong>Plats:</strong> Europa (GDPR-kompatibel)</li>
        <li><strong>Policy:</strong> <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">supabase.com/privacy</a></li>
      </ul>
      
      <h4>Stripe (Betalningar)</h4>
      <ul>
        <li><strong>Vad:</strong> Behandlar prenumerationsbetalningar och hundvakts-betalningar</li>
        <li><strong>Plats:</strong> USA (Privacy Shield-certifierad)</li>
        <li><strong>Policy:</strong> <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">stripe.com/privacy</a></li>
        <li><strong>OBS:</strong> Vi lagrar ALDRIG kreditkortsinformation – detta hanteras helt av Stripe</li>
      </ul>
      
      <h4>Google Maps API (Kartor och platsdata)</h4>
      <ul>
        <li><strong>Vad:</strong> Visar kartor, geocoding av adresser, hundvänliga platser</li>
        <li><strong>Policy:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></li>
      </ul>
      
      <h4>OpenStreetMap Nominatim (Geokodning)</h4>
      <ul>
        <li><strong>Vad:</strong> Konverterar adresser till GPS-koordinater</li>
        <li><strong>Policy:</strong> <a href="https://wiki.osmfoundation.org/wiki/Privacy_Policy" target="_blank" rel="noopener noreferrer">OSM Privacy Policy</a></li>
      </ul>
      
      <h3 id="delning-lag">5.3 Rättsliga krav</h3>
      <p>
        Vi kan dela dina uppgifter om det krävs enligt lag, rättsliga processer, eller för att skydda våra 
        eller andras rättigheter och säkerhet.
      </p>
      
      <h2 id="lagring">6. Hur länge sparar vi dina uppgifter?</h2>
      
      <ul>
        <li><strong>Aktiva konton:</strong> Så länge ditt konto är aktivt</li>
        <li><strong>Raderade konton:</strong> 30 dagar efter radering (för eventuella återställningar), 
        därefter raderas personuppgifter permanent</li>
        <li><strong>Meddelanden:</strong> Raderas 90 dagar efter kontoradering</li>
        <li><strong>Promenaddata:</strong> Sparas så länge du väljer att behålla dem (kan raderas i appen)</li>
        <li><strong>Betalningshistorik:</strong> 7 år (bokföringskrav)</li>
        <li><strong>Loggar:</strong> 90 dagar</li>
      </ul>
      
      <h2 id="rattigheter">7. Dina rättigheter enligt GDPR</h2>
      
      <p>Du har följande rättigheter gällande dina personuppgifter:</p>
      
      <h3 id="ratt-tillgang">7.1 Rätt till tillgång (Art. 15 GDPR)</h3>
      <p>
        Du har rätt att få bekräftelse på om vi behandlar dina personuppgifter och få en kopia av dem.
        <br/>
        <strong>Hur:</strong> I appen under Inställningar → "Exportera min data"
      </p>
      
      <h3 id="ratt-rattelse">7.2 Rätt till rättelse (Art. 16 GDPR)</h3>
      <p>
        Du har rätt att korrigera felaktiga uppgifter.
        <br/>
        <strong>Hur:</strong> Redigera direkt i appen under din profil och hundprofiler
      </p>
      
      <h3 id="ratt-radering">7.3 Rätt till radering ("Rätten att bli glömd", Art. 17 GDPR)</h3>
      <p>
        Du har rätt att få dina personuppgifter raderade under vissa omständigheter.
        <br/>
        <strong>Hur:</strong> I appen under Inställningar → "Radera konto"
      </p>
      
      <h3 id="ratt-begransning">7.4 Rätt till begränsning (Art. 18 GDPR)</h3>
      <p>
        Du har rätt att begära att behandlingen av dina uppgifter begränsas under vissa förutsättningar.
      </p>
      
      <h3 id="ratt-dataportabilitet">7.5 Rätt till dataportabilitet (Art. 20 GDPR)</h3>
      <p>
        Du har rätt att få dina uppgifter i ett strukturerat, maskinläsbart format.
        <br/>
        <strong>Hur:</strong> Exportera via appen (JSON-format)
      </p>
      
      <h3 id="ratt-invandning">7.6 Rätt att invända (Art. 21 GDPR)</h3>
      <p>
        Du har rätt att invända mot behandling som baseras på berättigat intresse.
      </p>
      
      <h3 id="ratt-klagomaal">7.7 Rätt att lämna klagomål</h3>
      <p>
        Du har rätt att lämna klagomål till Integritetsskyddsmyndigheten (IMY):
        <br/>
        <strong>Webbplats:</strong> <a href="https://www.imy.se" target="_blank" rel="noopener noreferrer">www.imy.se</a>
        <br/>
        <strong>E-post:</strong> imy@imy.se
      </p>
      
      <h2 id="sakerhet">8. Säkerhet</h2>
      
      <p>Vi vidtar tekniska och organisatoriska åtgärder för att skydda dina personuppgifter:</p>
      <ul>
        <li><strong>Kryptering:</strong> All data krypteras vid överföring (HTTPS/TLS)</li>
        <li><strong>Databassäkerhet:</strong> Row Level Security (RLS) i Supabase förhindrar obehörig åtkomst</li>
        <li><strong>BankID-verifiering:</strong> För identitetsverifiering vid känsliga funktioner</li>
        <li><strong>Åtkomstkontroll:</strong> Begränsad personal har tillgång till personuppgifter</li>
        <li><strong>Lösenord:</strong> Hashas med moderna algoritmer (bcrypt/scrypt)</li>
      </ul>
      
      <h2 id="barn">9. Barn</h2>
      
      <p>
        Flocken är inte avsedd för barn under 13 år. Vi samlar inte medvetet in personuppgifter från barn under 13 år. 
        Om du är förälder och upptäcker att ditt barn har skapat ett konto, kontakta oss omedelbart så raderar vi kontot.
      </p>
      
      <h2 id="andringar">10. Ändringar i integritetspolicyn</h2>
      
      <p>
        Vi kan uppdatera denna integritetspolicy från tid till annan. Väsentliga ändringar kommer att meddelas via:
      </p>
      <ul>
        <li>Notifikation i appen</li>
        <li>E-post till din registrerade e-postadress</li>
        <li>Uppdaterad "Senast uppdaterad"-datum överst på denna sida</li>
      </ul>
      
      <h2 id="kontakt">11. Kontakta oss</h2>
      
      <p>
        Om du har frågor om denna integritetspolicy eller hur vi behandlar dina personuppgifter, kontakta oss:
      </p>
      <ul>
        <li><strong>E-post:</strong> support@spitakolus.com</li>
        <li><strong>Postadress:</strong> Spitakolus AB, Svängrumsgatan 46, 421 71 Västra Frölunda</li>
        <li><strong>Ärende:</strong> Skriv "Integritet" i ämnesraden</li>
      </ul>
      
      <p className="mt-8 text-sm text-flocken-gray">
        Denna integritetspolicy är upprättad i enlighet med EU:s dataskyddsförordning (GDPR) och svensk dataskyddslag.
      </p>
    </>
  );
}

