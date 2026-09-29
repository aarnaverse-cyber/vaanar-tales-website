/* ===================== Vaanar News =====================
   Despatches from the valley. Twenty-two stories, each with its own link
   (#news/<slug>), written and photographed from inside the show's world.
======================================================== */
(() => {
  const page = document.getElementById("newsPage");
  if (!page) return;

  const listEl = document.getElementById("newsList");
  const articleEl = document.getElementById("newsArticle");
  const chipsEl = document.getElementById("newsChips");

  const STORIES = [
    {
      slug: "flight-cleared-then-tea",
      time: "First light",
      kicker: "Transport",
      title: "Plane cleared for take-off — then everybody stays for tea",
      standfirst: "The propeller was fixed by nine. By half past, the crate was a cabin again and nobody had left the deck.",
      byline: "By Tara · Front Desk Correspondent",
      date: "Monday, first light",
      hero: "img/sb/ep01/p001.webp",
      thumb: "img/ep01.webp",
      caption: "The aircraft, ready and unused, at the bottom of the ladder. Picture: Valley Picture Desk",
      body: [
        "The family plane was declared airworthy shortly after breakfast, the head mechanic having replaced a bolt that she now admits was never loose.",
        "What followed has become the valley's most familiar sequence of events. A crate was moved. A tea towel was laid across it. A boarding pass made of a banana leaf was issued to a large passenger who had asked, repeatedly, for ten minutes with a newspaper.",
        "\"Sir. The aircraft door is closed,\" said the captain, aged eight, from the top of the crate. The aircraft door, being a gap between two crates, remained open throughout.",
        "By the time the game reached its destination — the waterfall, then the lake, then the waterfall again — the real aircraft had cooled on the strip below and the chai had gone cold. Both were described afterwards as perfect."
      ]
    },
    {
      slug: "windsock-torn",
      time: "Early morning",
      kicker: "Weather",
      title: "Windsock torn in the night; pilot's bandana pressed into service",
      standfirst: "Every cloth in the treehouse was considered. The final choice flew bareheaded for the rest of the week.",
      byline: "By Kapi · Chief Announcer",
      date: "Tuesday, before the heat",
      hero: "img/airstrip.webp",
      thumb: "img/ep23.webp",
      caption: "The bamboo pole at the head of the strip, waiting for its new sock. Picture: Valley Picture Desk",
      body: [
        "The windsock at the end of the airstrip was found torn in two shortly after dawn, an event the valley's youngest resident described as \"the end of flying for ever\", a position he held for approximately ten seconds.",
        "A committee formed without being asked to. Candidates for the replacement included a newspaper (rejected: not a cloth), a pink hair bow (rejected: too small, and its owner objected), and the kitchen tea towel (rejected: needed for the tray table).",
        "The winning entry was the pilot's own yellow bandana, volunteered without discussion and knotted to the pole before anyone could thank her.",
        "She has flown bareheaded since. Asked about it at the workshop window, she said, \"Dunno what you mean,\" and went back to the propeller."
      ]
    },
    {
      slug: "delivery-completed",
      time: "Mid-morning",
      kicker: "Deliveries",
      title: "Delivery completed: banana reaches recipient after four laps of the deck",
      standfirst: "A neighbour who has never finished a delivery finally finished one. He has not been the same since.",
      byline: "By Chintu · Head Mechanic",
      date: "Wednesday, mid-morning",
      hero: "img/sb/ep01/p046.webp",
      thumb: "img/ep31.webp",
      caption: "Dispatch, tracking and recipient, all of them the same three children. Picture: Valley Picture Desk",
      body: [
        "For thirty episodes of ordinary valley life, the langur from the wall next door has arrived with a banana and left without delivering it. Yesterday, with the help of a dispatch desk, a tracking number written on a leaf and a van made of a crate, the banana arrived.",
        "It travelled the length of the deck four times. It was signed for twice. It was briefly held in customs, a post created that morning by a six-year-old with a stick.",
        "The recipient, the family's pilot, ate it immediately and said it was fine.",
        "The deliverer stood for some time with nothing in his hands. \"I was just doing a delivery,\" he told this paper, and then, quietly, that he had rather liked the delivering."
      ]
    },
    {
      slug: "far-hill-unvisited",
      time: "Afternoon",
      kicker: "The Map",
      title: "Far Hill still marked with a question mark, map confirms",
      standfirst: "Six small stones now sit in a circle at the top. The question mark stays where it is.",
      byline: "By Tara · Front Desk Correspondent",
      date: "Thursday, after the walk",
      hero: "img/map.webp",
      thumb: "img/ep30.webp",
      caption: "The valley as the children drew it, wrong in several charming ways. Picture: Valley Picture Desk",
      body: [
        "The map pinned to the treehouse wall was redrawn this week with a ruler, at the insistence of the valley's rule-keeper, who felt the old one was inaccurate. It was.",
        "The new map is also inaccurate, in different places. The lake has moved. The banana grove has doubled. For the first time, the neighbour's wall appears on it at all, drawn slightly larger than the family's own treehouse.",
        "One feature was carried across without discussion: the question mark in the corner, where the Far Hill sits.",
        "The hill has now been visited three times. There is a small banyan at the top and a flat stone the right shape for sitting on with chai. An attempt was made to cross the question mark off. \"Leave it,\" said the family's father, and it was left."
      ]
    },
    {
      slug: "temple-race",
      time: "Late morning",
      kicker: "Sport",
      title: "Big Temple race ends with every competitor disqualified",
      standfirst: "The winner did not run the course. The last-place finisher received the loudest applause of the season.",
      byline: "By Kapi · Chief Announcer",
      date: "Friday, before lunch",
      hero: "img/temple.webp",
      thumb: "img/ep21.webp",
      caption: "The pillars of the Big Temple courtyard, lanes marked in chalk that had washed away by evening. Picture: Valley Picture Desk",
      body: [
        "The annual race through the pillars of the Big Temple courtyard was run on Friday under rules that were still being written while the athletes were on the start line.",
        "Lane discipline was enforced by a referee, aged six, who disqualified the entire field within the first nine seconds — including, on a technicality she declined to explain, herself.",
        "First place was awarded to a four-year-old who left the course at the second pillar, ran a circle around a boulder, and returned making the sound of an engine.",
        "The final competitor, a large gentleman who walked the entire distance holding a cup of chai, crossed the line to an ovation that startled two parakeets off the wall."
      ]
    },
    {
      slug: "rope-bridge-repaired",
      time: "Midday",
      kicker: "Valley Life",
      title: "Rope bridge repaired at last; nobody will use it",
      standfirst: "The rescue took four times as long as the repair. Everyone agrees this was the correct order of events.",
      byline: "By Bholu · Neighbour",
      date: "Saturday, unfortunately",
      hero: "img/bholuwall.webp",
      thumb: "img/ep18.webp",
      caption: "The wall, the drying bananas and the bridge its owner regrets building. Picture: Valley Picture Desk",
      body: [
        "The rope bridge connecting the family deck to the wall next door snapped on Saturday morning, stranding its owner on his own veranda with a banana and no way across.",
        "A rescue was organised. It involved a pulley that did not work, a plank that was too short, a rope that turned out to be the same rope, and a full safety briefing delivered by a captain in a red cap.",
        "The repair itself, once the pilot was allowed near it, took eleven minutes.",
        "The bridge is now stronger than it has ever been. It has not been crossed since: the children have decided the gap is lava, and the only approved route across is a father lying flat between the two decks."
      ]
    },
    {
      slug: "coracle-spins",
      time: "Afternoon",
      kicker: "Water",
      title: "Coracle spins for eleven minutes; passenger reports best afternoon of the year",
      standfirst: "The pilot could have stopped it at any time. She has confirmed that she chose not to.",
      byline: "By Maya · Pilot and Mechanic",
      date: "Sunday, on the lake",
      hero: "img/lake.webp",
      thumb: "img/ep09.webp",
      caption: "The lake below the waterfall, where the coracles are kept. Picture: Valley Picture Desk",
      body: [
        "A family outing to the lake produced the longest continuous coracle spin on record, an estimated eleven minutes, with five passengers aboard and a sixth watching from the shore with a banana.",
        "The vessel is round. It was always going to spin. This was explained to the youngest passenger, who chose not to accept it and attempted to steer using a leaf.",
        "The family's father, a man not built for round boats, spent the duration laughing in a way the rest of the family has described as rare and worth the water damage.",
        "On a return trip this week he asked to learn how to stop the spin. On the fourth attempt he stopped it dead in the middle of the lake. \"Now what?\" he asked. \"Now this,\" said the pilot, and nobody moved for a while."
      ]
    },
    {
      slug: "shop-opens-on-deck",
      time: "Mid-morning",
      kicker: "Business",
      title: "Shop opens on the deck; newspaper now costs four bananas",
      standfirst: "Prices were set by an eight-year-old. The richest monkey in the valley arrived with one banana and bought the chair.",
      byline: "By Tara · Front Desk Correspondent",
      date: "Monday, trading hours",
      hero: "img/deck.webp",
      thumb: "img/ep43.webp",
      caption: "The deck on a trading morning, everything on it for sale including the deck. Picture: Valley Picture Desk",
      body: [
        "A general store opened on the treehouse deck on Monday, stocking everything on the treehouse deck. The cane chair, the chai table, the crates, the rail and one newspaper were all listed at prices the proprietor described as \"fair\".",
        "The newspaper, which its owner had brought from the kitchen that morning, was valued at four bananas. Its owner had none, and was informed that he could not read it.",
        "The valley's economy was briefly upended by the arrival of the neighbour, who came to deliver a single banana and discovered himself to be, by the prevailing exchange rate, extremely wealthy.",
        "He purchased the cane chair, sat in it for four minutes, and gave it back. The newspaper was eventually returned to its owner free of charge, on compassionate grounds."
      ]
    },
    {
      slug: "monsoon-deck-is-a-ship",
      time: "Grey afternoon",
      kicker: "Weather",
      title: "First rain arrives: deck declared a ship, father declared ballast",
      standfirst: "The crew sailed all afternoon. For once, the pilot sat down with a cup of her own.",
      byline: "By Kapi · Chief Announcer",
      date: "Tuesday, in the rain",
      hero: "img/sb/ep01/p090.webp",
      thumb: "img/ep29.webp",
      caption: "Rain over the valley, seen from under the treehouse eaves. Picture: Valley Picture Desk",
      body: [
        "The first serious rain of the season arrived on Tuesday and was immediately reclassified. The deck became a ship, the rain became an ocean, and a six-year-old became captain on the grounds that she had said \"ship\" first.",
        "Roles were assigned at speed. The father was ballast, a position requiring him to sit still in one place, which he accepted with unusual enthusiasm. The youngest was the sea.",
        "Chai was brewed for the crew in what observers agree was a serious quantity.",
        "The afternoon's most remarked-upon moment came near the end, when the family's pilot poured a cup for herself, sat down on a crate, and watched the weather for a full ten minutes without fixing anything."
      ]
    },
    {
      slug: "lost-property-opens",
      time: "Late morning",
      kicker: "Valley Life",
      title: "Lost property office opens after captain's cap goes missing",
      standfirst: "The cap was located on a neighbour. The captain discovered that the cap was never the point.",
      byline: "By Bholu · Neighbour",
      date: "Wednesday, again",
      hero: "img/sb/ep01/p065.webp",
      thumb: "img/ep07.webp",
      caption: "The deck during the search, every crate opened twice. Picture: Valley Picture Desk",
      body: [
        "A red cap belonging to the valley's ranking captain went missing on Wednesday, triggering the fastest institutional response the deck has seen: a lost property office, complete with a desk, a ledger and a queue.",
        "Nobody obeyed any orders during the search. This was noted, loudly, by the person whose orders they were.",
        "The cap was found on the head of the neighbour from the wall, who had assumed it was a gift and had been wearing it politely for some time.",
        "\"He's still the captain without it,\" the middle child observed, filing the item under 'returned'. The captain has worn the cap backwards ever since, which in this valley means the game is on."
      ]
    },
    {
      slug: "airstrip-repainted",
      time: "Afternoon",
      kicker: "Transport",
      title: "Airstrip repainted; paper fleet lands first",
      standfirst: "The children were banned from the runway. So they took to the air instead.",
      byline: "By Chintu · Head Mechanic",
      date: "Thursday, wet paint",
      hero: "img/sb/ep01/p022.webp",
      thumb: "img/ep38.webp",
      caption: "Fresh markings on the packed earth, drying in the afternoon sun. Picture: Valley Picture Desk",
      body: [
        "Maintenance work on the valley's only runway closed it to foot traffic on Thursday, with a clear instruction issued from the top of the ladder: nobody on the strip.",
        "The instruction was honoured. Within minutes, a fleet of paper aircraft was launched from the deck rail, and the runway received eleven landings without a single pair of feet touching it.",
        "The pilot, holding a brush, considered the situation and painted around them.",
        "By evening the strip carried a fresh white centre line and, at its northern end, the faint outline of a paper plane preserved in the paint. It has not been removed."
      ]
    },
    {
      slug: "stones-in-a-circle",
      time: "Golden hour",
      kicker: "The Map",
      title: "Six stones found in a circle beneath the small banyan",
      standfirst: "Nobody has claimed responsibility. One of the stones is for a neighbour who has never been up there.",
      byline: "By Maya · Pilot and Mechanic",
      date: "Friday, golden hour",
      hero: "img/farhill.webp",
      thumb: "img/ep12.webp",
      caption: "The Far Hill from over the wing, at the hour it is usually seen. Picture: Valley Picture Desk",
      body: [
        "Visitors to the Far Hill this week found six flat stones arranged in a rough circle beneath the single small banyan at its summit.",
        "The first was placed some weeks ago by a father looking for somewhere to sit with chai. A second appeared on the next visit, then a third, each roughly the right size for whoever put it there.",
        "The sixth is larger than it needs to be and sits slightly apart from the others, facing the valley. It belongs to the neighbour from the wall, who has never made the trip and has not been told the stone exists.",
        "A drawing of six dots has since appeared beside the question mark on the map. The question mark, as ever, remains."
      ]
    },
    {
      slug: "night-flight-bunks",
      time: "After dark",
      kicker: "Transport",
      title: "Night flight to the lake completed without anyone leaving the bunks",
      standfirst: "Three passengers, one pilot on the floor and a ground crew in the doorway. Cruising altitude: the top bunk.",
      byline: "By Kapi · Chief Announcer",
      date: "Tuesday, late",
      hero: "img/ep08.webp",
      thumb: "img/ep08.webp",
      caption: "The bedroom at moonrise, the round window doing the work of a porthole. Picture: Valley Picture Desk",
      body: [
        "A full service to the lake and back departed the children's bedroom shortly after lights-out on Tuesday, operated entirely in whispers.",
        "The pilot sat on the floor between the bunks and flew by voice alone: the climb over the banana grove, the turn above the waterfall, the long glide down to the water where, she reported, the egrets were already asleep.",
        "The valley's father served as ground crew from the doorway, a post requiring him to stand very still and say nothing, which he has described as the best job he has ever been given.",
        "All three passengers were asleep before the return leg. The flight was logged, in the morning, as complete."
      ]
    },
    {
      slug: "cafe-fourth-cup",
      time: "First light",
      kicker: "Business",
      title: "Café opens on the deck; fourth cup of chai declared nearly right",
      standfirst: "The first three were terrible. Everybody drank them anyway.",
      byline: "By Maya · Pilot and Mechanic",
      date: "Wednesday, before anyone is up",
      hero: "img/sb/ep01/p028.webp",
      thumb: "img/ep17.webp",
      caption: "The deck at first light, before the crates are moved and the day is claimed. Picture: Valley Picture Desk",
      body: [
        "A café opened on the treehouse deck at dawn on Wednesday, staffed by an eight-year-old who had watched his mother make chai for most of his life and had concluded that there was nothing to it.",
        "There is something to it. The first cup was described by its recipient, politely, as \"hot\". The second was worse. The third was poured into a plant, which has not recovered.",
        "The pilot intervened with a single instruction — when to take the pot off the flame — and then went back to the propeller without watching the result.",
        "The fourth cup was nearly right. It was drunk in full, in silence, by a large gentleman who then asked for another and got one."
      ]
    },
    {
      slug: "wind-work-permit",
      time: "Mid-morning",
      kicker: "Weather",
      title: "Wind reports for duty; work permit issued on the spot",
      standfirst: "Told he was useful, the valley's four-year-old weather system was so proud he had to sit down.",
      byline: "By Tara · Front Desk Correspondent",
      date: "Thursday, mid-morning",
      hero: "img/ep48.webp",
      thumb: "img/ep48.webp",
      caption: "Washing drying, chai cooling, windsock full — a busy shift for the wind. Picture: Valley Picture Desk",
      body: [
        "The valley's wind — a four-year-old who has held the post since the first week of the season — presented himself for work on Thursday and was, for the first time, given jobs.",
        "The morning's roster included drying the washing, cooling one cup of chai to a drinkable temperature, and filling the windsock for the pilot's benefit, all of which he completed at full volume.",
        "A work permit was drawn up by the front desk on a banana leaf and stamped with a flat stone. It lists his hours as \"all of them\".",
        "He carried it for the rest of the day. Told at lunchtime that he had been genuinely useful, he sat down on the step and did not move for some minutes."
      ]
    },
    {
      slug: "delivery-without-banana",
      time: "Midday",
      kicker: "Deliveries",
      title: "Deliverer arrives without banana; toy plane offered as substitute",
      standfirst: "Valley business came to a stop until the matter could be explained. It never was.",
      byline: "By Chintu · Head Mechanic",
      date: "Friday, midday",
      hero: "img/deck.webp",
      thumb: "img/ep39.webp",
      caption: "The deck at noon, trading suspended pending an explanation. Picture: Valley Picture Desk",
      body: [
        "The neighbour from the wall arrived on the deck at midday on Friday carrying nothing at all, an event without precedent in the recorded history of the valley.",
        "Proceedings halted. The front desk was closed. A four-year-old asked whether this meant the banana had been eaten, and was told, firmly, that this was not a question one asks.",
        "In the silence that followed, the youngest resident offered his own toy plane as a substitute delivery — the largest thing he has ever offered anybody, and an item he has not once put down since the season began.",
        "The offer was declined with great care. A banana was produced from the kitchen by the family's father, handed over without comment, and delivered back to him four minutes later."
      ]
    },
    {
      slug: "hopping-zone-toll",
      time: "Early afternoon",
      kicker: "Sport",
      title: "Toll, checkpoint and hopping zone open on the path to the lake",
      standfirst: "A ten-minute walk now takes an hour. Nobody has complained.",
      byline: "By Kapi · Chief Announcer",
      date: "Saturday, early afternoon",
      hero: "img/temple.webp",
      thumb: "img/ep25.webp",
      caption: "The courtyard at the top of the path, where the first toll is collected. Picture: Valley Picture Desk",
      body: [
        "New infrastructure appeared on the path between the treehouse and the lake this week: a toll at the first boulder, a checkpoint at the second, and a marked stretch that may only be crossed hopping.",
        "The toll is one leaf. The checkpoint requires a name, a destination and the answer to one question, which changes daily. Saturday's question was \"what is the plane's best bit?\"",
        "The hopping zone is forty paces long. It has been described by the family's father, who completed it, as the single worst thing that has happened to him this season.",
        "At the lake, the eldest child turned around, looked back up the path, and observed that you can see the treehouse from here. The walk has since been rated, by all six participants, the best one they have taken."
      ]
    },
    {
      slug: "grandmothers-crate",
      time: "Afternoon",
      kicker: "Valley Life",
      title: "Museum opens for one afternoon; the sandals fit",
      standfirst: "A crate of a grandmother's things arrived. The real stories turned out to be better than the exhibition.",
      byline: "By Tara · Front Desk Correspondent",
      date: "Sunday, afternoon",
      hero: "img/ep22.webp",
      thumb: "img/ep22.webp",
      caption: "The exhibition, curated in eleven minutes, admission one leaf. Picture: Valley Picture Desk",
      body: [
        "A wooden crate belonging to the family's grandmother arrived at the treehouse on Sunday and was opened, against all advice, by three children with a museum already in mind.",
        "Exhibits were labelled within the hour. A comb. A tin. A pair of very small sandals, which the youngest resident put on and found, to the surprise of everyone present, fitted him exactly.",
        "They were the first sandals worn by the family's father, some decades and a considerable number of inches ago.",
        "The museum closed early. The afternoon ended with the exhibits back in the crate and their owner telling the stories that went with them, which the curators have since agreed were the better attraction."
      ]
    },
    {
      slug: "wall-joins-the-map",
      time: "Late afternoon",
      kicker: "The Map",
      title: "Neighbour's wall appears on the valley map for the first time",
      standfirst: "Drawn slightly larger than the treehouse. Nobody has suggested correcting it.",
      byline: "By Maya · Pilot and Mechanic",
      date: "Monday, late afternoon",
      hero: "img/sb/ep01/p089.webp",
      thumb: "img/ep51.webp",
      caption: "The map on the treehouse wall, question mark intact. Picture: Valley Picture Desk",
      body: [
        "The redrawing of the valley map, undertaken this week with a ruler and a great deal of argument, has produced one change nobody expected.",
        "In the corner where the old map showed nothing but trees, the neighbour's wall now appears: the crumbling stone, the smaller treehouse on top, the string of drying bananas, all drawn with unusual care.",
        "It is, by some margin, out of scale. It is larger than the family's own treehouse and considerably larger than the plane.",
        "The neighbour has seen it. He looked at it for a while, said \"…Morning?\" to nobody in particular, and went home. The map has not been corrected and, this paper understands, will not be."
      ]
    },
    {
      slug: "full-turnaround",
      time: "Golden hour",
      kicker: "Transport",
      title: "Full turnaround completed: plane serviced, pilot inspected, father oiled",
      standfirst: "In the inventory kept by the maintenance crew, every part of the aircraft includes the people standing near it.",
      byline: "By Chintu · Head Mechanic",
      date: "Tuesday, golden hour",
      hero: "img/keyart.webp",
      thumb: "img/ep20.webp",
      caption: "The crew at the end of a long service, taken at the hour the valley looks its best. Picture: Valley Picture Desk",
      body: [
        "The valley's only aircraft underwent a full service this week, carried out by a maintenance team with an average age of six and a checklist written on four separate leaves.",
        "Every component was inspected. So was the pilot, who submitted to it. So was the family's father, who was oiled with coconut oil at the elbows on the grounds that he creaks.",
        "The neighbour arrived mid-service to deliver a banana, was immediately classified as equipment, and left shining.",
        "The aircraft did not fly afterwards. The crew agreed it was in excellent condition and that this was the important thing."
      ]
    },
    {
      slug: "last-coracle-sundown",
      time: "Dusk",
      kicker: "Water",
      title: "Last coracle in at sundown; lake declared closed until morning",
      standfirst: "Closing time is when the light goes off the water. The front desk has it written down.",
      byline: "By Tara · Front Desk Correspondent",
      date: "Wednesday, sundown",
      hero: "img/sb/ep01/p110.webp",
      thumb: "img/ep46.webp",
      caption: "The valley from over the wing as the light goes, lake below. Picture: Valley Picture Desk",
      body: [
        "Swimming hours at the lake were formalised this week and posted, in large letters, on a leaf pinned to the ladder.",
        "The lake opens when the shadow of the big banyan reaches the third boulder and closes when the light goes off the water, a schedule its author considers perfectly clear.",
        "Wednesday's final crossing was made by two coracles travelling in what the captain insisted on calling formation, arriving at the shore some four minutes apart.",
        "The lake was then declared closed. The valley's father, still in the water at the time, was issued a written warning and a leaf, and walked home dripping and unrepentant."
      ]
    },
    {
      slug: "lamp-still-burning",
      time: "After dark",
      kicker: "Valley Life",
      title: "One lamp still burning: the workshop at the end of a flying day",
      standfirst: "The repair was finished hours ago. The light stays on a while longer anyway.",
      byline: "By Bholu · Neighbour",
      date: "Thursday, after dark",
      hero: "img/workshop.webp",
      thumb: "img/workshop.webp",
      caption: "Tools on the pegboard, spare propeller blades, one lamp. Picture: Valley Picture Desk",
      body: [
        "The last light in the valley most nights comes from the workshop corner above the airstrip, where the family's pilot keeps her tools, her gloves and a clay pot of coconut oil.",
        "Observers on the wall opposite — this correspondent, mainly, on his way home and not, he stresses, watching — report that the repairs are usually finished well before the lamp goes out.",
        "What follows is a period of tidying that does not appear to tidy anything, and a long look through the window at the plane below.",
        "The lamp went out at some point after the children's window did. In the morning the propeller was fixed, as it had been since the afternoon."
      ]
    }
,
    {
      "slug": "cabin-crew-briefing",
      "time": "Mid-morning",
      "kicker": "Transport",
      "title": "Cabin crew briefing held for a flight that will not leave the deck",
      "standfirst": "Nobody needed telling. The sash was on before anyone spoke, and the chai arrived uncalled.",
      "byline": "By Kapi · Chief Announcer",
      "date": "Monday, mid-morning",
      "hero": "img/ep40.webp",
      "thumb": "img/ep40.webp",
      "caption": "The crate cabin, boarded for the fortieth time this season. Picture: Valley Picture Desk",
      "body": [
            "Vaanar Airlines ran its morning service from the deck on Monday with an efficiency that has taken a full season to develop.",
            "No explanation was given and none was required. The middle child had her red sash on before the captain had finished climbing the crate. The father brought his own chai to his own seat without being asked twice, which observers describe as unprecedented.",
            "The aircraft itself remained on the strip below, fuelled, serviced and entirely unused. \"Some things you learn once and keep,\" said the captain, who had learned it in week one."
      ]
    },
    {
      "slug": "passenger-two-safety-demo",
      "time": "Late morning",
      "kicker": "Transport",
      "title": "Passenger Two: father completes full safety demonstration, arms and all",
      "standfirst": "The pilot twisted an ankle. For one morning the crew was a large gentleman coached in words of one syllable.",
      "byline": "By Maya · Pilot and Mechanic",
      "date": "Tuesday, late morning",
      "hero": "img/ep24.webp",
      "thumb": "img/ep24.webp",
      "caption": "The demonstration, performed twice because the first attempt was judged insufficiently serious. Picture: Valley Picture Desk",
      "body": [
            "An ankle injury on the ladder put the valley's pilot in the passenger seat for the first time in living memory, and the deck's largest resident into the role of cabin crew.",
            "He was, by every account including his own, terrible at it. The tray table was delivered upside down. The safety card, a banana leaf, was held the wrong way round for the duration.",
            "Coaching was administered from the seat in single words — \"slower\", \"both arms\", \"again\" — until the demonstration was performed in full, to a cabin of three children who applauded for some time."
      ]
    },
    {
      "slug": "kapi-pilot-seat",
      "time": "First light",
      "kicker": "Transport",
      "title": "Eldest child granted a morning in the pilot's seat, engine off",
      "standfirst": "Every switch learned, every lever named, and not one metre of ground covered.",
      "byline": "By Maya · Pilot and Mechanic",
      "date": "Wednesday, first light",
      "hero": "img/sb/ep01/p111.webp",
      "thumb": "img/ep44.webp",
      "caption": "The cockpit at dawn, checklist read aloud from the right-hand seat. Picture: Valley Picture Desk",
      "body": [
            "The valley's captain was given the pilot's seat shortly after dawn on Wednesday, on one condition: the engine stayed off.",
            "For two hours he learned the switches in order, with the middle child reading the checklist beside him and correcting his pronunciation of every second item.",
            "At the end he said \"ready for take-off\". He was told \"not yet\". He nodded, climbed down, and has mentioned it approximately forty times since."
      ]
    },
    {
      "slug": "silent-airlines",
      "time": "Dusk",
      "kicker": "Transport",
      "title": "Silent Airlines completes a full service in mime",
      "standfirst": "Every role from the first flight, performed without a word, for a mother with a headache.",
      "byline": "By Tara · Front Desk Correspondent",
      "date": "Thursday, dusk",
      "hero": "img/ep41.webp",
      "thumb": "img/ep41.webp",
      "caption": "The evening service, flown entirely in gesture. Picture: Valley Picture Desk",
      "body": [
            "A request for quiet on Thursday evening produced the most disciplined operation of the season: a complete flight, boarding to landing, conducted in total silence.",
            "Boarding passes were handed over in mime. The safety demonstration was performed in mime. The engine, usually the loudest object in the valley, was mimed by its four-year-old operator with his cheeks entirely full of air.",
            "The family's father turned out to be unexpectedly excellent at it. The pilot, lying down in the next room, followed the whole flight by the creak of the deck and did not once ask what was happening."
      ]
    },
    {
      "slug": "village-bus-service",
      "time": "Afternoon",
      "kicker": "Transport",
      "title": "Village bus service announced; fares payable in leaves",
      "standfirst": "A walk to the village for supplies became a scheduled route with announced stops and a bell.",
      "byline": "By Chintu · Head Mechanic",
      "date": "Friday, afternoon",
      "hero": "img/ep14.webp",
      "thumb": "img/ep14.webp",
      "caption": "The route, as operated. The vehicle is the gentleman on the left. Picture: Valley Picture Desk",
      "body": [
            "A supply walk to the village was reclassified as public transport on Friday, without the vehicle being consulted.",
            "Stops were announced at the second boulder, the banana grove and the top of the path. Fares were collected in leaves by a conductor of six, and a bell was provided by a four-year-old at a volume the route did not require.",
            "The service ran to time in both directions. On the return leg, walking alone and carrying the supplies, the vehicle was heard announcing the next stop to nobody at all."
      ]
    },
    {
      "slug": "two-airlines-one-deck",
      "time": "Midday",
      "kicker": "Transport",
      "title": "Two airlines operate from the same deck; planes collide over chai table",
      "standfirst": "One passenger, boarded on both. The carriers turned out to share a destination.",
      "byline": "By Kapi · Chief Announcer",
      "date": "Saturday, midday",
      "hero": "img/ep27.webp",
      "thumb": "img/ep27.webp",
      "caption": "The moment of contact, directly above the chai. Picture: Valley Picture Desk",
      "body": [
            "Competing carriers established themselves at either end of the treehouse deck on Saturday, each operating a single route with a single passenger.",
            "The passenger, a large gentleman who had been reading, was boarded by both airlines within the same minute and has since declined to say which service he preferred.",
            "The aircraft met over the chai table at speed. No injuries were reported, though the chai was lost. Both carriers were, it emerged, flying to the waterfall."
      ]
    },
    {
      "slug": "stopover-far-shore",
      "time": "Golden hour",
      "kicker": "Transport",
      "title": "Stopover: airport built from nothing on the far shore",
      "standfirst": "The repair took fifteen minutes. The wait took forty-five, because the airport had a café.",
      "byline": "By Maya · Pilot and Mechanic",
      "date": "Sunday, golden hour",
      "hero": "img/ep16.webp",
      "thumb": "img/ep16.webp",
      "caption": "The terminal at last light — two crates, a rope and a great deal of commitment. Picture: Valley Picture Desk",
      "body": [
            "Engine trouble on the far side of the lake produced, within minutes, a fully staffed airport on a stretch of shore that had never previously had one.",
            "The terminal comprised a check-in desk, a departure lounge, a viewing area and a café. Ground staff numbered three. Passengers numbered one, who was also the café's only customer.",
            "The repair was completed in a quarter of an hour. The aircraft departed forty-five minutes later, at the pilot's discretion, and nobody has asked her about the delay."
      ]
    },
    {
      "slug": "monsoon-returns",
      "time": "Grey afternoon",
      "kicker": "Weather",
      "title": "Monsoon returns; deck reclassified as a ship for the second time this season",
      "standfirst": "Rain became an ocean, the ballast sat still, and the pilot drank a cup of chai she made for herself.",
      "byline": "By Tara · Front Desk Correspondent",
      "date": "Monday, grey afternoon",
      "hero": "img/ep29.webp",
      "thumb": "img/ep29.webp",
      "caption": "The ship, under way, in weather that has not let up since morning. Picture: Valley Picture Desk",
      "body": [
            "Heavy rain arrived over the valley on Monday and was reclassified within ninety seconds, as it was the first time.",
            "Roles were assigned at speed and without appeal: captain, ballast, sea. The ballast, who is large and was reading, discovered that his duties consisted entirely of sitting still, and accepted the post with enthusiasm.",
            "Chai was brewed in serious quantity for the crew. For the second time this season, the valley's pilot was observed to sit down with a cup of her own and watch the weather for ten full minutes."
      ]
    },
    {
      "slug": "wind-stops-without-warning",
      "time": "Early afternoon",
      "kicker": "Weather",
      "title": "Wind stops without warning; four-year-old asleep at his post",
      "standfirst": "Outdoor activity resumed at once. Nobody had the heart to wake him for eleven minutes.",
      "byline": "By Maya · Pilot and Mechanic",
      "date": "Tuesday, early afternoon",
      "hero": "img/ep04.webp",
      "thumb": "img/ep04.webp",
      "caption": "The weather system, off duty. Picture: Valley Picture Desk",
      "body": [
            "The valley's wind — held, as ever, by its youngest resident — stopped abruptly on Tuesday afternoon following a lengthy negotiation over a banana.",
            "The pilot had spent the morning trading with the weather, offering increasingly small concessions until the wind, satisfied and entirely worn out, sat down against a crate.",
            "He slept for eleven minutes. He was then woken and told, gently, that the wind had stopped, news he received with the seriousness of a forecaster reading his own bulletin."
      ]
    },
    {
      "slug": "heat-advisory",
      "time": "Midday",
      "kicker": "Weather",
      "title": "Heat advisory issued; all games moved under the banyan",
      "standfirst": "Front desk announces shade hours. Compliance is total, which is unusual.",
      "byline": "By Tara · Front Desk Correspondent",
      "date": "Wednesday, midday",
      "hero": "img/ep35.webp",
      "thumb": "img/ep36.webp",
      "caption": "The courtyard at noon, empty for the first time this week. Picture: Valley Picture Desk",
      "body": [
            "An advisory was posted at the ladder on Wednesday morning declaring the hours between the shadow leaving the second boulder and returning to it as shade hours.",
            "All games were relocated under the big banyan accordingly, including one that requires running in circles and now cannot be played properly.",
            "Compliance was complete. The only recorded breach was by a large gentleman who crossed the courtyard for a newspaper and was issued a written warning on a leaf."
      ]
    },
    {
      "slug": "windsock-full-three-days",
      "time": "Early morning",
      "kicker": "Weather",
      "title": "Windsock full for three days; pilot suspiciously cheerful",
      "standfirst": "Ideal conditions have persisted since Monday. The aircraft has not moved.",
      "byline": "By Kapi · Chief Announcer",
      "date": "Thursday, early morning",
      "hero": "img/ep38.webp",
      "thumb": "img/airstrip.webp",
      "caption": "The strip at first light, sock full, aircraft exactly where it was. Picture: Valley Picture Desk",
      "body": [
            "Conditions over the valley have been close to perfect for three consecutive days, the windsock standing out straight from its bamboo pole each morning since Monday.",
            "The aircraft has not left the strip. The propeller is fixed, the tanks are full, and the log book shows no entries.",
            "Asked directly whether she intended to fly, the valley's pilot said \"hm\", looked down the ladder at whatever the children were building on the deck, and went back to polishing something that did not need polishing."
      ]
    },
    {
      "slug": "first-fog",
      "time": "First light",
      "kicker": "Weather",
      "title": "First fog of the season; the Far Hill disappears entirely",
      "standfirst": "The one place nobody has been became, for two hours, a place nobody could see.",
      "byline": "By Bholu · Neighbour",
      "date": "Friday, first light",
      "hero": "img/sb/ep01/p005.webp",
      "thumb": "img/ep26.webp",
      "caption": "The valley at first light, under cloud that had not been forecast by anyone. Picture: Valley Picture Desk",
      "body": [
            "Fog filled the valley before dawn on Friday, reducing visibility to the length of the airstrip and removing the Far Hill from view altogether.",
            "The youngest resident was of the opinion that it had gone. This theory was taken seriously for longer than it deserved and disproved shortly after nine, when the fog lifted and the hill was found to be where it has always been.",
            "The question mark on the map was checked, twice, and left alone."
      ]
    },
    {
      "slug": "night-wind-rattles-bridge",
      "time": "After dark",
      "kicker": "Weather",
      "title": "Night wind rattles the rope bridge; nobody sleeps, everybody pretends",
      "standfirst": "The bridge held. Three children did not, and arrived downstairs at intervals of four minutes.",
      "byline": "By Bholu · Neighbour",
      "date": "Saturday, after dark",
      "hero": "img/ep08.webp",
      "thumb": "img/bholuwall.webp",
      "caption": "The wall and the bridge, photographed from the deck after the lamps went out. Picture: Valley Picture Desk",
      "body": [
            "A strong wind came up the valley after dark on Saturday and found the rope bridge, which spent the night making a sound this correspondent can only describe as personal.",
            "Three children were reported downstairs in the course of the night, each with a separate and entirely unrelated reason for being awake.",
            "The bridge was inspected at dawn and declared sound. Its owner, who did not sleep either, has requested that nobody mention it again."
      ]
    },
    {
      "slug": "rain-stops-play",
      "time": "Grey afternoon",
      "kicker": "Weather",
      "title": "Rain stops play; funeral held for a newspaper",
      "standfirst": "Used as tray table, windsock and runway, it finally tore. The service was well attended.",
      "byline": "By Kapi · Chief Announcer",
      "date": "Sunday, grey afternoon",
      "hero": "img/ep47.webp",
      "thumb": "img/ep47.webp",
      "caption": "The mourners, assembled on the deck in weather that suited the occasion. Picture: Valley Picture Desk",
      "body": [
            "A newspaper that has served the valley as a tray table, an emergency windsock, a runway and, on one occasion, a roof, tore beyond use on Sunday afternoon.",
            "A funeral was held on the deck in steady rain. Three speeches were made. The longest was delivered by a four-year-old and consisted of engine noises.",
            "Its owner attended with dignity, said nothing, and then — having nothing at all to read — spent the remainder of the morning watching his family, which he later described as an acceptable substitute."
      ]
    },
    {
      "slug": "storm-warning-leaf",
      "time": "Dusk",
      "kicker": "Weather",
      "title": "Storm warning issued by a six-year-old with a leaf",
      "standfirst": "No storm arrived. The warning remains in force pending further notice.",
      "byline": "By Chintu · Head Mechanic",
      "date": "Monday, dusk",
      "hero": "img/sb/ep01/p076.webp",
      "thumb": "img/ep29.webp",
      "caption": "The valley at dusk, under the cloud that was held responsible. Picture: Valley Picture Desk",
      "body": [
            "A formal storm warning was posted at the top of the ladder on Monday evening, written on a banana leaf and signed with a paw print.",
            "The evidence consisted of one grey cloud, a change in the light and the opinion of the valley's rule-keeper, who does not require a second source.",
            "No storm materialised. The warning has not been withdrawn. \"That's allowed,\" its author said, when the matter was raised at the desk."
      ]
    },
    {
      "slug": "dispatch-office-opens",
      "time": "Mid-morning",
      "kicker": "Deliveries",
      "title": "Dispatch office opens under the ladder; three staff, no customers",
      "standfirst": "Tracking numbers are issued on leaves. The one delivery in the valley does not use the service.",
      "byline": "By Tara · Front Desk Correspondent",
      "date": "Monday, mid-morning",
      "hero": "img/sb/ep01/p046.webp",
      "thumb": "img/ep31.webp",
      "caption": "The dispatch desk, fully staffed, awaiting its first parcel. Picture: Valley Picture Desk",
      "body": [
            "A dispatch office opened beneath the treehouse ladder this week, staffed by three children and equipped with a ledger, a stamp made from a flat stone and a considerable number of leaves.",
            "Services offered include tracking, signature on arrival, express handling and a customs post, which was added on the first morning because somebody thought of it.",
            "The valley's only regular delivery — one banana, most days, from the wall next door — has not yet used the office. Its operator says he prefers to carry it himself, which is, he concedes, the whole difficulty."
      ]
    },
    {
      "slug": "banana-held-in-customs",
      "time": "Midday",
      "kicker": "Deliveries",
      "title": "Banana held in customs for six minutes",
      "standfirst": "No reason was given. A stamp was applied. The parcel proceeded.",
      "byline": "By Chintu · Head Mechanic",
      "date": "Tuesday, midday",
      "hero": "img/ep31.webp",
      "thumb": "img/ep31.webp",
      "caption": "The customs post, established that morning between two crates. Picture: Valley Picture Desk",
      "body": [
            "A single banana travelling the length of the deck was detained at the customs post on Tuesday for a period of six minutes.",
            "The officer, aged six, declined to explain the hold, saying only that there were checks. A stamp was eventually applied with a flat stone and the parcel released.",
            "The deliverer waited throughout with the patience of a man who has never once completed a delivery and was not, on the evidence, expecting to start now."
      ]
    },
    {
      "slug": "second-attempt-tail",
      "time": "Late morning",
      "kicker": "Deliveries",
      "title": "Second attempt abandoned; deliverer distracted by his own tail",
      "standfirst": "It is a tail, he says. Nobody in the valley has ever disputed this.",
      "byline": "By Kapi · Chief Announcer",
      "date": "Wednesday, late morning",
      "hero": "img/ep28.webp",
      "thumb": "img/ep28.webp",
      "caption": "The tail in question, under examination by three specialists. Picture: Valley Picture Desk",
      "body": [
            "A second delivery attempt in as many days ended before it began on Wednesday, when the deliverer's tail was declared, by the valley's head mechanic, to be rattling.",
            "The head mechanic is four. He had the gloves on. Under valley rules, which nobody can produce in writing, this makes his diagnosis final.",
            "The tail was examined, adjusted, oiled and pronounced repaired. \"It's a TAIL,\" its owner said, several times, to no effect whatsoever."
      ]
    },
    {
      "slug": "tail-rattle-repaired",
      "time": "Afternoon",
      "kicker": "Deliveries",
      "title": "Tail rattle repaired after fifty-one weeks",
      "standfirst": "A ceremony was held. The rattle had been present since the second week of the season.",
      "byline": "By Maya · Pilot and Mechanic",
      "date": "Thursday, afternoon",
      "hero": "img/ep28.webp",
      "thumb": "img/ep28.webp",
      "caption": "The ceremonial repair, conducted with the big spanner and no particular urgency. Picture: Valley Picture Desk",
      "body": [
            "The longest-running mechanical fault in the valley was formally repaired on Thursday afternoon in front of the entire family.",
            "The rattle — audible, according to its four-year-old diagnostician, since the second week of the season — was addressed with the big spanner, a quantity of coconut oil and a certificate written on a leaf.",
            "Whether anything was wrong in the first place is a question this paper has decided not to pursue. The patient reports that he feels, on balance, slightly better."
      ]
    },
    {
      "slug": "van-declared-unroadworthy",
      "time": "Early afternoon",
      "kicker": "Deliveries",
      "title": "Delivery van declared unroadworthy; van is a crate",
      "standfirst": "The inspection was thorough. The vehicle failed on eleven separate points, all of them invented.",
      "byline": "By Tara · Front Desk Correspondent",
      "date": "Friday, early afternoon",
      "hero": "img/ep20.webp",
      "thumb": "img/ep20.webp",
      "caption": "The vehicle, mid-inspection, on the deck it has never left. Picture: Valley Picture Desk",
      "body": [
            "The valley's delivery van failed its inspection on Friday on eleven points, including brakes, lights, seat belts and a wing mirror, none of which it has ever had.",
            "The van is a wooden crate. It was built as a crate, has served as an aeroplane, a shop counter, a boat and a fort, and has been a van since Tuesday.",
            "Repairs were carried out immediately by a mechanic wearing gloves several sizes too large. The vehicle passed its re-inspection at the second attempt and was then, without warning, an aeroplane again."
      ]
    },
    {
      "slug": "leaf-posted-to-hill",
      "time": "Golden hour",
      "kicker": "Deliveries",
      "title": "Parcel of leaves posted to the Far Hill; wind confirmed as courier",
      "standfirst": "Left at the top of the ladder at sundown. Gone by morning. No explanation offered.",
      "byline": "By Chintu · Head Mechanic",
      "date": "Saturday, golden hour",
      "hero": "img/ep42.webp",
      "thumb": "img/ep42.webp",
      "caption": "The postbox, at the hour the post is collected. Picture: Valley Picture Desk",
      "body": [
            "A parcel of four leaves addressed to the Far Hill was posted from the top of the treehouse ladder at sundown on Saturday, the valley having no postal service and, until that afternoon, no postbox.",
            "The wind was named as courier. Terms were not discussed. The parcel was left weighted under a small stone and everybody went in to supper.",
            "By morning the leaves had gone. The family's pilot, who was up before anyone and whose bandana smelled faintly of the hill path, has said nothing at all about it."
      ]
    },
    {
      "slug": "invoice-in-bananas",
      "time": "Late morning",
      "kicker": "Deliveries",
      "title": "Invoice issued in bananas; recipient cannot pay",
      "standfirst": "Four bananas for handling, one for storage. The account remains open.",
      "byline": "By Tara · Front Desk Correspondent",
      "date": "Monday, late morning",
      "hero": "img/ep43.webp",
      "thumb": "img/ep43.webp",
      "caption": "The accounts department, open for business on the chai table. Picture: Valley Picture Desk",
      "body": [
            "An invoice was issued on Monday to a large gentleman for handling, storage and the use of a crate, payable in bananas at the valley's standing rate.",
            "The gentleman, who owns a newspaper and a cup and is otherwise without assets, was unable to settle. A payment plan was drawn up on a second leaf.",
            "The account has since been settled in full by the neighbour from the wall, who had one banana, gave it up immediately, and left before anyone could thank him."
      ]
    },
    {
      "slug": "record-week-no-deliveries",
      "time": "Afternoon",
      "kicker": "Deliveries",
      "title": "Neighbour reports record week: four arrivals, no deliveries",
      "standfirst": "A personal best in one column and an unbroken record in the other.",
      "byline": "By Bholu · Neighbour",
      "date": "Tuesday, afternoon",
      "hero": "img/ep05.webp",
      "thumb": "img/ep05.webp",
      "caption": "The neighbour, on the wall, mid-week and still holding it. Picture: Valley Picture Desk",
      "body": [
            "Four separate delivery attempts were made across the deck this week, the highest number recorded in a single week since the season began.",
            "None were completed. On Monday the recipient was asleep. On Tuesday a game required a sixth body and the parcel was set down. On Wednesday there was a race. On Thursday the deliverer was cast as air-traffic control before reaching the ladder.",
            "The banana is understood to be in good condition. It has been the same banana since Monday."
      ]
    },
    {
      "slug": "night-delivery-attempted",
      "time": "After dark",
      "kicker": "Deliveries",
      "title": "Night delivery attempted; all recipients asleep",
      "standfirst": "The parcel was carried up the ladder at ten and carried back down again at five past.",
      "byline": "By Bholu · Neighbour",
      "date": "Wednesday, after dark",
      "hero": "img/ep08.webp",
      "thumb": "img/ep08.webp",
      "caption": "The treehouse after lights-out, viewed from the rope bridge. Picture: Valley Picture Desk",
      "body": [
            "An out-of-hours delivery was attempted on Wednesday evening on the reasoning that the deck is quiet after dark and nothing can interrupt.",
            "The deck was indeed quiet. It was also, as it turned out, entirely empty, the family having gone up some time earlier and the youngest passenger having already been flown to the lake in whispers.",
            "The deliverer stood for a while in the dark looking at the valley, which he reports is very good at that hour, and then went home with the banana."
      ]
    },
    {
      "slug": "map-redrawn-ruler",
      "time": "Late afternoon",
      "kicker": "The Map",
      "title": "Map redrawn with a ruler; lake moves six inches east",
      "standfirst": "Accuracy was the stated aim. The new map is wrong in entirely new places.",
      "byline": "By Tara · Front Desk Correspondent",
      "date": "Thursday, late afternoon",
      "hero": "img/sb/ep01/p089.webp",
      "thumb": "img/ep51.webp",
      "caption": "The new map, held down at the corners with two stones and a cup. Picture: Valley Picture Desk",
      "body": [
            "The valley map was redrawn this week under protest, with a ruler, by a six-year-old who has never accepted the original.",
            "The lake has moved six inches east. The waterfall is now taller than the treehouse. The banana grove has doubled, and a path that does not exist runs neatly from the strip to the courtyard.",
            "It is, everyone agrees, a great deal tidier. It is also, by the standards of the valley, no more accurate than it was — which is the point of it, and not one anybody intends to raise."
      ]
    },
    {
      "slug": "six-dots-question-mark",
      "time": "Golden hour",
      "kicker": "The Map",
      "title": "Six dots appear beside the question mark",
      "standfirst": "One for each of them, and one for a neighbour who has never made the trip.",
      "byline": "By Maya · Pilot and Mechanic",
      "date": "Friday, golden hour",
      "hero": "img/ep30.webp",
      "thumb": "img/ep30.webp",
      "caption": "The corner of the map, photographed at the hour the hill is usually seen. Picture: Valley Picture Desk",
      "body": [
            "Six small dots were added to the valley map this week, in the corner, beside the question mark that marks the Far Hill.",
            "They correspond to the six flat stones now sitting in a circle under the small banyan at the summit — one placed on each visit, each roughly the size of whoever carried it up.",
            "The sixth belongs to the neighbour from the wall, who has never been up there and has not been told. It is drawn slightly larger than the rest."
      ]
    },
    {
      "slug": "postcard-no-reply",
      "time": "Dusk",
      "kicker": "The Map",
      "title": "Postcard reaches the hill; no reply expected or received",
      "standfirst": "There is no post in the valley, so a postal service was built for one leaf.",
      "byline": "By Kapi · Chief Announcer",
      "date": "Saturday, dusk",
      "hero": "img/ep42.webp",
      "thumb": "img/ep42.webp",
      "caption": "Sundown over the ridge, from the top of the ladder. Picture: Valley Picture Desk",
      "body": [
            "A postcard addressed to the Far Hill left the valley this week, written on a banana leaf in letters large enough to be read from a distance.",
            "The valley has no postal service. One was therefore established, comprising a postbox, a collection time, a stamp and a courier, the last of these being the wind.",
            "No reply has been received. None was expected. The sender has checked the ladder every morning since, which is a different matter entirely."
      ]
    },
    {
      "slug": "halfway-declared",
      "time": "Afternoon",
      "kicker": "The Map",
      "title": "Halfway to the Far Hill declared, located, and sat upon",
      "standfirst": "Nobody knows where halfway is. A boulder was chosen and the question was closed.",
      "byline": "By Chintu · Head Mechanic",
      "date": "Sunday, afternoon",
      "hero": "img/ep26.webp",
      "thumb": "img/ep26.webp",
      "caption": "The family at halfway, on the boulder that settled the matter. Picture: Valley Picture Desk",
      "body": [
            "An expedition to reach the halfway point to the Far Hill on foot set out on Sunday morning without any agreement as to where the halfway point was.",
            "Three separate positions were argued for at length. The matter was resolved by the family's father, who stopped walking, sat down on a boulder and declared it halfway.",
            "The family sat with him and looked at a hill they have all been to. The boulder now appears on the map, drawn as a circle, labelled in careful letters: HALFWAY."
      ]
    },
    {
      "slug": "boulder-named",
      "time": "Late morning",
      "kicker": "The Map",
      "title": "Boulder given official name after nine arguments",
      "standfirst": "Three candidates, two votes, one word nobody can spell. The name stands.",
      "byline": "By Tara · Front Desk Correspondent",
      "date": "Monday, late morning",
      "hero": "img/ep25.webp",
      "thumb": "img/ep25.webp",
      "caption": "The boulder, now official, on the path to the lake. Picture: Valley Picture Desk",
      "body": [
            "The large rounded boulder at the second bend of the lake path was formally named this week after nine arguments and one round of voting that had to be run twice.",
            "Candidates included a name meaning 'big', a name meaning 'the one we sit on', and a name proposed by the valley's four-year-old that is not a word.",
            "The third won. It has been written on the map in letters that take up most of the path, and nobody can spell it the same way twice."
      ]
    },
    {
      "slug": "banana-grove-doubles",
      "time": "Mid-morning",
      "kicker": "The Map",
      "title": "Banana grove doubles in size overnight, on paper",
      "standfirst": "No new trees were planted. The cartographer had room and used it.",
      "byline": "By Bholu · Neighbour",
      "date": "Tuesday, mid-morning",
      "hero": "img/sb/ep01/p093.webp",
      "thumb": "img/ep51.webp",
      "caption": "The grove, unchanged, on the morning after its expansion. Picture: Valley Picture Desk",
      "body": [
            "The banana grove at the foot of the valley was recorded this week as twice its previous size, an expansion achieved entirely with a crayon.",
            "The cartographer, aged six, has explained that the old map left a gap between the grove and the wall, and that gaps are untidy.",
            "The grove itself is unchanged. Its principal user, who visits daily and counts, wishes it to be known that he has not seen a single new tree."
      ]
    },
    {
      "slug": "courtyard-surveyed",
      "time": "Midday",
      "kicker": "The Map",
      "title": "Survey of the courtyard completed using a wooden ruler",
      "standfirst": "Forty-one pillars, one wall, and a set of measurements in units of ruler.",
      "byline": "By Kapi · Chief Announcer",
      "date": "Wednesday, midday",
      "hero": "img/ep21.webp",
      "thumb": "img/temple.webp",
      "caption": "The Big Temple courtyard at noon, mid-survey. Picture: Valley Picture Desk",
      "body": [
            "A full survey of the Big Temple courtyard was completed on Wednesday, conducted entirely with a wooden ruler and a great deal of walking.",
            "The final count was forty-one pillars, one low wall, one stepped platform and three gaps where pillars used to be, which have been marked on the map with dots.",
            "All distances are recorded in rulers. Six rulers to the platform, nine to the wall, twenty-two from end to end. The unit is now in general use in the valley and works perfectly well."
      ]
    },
    {
      "slug": "hill-visited-last-light",
      "time": "Golden hour",
      "kicker": "The Map",
      "title": "Far Hill visited at last light; one flat stone found",
      "standfirst": "The first trip up produced a small banyan, a stone the right shape, and nothing else at all.",
      "byline": "By Maya · Pilot and Mechanic",
      "date": "Thursday, last light",
      "hero": "img/ep12.webp",
      "thumb": "img/ep12.webp",
      "caption": "The hill at the hour it is always seen, from over the wing. Picture: Valley Picture Desk",
      "body": [
            "The Far Hill was reached for the first time this season at the end of a long afternoon, the aircraft landing on the flat ground below the summit with the light already going.",
            "At the top there is a single small banyan and one flat stone, which turned out to be exactly the right shape for a large gentleman to sit on with a cup of chai.",
            "That is the whole of it. There is no treasure on the Far Hill and there never was. On the way home an attempt was made to cross the question mark off the map, and was stopped."
      ]
    }
,
    {
      "slug": "formation-flying-on-foot",
      "time": "Late morning",
      "kicker": "Sport",
      "title": "Formation flying on foot: three vaanars, one wall, no injuries",
      "standfirst": "The valley's newest discipline requires no aircraft and a great deal of arm.",
      "byline": "By Kapi · Chief Announcer",
      "date": "Monday, late morning",
      "hero": "img/ep21.webp",
      "thumb": "img/temple.webp",
      "caption": "The formation on its second pass through the pillars. Picture: Valley Picture Desk",
      "body": [
            "Formation flying on foot was contested in the Big Temple courtyard on Monday, three competitors running the length of the colonnade with their arms out and the engine noise provided from the rear.",
            "Judging was carried out from the low wall by a neighbour who had arrived to deliver a banana and was appointed on the spot.",
            "The formation held for the full length of the courtyard on the second attempt. The judge awarded full marks and then asked, not for the first time, whether he could go home."
      ]
    },
    {
      "slug": "hopping-record-disqualified",
      "time": "Early afternoon",
      "kicker": "Sport",
      "title": "Hopping zone record set and immediately disqualified",
      "standfirst": "Forty paces on one leg. The referee ruled that the wrong leg had been used.",
      "byline": "By Tara · Front Desk Correspondent",
      "date": "Tuesday, early afternoon",
      "hero": "img/ep25.webp",
      "thumb": "img/ep25.webp",
      "caption": "The zone, marked out that morning between two boulders. Picture: Valley Picture Desk",
      "body": [
            "A new record was set in the hopping zone on the lake path this week — forty paces without a foot down, by the valley's eldest child, in front of the entire family.",
            "It stood for eleven seconds. The referee, who wrote the rules that morning, ruled that the attempt had been made on the wrong leg.",
            "No appeal is possible. The rules exist on a single leaf, held by the referee, and are read aloud only when required."
      ]
    },
    {
      "slug": "crate-stacking",
      "time": "Midday",
      "kicker": "Sport",
      "title": "Crate-stacking contest abandoned when the crates become an aeroplane",
      "standfirst": "The tower reached four. Then somebody said 'cabin crew' and the sport was over.",
      "byline": "By Chintu · Head Mechanic",
      "date": "Wednesday, midday",
      "hero": "img/sb/ep01/p076.webp",
      "thumb": "img/ep01.webp",
      "caption": "The crates, briefly a tower, shortly an aircraft. Picture: Valley Picture Desk",
      "body": [
            "A crate-stacking competition was held on the deck on Wednesday with an entry field of three and a stated aim of building the tallest tower in valley history.",
            "The tower reached four crates before the eldest competitor looked at it, turned it on its side and announced boarding.",
            "The contest was not completed. The aircraft flew to the waterfall and back, carrying one reluctant passenger, and the record for crate-stacking remains, as it has all season, three."
      ]
    },
    {
      "slug": "bridge-trials-postponed",
      "time": "Afternoon",
      "kicker": "Sport",
      "title": "Rope-bridge crossing trials postponed; bridge is lava",
      "standfirst": "A newly repaired bridge, an official course, and a surface nobody is permitted to touch.",
      "byline": "By Bholu · Neighbour",
      "date": "Thursday, afternoon",
      "hero": "img/ep34.webp",
      "thumb": "img/ep34.webp",
      "caption": "The approved crossing method, in position. Picture: Valley Picture Desk",
      "body": [
            "Timed crossing trials on the repaired rope bridge were postponed indefinitely on Thursday after the bridge was declared lava by the valley's youngest resident.",
            "The ruling was accepted without argument, as such rulings are. The only approved route across the gap is now a large gentleman lying flat between the two decks, a method that is slower and considerably more comfortable.",
            "The bridge itself remains in excellent condition. It has been crossed twice since it was repaired, both times by its owner, in the dark, when nobody was watching."
      ]
    },
    {
      "slug": "swimming-gala",
      "time": "Midday",
      "kicker": "Sport",
      "title": "Swimming gala held at the lake; all six entrants declared winners",
      "standfirst": "The results were decided at the start line, which saved a great deal of time.",
      "byline": "By Maya · Pilot and Mechanic",
      "date": "Friday, midday",
      "hero": "img/ep09.webp",
      "thumb": "img/lake.webp",
      "caption": "The lake at noon, before the first heat. Picture: Valley Picture Desk",
      "body": [
            "The valley's annual swimming gala was held at the lake on Friday under rules drawn up by a six-year-old and ratified by nobody.",
            "Rule one states that everybody wins. Rule two states that this is not a reason to swim slowly. Rule three concerns the egrets and has never been fully explained.",
            "Six entrants took part, including one who does not swim so much as displace water in an orderly fashion. All six were declared winners. Medals were issued in leaves and lost by evening."
      ]
    },
    {
      "slug": "coracle-spin-championship",
      "time": "Afternoon",
      "kicker": "Sport",
      "title": "Coracle spin championship: eleven minutes, unbeaten",
      "standfirst": "A record set by accident and defended by a father who has since learned to stop it.",
      "byline": "By Kapi · Chief Announcer",
      "date": "Saturday, afternoon",
      "hero": "img/ep46.webp",
      "thumb": "img/ep46.webp",
      "caption": "The defending champion, mid-rotation. Picture: Valley Picture Desk",
      "body": [
            "The eleven-minute continuous coracle spin recorded earlier in the season remains the valley record, and looks likely to stand.",
            "The holder has since taken instruction and can now stop the vessel dead in the middle of the lake, a skill that makes further record attempts impossible and which he demonstrates at every opportunity.",
            "A junior category was proposed this week and rejected on safety grounds by the front desk, whose ruling on such matters is final and occasionally reasonable."
      ]
    },
    {
      "slug": "paper-plane-record",
      "time": "Late morning",
      "kicker": "Sport",
      "title": "Paper plane distance record broken from the rail",
      "standfirst": "Eleven aircraft launched, one landing on the runway itself. The pilot painted around it.",
      "byline": "By Chintu · Head Mechanic",
      "date": "Sunday, late morning",
      "hero": "img/ep38.webp",
      "thumb": "img/ep38.webp",
      "caption": "The launch position, on the deck rail above the strip. Picture: Valley Picture Desk",
      "body": [
            "A fleet of eleven paper aircraft was launched from the deck rail on Sunday morning, during a ban on the use of the runway by feet.",
            "The record — measured in boulders, the valley's preferred unit for distance — now stands at four and a bit, achieved by a design with one wing folded slightly wrong.",
            "One aircraft landed on the wet paint of the newly marked strip. Its outline is still there. It has been left in place and, this paper understands, will remain."
      ]
    },
    {
      "slug": "sleeping-contest",
      "time": "Early afternoon",
      "kicker": "Sport",
      "title": "Sleeping contest held at volume; every guardian loses",
      "standfirst": "One sleeping giant, three loud guardians, and a silence enforced by shouting.",
      "byline": "By Tara · Front Desk Correspondent",
      "date": "Monday, early afternoon",
      "hero": "img/ep32.webp",
      "thumb": "img/ep32.webp",
      "caption": "The giant, asleep, and his guard, not. Picture: Valley Picture Desk",
      "body": [
            "A large gentleman announced on Monday that he intended to sleep, and was immediately recast as a sleeping giant in need of protection.",
            "Three guardians were appointed. Their duty was to maintain absolute silence around the giant, which they did by shouting at one another about how quiet everybody had to be.",
            "The giant slept for forty minutes. He woke to find all three guardians asleep around him, exhausted by the effort of keeping quiet, and did not move for a further twenty minutes so as not to disturb them."
      ]
    },
    {
      "slug": "referee-resigns",
      "time": "Midday",
      "kicker": "Sport",
      "title": "Race referee resigns, reinstates herself, disqualifies everyone",
      "standfirst": "The shortest officiating career in valley history, and the most decisive.",
      "byline": "By Kapi · Chief Announcer",
      "date": "Tuesday, midday",
      "hero": "img/ep21.webp",
      "thumb": "img/ep21.webp",
      "caption": "The official, in position, moments before the first ruling. Picture: Valley Picture Desk",
      "body": [
            "Officiating at Tuesday's pillar race lasted four minutes from appointment to resignation, and a further nine seconds from resignation to reinstatement.",
            "In the interval, every competitor was disqualified, including the referee, who had entered the race and then ruled herself ineligible on a technicality she declined to explain.",
            "The race was run anyway. It was won by a four-year-old who did not follow the course. The result stands and appears, in careful letters, on the deck wall."
      ]
    },
    {
      "slug": "shoe-shop",
      "time": "Mid-morning",
      "kicker": "Valley Life",
      "title": "Shoe shop opens on the deck; only customer walks out in his own shoes",
      "standfirst": "Every pair in the treehouse was for sale. The four-year-old chose the pair he arrived in.",
      "byline": "By Maya · Pilot and Mechanic",
      "date": "Wednesday, mid-morning",
      "hero": "img/ep13.webp",
      "thumb": "img/ep13.webp",
      "caption": "The shop floor, fully stocked, one customer. Picture: Valley Picture Desk",
      "body": [
            "A shoe shop opened on the deck this week, stocked with every pair of shoes in the treehouse and staffed by an eight-year-old with a strong retail manner.",
            "The shop had exactly one customer, aged four, who does not wear shoes and had spent the morning explaining why.",
            "He tried on eleven pairs, asked questions about each, and left wearing his own — which he put on himself, having chosen them, which was the entire object of the exercise and was never mentioned by anybody."
      ]
    },
    {
      "slug": "bedroom-reorganised",
      "time": "After dark",
      "kicker": "Valley Life",
      "title": "Bedroom reorganised: three bunks, three sizes, one argument",
      "standfirst": "The goggles stay on the hook. Everything else was negotiable, loudly, until nine.",
      "byline": "By Kapi · Chief Announcer",
      "date": "Thursday, after dark",
      "hero": "img/ep08.webp",
      "thumb": "img/bedroom.webp",
      "caption": "The room after lights-out, reorganised and quiet at last. Picture: Valley Picture Desk",
      "body": [
            "The children's bedroom was rearranged on Thursday evening, a process lasting two hours and involving every object in it.",
            "The red cap kept its bedpost. The pink bow kept its mirror. The goggles kept their hook, on the grounds that they have always been there and moving them would, in the words of their owner, be the end of everything.",
            "The aeroplane drawings were taken down, sorted, argued over and put back in exactly the same places. The room was declared finished at nine and was, by any measure, identical."
      ]
    },
    {
      "slug": "bholu-hosts",
      "time": "Afternoon",
      "kicker": "Valley Life",
      "title": "Neighbour hosts; nobody plays a game and everyone agrees it was the best afternoon",
      "standfirst": "By invitation, on the wall. The host could not be cast in anything, for once.",
      "byline": "By Bholu · Neighbour",
      "date": "Friday, afternoon",
      "hero": "img/ep49.webp",
      "thumb": "img/ep49.webp",
      "caption": "The wall, receiving visitors. Picture: Valley Picture Desk",
      "body": [
            "The family crossed to the wall next door on Friday afternoon by written invitation, delivered on a leaf and accepted within the minute.",
            "As host, the neighbour could not be cast as air-traffic control, a customer, a judge, the weather, or a sixth body for any purpose whatsoever. This is understood to be the first such afternoon of his life.",
            "No game was played. Bananas were eaten. The children looked at everything on the wall and asked about all of it. The visit has been described by all six participants as the best afternoon of the season."
      ]
    },
    {
      "slug": "chai-table-overturned",
      "time": "Midday",
      "kicker": "Valley Life",
      "title": "Chai table overturned in fort war; ceasefire immediate",
      "standfirst": "Two forts, one border, and a conflict that ended the moment it cost something real.",
      "byline": "By Chintu · Head Mechanic",
      "date": "Saturday, midday",
      "hero": "img/ep45.webp",
      "thumb": "img/ep45.webp",
      "caption": "The border, occupied, shortly before the incident. Picture: Valley Picture Desk",
      "body": [
            "Hostilities broke out on the deck on Saturday following a disagreement between the two eldest children, each of whom built a fort at opposite ends and declared the other's illegal.",
            "The border was held by the family's father, who was reading. The pilot declared herself neutral from the ladder and stayed there.",
            "The war was fought with leaves and ended in under a minute when the chai table went over. \"Same deck,\" said the border, picking up his cup, and both forts were dismantled without further comment."
      ]
    },
    {
      "slug": "parakeet-lands",
      "time": "Early afternoon",
      "kicker": "Valley Life",
      "title": "Parakeet lands on the rail during four minutes of silence",
      "standfirst": "The father invented a game with one instruction: sit here. Nobody has stopped talking about it.",
      "byline": "By Tara · Front Desk Correspondent",
      "date": "Sunday, early afternoon",
      "hero": "img/ep36.webp",
      "thumb": "img/ep36.webp",
      "caption": "The rail, the visitor, and four minutes nobody expected. Picture: Valley Picture Desk",
      "body": [
            "For the first time this season, the family's father invented a game. It had no rules, no roles, no scoring and one instruction, which was: sit here.",
            "The entire cast sat in silence on the deck for four minutes. Two children attempted to improve the game and were told that this was the game.",
            "At three minutes a parakeet landed on the rail, looked at all of them, and left. The captain has since admitted, in writing, on a leaf, that it was a good game."
      ]
    },
    {
      "slug": "everything-declared-broken",
      "time": "Mid-morning",
      "kicker": "Valley Life",
      "title": "Everything on the deck declared broken by head mechanic",
      "standfirst": "The chair, the rail, the eldest child. All repaired by lunchtime with a great deal of oil.",
      "byline": "By Maya · Pilot and Mechanic",
      "date": "Monday, mid-morning",
      "hero": "img/ep28.webp",
      "thumb": "img/ep28.webp",
      "caption": "The workshop's junior partner, gloves on, at work. Picture: Valley Picture Desk",
      "body": [
            "The valley's head mechanic, aged four, conducted a full inspection of the treehouse deck on Monday morning wearing gloves that reach his shoulders.",
            "Findings were extensive. The cane chair was broken. The rail was broken. His elder brother was broken, a diagnosis delivered with great sympathy and treated with coconut oil behind both ears.",
            "All repairs were completed before lunch. The deck is now in better condition than it has been all season, and three separate items that were not broken have been oiled."
      ]
    },
    {
      "slug": "whispering-middle-bunk",
      "time": "After dark",
      "kicker": "Valley Life",
      "title": "Lights out late: whispering heard from the middle bunk",
      "standfirst": "A flight plan for tomorrow, drawn up under a blanket by torchlight that was actually the moon.",
      "byline": "By Bholu · Neighbour",
      "date": "Tuesday, after dark",
      "hero": "img/ep08.webp",
      "thumb": "img/ep08.webp",
      "caption": "The window of the children's room, some time after lights-out. Picture: Valley Picture Desk",
      "body": [
            "Whispering was reported from the children's room at a late hour on Tuesday, continuing for some time after the lamp went out and audible, faintly, from the wall opposite.",
            "The subject, as far as can be established, was tomorrow: who would be captain, where the flight would go, and whether the neighbour could be persuaded to be air-traffic control again.",
            "He can. He always is. The whispering stopped at some point before midnight and by morning the crates had already been moved."
      ]
    },
    {
      "slug": "waterfall-full-flow",
      "time": "Midday",
      "kicker": "Water",
      "title": "Waterfall at full flow; spray reaches the second boulder",
      "standfirst": "The loudest week of the season at the lake. Conversation has moved to the shore.",
      "byline": "By Kapi · Chief Announcer",
      "date": "Wednesday, midday",
      "hero": "img/ep11.webp",
      "thumb": "img/lake.webp",
      "caption": "The falls at noon, running high after a week of rain. Picture: Valley Picture Desk",
      "body": [
            "The waterfall at the head of the lake has been running at its highest level of the season since Monday, following a week of rain.",
            "Spray now reaches the second boulder, a distance last recorded early in the season and marked, on both occasions, with a line of small stones.",
            "Games requiring speech have moved to the shore. Games requiring shouting have moved closer, and are reported to be going extremely well."
      ]
    },
    {
      "slug": "coracle-lessons",
      "time": "Afternoon",
      "kicker": "Water",
      "title": "Coracle lessons offered; father stops the spin on the fourth attempt",
      "standfirst": "Instruction given in one-word sentences. The result was a boat, motionless, in the middle of the lake.",
      "byline": "By Maya · Pilot and Mechanic",
      "date": "Thursday, afternoon",
      "hero": "img/ep46.webp",
      "thumb": "img/ep46.webp",
      "caption": "The fourth attempt, the moment it worked. Picture: Valley Picture Desk",
      "body": [
            "Coracle instruction was offered at the lake this week at the request of a large gentleman who has spun in one more times than he cares to count.",
            "Tuition was delivered in single words from the shore — \"flat\", \"slower\", \"now\" — with three children stationed in the shallows as examiners.",
            "On the fourth attempt the coracle stopped dead in the middle of the lake and stayed stopped. \"Now what?\" asked the pupil. \"Now this,\" said the instructor, and nothing happened for a long and generally admired period of time."
      ]
    },
    {
      "slug": "egrets-return",
      "time": "First light",
      "kicker": "Water",
      "title": "Egrets return to the shallows; swimming hours adjusted accordingly",
      "standfirst": "The birds have the lake until the shadow leaves the second boulder. This is not negotiable.",
      "byline": "By Tara · Front Desk Correspondent",
      "date": "Friday, first light",
      "hero": "img/sb/ep01/p005.webp",
      "thumb": "img/lake.webp",
      "caption": "The shallows at first light, under new management. Picture: Valley Picture Desk",
      "body": [
            "The egrets returned to the lake this week, taking up their usual positions in the shallows at the far end before anybody in the valley was awake.",
            "Swimming hours have been revised to accommodate them. The lake now opens to vaanars when the shadow of the big banyan leaves the second boulder, and not one minute earlier.",
            "The ruling was posted on a leaf at the top of the ladder and has been observed without a single breach, including by the family member most likely to breach it, who has been seen waiting on the shore with his arms folded."
      ]
    },
    {
      "slug": "lily-pads-counted",
      "time": "Late morning",
      "kicker": "Water",
      "title": "Lily pads counted; count disputed",
      "standfirst": "Two surveys, two totals, and a difference of nine that nobody can account for.",
      "byline": "By Chintu · Head Mechanic",
      "date": "Saturday, late morning",
      "hero": "img/ep09.webp",
      "thumb": "img/ep09.webp",
      "caption": "The survey area, viewed from the shore. Picture: Valley Picture Desk",
      "body": [
            "A census of the lily pads on the lake was conducted twice on Saturday, once from the shore and once from a coracle, producing totals of forty-one and fifty.",
            "The discrepancy has been attributed variously to movement of the pads, movement of the coracle, and the fact that the coracle-based surveyor is four and counted several of them more than once on purpose.",
            "A third survey has been ordered. The figure of forty-one has been written on the map in the meantime, in pencil, which the cartographer regards as a serious concession."
      ]
    },
    {
      "slug": "raft-of-crates",
      "time": "Early afternoon",
      "kicker": "Water",
      "title": "Lake crossing attempted by raft of crates; crates float, plan does not",
      "standfirst": "The vessel was seaworthy. The crew had not agreed on a destination, or a captain, or a direction.",
      "byline": "By Bholu · Neighbour",
      "date": "Sunday, early afternoon",
      "hero": "img/ep29.webp",
      "thumb": "img/ep09.webp",
      "caption": "The vessel, shortly after launch and shortly before the argument. Picture: Valley Picture Desk",
      "body": [
            "A raft constructed from two crates and a plank was launched at the lake on Sunday afternoon with a crew of three and the stated intention of reaching the far shore.",
            "The crates floated. This surprised everybody, including the builder, and appears to have been the high point of the expedition.",
            "The raft returned to shore four minutes later without having chosen a captain. The crew has described the voyage as a complete success and intends to repeat it with a fourth crate and, if possible, a flag."
      ]
    },
    {
      "slug": "bathing-hours",
      "time": "Afternoon",
      "kicker": "Water",
      "title": "Bathing hours for a large gentleman: eleven minutes, eyes closed",
      "standfirst": "The lake was quiet, the water was warm, and three children were watching from the shore in total silence.",
      "byline": "By Kapi · Chief Announcer",
      "date": "Monday, afternoon",
      "hero": "img/ep09.webp",
      "thumb": "img/ep09.webp",
      "caption": "The shore, during a period of enforced quiet. Picture: Valley Picture Desk",
      "body": [
            "The valley's largest resident spent eleven minutes in the lake on Monday afternoon, floating on his back with his eyes shut and his ears under the water.",
            "This is the longest continuous period of quiet recorded on the shore this season. It was maintained by three children who had been asked for five minutes and gave eleven, standing in a row and not saying anything at all.",
            "He got out, said \"right\", and was immediately cast as a bus."
      ]
    },
    {
      "slug": "rain-fills-lake",
      "time": "Grey afternoon",
      "kicker": "Water",
      "title": "Rain fills the lake; shoreline marked with stones",
      "standfirst": "The water is higher than it has been all season. The old shoreline is now a row of pebbles under it.",
      "byline": "By Tara · Front Desk Correspondent",
      "date": "Tuesday, grey afternoon",
      "hero": "img/ep29.webp",
      "thumb": "img/ep29.webp",
      "caption": "The new shoreline, marked that morning. Picture: Valley Picture Desk",
      "body": [
            "The lake rose several inches over the weekend following sustained rain, submerging the flat rock generally used for launching coracles.",
            "A new shoreline was marked on Tuesday morning with a line of small stones placed by the front desk, which regards this as official and has entered it on the map.",
            "The old shoreline is still visible under the water, a row of pebbles that nobody has thought to move. The coracles have been relocated four paces inland and everybody has been informed twice."
      ]
    },
    {
      "slug": "fishing-line-leaf",
      "time": "Dusk",
      "kicker": "Water",
      "title": "Fishing line rigged with a leaf; nothing caught, nobody minds",
      "standfirst": "An hour at the water's edge with a stick, a string and no hook whatsoever.",
      "byline": "By Maya · Pilot and Mechanic",
      "date": "Wednesday, dusk",
      "hero": "img/sb/ep01/p110.webp",
      "thumb": "img/ep09.webp",
      "caption": "The lake at last light, from the path above. Picture: Valley Picture Desk",
      "body": [
            "A fishing expedition was mounted at the lake on Wednesday evening using a stick, a length of rigging line borrowed without permission, and a banana leaf in place of a hook.",
            "Nothing was caught. Nothing was ever likely to be caught, a fact understood by all four participants and mentioned by none of them.",
            "The party sat on the flat rock until the light went. The equipment has been left where it is, ready, which is the part that matters."
      ]
    },
    {
      "slug": "night-swim",
      "time": "After dark",
      "kicker": "Water",
      "title": "Night swim proposed, denied, and conducted anyway in imagination",
      "standfirst": "Three children flew to the lake from their bunks and swam without leaving the room.",
      "byline": "By Chintu · Head Mechanic",
      "date": "Thursday, after dark",
      "hero": "img/ep08.webp",
      "thumb": "img/ep08.webp",
      "caption": "The room from which the swim departed. Picture: Valley Picture Desk",
      "body": [
            "A proposal for a night swim was put to the valley's pilot on Thursday evening and declined, on the grounds that it was dark and everybody was already in bed.",
            "A swim took place regardless, conducted from three bunks in whispers, with the pilot sitting on the floor describing the water, the egrets and the exact temperature of the shallows.",
            "All three swimmers were asleep before they reached the far side. Ground crew, stationed in the doorway, reports that it was the best swim of the season."
      ]
    },
    {
      "slug": "bananas-only-currency",
      "time": "Mid-morning",
      "kicker": "Business",
      "title": "Bananas remain the valley's only currency, front desk confirms",
      "standfirst": "Leaves are accepted for small transactions. Stones are not money and never have been.",
      "byline": "By Tara · Front Desk Correspondent",
      "date": "Friday, mid-morning",
      "hero": "img/ep43.webp",
      "thumb": "img/ep43.webp",
      "caption": "The exchange, open for business between two crates. Picture: Valley Picture Desk",
      "body": [
            "The front desk issued a clarification this week on the valley's monetary arrangements, following a dispute over a stone.",
            "Bananas remain the currency. Leaves are accepted for small transactions such as tolls, tickets and admission to museums. Stones are not money, have never been money, and cannot be made money by a four-year-old saying that they are.",
            "The ruling is posted at the top of the ladder. An appeal was lodged within the hour, in stones, and rejected."
      ]
    },
    {
      "slug": "ticket-inspector-audit",
      "time": "Late morning",
      "kicker": "Business",
      "title": "Ticket inspector audits the front desk; everything in order",
      "standfirst": "The inspector was invented to get the desk officer off the desk. It did not work.",
      "byline": "By Kapi · Chief Announcer",
      "date": "Saturday, late morning",
      "hero": "img/ep33.webp",
      "thumb": "img/ep33.webp",
      "caption": "The audit, in progress, conducted entirely by the book. Picture: Valley Picture Desk",
      "body": [
            "A ticket inspector was introduced to valley operations this week by the eldest child, whose stated aim was to get his sister away from the front desk for an hour.",
            "The plan failed at the first step. The desk officer welcomed the audit, produced her ledger, and began a review of every ticket issued this season, which is a considerable number.",
            "The inspector was obliged to become the inspector properly in order to bring the audit to an end. Everything was found to be in order. She has never been prouder, and he has not told her."
      ]
    },
    {
      "slug": "repair-shop-for-people",
      "time": "Afternoon",
      "kicker": "Business",
      "title": "Repair shop opens for people, not machines",
      "standfirst": "A stiff shoulder, a creaking father and one junior mechanic with the gloves on.",
      "byline": "By Maya · Pilot and Mechanic",
      "date": "Sunday, afternoon",
      "hero": "img/ep02.webp",
      "thumb": "img/ep02.webp",
      "caption": "The workshop, receiving its first patient. Picture: Valley Picture Desk",
      "body": [
            "A repair shop opened in the workshop corner this week offering services to the family rather than the aircraft, following a report of a stiff shoulder.",
            "The head mechanic, aged four, took the case personally. Treatment consisted of coconut oil, a great deal of examination and a certificate of airworthiness issued on a leaf.",
            "The eldest child was appointed junior mechanic, a demotion he accepted with visible effort. The shoulder is reported to be improving, which the workshop regards as conclusive."
      ]
    },
    {
      "slug": "chai-prices-fixed",
      "time": "First light",
      "kicker": "Business",
      "title": "Chai prices fixed at one leaf; queue forms anyway",
      "standfirst": "Four cups, one price and a café that opens before anybody is up.",
      "byline": "By Chintu · Head Mechanic",
      "date": "Monday, first light",
      "hero": "img/sb/ep01/p028.webp",
      "thumb": "img/ep17.webp",
      "caption": "The café at opening, before the valley is properly awake. Picture: Valley Picture Desk",
      "body": [
            "The deck café has fixed its prices at one leaf per cup, following a week in which the cost of chai varied according to who was asking and how recently they had annoyed the management.",
            "A queue formed at first light on Monday, consisting of one large gentleman who would have been given chai anyway and joined the queue out of respect for the institution.",
            "The café has served eleven cups this week. Three were good. The management considers this an improving trend and intends to expand into biscuits."
      ]
    },
    {
      "slug": "shop-reopens",
      "time": "Midday",
      "kicker": "Business",
      "title": "Shop reopens; father finally affords his own newspaper",
      "standfirst": "One banana, earned by being a bus for an afternoon, settles a debt outstanding since the spring.",
      "byline": "By Tara · Front Desk Correspondent",
      "date": "Tuesday, midday",
      "hero": "img/ep43.webp",
      "thumb": "img/ep43.webp",
      "caption": "The counter, on the morning the account was cleared. Picture: Valley Picture Desk",
      "body": [
            "The deck shop reopened on Tuesday with revised stock and one outstanding account: a newspaper, priced at four bananas, belonging to a customer with no bananas at all.",
            "The debt was settled this week after its holder spent an afternoon operating as a bus, a service for which fares were collected in leaves and converted, at a rate the front desk declines to explain, into fruit.",
            "The newspaper has been returned to its owner. He read it for eleven minutes before it was requisitioned as a tray table."
      ]
    },
    {
      "slug": "museum-admission",
      "time": "Afternoon",
      "kicker": "Business",
      "title": "Museum charges admission of one leaf; refunds issued in stories",
      "standfirst": "The exhibition lasted an hour. The stories that replaced it are still going.",
      "byline": "By Kapi · Chief Announcer",
      "date": "Wednesday, afternoon",
      "hero": "img/ep22.webp",
      "thumb": "img/ep22.webp",
      "caption": "The exhibition, before it was closed by its own subject. Picture: Valley Picture Desk",
      "body": [
            "A museum of family objects opened in the treehouse on Wednesday, admission one leaf, with exhibits drawn entirely from a crate that had arrived that morning.",
            "Attendance was six. The curators had labelled everything, including two items whose purpose nobody could establish and which were described on their labels as 'important'.",
            "The museum closed early when the objects' owner began explaining what they actually were. Admission fees were refunded in full, in stories, which the visitors have unanimously rated the better exhibition."
      ]
    },
    {
      "slug": "toll-receipts",
      "time": "Early afternoon",
      "kicker": "Business",
      "title": "Toll receipts for the week: forty-one leaves, one stone, one banana",
      "standfirst": "The stone was refused. The banana was eaten. The leaves are in a box under the ladder.",
      "byline": "By Tara · Front Desk Correspondent",
      "date": "Thursday, early afternoon",
      "hero": "img/ep25.webp",
      "thumb": "img/ep25.webp",
      "caption": "The toll point on the lake path, at its busiest. Picture: Valley Picture Desk",
      "body": [
            "Weekly receipts from the lake path toll were published on Thursday and show forty-one leaves collected across five days, the best week since the toll was established.",
            "One stone was tendered and refused, in line with the currency ruling. One banana was tendered by a traveller who had nothing else, accepted, and eaten by the collector before the traveller was out of sight.",
            "The leaves are kept in a box under the ladder and have no purchasing power whatsoever, a fact the treasury is aware of and has asked this paper not to dwell on."
      ]
    },
    {
      "slug": "lost-property-record-week",
      "time": "Mid-morning",
      "kicker": "Business",
      "title": "Lost property office reports record week",
      "standfirst": "One cap, one bow, two shoes, a spanner and a newspaper that was not lost but was filed anyway.",
      "byline": "By Bholu · Neighbour",
      "date": "Friday, mid-morning",
      "hero": "img/ep07.webp",
      "thumb": "img/ep07.webp",
      "caption": "The counter, mid-week, with the ledger open. Picture: Valley Picture Desk",
      "body": [
            "The valley's lost property office recorded its busiest week of the season, processing six items, four of which were returned to their owners within the hour.",
            "The haul included a red cap (found on a neighbour), a pink bow (found on a mirror, where it lives), two shoes belonging to a resident who does not wear shoes, and a spanner recovered from a bed.",
            "The sixth item, a newspaper, was not lost. It was filed anyway by an officer who felt the ledger looked better with six entries than five."
      ]
    },
    {
      "slug": "same-destination",
      "time": "Golden hour",
      "kicker": "Business",
      "title": "Airline announces new destination: the same one",
      "standfirst": "The waterfall, then the lake, then the waterfall. Bookings are strong.",
      "byline": "By Kapi · Chief Announcer",
      "date": "Saturday, golden hour",
      "hero": "img/keyart.webp",
      "thumb": "img/ep52.webp",
      "caption": "The carrier's full crew at the end of a trading week. Picture: Valley Picture Desk",
      "body": [
            "Vaanar Airlines announced an addition to its route network this week at a briefing held on a crate, attended by the entire valley and one neighbour who was passing.",
            "The new destination is the waterfall, which is also the existing destination, and then the lake, which is also the existing destination, and then the waterfall again.",
            "Bookings are strong. The carrier has carried the same passenger on every flight this season, a large gentleman who has never once chosen where he is going and has never once asked to."
      ]
    }
  ];

  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const SECTIONS = ["All", ...[...new Set(STORIES.map((s) => s.kicker))]];
  let section = "All";
  const PAGE = 23;
  let shown = PAGE;

  chipsEl.innerHTML = SECTIONS.map((s, i) =>
    `<button type="button" class="chip${i === 0 ? " on" : ""}" data-sec="${esc(s)}">${esc(s)}</button>`).join("");

  function storyCard(s, lead) {
    return `
    <a class="story${lead ? " lead" : ""}" href="#news/${s.slug}">
      <span class="story-pic"><img src="${lead ? s.hero : s.thumb}" alt="" loading="lazy"><span class="when">${esc(s.time)}</span></span>
      <span class="story-copy">
        <span class="kicker">${esc(s.kicker)}</span>
        <span class="hed">${esc(s.title)}</span>
        <span class="sell">${esc(s.standfirst)}</span>
        <span class="byline">${esc(s.byline)} · ${esc(s.date)}</span>
      </span>
    </a>`;
  }

  function renderList(keepScroll) {
    const list = section === "All" ? STORIES : STORIES.filter((s) => s.kicker === section);
    const visible = list.slice(1, shown);
    const left = list.length - 1 - visible.length;
    listEl.innerHTML = `
      <p class="deskline">${list.length} stories${section === "All" ? " from every desk" : ` on the ${esc(section)} desk`}</p>
      <div class="lead-wrap">${storyCard(list[0], true)}</div>
      <div class="story-grid">${visible.map((s) => storyCard(s, false)).join("")}</div>
      ${left > 0 ? `<button class="morebtn" id="moreBtn" type="button">More stories (${left} to go)</button>` : ""}`;
    const more = document.getElementById("moreBtn");
    if (more) more.addEventListener("click", () => { shown += 24; renderList(true); });
    listEl.hidden = false;
    articleEl.hidden = true;
    if (!keepScroll) page.scrollTop = 0;
  }

  function renderStory(slug) {
    const s = STORIES.find((x) => x.slug === slug);
    if (!s) return renderList();
    const more = STORIES.filter((x) => x.slug !== slug).slice(0, 3);
    articleEl.innerHTML = `
      <article class="piece">
        <p class="kicker">${esc(s.kicker)}</p>
        <h1>${esc(s.title)}</h1>
        <p class="sell big">${esc(s.standfirst)}</p>
        <p class="byline">${esc(s.byline)} · ${esc(s.date)}</p>
        <figure>
          <span class="story-pic"><img src="${s.hero}" alt="${esc(s.title)}"><span class="when">${esc(s.time)}</span></span>
          <figcaption>${esc(s.caption)}</figcaption>
        </figure>
        ${s.body.map((p, i) => i === 1
          ? `<p class="first-after">${esc(p)}</p>`
          : `<p>${esc(p)}</p>`).join("")}
        <p class="endmark">— Vaanar News, from the deck</p>
      </article>
      <aside class="more">
        <h2>More from the valley</h2>
        <div class="story-grid small">${more.map((x) => storyCard(x, false)).join("")}</div>
        <a class="backlink" href="#news">← All stories</a>
      </aside>`;
    articleEl.hidden = false;
    listEl.hidden = true;
    page.scrollTop = 0;
  }

  chipsEl.addEventListener("click", (e) => {
    const b = e.target.closest(".chip");
    if (!b) return;
    section = b.dataset.sec;
    shown = PAGE;
    chipsEl.querySelectorAll(".chip").forEach((c) => c.classList.toggle("on", c === b));
    if (location.hash.startsWith("#news/")) location.hash = "#news"; else renderList();
  });

  function open() {
    page.hidden = false;
    document.body.style.overflow = "hidden";
    const slug = location.hash.startsWith("#news/") ? location.hash.slice(6) : "";
    slug ? renderStory(slug) : renderList();
  }
  function close() {
    page.hidden = true;
    document.body.style.overflow = "";
    if (location.hash.startsWith("#news")) history.replaceState(null, "", location.pathname + location.search);
  }
  function route() { location.hash.startsWith("#news") ? open() : (page.hidden || close()); }

  addEventListener("hashchange", route);
  document.getElementById("newsBack").addEventListener("click", close);
  addEventListener("keydown", (e) => { if (e.key === "Escape" && !page.hidden) close(); });
  route();
})();
