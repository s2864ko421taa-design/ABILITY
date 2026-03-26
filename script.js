const questions = [
  { text: "初対面では、まず相手の雰囲気や安全さを見てから動く", key: "S" },
  { text: "人と仲良くなるまでに、ある程度時間が必要な方だ", key: "S" },
  { text: "最初から素を出すのは少し抵抗がある", key: "S" },
  { text: "会話では、相手の出方を見てから自分を出すことが多い", key: "S" },
  { text: "人との距離を縮める前に「この人は大丈夫か」を無意識に見ている", key: "S" },

  { text: "初対面でも、比較的すぐ自然に話せる", key: "G" },
  { text: "新しい人間関係に入ることに、そこまで強い抵抗はない", key: "G" },
  { text: "深く考える前に、まず話してみることが多い", key: "G" },
  { text: "知らない人がいても、空気次第で割とすぐ馴染める", key: "G" },
  { text: "人との関わりは、まず入ってみてから考えることが多い", key: "G" },

  { text: "感情や好き嫌いは、わりと表に出やすい方だ", key: "R" },
  { text: "無理にキャラを作るより、自然体でいたい", key: "R" },
  { text: "嫌なことがあると、多少なりとも反応に出やすい", key: "R" },
  { text: "思ったことをそのまま言いたくなることがある", key: "R" },
  { text: "人に合わせすぎると、自分がズレる感覚がある", key: "R" },

  { text: "相手によって話し方や雰囲気を変えることがある", key: "M" },
  { text: "その場に合う自分を自然に作っていることがある", key: "M" },
  { text: "本音より、その場が丸く収まる方を優先することがある", key: "M" },
  { text: "“今ここで何を出すべきか”を無意識に考えている", key: "M" },
  { text: "人と関わる時、自分を少し調整するのは普通だと思う", key: "M" },

  { text: "会話が止まりそうになると、自分から動くことが多い", key: "L" },
  { text: "話の流れを整えたり、前に進める役になりやすい", key: "L" },
  { text: "気づくと自分が場を回していることがある", key: "L" },
  { text: "会話や人間関係では、受け身すぎるより動いた方が楽だ", key: "L" },
  { text: "「このままだと微妙だな」と思うと、自分で流れを変えたくなる", key: "L" },

  { text: "会話では、自分から引っ張るより相手に合わせる方が自然だ", key: "F" },
  { text: "話の流れや空気に乗る方が、無理なく関われる", key: "F" },
  { text: "人と話す時は、自分が前に出るより“噛み合うこと”を大事にする", key: "F" },
  { text: "会話では、相手のテンポに合わせることが多い", key: "F" },
  { text: "無理に主導するより、その場に合う動きをする方が楽だ", key: "F" },

  { text: "相手の言葉や態度を、後から思い返すことが多い", key: "D" },
  { text: "人間関係のダメージは、しばらく残る方だ", key: "D" },
  { text: "“あの時こうすればよかった”と引きずることがある", key: "D" },
  { text: "嫌な空気や違和感を、頭の中で何度も再生しがちだ", key: "D" },
  { text: "一度刺さったことは、簡単には消えにくい", key: "D" },

  { text: "嫌なことがあっても、比較的切り替えは早い方だ", key: "C" },
  { text: "人間関係のモヤモヤは、ある程度で区切りをつけられる", key: "C" },
  { text: "終わったことを、いつまでも考え続けるのは少ない", key: "C" },
  { text: "気持ちを整理したら、前に進む方が自然だ", key: "C" },
  { text: "トラブルがあっても、長く引きずらない方だ", key: "C" },

  { text: "仲良くなった相手とは、かなり近い距離感になりやすい", key: "N" },
  { text: "表面的な関係より、深く通じる関係を求める", key: "N" },
  { text: "信頼した相手には、かなり心を開く方だ", key: "N" },
  { text: "人とのつながりに“深さ”があると安心する", key: "N" },
  { text: "浅く広くより、狭く深くの方がしっくり来る", key: "N" },

  { text: "人と仲良くなっても、自分の領域はある程度保ちたい", key: "B" },
  { text: "必要以上に踏み込まれると、少し距離を取りたくなる", key: "B" },
  { text: "深くなりすぎる関係は、時々しんどく感じる", key: "B" },
  { text: "親しくても、越えられたくない線はある", key: "B" },
  { text: "人間関係では“近すぎない心地よさ”も大事だと思う", key: "B" }
];

