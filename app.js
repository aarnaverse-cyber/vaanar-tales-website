/* Vaanar Tales — site data and behaviour */

const CHARACTERS = [
  {
    id: "kapi", name: "Kapi", age: "8", role: "Eldest · Red cap · Captain of everything",
    colour: "#E0492C", say: "“Nobody move.”",
    blurb: "Invents the game, announces the game, and holds the rules together. Cap backwards means the game is on. Cap forwards means Captain mode.",
    rows: [
      ["Wants", "To be in charge, and for it to be done properly."],
      ["Fear", "That someone else will call it first."],
      ["Strength", "He is a genuinely good leader."],
      ["Flaw", "He thinks the correct order matters more than whether people are happy."],
      ["Says", "“Nobody move.” · “Sir. The aircraft door is closed.” · “CABIN CREW — PREPARE FOR LANDING!”"]
    ]
  },
  {
    id: "tara", name: "Tara", age: "6", role: "Middle child · Pink bow · Keeper of the rules",
    colour: "#E0679A", say: "“He called it first.”",
    blurb: "Runs the front desk. Name? Model? What’s the problem with the vehicle? Any character in the valley can be stopped by her rope.",
    rows: [
      ["Wants", "Order. A desk. A stick to write with."],
      ["Strength", "Unshakeable. She will out-stare a grown-up and out-wait a langur."],
      ["Flaw", "Cannot tell when the rule has stopped being fun."],
      ["Says", "“Sir.” · “He called it first.” · “That’s allowed.”"],
      ["With her brothers", "The bridge between them. Sides with Chintu on principle and with Kapi in secret."]
    ]
  },
  {
    id: "chintu", name: "Chintu", age: "4", role: "Youngest · Goggles · Never puts the toy plane down",
    colour: "#FFB300", say: "“I’m the engine.”",
    blurb: "Doesn’t so much speak as broadcast a feeling at full volume — half sound effect, half one enormous word. When Chintu is the engine, he is the engine.",
    rows: [
      ["Wants", "The thing. Now. To fly."],
      ["Strength", "Total belief."],
      ["Flaw", "Everything is the end of the world for about ten seconds."],
      ["Says", "“Flying day.” · “I’m the engine.” · “That’s rattling.”"],
      ["Recurring bit", "Running in circles. Nobody can stop him except Tara, with one finger."]
    ]
  },
  {
    id: "maya", name: "Maya", age: "Mum", role: "Pilot · Mechanic · Sees everything",
    colour: "#33A05E", say: "“Propeller’s fixed.”",
    blurb: "Fixes things, says little. She finishes repairs early and pretends she hasn’t, because the game below is worth more than the flight.",
    rows: [
      ["Wants", "The plane in the air and the family in it."],
      ["Gets", "Repeatedly delayed by the family being wonderful."],
      ["Voice", "Calm, amused, fewer words than anyone. Lowest line count; highest line weight."],
      ["Says", "“Hm.” · “Propeller’s fixed.” · “Dunno what you mean.”"],
      ["Across the series", "She learns the children have been watching her far more closely than she thought — and copying her."]
    ]
  },
  {
    id: "baba", name: "Baba", age: "Dad", role: "Big · Slow · Dry · Chai and newspaper",
    colour: "#9C5B2E", say: "“I’m bringing the paper.”",
    blurb: "Cast as Passenger One, patient, customer or cargo in whatever game the kids are running. He is the best sport in the valley. He just needs to be made to do it.",
    rows: [
      ["Wants", "Ten uninterrupted minutes."],
      ["Voice", "Short sentences. Deadpan. Never raises it. His biggest laughs are silences."],
      ["Physical comedy", "A large body in small furniture. Crates bow. Chairs creak. Back seats do not fit."],
      ["Says", "“No.” · “I’m bringing the paper.” · “Who’s it wrong for?”"],
      ["Across the series", "He always resists the game and always ends up adding the one thing the kids could not."]
    ]
  },
  {
    id: "bholu", name: "Bholu", age: "Neighbour", role: "The langur next door · Always present",
    colour: "#6C7A89", say: "“…Morning?”",
    blurb: "Different species, different colour, same valley. He arrives to deliver a banana and leaves as air-traffic control, customer, judge or weather.",
    rows: [
      ["Wants", "To deliver a banana and go home."],
      ["Voice", "Reasonable. Slightly aggrieved. Talks to himself when nobody is listening."],
      ["The rule", "Bholu never finishes a delivery. It is the longest-running gag in the show and it is never explained."],
      ["Says", "“…Morning?” · “It’s a TAIL.” · “I was just doing a delivery.”"]
    ]
  }
];

