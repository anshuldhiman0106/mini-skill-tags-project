# 🚀 Mini Skill Tags UI Project

This is my first complete mini web development project where I worked with **both frontend and backend** (JSON data) to dynamically display skill tags in a responsive layout.

---

## 🧠 What I Learned

- How to **fetch data from a backend (JSON)** and use it in the frontend
- **JavaScript DOM manipulation** and dynamically generating UI elements
- Handling layout issues with **CSS Flexbox** and **manual width calculations**
- Creating a responsive tag system with a **`+N more` overflow feature**
- CSS trick: Used `-webkit-line-clamp` for text truncation

---

## 💡 Project Features

- Reads user skill data from JSON
- Measures tag widths before rendering
- Dynamically shows as many tags as will fit in one line
- Adds a **`+N`** tag to indicate hidden overflow tags
- Clean, simple, responsive UI

---

## ⚠️ Challenges I Faced

- Flexbox wrapping elements when I didn’t want it to
- `offsetWidth` didn’t work on elements not in the DOM
- Managing hidden measurement containers for width logic

---

## ✅ How I Solved Them

- Created **temporary hidden DOM elements** to measure width accurately
- Used `classList.add()` and `.id` for clean DOM creation
- Dynamically adjusted visible tags and showed `+N more` for hidden ones

---

## 🛠️ How to Run Locally

```bash
git clone https://github.com/your-username/mini-skill-tags-project.git
cd mini-skill-tags-project
open index.html   # or just double click to open in browser
