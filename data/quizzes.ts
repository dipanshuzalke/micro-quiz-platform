export const categories = [
  { id: 'math', name: 'Mathematics', icon: '/images/math.png' },
  { id: 'science', name: 'Science', icon: '/images/science.png' },
  { id: 'history', name: 'History', icon: '/images/history.png' },
  { id: 'programming', name: 'Programming', icon: '/images/programming.png' },
];

export const quizzes = {
  math: [
    {
      id: 'math-1',
      title: 'Basic Algebra',
      questions: [
        {
          question: 'What is 2 + 2?',
          options: ['3', '4', '5', '6'],
          answer: '4',
        },
        {
          question: 'What is 5 x 3?',
          options: ['15', '20', '10', '8'],
          answer: '15',
        },
        {
          question: 'Solve for x: 2x + 5 = 13',
          options: ['x = 3', 'x = 4', 'x = 5', 'x = 6'],
          answer: 'x = 4',
        },
        {
          question: 'What is the square root of 16?',
          options: ['2', '4', '8', '16'],
          answer: '4',
        },
        {
          question: 'What is 3² + 4²?',
          options: ['7', '12', '25', '49'],
          answer: '25',
        },
      ],
    },
    {
      id: 'math-2',
      title: 'Geometry Fundamentals',
      questions: [
        {
          question: 'What is the area of a circle with radius 5?',
          options: ['25π', '50π', '75π', '100π'],
          answer: '25π',
        },
        {
          question: 'How many sides does a hexagon have?',
          options: ['5', '6', '7', '8'],
          answer: '6',
        },
        {
          question: 'What is the sum of angles in a triangle?',
          options: ['90°', '180°', '270°', '360°'],
          answer: '180°',
        },
        {
          question: 'What is the perimeter of a square with side length 6?',
          options: ['12', '18', '24', '36'],
          answer: '24',
        },
        {
          question: 'What is the volume of a cube with side length 3?',
          options: ['9', '18', '27', '36'],
          answer: '27',
        },
      ],
    },
    {
      id: 'math-3',
      title: 'Advanced Calculus',
      questions: [
        {
          question: 'What is the derivative of x²?',
          options: ['x', '2x', 'x²', '2x²'],
          answer: '2x',
        },
        {
          question: 'What is the integral of 2x?',
          options: ['x', 'x²', 'x² + C', '2x² + C'],
          answer: 'x² + C',
        },
        {
          question: 'What is the limit of 1/x as x approaches infinity?',
          options: ['0', '1', '∞', 'undefined'],
          answer: '0',
        },
        {
          question: 'What is the derivative of sin(x)?',
          options: ['cos(x)', '-cos(x)', 'sin(x)', '-sin(x)'],
          answer: 'cos(x)',
        },
        {
          question: 'What is the derivative of e^x?',
          options: ['e^x', 'xe^x', 'e^(x-1)', 'ln(x)'],
          answer: 'e^x',
        },
      ],
    },
    {
      id: 'math-4',
      title: 'Statistics & Probability',
      questions: [
        {
          question: 'What is the mean of numbers: 2, 4, 6, 8, 10?',
          options: ['5', '6', '7', '8'],
          answer: '6',
        },
        {
          question: 'What is the probability of rolling a 6 on a fair die?',
          options: ['1/3', '1/4', '1/5', '1/6'],
          answer: '1/6',
        },
        {
          question: 'What is the median of: 1, 3, 5, 7, 9?',
          options: ['3', '5', '7', '9'],
          answer: '5',
        },
        {
          question: 'What is the standard deviation of: 2, 4, 4, 4, 6?',
          options: ['0', '1', '2', '4'],
          answer: '1',
        },
        {
          question: 'What is the probability of flipping heads twice in a row?',
          options: ['1/2', '1/3', '1/4', '1/8'],
          answer: '1/4',
        },
      ],
    },
  ],
  science: [
    {
      id: 'science-1',
      title: 'Basic Physics',
      questions: [
        {
          question: 'What is the speed of light?',
          options: ['3x10^8 m/s', '3x10^6 m/s', '1x10^8 m/s', 'None'],
          answer: '3x10^8 m/s',
        },
        {
          question: 'What is Newton\'s First Law about?',
          options: ['Gravity', 'Inertia', 'Action-Reaction', 'Energy'],
          answer: 'Inertia',
        },
        {
          question: 'What is the SI unit of force?',
          options: ['Joule', 'Watt', 'Newton', 'Pascal'],
          answer: 'Newton',
        },
        {
          question: 'What is the formula for kinetic energy?',
          options: ['mgh', '½mv²', 'Fd', 'Pt'],
          answer: '½mv²',
        },
        {
          question: 'What is the law of conservation of energy?',
          options: ['Energy can be created', 'Energy can be destroyed', 'Energy cannot be created or destroyed', 'Energy always increases'],
          answer: 'Energy cannot be created or destroyed',
        },
      ],
    },
    {
      id: 'science-2',
      title: 'Chemistry Essentials',
      questions: [
        {
          question: 'What is the chemical symbol for gold?',
          options: ['Ag', 'Au', 'Fe', 'Cu'],
          answer: 'Au',
        },
        {
          question: 'What is the atomic number of carbon?',
          options: ['4', '6', '8', '12'],
          answer: '6',
        },
        {
          question: 'What is the chemical formula for water?',
          options: ['H2O', 'CO2', 'O2', 'N2'],
          answer: 'H2O',
        },
        {
          question: 'What type of bond is formed between sodium and chlorine in NaCl?',
          options: ['Covalent', 'Ionic', 'Metallic', 'Hydrogen'],
          answer: 'Ionic',
        },
        {
          question: 'What is the pH of a neutral solution?',
          options: ['0', '7', '14', '10'],
          answer: '7',
        },
      ],
    },
    {
      id: 'science-3',
      title: 'Biology Fundamentals',
      questions: [
        {
          question: 'What is the powerhouse of the cell?',
          options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Golgi apparatus'],
          answer: 'Mitochondria',
        },
        {
          question: 'What is the process by which plants make food?',
          options: ['Respiration', 'Photosynthesis', 'Digestion', 'Fermentation'],
          answer: 'Photosynthesis',
        },
        {
          question: 'What are the building blocks of proteins?',
          options: ['Nucleotides', 'Amino acids', 'Fatty acids', 'Monosaccharides'],
          answer: 'Amino acids',
        },
        {
          question: 'What is the largest organ in the human body?',
          options: ['Heart', 'Brain', 'Liver', 'Skin'],
          answer: 'Skin',
        },
        {
          question: 'What type of cell division produces gametes?',
          options: ['Mitosis', 'Meiosis', 'Binary fission', 'Budding'],
          answer: 'Meiosis',
        },
      ],
    },
    {
      id: 'science-4',
      title: 'Astronomy & Space',
      questions: [
        {
          question: 'What is the closest planet to the Sun?',
          options: ['Venus', 'Earth', 'Mercury', 'Mars'],
          answer: 'Mercury',
        },
        {
          question: 'What is the largest planet in our solar system?',
          options: ['Saturn', 'Jupiter', 'Neptune', 'Uranus'],
          answer: 'Jupiter',
        },
        {
          question: 'What is a light year?',
          options: ['Time unit', 'Distance unit', 'Speed unit', 'Energy unit'],
          answer: 'Distance unit',
        },
        {
          question: 'What is the name of our galaxy?',
          options: ['Andromeda', 'Milky Way', 'Triangulum', 'Sombrero'],
          answer: 'Milky Way',
        },
        {
          question: 'What is a black hole?',
          options: ['A dark star', 'A region of spacetime', 'A planet', 'A galaxy'],
          answer: 'A region of spacetime',
        },
      ],
    },
  ],
  history: [
    {
      id: 'history-1',
      title: 'Ancient Civilizations',
      questions: [
        {
          question: 'Which ancient civilization built the pyramids?',
          options: ['Greeks', 'Romans', 'Egyptians', 'Mesopotamians'],
          answer: 'Egyptians',
        },
        {
          question: 'What was the capital of the Roman Empire?',
          options: ['Athens', 'Rome', 'Constantinople', 'Alexandria'],
          answer: 'Rome',
        },
        {
          question: 'Who was the first emperor of Rome?',
          options: ['Julius Caesar', 'Augustus', 'Nero', 'Constantine'],
          answer: 'Augustus',
        },
        {
          question: 'What ancient wonder was located in Alexandria?',
          options: ['Colossus of Rhodes', 'Lighthouse', 'Hanging Gardens', 'Temple of Artemis'],
          answer: 'Lighthouse',
        },
        {
          question: 'Which ancient civilization developed the first writing system?',
          options: ['Egyptians', 'Sumerians', 'Chinese', 'Indus Valley'],
          answer: 'Sumerians',
        },
      ],
    },
    {
      id: 'history-2',
      title: 'World Wars',
      questions: [
        {
          question: 'In which year did World War I begin?',
          options: ['1914', '1915', '1916', '1917'],
          answer: '1914',
        },
        {
          question: 'Which country dropped atomic bombs on Japan in 1945?',
          options: ['Germany', 'Soviet Union', 'United States', 'United Kingdom'],
          answer: 'United States',
        },
        {
          question: 'Who was the leader of Nazi Germany during WWII?',
          options: ['Mussolini', 'Hitler', 'Stalin', 'Churchill'],
          answer: 'Hitler',
        },
        {
          question: 'What was the name of the Allied invasion of Normandy?',
          options: ['Operation Overlord', 'D-Day', 'Battle of the Bulge', 'Operation Market Garden'],
          answer: 'D-Day',
        },
        {
          question: 'In which year did World War II end?',
          options: ['1943', '1944', '1945', '1946'],
          answer: '1945',
        },
      ],
    },
    {
      id: 'history-3',
      title: 'American History',
      questions: [
        {
          question: 'In which year did the United States declare independence?',
          options: ['1775', '1776', '1777', '1783'],
          answer: '1776',
        },
        {
          question: 'Who was the first President of the United States?',
          options: ['John Adams', 'Thomas Jefferson', 'George Washington', 'Benjamin Franklin'],
          answer: 'George Washington',
        },
        {
          question: 'What was the name of the ship that brought the Pilgrims to America?',
          options: ['Mayflower', 'Santa Maria', 'Nina', 'Pinta'],
          answer: 'Mayflower',
        },
        {
          question: 'Which war was fought between the North and South in the US?',
          options: ['Revolutionary War', 'Civil War', 'Spanish-American War', 'Mexican-American War'],
          answer: 'Civil War',
        },
        {
          question: 'Who wrote the Declaration of Independence?',
          options: ['George Washington', 'Thomas Jefferson', 'John Adams', 'Benjamin Franklin'],
          answer: 'Thomas Jefferson',
        },
      ],
    },
    {
      id: 'history-4',
      title: 'Modern World History',
      questions: [
        {
          question: 'When did the Berlin Wall fall?',
          options: ['1987', '1989', '1991', '1993'],
          answer: '1989',
        },
        {
          question: 'Who was the first person to walk on the moon?',
          options: ['Neil Armstrong', 'Buzz Aldrin', 'Yuri Gagarin', 'Alan Shepard'],
          answer: 'Neil Armstrong',
        },
        {
          question: 'In which year did the Soviet Union collapse?',
          options: ['1989', '1990', '1991', '1992'],
          answer: '1991',
        },
        {
          question: 'What was the name of the first artificial satellite?',
          options: ['Explorer 1', 'Sputnik 1', 'Vanguard 1', 'Telstar 1'],
          answer: 'Sputnik 1',
        },
        {
          question: 'Which event marked the beginning of the 21st century?',
          options: ['Y2K', '9/11 attacks', 'Dot-com bubble', 'Great Recession'],
          answer: 'Y2K',
        },
      ],
    },
  ],
  programming: [
    {
      id: 'programming-1',
      title: 'JavaScript Fundamentals',
      questions: [
        {
          question: 'What is the correct way to declare a variable in JavaScript?',
          options: ['var x = 5;', 'variable x = 5;', 'v x = 5;', 'declare x = 5;'],
          answer: 'var x = 5;',
        },
        {
          question: 'Which method is used to add an element to the end of an array?',
          options: ['push()', 'pop()', 'shift()', 'unshift()'],
          answer: 'push()',
        },
        {
          question: 'What is the result of 2 + "2" in JavaScript?',
          options: ['4', '22', 'NaN', 'Error'],
          answer: '22',
        },
        {
          question: 'How do you create a function in JavaScript?',
          options: ['function myFunction()', 'create myFunction()', 'def myFunction()', 'func myFunction()'],
          answer: 'function myFunction()',
        },
        {
          question: 'What is the correct way to write an if statement?',
          options: ['if (x == 5)', 'if x == 5', 'if x = 5', 'if (x = 5)'],
          answer: 'if (x == 5)',
        },
      ],
    },
    {
      id: 'programming-2',
      title: 'Python Basics',
      questions: [
        {
          question: 'What is the correct way to create a variable in Python?',
          options: ['var x = 5', 'x = 5', 'variable x = 5', 'declare x = 5'],
          answer: 'x = 5',
        },
        {
          question: 'Which method is used to add an element to a list?',
          options: ['add()', 'append()', 'insert()', 'push()'],
          answer: 'append()',
        },
        {
          question: 'What is the result of 3 ** 2 in Python?',
          options: ['6', '9', '5', 'Error'],
          answer: '9',
        },
        {
          question: 'How do you create a function in Python?',
          options: ['function myFunction():', 'def myFunction():', 'create myFunction():', 'func myFunction():'],
          answer: 'def myFunction():',
        },
        {
          question: 'What is the correct way to write a for loop?',
          options: ['for i in range(5):', 'for (i = 0; i < 5; i++)', 'for i = 0 to 5', 'loop i in 5'],
          answer: 'for i in range(5):',
        },
      ],
    },
    {
      id: 'programming-3',
      title: 'Web Development',
      questions: [
        {
          question: 'What does HTML stand for?',
          options: ['Hyper Text Markup Language', 'High Tech Modern Language', 'Home Tool Markup Language', 'Hyperlink and Text Markup Language'],
          answer: 'Hyper Text Markup Language',
        },
        {
          question: 'What does CSS stand for?',
          options: ['Computer Style Sheets', 'Creative Style Sheets', 'Cascading Style Sheets', 'Colorful Style Sheets'],
          answer: 'Cascading Style Sheets',
        },
        {
          question: 'Which tag is used to create a hyperlink?',
          options: ['<link>', '<a>', '<href>', '<url>'],
          answer: '<a>',
        },
        {
          question: 'What is the correct way to include CSS in HTML?',
          options: ['<style>', '<css>', '<stylesheet>', '<link>'],
          answer: '<link>',
        },
        {
          question: 'Which property is used to change the background color?',
          options: ['color', 'background-color', 'bgcolor', 'background'],
          answer: 'background-color',
        },
      ],
    },
    {
      id: 'programming-4',
      title: 'Data Structures & Algorithms',
      questions: [
        {
          question: 'What is the time complexity of accessing an element in an array?',
          options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
          answer: 'O(1)',
        },
        {
          question: 'Which data structure follows LIFO principle?',
          options: ['Queue', 'Stack', 'Tree', 'Graph'],
          answer: 'Stack',
        },
        {
          question: 'What is the time complexity of binary search?',
          options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
          answer: 'O(log n)',
        },
        {
          question: 'Which sorting algorithm has the best average-case performance?',
          options: ['Bubble Sort', 'Quick Sort', 'Selection Sort', 'Insertion Sort'],
          answer: 'Quick Sort',
        },
        {
          question: 'What is a binary tree?',
          options: ['A tree with 2 nodes', 'A tree where each node has at most 2 children', 'A tree with binary data', 'A tree with 2 levels'],
          answer: 'A tree where each node has at most 2 children',
        },
      ],
    },
  ],
};

