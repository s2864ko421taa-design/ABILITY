const questions = [
  { text: "初対面では、まず相手の雰囲気を見てから動くことが多い", key: "S" },
  { text: "人と仲良くなるまでに、ある程度時間が必要な方だ", key: "S" },

  { text: "初対面でも比較的すぐ自然に話せる", key: "G" },
  { text: "新しい人間関係に入ることに、そこまで強い抵抗はない", key: "G" },

  { text: "感情や好き嫌いは、わりと表に出やすい方だ", key: "R" },
  { text: "無理にキャラを作るより、自然体でいたい", key: "R" },

  { text: "相手によって話し方や雰囲気を変えることがある", key: "M" },
  { text: "その場に合う自分を自然に作っていることがある", key: "M" },

  { text: "会話が止まりそうになると、自分から動くことが多い", key: "L" },
  { text: "話の流れを整えたり、前に進める役になりやすい", key: "L" },

  { text: "会話では、自分から引っ張るより相手に合わせる方が自然だ", key: "F" },
  { text: "話の流れや空気に乗る方が、無理なく関われる", key: "F" },

  { text: "相手の言葉や態度を、後から思い返すことが多い", key: "D" },
  { text: "人間関係のダメージは、しばらく残る方だ", key: "D" },

  { text: "嫌なことがあっても、比較的切り替えは早い方だ", key: "C" },
  { text: "終わったことを、いつまでも考え続けるのは少ない", key: "C" },

  { text: "表面的な関係より、深く通じる関係を求める", key: "N" },
  { text: "信頼した相手には、かなり心を開く方だ", key: "N" },

  { text: "人と仲良くなっても、自分の領域はある程度保ちたい", key: "B" },
  { text: "必要以上に踏み込まれると、少し距離を取りたくなる", key: "B" }
];

const choices = [
  { label: "とても当てはまる", value: 5 },
  { label: "やや当てはまる", value: 4 },
  { label: "どちらともいえない", value: 3 },
  { label: "あまり当てはまらない", value: 2 },
  { label: "全く当てはまらない", value: 1 }
];

let current = 0;

const scores = {
  S: 0, G: 0, R: 0, M: 0, L: 0,
  F: 0, D: 0, C: 0, N: 0, B: 0
};

const typeMap = {
  SRFDN: {
    title: "観察共鳴型",
    desc: "慎重に人を見ながらも、相手の空気や感情にかなり敏感で、深く共鳴しやすいタイプ。"
  },
  GRLCN: {
    title: "陽キャ参謀型",
    desc: "自然な社交性と流れを作る力を持ちつつ、深い関係も築ける万能型。"
  },
  SMLCB: {
    title: "仮面の管理者型",
    desc: "その場に最適な自分を保ちながら、冷静に全体を整えるタイプ。"
  },
  GMFCB: {
    title: "平和維持型",
    desc: "空気を壊さず、人と自然に関わりながら、自分の境界線も守れる安定型。"
  }
};

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const resultText = document.getElementById("result-text");
const restartBtn = document.getElementById("restart-btn");

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
  questionEl.textContent = q.text;
  choicesEl.innerHTML = "";

  choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice.label;
    btn.className = "choice";

    btn.addEventListener("click", () => {
      scores[q.key] += choice.value;
      current++;

      if (current < questions.length) {
        showQuestion();
      } else {
        showResult();
      }
    });

    choicesEl.appendChild(btn);
  });
}

function comparePair(a, b, keyA, keyB) {
  return a >= b ? keyA : keyB;
}

function showResult() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  const type =
    comparePair(scores.S, scores.G, "S", "G") +
    comparePair(scores.R, scores.M, "R", "M") +
    comparePair(scores.L, scores.F, "L", "F") +
    comparePair(scores.D, scores.C, "D", "C") +
    comparePair(scores.N, scores.B, "N", "B");

  let finalType = type;

  if (!typeMap[type]) {
    const first = comparePair(scores.S, scores.G, "S", "G");
    const second = comparePair(scores.R, scores.M, "R", "M");

    if (first === "S" && second === "R") finalType = "SRFDN";
    else if (first === "G" && second === "R") finalType = "GRLCN";
    else if (first === "S" && second === "M") finalType = "SMLCB";
    else finalType = "GMFCB";
  }

  const info = typeMap[finalType];

  resultText.innerHTML = `
    <strong>${finalType}｜${info.title}</strong><br><br>
    ${info.desc}
  `;
}