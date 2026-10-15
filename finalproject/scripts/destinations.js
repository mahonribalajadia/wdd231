import { saveFilter, getSavedFilter } from "./storage.js";

document.addEventListener("DOMContentLoaded", () => {
  // Shared state
  let destinations = [];

  const menuButton = document.querySelector("#menu");
  const navigation = document.querySelector("nav");
  const body = document.body;

  const container = document.querySelector("#gallery-destinations");
  const allLink = document.getElementById("all");
  const luzonLink = document.getElementById("luzon");
  const visayasLink = document.getElementById("visayas");
  const mindanaoLink = document.getElementById("mindanao");

  const links = [
    allLink,
    luzonLink,
    visayasLink,
    mindanaoLink
  ].filter(Boolean);

  const dialog = document.querySelector("#destination-dialog");
  const dialogDetails = document.querySelector("#dialog-details");
  const closeDialog = document.querySelector("#close-dialog");

  // Mobile menu
  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      navigation.classList.toggle("open");
      menuButton.classList.toggle("open");
      body.classList.toggle("no-scroll");
    });
  }

  // Set the active category
  function setActiveLink(filterName) {
    links.forEach(link => link.classList.remove("active"));

    const activeLink = {
      all: allLink,
      Luzon: luzonLink,
      Visayas: visayasLink,
      Mindanao: mindanaoLink
    }[filterName] || allLink;

    activeLink?.classList.add("active");
  }

  // Render destination cards
  function createDestinationCard(items) {
    if (!container) return;

    container.replaceChildren();

    const sortedDestinations = [...items].sort(
      (a, b) => a.name.localeCompare(b.name)
    );

    sortedDestinations.forEach(destination => {
      const card = document.createElement("article");
      card.classList.add("gd-card");

      const image = document.createElement("img");
      image.src = destination.imageUrl;
      image.alt = destination.name;
      image.loading = "lazy";
      image.classList.add("gd-card-img");

      const textBox = document.createElement("div");
      textBox.classList.add("gd-text-box");

      const title = document.createElement("h2");
      title.classList.add("gd-title");
      title.textContent = destination.name;

      const location = document.createElement("p");
      location.innerHTML = `<strong>Region:</strong> ${destination.location}`;

      const bestTime = document.createElement("p");
      bestTime.innerHTML =
        `<strong>Best time to visit:</strong> ${destination.bestTimeToVisit}`;

      const detailsButton = document.createElement("button");
      detailsButton.type = "button";
      detailsButton.textContent = "View Details";
      detailsButton.dataset.destination = destination.name;

      textBox.append(
        title,
        location,
        bestTime,
        detailsButton
      );

      card.append(image, textBox);
      container.appendChild(card);
    });
  }

  // Filter destinations
  function applyFilter(filterName) {
    const filteredDestinations =
      filterName === "all"
        ? destinations
        : destinations.filter(
          destination => destination.location === filterName
        );

    setActiveLink(filterName);
    createDestinationCard(filteredDestinations);
  }

  // Filter button events
  function registerFilter(link, filterName) {
    if (!link) return;

    link.addEventListener("click", event => {
      event.preventDefault();

      saveFilter(filterName);
      applyFilter(filterName);
    });
  }

  registerFilter(allLink, "all");
  registerFilter(luzonLink, "Luzon");
  registerFilter(visayasLink, "Visayas");
  registerFilter(mindanaoLink, "Mindanao");

  // Load destination data
  async function loadDestinations() {
    if (!container) return;

    container.textContent = "Loading destinations...";

    try {
      const response = await fetch("./data/destinations.json");

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const data = await response.json();

      if (
        !Array.isArray(data) ||
        data.length < 15 ||
        !data.every(item =>
          item.name &&
          item.location &&
          item.description &&
          item.imageUrl
        )
      ) {
        throw new Error(
          "Destination data must contain at least 15 valid records."
        );
      }

      destinations = data;

      const savedFilter = getSavedFilter();
      const validFilters = [
        "all",
        "Luzon",
        "Visayas",
        "Mindanao"
      ];

      applyFilter(
        validFilters.includes(savedFilter)
          ? savedFilter
          : "all"
      );
    } catch (error) {
      console.error("Failed to load destinations:", error);
      container.textContent =
        "Unable to load destinations. Please try again later.";
    }
  }

  // Destination details modal
  if (container && dialog && dialogDetails && closeDialog) {
    container.addEventListener("click", event => {
      const button = event.target.closest("[data-destination]");

      if (!button) return;

      const destination = destinations.find(
        item => item.name === button.dataset.destination
      );

      if (!destination) return;

      dialogDetails.replaceChildren();

      const title = document.createElement("h2");
      title.id = "dialog-title";
      title.textContent = destination.name;

      const description = document.createElement("p");
      description.textContent = destination.description;

      dialogDetails.append(title, description);
      dialog.showModal();
    });

    closeDialog.addEventListener("click", () => {
      dialog.close();
    });

    dialog.addEventListener("click", event => {
      if (event.target === dialog) {
        dialog.close();
      }
    });
  }

  loadDestinations();
});