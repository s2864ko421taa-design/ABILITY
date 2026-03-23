const sections = [
  {
    axis: "C",
    title: "⚔️ Core Drive（原動力）",
    description: "何を求めて動くか。自由か、安定か。",
    keyA: "F",
    keyB: "S",
    items: [
      ["自由に動ける方が大事", "安定してる方が大事"],
      ["ワクワク優先", "安心優先"],
      ["縛られるくらいなら失敗する", "失敗するくらいなら縛られる"],
      ["やりたいことを選ぶ", "正しいことを選ぶ"],
      ["自分の意思を通す", "周りと合わせる"],
      ["チャンスを掴む", "リスクを避ける"],
      ["刺激がないと飽きる", "刺激が強すぎると疲れる"],
      ["好きなことに全振り", "バランス重視"],
      ["今の気持ちを優先", "将来を優先"],
      ["やりながら考える", "考えてからやる"],
      ["自分らしさ大事", "周りとの調和大事"],
      ["縛られない環境を作る", "安定した環境を守る"]
    ]
  },
  {
    axis: "O",
    title: "🌍 Outlook（世界の見方）",
    description: "世界をどう見るか。可能性か、現実か。",
    keyA: "P",
    keyB: "R",
    items: [
      ["未来の可能性を見る", "現実の状況を見る"],
      ["まだ見ぬ選択肢を考える", "今ある選択肢で決める"],
      ["アイデア重視", "実用性重視"],
      ["抽象的な話が好き", "具体的な話が好き"],
      ["想像するのが楽しい", "実現するのが楽しい"],
      ["直感で理解する", "分解して理解する"],
      ["話を広げる", "話をまとめる"],
      ["可能性は無限", "制限の中で最適化"],
      ["面白さ優先", "正確さ優先"],
      ["新しい視点を探す", "正しい答えを探す"],
      ["意味やストーリーを見る", "事実やデータを見る"],
      ["ひらめき重視", "再現性重視"]
    ]
  },
  {
    axis: "R",
    title: "💥 Response（反応）",
    description: "感情や衝突にどう反応するか。出すか、抑えるか。",
    keyA: "E",
    keyB: "S",
    items: [
      ["思ったことすぐ言う", "一旦飲み込む"],
      ["感情を出す", "感情を抑える"],
      ["話して整理する", "考えて整理する"],
      ["衝突しても伝える", "空気を壊さない"],
      ["ストレートに言う", "オブラートに包む"],
      ["自分の意見を押す", "相手に合わせる"],
      ["その場で解決したい", "時間を置きたい"],
      ["感情で動く", "理性で止める"],
      ["言葉でぶつかる", "態度で示す"],
      ["正直さ優先", "関係維持優先"],
      ["自分を出す", "場に合わせる"],
      ["その瞬間で対応", "一度整理して対応"]
    ]
  },
  {
    axis: "E",
    title: "🔥 Edge（限界時）",
    description: "追い込まれた時に出る本性。前へ出るか、引くか。",
    keyA: "O",
    keyB: "W",
    items: [
      ["イライラが外に出る", "内にこもる"],
      ["行動量が増える", "動けなくなる"],
      ["誰かに話す", "一人になる"],
      ["無理してでもやる", "一旦離れる"],
      ["感情が爆発する", "感情を切る"],
      ["攻める", "守る"],
      ["焦って動く", "固まる"],
      ["周りを巻き込む", "距離を取る"],
      ["限界でも続ける", "休む"],
      ["感情で判断する", "思考で切り替える"],
      ["強引に突破する", "状況を受け入れる"],
      ["テンション上げる", "無になる"]
    ]
  }
];

const axisMeta = {
  C: {
    A: { letter: "F", label: "Freedom" },
    B: { letter: "S", label: "Stability" }
  },
  O: {
    A: { letter: "P", label: "Possibility" },
    B: { letter: "R", label: "Reality" }
  },
  R: {
    A: { letter: "E", label: "Express" },
    B: { letter: "S", label: "Suppress" }
  },
  E: {
    A: { letter: "O", label: "Overdrive" },
    B: { letter: "W", label: "Withdraw" }
  }
};

