<h1>Employee Manager (v2)</h1>

<p>
  Ovo je druga verzija aplikacije "Employee Manager". Aplikacija je napravljena
  od nule, jer je bilo potrebno unaprijediti funkcionalnosti i dizajn. Ova
  aplikacija služi za vođenje evidencije o radnicima, te omogućava dodavanje
  novih radnika, uređivanje i brisanje postojećih, sortiranje i pretraživanje
  radnika.
</p>

<h1>Funkcionalnosti</h1>

<ul>
  <li>Dodavanje novih radnika sa osnovnim informacijama</li>
  <li>Dodavanje novih kolona sa definisanim tipovima podataka</li>
  <li>Ažuriranje podataka o postojećim radnicima</li>
  <li>Brisanje radnika</li>
  <li>Pretraživanje radnika po imenu</li>
  <li>Sortiranje radnika po imenu</li>
</ul>

<h1>Upute za korištenje</h1>

<h2>Instalacija</h2>

<ol>
  <li>Klonirajte ovaj repository na svoj računar</li>
  <li>
    U terminalu pokrenite komandu npm install kako bi instalirali sve potrebne
    zavisnosti
  </li>
  <li>Pokrenite aplikaciju komandom npm start</li>
</ol>

<h2>Dodavanje radnika</h2>

<p>
  Korisnik moze dodati nove radnike u aplikaciju klikom na dugme "Dodaj
  radnika". Potrebno je unijeti ime i prezime radnika, datum pocetka rada u
  firmi, poziciju na kojoj radi i satnicu.
</p>

<h2>Dodavanje kolona</h2>

<p>
  Klikom na dugme "Dodaj kolonu" otvara se popup prozor u kojem korisnik upisuje
  ime kolone i tip kolone. Kolona može biti jedan od tri tipa a to su tekst,
  broj ili datum. Čim se doda nova kolona ona se dodaje i svim korisnicima kao
  prazno polje sa napomenom da "Nema informacije".
</p>

<h2>Izmjena podataka o radniku</h2>

<p>
  Klikom na polje odnosno na informaciju o radniku, korisnik aplikacije moze
  promijeniti vrijednost tog polja. Cim se dogodi neka promjena u input polju
  ona se automatski sprema tako da se nakon osvjezavanja stranice podaci nece
  izgubiti.
</p>

<h2>Brisanje radnika</h2>

<p>
  Radnici se mogu brisati tako sto se selektuje kvadratic pored imena radnika,
  tada dugme "Izbrisi odabrane" postaje dostupno za klik i klikom na to dugme
  oznaceni radnici se brisu iz memorije.
</p>

<h2>Pretraga radnika</h2>

<p>
  U aplikaciji možemo pretraživati radnike upisivanjem nekog imena u polje
  "Pretrazi radnike".
</p>

<h2>Sortiranje radnika</h2>

<p>
  Sortiranje radnika se obavlja klikom na dugme "Sortiraj". Tada se radnici
  sortiraju po imenu. Prvi put kada se dogodi klik radnici se sortiraju silazno
  a drugi klik kada se dogodi radnici se sortiraju uzlazno.
</p>

<h2>Prikaz broja radnika u firmi</h2>

<p>Iznad tabele postoji i tekst koji prikazuje trenutni broj zaposlenih.</p>

<h1>Live aplikacija</h1>

<p>
  Možete pristupiti aplikaciji na sljedećoj adresi:
  <a href="https://emanagerv2.netlify.app/">Link aplikacije</a>
</p>

<h1>Autor</h1>

<p>
  Ova aplikacija napravljena je od strane
  <a href="https://github.com/zmirnes">Mirnes Zahirović</a>.
</p>
