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
      explanation: "Hitler joined the German Workers' Party (Deutsche Arbeiterpartei or DAP) in 1919. It was only renamed the National Socialist German Workers' Party (NSDAP) in February 1920."
    },
    {
      question: "Who founded the German Workers' Party that would later become the Nazi Party?",
      options: [
        "Adolf Hitler",
        "Hermann Göring",
        "Anton Drexler",
        "Rudolf Hess"
      ],
      correctAnswer: 2,
      explanation: "Anton Drexler founded the German Workers' Party (DAP) in January 1919. Hitler was initially sent to spy on this small group but was impressed by their nationalist and anti-Semitic ideas."
    },
    {
      question: "What significant change happened to the party in February 1920?",
      options: [
        "Hitler became its leader",
        "It was renamed the National Socialist German Workers' Party (NSDAP)",
        "It won its first seats in the Reichstag",
        "The SA was formed"
      ],
      correctAnswer: 1,
      explanation: "In February 1920, the party was renamed the National Socialist German Workers' Party (Nationalsozialistische Deutsche Arbeiterpartei or NSDAP), commonly known as the Nazi Party."
    },
    {
      question: "Which important document was adopted by the Nazi Party in February 1920?",
      options: [
        "Mein Kampf",
        "The Hitler Oath",
        "The 25-Point Program",
        "The Nuremberg Laws"
      ],
      correctAnswer: 2,
      explanation: "The 25-Point Program outlined the Nazi Party's platform, including points on nationalism, anti-Semitism, anti-capitalism, and the concept of 'blood and soil'."
    },
    {
      question: "When did Hitler become the official leader of the Nazi Party?",
      options: ["1919", "1920", "1921", "1923"],
      correctAnswer: 2,
      explanation: "Hitler became the official leader of the Nazi Party in July 1921. He insisted on being given dictatorial powers within the party, threatening to resign if not granted this authority. He took the title 'party chairman' at this time, not yet using the title 'Führer' for his position."
    },
    {
      question: "What was Hitler's main role in the early Nazi Party between 1920-22?",
      options: [
        "Party Treasurer",
        "Military Strategist",
        "Chief Propagandist and Speaker",
        "Foreign Relations Coordinator"
      ],
      correctAnswer: 2,
      explanation: "Hitler's main contribution to the early Nazi Party was his exceptional ability as a public speaker and propagandist. His emotional speeches attracted new members and gained publicity for the party."
    },
    {
      question: "When was the Sturmabteilung (SA) or 'Brownshirts' officially established?",
      options: ["1919", "1921", "1923", "1925"],
      correctAnswer: 1,
      explanation: "The SA was officially formed in 1921, though some unofficial groups had existed earlier. They were initially called the 'Gymnastics and Sports Division' before becoming known as the Sturmabteilung."
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
      explanation: "The SA was created to protect Nazi meetings from disruption by political opponents, particularly communists, and to break up the meetings of other parties. They functioned as the party's paramilitary wing."
    },
    {
      question: "Which economic crisis in 1923 contributed to the timing of the Munich Putsch?",
      options: ["Great Depression", "Hyperinflation", "Banking Crisis of 1923", "Stock Market Crash"],
      correctAnswer: 1,
      explanation: "Hyperinflation in 1923 created economic chaos in Germany, with prices rising hourly and the German Mark becoming virtually worthless. Hitler believed this crisis created the perfect conditions for a coup attempt."
    },
    {
      question: "Which event in 1923 convinced Hitler that the German government was weak and could be overthrown?",
      options: [
        "The French occupation of the Ruhr",
        "The signing of the Locarno Treaties",
        "The death of President Ebert",
        "The formation of the Weimar Coalition"
      ],
      correctAnswer: 0,
      explanation: "When French and Belgian troops occupied the Ruhr industrial region in January 1923 due to Germany's failure to pay reparations, the German government's weak response convinced Hitler that it was time to act against the 'November Criminals' who had signed the Treaty of Versailles."
    },
    {
      question: "Which World War I hero joined Hitler in the Munich Putsch, lending credibility to the coup attempt?",
      options: ["Hermann Göring", "Erich Ludendorff", "Ernst Röhm", "Paul von Hindenburg"],
      correctAnswer: 1,
      explanation: "General Erich Ludendorff, a famous World War I military leader, supported Hitler's Putsch attempt. His presence gave the coup attempt greater legitimacy and was meant to help win the support of the military."
    },
    {
      question: "Which Bavarian officials did Hitler plan to force to support his 'March on Berlin'?",
      options: [
        "Gustav Stresemann and Gustav von Kahr",
        "Gustav von Kahr, Otto von Lossow, and Hans von Seisser",
        "Heinrich Himmler and Joseph Goebbels",
        "Franz von Papen and Kurt von Schleicher"
      ],
      correctAnswer: 1,
      explanation: "Hitler planned to force Gustav von Kahr (State Commissioner), General Otto von Lossow (Commander of the Bavarian Army), and Colonel Hans von Seisser (Chief of the Bavarian State Police) to support his national revolution. These three men were the most powerful officials in Bavaria at the time."
    },
    {
      question: "On what date did the Munich (Beer Hall) Putsch take place?",
      options: [
        "November 8-9, 1923",
        "January 30, 1923",
        "September 1, 1923",
        "December 25, 1923"
      ],
      correctAnswer: 0,
      explanation: "The Munich Putsch (also known as the Beer Hall Putsch) took place on November 8-9, 1923. Hitler and his supporters stormed the Bürgerbräukeller beer hall on the evening of November 8, and the march and confrontation with police occurred the next morning."
    },
    {
      question: "How did the Munich Putsch end?",
      options: [
        "With Hitler's successful takeover of the Bavarian government",
        "With a negotiated settlement between Hitler and government officials",
        "With a shootout near the Feldherrnhalle that left 16 Nazis and 4 police officers dead",
        "With Hitler fleeing to Austria to avoid arrest"
      ],
      correctAnswer: 2,
      explanation: "The Putsch ended in failure when police confronted the Nazi marchers near the Feldherrnhalle in central Munich. In the ensuing shootout, 16 Nazis and 4 police officers were killed. Hitler was injured but escaped, only to be arrested two days later."
    },
    {
      question: "What sentence did Hitler receive after his trial for the Munich Putsch?",
      options: ["Death penalty", "Life imprisonment", "Five years in prison", "Exile from Germany"],
      correctAnswer: 2,
      explanation: "Hitler was sentenced to five years in prison for treason, but served only nine months in Landsberg Prison. The sympathetic judges allowed him to use his trial as a propaganda platform to promote his ideas."
    },
    {
      question: "What important work did Hitler produce during his prison sentence?",
      options: [
        "The 25-Point Program",
        "Mein Kampf (My Struggle)",
        "The Aryan Manifesto",
        "The Nazi Constitution"
      ],
      correctAnswer: 1,
      explanation: "During his imprisonment, Hitler dictated the first volume of 'Mein Kampf' (My Struggle) to his fellow prisoner Rudolf Hess. This book outlined his political ideology, including his views on race, Germany's future, and his own life story."
    },
    {
      question: "What major strategic decision did Hitler make after his release from prison in December 1924?",
      options: [
        "To move to Austria and build support there first",
        "To adopt a legal path to power through elections rather than violent revolution",
        "To focus solely on building the SA as a paramilitary force",
        "To merge the Nazi Party with other nationalist groups"
      ],
      correctAnswer: 1,
      explanation: "After the failure of the Munich Putsch, Hitler decided that the Nazis should pursue power through legal means by participating in elections rather than through violent revolution. He called this the 'legal path to power.'"
    },
    {
      question: "How many seats did the Nazi Party win in the May 1928 Reichstag election?",
      options: ["107 seats", "32 seats", "12 seats", "No seats"],
      correctAnswer: 2,
      explanation: "In the May 1928 Reichstag election, the Nazi Party won only 12 seats out of 491 with 2.6% of the vote. This demonstrated the party's limited appeal during Germany's period of relative economic stability before the Great Depression."
    },
    {
      question: "How many Germans were unemployed by 1932 at the height of the Great Depression?",
      options: [
        "About 1 million",
        "About 3 million",
        "About 6 million",
        "About 10 million"
      ],
      correctAnswer: 2,
      explanation: "By 1932, approximately 6 million Germans (about 30% of the workforce) were unemployed. This massive unemployment created desperation and political instability that the Nazis exploited."
    },
    {
      question: "Who was the key figure in developing the Nazi Party's propaganda strategy?",
      options: ["Joseph Goebbels", "Hermann Göring", "Rudolf Hess", "Heinrich Himmler"],
      correctAnswer: 0,
      explanation: "Joseph Goebbels was appointed the Nazi Party's propaganda leader in 1929. He developed sophisticated propaganda techniques and coordinated the party's messaging across different media, helping to create a consistent and effective public image."
    },
    {
      question: "Who appointed Hitler as Chancellor on January 30, 1933?",
      options: [
        "Kurt von Schleicher",
        "Franz von Papen",
        "Paul von Hindenburg",
        "Heinrich Brüning"
      ],
      correctAnswer: 2,
      explanation: "President Paul von Hindenburg appointed Hitler as Chancellor on January 30, 1933. He had previously refused to appoint Hitler, but was persuaded by Franz von Papen and other conservative politicians who believed they could control Hitler as part of a coalition government."
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
