import React, { useState } from 'react';

const questions = [
    {
        id:1,
        question: 'Example 1',
        options: ['London','Parris','Berlin','Madrid'],
        correctAnswer: 'Parris',
    },

    {
        id:2,
        question: 'Example 1',
        options: ['London','Parris','Berlin','Madrid'],
        correctAnswer: 'Parris',
    },

    {
        id:3,
        question: 'Example 1',
        options: ['London','Parris','Berlin','Madrid'],
        correctAnswer: 'Parris',
    },
    
    {
        id:4,
        question: 'Example 1',
        options: ['London','Parris','Berlin','Madrid'],
        correctAnswer: 'Parris',
    },
    
    {
        id:5,
        question: 'Example 1',
        options: ['London','Parris','Berlin','Madrid'],
        correctAnswer: 'Parris',
    },
];

function TestPage () {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const handleNext = () => {
        if (currentQuestionIndex <questions.length -1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };
    const handlePrevious = () => { 
        if (currentQuestionIndex > 0) {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className = "test-page">
            <h2>Question {currentQuestion.id}</h2>
            <p>{currentQuestion.question}</p>
            <ul>
                {currentQuestion.options.map((option,index) => (
                    <li key={index}>{option}</li>
                ))}
            </ul>
            <button onClick={handlePrevious} disabled= {currentQuestionIndex === 0}>Previous</button>
            <button onClick={handleNext} disabled= {currentQuestionIndex === questions.length-1}>Next</button>   
        </div>
    );
}

export default TestPage;