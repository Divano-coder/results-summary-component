const score = document.getElementById("injection-data");

const categories = [
  { category: "category1" },
  { category: "category2" },
  { category: "category3" },
  { category: "category4" },
];

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item, index) => {
      const p = document.createElement("p");
      p.innerHTML = `
        <img src="${item.icon}" alt="Logo of category">
        <span class="${categories[index].category}">${item.category}</span>
        <span class="score">${item.score}</span><span class="total-score">/     100</span>
      `;
      p.classList.add(`paragraph-${[index]}`);
      score.appendChild(p);
    });
  })
  .catch((error) => {
    console.error("Error loading JSON file.");
  });