const LOCATIONS = [
  { img: "deck", name: "The deck", text: "The show’s living room. A cane chair, a small table for Baba’s chai, and a stack of crates that becomes a plane, a shop, a stage, a fort. Most games start here." },
  { img: "bedroom", name: "The kids’ bedroom", text: "Three bunks in three sizes. Goggles on a hook, red cap on a bedpost, pink bow on a mirror, aeroplane drawings on every wall." },
  { img: "workshop", name: "Maya’s workshop", text: "A pegboard of tools, spare propeller blades, a clay pot of coconut oil and gloves far too big for anyone but Maya. The window looks straight down onto the plane." },
  { img: "airstrip", name: "The airstrip", text: "A short packed-earth runway between boulders. Toolbox, ladder, windsock, shed. Where the family gathers when an episode finally lets the plane fly." },
  { img: "temple", name: "The Big Temple courtyard", text: "The kids’ playground. Rows of carved pillars, a stepped platform, and a low wall Bholu sits on. Races, stopovers, formation flying on foot." },
  { img: "lake", name: "The lake and the waterfall", text: "The valley’s postcard. Coracles on the shore, egrets, lily pads. The default destination for any imaginary flight — and a real one for swimming." },
  { img: "bholuwall", name: "Bholu’s wall", text: "A crumbling temple wall with Bholu’s smaller, tidier treehouse on top and bananas drying on a string. Connected to the family deck by a rope bridge he regrets building." }
];

const ACTIVITIES = [
  /* ---- straight out of Episode 1, "Grounded" ---- */
  { ep: 1, from: "ep1", source: "Episode 1 · Grounded", shot: "images/sb/ep01/p096.webp",
    title: "Build the cabin", kit: "Two crates or chairs · a tea towel",
    text: "Two boxes side by side are the cabin. The tea towel goes over one as the tray table. That is the whole set, and once it exists somebody will always be boarding it." },
  { ep: 1, from: "ep1", source: "Episode 1 · Grounded", shot: "images/sb/ep01/p070.webp",
    title: "Boarding passes made of leaves", kit: "A handful of leaves or paper scraps",
    text: "One leaf per passenger, handed over at the door. Nobody gets in without one — including whoever is giving them out, who must issue one to themselves out loud." },
  { ep: 1, from: "ep1", source: "Episode 1 · Grounded", shot: "images/sb/ep01/p030.webp",
    title: "Passenger One", kit: "One grown-up who was doing something else",
    text: "Pick the nearest adult and make them Passenger One. Passenger One does not choose the seat, the route or the music, and must sit where they are put. This is the entire job." },
  { ep: 1, from: "ep1", source: "Episode 1 · Grounded", shot: "images/sb/ep01/p064.webp",
    title: "The safety demonstration", kit: "Nothing · both arms",
    text: "Exits here, here and here. Tray table flat. Seatbelt like this. It has to be done completely seriously, with both arms, and repeated if anybody laughs — which is how you get it done three times." },
  { ep: 1, from: "ep1", source: "Episode 1 · Grounded", shot: "images/sb/ep01/p044.webp",
    title: "Say everything as an announcement", kit: "A captain's voice",
    text: "For the length of the flight, nothing is said normally. Dinner is an announcement. Bedtime is an announcement. \"CABIN CREW — PREPARE FOR LANDING\" means put your shoes on." },
  { ep: 1, from: "ep1", source: "Episode 1 · Grounded", shot: "images/sb/ep01/p100.webp",
    title: "Somebody is the engine", kit: "The youngest person in the room",
    text: "The engine stands at the front and makes the noise. The engine does not steer, does not stop for questions, and cannot be switched off by anybody except the person who started it." },
  { ep: 1, from: "ep1", source: "Episode 1 · Grounded", shot: "images/sb/ep01/p010.webp",
    title: "Find the rattle", kit: "One rattly thing · a hiding place",
    text: "Something in the cabin is rattling. Hide a set of keys or a tin of buttons under a cushion, then send the crew to find it by ear alone. The pilot cannot take off until it is found." },
  { ep: 1, from: "ep1", source: "Episode 1 · Grounded", shot: "images/sb/ep01/p088.webp",
    title: "Let the passenger pick the destination", kit: "A drawn map · one stubborn grown-up",
    text: "Draw the map first — your street, the park, the shop, and one place nobody has been. At the end of the flight, the drafted grown-up chooses where you land. They always pick better than you expect." },
  { ep: 1, from: "ep1", source: "Episode 1 · Grounded", shot: "images/sb/ep01/p022.webp",
    title: "The cold chai rule", kit: "One hot drink",
    text: "A grown-up starts the game with a full cup. It may not be finished until the plane lands. It will go cold. Everybody learns that this is fine, and the grown-up drinks it anyway." },
  { ep: 1, from: "ep1", source: "Episode 1 · Grounded", shot: "images/sb/ep01/p038.webp",
    title: "Land, then say one thing you saw", kit: "Nothing at all",
    text: "The landing is the quiet bit. Everyone unbuckles, and each person says one thing they saw out of the window. Nobody is allowed to say it was nothing." },

  /* ---- from across the season ---- */
  { ep: 3, from: "valley", source: "Episode 3 · The Queue", title: "Run the front desk", kit: "A rope · a stick · a flat stone",
    text: "Rope off the hallway and open a desk. Name? Model? What’s the problem with the vehicle? Nobody gets through without answering — including whoever built the desk." },
  { ep: 50, from: "valley", source: "Episode 50 · Chintu’s Turn", title: "Everyone is the engine", kit: "Nothing at all",
    text: "One chair is the pilot’s seat. Everybody else runs in circles making the engine noise. The pilot doesn’t fly anywhere. “Good engine.”" },
  { ep: 25, from: "valley", source: "Episode 25 · The Long Way", title: "Take the long way", kit: "A short walk",
    text: "Turn a ten-minute walk into an hour: a toll here, a checkpoint there, a stretch that can only be hopped. Best walk ever." },
  { ep: 41, from: "valley", source: "Episode 41 · Quiet Ma", title: "Fly Silent Airlines", kit: "Quiet · the whole family",
    text: "The entire flight in mime — safety demo, trolley service, landing. Grown-ups turn out to be surprisingly good at this one." },
  { ep: 42, from: "valley", source: "Episode 42 · Postcard", title: "Post a leaf to the Far Hill", kit: "One leaf · somewhere high",
    text: "Write on a leaf and leave it at the top of the ladder for the wind. Someone in the family will make sure it gets there and never say so." },
  { ep: 21, from: "valley", source: "Episode 21 · Big Temple Race", title: "Race with a referee", kit: "A hallway · one referee",
    text: "Mark a course, appoint a referee, and let them make the rules up as the race is run. Everybody will be disqualified. The person who walks it will win the applause." }
];

