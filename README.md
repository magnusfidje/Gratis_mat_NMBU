# Gratis Mat NMBU

PWA for å annonsere og følge med på arrangementer med gratis mat på NMBU-campus.

## Funksjoner

- Kalendervisning med kommende arrangementer
- "Mat nå" – restemat og spontane tilbud (forsvinner etter 6 timer)
- Push-varsler (nettleservarsler, fungerer som PWA på iOS og Android)
- Norsk og engelsk

## Deploy til Railway

### 1. Opprett repo på GitHub

```bash
git init
git add .
git commit -m "første commit"
git remote add origin https://github.com/DITT_BRUKERNAVN/gratis-mat-nmbu.git
git push -u origin main
```

### 2. Opprett prosjekt på Railway

1. Gå til [railway.app](https://railway.app) og logg inn med GitHub
2. Klikk **New Project → Deploy from GitHub repo**
3. Velg repoet ditt
4. Railway oppdager automatisk at det er en Node.js-app

### 3. Sett miljøvariabler

I Railway-dashbordet, gå til **Variables** og legg til:

| Variabel | Verdi |
|---|---|
| `PORT` | `3000` |
| `SITE_URL` | `https://din-app.up.railway.app` (Railway-domenet ditt) |
| `VAPID_PUBLIC` | *(se steg 4)* |
| `VAPID_PRIVATE` | *(se steg 4)* |

### 4. Hent VAPID-nøkler

Ved første deploy vil Railway-loggen vise noe slikt:

```
⚠️  VAPID-nøkler ikke satt som miljøvariabler. Midlertidige nøkler generert:
VAPID_PUBLIC=BA...
VAPID_PRIVATE=p7...
```

Kopier disse og lim inn som miljøvariabler i Railway (steg 3). Deploy på nytt.

### 5. Domene

Railway tildeler automatisk et domene (`*.up.railway.app`). Du kan også koble til eget domene under **Settings → Networking**.

### 6. GoatCounter (besøksstatistikk, valgfritt)

1. Opprett gratis konto på [goatcounter.com](https://www.goatcounter.com)
2. Velg en kode (f.eks. `gratis-mat-nmbu`)
3. Erstatt `YOUR_CODE` i [public/index.html](public/index.html) med koden din

## Lokal utvikling

```bash
npm install
npm run dev
```

Åpne [http://localhost:3000](http://localhost:3000).
