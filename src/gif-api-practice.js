import "./css/styles.css";

const img = document.querySelector("img");

fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=ox5NsOblwMxXaqqugyKUjZ4fYGoi4ABB&s=cats",
  { mode: "cors" },
)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    img.src = response.data.images.original.url;
  });

const changeBtn = document.querySelector("button");

changeBtn.addEventListener("click", () => {
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=ox5NsOblwMxXaqqugyKUjZ4fYGoi4ABB&s=cats",
    { mode: "cors" },
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
    });
});

const searchInput = document.querySelector("input");

searchInput.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    const searchTerm = searchInput.value || "cats";
    fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=ox5NsOblwMxXaqqugyKUjZ4fYGoi4ABB&s=${searchTerm}`,
      { mode: "cors" },
      console.log("fetching"),
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        img.src = response.data.images.original.url;
        console.log("done");
      });
  }
});
