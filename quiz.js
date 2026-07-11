import vocq1 from "./questions/vocabulary/question1.json" with { type: "json" };
import vocq2 from "./questions/vocabulary/question2.json" with { type: "json" };
import vocq3 from "./questions/vocabulary/question3.json" with { type: "json" };
import vocq4 from "./questions/vocabulary/question4.json" with { type: "json" };
import vocq5 from "./questions/vocabulary/question5.json" with { type: "json" };
import vocq6 from "./questions/vocabulary/question6.json" with { type: "json" };
import jobq1 from "./questions/jobs/question1.json" with { type: "json" };
import jobq2 from "./questions/jobs/question2.json" with { type: "json" };
import patq1 from "./questions/pathologies/question1.json" with { type: "json" };
import patq2 from "./questions/pathologies/question2.json" with { type: "json" };
import patq3 from "./questions/pathologies/question3.json" with { type: "json" };
import patq4 from "./questions/pathologies/question4.json" with { type: "json" };
import intq1 from "./questions/internet/question1.json" with { type: "json" };
import intq2 from "./questions/internet/question2.json" with { type: "json" };

const vocqs = [vocq1, vocq2, vocq3, vocq4, vocq5, vocq6];
const jobqs = [jobq1, jobq2];
const patqs = [patq1, patq2, patq3, patq4];
const intqs = [intq1, intq2];
let questionI = 0;
let score = 0;
let questionsN = 0;
const urlParams = new URLSearchParams(window.location.search);
const theme = urlParams.get("theme");
/** @type {HTMLParagraphElement} */
const questionEl = document.getElementById("question");
const questionInfoEl = document.getElementById("questionInfo");
/** @type {HTMLInputElement} */
const answerEl = document.getElementById("answer");
const submitBtn = document.getElementById("submitBtn");
const scoreEl = document.getElementById("score");

