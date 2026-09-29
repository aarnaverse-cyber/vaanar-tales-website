# Vaanar Tales — vaanartales.ae

The official site for **Vaanar Tales**, an original animated series from Kayhan Entertainment.
Small Vaanars, Big Adventures.

Static site: one HTML file, three scripts, images and one audio track. No build step,
no framework, no server code.

## Contents

| Path | What it is |
|---|---|
| `index.html` | The whole site — hero, the family, the valley, the plane, episode guide, games for your floor |
| `app.js` | Characters, locations, floor games, the 52-episode guide, the Episode 1 storyboard player |
| `games.js` | The three browser games: Catch the Banana, Through the Mountains, Banana Dodge |
| `news.js` | Vaanar News — 88 stories across eight desks, each with its own link |
| `img/` | Key art, character cut-outs, location plates, 52 episode thumbnails |
| `img/sb/ep01/` | All 111 storyboard panels for Episode 1, "Grounded" |
| `audio/ep01.mp3` | Episode 1 narration, synced to the storyboard panels |
| `CNAME` | Custom domain for GitHub Pages |

## Running it locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Publishing to vaanartales.ae with GitHub Pages

1. Push this repository to GitHub.
2. Settings → Pages → Source: **Deploy from a branch**, branch `main`, folder `/ (root)`.
3. Settings → Pages → Custom domain: `vaanartales.ae` (the `CNAME` file already sets this).
4. At the domain registrar, add:
   - `A` records for `vaanartales.ae` → `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`
   - `CNAME` for `www` → `<github-username>.github.io`
5. Tick **Enforce HTTPS** once the certificate is issued.

Any static host works equally well — Netlify, Cloudflare Pages, or ordinary cPanel
hosting. Upload the contents of this folder to the web root.

## Credits

Vaanar Tales and all characters © Kayhan Entertainment. Artwork and text from the
Vaanar Tales series bible.
