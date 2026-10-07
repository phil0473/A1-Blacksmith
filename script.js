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
