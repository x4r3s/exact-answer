<p align="center">
  <a href="https://github.com/x4r3s/exact-answer">
    <img src="./banner.png" alt="EXACT ANSWER banner" width="460">
  </a>
</p>

<p align="center">
  <a href="https://github.com/x4r3s/exact-answer">
    <img alt="Repository" src="https://img.shields.io/badge/GitHub-x4r3s%2Fexact--answer-181717?style=for-the-badge&logo=github&logoColor=white">
  </a>
  <a href="https://github.com/x4r3s/exact-answer/blob/main/LICENSE">
    <img alt="License" src="https://img.shields.io/github/license/x4r3s/exact-answer?style=for-the-badge">
  </a>
</p>

<p align="center">
  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
    <img alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
    <img alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  </a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
    <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  </a>
</p>

---

## 📌 About

**EXACT ANSWER** is a lightweight browser-based riddle game where the player must type the **exact answer** for each question.

The project is intentionally built using **vanilla web technologies** to demonstrate clean structure, readable game logic, and responsive layout without frameworks or external libraries.

---

## ✨ Features

- Minimalistic and intuitive user interface
- Fully responsive layout
- No external dependencies
- Clear separation of structure, style, and logic
- Hint system after wrong attempts
- Protection against repeated submit race conditions

---

## 🎮 Gameplay

- The game contains **10 riddles**
- Each riddle gives the player **3 attempts**
- Answers are checked by exact string match (normalized to lowercase)
- After each wrong answer, a contextual hint is shown
- If attempts reach zero, the game reveals the correct answer and moves to the next riddle
- The final screen appears after all riddles are completed

---

## 🛠 Technologies

| Technology | Description |
|-----------|-------------|
| HTML5 | Page structure and semantics |
| CSS3 | Styling and responsive layout |
| JavaScript | Game logic and interactivity |

---

## 🌍 Browser Support

**EXACT ANSWER** works in all modern browsers:

- ✅ Google Chrome (latest)
- ✅ Mozilla Firefox (latest)
- ✅ Microsoft Edge (latest)
- ✅ Safari (latest)

> JavaScript must be enabled.

---

## 📁 Project Structure

```text
exact-answer/
├── index.html      # Main HTML file, game layout and structure
├── style.css       # Stylesheet for layout, colors, and responsiveness
├── script.js       # Game logic and user interaction
├── banner.png      # Project banner image (used in README)
├── github.svg      # GitHub icon used in footer
├── favicon.png     # Browser tab icon
└── LICENSE         # Project license
```

---

## 🚀 Getting Started

You can run the game locally in a few simple steps.

### 1. Clone the repository

```bash
git clone https://github.com/x4r3s/exact-answer.git
```

### 2. Open the project folder

```bash
cd exact-answer
```

### 3. Run the game

Open `index.html` directly in your browser.