Portfolio - Leïla Oucif

Projektmål:

- Skapa en portfolio.
- Visa upp tekniska färdigheter inom frontend-utveckling.
- Erbjuda ett enkelt sätt för rekryterare att ta kontakt.
- Demonstrera förmåga att bygga en helt fungerande webbapplikation från grunden.

Projektbeskrivning:

Detta är en personlig portfolio-webbplats skapad för att presentera min profil som .NET-utvecklarstudent. Webbplatsen fungerar som ett digitalt visitkort där rekryterare och kollegor kan lära känna min tekniska bakgrund, se mina projekt och ta kontakt med mig. Målet med projektet var att skapa en professionell och användarvänlig webbapplikation från grunden med huvudsakligen HTML, CSS och JavaScript. För e-postfunktionalitet användes tjänsten EmailJS.

Metoder och Principer:

HTML-struktur och Semantik:
Jag använde semantisk HTML5 för att bygga en tydlig och logisk struktur. Genom att använda element som <header>, <nav>, <main>, <section>,<article> och <footer> skapade jag inte bara en bättre dokumentstruktur, utan också förbättrade åtkomligheten för skärmläsare. Varje sektion i portfolion har ett eget ID för intern navigering, vilket möjliggör smooth scrolling mellan sektionerna.

CSS-arkitektur och Designsystem:
För styling implementerade jag ett system med CSS Custom Properties (variabler) i :root för att skapa ett enhetligt färgtema som enkelt kan anpassas. Alla mått angavs i REM-enheter baserat på en root font-size på 16px, vilket gör layouten skalbara och anpassningsbar för användares inställningar. Jag kombinerade CSS Grid och Flexbox för layouten, Grid för tvådimensionella layouter som hero-sektionen och projektgriden, och Flexbox för enkelriktade layouter som navbar och knappgrupper.

Responsiv Design-princip:
Jag började med att designa för desktop och skapade sedan media queries för att anpassa layouten till mindre skärmar. Genom att använda relativa enheter (%, rem) och flexibla layouter säkerställde jag att webbplatsen fungerar väl på alla enheter från mobiltelefoner till desktop-skärmar. Breakpoints implementerades för att hantera olika skärmstorlekar optimalt och säkerställa en bra användarupplevelse på alla enheter.

JavaScript-implementation och Formulärhantering:
För formulärets kärnlogik och övrig interaktion användes JavaScript med event listeners. För att skicka e-post från kontaktformuläret utan att bygga en egen server integrerade jag EmailJS. Detta är ett externt bibliotek (SDK) som laddas via CDN och fungerar som en färdig tjänst för e-postsändning. Genom att använda deras API kunde jag hantera formulärets insändning, implementera tydlig felhantering med användarvänliga meddelanden och lägga till ett visuellt laddningstillstånd. Detta är projektets enda externa beroende.

Åtkomlighetsprinciper:
Genom hela projektet prioriterade jag tillgänglighet genom att säkerställa hög kontrast mellan text och bakgrund samt tillhandahålla alt-text för alla bilder. Formulärfält förseras med tydliga labels och korrekt validering, och alla kritiska interaktiva element för navigation och funktionalitet (länkar, knappar och formulärfält) är fokuserbara och fullt användbara med tangentbordet.

Kodorganisering och Underhållbarhet:
Jag organiserade koden i separata filer baserat på funktion – HTML för struktur, CSS för presentation och JavaScript för beteende. CSS-klasser namngavs med en tydlig och konsekvent struktur för att underlätta läsbarhet och framtida underhåll.

Testning och Felsökning:
Under utvecklingen testade jag kontinuerligt webbplatsen i olika webbläsare (Chrome och Safari) och på olika enheter för att säkerställa kompatibilitet. Jag använde webbläsarens devtools för att felsöka och optimera, och implementerade under utvecklingsfasen en enkel debug-CSS (som senare togs bort) för att visuellt förstå layoutstrukturer ( t.ex. border: 1px solid red !important; ). 

Slutsats:
Genom att kombinera dessa metoder och principer skapade jag en portfolio-webbplats som inte bara är visuellt tilltalande och funktionell, utan också välstrukturerad, underhållbar och tillgänglig. Projektet demonstrerar min förmåga att planera, implementera och leverera en komplett webbapplikation med moderna webstandarder och best practices.
