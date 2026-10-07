// Assignment 1: Blacksmith — The Tiny Forge

// PLAN: Write a short pseudocode plan for making a sword here.
// 1. Check if the forge heat is at 30 or higher.
// 2. If yes: decrease heat by 30, increment sword count by 1, and print a success message.
// 3. If no: keep heat and sword count as they are, and print a warning message.
// 4. Update the page to show the current numbers, status text, image, and style.

// 1. selectin the forge, heat, sword count, status, image, and message elements.
const forgeElement = document.getElementById("forge");
const heatValueElement = document.getElementById("heat-value");
const swordCountElement = document.getElementById("sword-count");
const forgeStatusElement = document.getElementById("forge-status");
const forgeImageElement = document.getElementById("forge-image");
const actionMessageElement = document.getElementById("action-message");

// 2. creating the two state variables: heat and swords made.
let forgeHeat = 20;
let swordsMade = 0;

// 3. writes getForgeStatus(heatValue). Return the correct status string.
function getForgeStatus(heatValue) {
  if (heatValue < 30) {
    return "Too cold";
  } else if (heatValue < 70) {
    return "Ready to forge";
  } else {
    return "Roaring fire";
  }
}

// 4. write updateForge(). update text and apply one status class.
//    Change the supplied forge image src and alt to match the heat.
//    Keep the most recent action message visible.
function updateForge() {
  heatValueElement.textContent = forgeHeat;
  swordCountElement.textContent = swordsMade;

  const status = getForgeStatus(forgeHeat);
  forgeStatusElement.textContent = status;

  forgeElement.classList.remove("is-cold", "is-ready", "is-roaring");

  if (status === "Too cold") {
    forgeElement.classList.add("is-cold");
    forgeImageElement.src = "assets/forge-cold.svg";
    forgeImageElement.alt = "A stone forge with dark coals and no flames";
  } else if (status === "Ready to forge") {
    forgeElement.classList.add("is-ready");
    forgeImageElement.src = "assets/forge-ready.svg";
    forgeImageElement.alt = "A stone forge with a small orange fire";
  } else if (status === "Roaring fire") {
    forgeElement.classList.add("is-roaring");
    forgeImageElement.src = "assets/forge-roaring.svg";
    forgeImageElement.alt = "A stone forge with tall bright flames and sparks";
  }
}