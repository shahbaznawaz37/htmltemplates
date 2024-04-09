const dateCardsContainer = document.getElementById("dateCards");
let currentDate = new Date();

const loadWeek = (startDate) => {
  dateCardsContainer.innerHTML = "";
  const today = new Date(); // Get today's date
  for (let i = 0; i < 7; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);

    // Create the main date card container
    const dateCard = document.createElement("div");
    dateCard.classList.add("date-card");

    // Create and append the day name element
    const dayName = document.createElement("div");
    dayName.classList.add("day-name");
    dayName.textContent = date.toLocaleDateString("en-us", { weekday: "long" });
    dateCard.appendChild(dayName);

    // Create and append the date info element
    const dateInfo = document.createElement("div");
    dateInfo.classList.add("date-info");
    dateInfo.textContent = date.toLocaleDateString("en-us", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    dateCard.appendChild(dateInfo);

    // Optionally create and append the checkmark icon if needed
    const checkmarkIcon = document.createElement("i");
    checkmarkIcon.classList.add("checkmark-icon", "fas", "fa-check-circle");
    // You might want to conditionally display this icon
    dateCard.appendChild(checkmarkIcon);

    // Create and append the value element (You'll need to define how you calculate this value)
    const value = document.createElement("div");
    value.classList.add("value");
    // Example value, replace with your actual dynamic value
    const randomValue = Math.floor(Math.random() * 100) + 1;
    value.textContent = randomValue.toString();
    dateCard.appendChild(value);

    // Store the full date in ISO format in a data attribute
    dateCard.dataset.date = date.toISOString();

    // Check if the date is today's date and highlight it
    if (date.toDateString() === today.toDateString()) {
      dateCard.classList.add("selected");
    }

    // Click event to select a date card
    dateCard.onclick = function () {
      document
        .querySelectorAll(".date-card")
        .forEach((card) => card.classList.remove("selected"));
      dateCard.classList.add("selected");
    };

    // Append the completed date card to the container
    dateCardsContainer.appendChild(dateCard);
  }
};

const changeWeek = (offset) => {
  const startOfWeek = currentDate.getDate() - currentDate.getDay() + offset;
  currentDate.setDate(startOfWeek);
  loadWeek(currentDate);
};

document
  .getElementById("prevWeek")
  .addEventListener("click", () => changeWeek(-7));
document
  .getElementById("nextWeek")
  .addEventListener("click", () => changeWeek(7));

// Initialize with current week
changeWeek(0);
