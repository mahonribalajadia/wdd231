document.addEventListener('DOMContentLoaded', function() {
  // FOR MOBILE MENU
  const menuButton = document.querySelector('#menu');
  const navigation = document.querySelector('nav');
  const body = document.body;

  if (menuButton) {
    menuButton.addEventListener('click', function() {
      navigation.classList.toggle('open');
      menuButton.classList.toggle('open');
      body.classList.toggle('no-scroll');
    });
  }

  // FOR POPULATING DESTINATIONS PAGE
  const destinations = [
      {
        name: "El Nido, Palawan",
        location: "Luzon",
        description: "A world-renowned tropical paradise in the Philippines, famous for its stunning limestone cliffs, crystal-clear turquoise waters, pristine white-sand beaches (like Nacpan Beach), hidden lagoons (Big & Small Lagoon), and rich marine life, making it a top destination for island hopping, snorkeling, diving, and exploring dramatic landscapes and secret spots, offering both adventure and relaxation.",
        imageUrl: "https://raw.githubusercontent.com/brother-of-jared/wdd131/refs/heads/main/project/images/el-nido.webp"
      },
      {
        name: "Puerto Princesa, Palawan",
        location: "Luzon",
        description: `A prime eco-tourism hub known as the "City in a Forest," famous for the UNESCO-listed Underground River, limestone caves, diverse wildlife, and island hopping in Honda Bay (Cowrie, Luli, Starfish Islands) for snorkeling and pristine beaches, offering a blend of natural wonders and accessible adventure as a secure base for exploring Palawan's famed beauty.`,
        imageUrl: "https://raw.githubusercontent.com/brother-of-jared/wdd131/refs/heads/main/project/images/puerto-princesa.webp"
      },
      {
        name: "Coron, Palawan",
        location: "Luzon",
        description: "A world-class tropical paradise famed for its dramatic limestone cliffs, crystal-clear turquoise waters, hidden lagoons (like Twin Lagoons), pristine white-sand beaches, and vibrant coral reefs teeming with marine life, making it a top destination for island hopping, diving (shipwrecks & reefs), snorkeling, kayaking, and exploring natural wonders like Kayangan Lake and Siete Pecados.",
        imageUrl: "https://raw.githubusercontent.com/brother-of-jared/wdd131/refs/heads/main/project/images/coron.webp"
      },
      {
        name: "Boracay Island",
        location: "Visayas",
        description: "A world-renowned Philippine island paradise famous for its powdery white sand (White Beach), crystal-clear turquoise waters, stunning sunsets, and vibrant atmosphere, blending tranquil relaxation with exciting water sports like diving, kite surfing, and island hopping, plus a lively nightlife with beach bars and fire dancers, making it a top destination for all traveler types.",
        imageUrl: "https://raw.githubusercontent.com/brother-of-jared/wdd131/refs/heads/main/project/images/boracay.webp"
      },
      {
        name: "Chocolate Hills",
        location: "Visayas",
        description: "The Chocolate Hills in Bohol are a world-famous natural wonder, known for their symmetrical, cone-shaped mounds that turn a rich chocolate brown in the dry season, attracting global tourists for stunning panoramic views from designated spots like the Chocolate Hills Complex. A key part of Bohol's identity, these geological formations, a UNESCO tentative site, offer breathtaking landscapes, cultural legends of giants, and a unique photo opportunity, making them a must-see eco-tourism destination in the Philippines.",
        imageUrl: "https://raw.githubusercontent.com/brother-of-jared/wdd131/refs/heads/main/project/images/bohol.webp"
      },
      {
        name: "Vigan City, Ilocos Sur",
        location: "Luzon",
        description: "Vigan City is a premier Philippine tourist destination, famous as Asia's best-preserved Spanish colonial town, a UNESCO World Heritage site known for its cobblestone streets (Calle Crisologo), horse-drawn carriages (kalesas), stone-brick mansions, and unique blend of Filipino, Chinese, and European architecture, offering a nostalgic journey back in time with historical churches, museums like the Syquia Mansion, and local delicacies like Vigan longganisa.",
        imageUrl: "https://raw.githubusercontent.com/brother-of-jared/wdd131/refs/heads/main/project/images/vigan.webp"
      },
      {
        name: "Banaue Rice Terraces",
        location: "Luzon",
        description: `The Banaue Rice Terraces are a stunning, 2,000-year-old UNESCO World Heritage site carved into Ifugao mountains, offering breathtaking, "8th Wonder of the World views" from various viewpoints and hiking trails, showcasing ancient Ifugao ingenuity in farming, with peak beauty during planting (April/May) and harvest (October), attracting eco-tourists and culture enthusiasts seeking immersive experiences in a unique living landscape, though some areas face maintenance challenges.`,
        imageUrl: "https://raw.githubusercontent.com/brother-of-jared/wdd131/refs/heads/main/project/images/banaue-rice-terraces.webp"
      },
      {
        name: "Intramuros",
        location: "Luzon",
        description: `Intramuros is Manila's historic "Walled City," a prime tourist spot offering a journey back to the Spanish colonial era with its thick stone walls, cobblestone streets, grand churches (like San Agustin), historic forts (like Fort Santiago), and museums, providing a rich cultural and historical experience with a distinct old-world charm amidst modern Manila. Visitors explore its Spanish-era architecture, learn about Philippine history, and experience traditional transport like kalesas (horse-drawn carriages) or bamboo bikes, making it an essential destination for understanding the nation's past.`,
        imageUrl: "https://raw.githubusercontent.com/brother-of-jared/wdd131/refs/heads/main/project/images/intramuros.webp"
      },
      {
        name: "Mayon Volcano, Albay",
        location: "Luzon",
        description: "Mayon Volcano is a world-renowned tourist destination celebrated for its stunning, near-perfect conical shape, offering breathtaking views, thrilling ATV adventures, hiking, and cultural exploration in Albay, Philippines, with key spots like Cagsawa Ruins and Sumlang Lake providing iconic photo ops and serene relaxation, all while highlighting the region's resilience against its active volcanic nature.",
        imageUrl: "https://raw.githubusercontent.com/brother-of-jared/wdd131/refs/heads/main/project/images/mayon-volcano.webp"
      },
      {
        name: "Siargao Island",
        location: "Mindanao",
        description: `Siargao is a teardrop-shaped Philippine island famous as the "Surfing Capital", drawing pros to its legendary Cloud 9 waves, but it's also a diverse paradise with island hopping to Naked, Daku, Guyam Islands, stunning lagoons like Sugba Lagoon, natural pools at Magpupungko, lush coconut groves, and a laid-back vibe with great food, catering to surfers, adventurers, and relaxation seekers alike.`,
        imageUrl: "https://raw.githubusercontent.com/brother-of-jared/wdd131/refs/heads/main/project/images/siargao.webp"
      },
      {
        name: "Mt. Pinatubo",
        location: "Luzon",
        description: `Mount Pinatubo is a stunning Philippine volcano transformed from a devastating 1991 eruption into a premier eco-tourism spot, famous for its surreal, turquoise crater lake reached via adventurous 4x4 rides through vast lahar fields followed by manageable, scenic hikes, offering breathtaking views and a unique blend of natural beauty and historical significance, perfect for adventurous hikers and nature lovers seeking a "beautiful disaster" experience.`,
        imageUrl: "https://raw.githubusercontent.com/brother-of-jared/wdd131/refs/heads/main/project/images/mount-pinatubo.webp"
      },
      {
        name: "Hundred Islands National Park",
        location: "Luzon",
        description: "The Hundred Islands National Park in Pangasinan is a premier Philippine destination, famous for its 124 mushroom-shaped islets, crystal-clear waters, and diverse activities like island hopping, snorkeling, kayaking, cliff diving, and ziplining, offering a mix of natural beauty, adventure, relaxation, and religious sites, making it ideal for families, friends, and nature lovers seeking unforgettable experiences in a unique archipelago setting.",
        imageUrl: "https://raw.githubusercontent.com/brother-of-jared/wdd131/refs/heads/main/project/images/hundred-islands.webp"
      },
      {
        name: "Cebu City",
        location: "Visayas",
        description: `Cebu City, the "Queen City of the South," is a vibrant hub blending rich history, modern city life, and gateway access to world-class nature, offering historic sites like Magellan's Cross, Fort San Pedro, and the Casa Gorordo Museum, alongside incredible island adventures, diving with whale sharks (Oslob/Moalboal), and renowned cuisine like the famous lechon (roast pig). It's known for its cultural heritage as the Philippines' oldest city, its thriving design scene, and as a launchpad to stunning beaches and marine biodiversity.`,
        imageUrl: "https://raw.githubusercontent.com/brother-of-jared/wdd131/refs/heads/main/project/images/cebu.webp"
      },
      {
        name: "Kawasan Falls",
        location: "Visayas",
        description: "Kawasan Falls in Badian, Cebu, is a world-renowned tourist spot famous for its stunning, multi-tiered waterfalls cascading into vibrant turquoise pools, offering both serene natural beauty and thrilling adventure, especially through its popular canyoneering routes involving hiking, cliff jumping, and swimming in lush jungle settings, making it a major draw for nature lovers and adrenaline seekers.",
        imageUrl: "https://raw.githubusercontent.com/brother-of-jared/wdd131/refs/heads/main/project/images/kawasan-falls.webp"
      },
      {
        name: "Siquijor Island",
        location: "Visayas",
        description: `Siquijor is a Philippine island destination famed as a "Healing Paradise" or "Mystic Island," blending stunning natural beauty (waterfalls like Cambugahay, clear beaches, marine sanctuaries) with a unique reputation for traditional witchcraft, folk healing, and mysticism, offering adventures like cliff jumping, snorkeling, and experiencing ancient healers alongside relaxed island vibes and cultural sites like Lazi Church.`,
        imageUrl: "https://raw.githubusercontent.com/brother-of-jared/wdd131/refs/heads/main/project/images/siquijor-island.webp"
      },
      {
        name: "Mt. Apo",
        location: "Mindanao",
        description: "Mount Apo, the Philippines' highest peak, is a premier destination for adventure seekers and nature lovers, offering challenging treks to conquer its summit, diverse biodiversity (home to the Philippine Eagle and waling-waling orchid), stunning volcanic landscapes with hot springs, and deep cultural significance for indigenous Lumad tribes. It's a protected national park known for its epic views, challenging trails (like the Kidapawan and Kapatagan), and its role as a sacred Grandfather Mountain (Apo Sandawa) for local communities.",
        imageUrl: "https://raw.githubusercontent.com/brother-of-jared/wdd131/refs/heads/main/project/images/mount-apo.webp"
      },
      {
        name: "Cagayan de Oro",
        location: "Mindanao",
        description: `Cagayan de Oro (CDO), the "Adventure Capital of the Philippines," is a vibrant tourist destination famous for thrilling whitewater rafting on the Cagayan River, alongside diverse eco-adventures like ziplining at Dahilayan and exploring Mapawa Nature Park, all set within a culturally rich city known as the "City of Golden Friendship" for its warm locals and blend of heritage with modern progress.`,
        imageUrl: "https://raw.githubusercontent.com/brother-of-jared/wdd131/refs/heads/main/project/images/cdo-rafting.webp"
      },
      {
        name: "Camiguin Island",
        location: "Mindanao",
        description: `Camiguin, the "Island Born of Fire," is a Philippine tourist gem known for volcanic landscapes, lush nature, and unique sites like the sunken cemetery, offering adventure with volcanoes (Mt. Hibok-Hibok), relaxation at hot springs (Ardent), and stunning beaches (White Island sandbar). It's a tranquil retreat perfect for nature lovers and divers, featuring waterfalls (Katibawasan Falls), marine sanctuaries (Mantigue Island), and rich marine life, all shaped by volcanic activity.`,
        imageUrl: "https://raw.githubusercontent.com/brother-of-jared/wdd131/refs/heads/main/project/images/camiguin-island.webp"
      }
    ];

  // FILTER LINKS
  const allLink = document.getElementById("all");
  const luzonLink = document.getElementById("luzon");
  const visayasLink = document.getElementById("visayas");
  const mindanaoLink = document.getElementById("mindanao");
  const links = [allLink, luzonLink, visayasLink, mindanaoLink];

  function setActiveLink(filterName) {
    links.forEach(link => link.classList.remove("active"));

    switch(filterName) {
      case "Luzon":
        luzonLink.classList.add("active");
        break;
      case "Visayas":
        visayasLink.classList.add("active");
        break;
      case "Mindanao":
        mindanaoLink.classList.add("active");
        break;
      default:
        allLink.classList.add("active");
    }
  }

  function createDestinationCard(filteredDestinations) {
    const container = document.querySelector("#gallery-destinations");
    if (!container) return;

    container.innerHTML = "";

    filteredDestinations
      .sort((a, b) => a.name.localeCompare(b.name))
      .forEach(destination => {
        const card = document.createElement("div");
        card.classList.add("gd-card");

        const image = document.createElement("img");
        image.src = destination.imageUrl;
        image.alt = destination.name;
        image.loading = "lazy";
        image.classList.add("gd-card-img");

        const textBox = document.createElement("div");
        textBox.classList.add("gd-text-box");

        const title = document.createElement("div");
        title.classList.add("gd-title");
        title.textContent = destination.name;

        const summary = document.createElement("p");
        summary.textContent = destination.description;

        textBox.appendChild(title);
        textBox.appendChild(summary);
        card.appendChild(image);
        card.appendChild(textBox);
        container.appendChild(card);
      });
  }

  function applySavedFilter() {
    const savedFilter = localStorage.getItem("selectedFilter") || "all";
    setActiveLink(savedFilter);

    if (savedFilter === "all") {
      createDestinationCard(destinations);
    } else {
      const filtered = destinations.filter(dest => dest.location === savedFilter);
      createDestinationCard(filtered);
    }
  }

  // LINK CLICK FUNCTION
  allLink.addEventListener("click", () => {
    localStorage.setItem("selectedFilter", "all");
    setActiveLink("all");
    createDestinationCard(destinations);
  });

  luzonLink.addEventListener("click", () => {
    localStorage.setItem("selectedFilter", "Luzon");
    setActiveLink("Luzon");
    createDestinationCard(destinations.filter(d => d.location === "Luzon"));
  });

  visayasLink.addEventListener("click", () => {
    localStorage.setItem("selectedFilter", "Visayas");
    setActiveLink("Visayas");
    createDestinationCard(destinations.filter(d => d.location === "Visayas"));
  });

  mindanaoLink.addEventListener("click", () => {
    localStorage.setItem("selectedFilter", "Mindanao");
    setActiveLink("Mindanao");
    createDestinationCard(destinations.filter(d => d.location === "Mindanao"));
  });

  applySavedFilter();
});
