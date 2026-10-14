# Dimora del Funaro — Appartamento nel cuore medievale di Orvieto

Sito ufficiale della **Dimora del Funaro**, appartamento ad uso esclusivo per fino a 4 ospiti, con terrazzo privato su Piazza San Giovanni, nel centro storico di Orvieto.

🌐 **[www.dimoradelfunaro.it](https://www.dimoradelfunaro.it)** · 🇮🇹 Italiano / 🇬🇧 English

Il sito ha un obiettivo preciso: far scrivere l'ospite **direttamente a Catia**, senza commissioni dei portali. Non c'è un motore di prenotazione: ogni pagina porta al **modulo di richiesta disponibilità**, a **WhatsApp** o alla **telefonata**.

Il nome viene dal *funaro*, il cordaio: il simbolo del logo è il suo attrezzo, ridisegnato da una formella in ceramica.

---

## Stack

| | |
|---|---|
| Framework | **Next.js 16** (App Router, Turbopack) |
| Lingue | **next-intl v4**: entrambe le lingue con prefisso (`/it`, `/en`) |
| Stile | **Tailwind CSS v4**, font Cormorant Garamond, EB Garamond e Jost |
| Animazioni | Componente `Reveal` per le entrate allo scroll |
| Contatti | Modulo con invio SMTP alla casella `info@dimoradelfunaro.it`, WhatsApp, telefono |
| Mappa | Google Maps **a caricamento su click** (nessun cookie di Google prima del consenso) |
| Analytics | **GA4** tramite **Google Tag Manager**, con **Consent Mode v2** |
| Cookie | **iubenda** (banner, preferenze, cookie policy) |
| Hosting | **Vercel** |

SEO e AEO sono la base del progetto: testi renderizzati lato server, metadata e `hreflang` per ogni pagina, Open Graph, sitemap bilingue, dati strutturati JSON-LD (`LodgingBusiness`, `FAQPage`, offerte, breadcrumb).

---

## Avvio in locale

Serve **Node 22**.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build di produzione: da lanciare sempre prima del push
npm start          # prova la build in locale
```

### Variabili d'ambiente

Vanno in `.env.local` in locale e nelle impostazioni del progetto su Vercel.

| Variabile | A cosa serve |
|---|---|
| `NEXT_PUBLIC_GTM_ID` | ID del contenitore Google Tag Manager |
| Variabili SMTP | Invio del modulo contatti (server `authsmtp.securemail.pro`, porta 465, SSL, destinatario `info@dimoradelfunaro.it`) |

Le credenziali non vanno mai nel repository.

---

## Pagine

| Pagina | IT | EN |
|---|---|---|
| Home | `/it` | `/en` |
| L'appartamento | `/it/appartamenti` | `/en/…` |
| Chi siamo | `/it/chi-siamo` | `/en/…` |
| Offerte | `/it/offerte` | `/en/…` |
| Contatti | `/it/contatti` | `/en/…` |
| Privacy policy | `/it/privacy-policy` | `/en/…` |

C'è anche una pagina 404 personalizzata.

---

## Struttura

```
src/
├── app/[locale]/          # pagine (vedi tabella sopra)
├── app/api/contact/       # invio del modulo contatti
├── components/            # Section, Container, Reveal, Gallery, Slider,
│                          # MapEmbed, ContactForm, JsonLd, ClickTracking…
├── lib/
│   ├── images.ts          # elenco delle foto (IMG, CAMERE_SRC)
│   ├── seo.ts             # metadata, hreflang, Open Graph
│   ├── jsonld.ts          # dati strutturati
│   └── site.ts            # dati della struttura (nome, recapiti, lingue)
messages/
├── it.json                # tutti i testi in italiano
└── en.json                # tutti i testi in inglese
public/
└── images/                # foto (già compresse), og.jpg per le condivisioni
```

---

## Manutenzione: dove si cambia cosa

### Testi
Tutti i testi stanno in `messages/it.json` e `messages/en.json`. Una modifica va fatta **in entrambi i file**, con le stesse chiavi.

### Prezzo
Il prezzo "Da €… / notte" sta nella chiave `price` dei messages: compare nella **home** e nella pagina **Appartamento**. Va aggiornato in entrambe le lingue.

Sul sito il prezzo è indicativo: il prezzo esatto per le date lo conferma Catia quando risponde alla richiesta.

### Foto
- **Gallery dell'appartamento**: l'elenco è in `src/lib/images.ts` (`CAMERE_SRC`), i testi alternativi in `apartment.gallery` nei messages, nello stesso ordine.
- **Hero delle pagine**: sono sfondi CSS (`bg-[url('/images/…')]`) direttamente nel file della pagina, con un'opacità e una sfumatura scura sotto il testo. Per schiarire o scurire una hero si cambiano `opacity-…` e la classe `bg-gradient-to-t …` nello stesso punto.
- I file vanno in `public/images/`, compressi prima di caricarli (circa 2000 px di lato, qualità 80%).

Su mobile e tablet nessuna foto supera i 400 px di altezza: la regola è in `globals.css` e ritaglia le immagini in modalità *cover*, senza deformarle.

### Offerte
Le offerte (5% per 3 notti, 10% per 5 notti) sono testi nei messages (`offers.list`). Non c'è un sistema automatico: lo sconto lo applica Catia quando risponde alla richiesta.

### Mappa
`MapEmbed` mostra prima un riquadro con un avviso e due pulsanti: "carica la mappa" o "apri in Google Maps". Google Maps viene caricato solo dopo il click, così nessun cookie di terze parti parte prima del consenso. Sotto la mappa caricata resta sempre il link "Apri in Google Maps".

---

## Tracciamento

Nessun dato analitico viene raccolto prima del consenso.

1. Consent Mode v2 parte con tutto **negato** di default.
2. iubenda raccoglie il consenso. Se l'ospite accetta la misurazione, viene inviato l'evento `consent_measurement`.
3. Solo a quel punto GTM attiva GA4.

Eventi tracciati: `generate_lead` (invio del modulo, evento chiave), `click_call`, `click_whatsapp`, `click_email`, `click_map`, `map_load`, `click_polidori` (link al sito di Torre Polidori).

Il link "Preferenze cookie" nel footer riapre il pannello di iubenda.

---

## Deploy

Ogni push su `main` viene pubblicato in automatico da Vercel.

```bash
npm run build      # controlla che compili
git add .
git commit -m "Descrizione della modifica"
git push origin main
```

Il dominio principale è `www.dimoradelfunaro.it`. Il dominio senza `www` reindirizza (308) alla versione con `www`.

---

## Risoluzione problemi

**Il push viene rifiutato con "fetch first".**
Su GitHub ci sono commit che in locale non hai, per esempio file caricati dal sito di GitHub. Scaricali prima di pubblicare:

```bash
git pull --rebase origin main
git push origin main
```

Non usare mai `git push --force`: cancelleresti da GitHub le modifiche fatte lì.

**Il build fallisce con "Unexpected end of JSON input" o errori strani su file mai toccati.**
Di solito succede con il disco del Mac quasi pieno: alcuni file vengono scritti a metà. Libera spazio, poi controlla i file corrotti:

```bash
LC_ALL=C grep -rl $'\x00' . --include='*.ts' --include='*.tsx' --include='*.json' \
  --exclude-dir=node_modules --exclude-dir=.next --exclude-dir=.git
```

Ripristina quelli trovati con `git checkout -- <file>`, poi `rm -rf .next node_modules && npm install`.

**Il deploy va a buon fine ma il sito non cambia.**
Controlla con `git status` di aver aggiunto tutti i file, in particolare i componenti nuovi e i messages.

---

Progettato e sviluppato da **[Francesco Design](https://francescoferri.me)**.