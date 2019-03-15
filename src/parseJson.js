const quiz = [
  {
    id: "1",
    question: "Столица Украины?",
    rightAnswerId: "1",
    answers: [
      {text: "Киев", id: "1"},
      {text: "Москва", id: "2"},
      {text: "Минск", id: "3"},
      {text: "Вашингтон", id: "4"}
    ],
    valueUserAnswer: null,
    userAnswerId: null
  },
  {
    id: "2",
    question: "Столица России?",
    rightAnswerId: "2",
    answers: [
      {text: "Киев", id: "1"},
      {text: "Москва", id: "2"},
      {text: "Минск", id: "3"},
      {text: "Вашингтон", id: "4"}
    ],
    valueUserAnswer: null,
    userAnswerId: null
  },
  {
    id: "3",
    question: "Столица Белорусии?",
    rightAnswerId: "3",
    answers: [
      {text: "Киев", id: "1"},
      {text: "Москва", id: "2"},
      {text: "Минск", id: "3"},
      {text: "Вашингтон", id: "4"}
    ],
    valueUserAnswer: null,
    userAnswerId: null
  },
  {
    id: "4",
    question: "Столица США?",
    rightAnswerId: "4",
    answers: [
      {text: "Киев", id: "1"},
      {text: "Москва", id: "2"},
      {text: "Минск", id: "3"},
      {text: "Вашингтон", id: "4"}
    ],
    valueUserAnswer: null,
    userAnswerId: null
  }
];

const jsonQuiz = JSON.stringify(quiz);

console.log(jsonQuiz);