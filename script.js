// List of profiles to be displayed as cards
const profiles = [
  {
    name: "Wade Wilson",
    role: "UI/UX Designer",
    company: "Epic Coders",
    skills: ["UI", "UX", "Photoshop", "Figma", "Sketch", "Illustrator", "InVision"],
    ratePerHour: 55,
    availability: "available",
    age: 32,
    description: "Wade is a 32 year old UI/UX designer, with an impressive portfolio behind him.",
    imageUrl: "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    profileLink: "https://example.com/profiles/wade"
  },
  {
    name: "Jane Smith",
    role: "Frontend Developer",
    company: "Pixel Works",
    skills: ["HTML", "CSS", "JavaScript", "React", "Vue", "Tailwind", "Git"],
    ratePerHour: 48,
    availability: "available",
    age: 28,
    description: "Jane specializes in modern frontend development with clean and responsive designs.",
    imageUrl: "https://images.unsplash.com/photo-1505033575518-a36ea2ef75ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    profileLink: "https://example.com/profiles/jane"
  },
  {
    name: "Michael Chen",
    role: "Backend Developer",
    company: "CodeHub",
    skills: ["Node.js", "Express", "MongoDB", "MySQL", "Docker", "Redis", "AWS"],
    ratePerHour: 60,
    availability: "unavailable",
    age: 35,
    description: "Michael is a backend expert with a passion for scalable systems and cloud infrastructure.",
    imageUrl: "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    profileLink: "https://example.com/profiles/michael"
  },
  {
    name: "Emily Davis",
    role: "Graphic Designer",
    company: "Design Lab",
    skills: ["Photoshop", "Illustrator", "InDesign", "Canva", "Typography", "Branding", "Print Design"],
    ratePerHour: 45,
    availability: "available",
    age: 30,
    description: "Emily brings brands to life with vibrant and strategic visual design.",
    imageUrl: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    profileLink: "https://example.com/profiles/emily"
  },
  {
    name: "Robert Lee",
    role: "Full Stack Developer",
    company: "TechStorm",
    skills: ["React", "Node.js", "GraphQL", "PostgreSQL", "Next.js", "AWS", "Docker"],
    ratePerHour: 70,
    availability: "unavailable",
    age: 33,
    description: "Robert is a full stack pro who builds fast and scalable web applications.",
    imageUrl: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    profileLink: "https://example.com/profiles/robert"
  },
  {
    name: "Sara Ahmed",
    role: "Mobile App Developer",
    company: "Appify",
    skills: ["Flutter", "Dart", "Firebase", "Kotlin", "Swift", "UI Design", "API Integration"],
    ratePerHour: 52,
    availability: "available",
    age: 27,
    description: "Sara creates beautiful and high-performance mobile apps for both iOS and Android.",
    imageUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    profileLink: "https://example.com/profiles/sara"
  },
  {
    name: "Tom Reed",
    role: "DevOps Engineer",
    company: "CloudCore",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Linux", "Ansible"],
    ratePerHour: 65,
    availability: "available",
    age: 36,
    description: "Tom ensures your code runs smoothly and scales effortlessly in the cloud.",
    imageUrl: "https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    profileLink: "https://example.com/profiles/tom"
  },
  {
    name: "Linda Zhao",
    role: "Data Scientist",
    company: "DataForge",
    skills: ["Python", "R", "Pandas", "Scikit-learn", "TensorFlow", "SQL", "Data Visualization"],
    ratePerHour: 75,
    availability: "unavailable",
    age: 29,
    description: "Linda turns raw data into meaningful insights and predictive models.",
    imageUrl: "https://plus.unsplash.com/premium_photo-1673866484792-c5a36a6c025e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    profileLink: "https://example.com/profiles/linda"
  },
  {
    name: "Carlos Rivera",
    role: "SEO Specialist",
    company: "RankRight",
    skills: ["SEO", "Google Analytics", "Ahrefs", "Keyword Research", "On-page SEO", "Link Building", "Content Strategy"],
    ratePerHour: 40,
    availability: "available",
    age: 31,
    description: "Carlos helps businesses get discovered with proven SEO strategies.",
    imageUrl: "https://images.unsplash.com/photo-1457449940276-e8deed18bfff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    profileLink: "https://example.com/profiles/carlos"
  },
  {
    name: "Aisha Khan",
    role: "Content Writer",
    company: "WritePro",
    skills: ["Copywriting", "Blog Writing", "Technical Writing", "SEO Writing", "Content Strategy", "Editing", "Proofreading"],
    ratePerHour: 35,
    availability: "unavailable",
    age: 26,
    description: "Aisha crafts compelling content that connects brands with their audience.",
    imageUrl: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    profileLink: "https://example.com/profiles/aisha"
  }
];

