if (document.location.href.includes("pets")) {
  let all = document.querySelector(`.pets`);

  all.classList.remove("hidden");
} else if (document.location.href.includes("cn")) {
  let all = document.querySelector(`.cn`);

  all.classList.remove("hidden");
} else if (document.location.href.includes("news")) {
  let all = document.querySelector(`.news`);

  all.classList.remove("hidden");
}
