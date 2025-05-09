// Categories with their respective items
const categories = [
  {
    title: "Campus Resources & Engagement",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>',
    color: "bg-blue-100 border-blue-500",
    textColor: "text-blue-800",
    items: [
      "I can identify student support offices and what each one offers.",
      "I have attended at least one campus event, workshop, or resource fair.",
      "I can use NEIUport and Brightspace/D2L to access my classes and academic info.",
      "I can explain how to use Collegiate Link (or another platform) to find events and student organizations.",
      "I can name at least three campus resources I would recommend to another student.",
      "I know how to find help with financial aid, academic advising, and technology support."
    ]
  },
  {
    title: "Relationships & Community",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
    color: "bg-purple-100 border-purple-500",
    textColor: "text-purple-800",
    items: [
      "I can describe how to connect with my FYE peer mentor.",
      "I have made meaningful connections with at least one classmate, faculty, or staff member.",
      "I feel a sense of belonging in at least one campus space or group.",
      "I can describe what helps me work well in groups and what challenges I've experienced.",
      "I have participated in a class discussion, group project, or campus activity that helped me meet new people."
    ]
  },
  {
    title: "Personal & Professional Goal Setting",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>',
    color: "bg-green-100 border-green-500",
    textColor: "text-green-800",
    items: [
      "I have written at least one short-term academic goal.",
      "I have written at least one long-term personal or professional goal.",
      "I can describe the SMART goal framework.",
      "I can explain how my goals connect to my interests, values, and strengths.",
      "I have taken at least one step toward exploring a future major or career path (like taking a career assessment or researching majors).",
      "I can describe at least one career that interests me and the education it requires."
    ]
  },
  {
    title: "Well-being & Life Skills",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>',
    color: "bg-red-100 border-red-500",
    textColor: "text-red-800",
    items: [
      "I know how to access resources that support my mental and emotional health.",
      "I can name at least one campus resource that promotes physical wellness.",
      "I can describe the different costs that make up my college bill.",
      "I understand options for paying for college, including financial aid, work-study, and scholarships.",
      "I can name at least one strategy I use to manage stress or stay balanced.",
      "I use a method to manage my time and responsibilities each week."
    ]
  },
  {
    title: "Academic Strategies",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>',
    color: "bg-yellow-100 border-yellow-500",
    textColor: "text-yellow-800",
    items: [
      "I apply at least one reading, note-taking, or study strategy regularly.",
      "I manage my time using a planner, calendar, or time-blocking method.",
      "I know how to study effectively for different types of exams and assignments.",
      "I have a weekly schedule that balances classes, study time, and other responsibilities.",
      "I have visited the Learning Success Center, Writing Center, or another academic support office.",
      "I reflect on feedback and use it to improve my academic performance."
    ]
  },
  {
    title: "Academic Tools & Policies",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect></svg>',
    color: "bg-orange-100 border-orange-500",
    textColor: "text-orange-800",
    items: [
      "I can log in to NEIUport, Brightspace/D2L, and Degree Progress.",
      "I have reviewed my course syllabi and know what is expected of me.",
      "I can explain what plagiarism is and how to avoid it.",
      "I know how to use the library website to find academic sources and get help.",
      "I can find key academic policies (like add/drop deadlines, GPA requirements, and academic honesty policies).",
      "I know how to register for classes and prepare for advising appointments."
    ]
  },
  {
    title: "Communication & Critical Thinking",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>',
    color: "bg-indigo-100 border-indigo-500",
    textColor: "text-indigo-800",
    items: [
      "I feel confident sharing my ideas in class discussions or group work.",
      "I can explain what critical thinking means and how I use it in class.",
      "I reflect on my own learning and adjust when I'm not succeeding.",
      "I can write and speak clearly about what I've learned and what I believe.",
      "I use professional and respectful language when communicating with professors and staff.",
      "I can give a short presentation or contribute meaningfully to a group project."
    ]
  }
];

// Load saved checklist data
let checkedItems = JSON.parse(localStorage.getItem('campusChecklist')) || {};
let expandedCategories = {};

// Initialize all categories as expanded
categories.forEach(category => {
  expandedCategories[category.title] = true;
});

