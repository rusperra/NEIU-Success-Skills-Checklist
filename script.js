// Get Lucide icons
const { Bookmark, Book, Users, Target, Heart, GraduationCap, LayoutGrid, MessageSquare } = lucide;

const ChecklistApp = () => {
  // Categories with their respective items
  const categories = [
    {
      title: "Campus Resources & Engagement",
      icon: React.createElement(Bookmark, { size: 24 }),
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
      icon: React.createElement(Users, { size: 24 }),
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
      icon: React.createElement(Target, { size: 24 }),
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
      icon: React.createElement(Heart, { size: 24 }),
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
      icon: React.createElement(Book, { size: 24 }),
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
      icon: React.createElement(LayoutGrid, { size: 24 }),
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
      icon: React.createElement(MessageSquare, { size: 24 }),
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

  // Initialize state for checked items
  const [checkedItems, React.useState({})] = React.useState({});
  const [expandedCategories, setExpandedCategories] = React.useState(
    categories.reduce((acc, category) => {
      acc[category.title] = true;
      return acc;
    }, {})
  );

  // Function to handle checkbox changes
  const handleCheckboxChange = (category, itemIndex) => {
    const key = `${category}-${itemIndex}`;
    setCheckedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
    
    // Save to localStorage
    const updatedItems = {...checkedItems, [key]: !checkedItems[key]};
    localStorage.setItem('campusChecklist', JSON.stringify(updatedItems));
  };

  // Function to toggle category expansion
  const toggleCategory = (categoryTitle) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryTitle]: !prev[categoryTitle]
    }));
  };

  // Load saved data from localStorage when component mounts
  React.useEffect(() => {
    const savedData = localStorage.getItem('campusChecklist');
    if (savedData) {
      setCheckedItems(JSON.parse(savedData));
    }
  }, []);

  // Calculate progress for each category
  const calculateCategoryProgress = (categoryTitle) => {
    const category = categories.find(cat => cat.title === categoryTitle);
    if (!category) return 0;
    
    let checkedCount = 0;
    category.items.forEach((_, index) => {
      const key = `${categoryTitle}-${index}`;
      if (checkedItems[key]) checkedCount++;
    });
    
    return Math.round((checkedCount / category.items.length) * 100);
  };

  // Calculate overall progress
  const calculateOverallProgress = () => {
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
  };

  return (
    React.createElement("div", { className: "bg-white shadow-lg rounded-lg p-6 max-w-4xl mx-auto" },
      React.createElement("div", { className: "flex items-center justify-between mb-8" },
        React.createElement("h1", { className: "text-3xl font-bold text-gray-800" }, "Campus Success Checklist"),
        React.createElement("div", { className: "flex items-center" },
          React.createElement(GraduationCap, { size: 32, className: "text-indigo-600 mr-2" }),
          React.createElement("div", {},
            React.createElement("div", { className: "text-sm font-medium text-gray-500" }, "Overall Progress"),
            React.createElement("div", { className: "flex items-center" },
              React.createElement("div", { className: "w-64 bg-gray-200 rounded-full h-4 mr-2" },
                React.createElement("div", { 
                  className: "bg-indigo-600 h-4 rounded-full", 
                  style: { width: `${calculateOverallProgress()}%` }
                })
              ),
              React.createElement("span", { className: "text-lg font-bold text-gray-700" }, `${calculateOverallProgress()}%`)
            )
          )
        )
      ),
      
      React.createElement("div", { className: "space-y-6" },
        categories.map((category, catIndex) => (
          React.createElement("div", { 
            key: catIndex, 
            className: `border-l-4 ${category.color} rounded-md overflow-hidden shadow-sm`
          },
            React.createElement("div", { 
              className: `p-4 ${category.color} flex items-center justify-between cursor-pointer`,
              onClick: () => toggleCategory(category.title)
            },
              React.createElement("div", { className: "flex items-center" },
                React.createElement("span", { className: `mr-3 ${category.textColor}` }, category.icon),
                React.createElement("h2", { className: `font-bold text-lg ${category.textColor}` }, category.title)
              ),
              React.createElement("div", { className: "flex items-center" },
                React.createElement("div", { className: "mr-3" },
                  React.createElement("div", { className: "w-32 bg-white bg-opacity-50 rounded-full h-3" },
                    React.createElement("div", { 
                      className: `${category.textColor.replace('text', 'bg')} h-3 rounded-full`,
                      style: { width: `${calculateCategoryProgress(category.title)}%` }
                    })
                  )
                ),
                React.createElement("span", { className: `text-sm font-bold ${category.textColor}` },
                  `${calculateCategoryProgress(category.title)}%`
                ),
                React.createElement("svg", { 
                  className: `ml-2 h-5 w-5 transition-transform duration-200 ${expandedCategories[category.title] ? 'transform rotate-180' : ''}`, 
                  xmlns: "http://www.w3.org/2000/svg", 
                  viewBox: "0 0 20 20", 
                  fill: "currentColor"
                },
                  React.createElement("path", { 
                    fillRule: "evenodd", 
                    d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z", 
                    clipRule: "evenodd" 
                  })
                )
              )
            ),
            
            expandedCategories[category.title] && 
              React.createElement("div", { className: "bg-white p-4" },
                React.createElement("ul", { className: "space-y-3" },
                  category.items.map((item, itemIndex) => (
                    React.createElement("li", { 
                      key: itemIndex, 
                      className: "flex items-start p-2 hover:bg-gray-50 rounded-md transition-colors"
                    },
                      React.createElement("input", {
                        type: "checkbox",
                        checked: !!checkedItems[`${category.title}-${itemIndex}`],
                        onChange: () => handleCheckboxChange(category.title, itemIndex),
                        className: "h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 mt-0.5"
                      }),
                      React.createElement("span", { 
                        className: `ml-3 text-gray-700 ${checkedItems[`${category.title}-${itemIndex}`] ? 'line-through text-gray-400' : ''}`
                      }, item)
                    )
                  ))
                )
              )
          ))
        )
      ),
      
      React.createElement("div", { className: "mt-8 text-center text-sm text-gray-500" },
        "Click on a category header to expand or collapse it. Check off items as you complete them! Your progress will be saved in your browser."
      )
    )
  );
};

ReactDOM.render(
  React.createElement(ChecklistApp, null),
  document.getElementById('root')
);