// Renders all profile cards into the DOM
function main() {
  let sum = '';

  // Loop through each profile and generate HTML for it
  profiles.forEach(function(elem, index) {
    sum += `<div class="card">
      <div class="wt"> 
        <div class="top-pal">
          <!-- Availability and rate per hour -->
          <div class="avaibility" data-index="${index}">${elem.availability}</div>
          <div class="price">$${elem.ratePerHour}/hr</div>
        </div>

        <!-- Profile image -->
        <img src="${elem.imageUrl}" alt="${elem.name}" />

        <!-- Basic info -->
        <div class="info">
          <h3>${elem.name}</h3>
          <h4>${elem.role}</h4>
          <div class="comp">
            <i class="ri-community-line"></i>
            <h6>${elem.company}</h6>
          </div>
        </div>

        <!-- Skills will be injected here later -->
        <div class="skills-container" id="${index}"></div>

        <!-- Description -->
        <p>${elem.description}</p>
      </div>
      
      <!-- Profile link button -->
      <button class="btn">View profile</button>
    </div>`;
  });

  // Append all cards to the element with ID "cards"
  document.getElementById("cards").innerHTML = sum;
}

// Adds class based on availability for styling
function checkavaibility() {
  profiles.forEach(function(elem, index) {
    // Get the availability element by index
    const avi = document.querySelector(`.avaibility[data-index="${index}"]`);
    
    // Apply appropriate CSS class based on availability
    if (avi) {
      if (elem.availability === "available" || elem.availability === true) {
        avi.classList.add("avaibility-yes");  // Available class
      } else {
        avi.classList.add("avaibility-not");  // Not available class
      }
    }
  });
}

// Dynamically adds limited skills to each profile card
function skills() {
  profiles.forEach(function (elem, index) {
    const MAX_SKILL = 3;  // Limit number of visible skill tags
    const skillbox = document.querySelector(`.skills-container[id="${index}"]`);
    const containerWidth = document.querySelector('.wt').offsetWidth;

    // Clear previous skill tags (if any)
    skillbox.innerHTML = '';

    // Create a temporary container to measure skill tag widths
    const tempMeasure = document.createElement('div');
    tempMeasure.style.visibility = 'hidden';
    tempMeasure.style.position = 'absolute';
    tempMeasure.style.display = 'flex';
    document.body.appendChild(tempMeasure);

    let displayed = [];
    let usedWidth = 0;

    // Try adding up to MAX_SKILL tags based on width constraints
    for (let i = 0; i < Math.min(elem.skills.length, MAX_SKILL); i++) {
      const tempTag = document.createElement('div');
      tempTag.classList.add('skill-tag');
      tempTag.id = `skill-${i}`;
      tempTag.textContent = elem.skills[i];
      tempMeasure.appendChild(tempTag);

      const tagWidth = tempTag.offsetWidth + 8; // Including margin/padding
      if (usedWidth + tagWidth + 90 > containerWidth) break; // Stop if width limit exceeded

      usedWidth += tagWidth;
      displayed.push(elem.skills[i]);
    }

    // Remove the temporary container after measuring
    document.body.removeChild(tempMeasure);

    // Add displayed skills to actual card
    displayed.forEach((skill, i) => {
      const tag = document.createElement('div');
      tag.classList.add('skill-tag');
      tag.id = `skill-${i}`;
      tag.textContent = skill;
      skillbox.appendChild(tag);
    });

    // Add "+N" tag if not all skills are shown
    const remaining = elem.skills.length - displayed.length;
    if (remaining > 0) {
      const moreTag = document.createElement('div');
      moreTag.classList.add('skill-tag', 'more-tag');
      moreTag.textContent = `+${remaining}`;
      skillbox.appendChild(moreTag);
    }
  });
}

// Initialize the UI
main();
checkavaibility();
skills();