const EPISODES = [
  [1, "Grounded", "The propeller rattles, the kids open Vaanar Airlines and Baba is Passenger One. Baba picks the destination."],
  [2, "Service Due", "Maya’s shoulder is stiff, so the kids open a repair shop for her. Chintu is head mechanic and Kapi has to be his junior."],
  [3, "The Queue", "Tara ropes off the whole valley and issues tickets for everything, until she has queued herself out of her own bedroom and Kapi issues her one."],
  [4, "Weather", "Chintu is the wind and nothing can happen outdoors until the wind agrees. Maya trades with it, tires it out, then wakes him to tell him it stopped."],
  [5, "Bholu’s Day Off", "Bholu refuses to be cast in anything, so the kids build a game around his refusal. He ends up on the wall waving leaves anyway."],
  [6, "Cold Chai", "Baba’s point of view: one cup of chai, four interruptions, never a no. Stone cold, it’s the best he’s ever had."],
  [7, "Lost and Found", "Kapi loses the red cap and without it nobody obeys him. Tara runs lost property, the cap is on Bholu, and Kapi finds out the captain was never the cap."],
  [8, "Night Flight", "The kids can’t sleep, so Maya sits on the bedroom floor and flies them to the lake in whispers without leaving the bunks. Baba is ground crew in the doorway."],
  [9, "Coracle", "A real trip on the lake. The coracle spins, Baba isn’t built for it, and Maya could stop it and doesn’t — because Baba is laughing."],
  [10, "He Called It First", "Tara wants to be pilot; Chintu calls it first by accident. Her own rule applies to her, and she pays it. Kapi tells her the rule is the best thing about her."],
  [11, "The Rattle", "The kids find the rattle by becoming the plane: Kapi the engine block, Tara the wings, Chintu the propeller, Baba the fuselage. Bholu is the rattle — and hearing it out loud, Maya finds the real one."],
  [12, "The Far Hill", "The family finally flies to the hill. What’s there is a single small banyan and a flat stone the right shape for Baba to sit on with chai. Tara reaches to cross off the question mark. “Leave it.”"],
  [13, "Shoes", "Chintu won’t wear shoes, so Kapi opens a shoe shop where every pair on the deck is for sale and Chintu is the only customer. He walks out in his own shoes, having chosen them himself."],
  [14, "Passengers", "Baba walks to the village for supplies and the kids decide he’s a bus — stops announced, fares in leaves, Chintu as the bell. On the way back, alone, he announces the next stop to no one."],
  [15, "Bandana", "Maya’s bandana is in the wash, so the kids decide she’s a stranger who must be shown around. Her own four-year-old teaches her how to fix a propeller."],
  [16, "Stopover", "Engine trouble puts the plane down on the far side of the lake. The kids build an airport out of nothing while Maya fixes it in fifteen minutes and waits forty-five, because the airport has a café."],
  [17, "Chai Round", "Kapi opens a café and makes Baba’s chai. It’s terrible. Everyone drinks it. Maya shows him one thing — when to take the pot off — and the fourth cup is nearly right."],
  [18, "The Wall", "Bholu’s rope bridge snaps and he’s stranded. The rescue takes far longer than the repair would have, and when it’s done the kids re-cut the rope for the return rescue."],
  [19, "Sir", "Tara decides everyone must be called “sir” — Maya, her brothers, Bholu, the plane. The word loses all meaning and she keeps going. Baba hands her his boarding pass from Episode 1."],
  [20, "Turnaround", "The kids give the plane a full service, and in Kapi’s inventory every part includes the pilot. Maya is inspected. Baba is oiled. Bholu came to deliver a banana and leaves shining."],
  [21, "Big Temple Race", "Kapi’s race through the pillars has lanes, a referee who disqualifies everyone, and a winner who didn’t run the course. Baba walks it and finishes last to enormous applause."],
  [22, "Grandmother’s Boxes", "A crate of Baba’s mother’s things arrives. The kids open a museum; Chintu tries on Baba’s own first sandals and they fit. Then Baba tells the real stories, which are better."],
  [23, "Windsock", "The windsock is torn and every cloth in the treehouse is a candidate — Baba’s newspaper, Tara’s bow, the tea towel. The final windsock is Maya’s bandana. She flies bareheaded."],
  [24, "Passenger Two", "Maya twists an ankle and for the first time she’s the passenger and Baba is the crew. He’s terrible at it. She coaches him in one-word instructions until he does the full safety demo, arms and all."],
  [25, "The Long Way", "A ten-minute walk to the lake takes an hour because Kapi has closed the path and opened stations: a toll, a checkpoint, a hopping zone. “Best walk ever.”"],
  [26, "Half the Hill", "The kids want the Far Hill; Maya can’t fly. Kapi declares they’ll get halfway on foot. Nobody knows where halfway is. Baba picks a boulder and the family sits on it, looking at a hill they’ve been to."],
  [27, "Two Captains", "Kapi and Tara both run an airline on the same deck with a single passenger — Baba, boarded on both. The planes collide over the chai table and turn out to share a destination."],
  [28, "Fix It", "Everything on the deck is broken according to Chintu, who has the gloves on. The chair, the rail, Kapi. Bholu’s tail — rattling since Episode 2 — is finally, ceremonially repaired."],
  [29, "Monsoon", "First rain. The deck is a ship, the rain an ocean, Tara the captain, Baba the ballast, Chintu the sea. Maya makes chai for the crew and, for once, sits down with a cup of her own."],
  [30, "The Far Hill Again", "Back to the hill, because Baba asked. Kapi finds a second stone, Tara a third. By the end there are six in a circle under the small banyan — including one for Bholu, who has never been."],
  [31, "Delivery", "The kids finally help Bholu deliver the banana. Dispatch, tracking, van, recipient. It travels the deck four times and reaches Maya, who eats it. Bholu finds he liked the delivering more."],
  [32, "Nap", "Baba may sleep — as a sleeping giant guarded at volume by three loud guardians. Tara’s rule is silence, enforced by shouting. He wakes to find everyone asleep around him."],
  [33, "Ticket Inspector", "Kapi invents an inspector to get Tara off the desk. She takes it so seriously that he has to become the inspector to stop the audit. Everything is in order. She has never been prouder."],
  [34, "Rope Bridge", "Maya’s rigging the bridge and the kids are banned from it, so the bridge is lava and the only way across is Baba, lying across the gap. When the bridge is done, the kids refuse to use it."],
  [35, "Small", "Chintu decides everyone is too big and the game must be played crouched. Baba, folded into a shape no large monkey should attempt, is the smallest of all because Chintu says so."],
  [36, "Baba’s Game", "For once Baba invents the game. It has no rules and one instruction: “sit here.” For four minutes the whole cast sits in silence. A parakeet lands on the rail."],
  [37, "The Lost Spanner", "Maya’s spanner is missing and the plane can’t fly. The kids run a courtroom — Kapi prosecutes, Tara presides, Baba is accused of being present. It’s in Chintu’s bed, because it smells of Maya."],
  [38, "Landing Strip", "Maya’s repainting the strip and the kids are banned from the runway, so it’s theirs from the air only — a fleet of paper planes from the rail. Maya paints around them."],
  [39, "Bholu’s Banana", "Bholu arrives without a banana and the kids can’t proceed until it’s explained. Chintu offers his toy plane as a substitute — the biggest thing he has ever offered anyone."],
  [40, "Grounded Again", "A deliberate replay of Episode 1, a season later. Kapi doesn’t need to explain. Tara has her sash on before anyone speaks. Baba brings the chai to the crate uncalled."],
  [41, "Quiet Ma", "Maya asks for quiet, so the kids invent Silent Airlines: every role from Episode 1 in mime. Baba, for the first time, is good at it. Maya follows the flight by the creak of the deck."],
  [42, "Postcard", "Tara wants to send a postcard to the Far Hill. There is no post, so the kids build one. The leaf is left at the top of the ladder for the wind. Maya flies it up the hill herself and never says so."],
  [43, "Shop", "The deck becomes a shop selling everything on the deck. Baba can’t afford his own newspaper. Bholu, arriving with a banana, is suddenly the richest monkey in the valley and buys the chair."],
  [44, "Wings", "Kapi wants to fly, properly. Maya gives him a morning in the pilot’s seat with the engine off, learning every switch, while Tara reads the checklist. “Ready for take-off.” “Not yet.” He nods."],
  [45, "Fort", "Kapi and Tara have fallen out and the deck is divided — a fort each, Baba as the border, Maya as Switzerland. War is fought with leaves and lost when the chai table goes over. “Same deck.”"],
  [46, "Coracle Two", "Back on the lake because Baba wants to learn to stop it spinning. Maya instructs, the children examine. Fourth attempt, he stops the coracle dead in the middle of the lake. “Now what?” “Now this.”"],
  [47, "The Newspaper", "Baba’s paper — tray table, windsock, runway — is finally torn. The kids hold a funeral. Baba attends with dignity and then, with nothing to read, watches the family all morning instead."],
  [48, "Weather Two", "Chintu is the wind again, but helpful: drying washing, cooling chai, filling the windsock. Tara issues him a work permit. Told he was useful, he’s so proud he has to sit down."],
  [49, "Bholu’s Deck", "The family visits Bholu’s wall by invitation and the roles flip: he is the host and cannot be cast in anything. Nobody plays a game. It’s the best afternoon of the season."],
  [50, "Chintu’s Turn", "Chintu invents the game. One rule: everyone is the engine. Kapi, Tara, Baba, Maya and Bholu run in circles while Chintu sits in the pilot’s seat and doesn’t fly anywhere. “Good engine.”"],
  [51, "The Map", "Tara wants the map redrawn properly, with a ruler. Kapi objects: the question mark is still on it. They redraw the whole valley and it comes out different — and for the first time Bholu’s wall is on it."],
  [52, "Higher Together", "The plane is fixed and nothing stops them flying. The kids don’t want to: they’ve built the whole valley on the deck to show their parents round, with Bholu as guide. Then, because it’s earned, they fly to the real one."]
];

