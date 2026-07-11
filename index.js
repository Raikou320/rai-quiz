const startBtn = document.getElementById("startBtn");
/** @type {HTMLSelectElement} */
const selectTheme = document.getElementById("selectTheme");

startBtn.addEventListener("click", () => {
  const link = document.createElement("a");
  const file = "./quiz.html"
  const url = new URL(file, import.meta.url);
  url.searchParams.append(
    "theme",
    selectTheme.options[selectTheme.options.selectedIndex].value,
  );
  link.href = url.href;
  link.click();
});