const comboSummaries = {
  FPEO: "自由と可能性を燃料にして、感情を外へ出しながら限界でも前に出る火力型。",
  FPEW: "自由と可能性を追うが、限界時は一度引いて立て直す知的な跳躍型。",
  FPSO: "自由を求めつつ現実も見る。普段は出す、限界では押し切る実戦派。",
  FPSW: "自由志向だが観察力が高く、必要な時だけ前へ出る静かな攻略型。",
  FREO: "現実を見ながら自由を守る。率直で突破力もある現場司令塔型。",
  FREW: "現実派の自由人。普段は正直、限界時は引いて再編する切れ者型。",
  FRSO: "自由を大事にしながら現実適応も高い。抑えていても土壇場は強い。",
  FRSW: "自由を好む観測者。無理に前へ出ず、自分の距離で強さを保つ。",
  SPEO: "安定を土台に可能性を追い、感情も出せる。育成と爆発を両立する型。",
  SPEW: "安定と可能性の両刀。感情は出すが、限界時の退き方も上手い。",
  SPSO: "安定を重んじつつ想像力もある。普段は抑えめでも追い込まれると強い。",
  SPSW: "慎重で創造的。静かに考え、静かに立て直す内燃型。",
  SREO: "安定と現実を重視しつつ表現もできる。頼られやすい実務エース型。",
  SREW: "現実を見て安定を守る。必要なことは言い、危ない時はちゃんと引く。",
  SRSO: "堅実で抑制的だが、追い込まれると意外な火力が出る蓄積型。",
  SRSW: "最も守備力が高い型の一つ。安定、現実、抑制、自衛で土台が硬い。"
};

let flatQuestions = [];
let autoScrolling = false;

function buildFlatQuestions() {
  flatQuestions = [];
  let qNumber = 1;

  sections.forEach((section) => {
    section.items.forEach((item) => {
      flatQuestions.push({
        number: qNumber,
        axis: section.axis,
        sectionTitle: section.title,
        a: item[0],
        b: item[1]
      });
      qNumber++;
    });
  });
}

function renderQuiz() {
  const form = document.getElementById("quizForm");
  let html = "";
  let currentGlobalIndex = 0;

  sections.forEach((section) => {
    html += `
      <div class="section-block">
        <h2>${section.title}</h2>
        <p>${section.description}</p>
      </div>
    `;

    section.items.forEach((item) => {
      const qNum = currentGlobalIndex + 1;
      html += `
        <div class="question ${qNum === 1 ? "active" : ""}" id="question-${currentGlobalIndex}">
          <div class="question-number">Q${qNum}</div>
          <div class="question-text">どっちが近い？</div>
          <div class="options">
            <label class="option">
              <input type="radio" name="q${currentGlobalIndex}" value="A" />
              <span class="option-label">A. ${item[0]}</span>
            </label>
            <label class="option">
              <input type="radio" name="q${currentGlobalIndex}" value="B" />
              <span class="option-label">B. ${item[1]}</span>
            </label>
          </div>
        </div>
      `;
      currentGlobalIndex++;
    });
  });

  form.innerHTML = html;
  attachEvents();
  updateProgress();
}

function attachEvents() {
  const inputs = document.querySelectorAll('#quizForm input[type="radio"]');

  inputs.forEach((input) => {
    input.addEventListener("change", (event) => {
      const currentIndex = Number(event.target.name.replace("q", ""));
      markQuestionState(currentIndex);
      updateProgress();
      autoMoveNext(currentIndex);
    });
  });
}

function markQuestionState(currentIndex) {
  document.querySelectorAll(".question").forEach((q) => q.classList.remove("active"));

  const currentCard = document.getElementById(`question-${currentIndex}`);
  if (currentCard) {
    currentCard.classList.add("completed");
  }

  const nextCard = document.getElementById(`question-${currentIndex + 1}`);
  if (nextCard) {
    nextCard.classList.add("active");
  }
}