if (theme == "vocabulary") {
  const uans = [];
  questionsN = vocqs.length;
  let question = vocqs[questionI];
  questionEl.innerText = question.question;
  questionInfoEl.innerText = `Question ${questionI + 1} / ${questionsN}`;
  submitBtn.addEventListener("click", () => {
    question.answers.forEach((ans) => {
      if (answerEl.value.toLowerCase() == ans)
        scoreEl.innerText = `Score: ${++score}`;
    });
    uans.push(answerEl.value.toLowerCase());
    if (questionI < vocqs.length - 1) {
      question = vocqs[++questionI];
      questionEl.innerText = question.question;
      questionInfoEl.innerText = `Question ${questionI + 1} / ${questionsN}`;
      answerEl.value = "";
    } else {
      const link = document.createElement("a");
      const file = "./results.html";
      const url = new URL(file, import.meta.url);
      url.searchParams.append("score", score);
      url.searchParams.append("theme", theme);
      url.searchParams.append("questionsN", questionsN);
      vocqs.forEach((vocq, i) =>
        url.searchParams.append(
          `ans${i}`,
          vocq.answers.map((ans, i, ansa) =>
            i < ansa.length - 1 ? ans + ", " : ans,
          ),
        ),
      );
      vocqs.forEach((vocq, i) =>
        url.searchParams.append(`q${i}`, vocq.question),
      );
      vocqs.forEach((vocq, i) => url.searchParams.append(`uans${i}`, uans[i]));
      link.href = url.href;
      link.click();
    }
  });
} else if (theme == "jobs") {
  const uans = [];
  questionsN = jobqs.length;
  let question = jobqs[questionI];
  questionEl.innerText = question.question;
  questionInfoEl.innerText = `Question ${questionI + 1} / ${questionsN}`;
  submitBtn.addEventListener("click", () => {
    question.answers.forEach((ans) => {
      if (answerEl.value.toLowerCase() == ans)
        scoreEl.innerText = `Score: ${++score}`;
    });
    uans.push(answerEl.value.toLowerCase());
    if (questionI < jobqs.length - 1) {
      question = jobqs[++questionI];
      questionEl.innerText = question.question;
      questionInfoEl.innerText = `Question ${questionI + 1} / ${questionsN}`;
      answerEl.value = "";
    } else {
      const link = document.createElement("a");
      const file = "./results.html";
      const url = new URL(file, import.meta.url);
      url.searchParams.append("score", score);
      url.searchParams.append("theme", theme);
      url.searchParams.append("questionsN", questionsN);
      jobqs.forEach((jobq, i) =>
        url.searchParams.append(
          `ans${i}`,
          jobq.answers.map((ans, i, ansa) =>
            i < ansa.length - 1 ? ans + ", " : ans,
          ),
        ),
      );
      jobqs.forEach((jobq, i) =>
        url.searchParams.append(`q${i}`, jobq.question),
      );
      jobqs.forEach((jobq, i) => url.searchParams.append(`uans${i}`, uans[i]));
      link.href = url.href;
      link.click();
    }
  });
} else if (theme == "pathologies") {
  const uans = [];
  questionsN = patqs.length;
  let question = patqs[questionI];
  questionEl.innerText = question.question;
  questionInfoEl.innerText = `Question ${questionI + 1} / ${questionsN}`;
  submitBtn.addEventListener("click", () => {
    question.answers.forEach((ans) => {
      if (answerEl.value.toLowerCase() == ans)
        scoreEl.innerText = `Score: ${++score}`;
    });
    uans.push(answerEl.value.toLowerCase());
    if (questionI < patqs.length - 1) {
      question = patqs[++questionI];
      questionEl.innerText = question.question;
      questionInfoEl.innerText = `Question ${questionI + 1} / ${questionsN}`;
      answerEl.value = "";
    } else {
      const link = document.createElement("a");
      const file = "./results.html";
      const url = new URL(file, import.meta.url);
      url.searchParams.append("score", score);
      url.searchParams.append("theme", theme);
      url.searchParams.append("questionsN", questionsN);
      patqs.forEach((patq, i) =>
        url.searchParams.append(
          `ans${i}`,
          patq.answers.map((ans, i, ansa) =>
            i < ansa.length - 1 ? ans + ", " : ans,
          ),
        ),
      );
      patqs.forEach((patq, i) =>
        url.searchParams.append(`q${i}`, patq.question),
      );
      patqs.forEach((patq, i) => url.searchParams.append(`uans${i}`, uans[i]));
      link.href = url.href;
      link.click();
    }
  });
}
if (theme == "internet") {
  const uans = [];
  questionsN = intqs.length;
  let question = intqs[questionI];
  questionEl.innerText = question.question;
  questionInfoEl.innerText = `Question ${questionI + 1} / ${questionsN}`;
  submitBtn.addEventListener("click", () => {
    question.answers.forEach((ans) => {
      if (answerEl.value.toLowerCase() == ans)
        scoreEl.innerText = `Score: ${++score}`;
    });
    uans.push(answerEl.value.toLowerCase());
    if (questionI < intqs.length - 1) {
      question = intqs[++questionI];
      questionEl.innerText = question.question;
      questionInfoEl.innerText = `Question ${questionI + 1} / ${questionsN}`;
      answerEl.value = "";
    } else {
      const link = document.createElement("a");
      const file = "./results.html";
      const url = new URL(file, import.meta.url);
      url.searchParams.append("score", score);
      url.searchParams.append("theme", theme);
      url.searchParams.append("questionsN", questionsN);
      intqs.forEach((intq, i) =>
        url.searchParams.append(
          `ans${i}`,
          intq.answers.map((ans, i, ansa) =>
            i < ansa.length - 1 ? ans + ", " : ans,
          ),
        ),
      );
      intqs.forEach((intq, i) =>
        url.searchParams.append(`q${i}`, intq.question),
      );
      intqs.forEach((intq, i) => url.searchParams.append(`uans${i}`, uans[i]));
      link.href = url.href;
      link.click();
    }
  });
}