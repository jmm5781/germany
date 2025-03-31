import { useState } from 'react';

const GermanyRecoveryQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const questions = [
    {
      question: "What was the Dawes Plan of 1924?",
      options: [
        "A plan to reduce Germany's army size",
        "A new German constitution",
        "A U.S. loan and reparations schedule for Germany",
        "The treaty that ended World War I"
      ],
      correctAnswer: 2,
      explanation: "The Dawes Plan was introduced to ease Germany's reparation payments and involved U.S. loans to support its economy."
    },
    {
      question: "Who was Gustav Stresemann?",
      options: [
        "A Nazi party founder",
        "A Weimar president",
        "Germany's foreign minister and chancellor in the 1920s",
        "The leader of the Spartacists"
      ],
      correctAnswer: 2,
      explanation: "Stresemann was instrumental in stabilizing Germany's economy and improving its foreign relations."
    },
    {
      question: "Which new currency did Stresemann introduce to combat hyperinflation?",
      options: ["Deutschemark", "Euro", "Rentenmark", "Reichspfennig"],
      correctAnswer: 2,
      explanation: "The Rentenmark was introduced in 1923 to stabilize the German economy and replace the inflated mark."
    },
    {
      question: "What was the effect of the Dawes Plan on Germany's economy?",
      options: [
        "It caused more inflation",
        "It helped recover industrial output",
        "It led to civil war",
        "It ended reparations completely"
      ],
      correctAnswer: 1,
      explanation: "The Dawes Plan led to increased American investment and improved industrial performance."
    },
    {
      question: "When was the Locarno Pact signed?",
      options: ["1919", "1925", "1923", "1930"],
      correctAnswer: 1,
      explanation: "The Locarno Pact was signed in 1925 to guarantee Germany's western borders and improve diplomacy."
    },
    {
      question: "What was the significance of the Locarno Pact?",
      options: [
        "It allowed Germany to rearm",
        "It led to a new constitution",
        "It improved Germany’s relations with France and Belgium",
        "It increased support for extremist parties"
      ],
      correctAnswer: 2,
      explanation: "The Locarno Pact reassured France and Belgium and showed Germany’s willingness to cooperate."
    },
    {
      question: "When did Germany join the League of Nations?",
      options: ["1926", "1919", "1924", "1933"],
      correctAnswer: 0,
      explanation: "Germany was admitted into the League of Nations in 1926, increasing its international prestige."
    },
    {
      question: "What was the Young Plan of 1929?",
      options: [
        "A new educational reform",
        "A law banning child labor",
        "A revision of reparations payments",
        "A plan to reduce the German military"
      ],
      correctAnswer: 2,
      explanation: "The Young Plan reduced the total amount of reparations and extended the payment period."
    },
    {
      question: "How did foreign investment affect Germany in the 1920s?",
      options: [
        "It increased unemployment",
        "It caused more inflation",
        "It boosted economic recovery",
        "It led to war with France"
      ],
      correctAnswer: 2,
      explanation: "U.S. loans and investments helped modernize German industry and infrastructure."
    },
    {
      question: "Which group benefited least from the economic recovery of 1924–29?",
      options: ["Industrialists", "Middle class savers", "Big businesses", "Foreign investors"],
      correctAnswer: 1,
      explanation: "Middle class savers lost out due to hyperinflation and didn't fully recover despite the economic improvements."
    },
    {
      question: "How did the Nazi Party fare during the years 1924–1929?",
      options: ["It gained massive support", "It declined significantly", "It was banned", "It remained a fringe party"],
      correctAnswer: 3,
      explanation: "During this period of stability, extremist parties like the Nazis had limited appeal."
    },
    {
      question: "Which cultural development is associated with the Weimar Republic?",
      options: ["Romanticism", "Expressionism and Bauhaus", "Surrealism", "Gothic revival"],
      correctAnswer: 1,
      explanation: "Weimar Germany was known for its vibrant culture, including expressionist art and Bauhaus design."
    },
    {
      question: "How did Stresemann view the Treaty of Versailles?",
      options: ["He fully supported it", "He ignored it", "He aimed to revise it through diplomacy", "He wanted to enforce it"],
      correctAnswer: 2,
      explanation: "Stresemann sought to revise harsh terms peacefully to improve Germany’s position."
    },
    {
      question: "What challenge did German farmers face during the 1920s?",
      options: ["Rising profits", "Overproduction and falling prices", "Wage increases", "High demand"],
      correctAnswer: 1,
      explanation: "German farmers faced falling prices due to overproduction and international competition."
    },
    {
      question: "What happened to unemployment during the recovery period?",
      options: ["It dropped to zero", "It remained relatively high", "It doubled", "It led to a general strike"],
      correctAnswer: 1,
      explanation: "Despite overall recovery, unemployment remained a persistent problem in some sectors."
    },
    {
      question: "How did the arts reflect the Weimar Republic's freedom?",
      options: ["They were state-controlled", "Artists fled the country", "There was censorship", "They became more experimental and diverse"],
      correctAnswer: 3,
      explanation: "Weimar culture embraced new styles and ideas, symbolizing freedom and creativity."
    },
    {
      question: "What was the reaction of traditional Germans to Weimar culture?",
      options: ["They embraced it", "They promoted it", "They were uncomfortable and critical", "They ignored it"],
      correctAnswer: 2,
      explanation: "Many conservative Germans found the modern culture shocking and immoral."
    },
    {
      question: "Why did many people still feel insecure during the recovery?",
      options: ["High taxes", "Lack of democracy", "Foreign troops", "The recovery was dependent on U.S. loans"],
      correctAnswer: 3,
      explanation: "Germany’s economy relied heavily on American support, creating vulnerability."
    },
    {
      question: "Which industry grew rapidly during Germany’s recovery?",
      options: ["Television", "Coal and steel", "Textiles", "Agriculture"],
      correctAnswer: 1,
      explanation: "Germany’s heavy industry expanded, especially in coal, iron, and steel production."
    },
    {
      question: "What year did Stresemann die?",
      options: ["1929", "1924", "1933", "1928"],
      correctAnswer: 0,
      explanation: "Gustav Stresemann died in October 1929, just before the Wall Street Crash."
    }
  ];

  const handleAnswerClick = (selectedOption: number) => {
    setSelectedAnswer(selectedOption);
    setShowExplanation(true);

    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setShowExplanation(false);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-center mb-8 text-green-800">Germany Recovery Quiz: 1924–1929</h1>

      {!showResults ? (
        <div className="mb-8">
          <div className="mb-2 text-sm font-medium text-gray-500">Question {currentQuestion + 1} of {questions.length}</div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-green-600 h-2.5 rounded-full" style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}></div>
          </div>

          <h2 className="text-xl font-semibold mt-6 mb-4">{questions[currentQuestion].question}</h2>

          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(index)}
                disabled={selectedAnswer !== null}
                className={`w-full p-3 text-left rounded-lg transition-colors ${
                  selectedAnswer === null
                    ? 'bg-white border border-gray-300 hover:bg-gray-100'
                    : selectedAnswer === index
                    ? index === questions[currentQuestion].correctAnswer
                      ? 'bg-green-100 border border-green-500'
                      : 'bg-red-100 border border-red-500'
                    : index === questions[currentQuestion].correctAnswer
                    ? 'bg-green-100 border border-green-500'
                    : 'bg-white border border-gray-300'
                }`}
              >
                {String.fromCharCode(65 + index)}. {option}
              </button>
            ))}
          </div>

          {showExplanation && (
            <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
              <p className="font-semibold">Explanation:</p>
              <p>{questions[currentQuestion].explanation}</p>
            </div>
          )}

          {selectedAnswer !== null && (
            <button
              onClick={handleNextQuestion}
              className="mt-6 w-full py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
            >
              {currentQuestion < questions.length - 1 ? "Next Question" : "See Results"}
            </button>
          )}
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
          <div className="mb-6">
            <div className="text-5xl font-bold text-green-700 mb-2">{score} / {questions.length}</div>
            <p className="text-lg">
              {score === questions.length
                ? "Perfect score! You're a recovery era expert!"
                : score >= questions.length * 0.8
                ? "Excellent! You know Germany’s recovery period well!"
                : score >= questions.length * 0.6
                ? "Good job! You have a solid understanding of Germany’s recovery."
                : score >= questions.length * 0.4
                ? "Not bad! Review a bit more about 1924–1929."
                : "Keep studying! There’s more to learn about this important period."}
            </p>
          </div>

          <button
            onClick={restartQuiz}
            className="py-3 px-6 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
          >
            Restart Quiz
          </button>
        </div>
      )}

      <div className="mt-8 text-center text-sm text-gray-500">
        <p>This quiz is designed for iGCSE History students studying Germany’s recovery from 1924 to 1929.</p>
      </div>
    </div>
  );
};

export default GermanyRecoveryQuiz;
