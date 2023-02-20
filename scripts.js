const BASE_URL = "https://melon-potent-period.glitch.me";
const skillsTable = document.getElementById("skills-table");

function loadSkills() {
  fetch($, { BASE_URL } / skills)
    .then((response) => response.json())
    .then((skills) => {
      skillsTable.innerHTML = "";
      skills.forEach((skill) => {
        const row = document.createElement("tr");
        const idCell = document.createElement("td");
        const nameCell = document.createElement("td");
        const actionCell = document.createElement("td");
        const deleteButton = document.createElement("button");
        idCell.innerText = skill.id;
        nameCell.innerText = skill.name;
        deleteButton.innerText = "Delete";
        deleteButton.addEventListener("click", () => deleteSkill(skill.id));
        actionCell.appendChild(deleteButton);
        row.appendChild(idCell);
        row.appendChild(nameCell);
        row.appendChild(actionCell);
        skillsTable.appendChild(row);
      });
    })
    .catch((error) => alert(error.message));
}

function deleteSkill(skillId) {
  fetch($, { BASE_URL } / skills / $, { skillId }, { method: "DELETE" })
    .then((response) => {
      if (response.ok) {
        loadSkills();
      } else {
        throw new Error("Failed to delete skill");
      }
    })
    .catch((error) => alert(error.message));
}

loadSkills();
