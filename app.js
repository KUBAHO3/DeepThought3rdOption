const searchBar = document.querySelector(".search-bar");
const searchBtn = document.querySelector("#search-btn");
const result = document.querySelector(".result");
const searchSection = document.querySelector(".search-section");

searchBtn.addEventListener("click", () => {
  let url = `https://restcountries.com/v2/name/${searchBar.value}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCountry(data));
});

const displayCountry = (data) => {
  console.log(data);
  data.forEach((country) => {
    const div = document.createElement("div");
    div.className = "d-flex p-3  shadow";
     div.style.width = "90%";
    div.innerHTML = `
            <div class="card">
            <img src="${country.flag}" class="card-img-top" alt="...">
            <div class="card-body">
                <h2 class="card-text">${country.name}</h2>
                <h5 class="card-text">This country have ${country.population} population and the capital city of ${country.capital}</h5>
            </div></div>
            <div class="card">
            <img src="https://www.nationsonline.org/maps/${country.name}.jpg">
            <h2 class="card-text">${country.name}</h2>
                <h5 class="card-text">This country have ${country.population} population and the capital city of ${country.capital}</h5>
            </div>
            </div>
    `;
    result.appendChild(div);
  });
};