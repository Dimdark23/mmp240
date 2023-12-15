const menuButton = document.getElementById("menu-button");
const drawerMenu = document.getElementById("drawer-menu");
const cancelButton = document.getElementById("cancel-button");

function closeDrawerMenu() {
  drawerMenu.classList.remove("showNav", "open");
  drawerMenu.classList.add("hideNav");
}

menuButton.addEventListener("click", () => {
  drawerMenu.classList.remove("hideNav", "hidden");
  drawerMenu.classList.add("showNav", "open");
});

cancelButton.addEventListener("click", () => {
  closeDrawerMenu();
});

// Add click event listeners to each menu item
const menuItems = document.querySelectorAll(".menu-content a");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    closeDrawerMenu();
  });
});

const availablePrograms = [
  {
    college: "Borough of Manhattan Community College",
    borough: "Manhattan",
    discipline: "Animation and Motion Graphics",
    degree: "Associate",
    Image: "./Images/Animation&Motion.jpg",
  },
  {
    college: "Borough of Manhattan Community College",
    borough: "Manhattan",
    discipline: "Multimedia Programming and Design",
    degree: "Associate",
    Image: "./Images/MultimediaProgramming.jpg",
  },
  {
    college: "Bronx Community College",
    borough: "Bronx",
    discipline: "Digital Design",
    degree: "Associate",
    Image: "./Images/DigitalDesign.jpg",
  },
  {
    college: "Hostos Community College",
    borough: "Bronx",
    discipline: "Digital Design & Animation",
    degree: "Associate",
    Image: "./Images/Uni1.jpg",
  },
  {
    college: "Hostos Community College",
    borough: "Bronx",
    discipline: "Game Design",
    degree: "Associate",
    Image: "./Images/Uni1.jpg",
  },
  {
    college: "Kingsborough Community College",
    borough: "Brooklyn",
    discipline: "Animation",
    degree: "Associate",
    Image: "./Images/Kings.jpg",
  },
  {
    college: "Kingsborough Community College",
    borough: "Brooklyn",
    discipline: "Graphic Design & Illustration",
    degree: "Associate",
    Image: "./Images/Kings.jpg",
  },
  {
    college: "Kingsborough Community College",
    borough: "Brooklyn",
    discipline: "UX Design",
    degree: "Associate",
    Image: "./Images/Kings.jpg",
  },
  {
    college: "LaGuardia Community College",
    borough: "Queens",
    discipline: "Industrial Design",
    degree: "Associate",
    Image: "./Images/Laguardia.jpg",
  },
  {
    college: "LaGuardia Community College",
    borough: "Queens",
    discipline: "New Media Technology",
    degree: "Associate",
    Image: "./Images/Laguardia.jpg",
  },
  {
    college: "Queensborough Community College",
    borough: "Queens",
    discipline: "Digital Art and Design",
    degree: "Associate",
    Image: "./Images/Uni2.jpg",
  },
  {
    college: "New York City College Of Technology",
    borough: "Brooklyn",
    discipline: "Industrial Design Technology",
    degree: "Associate",
    Image: "./Images/Uni3.jpg",
  },

  {
    college: "New York City College Of Technology",
    borough: "Brooklyn",
    discipline: "Communication Design",
    degree: "Associate",
    Image: "./Images/Uni3.jpg",
  },
  {
    college: "New York City College Of Technology",
    borough: "Brooklyn",
    discipline: "Communication Design",
    degree: "Bachelor",
    Image: "./Images/Uni3.jpg",
  },
  {
    college: "Queens College",
    borough: "Queens",
    discipline: "Design",
    degree: "Bachelor",
    Image: "./Images/Queens.jpg",
  },
  {
    college: "The City College of New York",
    borough: "Manhattan",
    discipline: "Electronic Design and Multimedia",
    degree: "Bachelor",
    Image: "./Images/Newyork.jpg",
  },
  {
    college: "York College",
    borough: "Queens",
    discipline: "Communications Technology",
    degree: "Bachelor",
    Image: "./Images/York.jpg",
  },
  {
    college: "Lehman College",
    borough: "Bronx",
    discipline: "Computer Graphics and Imaging",
    degree: "Bachelor",
    Image: "./Images/Lehman.jpg",
  },
  {
    college: "Baruch College",
    borough: "Manhattan",
    discipline: "Graphic Communication",
    degree: "Bachelor",
    Image: "./Images/Brauch.jpg",
  },
];

const disciplineSelect = document.getElementById("discipline");
const degreeSelect = document.getElementById("degree");
const boroughSelect = document.getElementById("borough");

const cardsContainer = document.getElementById("cards");
const announcementContainer = document.getElementById("announcement");
const newsContainer = document.getElementById("news");
// Add event listeners to each select element
disciplineSelect.addEventListener("change", updatePrograms);
degreeSelect.addEventListener("change", updatePrograms);
boroughSelect.addEventListener("change", updatePrograms);

function updatePrograms() {
  // Get selected values from the dropdowns
  const selectedDiscipline = disciplineSelect.value;
  const selectedDegree = degreeSelect.value;
  const selectedBorough = boroughSelect.value;

  // Filter programs based on selected options
  const filteredPrograms = availablePrograms.filter((program) => {
    return (
      (selectedDiscipline === "Discipline" ||
        program.discipline === selectedDiscipline) &&
      (selectedDegree === "Degree" || program.degree === selectedDegree) &&
      (selectedBorough === "Borough" || program.borough === selectedBorough)
    );
  });

  // Display the filtered programs
  displayPrograms(filteredPrograms);
}

function displayPrograms(programs) {
  // Clear existing cards
  cardsContainer.innerHTML = "";
  // Clearing the announcement and news section
  announcementContainer.innerHTML = "";
  newsContainer.innerHTML = "";

  // Create and append cards for each program
  programs.forEach((program) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    const image = document.createElement("img");
    image.src = program.Image;
    image.alt = "";
    cardHeader.appendChild(image);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    const title = document.createElement("h3");
    title.textContent = program.discipline;
    const borough = document.createElement("p");
    borough.textContent = `Borough of ${program.borough}`;
    const college = document.createElement("p");
    college.textContent = program.college;
    const button = document.createElement("button");
    button.textContent = "Primary";

    cardBody.appendChild(title);
    cardBody.appendChild(borough);
    cardBody.appendChild(college);
    cardBody.appendChild(button);

    card.appendChild(cardHeader);
    card.appendChild(cardBody);

    cardsContainer.appendChild(card);
  });
}
