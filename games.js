/* ===================== Vaanar Games =====================
   Three small games: Catch the Banana, Through the Mountains, Banana Dodge.
   Every game has Level 1, 2 and 3 — the level sets the speed.
========================================================= */
(() => {
  const page = document.getElementById("gamePage");
  const cv = document.getElementById("gCanvas");
  if (!page || !cv) return;
  const ctx = cv.getContext("2d");
  const W = 900, H = 560;

  const els = {
    title: document.getElementById("gTitle"),
    picker: document.getElementById("gPicker"),
    stage: document.getElementById("gStage"),
    levels: document.getElementById("gLevels"),
    tally: document.getElementById("gTally"),
    score: document.getElementById("gScore"),
    scoreWord: document.getElementById("gScoreWord"),
    lives: document.getElementById("gLives"),
    best: document.getElementById("gBest"),
    menu: document.getElementById("gMenu"),
    finish: document.getElementById("gFinish"),
    startCard: document.getElementById("gStart"),
    startTitle: document.getElementById("gStartTitle"),
    startText: document.getElementById("gStartText"),
    go: document.getElementById("gGo"),
    over: document.getElementById("gOver"),
    overTitle: document.getElementById("gOverTitle"),
    overText: document.getElementById("gOverText"),
    again: document.getElementById("gAgain"),
    how: document.getElementById("gHow"),
    crew: document.getElementById("gCrew")
  };

  const img = (src) => { const i = new Image(); i.src = src; return i; };
  const ART = {
    kapi: img("images/char-kapi.webp"),
    bholu: img("images/char-bholu.webp"),
    maya: img("images/char-maya.webp"),
    tara: img("images/char-tara.webp"),
    chintu: img("images/char-chintu.webp"),
    baba: img("images/char-baba.webp"),
    plane: img("images/plane-fly.webp")
  };

  /* ---------- shared drawing ---------- */
  function banana(x, y, r, scale, hot) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(r); ctx.scale(scale, scale);
    if (hot) {
      ctx.beginPath(); ctx.arc(0, -3, 26, 0, 7);
      ctx.fillStyle = "rgba(255,122,40,.28)"; ctx.fill();
    }
    ctx.beginPath();
    ctx.arc(0, 0, 19, Math.PI * 0.12, Math.PI * 0.88);
    ctx.arc(0, -7, 16, Math.PI * 0.88, Math.PI * 0.12, true);
    ctx.closePath();
    ctx.fillStyle = hot ? "#FFB020" : "#FFC93C"; ctx.fill();
    ctx.lineWidth = 2.6; ctx.strokeStyle = hot ? "#9E3512" : "#B07A0C"; ctx.stroke();
    ctx.lineCap = "round"; ctx.lineWidth = 4; ctx.strokeStyle = "#6D4A08";
    ctx.beginPath(); ctx.moveTo(-17, 3); ctx.lineTo(-21, -3); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(17, 3); ctx.lineTo(21, -2); ctx.stroke();
    if (hot) {
      ctx.strokeStyle = "#E0492C"; ctx.lineWidth = 3;
      ctx.beginPath(); ctx.moveTo(-6, -20); ctx.quadraticCurveTo(2, -28, -2, -34); ctx.stroke();
    }
    ctx.restore();
  }

  function leaf(x, y, r) {
    ctx.save(); ctx.translate(x, y); ctx.rotate(r);
    ctx.beginPath();
    ctx.moveTo(-16, 0); ctx.quadraticCurveTo(0, -14, 16, 0); ctx.quadraticCurveTo(0, 14, -16, 0);
    ctx.closePath();
    ctx.fillStyle = "#4FC177"; ctx.fill();
    ctx.strokeStyle = "#2C7C48"; ctx.lineWidth = 2.4; ctx.stroke();
    ctx.beginPath(); ctx.moveTo(-13, 0); ctx.lineTo(13, 0); ctx.stroke();
    ctx.restore();
  }

  function sky(topC, botC, sun) {
    const g = ctx.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, topC); g.addColorStop(1, botC);
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    if (sun !== false) { ctx.fillStyle = "#FFD84D"; ctx.beginPath(); ctx.arc(790, 84, 44, 0, 7); ctx.fill(); }
  }

  const clouds = [];
  for (let i = 0; i < 5; i++) clouds.push({ x: Math.random() * W, y: 40 + Math.random() * 150, s: 0.45 + Math.random() * 0.7, v: 0.1 + Math.random() * 0.25 });
  function drawClouds(extra) {
    ctx.fillStyle = "rgba(255,255,255,.92)";
    clouds.forEach((c) => {
      c.x -= c.v * (extra || 1); if (c.x < -110) c.x = W + 110;
      ctx.save(); ctx.translate(c.x, c.y); ctx.scale(c.s, c.s);
      ctx.beginPath();
      ctx.arc(0, 0, 26, 0, 7); ctx.arc(28, 6, 20, 0, 7); ctx.arc(-28, 8, 18, 0, 7); ctx.arc(4, 16, 24, 0, 7);
      ctx.fill(); ctx.restore();
    });
  }

  function temples(baseY) {
    ctx.fillStyle = "#7FC08A";
    ctx.beginPath(); ctx.moveTo(0, baseY);
    ctx.quadraticCurveTo(150, baseY - 120, 320, baseY);
    ctx.quadraticCurveTo(520, baseY - 155, 720, baseY);
    ctx.quadraticCurveTo(830, baseY - 90, 900, baseY);
    ctx.closePath(); ctx.fill();
    [[190, 92], [560, 116], [815, 76]].forEach(([x, h]) => {
      const tiers = 4;
      for (let i = 0; i < tiers; i++) {
        const w0 = h * 0.46 * (1 - i / (tiers + 0.4));
        const y0 = baseY - (h / tiers) * i, y1 = y0 - h / tiers + 3;
        ctx.fillStyle = i % 2 ? "#E6C89A" : "#D9B98A";
        ctx.beginPath();
        ctx.moveTo(x - w0, y0); ctx.lineTo(x + w0, y0);
        ctx.lineTo(x + w0 * 0.74, y1); ctx.lineTo(x - w0 * 0.74, y1);
        ctx.closePath(); ctx.fill();
      }
    });
  }

  function drawArt(image, cx, cy, h, flip) {
    if (!image.complete || !image.naturalWidth) return;
    const w = image.naturalWidth * (h / image.naturalHeight);
    ctx.save(); ctx.translate(cx, cy); if (flip) ctx.scale(-1, 1);
    ctx.drawImage(image, -w / 2, -h / 2, w, h);
    ctx.restore();
  }

  /* particles: explosions and sparkles */
  let bits = [];
  function boom(x, y) {
    for (let i = 0; i < 22; i++) {
      const a = Math.random() * 7, s = 1.6 + Math.random() * 4.4;
      bits.push({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s - 1, life: 26 + Math.random() * 16,
        c: ["#FFD84D", "#FF9A1F", "#E0492C", "#FFF3C4"][i % 4], r: 3 + Math.random() * 6 });
    }
    S.shake = 14;
  }
  function drawBits() {
    bits = bits.filter((p) => {
      p.x += p.vx; p.y += p.vy; p.vy += 0.16; p.life--;
      if (p.life <= 0) return false;
      ctx.globalAlpha = Math.max(0, Math.min(1, p.life / 24));
      ctx.fillStyle = p.c;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 7); ctx.fill();
      ctx.globalAlpha = 1;
      return true;
    });
  }

  function cheerText() {
    if (S.cheerT <= 0) return;
    ctx.save();
    ctx.globalAlpha = Math.min(1, S.cheerT / 26);
    ctx.font = "800 42px 'Baloo 2', system-ui, sans-serif";
    ctx.textAlign = "center"; ctx.lineWidth = 8; ctx.strokeStyle = "#12354F";
    ctx.strokeText(S.cheer, W / 2, 120);
    ctx.fillStyle = "#FFD84D"; ctx.fillText(S.cheer, W / 2, 120);
    ctx.restore();
    S.cheerT--;
  }
  const cheer = (t) => { S.cheer = t; S.cheerT = 64; };

  /* ---------- shared state and input ---------- */
  const S = {
    id: null, level: 0, on: false, raf: 0, t: 0,
    score: 0, bumps: 0, shake: 0, cheer: "", cheerT: 0,
    px: W / 2, py: H / 2, targetX: W / 2, targetY: H / 2,
    keys: {}, held: false
  };

  const pos = (e) => {
    const r = cv.getBoundingClientRect();
    return { x: ((e.clientX - r.left) / r.width) * W, y: ((e.clientY - r.top) / r.height) * H };
  };
  cv.addEventListener("pointermove", (e) => { const p = pos(e); S.targetX = p.x; S.targetY = p.y; });
  cv.addEventListener("pointerdown", (e) => {
    const p = pos(e); S.targetX = p.x; S.targetY = p.y; S.held = true;
    cv.setPointerCapture(e.pointerId);
  });
  addEventListener("pointerup", () => { S.held = false; });
  addEventListener("keydown", (e) => {
    if (page.hidden) return;
    S.keys[e.key] = true;
    if ([" ", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) e.preventDefault();
    if (e.key === " ") { S.held = true; if (!S.on && S.id) restart(); }
  });
  addEventListener("keyup", (e) => { S.keys[e.key] = false; if (e.key === " ") S.held = false; });

  /* ================= GAME 1 — Catch the Banana ================= */
  const GROUND = H - 74;
  const CATCH = {
    id: "catch",
    title: "Catch the Banana",
    blurb: "Bholu keeps dropping his delivery. Move Kapi and catch the bananas in his crate. Miss one and nothing happens — you are never out. Play as long as you like, then press Finish.",
    how: "Move Kapi with your finger, the mouse, or the ← → arrow keys.",
    word: "caught",
    crew: ["kapi", "bholu"],
    levels: [
      { name: "1", tag: "Gentle", fall: 1.2, gap: 150, tighten: 1.4, floor: 70, drift: 0.3 },
      { name: "2", tag: "Busy", fall: 1.7, gap: 120, tighten: 2.0, floor: 56, drift: 0.45 },
      { name: "3", tag: "Flying day", fall: 2.3, gap: 96, tighten: 2.4, floor: 44, drift: 0.6 }
    ],
    init(L) {
      this.L = L; this.drops = []; this.bx = W / 2; this.bdir = 1; this.throwIn = 80; this.tip = 0; this.speed = 1;
      S.px = S.targetX = W / 2;
    },
    update() {
      const L = this.L;
      if (S.keys.ArrowLeft) S.targetX -= 11;
      if (S.keys.ArrowRight) S.targetX += 11;
      S.targetX = Math.max(60, Math.min(W - 60, S.targetX));
      S.px += (S.targetX - S.px) * 0.22;

      this.bx += this.bdir * (1.3 + this.speed * 0.5);
      if (this.bx > W - 80) { this.bx = W - 80; this.bdir = -1; }
      if (this.bx < 80) { this.bx = 80; this.bdir = 1; }
      if (this.tip > 0) this.tip--;

      if (--this.throwIn <= 0) {
        this.drops.push({ x: this.bx + this.bdir * 26, y: 150, vy: L.fall + this.speed * 0.35, vx: this.bdir * L.drift, r: 0 });
        this.throwIn = Math.max(L.floor, L.gap - S.score * L.tighten);
        this.tip = 14;
      }

      for (let i = this.drops.length - 1; i >= 0; i--) {
        const d = this.drops[i];
        d.y += d.vy; d.x += d.vx; d.r += 0.06;
        if (d.y > GROUND - 74 && d.y < GROUND - 16 && Math.abs(d.x - S.px) < 66) {
          this.drops.splice(i, 1);
          S.score++; this.speed = 1 + S.score * 0.03;
          setScore();
          if (S.score % 10 === 0) cheer(["Good catch!", "Cabin crew, well done!", "Nobody drops a banana!", "Bholu is amazed."][(S.score / 10 - 1) % 4]);
        } else if (d.y > GROUND - 4) {
          this.drops.splice(i, 1);
          boom(d.x, GROUND - 12);
          bump();
        }
      }
    },
    draw() {
      sky("#5FC6F5", "#CFEEFF"); drawClouds(); temples(GROUND);
      ctx.fillStyle = "#4FAE63"; ctx.fillRect(0, GROUND, W, H - GROUND);
      ctx.fillStyle = "#3E9A55"; ctx.fillRect(0, GROUND, W, 10);
      this.drops.forEach((d) => banana(d.x, d.y, d.r, 1));
      const bob = Math.sin(S.t / 16) * 5 + (this.tip > 0 ? 8 : 0);
      drawArt(ART.bholu, this.bx, 118 + bob, 128, this.bdir < 0);
      banana(this.bx + this.bdir * 30, 140 + bob, this.tip > 0 ? -0.8 : 0.25, 0.7);
      drawArt(ART.kapi, S.px, GROUND - 80, 176);
      ctx.fillStyle = "#C98C46"; ctx.strokeStyle = "#8A5A22"; ctx.lineWidth = 4;
      ctx.beginPath(); ctx.roundRect(S.px - 52, GROUND - 66, 104, 54, 10); ctx.fill(); ctx.stroke();
      ctx.fillStyle = "rgba(0,0,0,.12)";
      ctx.beginPath(); ctx.ellipse(S.px, GROUND + 8, 58, 10, 0, 0, 7); ctx.fill();
    },
    overTitle: () => S.score >= 10 ? "Brilliant catching!" : "Good round",
    overText: (best, beat) => S.score === 0
      ? "No bananas yet — have another go, nobody is ever out."
      : `Kapi caught ${S.score} banana${S.score === 1 ? "" : "s"}.` + (S.score > beat ? " That is a new best!" : ` Your best is ${best}.`)
  };

  /* ================= GAME 2 — Through the Mountains ================= */
  const FLY = {
    id: "fly",
    title: "Through the Mountains",
    blurb: "The whole family is aboard. Fly through the gaps in the temple rocks and keep clear of Bholu's exploding bananas. A bump just puts you back in clear air — the flight never ends until you press Finish.",
    how: "Hold the mouse, tap the screen, or hold the space bar to climb. Let go to glide down.",
    word: "gates",
    crew: ["baba", "maya", "kapi", "tara", "chintu"],
    levels: [
      { name: "1", tag: "Gentle", speed: 2.0, gapH: 240, every: 300, bombs: 260 },
      { name: "2", tag: "Windy", speed: 2.8, gapH: 200, every: 260, bombs: 190 },
      { name: "3", tag: "Flying day", speed: 3.6, gapH: 168, every: 230, bombs: 140 }
    ],
    init(L) {
      this.L = L; this.gates = []; this.bombs = []; this.dist = 0; this.nextGate = 300; this.nextBomb = 200;
      this.vy = 0; this.inv = 0;
      S.py = H / 2;
    },
    update() {
      const L = this.L;
      const up = S.held || S.keys[" "] || S.keys.ArrowUp;
      this.vy += up ? -0.62 : 0.34;
      this.vy = Math.max(-7.5, Math.min(8, this.vy));
      S.py += this.vy;
      if (S.py < 40) { S.py = 40; this.vy = 0; }
      if (S.py > H - 46) { S.py = H - 46; this.vy = 0; if (!this.inv) this.hit(S.py); }

      this.dist += L.speed;
      if (this.inv > 0) this.inv--;

      if ((this.nextGate -= L.speed) <= 0) {
        const gy = 120 + Math.random() * (H - 260);
        this.gates.push({ x: W + 80, gy, gh: L.gapH, done: false });
        this.nextGate = L.every;
      }
      if ((this.nextBomb -= L.speed) <= 0) {
        this.bombs.push({ x: W + 60, y: 70 + Math.random() * (H - 160), r: 0, ph: Math.random() * 7 });
        this.nextBomb = L.bombs + Math.random() * 120;
      }

      const px = 190, pr = 30;
      this.gates.forEach((g) => {
        g.x -= L.speed;
        if (!g.done && g.x + 50 < px - pr) { g.done = true; S.score++; setScore(); if (S.score % 5 === 0) cheer("Nice flying!"); }
        if (!this.inv && Math.abs(g.x - px) < 62 + pr) {
          if (S.py < g.gy - g.gh / 2 + 14 || S.py > g.gy + g.gh / 2 - 14) this.hit(S.py);
        }
      });
      this.gates = this.gates.filter((g) => g.x > -140);

      this.bombs.forEach((b) => { b.x -= L.speed + 1.2; b.r += 0.08; b.y += Math.sin((S.t + b.ph * 40) / 40) * 0.9; });
      for (let i = this.bombs.length - 1; i >= 0; i--) {
        const b = this.bombs[i];
        if (!this.inv && Math.hypot(b.x - px, b.y - S.py) < 44) {
          boom(b.x, b.y); this.bombs.splice(i, 1); this.hit(S.py); continue;
        }
        if (b.x < -60) this.bombs.splice(i, 1);
      }
    },
    hit(y) {
      boom(190, y);
      this.inv = 90;
      this.vy = 0;
      /* put the plane back in clear air so nobody gets stuck in a rock */
      const near = this.gates.find((g) => g.x > 120);
      S.py = near ? near.gy : H / 2;
      bump();
    },
    draw() {
      sky("#69C8F2", "#DFF3FF");
      drawClouds(1.6);
      ctx.fillStyle = "#8FCB98";
      ctx.beginPath(); ctx.moveTo(0, H);
      for (let x = 0; x <= W; x += 60) ctx.lineTo(x, H - 60 - Math.sin((x + this.dist * 0.2) / 90) * 22);
      ctx.lineTo(W, H); ctx.closePath(); ctx.fill();

      this.gates.forEach((g) => {
        const top = g.gy - g.gh / 2, bot = g.gy + g.gh / 2;
        const w = 62;
        const rock = (yTop, yBot, flip) => {
          const grad = ctx.createLinearGradient(g.x - w, 0, g.x + w, 0);
          grad.addColorStop(0, "#C79A63"); grad.addColorStop(0.5, "#E0BB86"); grad.addColorStop(1, "#B98B54");
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.moveTo(g.x - w, yTop);
          ctx.lineTo(g.x + w, yTop);
          ctx.lineTo(g.x + w * 0.55, yBot);
          ctx.lineTo(g.x - w * 0.55, yBot);
          ctx.closePath(); ctx.fill();
          ctx.fillStyle = "#4FAE63";
          ctx.beginPath();
          ctx.moveTo(g.x - w * 0.6, flip ? yBot + 16 : yBot - 16);
          ctx.quadraticCurveTo(g.x, flip ? yBot - 26 : yBot + 26, g.x + w * 0.6, flip ? yBot + 16 : yBot - 16);
          ctx.lineTo(g.x + w * 0.6, yBot); ctx.lineTo(g.x - w * 0.6, yBot);
          ctx.closePath(); ctx.fill();
        };
        rock(0, top, false);
        rock(H, bot, true);
      });

      this.bombs.forEach((b) => banana(b.x, b.y, b.r, 1.1, true));

      if (!(this.inv > 0 && Math.floor(S.t / 4) % 2)) {
        ctx.save();
        ctx.translate(190, S.py);
        ctx.rotate(Math.max(-0.35, Math.min(0.45, this.vy / 18)));
        ctx.scale(-1, 1);
        if (ART.plane.complete && ART.plane.naturalWidth) {
          const h = 76, w = ART.plane.naturalWidth * (h / ART.plane.naturalHeight);
          ctx.drawImage(ART.plane, -w / 2, -h / 2, w, h);
        }
        ctx.restore();
      }
    },
    overTitle: () => S.score >= 8 ? "What a flight!" : "Good flying",
    overText: (best, beat) => `The family got through ${S.score} gate${S.score === 1 ? "" : "s"}.` +
      (S.score > beat ? " A new best!" : ` Your best is ${best}.`)
  };

  /* ================= GAME 3 — Banana Dodge ================= */
  const DODGE = {
    id: "dodge",
    title: "Banana Dodge",
    blurb: "Open sky, everyone aboard. Dodge Bholu's exploding bananas and collect the boarding-pass leaves. Nobody is ever out: a bump costs you a moment and nothing else.",
    how: "Steer the plane with your finger, the mouse, or the arrow keys.",
    word: "leaves",
    crew: ["baba", "maya", "kapi", "tara", "chintu"],
    levels: [
      { name: "1", tag: "Gentle", fall: 2.0, drop: 78, leafEvery: 90 },
      { name: "2", tag: "Busy", fall: 2.8, drop: 58, leafEvery: 100 },
      { name: "3", tag: "Flying day", fall: 3.6, drop: 42, leafEvery: 115 }
    ],
    init(L) {
      this.L = L; this.bombs = []; this.leaves = []; this.bx = W / 2; this.bdir = 1;
      this.dropIn = 70; this.leafIn = 60; this.inv = 0; this.time = 0;
      S.px = S.targetX = W / 2; S.py = S.targetY = H - 140;
    },
    update() {
      const L = this.L;
      this.time++;
      if (S.keys.ArrowLeft) S.targetX -= 12;
      if (S.keys.ArrowRight) S.targetX += 12;
      if (S.keys.ArrowUp) S.targetY -= 12;
      if (S.keys.ArrowDown) S.targetY += 12;
      S.targetX = Math.max(70, Math.min(W - 70, S.targetX));
      S.targetY = Math.max(160, Math.min(H - 60, S.targetY));
      S.px += (S.targetX - S.px) * 0.18;
      S.py += (S.targetY - S.py) * 0.18;
      if (this.inv > 0) this.inv--;

      this.bx += this.bdir * 2.1;
      if (this.bx > W - 70) { this.bx = W - 70; this.bdir = -1; }
      if (this.bx < 70) { this.bx = 70; this.bdir = 1; }

      if (--this.dropIn <= 0) {
        this.bombs.push({ x: this.bx, y: 130, vy: L.fall, r: 0 });
        this.dropIn = Math.max(24, L.drop - Math.floor(this.time / 240) * 4);
      }
      if (--this.leafIn <= 0) {
        this.leaves.push({ x: 70 + Math.random() * (W - 140), y: -20, vy: 1.3, r: Math.random() * 7 });
        this.leafIn = L.leafEvery;
      }

      for (let i = this.bombs.length - 1; i >= 0; i--) {
        const b = this.bombs[i];
        b.y += b.vy; b.r += 0.1;
        if (!this.inv && Math.hypot(b.x - S.px, b.y - S.py) < 46) {
          boom(b.x, b.y); this.bombs.splice(i, 1); this.inv = 90; bump(); continue;
        }
        if (b.y > H + 30) this.bombs.splice(i, 1);
      }
      for (let i = this.leaves.length - 1; i >= 0; i--) {
        const l = this.leaves[i];
        l.y += l.vy; l.r += 0.03; l.x += Math.sin((S.t + i * 30) / 50) * 0.7;
        if (Math.hypot(l.x - S.px, l.y - S.py) < 48) {
          this.leaves.splice(i, 1); S.score++; setScore();
          if (S.score % 10 === 0) cheer("Boarding passes for everyone!");
          continue;
        }
        if (l.y > H + 30) this.leaves.splice(i, 1);
      }
    },
    draw() {
      sky("#4FB8EE", "#D9F1FF");
      drawClouds(1.2);
      temples(H - 8);
      this.leaves.forEach((l) => leaf(l.x, l.y, l.r));
      this.bombs.forEach((b) => banana(b.x, b.y, b.r, 1.1, true));
      const bob = Math.sin(S.t / 18) * 6;
      drawArt(ART.bholu, this.bx, 86 + bob, 120, this.bdir < 0);
      if (!(this.inv > 0 && Math.floor(S.t / 4) % 2)) {
        ctx.save();
        ctx.translate(S.px, S.py);
        ctx.rotate(Math.max(-0.3, Math.min(0.3, (S.targetX - S.px) / 90)));
        ctx.scale(-1, 1);
        if (ART.plane.complete && ART.plane.naturalWidth) {
          const h = 74, w = ART.plane.naturalWidth * (h / ART.plane.naturalHeight);
          ctx.drawImage(ART.plane, -w / 2, -h / 2, w, h);
        }
        ctx.restore();
      }
    },
    overTitle: () => S.score >= 12 ? "Safe landing!" : "Good dodging",
    overText: (best, beat) => `${S.score} leaf${S.score === 1 ? "" : "s"} collected.` +
      (S.score > beat ? " A new best!" : ` Your best is ${best}.`)
  };

  const GAMES = { catch: CATCH, fly: FLY, dodge: DODGE };

  /* ---------- HUD, flow ---------- */
  const bestKey = (id, lvl) => `vt-best-${id}-${lvl}`;
  const getBest = (id, lvl) => { try { return parseInt(localStorage.getItem(bestKey(id, lvl)) || "0", 10) || 0; } catch (e) { return 0; } };
  const setBest = (id, lvl, v) => { try { localStorage.setItem(bestKey(id, lvl), String(v)); } catch (e) { /* fine without it */ } };

  function setScore() { els.score.textContent = S.score; }
  function setBumps() {
    els.lives.textContent = S.bumps === 0 ? "no bumps yet" : `${S.bumps} bump${S.bumps === 1 ? "" : "s"}`;
  }
  /* Nobody is ever out. A bump costs nothing but a moment. */
  const NUDGE = ["Never mind!", "Off we go again.", "That one got away.", "Keep going!", "Happens to the pilot too."];
  function bump() {
    S.bumps++;
    setBumps();
    if (S.bumps % 3 === 0) cheer(NUDGE[Math.floor(Math.random() * NUDGE.length)]);
  }

  function loop() {
    S.t++;
    const g = GAMES[S.id];
    g.update();
    ctx.save();
    if (S.shake > 0) { ctx.translate((Math.random() - 0.5) * S.shake, (Math.random() - 0.5) * S.shake); S.shake--; }
    g.draw();
    drawBits();
    cheerText();
    ctx.restore();
    if (S.on) S.raf = requestAnimationFrame(loop);
  }

  function restart() {
    const g = GAMES[S.id];
    S.on = true; S.score = 0; S.bumps = 0; S.t = 0; bits = []; S.cheerT = 0; S.shake = 0;
    g.init(g.levels[S.level]);
    setScore(); setBumps();
    els.startCard.hidden = true; els.over.hidden = true;
    cancelAnimationFrame(S.raf);
    S.raf = requestAnimationFrame(loop);
  }

  function finish() {
    S.on = false;
    cancelAnimationFrame(S.raf);
    const g = GAMES[S.id];
    const beat = getBest(S.id, S.level);
    if (S.score > beat) setBest(S.id, S.level, S.score);
    const best = Math.max(beat, S.score);
    els.best.textContent = `best ${best}`;
    els.overTitle.textContent = g.overTitle();
    els.overText.textContent = g.overText(best, beat) +
      (S.bumps ? ` ${S.bumps} bump${S.bumps === 1 ? "" : "s"} along the way, and nobody was ever out.` : " Not a single bump.");
    els.over.hidden = false;
  }

  function paintIdle() {
    const g = GAMES[S.id];
    g.init(g.levels[S.level]);
    g.draw();
  }

  function chooseLevel(i) {
    S.level = i;
    [...els.levels.querySelectorAll("button")].forEach((b, k) => b.classList.toggle("on", k === i));
    els.best.textContent = getBest(S.id, S.level) ? `best ${getBest(S.id, S.level)}` : "";
    if (S.on) restart(); else { paintIdle(); els.over.hidden = true; els.startCard.hidden = false; }
  }

  function openGame(id) {
    S.id = id; S.on = false;
    const g = GAMES[id];
    els.picker.hidden = true; els.stage.hidden = false;
    els.levels.hidden = false; els.tally.hidden = false; els.menu.hidden = false; els.finish.hidden = false;
    els.title.textContent = g.title;
    els.how.textContent = g.how;
    els.scoreWord.textContent = g.word;
    els.startTitle.textContent = g.title;
    els.startText.textContent = g.blurb;
    els.crew.innerHTML = g.crew.map((c) => `<img src="images/char-${c}.webp" alt="${c}">`).join("") +
      `<span>${g.crew.length > 2 ? "everyone is on board" : "Kapi and Bholu"}</span>`;
    els.levels.innerHTML = g.levels.map((L, i) =>
      `<button type="button" class="lvl${i === S.level ? " on" : ""}" data-lvl="${i}">Level ${L.name}<small>${L.tag}</small></button>`).join("");
    S.score = 0; S.bumps = 0; setScore(); setBumps();
    els.best.textContent = getBest(id, S.level) ? `best ${getBest(id, S.level)}` : "";
    els.startCard.hidden = false; els.over.hidden = true;
    paintIdle();
  }

  function showMenu() {
    S.on = false; S.id = null;
    cancelAnimationFrame(S.raf);
    els.picker.hidden = false; els.stage.hidden = true;
    els.levels.hidden = true; els.tally.hidden = true; els.menu.hidden = true; els.finish.hidden = true;
    els.title.textContent = "Vaanar Games";
    els.how.textContent = "Three small games from the valley. Pick one.";
  }

  els.picker.addEventListener("click", (e) => {
    const card = e.target.closest("[data-game]");
    if (card) openGame(card.dataset.game);
  });
  els.levels.addEventListener("click", (e) => {
    const b = e.target.closest(".lvl");
    if (b) chooseLevel(+b.dataset.lvl);
  });
  els.go.addEventListener("click", restart);
  els.again.addEventListener("click", restart);
  els.menu.addEventListener("click", showMenu);
  els.finish.addEventListener("click", () => { if (S.on) finish(); });

  /* ---------- the page ---------- */
  function openPage() {
    page.hidden = false;
    document.body.style.overflow = "hidden";
    if (!S.id) showMenu();
  }
  function closePage() {
    page.hidden = true;
    document.body.style.overflow = "";
    S.on = false;
    cancelAnimationFrame(S.raf);
    if (location.hash === "#game") history.replaceState(null, "", location.pathname + location.search);
  }
  function route() { location.hash === "#game" ? openPage() : (page.hidden || closePage()); }
  addEventListener("hashchange", route);
  document.getElementById("gameBack").addEventListener("click", closePage);
  addEventListener("keydown", (e) => { if (e.key === "Escape" && !page.hidden) closePage(); });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) cancelAnimationFrame(S.raf);
    else if (S.on) { cancelAnimationFrame(S.raf); S.raf = requestAnimationFrame(loop); }
  });
  route();
})();