const BLOCKS = [
  { label: "1–12", from: 1, to: 12 },
  { label: "13–26", from: 13, to: 26 },
  { label: "27–39", from: 27, to: 39 },
  { label: "40–52", from: 40, to: 52 }
];

/* Episodes whose storyboard is online. Add an entry per episode as boards arrive. */
const BOARDS = {
  1: { panels: 111, dir: "images/sb/ep01", audio: "audio/ep01.mp3" }
};

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- family ---------- */
const familyEl = document.getElementById("family-grid");
familyEl.innerHTML = CHARACTERS.map((c) => `
  <button class="mate" type="button" data-char="${c.id}" style="--mate:${c.colour}">
    <span class="say">${esc(c.say)}</span>
    <span class="mate-disc"><img src="images/char-${c.id}.webp" alt="${esc(c.name)}" loading="lazy" width="300" height="520"></span>
    <span class="mate-name">${esc(c.name)}</span>
    <span class="mate-role">${esc(c.age)}</span>
  </button>`).join("");

const dlg = document.getElementById("charDialog");
const dlgBody = document.getElementById("charBody");

familyEl.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-char]");
  if (!btn) return;
  const c = CHARACTERS.find((x) => x.id === btn.dataset.char);
  dlgBody.innerHTML = `
    <div class="sheetwrap" style="--mate:${c.colour}">
      <img class="sheet" src="images/sheet-${c.id}.webp" alt="${esc(c.name)} model sheet" width="1200" height="671">
    </div>
    <div class="sheetcopy">
      <p class="eyebrow">${esc(c.role)}</p>
      <h3>${esc(c.name)}</h3>
      <p class="lede">${esc(c.blurb)}</p>
      <dl class="facts">
        ${c.rows.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join("")}
      </dl>
    </div>`;
  dlg.showModal();
});
document.getElementById("charClose").addEventListener("click", () => dlg.close());
dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });

