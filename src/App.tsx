import React, { useState } from 'react';

const WeimarRepublicQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const questions = [
    {
      question: "When did Kaiser Wilhelm II abdicate and the armistice ending World War I get signed?",
      options: ["October 3, 1918", "November 9-11, 1918", "December 25, 1918", "January 5, 1919"],
      correctAnswer: 1,
      explanation: "Kaiser Wilhelm II abdicated on November 9, 1918, and the armistice ending World War I was signed on November 11, 1918. These events marked the end of the German Empire and set the stage for the formation of the Weimar Republic."
    },
    {
      question: "Why was the new German republic called the 'Weimar Republic'?",
      options: [
        "It was named after its first president, Heinrich Weimar",
        "Weimar means 'new beginning' in an old German dialect",
        "The constitutional assembly met in the town of Weimar rather than Berlin",
        "It was named after the Weimar Treaty that formally ended WWI"
      ],
      correctAnswer: 2,
      explanation: "The constitutional assembly met in the town of Weimar rather than Berlin, which was experiencing political unrest at the time. Though the government later moved to Berlin, the republic retained the name 'Weimar' from this initial meeting location."
    },
    {
      question: "When was the Weimar Republic officially established?",
      options: ["January 1918", "November 1918", "August 1919", "January 1920"],
      correctAnswer: 2,
      explanation: "The Weimar Republic was officially established with the adoption of the Weimar Constitution on August 11, 1919. However, the German Revolution that overthrew the monarchy began in November 1918."
    },
    {
      question: "Why was the Weimar government unpopular with many Germans?",
      options: [
        "It had raised taxes too high",
        "Many army leaders and judges opposed it, monarchists wanted the Kaiser back, and communists wanted a revolution",
        "It had friendly relations with France and Britain",
        "It had abolished traditional German cultural practices"
      ],
      correctAnswer: 1,
      explanation: "The Weimar government faced opposition from multiple sides: many army leaders and judges remained loyal to the old regime and did not support the republic; monarchists wanted the Kaiser back; and people influenced by the Russian Revolution of 1917 wanted a communist revolution in Germany instead of a parliamentary democracy."
    },
    {
      question: "Who was the first President of the Weimar Republic?",
      options: ["Friedrich Ebert", "Paul von Hindenburg", "Philipp Scheidemann", "Gustav Stresemann"],
      correctAnswer: 0,
      explanation: "Friedrich Ebert was the first President of the Weimar Republic, serving from 1919 until his death in 1925. He was a member of the Social Democratic Party (SPD)."
    },
    {
      question: "What was the 'stab-in-the-back' myth (Dolchstoßlegende)?",
      options: [
        "A military tactic used by France against Germany",
        "The belief that Germany had been betrayed by civilians, especially Jews and socialists",
        "A propaganda campaign by the Weimar government",
        "A secret agreement between Wilson and Clemenceau"
      ],
      correctAnswer: 1,
      explanation: "The 'stab-in-the-back' myth was the belief that Germany hadn't been defeated militarily in WWI but was betrayed by civilians at home, particularly Jews, socialists, and republican politicians. This damaging myth was promoted by right-wing groups and undermined the new republic's legitimacy."
    },
    {
      question: "Which territorial losses did Germany suffer under the Treaty of Versailles?",
      options: [
        "Only Alsace and Lorraine to France",
        "Only its colonies in Africa and Asia",
        "Alsace-Lorraine, the port of Danzig, parts of Prussia, and all its colonies in Africa and Asia",
        "Only eastern territories to the newly formed Poland"
      ],
      correctAnswer: 2,
      explanation: "Germany lost Alsace-Lorraine to France, the port of Danzig became a 'free city' under League of Nations protection, parts of Prussia were given to the newly formed Poland, and all of Germany's 11 colonies in Africa and Asia were taken and administered by the Allies as 'mandates'."
    },
    {
      question: "What was Article 231 of the Treaty of Versailles commonly known as?",
      options: [
        "The Disarmament Clause",
        "The Reparations Article",
        "The War Guilt Clause",
        "The Territorial Settlement"
      ],
      correctAnswer: 2,
      explanation: "Article 231, commonly known as the 'War Guilt Clause,' forced Germany to accept full responsibility for causing World War I. This was particularly humiliating for Germans and became a major source of resentment, as many Germans did not believe they were solely responsible for the war."
    },
    {
      question: "What military restrictions were imposed on Germany by the Treaty of Versailles?",
      options: [
        "Germany could have an army of no more than 500,000 men",
        "Germany was banned from having any military whatsoever",
        "Germany was limited to an army of 100,000 men, no air force, and only a small navy with no submarines",
        "Germany could maintain its full military but was not allowed to station troops near its borders"
      ],
      correctAnswer: 2,
      explanation: "The Treaty of Versailles severely limited Germany's military power: the army was restricted to 100,000 men with no conscription, the air force was banned entirely, the navy was reduced to just a few small ships with no submarines, and the production of military equipment was strictly controlled."
    },
    {
      question: "How did reparations imposed by the Treaty of Versailles affect the Weimar Republic?",
      options: [
        "They had little economic impact as the amounts were symbolic",
        "They caused severe economic hardship and contributed to hyperinflation",
        "They were quickly paid off using Germany's gold reserves",
        "They only affected Germany's military budget, not its civilian economy"
      ],
      correctAnswer: 1,
      explanation: "The reparations (initially set at 132 billion gold marks in 1921) were enormously burdensome for the German economy. The struggle to make payments contributed to the government printing money, which led to hyperinflation in 1923. The economic hardship caused by reparations undermined public support for the Weimar Republic."
    },
    {
      question: "Which treaty formally ended World War I and imposed harsh penalties on Germany?",
      options: ["Treaty of Versailles", "Treaty of Brest-Litovsk", "Treaty of Saint-Germain", "Treaty of Lausanne"],
      correctAnswer: 0,
      explanation: "The Treaty of Versailles, signed on June 28, 1919, formally ended WWI and imposed harsh penalties on Germany including territorial losses, military restrictions, and enormous reparation payments that crippled the German economy."
    },
    {
      question: "What was the Spartacist Uprising?",
      options: [
        "A military coup attempt by right-wing nationalists",
        "A workers' strike demanding better conditions",
        "A communist revolution attempt led by Karl Liebknecht and Rosa Luxemburg",
        "A protest against the Treaty of Versailles"
      ],
      correctAnswer: 2,
      explanation: "The Spartacist Uprising was an attempted communist revolution in January 1919 led by Karl Liebknecht and Rosa Luxemburg. It was violently suppressed by the Freikorps (paramilitary groups) under orders from the new SPD government, and both leaders were murdered."
    },
    {
      question: "What was the Kapp Putsch of 1920?",
      options: [
        "A communist uprising in Berlin",
        "A right-wing coup attempt against the Weimar government",
        "A protest movement against the Treaty of Versailles",
        "A student demonstration for educational reform"
      ],
      correctAnswer: 1,
      explanation: "The Kapp Putsch was a right-wing coup attempt in March 1920 led by Wolfgang Kapp and military leaders. They temporarily took control of Berlin, forcing the government to flee. The putsch failed after workers organized a general strike that paralyzed the city. This event highlighted the republic's fragility and the threat from right-wing nationalists."
    },
    {
      question: "What were the 'Freikorps'?",
      options: [
        "Democratic reform movements",
        "Paramilitary groups of former soldiers",
        "Socialist labor unions",
        "Student protest organizations"
      ],
      correctAnswer: 1,
      explanation: "The Freikorps were paramilitary groups formed by demobilized soldiers after WWI. Initially used by the Weimar government to suppress left-wing uprisings, many later opposed the republic and eventually supported the Nazi movement."
    },
    {
      question: "What was the 'Ruhr Crisis' of 1923?",
      options: [
        "A coal miners' strike in the Ruhr Valley",
        "French and Belgian occupation of the Ruhr industrial region",
        "An environmental disaster in Germany's industrial heartland",
        "A border dispute between Germany and Poland"
      ],
      correctAnswer: 1,
      explanation: "The Ruhr Crisis occurred when French and Belgian troops occupied Germany's industrial Ruhr region in January 1923 after Germany defaulted on reparation payments. The German government responded with 'passive resistance,' which further damaged the economy."
    },
    {
      question: "What major economic disaster hit Germany in 1923?",
      options: [
        "The Great Depression",
        "Hyperinflation",
        "Banking collapse",
        "Trade embargo"
      ],
      correctAnswer: 1,
      explanation: "Hyperinflation devastated Germany in 1923, largely resulting from the government printing money to pay striking workers during the Ruhr occupation. At its peak, prices doubled every few days, wiping out savings and causing extreme social distress."
    },
    {
      question: "What feature of the Weimar Republic's parliamentary system contributed to political instability?",
      options: [
        "First-past-the-post voting system",
        "Proportional representation with a low threshold for entering parliament",
        "Requirement for a supermajority to pass legislation",
        "Direct election of the Chancellor"
      ],
      correctAnswer: 1,
      explanation: "The Weimar Republic used proportional representation with a low threshold, which allowed many small parties to gain seats in the Reichstag. This led to fragmented parliaments, coalition governments that were often unstable, and difficulty in passing legislation, contributing to political instability throughout the republic's existence."
    },
    {
      question: "What approach did Friedrich Ebert take to governance in the early Weimar Republic?",
      options: [
        "He ordered the immediate dismissal of all imperial civil servants and military officers",
        "He nationalized major industries to create a true socialist state",
        "He retained civil servants from the previous government, reassured industry leaders, and promised 8-hour workdays to unions",
        "He focused solely on foreign policy while delegating domestic affairs to local governments"
      ],
      correctAnswer: 2,
      explanation: "Ebert took a pragmatic approach to governance. He kept the state running by employing civil servants from the previous imperial government, reassured industry leaders that the state would not take over private industries, and promised trade unions to reduce working hours to an 8-hour day. This balanced approach aimed to maintain stability and prevent further upheaval."
    },
    {
      question: "What was Article 48 of the Weimar Constitution, and why was it problematic?",
      options: [
        "It established proportional representation, leading to fragmented parliaments",
        "It gave the President emergency powers to rule by decree",
        "It required Germany to pay war reparations",
        "It prohibited Germany from having a standing army"
      ],
      correctAnswer: 1,
      explanation: "Article 48 gave the President emergency powers to rule by decree without parliamentary approval. While intended for emergencies, it was increasingly used to bypass the Reichstag, undermining democratic governance and eventually enabling Hitler's legal rise to power."
    },
    {
      question: "While hyperinflation caused massive problems, who actually benefited from it?",
      options: [
        "Government officials and civil servants",
        "Pensioners and people with savings in the bank",
        "People with loans/mortgages, landowners, and farmers",
        "Foreign investors and currency speculators"
      ],
      correctAnswer: 2,
      explanation: "Despite the devastation caused by hyperinflation, certain groups actually benefited: people with loans and mortgages could pay them off quickly with worthless currency; landowners were protected as the value of real estate rose with inflation; and farmers benefited because they could sell their products at ever-increasing prices. Those with physical assets generally fared better than those with cash savings."
    }
  ];

  const handleAnswerClick = (selectedOption) => {
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
      <h1 className="text-2xl font-bold text-center mb-8 text-blue-800">Weimar Republic Quiz: Establishment & Early Problems</h1>
      
      {!showResults ? (
        <div className="mb-8">
          <div className="mb-2 text-sm font-medium text-gray-500">Question {currentQuestion + 1} of {questions.length}</div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}></div>
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
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="font-semibold">Explanation:</p>
              <p>{questions[currentQuestion].explanation}</p>
            </div>
          )}
          
          {selectedAnswer !== null && (
            <button
              onClick={handleNextQuestion}
              className="mt-6 w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              {currentQuestion < questions.length - 1 ? "Next Question" : "See Results"}
            </button>
          )}
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
          <div className="mb-6">
            <div className="text-5xl font-bold text-blue-700 mb-2">{score} / {questions.length}</div>
            <p className="text-lg">
              {score === questions.length 
                ? "Perfect score! You're a Weimar Republic expert!" 
                : score >= questions.length * 0.8 
                ? "Excellent! You really know your Weimar history!"
                : score >= questions.length * 0.6
                ? "Good job! You have a solid understanding of the Weimar Republic."
                : score >= questions.length * 0.4
                ? "Not bad! Review a bit more about the Weimar Republic's early problems."
                : "Keep studying! The Weimar Republic is a complex but fascinating period."}
            </p>
          </div>
          
          <button
            onClick={restartQuiz}
            className="py-3 px-6 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Restart Quiz
          </button>
        </div>
      )}
      
      <div className="mt-8 text-center text-sm text-gray-500">
        <p>This quiz is designed for iGCSE History students studying the Weimar Republic's establishment and early problems (1918-1923).</p>
      </div>
    </div>
  );
};

export default WeimarRepublicQuiz;
