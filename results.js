const searchParams = new URLSearchParams(window.location.search);
const scoreEl = document.getElementById("score");
const themeEl = document.getElementById("theme");
const restartBtn = document.getElementById("restartBtn");
const toggleAnswersBtn = document.getElementById("toggleAnswers");
const questionsAnswersEl = document.getElementById("questionsAnswers");
const themesTranslations = {
  vocabulary: "vocabulaire",
  jobs: "métiers",
  pathologies: "pathologies",
  internet: "internet",
};
scoreEl.innerText = `score: ${searchParams.get("score") ?? 0} / ${searchParams.get("questionsN") ?? 0}`;
themeEl.innerText = `thème: ${themesTranslations[searchParams.get("theme")] ?? "thème non défini"}`;
restartBtn.addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "./";
  link.click();
});
for (let i = 0; i < searchParams.get("questionsN") ?? 0; i++) {
  const q = searchParams.get(`q${i}`);
  const ans = searchParams.get(`ans${i}`) ?? "";
  const uans = searchParams.get(`uans${i}`) ?? "";
  questionsAnswersEl.textContent += `question ${i + 1}: ${q}\n réponse correcte: ${ans}, ta réponse: ${uans}. \n`;
}
toggleAnswersBtn.addEventListener("click", () =>
  questionsAnswersEl.style.visibility == "visible"
    ? (questionsAnswersEl.style.visibility = "hidden")
    : (questionsAnswersEl.style.visibility = "visible"),
);