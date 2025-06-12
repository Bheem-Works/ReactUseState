import React, { useState } from 'react';

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const questionBank = [
        {
            question: "What are the most important things in love?",
            options: ["trust", "honesty", "loyalty", "allAbove"],
            answer: "allAbove",
        },
        {
            question: "What is the main purpose of the computer?",
            options: ["to make works Easy", "To develop the ai", "To destroy the humans"],
            answer: "to make works Easy",
        },
    ];

    const handleAnswerClick = (option) => {
        setSelectedAnswer(option);
    };

    return (
        <div>
            <div className="body">
                <h2>Question: {currentQuestion + 1}</h2>
                <h2>{questionBank[currentQuestion].question}</h2>

                {questionBank[currentQuestion].options.map((item, idx) => (
                    <button key={idx} onClick={() => handleAnswerClick(item)}>
                        {item}
                    </button>
                ))}
                {selectedAnswer && (
                    <p>
                        You selected: {selectedAnswer}
                        {selectedAnswer === questionBank[currentQuestion].answer
                            ? " (Correct)"
                            : " (Incorrect)"}
                    </p>
                )}
            </div>
            <div className="navButton">
                <button
                    disabled={currentQuestion === 0}
                    onClick={() => {
                        setCurrentQuestion(curr => curr - 1);
                        setSelectedAnswer(null);
                    }}
                >
                    Prev
                </button>

                <button
                    disabled={currentQuestion === questionBank.length - 1 && !selectedAnswer}
                    onClick={() => {
                        if (currentQuestion === questionBank.length - 1) {
                            console.log("Quiz finished!");
                            setCurrentQuestion(0);
                            setSelectedAnswer(null);
                        } else {
                            setCurrentQuestion(curr => curr + 1);
                            setSelectedAnswer(null);
                        }
                    }}
                >
                    {currentQuestion === questionBank.length - 1 ? "finishQuiz" : "Next"}
                </button>
            </div>
        </div>
    );
}

export default Quiz;