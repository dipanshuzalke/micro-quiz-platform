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
      ],
    },
  ],
};