/* ---------- the valley ---------- */
document.getElementById("places").innerHTML = LOCATIONS.map((l) => `
  <article class="place">
    <img src="images/${l.img}.webp" alt="${esc(l.name)}" loading="lazy" width="1100" height="615">
    <div class="place-copy">
      <h3>${esc(l.name)}</h3>
      <p>${esc(l.text)}</p>
    </div>
  </article>`).join("");

/* ---------- play ---------- */
const gamesEl = document.getElementById("games");
const playChips = document.getElementById("playChips");
let playFilter = "all";

function renderGames() {
  const list = ACTIVITIES.filter((a) => playFilter === "all" || a.from === playFilter);
  gamesEl.innerHTML = list.map((a) => `
    <article class="game" data-from="${a.from}">
      ${a.shot ? `<img class="game-shot" src="${a.shot}" alt="" loading="lazy">` : ""}
      <p class="eyebrow">${esc(a.source)}</p>
      <h3>${esc(a.title)}</h3>
      <p>${esc(a.text)}</p>
      <p class="kit"><span>You need</span>${esc(a.kit)}</p>
    </article>`).join("");
}
renderGames();

if (playChips) {
  playChips.addEventListener("click", (e) => {
    const b = e.target.closest("[data-filter]");
    if (!b) return;
    playFilter = b.dataset.filter;
    playChips.querySelectorAll("[data-filter]").forEach((x) => x.classList.toggle("on", x === b));
    renderGames();
  });
}

document.getElementById("pickGame").addEventListener("click", () => {
  const cards = [...gamesEl.querySelectorAll(".game")];
  cards.forEach((c) => c.classList.remove("picked"));
  const pick = cards[Math.floor(Math.random() * cards.length)];
  void pick.offsetWidth;
  pick.classList.add("picked");
  pick.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" });
  say(`Today’s game: ${pick.querySelector("h3").textContent}`);
});

