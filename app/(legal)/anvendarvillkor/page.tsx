export const metadata = {
  title: "Användarvillkor",
  description: "Användarvillkor och regler för att använda Flocken",
};

export default function AnvendarvillkorPage() {
  return (
    <>
      <h1>Användarvillkor</h1>
      
      <p className="lead">
        Senast uppdaterad: {new Date().toLocaleDateString('sv-SE')}
      </p>
      
      <p>
        Välkommen till Flocken! Dessa användarvillkor ("Villkor") reglerar din användning av mobilapplikationen 
        Flocken ("Appen", "Tjänsten") som tillhandahålls av Spitakolus AB ("vi", "oss", "vår").
      </p>
      
      <p>
        Genom att skapa ett konto och använda Flocken godkänner du dessa villkor. Om du inte godkänner villkoren, 
        vänligen använd inte tjänsten.
      </p>
      
      <h2 id="definitioner">1. Definitioner</h2>
      <ul>
        <li><strong>"Användare":</strong> Person som har skapat ett konto i Flocken</li>
        <li><strong>"Hundprofil":</strong> Profil för en hund som läggs upp av en användare</li>
        <li><strong>"Para":</strong> Funktion för att matcha hundar för parning eller lek</li>
        <li><strong>"Passa":</strong> Funktion för att hitta och boka hundvakter</li>
        <li><strong>"Rasta":</strong> Funktion för att spåra och dela promenader</li>
        <li><strong>"Besöka":</strong> Funktion för att hitta hundvänliga platser</li>
        <li><strong>"Innehåll":</strong> All information, bilder, text och data som läggs upp av användare</li>
      </ul>
      
      <h2 id="konto">2. Konto och registrering</h2>
      
      <h3 id="konto-skapa">2.1 Skapa konto</h3>
      <ul>
        <li>Du måste vara minst 13 år för att skapa ett konto</li>
        <li>Du måste ange korrekt och fullständig information</li>
        <li>Du är ansvarig för att hålla dina inloggningsuppgifter säkra</li>
        <li>Ett konto får inte delas med andra personer</li>
        <li>Du är ansvarig för all aktivitet som sker via ditt konto</li>
      </ul>
      
      <h3 id="konto-typer">2.2 Kontotyper</h3>
      <p>Flocken erbjuder två kontotyper:</p>
      <ul>
        <li><strong>Privatperson:</strong> För enskilda hundägare</li>
        <li><strong>Kennel:</strong> För registrerade kennlar med organisationsnummer</li>
      </ul>
      
      <h3 id="konto-verifiering">2.3 BankID-verifiering</h3>
      <p>
        Vissa funktioner kräver att du verifierar din identitet med BankID. Detta gäller särskilt för:
      </p>
      <ul>
        <li>Hundvaktstjänster (Passa)</li>
        <li>Parning (Para) med premiumfunktioner</li>
        <li>Kennelkonton</li>
      </ul>
      
      <h2 id="prenumeration">3. Prenumeration och betalning</h2>
      
      <h3 id="pren-lansering">3.1 Lanserings-kampanj 🎉</h3>
      <p><strong>Gratis i 6 månader för tidiga användare:</strong></p>
      <ul>
        <li>Alla som skapar konto innan 2025-12-31 får 6 månaders fri användning</li>
        <li>Efter 6 månader övergår kontot automatiskt till betald prenumeration</li>
        <li>Du kan avsluta prenumerationen när som helst innan fri period löper ut</li>
        <li>Ingen bindningstid – du kan säga upp månadsvis</li>
      </ul>
      
      <h3 id="pren-priser">3.2 Priser efter fri period</h3>
      <p><strong>Privatperson:</strong></p>
      <ul>
        <li>22 kr/månad (faktureras månadsvis)</li>
        <li>190 kr/år (faktureras årligen, motsvarar ~16 kr/mån)</li>
      </ul>
      
      <p><strong>Kennel:</strong></p>
      <ul>
        <li>60 kr/månad (faktureras månadsvis)</li>
        <li>580 kr/år (faktureras årligen, motsvarar ~48 kr/mån)</li>
      </ul>
      
      <h3 id="pren-betalning">3.3 Betalning och fakturering</h3>
      <ul>
        <li>Betalning sker via Stripe (kreditkort, betalkort)</li>
        <li>Prenumerationen förnyas automatiskt varje månad/år</li>
        <li>Du får kvitto via e-post efter varje betalning</li>
        <li>Priser anges inklusive moms</li>
      </ul>
      
      <h3 id="pren-uppsagning">3.4 Uppsägning</h3>
      <ul>
        <li>Du kan säga upp prenumerationen när som helst i appens inställningar</li>
        <li>Uppsägning träder i kraft vid nästa faktureringsperiod</li>
        <li>Ingen återbetalning sker för redan betalda perioder</li>
        <li>Vid uppsägning behåller du tillgång till funktionerna till periodens slut</li>
      </ul>
      
      <h3 id="pren-priser-andring">3.5 Prisändringar</h3>
      <ul>
        <li>Vi förbehåller oss rätten att ändra priser</li>
        <li>Prisändringar meddelas minst 30 dagar i förväg</li>
        <li>Om du inte godkänner nya priser kan du säga upp prenumerationen</li>
      </ul>
      
      <h2 id="funktioner">4. Tjänstens funktioner</h2>
      
      <h3 id="funk-para">4.1 Para (Hundmatchning)</h3>
      <p><strong>Tillåten användning:</strong></p>
      <ul>
        <li>Hitta hundar för parning eller lek</li>
        <li>Filtrera på ras, storlek, hälsotester</li>
        <li>Kontakta andra hundägare</li>
      </ul>
      
      <p><strong>Användaransvar:</strong></p>
      <ul>
        <li>Du ansvarar för att uppge korrekta uppgifter om din hund</li>
        <li>Hälsotester och stamtavlor måste vara äkta och verifierbara</li>
        <li>Du ansvarar för alla överenskommelser med andra användare</li>
        <li>Flocken är inte part i några avtal mellan användare</li>
        <li>Vi tar inget ansvar för resultatet av parningar som sker via appen</li>
      </ul>
      
      <h3 id="funk-passa">4.2 Passa (Hundvaktstjänster)</h3>
      <p><strong>För hundvakter:</strong></p>
      <ul>
        <li>BankID-verifiering krävs för att erbjuda hundvaktstjänster</li>
        <li>Du måste ange korrekta uppgifter om erfarenhet och tjänster</li>
        <li>Du ansvarar för hundens säkerhet under passning</li>
        <li>Du måste ha lämplig försäkring</li>
      </ul>
      
      <p><strong>För hundägare:</strong></p>
      <ul>
        <li>Du ansvarar för att ge korrekta instruktioner om hundens behov</li>
        <li>Du måste informera om medicinska behov eller beteendeproblem</li>
        <li>Betalning sker via Stripe (appen tar ingen provision)</li>
      </ul>
      
      <p><strong>Ansvarsbegränsning:</strong></p>
      <ul>
        <li>Flocken är en förmedlingsplattform – vi är inte hundvakt-tjänsten</li>
        <li>Vi kontrollerar inte hundvakternas kompetens eller lämplighet</li>
        <li>Alla avtal om passning är mellan dig och hundvakten</li>
        <li>Vi ansvarar inte för skador, förluster eller olyckor under passning</li>
        <li>Användaren måste själv säkerställa adekvat försäkring</li>
      </ul>
      
      <h3 id="funk-rasta">4.3 Rasta (Promenad-tracking)</h3>
      <p><strong>Tillåten användning:</strong></p>
      <ul>
        <li>Spåra dina promenader med GPS</li>
        <li>Spara rundor privat eller dela dem offentligt</li>
        <li>Se andras delade rundor</li>
        <li>Samla poäng baserat på sträcka</li>
      </ul>
      
      <h3 id="funk-besoka">4.4 Besöka (Hundvänliga platser)</h3>
      <p><strong>Tillåten användning:</strong></p>
      <ul>
        <li>Hitta hundvänliga caféer, restauranger och barer</li>
        <li>Lägga till saknade platser</li>
        <li>Filtrera på kategori</li>
      </ul>
      
      <h2 id="innehall">5. Användargenererat innehåll</h2>
      
      <h3 id="innehall-ansvar">5.1 Ditt ansvar</h3>
      <p>Du är ansvarig för allt innehåll du laddar upp, inklusive:</p>
      <ul>
        <li>Bilder av hundar</li>
        <li>Beskrivningar och profiltexter</li>
        <li>Meddelanden till andra användare</li>
        <li>Recensioner av hundvakter</li>
        <li>Delade promenader</li>
      </ul>
      
      <h3 id="innehall-forbud">5.2 Förbjudet innehåll</h3>
      <p>Följande är förbjudet:</p>
      <ul>
        <li>Olagligt innehåll</li>
        <li>Kränkande, hotfullt eller trakasserande innehåll</li>
        <li>Falsk eller vilseledande information</li>
        <li>Pornografiskt eller våldsamt material</li>
        <li>Spam eller marknadsföring utan tillstånd</li>
        <li>Upphovsrättsskyddat material du inte har rätt att använda</li>
      </ul>
      
      <h3 id="innehall-licens">5.3 Licens till oss</h3>
      <p>
        Genom att ladda upp innehåll ger du oss en icke-exklusiv, global, royaltyfri licens att använda, 
        visa och distribuera innehållet inom tjänsten. Detta är nödvändigt för att appen ska fungera 
        (t.ex. visa dina hundbilder för andra användare).
      </p>
      
      <h2 id="ansvar">6. Ansvarsbegränsning</h2>
      
      <h3 id="ansvar-tjanst">6.1 Tjänstens tillgänglighet</h3>
      <p>
        Vi strävar efter hög tillgänglighet, men kan inte garantera att tjänsten alltid är tillgänglig eller felfri. 
        Vi ansvarar inte för:
      </p>
      <ul>
        <li>Avbrott i tjänsten (planerade eller oplanerade)</li>
        <li>Dataförlust</li>
        <li>Tekniska fel eller buggar</li>
        <li>Tredjepartstjänster (Stripe, Google Maps, etc.) som inte fungerar</li>
      </ul>
      
      <h3 id="ansvar-anvandare">6.2 Användarinteraktioner</h3>
      <p>
        Flocken är en plattform för att koppla samman hundägare. Vi ansvarar inte för:
      </p>
      <ul>
        <li>Avtal eller transaktioner mellan användare</li>
        <li>Beteende eller handlingar från andra användare</li>
        <li>Skador som uppstår vid hundmöten, passning eller andra aktiviteter</li>
        <li>Falskt eller vilseledande innehåll från användare</li>
        <li>Veterinära frågor eller hälsoproblem hos hundar</li>
      </ul>
      
      <h2 id="tvist">7. Tvistlösning och tillämplig lag</h2>
      
      <h3 id="tvist-lag">7.1 Tillämplig lag</h3>
      <p>
        Dessa villkor regleras av svensk lag.
      </p>
      
      <h3 id="tvist-losning">7.2 Tvistlösning</h3>
      <p>
        Tvister ska i första hand lösas genom förhandling mellan dig och oss. Om förhandling inte leder 
        till lösning ska tvisten avgöras av svensk allmän domstol.
      </p>
      
      <h3 id="tvist-konsument">7.3 Konsumenttvist</h3>
      <p>
        Om du är konsument kan du även vända dig till Allmänna reklamationsnämnden (ARN) för tvistlösning.
        <br/>
        <strong>Webbplats:</strong> <a href="https://www.arn.se" target="_blank" rel="noopener noreferrer">www.arn.se</a>
      </p>
      
      <h2 id="kontakt">8. Kontakta oss</h2>
      
      <p>
        Om du har frågor om dessa villkor, kontakta oss:
      </p>
      <ul>
        <li><strong>E-post:</strong> support@spitakolus.com</li>
        <li><strong>Postadress:</strong> Spitakolus AB, Svängrumsgatan 46, 421 71 Västra Frölunda</li>
        <li><strong>Ärende:</strong> Skriv "Användarvillkor" i ämnesraden</li>
      </ul>
      
      <p className="mt-8 text-sm text-flocken-gray">
        Dessa användarvillkor uppdaterades senast {new Date().toLocaleDateString('sv-SE')} och träder i kraft omedelbart.
      </p>
    </>
  );
}