// Function to calculate progress for a category
function calculateCategoryProgress(categoryTitle) {
  const category = categories.find(cat => cat.title === categoryTitle);
  if (!category) return 0;
  
  let checkedCount = 0;
  category.items.forEach((_, index) => {
    const key = `${categoryTitle}-${index}`;
    if (checkedItems[key]) checkedCount++;
  });
  
  return Math.round((checkedCount / category.items.length) * 100);
}

// Function to calculate overall progress
function calculateOverallProgress() {
  let totalItems = 0;
  let totalChecked = 0;
  
  categories.forEach(category => {
    totalItems += category.items.length;
    category.items.forEach((_, index) => {
      const key = `${category.title}-${index}`;
      if (checkedItems[key]) totalChecked++;
    });
  });
  
  return Math.round((totalChecked / totalItems) * 100);
}

// Function to update progress displays
function updateProgressDisplays() {
  // Update overall progress
  const overallProgressPercent = calculateOverallProgress();
  document.getElementById('overallProgress').style.width = `${overallProgressPercent}%`;
  document.getElementById('overallProgressText').textContent = `${overallProgressPercent}%`;
  
  // Update category progress bars
  categories.forEach(category => {
    const progressPercent = calculateCategoryProgress(category.title);
    const progressBar = document.querySelector(`#progress-${category.title.replace(/\s+/g, '-').toLowerCase()}`);
    const progressText = document.querySelector(`#progress-text-${category.title.replace(/\s+/g, '-').toLowerCase()}`);
    
    if (progressBar && progressText) {
      progressBar.style.width = `${progressPercent}%`;
      progressText.textContent = `${progressPercent}%`;
    }
  });
}

// Function to handle checkbox changes
function handleCheckboxChange(category, itemIndex) {
  const key = `${category}-${itemIndex}`;
  checkedItems[key] = !checkedItems[key];
  
  // Save to localStorage
  localStorage.setItem('campusChecklist', JSON.stringify(checkedItems));
  
  // Update displays
  updateProgressDisplays();
  
  // Update checkbox appearance
  const checkbox = document.querySelector(`#checkbox-${category.replace(/\s+/g, '-').toLowerCase()}-${itemIndex}`);
  const label = document.querySelector(`#label-${category.replace(/\s+/g, '-').toLowerCase()}-${itemIndex}`);
  
  if (checkbox && label) {
    if (checkedItems[key]) {
      label.classList.add('line-through', 'text-gray-400');
    } else {
      label.classList.remove('line-through', 'text-gray-400');
    }
  }
}

// Function to toggle category expansion
function toggleCategory(categoryTitle) {
  expandedCategories[categoryTitle] = !expandedCategories[categoryTitle];
  
  const content = document.querySelector(`#content-${categoryTitle.replace(/\s+/g, '-').toLowerCase()}`);
  const arrow = document.querySelector(`#arrow-${categoryTitle.replace(/\s+/g, '-').toLowerCase()}`);
  
  if (content && arrow) {
    if (expandedCategories[categoryTitle]) {
      content.style.display = 'block';
      arrow.classList.add('transform', 'rotate-180');
    } else {
      content.style.display = 'none';
      arrow.classList.remove('transform', 'rotate-180');
    }
  }
}

