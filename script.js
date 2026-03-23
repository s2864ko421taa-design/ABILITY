const questions = [
  ["自由に動ける方が大事", "安定してる方が大事", "C"],
  ["ワクワク優先", "安心優先", "C"],
  ["未来の可能性を見る", "現実の状況を見る", "O"],
  ["アイデア重視", "実用性重視", "O"],
  ["思ったことすぐ言う", "一旦飲み込む", "R"],
  ["感情を出す", "感情を抑える", "R"],
  ["イライラが外に出る", "内にこもる", "E"],
  ["行動量が増える", "動けなくなる", "E"]
];

const keys = {
  C: ["F", "S"],
  O: ["P", "R"],
  R: ["E", "S"],
  E: ["O", "W"]
};

let isAutoScrolling = false;

function render() {
  const form = document.getElementById("quizForm");
  let html = "";

  questions.forEach((q, i) => {
    html += `
      <div class="question" id="question-${i}">
        <p><strong>Q${i + 1}</strong></p>
        <label class="option">
          <input type="radio" name="q${i}" value="A">
          <span>A: ${q[0]}</span>
        </label>
        <label class="option">
          <input type="radio" name="q${i}" value="B">
          <span>B: ${q[1]}</span>
        </label>
      </div>
    `;
  });

  form.innerHTML = html;

  attachAutoNextEvents();
}

function attachAutoNextEvents() {
  const allInputs = document.querySelectorAll('#quizForm input[type="radio"]');

  allInputs.forEach((input) => {
    input.addEventListener("change", (event) => {
      if (isAutoScrolling) return;

      const name = event.target.name;   // q0, q1...
      const currentIndex = Number(name.replace("q", ""));
      const nextIndex = currentIndex + 1;

      isAutoScrolling = true;

      setTimeout(() => {
        if (nextIndex < questions.length) {
          const nextQuestion = document.getElementById(`question-${nextIndex}`);
          if (nextQuestion) {
            nextQuestion.scrollIntoView({
              behavior: "smooth",
              block: "center"
            });
          }
        } else {
          const result = document.getElementById("result");
          if (result) {
            result.scrollIntoView({
              behavior: "smooth",
              block: "start"
            });
          }
        }

        setTimeout(() => {
          isAutoScrolling = false;
        }, 450);
      }, 180);
    });
  });
}

function calculateResult() {
  let score = {
    C: [0, 0],
    O: [0, 0],
    R: [0, 0],
    E: [0, 0]
  };

  let allAnswered = true;

  questions.forEach((q, i) => {
    const checked = document.querySelector(`input[name="q${i}"]:checked`);
    if (!checked) {
      allAnswered = false;
      return;
    }

    if (checked.value === "A") {
      score[q[2]][0]++;
    } else {
      score[q[2]][1]++;
    }
  });

  if (!allAnswered) {
    alert("まだ全部答えてないぞ。先に全部埋めよう。");
    return;
  }

  let result = "";
  ["C", "O", "R", "E"].forEach((axis) => {
    result += score[axis][0] >= score[axis][1] ? keys[axis][0] : keys[axis][1];
  });

  document.getElementById("typeBox").textContent = result;
  document.getElementById("summary").textContent = "お前のコアはこれだ。";
  document.getElementById("result").style.display = "block";

  setTimeout(() => {
    document.getElementById("result").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }, 100);
}

function resetQuiz() {
  document.querySelectorAll('input[type="radio"]').forEach((input) => {
    input.checked = false;
  });

  document.getElementById("result").style.display = "none";

  const firstQuestion = document.getElementById("question-0");
  if (firstQuestion) {
    firstQuestion.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }
}

render();