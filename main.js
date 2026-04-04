// Factory function (Design Pattern)
function createStudent(name, image, bio, socials) {
  return { name, image, bio, socials };
}

// Sample data (students will add their own)
const students = [
  createStudent("Mark", "https://via.placeholder.com/200", "Web Developer", {
    github: "#",
    facebook: "#",
    linkedin: "#"
  }),
  createStudent("Ana", "https://via.placeholder.com/200", "UI/UX Designer", {
    github: "#",
    facebook: "#",
    linkedin: "#"
  })
];

// Generate social icons
function renderSocials(socials) {
  return `
    ${socials.github ? `<a href="${socials.github}">🐙</a>` : ""}
    ${socials.facebook ? `<a href="${socials.facebook}">📘</a>` : ""}
    ${socials.linkedin ? `<a href="${socials.linkedin}">💼</a>` : ""}
  `;
}

// Student Card Component
function StudentCard(student) {
  return `
    <div class="card">
      <img src="${student.image}" alt="${student.name}" />
      <h3>${student.name}</h3>
      <p>${student.bio}</p>

      <div class="socials">
        ${renderSocials(student.socials)}
      </div>

      <button onclick="viewProfile('${student.name}')">
        View Profile
      </button>
    </div>
  `;
}

// Render students
function renderStudents(keyword = "") {
  const filtered = students.filter(s =>
    s.name.toLowerCase().includes(keyword.toLowerCase())
  );

  document.getElementById("student-list").innerHTML =
    filtered.map(StudentCard).join("");
}

// Search (Observer-like behavior)
document.getElementById("search").addEventListener("input", (e) => {
  renderStudents(e.target.value);
});

// View Profile (placeholder)
function viewProfile(name) {
  alert("Profile page for: " + name);
}

// Initial render
renderStudents();