// Theme Toggle
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;
const icon = toggleBtn.querySelector("i");
const label = toggleBtn.querySelector("span");

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    icon.classList.replace("fa-moon", "fa-sun");
    label.textContent = "Light Mode";
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
    label.textContent = "Dark Mode";
  }
});

// Accordion Logic (Mutual Exclusion)
document.querySelectorAll(".dropdown-item").forEach((item) => {
  item.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    // Close all others first
    document
      .querySelectorAll(".dropdown-item")
      .forEach((el) => el.classList.remove("active"));

    // Toggle current if it wasn't already open
    if (!isActive) item.classList.add("active");
  });
});

// Essentials Data
const wearData = [
  { text: "Dri-fit Shirts", img: "assets/dri-fit.png" },
  { text: "Hoodie", img: "assets/hoodie.png" },
  { text: "Sweatpants", img: "assets/sweatpants.png" },
  { text: "Flat-soled Shoes", img: "assets/shoes.png" },
];

const bringData = [
  { text: "Water Bottle", img: "assets/bottle.png" },
  { text: "Gym Towel", img: "assets/towel.png" },
  { text: "Lifting Belt", img: "assets/belt.png" },
  { text: "Headphones", img: "assets/headphones.png" },
];

let wearIdx = 0;
let bringIdx = 0;

function rotateEssentials() {
  const wearCard = document.getElementById("wear-card");
  const bringCard = document.getElementById("bring-card");

  if (wearCard) wearCard.style.opacity = "0";
  if (bringCard) bringCard.style.opacity = "0";

  setTimeout(() => {
    const wearImg = document.getElementById("wear-img");
    const wearText = document.getElementById("wear-text");
    const bringImg = document.getElementById("bring-img");
    const bringText = document.getElementById("bring-text");

    wearImg.src = wearData[wearIdx].img;
    wearText.textContent = wearData[wearIdx].text;
    bringImg.src = bringData[bringIdx].img;
    bringText.textContent = bringData[bringIdx].text;

    if (wearCard) wearCard.style.opacity = "1";
    if (bringCard) bringCard.style.opacity = "1";

    wearIdx = (wearIdx + 1) % wearData.length;
    bringIdx = (bringIdx + 1) % bringData.length;
  }, 500);
}

// Modals
function initModals() {
  const wearGrid = document.getElementById("wear-grid");
  const bringGrid = document.getElementById("bring-grid");

  wearData.forEach((item) => {
    wearGrid.innerHTML += `
      <div class="modal-item">
        <img src="${item.img}" alt="${item.text}">
        <p>${item.text}</p>
      </div>`;
  });

  bringData.forEach((item) => {
    bringGrid.innerHTML += `
      <div class="modal-item">
        <img src="${item.img}" alt="${item.text}">
        <p>${item.text}</p>
      </div>`;
  });
}

function openModal(id) {
  const modal = document.getElementById(id);
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeModal(id) {
  const modal = document.getElementById(id);
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

initModals();
rotateEssentials();
setInterval(rotateEssentials, 4000);

// Equipment Data
const equipmentData = [
  {
    name: "Barbell",
    img: "assets/barbell.png",
    desc: "The gold standard for building raw strength. Essential for compound lifts like squats, deadlifts, and bench presses.",
    tips: [
      "Always use weight collars/clips",
      "Keep the bar close to your body",
      "Ensure an even grip on both sides",
    ],
  },
  {
    name: "Dumbbells",
    img: "assets/dumbbells.png",
    desc: "Provides a greater range of motion than barbells and helps correct muscle imbalances by working each side independently.",
    tips: [
      "Exhale during the exertion phase",
      "Avoid swinging to create momentum",
      "Start with lighter weights for form",
    ],
  },
  {
    name: "Kettlebells",
    img: "assets/kettlebell.png",
    desc: "Unique weight distribution makes them perfect for explosive functional movements like swings and snatches.",
    tips: [
      "Drive the movement from your hips",
      "Keep your core tight",
      "Do not grip too tightly during swings",
    ],
  },
  {
    name: "Resistance Bands",
    img: "assets/bands.png",
    desc: "Portable tools that provide linear variable resistance, meaning the tension increases as the band stretches.",
    tips: [
      "Check for small tears before use",
      "Secure the band to a stable anchor",
      "Control the return movement",
    ],
  },
  {
    name: "Cable Machine",
    img: "assets/cable.png",
    desc: "Uses a pulley system to provide constant tension throughout the entire exercise, unlike free weights.",
    tips: [
      "Select the appropriate attachment",
      "Ensure the pin is fully inserted",
      "Move in a slow, controlled manner",
    ],
  },
  {
    name: "Leg Press",
    img: "assets/leg-press.png",
    desc: "A heavy-duty machine that allows you to move massive weight with your legs while your back is safely supported.",
    tips: [
      "NEVER lock your knees at the top",
      "Keep your heels flat on the platform",
      "Use the safety handles at all times",
    ],
  },
  {
    name: "Pull-up Bar",
    img: "assets/pullup-bar.png",
    desc: "The ultimate bodyweight tool for developing back, shoulder, and grip strength.",
    tips: [
      "Pull your shoulder blades down first",
      "Avoid kicking your legs (kipping)",
      "Use a spotter or band if needed",
    ],
  },
  {
    name: "Medicine Ball",
    img: "assets/med-ball.png",
    desc: "Weighted balls used for dynamic power training, core work, and rehabilitation exercises.",
    tips: [
      "Use a 'slam ball' for high-impact hits",
      "Keep your chest up during squats",
      "Engage your core to protect your spine",
    ],
  },
  {
    name: "Treadmill",
    img: "assets/treadmill.png",
    desc: "A staple cardio machine that allows you to walk, jog, or run indoors with adjustable speed and incline settings.",
    tips: [
      "Start with a gentle pace to warm up",
      "Use the safety clip to prevent accidents",
      "Maintain good posture and avoid leaning on the handles",
    ],
  },
];

function scrollGallery(distance) {
  const container = document.querySelector(".equipment-scroll-container");
  container.scrollBy({ left: distance, behavior: "smooth" });
}

function initEquipment() {
  const gallery = document.getElementById("equipment-gallery");

  equipmentData.forEach((eq, index) => {
    const card = document.createElement("div");
    card.className = "eq-card";
    card.innerHTML = `
      <img src="${eq.img}" alt="${eq.name}">
      <p>${eq.name}</p>
    `;

    card.addEventListener("click", () => {
      document
        .querySelectorAll(".eq-card")
        .forEach((c) => c.classList.remove("active"));
      card.classList.add("active");
      showEquipmentDetails(index);
    });

    gallery.appendChild(card);
  });
}

function showEquipmentDetails(index) {
  const eq = equipmentData[index];
  document.getElementById("detail-name").textContent = eq.name;
  document.getElementById("detail-desc").textContent = eq.desc;
  document.getElementById("detail-img").src = eq.img;

  const tipsList = document.getElementById("detail-tips");
  tipsList.innerHTML = eq.tips.map((tip) => `<li>${tip}</li>`).join("");
}

// Initialize gallery and set Barbell as default
initEquipment();
showEquipmentDetails(0);
document.querySelectorAll(".eq-card")[0].classList.add("active");
