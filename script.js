const questions = [
  ["自由に動ける方が大事","安定してる方が大事","C"],
  ["ワクワク優先","安心優先","C"],
  ["未来の可能性を見る","現実の状況を見る","O"],
  ["アイデア重視","実用性重視","O"],
  ["思ったことすぐ言う","一旦飲み込む","R"],
  ["感情を出す","感情を抑える","R"],
  ["イライラが外に出る","内にこもる","E"],
  ["行動量が増える","動けなくなる","E"]
];

const keys = {
  C: ["F","S"],
  O: ["P","R"],
  R: ["E","S"],
  E: ["O","W"]
};

function render() {
  const form = document.getElementById("quizForm");
  let html = "";

  questions.forEach((q,i) => {
    html += `
    <div class="question">
      <p>Q${i+1}</p>
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
}

function calculateResult() {
  let score = {
    C:[0,0],
    O:[0,0],
    R:[0,0],
    E:[0,0]
  };

  let allAnswered = true;

  questions.forEach((q,i)=>{
    const checked = document.querySelector(`input[name="q${i}"]:checked`);
    if(!checked){ allAnswered=false; return; }

    if(checked.value==="A"){
      score[q[2]][0]++;
    } else {
      score[q[2]][1]++;
    }
  });

  if(!allAnswered){
    alert("全部答えろ😏");
    return;
  }

  let result = "";
  ["C","O","R","E"].forEach(axis=>{
    result += score[axis][0] >= score[axis][1] ? keys[axis][0] : keys[axis][1];
  });

  document.getElementById("typeBox").textContent = result;
  document.getElementById("summary").textContent = "お前のコアはこれだ。";
  document.getElementById("result").style.display = "block";
}

function resetQuiz(){
  document.querySelectorAll("input").forEach(i=>i.checked=false);
  document.getElementById("result").style.display = "none";
}

render();