/* ---------- episodes ---------- */
const grid = document.getElementById("epGrid");
const count = document.getElementById("epCount");
const search = document.getElementById("epSearch");
const tabs = document.getElementById("epTabs");

tabs.innerHTML = [{ label: "All 52", from: 1, to: 52, key: "all" }]
  .concat(BLOCKS.map((b) => ({ ...b, key: b.label })))
  .map((b, i) => `<button type="button" class="tab${i === 0 ? " on" : ""}" data-key="${b.key}" data-from="${b.from}" data-to="${b.to}">${b.label}</button>`)
  .join("");

function render() {
  const q = search.value.trim().toLowerCase();
  const active = tabs.querySelector(".tab.on");
  const from = +active.dataset.from, to = +active.dataset.to;
  const list = EPISODES.filter(([n, t, d]) =>
    n >= from && n <= to && (!q || t.toLowerCase().includes(q) || d.toLowerCase().includes(q) || String(n) === q));
  count.textContent = list.length === 52 ? "All 52 episodes of season one"
    : `${list.length} episode${list.length === 1 ? "" : "s"}${q ? ` matching “${search.value.trim()}”` : ""}`;
  grid.innerHTML = list.map(([n, t, d], i) => {
    const b = BOARDS[n];
    return `
    <article class="ep${b ? " hasboard" : ""}" data-ep="${n}" style="animation-delay:${Math.min(i, 12) * 22}ms">
      <div class="thumb">
        <img src="images/ep${String(n).padStart(2, "0")}.webp" alt="Episode ${n}, ${esc(t)}" loading="lazy" width="640" height="272">
        ${b ? `<span class="sbtag">Storyboard · ${b.panels} panels</span>` : ""}
      </div>
      <div class="ep-copy">
        <p class="ep-no">Episode ${n}</p>
        <h3>${esc(t)}</h3>
        <p>${esc(d)}</p>
        ${b ? `<button class="openboard" type="button" data-open="${n}">Open the storyboard →</button>` : ""}
      </div>
    </article>`;
  }).join("") ||
    `<p class="empty">No episode by that name. Try “chai”, “hill” or “banana”.</p>`;
  wireBoards();
}

tabs.addEventListener("click", (e) => {
  const t = e.target.closest(".tab");
  if (!t) return;
  tabs.querySelectorAll(".tab").forEach((x) => x.classList.toggle("on", x === t));
  render();
});
search.addEventListener("input", render);
render();

/* ---------- storyboards ---------- */
/* Hovering a card with a board opens the viewer; the still thumbnail never changes. */
function wireBoards() {
  grid.querySelectorAll(".ep.hasboard").forEach((card) => {
    let hoverTimer = 0;
    const ep = +card.dataset.ep;
    card.addEventListener("pointerenter", (e) => {
      if (e.pointerType === "touch" || sbDlg.open) return;
      hoverTimer = setTimeout(() => openBoard(ep), 320);
    });
    card.addEventListener("pointerleave", () => clearTimeout(hoverTimer));
    card.addEventListener("click", () => { clearTimeout(hoverTimer); openBoard(ep); });
    card.addEventListener("keydown", (e) => { if (e.key === "Enter") openBoard(ep); });
  });
}

const sbDlg = document.getElementById("sbDialog");
const sbImg = document.getElementById("sbImg");
const sbCount = document.getElementById("sbCount");
const sbRange = document.getElementById("sbRange");
const sbPlay = document.getElementById("sbPlay");
const sbBig = document.getElementById("sbBig");
const sbTime = document.getElementById("sbTime");
const audio = new Audio();
audio.preload = "metadata";

let sbEpisode = 0, sbIndex = 1, sbTimer = 0;