const choices = [
  { label: "とても当てはまる", value: 5 },
  { label: "やや当てはまる", value: 4 },
  { label: "どちらともいえない", value: 3 },
  { label: "あまり当てはまらない", value: 2 },
  { label: "全く当てはまらない", value: 1 }
];

const scores = {
  S: 0, G: 0, R: 0, M: 0, L: 0,
  F: 0, D: 0, C: 0, N: 0, B: 0
};

let current = 0;

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");

const questionText = document.getElementById("question-text");
const choicesWrap = document.getElementById("choices");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");

const typeCodeEl = document.getElementById("type-code");
const typeTitleEl = document.getElementById("type-title");
const typeDescEl = document.getElementById("type-desc");
const coreFunctionsEl = document.getElementById("core-functions");
const gaugesEl = document.getElementById("gauges");

startBtn.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  showQuestion();
});

restartBtn.addEventListener("click", () => {
  location.reload();
});

function showQuestion() {
  const q = questions[current];
  questionText.textContent = q.text;
  progressText.textContent = `${current + 1} / ${questions.length}`;
  progressBar.style.width = `${((current + 1) / questions.length) * 100}%`;

  choicesWrap.innerHTML = "";
  choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice.label;
    btn.addEventListener("click", () => {
      scores[q.key] += choice.value;
      current++;
      if (current < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    });
    choicesWrap.appendChild(btn);
  });
}

function applyCoreAdjustment(raw) {
  const adjusted = { ...raw };

  // コア補正（軽め）
  adjusted.F += raw.S * 0.15;
  adjusted.L += raw.G * 0.15;

  adjusted.N += raw.R * 0.15;
  adjusted.B += raw.M * 0.15;

  adjusted.F += raw.D * 0.1;
  adjusted.N += raw.D * 0.1;

  adjusted.L += raw.C * 0.1;
  adjusted.B += raw.C * 0.1;

  return adjusted;
}

function comparePair(a, b, keyA, keyB) {
  return a >= b ? keyA : keyB;
}

function percent(a, b) {
  return Math.round((a / (a + b)) * 100);
}

function showResult() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  const adjusted = applyCoreAdjustment(scores);

  const type =
    comparePair(adjusted.S, adjusted.G, "S", "G") +
    comparePair(adjusted.R, adjusted.M, "R", "M") +
    comparePair(adjusted.L, adjusted.F, "L", "F") +
    comparePair(adjusted.D, adjusted.C, "D", "C") +
    comparePair(adjusted.N, adjusted.B, "N", "B");

  const typeMap = {
    SRFDN: {
      title: "静かな共鳴型",
      desc: "慎重に人へ入り、空気に共鳴しながら、本音で深くつながるタイプ。静かだが中身はかなり濃い。"
    },
    GRLCN: {
      title: "陽キャ参謀型",
      desc: "自然に人へ入り、流れを作りながら深い関係も築ける万能型。"
    }
  };

  const info = typeMap[type] || {
    title: "未命名タイプ",
    desc: "このタイプの詳細説明はこれから追加できます。"
  };

  const coreArray = Object.entries(adjusted)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 2)
    .map(([k]) => k);

  typeCodeEl.textContent = type;
  typeTitleEl.textContent = info.title;
  typeDescEl.textContent = info.desc;
  coreFunctionsEl.textContent = `主軸：${coreArray[0]} / 補助：${coreArray[1]}`;

  const pairs = [
    ["S", "G"],
    ["R", "M"],
    ["L", "F"],
    ["D", "C"],
    ["N", "B"]
  ];

  gaugesEl.innerHTML = "";

  pairs.forEach(([a, b]) => {
    const p = percent(adjusted[a], adjusted[b]);
    const winner = adjusted[a] >= adjusted[b] ? a : b;
    const loser = winner === a ? b : a;
    const winnerPercent = winner === a ? p : 100 - p;

    const box = document.createElement("div");
    box.className = "gauge-box";
    box.innerHTML = `
      <div class="gauge-label">
        <span>${winner}</span>
        <span>${winnerPercent}%</span>
        <span>${loser}</span>
      </div>
      <div class="gauge-track">
        <div class="gauge-fill" style="width:${winnerPercent}%"></div>
      </div>
    `;
    gaugesEl.appendChild(box);
  });
}