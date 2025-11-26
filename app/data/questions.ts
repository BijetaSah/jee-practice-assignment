interface Questions {
  id: number;
  subject: string;
  question: string;
  options: string[];
  answer: string;
}

export const questions: Questions[] = [
  {
    id: 1,
    subject: "Physics",
    question:
      "A particle moves in a circular path of radius R with constant speed v. What is the magnitude of its acceleration?",
    options: ["v²/R", "v/R²", "R/v²", "vR"],
    answer: "v²/R",
  },

  {
    id: 2,
    subject: "Physics",
    question:
      "A block of mass m is released from height h on a smooth inclined plane. What is its speed at the bottom?",
    options: ["√(2gh)", "gh/2", "2gh", "mg/h"],
    answer: "√(2gh)",
  },

  {
    id: 3,
    subject: "Chemistry",
    question: "Which of the following has the highest ionization enthalpy?",
    options: ["Nitrogen (N)", "Oxygen (O)", "Fluorine (F)", "Carbon (C)"],
    answer: "Nitrogen (N)",
  },

  {
    id: 4,
    subject: "Chemistry",
    question:
      "Which type of reaction is represented by: CH₄ + 2O₂ → CO₂ + 2H₂O ?",
    options: [
      "Substitution reaction",
      "Oxidation reaction",
      "Elimination reaction",
      "Disproportionation reaction",
    ],
    answer: "Oxidation reaction",
  },

  {
    id: 5,
    subject: "Mathematics",
    question: "If f(x) = x² + 3x + 1, what is f'(x)?",
    options: ["2x + 3", "x + 3", "2x – 3", "x² – 3"],
    answer: "2x + 3",
  },

  {
    id: 6,
    subject: "Mathematics",
    question: "The value of the definite integral ∫₀¹ (3x²) dx is:",
    options: ["1", "3", "1/3", "0"],
    answer: "1",
  },

  {
    id: 7,
    subject: "Physics",
    question: "The dimensional formula of force is:",
    options: ["MLT⁻²", "M⁻¹L³T²", "ML²T⁻³", "M²LT⁻¹"],
    answer: "MLT⁻²",
  },

  {
    id: 8,
    subject: "Chemistry",
    question: "Which of the following is NOT an example of a greenhouse gas?",
    options: ["Carbon dioxide", "Methane", "Nitrous oxide", "Oxygen"],
    answer: "Oxygen",
  },

  {
    id: 9,
    subject: "Mathematics",
    question: "If log₁₀(2) = a and log₁₀(3) = b, what is log₁₀(6)?",
    options: ["a + b", "a – b", "ab", "a/b"],
    answer: "a + b",
  },

  {
    id: 10,
    subject: "Physics",
    question:
      "In a simple harmonic motion, displacement x = A cos(ωt). The velocity is maximum when:",
    options: ["x = A", "x = –A", "x = 0", "x = ±A/2"],
    answer: "x = 0",
  },
];