const sbSrc = (ep, i) => `${BOARDS[ep].dir}/p${String(i).padStart(3, "0")}.webp`;
const clock = (s) => {
  if (!isFinite(s)) return "0:00";
  const m = Math.floor(s / 60);
  return `${m}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
};

/* one panel per equal slice of the narration */
const panelAt = (t) => {
  const b = BOARDS[sbEpisode];
  const d = audio.duration || b.duration || 1;
  return Math.min(b.panels, Math.floor((t / d) * b.panels) + 1);
};
const timeOf = (i) => {
  const b = BOARDS[sbEpisode];
  const d = audio.duration || b.duration || 1;
  return ((i - 1) / b.panels) * d;
};

function showPanel(i, prefetch = true) {
  const b = BOARDS[sbEpisode];
  const n = Math.max(1, Math.min(b.panels, i));
  if (n !== sbIndex || !sbImg.src) {
    sbIndex = n;
    sbImg.src = sbSrc(sbEpisode, n);
    sbImg.alt = `Episode ${sbEpisode}, storyboard panel ${n} of ${b.panels}`;
    sbCount.textContent = `Shot ${n} / ${b.panels}`;
    if (prefetch) {
      for (let k = 1; k <= 3; k++) {
        if (n + k <= b.panels) { const im = new Image(); im.src = sbSrc(sbEpisode, n + k); }
      }
    }
  }
}

function sbPause() {
  audio.pause();
  clearInterval(sbTimer); sbTimer = 0;
  sbPlay.textContent = "▶ Play with narration";
  sbBig.hidden = false;
}

function sbStart() {
  const b = BOARDS[sbEpisode];
  sbBig.hidden = true;
  sbPlay.textContent = "❚❚ Pause";
  if (b.audio) {
    audio.play().catch(() => { sbPause(); say("Your browser blocked the sound — press play once more."); });
  } else {
    clearInterval(sbTimer);
    sbTimer = setInterval(() => showPanel(sbIndex >= b.panels ? 1 : sbIndex + 1), 420);
  }
}

function sbToggle() { (audio.paused && !sbTimer) ? sbStart() : sbPause(); }

audio.addEventListener("timeupdate", () => {
  if (!sbEpisode) return;
  showPanel(panelAt(audio.currentTime));
  sbRange.value = audio.currentTime;
  sbTime.textContent = `${clock(audio.currentTime)} / ${clock(audio.duration)}`;
});
audio.addEventListener("loadedmetadata", () => {
  sbRange.max = audio.duration || 1;
  sbTime.textContent = `0:00 / ${clock(audio.duration)}`;
});
audio.addEventListener("ended", () => { sbPause(); showPanel(BOARDS[sbEpisode].panels); });

function openBoard(ep) {
  const b = BOARDS[ep];
  if (!b || sbDlg.open) return;
  const row = EPISODES.find(([n]) => n === ep);
  sbEpisode = ep;
  document.getElementById("sbEp").textContent = `Episode ${ep} · ${b.panels} panels`;
  document.getElementById("sbTitle").textContent = row ? row[1] : "";
  if (b.audio && !audio.src.endsWith(b.audio)) { audio.src = b.audio; }
  audio.currentTime = 0;
  sbRange.value = 0;
  sbIndex = 0;
  showPanel(1);
  sbBig.hidden = false;
  sbPlay.textContent = "▶ Play with narration";
  sbPlay.hidden = !b.audio ? false : false;
  sbDlg.showModal();
}

function step(delta) {
  const wasPlaying = !audio.paused;
  const n = Math.max(1, Math.min(BOARDS[sbEpisode].panels, sbIndex + delta));
  showPanel(n);
  if (BOARDS[sbEpisode].audio) {
    audio.currentTime = timeOf(n);
    sbRange.value = audio.currentTime;
    if (!wasPlaying) sbPause();
  }
}

document.getElementById("sbPrev").addEventListener("click", () => step(-1));
document.getElementById("sbNext").addEventListener("click", () => step(1));
sbPlay.addEventListener("click", sbToggle);
sbBig.addEventListener("click", sbStart);
sbRange.addEventListener("input", () => {
  const t = +sbRange.value;
  audio.currentTime = t;
  showPanel(panelAt(t));
  sbTime.textContent = `${clock(t)} / ${clock(audio.duration)}`;
});
document.getElementById("sbClose").addEventListener("click", () => sbDlg.close());
sbDlg.addEventListener("close", sbPause);
sbDlg.addEventListener("click", (e) => { if (e.target === sbDlg) sbDlg.close(); });
sbDlg.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") { e.preventDefault(); step(1); }
  else if (e.key === "ArrowLeft") { e.preventDefault(); step(-1); }
  else if (e.key === " ") { e.preventDefault(); sbToggle(); }
});

/* ---------- toast ---------- */
const toastEl = document.getElementById("toast");
let toastTimer;
function say(text) {
  toastEl.textContent = text;
  toastEl.classList.add("on");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove("on"), 3200);
}

/* ---------- Kapi and Chintu on the vines ---------- */
const HANGERS = [
  { rail: "railLeft", id: "kapi", lines: ["“Nobody move.”", "“CABIN CREW — PREPARE FOR LANDING!”", "“Sir. The aircraft door is closed.”"] },
  { rail: "railRight", id: "chintu", lines: ["“Flying day.”", "“I’m the engine.”", "“BRRRRRR—”"] }
];

HANGERS.forEach((h) => {
  const rail = document.getElementById(h.rail);
  if (!rail) return;
  const btn = document.createElement("button");
  btn.className = "hanger";
  btn.type = "button";
  btn.setAttribute("aria-label", `${h.id} — say something`);
  btn.innerHTML = `<span class="hopper"><img src="images/char-${h.id}.webp" alt="" width="300" height="520"></span><span class="bubble"></span>`;
  const bubble = btn.querySelector(".bubble");
  let i = 0;
  const shake = () => {
    bubble.textContent = h.lines[i++ % h.lines.length];
    btn.classList.add("talk", "jolt");
    setTimeout(() => btn.classList.remove("jolt"), 2200);
    clearTimeout(btn._t);
    btn._t = setTimeout(() => btn.classList.remove("talk"), 2400);
  };
  btn.addEventListener("click", shake);
  btn.addEventListener("mouseenter", () => { if (!btn.classList.contains("talk")) shake(); });
  rail.appendChild(btn);
});

/* ---------- paper plane ---------- */
document.getElementById("planeBtn").addEventListener("click", () => {
  const p = document.createElement("div");
  p.className = "flier";
  p.style.top = `${30 + Math.random() * 35}vh`;
  p.innerHTML = `<svg width="64" height="64" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M2 12l20-9-7 20-3-8-10-3z" fill="#FFF3DC" stroke="#12354F" stroke-width="1.1" stroke-linejoin="round"/>
    <path d="M22 3l-10 9" stroke="#12354F" stroke-width="1.1"/></svg>`;
  document.body.appendChild(p);
  p.addEventListener("animationend", () => p.remove());
  setTimeout(() => p.remove(), 5000);
});


/* ---------- the plane crosses the page now and then ---------- */
function flyPlane() {
  if (reduced || document.hidden) return;
  const ltr = Math.random() < 0.5;                 /* the art faces left, so ltr gets mirrored */
  const el = document.createElement("div");
  el.className = "flyer" + (ltr ? " ltr" : "");
  el.innerHTML = `<div class="swing"><img src="images/plane-fly.webp" alt="" width="190" height="89"></div>`;
  el.style.top = `${90 + Math.random() * Math.max(120, window.innerHeight * 0.42)}px`;
  document.body.appendChild(el);

  const w = window.innerWidth;
  const from = ltr ? -320 : w + 60;
  const to = ltr ? w + 320 : -380;
  const anim = el.animate(
    [{ transform: `translateX(${from}px)` }, { transform: `translateX(${to}px)` }],
    { duration: 14000 + Math.random() * 5000, easing: "linear" }
  );

  const smoke = setInterval(() => {
    const img = el.querySelector("img");
    if (!img) return;
    const r = img.getBoundingClientRect();
    if (r.right < -40 || r.left > w + 40) return;
    const p = document.createElement("div");
    p.className = "puff";
    const size = 12 + Math.random() * 10;
    p.style.width = p.style.height = `${size}px`;
    p.style.left = `${(ltr ? r.left + 4 : r.right - 16) + (Math.random() * 10 - 5)}px`;
    p.style.top = `${r.top + r.height * 0.52 + (Math.random() * 10 - 5)}px`;
    p.style.setProperty("--dx", `${(ltr ? -1 : 1) * (18 + Math.random() * 26)}px`);
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 2700);
  }, 140);

  anim.onfinish = () => { clearInterval(smoke); el.remove(); };
}

function scheduleFlight(first) {
  setTimeout(() => {
    flyPlane();
    scheduleFlight(false);
  }, first ? 7000 : 24000 + Math.random() * 20000);
}
scheduleFlight(true);
document.getElementById("planeBtn").addEventListener("dblclick", flyPlane);

/* ---------- Bholu's six lost bananas ---------- */
const SPOTS = [
  { sel: "#top .hero-in", css: "right:6%;bottom:14%" },
  { sel: "#family .wrap", css: "right:5%;top:10%" },
  { sel: "#valley .wrap", css: "right:3%;top:34%" },
  { sel: "#plane .wrap", css: "left:38%;bottom:6%" },
  { sel: "#episodes .wrap", css: "right:8%;top:2%" },
  { sel: "#play .wrap", css: "left:5%;bottom:12%" }
];
const scoreEl = document.getElementById("score");
const scoreText = document.getElementById("scoreText");
const KEY = "vt-bananas";
let found = 0;
try { found = Math.min(6, parseInt(localStorage.getItem(KEY) || "0", 10) || 0); } catch (e) { found = 0; }

const BANANA = `<svg width="34" height="34" viewBox="0 0 24 24" aria-hidden="true">
  <path d="M5 4c0 7 3 13 10 14 3 .4 5-1 5-2s-2-.4-4-2c-3-2.4-4.6-6-5-10-.2-1.6-2-2-3.6-1.6C6 2.8 5 3.2 5 4z" fill="#FFC426" stroke="#A8710A" stroke-width="1.2"/></svg>`;

function updateScore(bounce) {
  scoreText.textContent = found >= 6 ? "6 / 6 — all found!" : `${found} / 6 bananas`;
  if (bounce) { scoreEl.classList.remove("pop"); void scoreEl.offsetWidth; scoreEl.classList.add("pop"); }
}

SPOTS.forEach((s, i) => {
  const host = document.querySelector(s.sel);
  if (!host) return;
  const b = document.createElement("button");
  b.className = "nana";
  b.type = "button";
  b.style.cssText = s.css;
  b.style.animationDelay = `${i * 0.4}s`;
  b.setAttribute("aria-label", "You found one of Bholu's bananas");
  b.innerHTML = BANANA;
  b.addEventListener("click", () => {
    b.classList.add("gone");
    found = Math.min(6, found + 1);
    try { localStorage.setItem(KEY, String(found)); } catch (e) { /* fine without it */ }
    updateScore(true);
    say(found >= 6
      ? "All six! Bholu has finally finished a delivery."
      : `Banana ${found} of 6. Bholu says thank you and wanders off.`);
    setTimeout(() => b.remove(), 600);
  });
  host.appendChild(b);
});
updateScore(false);
