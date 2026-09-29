# Asset manifest — vaanar-tales-website

Every image and audio file the site loads, and where it is referenced from.
All paths are **relative**: `images/…` and `audio/…`. There are no absolute paths,
no local computer paths, no blob: or data: image URLs and no temporary URLs anywhere
in `index.html`, `app.js`, `games.js` or `news.js`.

## Folders

| Folder | Files | What it holds |
|---|---|---|
| `images/` | 77 | Key art, character cut-outs, location plates, the plane, props, the map, 52 episode thumbnails, 6 model sheets |
| `images/sb/ep01/` | 111 | Episode 1 storyboard panels, `p001.webp` … `p111.webp` |
| `audio/` | 1 | `ep01.mp3` — Episode 1 narration, 11:27, mono 64 kbps |

Total media: 16.7 MB.

## Named images

| File | Used by |
|---|---|
| `images/keyart.webp` | hero background, "Full turnaround" news story |
| `images/map.webp` | The Valley — the map on the wall |
| `images/deck.webp`, `bedroom.webp`, `workshop.webp`, `airstrip.webp`, `temple.webp`, `lake.webp`, `bholuwall.webp` | The Valley location cards, news photos |
| `images/farhill.webp` | the Far Hill closing band |
| `images/plane.webp` | The Plane section |
| `images/props.webp` | Play section |
| `images/plane-fly.webp` | the plane that crosses the page, and both flying games |
| `images/char-kapi.webp`, `char-tara.webp`, `char-chintu.webp`, `char-maya.webp`, `char-baba.webp`, `char-bholu.webp` | character discs, the two characters at the page edges, game sprites, game picker |
| `images/sheet-*.webp` (6) | the model sheet inside each character dialog |
| `images/ep01.webp` … `images/ep52.webp` | the 52 episode cards and most news photos |
| `images/sb/ep01/pNNN.webp` | the Episode 1 storyboard viewer, the ten Episode 1 floor-game cards, some news photos |

## How the paths are built in code

- `app.js` — `img/` prefixes replaced throughout; storyboard panels come from
  `BOARDS[1].dir` = `images/sb/ep01` and are assembled as
  `` `${dir}/p${String(n).padStart(3,"0")}.webp` ``
- `games.js` — sprites loaded from `images/char-*.webp` and `images/plane-fly.webp`
- `news.js` — every story's `hero` and `thumb` point at `images/…`
- `index.html` — hero, valley, plane, props and game-picker images

## Deploying

Copy these into the repository root, replacing what is there:

```
index.html
app.js
games.js
news.js
images/        (new)
audio/         (new)
```

If an older `img/` folder exists in the repo, delete it — nothing references it now.
No build step, no configuration: Vercel serves the folder as-is.

## Checks run before packaging

- Every `images/…` and `audio/…` string in the four source files resolves to a file present here (86 static references, plus 175 paths built at runtime).
- The site was served over HTTP and walked end to end — home, all five sections, all 52 episode cards, the storyboard viewer, all 88 news stories and all three games. No 404s, no broken images, no JavaScript errors.
- Three unused files (`lineup.webp`, `treehouse.webp`, `sb/ep01-strip.webp`) were removed.