function autoMoveNext(currentIndex) {
  if (autoScrolling) return;
  autoScrolling = true;

  setTimeout(() => {
    const nextIndex = currentIndex + 1;
    const nextCard = document.getElementById(`question-${nextIndex}`);

    if (nextCard) {
      nextCard.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    } else {
      const result = document.getElementById("result");
      result.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }

    setTimeout(() => {
      autoScrolling = false;
    }, 420);
  }, 180);
}

function updateProgress() {
  let answered = 0;

  for (let i = 0; i < flatQuestions.length; i++) {
    const checked = document.querySelector(`input[name="q${i}"]:checked`);
    if (checked) answered++;
  }

  const text = document.getElementById("progressText");
  const fill = document.getElementById("progressFill");

  text.textContent = `${answered} / ${flatQuestions.length} answered`;
  fill.style.width = `${(answered / flatQuestions.length) * 100}%`;
}

function calculateResult() {
  const scores = {
    C: { A: 0, B: 0 },
    O: { A: 0, B: 0 },
    R: { A: 0, B: 0 },
    E: { A: 0, B: 0 }
  };

  let unansweredIndex = -1;

  flatQuestions.forEach((q, index) => {
    const checked = document.querySelector(`input[name="q${index}"]:checked`);
    if (!checked && unansweredIndex === -1) {
      unansweredIndex = index;
      return;
    }
    if (checked) {
      scores[q.axis][checked.value]++;
    }
  });

  if (unansweredIndex !== -1) {
    alert(`Q${unansweredIndex + 1} がまだだ。そこを埋めてから来い😏`);
    const target = document.getElementById(`question-${unansweredIndex}`);
    if (target) {
      target.classList.add("active");
      target.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
    return;
  }

  const type =
    (scores.C.A >= scores.C.B ? axisMeta.C.A.letter : axisMeta.C.B.letter) +
    (scores.O.A >= scores.O.B ? axisMeta.O.A.letter : axisMeta.O.B.letter) +
    (scores.R.A >= scores.R.B ? axisMeta.R.A.letter : axisMeta.R.B.letter) +
    (scores.E.A >= scores.E.B ? axisMeta.E.A.letter : axisMeta.E.B.letter);

  const result = document.getElementById("result");
  const summary = comboSummaries[type] || "かなり独自配合の複合型。場面でモードが変わる、読み応えのあるタイプだ。";

  document.getElementById("typeBox").textContent = type;
  document.getElementById("summary").textContent = summary;

  document.getElementById("scoreC").textContent =
    `${axisMeta.C.A.letter} ${scores.C.A} / ${axisMeta.C.B.letter} ${scores.C.B}`;
  document.getElementById("scoreO").textContent =
    `${axisMeta.O.A.letter} ${scores.O.A} / ${axisMeta.O.B.letter} ${scores.O.B}`;
  document.getElementById("scoreR").textContent =
    `${axisMeta.R.A.letter} ${scores.R.A} / ${axisMeta.R.B.letter} ${scores.R.B}`;
  document.getElementById("scoreE").textContent =
    `${axisMeta.E.A.letter} ${scores.E.A} / ${axisMeta.E.B.letter} ${scores.E.B}`;

  result.classList.remove("hidden");
  result.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function resetQuiz() {
  document.querySelectorAll('#quizForm input[type="radio"]').forEach((input) => {
    input.checked = false;
  });

  document.querySelectorAll(".question").forEach((q, index) => {
    q.classList.remove("completed", "active");
    if (index === 0) q.classList.add("active");
  });

  document.getElementById("result").classList.add("hidden");
  document.getElementById("typeBox").textContent = "----";
  document.getElementById("summary").textContent = "";
  document.getElementById("scoreC").textContent = "";
  document.getElementById("scoreO").textContent = "";
  document.getElementById("scoreR").textContent = "";
  document.getElementById("scoreE").textContent = "";

  updateProgress();

  const first = document.getElementById("question-0");
  if (first) {
    first.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }
}

buildFlatQuestions();
renderQuiz();