// Function to render the checklist
function renderChecklist() {
  const container = document.getElementById('checklist-container');
  
  categories.forEach(category => {
    // Create category section
    const categoryDiv = document.createElement('div');
    categoryDiv.className = `border-l-4 ${category.color} rounded-md overflow-hidden shadow-sm`;
    
    // Create header
    const header = document.createElement('div');
    header.className = `p-4 ${category.color} flex items-center justify-between cursor-pointer`;
    header.onclick = () => toggleCategory(category.title);
    
    const headerId = `header-${category.title.replace(/\s+/g, '-').toLowerCase()}`;
    header.id = headerId;
    
    // Create title section
    const titleSection = document.createElement('div');
    titleSection.className = 'flex items-center';
    
    const iconSpan = document.createElement('span');
    iconSpan.className = `mr-3 ${category.textColor}`;
    iconSpan.innerHTML = category.icon;
    
    const title = document.createElement('h2');
    title.className = `font-bold text-lg ${category.textColor}`;
    title.textContent = category.title;
    
    titleSection.appendChild(iconSpan);
    titleSection.appendChild(title);
    
    // Create progress section
    const progressSection = document.createElement('div');
    progressSection.className = 'flex items-center';
    
    const progressContainer = document.createElement('div');
    progressContainer.className = 'mr-3';
    
    const progressBackground = document.createElement('div');
    progressBackground.className = 'w-32 bg-white bg-opacity-50 rounded-full h-3';
    
    const progressBar = document.createElement('div');
    const progressId = `progress-${category.title.replace(/\s+/g, '-').toLowerCase()}`;
    progressBar.id = progressId;
    progressBar.className = `${category.textColor.replace('text', 'bg')} h-3 rounded-full`;
    progressBar.style.width = `${calculateCategoryProgress(category.title)}%`;
    
    progressBackground.appendChild(progressBar);
    progressContainer.appendChild(progressBackground);
    
    const progressText = document.createElement('span');
    const progressTextId = `progress-text-${category.title.replace(/\s+/g, '-').toLowerCase()}`;
    progressText.id = progressTextId;
    progressText.className = `text-sm font-bold ${category.textColor}`;
    progressText.textContent = `${calculateCategoryProgress(category.title)}%`;
    
    const arrow = document.createElement('svg');
    const arrowId = `arrow-${category.title.replace(/\s+/g, '-').toLowerCase()}`;
    arrow.id = arrowId;
    arrow.className = `ml-2 h-5 w-5 transition-transform duration-200 ${expandedCategories[category.title] ? 'transform rotate-180' : ''}`;
    arrow.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    arrow.setAttribute('viewBox', '0 0 20 20');
    arrow.setAttribute('fill', 'currentColor');
    
    const arrowPath = document.createElement('path');
    arrowPath.setAttribute('fill-rule', 'evenodd');
    arrowPath.setAttribute('d', 'M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z');
    arrowPath.setAttribute('clip-rule', 'evenodd');
    
    arrow.appendChild(arrowPath);
    
    progressSection.appendChild(progressContainer);
    progressSection.appendChild(progressText);
    progressSection.appendChild(arrow);
    
    header.appendChild(titleSection);
    header.appendChild(progressSection);
    
    // Create content section (checklist items)
    const content = document.createElement('div');
    const contentId = `content-${category.title.replace(/\s+/g, '-').toLowerCase()}`;
    content.id = contentId;
    content.className = 'bg-white p-4';
    content.style.display = expandedCategories[category.title] ? 'block' : 'none';
    
    const itemsList = document.createElement('ul');
    itemsList.className = 'space-y-3';
    
    category.items.forEach((item, itemIndex) => {
      const key = `${category.title}-${itemIndex}`;
      const isChecked = checkedItems[key] || false;
      
      const listItem = document.createElement('li');
      listItem.className = 'flex items-start p-2 hover:bg-gray-50 rounded-md transition-colors';
      
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = isChecked;
      checkbox.className = 'h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 mt-0.5';
      const checkboxId = `checkbox-${category.title.replace(/\s+/g, '-').toLowerCase()}-${itemIndex}`;
      checkbox.id = checkboxId;
      checkbox.onclick = () => handleCheckboxChange(category.title, itemIndex);
      
      const label = document.createElement('span');
      const labelId = `label-${category.title.replace(/\s+/g, '-').toLowerCase()}-${itemIndex}`;
      label.id = labelId;
      label.className = `ml-3 text-gray-700 ${isChecked ? 'line-through text-gray-400' : ''}`;
      label.textContent = item;
      
      listItem.appendChild(checkbox);
      listItem.appendChild(label);
      itemsList.appendChild(listItem);
    });
    
    content.appendChild(itemsList);
    
    categoryDiv.appendChild(header);
    categoryDiv.appendChild(content);
    container.appendChild(categoryDiv);
  });
  
  // Update progress displays
  updateProgressDisplays();
}

// Initialize the page
document.addEventListener('DOMContentLoaded', renderChecklist);
