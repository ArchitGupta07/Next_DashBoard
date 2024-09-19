const examData = {
  exam: {
    title: "Sample Multiple Choice Exam",
    description: "This is a sample exam to demonstrate the JSON structure for multiple-choice questions.",
    duration: "60 minutes",
    questions: [
      {
        id: 1,
        type: "multiple_choice",
        question_text: "What is the capital of France?",
        options: [
          { id: "a", text: "Paris" },
          { id: "b", text: "London" },
          { id: "c", text: "Rome" },
          { id: "d", text: "Berlin" }
        ],
        correct_answer: "a"
      },
      {
        id: 2,
        type: "multiple_choice",
        question_text: "Which planet is known as the Red Planet?",
        options: [
          { id: "a", text: "Earth" },
          { id: "b", text: "Mars" },
          { id: "c", text: "Jupiter" },
          { id: "d", text: "Saturn" }
        ],
        correct_answer: "b"
      },
      {
        id: 3,
        type: "multiple_choice",
        question_text: "What is the largest ocean on Earth?",
        options: [
          { id: "a", text: "Atlantic Ocean" },
          { id: "b", text: "Indian Ocean" },
          { id: "c", text: "Arctic Ocean" },
          { id: "d", text: "Pacific Ocean" }
        ],
        correct_answer: "d"
      },
      {
        id: 4,
        type: "multiple_choice",
        question_text: "Who wrote 'To Kill a Mockingbird'?",
        options: [
          { id: "a", text: "Harper Lee" },
          { id: "b", text: "Mark Twain" },
          { id: "c", text: "Ernest Hemingway" },
          { id: "d", text: "F. Scott Fitzgerald" }
        ],
        correct_answer: "a"
      },
      {
        id: 5,
        type: "multiple_choice",
        question_text: "What is the chemical symbol for gold?",
        options: [
          { id: "a", text: "Ag" },
          { id: "b", text: "Au" },
          { id: "c", text: "Pb" },
          { id: "d", text: "Fe" }
        ],
        correct_answer: "b"
      }
    ]
  }
};

export default examData;
