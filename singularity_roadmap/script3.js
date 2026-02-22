// script3.js - Object handling, destructuring, and spread operator

const user = {
    id: 1,
    name: "Dev",
    skills: ["JS", "Python"],
    // Method inside object to upgrade skills
    upgrade() {
        this.skills.push("AI Tooling");
    }
};

// Destructuring assignment to extract values
const { name, skills } = user;

// Creating a new updated user object with spread operator
const updatedUser = { ...user, location: "Global" };

// Upgrading user skills and logging results
user.upgrade();
console.log("User Skills after upgrade:", user.skills);
console.log("Updated User object:", updatedUser);
