document.addEventListener("DOMContentLoaded", function () {
  const randomBtn = document.getElementById("random-agent-btn");
  const agentCards = document.querySelectorAll(".content-card");
  randomBtn.addEventListener("click", function () {
    agentCards.forEach(function (card) {
      card.classList.remove("highlighted");
    });
    const randomIndex = Math.floor(Math.random() * agentCards.length);
    const randomCard = agentCards[randomIndex];
    randomCard.classList.add("highlighted");
    randomCard.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});