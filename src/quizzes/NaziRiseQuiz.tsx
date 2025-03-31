import { useState } from 'react';

const NaziRiseQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const questions = [
    {
      question: "What was the original name of the Nazi Party when Hitler first joined it in 1919?",
      options: [
        "National Socialist German Workers' Party",
        "German Workers' Party (DAP)",
        "German Nationalist Party",
        "German People's Freedom Party"
      ],
      correctAnswer: 1,
      explanation: "Hitler joined the German Workers' Party (DAP) in 1919. It was only renamed the NSDAP in February 1920."
    },
    {
      question: "Who founded the German Workers' Party that would later become the Nazi Party?",
      options: ["Adolf Hitler", "Hermann Göring", "Anton Drexler", "Rudolf Hess"],
      correctAnswer: 2,
      explanation: "Anton Drexler founded the German Workers' Party in January 1919."
    },
    {
      question: "What significant change happened to the party in February 1920?",
      options: [
        "Hitler became its leader",
        "It was renamed the NSDAP",
        "It won its first seats in the Reichstag",
        "The SA was formed"
      ],
      correctAnswer: 1,
      explanation: "The party was renamed the National Socialist German Workers' Party (NSDAP) in February 1920."
    },
    {
      question: "Which important document was adopted by the Nazi Party in February 1920?",
      options: ["Mein Kampf", "The Hitler Oath", "The 25-Point Program", "The Nuremberg Laws"],
      correctAnswer: 2,
      explanation: "The 25-Point Program outlined the Nazi Party's political platform."
    },
    {
      question: "When did Hitler become the official leader of the Nazi Party?",
      options: ["1919", "1920", "1921", "1923"],
      correctAnswer: 2,
      explanation: "Hitler became the official leader of the Nazi Party in July 1921."
    },
    {
      question: "What was Hitler's main role in the early Nazi Party between 1920-22?",
      options: ["Party Treasurer", "Military Strategist", "Chief Propagandist and Speaker", "Foreign Relations Coordinator"],
      correctAnswer: 2,
      explanation: "Hitler's main contribution to the early Nazi Party was his exceptional ability as a public speaker and propagandist."
    },
    {
      question: "When was the Sturmabteilung (SA) or 'Brownshirts' officially established?",
      options: ["1919", "1921", "1923", "1925"],
      correctAnswer: 1,
      explanation: "The SA was officially formed in 1921, though some unofficial groups had existed earlier."
    },
    {
      question: "What was the primary purpose of creating the SA?",
      options: [
        "To protect Nazi Party meetings and disrupt opponents' meetings",
        "To act as Hitler's personal bodyguard",
        "To infiltrate the German army",
        "To run local government in Nazi-controlled areas"
      ],
      correctAnswer: 0,
      explanation: "The SA was created to protect Nazi meetings from disruption by political opponents, particularly communists."
    },
    {
      question: "Which economic crisis in 1923 contributed to the timing of the Munich Putsch?",
      options: ["Great Depression", "Hyperinflation", "Banking Crisis of 1923", "Stock Market Crash"],
      correctAnswer: 1,
      explanation: "Hyperinflation in 1923 created economic chaos in Germany, which Hitler believed created the perfect conditions for a coup attempt."
    },
    {
      question: "Which event in 1923 convinced Hitler that the German government was weak and could be overthrown?",
      options: ["The French occupation of the Ruhr", "The signing of the Locarno Treaties", "The death of President Ebert", "The formation of the Weimar Coalition"],
      correctAnswer: 0,
      explanation: "The French occupation of the Ruhr and the German government's weak response convinced Hitler it was time to act."
    },
    {
      question: "Which World War I hero joined Hitler in the Munich Putsch?",
      options: ["Hermann Göring", "Erich Ludendorff", "Ernst Röhm", "Paul von Hindenburg"],
      correctAnswer: 1,
      explanation: "General Erich Ludendorff supported Hitler's Putsch attempt, giving it greater legitimacy."
    },
    {
      question: "Which Bavarian officials did Hitler plan to force to support his 'March on Berlin'?",
      options: ["Gustav Stresemann and Gustav von Kahr", "Gustav von Kahr, Otto von Lossow, and Hans von Seisser", "Heinrich Himmler and Joseph Goebbels", "Franz von Papen and Kurt von Schleicher"],
      correctAnswer: 1,
      explanation: "Hitler aimed to gain the support of these powerful Bavarian officials for his coup."
    },
    {
      question: "On what date did the Munich (Beer Hall) Putsch take place?",
      options: ["November 8-9, 1923", "January 30, 1923", "September 1, 1923", "December 25, 1923"],
      correctAnswer: 0,
      explanation: "The Putsch took place on November 8-9, 1923."
    },
    {
      question: "How did the Munich Putsch end?",
      options: [
        "With Hitler's successful takeover of the Bavarian government",
        "With a negotiated settlement",
        "With a shootout near the Feldherrnhalle",
        "With Hitler fleeing to Austria"
      ],
      correctAnswer: 2,
      explanation: "The Putsch failed after a deadly confrontation with police near the Feldherrnhalle."
    },
    {
      question: "What sentence did Hitler receive after his trial for the Munich Putsch?",
      options: ["Death penalty", "Life imprisonment", "Five years in prison", "Exile from Germany"],
      correctAnswer: 2,
      explanation: "Hitler was sentenced to five years but served only nine months."
    },
    {
      question: "What important work did Hitler produce during his prison sentence?",
      options: ["The 25-Point Program", "Mein Kampf (My Struggle)", "The Aryan Manifesto", "The Nazi Constitution"],
      correctAnswer: 1,
      explanation: "Hitler wrote Mein Kampf during his imprisonment."
    },
    {
      question: "What major strategic decision did Hitler make after his release from prison in 1924?",
      options: [
        "To move to Austria",
        "To adopt a legal path to power",
        "To focus solely on building the SA",
        "To merge with other nationalist groups"
      ],
      correctAnswer: 1,
      explanation: "Hitler decided to pursue power legally through elections."
    },
    {
      question: "How many seats did the Nazi Party win in the May 1928 Reichstag election?",
      options: ["107 seats", "32 seats", "12 seats", "No seats"],
      correctAnswer: 2,
      explanation: "The Nazis won only 12 seats in 1928, showing their limited appeal at the time."
    },
    {
      question: "How many Germans were unemployed by 1932?",
      options: ["1 million", "3 million", "6 million", "10 million"],
      correctAnswer: 2,
      explanation: "By 1932, about 6 million Germans were unemployed."
    },
    {
      question: "Who was the key figure in developing Nazi propaganda strategy?",
      options: ["Joseph Goebbels", "Hermann Göring", "Rudolf Hess", "Heinrich Himmler"],
      correctAnswer: 0,
      explanation: "Joseph Goebbels was appointed as the Nazi Party's propaganda leader in 1929."
    },
    {
      question: "Who appointed Hitler as Chancellor on January 30, 1933?",
      options: ["Kurt von Schleicher", "Franz von Papen", "Paul von Hindenburg", "Heinrich Brüning"],
      correctAnswer: 2,
      explanation: "President Paul von Hindenburg appointed Hitler as Chancellor."
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
      <h1 className="text-2xl font-bold text-center mb-8 text-red-800">Rise of the Nazis Quiz</h1>

      {!showResults ? (
        <div className="mb-8">
          <div className="mb-2 text-sm font-medium text-gray-500">Question {currentQuestion + 1} of {questions.length}</div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-red-600 h-2.5 rounded-full" style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}></div>
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
            <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
              <p className="font-semibold">Explanation:</p>
              <p>{questions[currentQuestion].explanation}</p>
            </div>
          )}

          {selectedAnswer !== null && (
            <button
              onClick={handleNextQuestion}
              className="mt-6 w-full py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
            >
              {currentQuestion < questions.length - 1 ? "Next Question" : "See Results"}
            </button>
          )}
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
          <div className="mb-6">
            <div className="text-5xl font-bold text-red-700 mb-2">{score} / {questions.length}</div>
            <p className="text-lg">
              {score === questions.length
                ? "Perfect score! You're a Nazi-era expert!"
                : score >= questions.length * 0.8
                ? "Excellent! You really know your Nazi history!"
                : score >= questions.length * 0.6
                ? "Good job! You have a solid understanding of this topic."
                : score >= questions.length * 0.4
                ? "Not bad! Review more about Hitler’s early rise."
                : "Keep studying! There's more to learn about this pivotal period."}
            </p>
          </div>

          <button
            onClick={restartQuiz}
            className="py-3 px-6 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
          >
            Restart Quiz
          </button>
        </div>
      )}

      <div className="mt-8 text-center text-sm text-gray-500">
        <p>This quiz is designed for iGCSE History students studying Hitler’s early rise and the development of the Nazi Party.</p>
      </div>
    </div>
  );
};

export default NaziRiseQuiz;
