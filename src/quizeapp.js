import React from "react";

import "./quizeapp.css";



class QuizApp extends React.Component {

  constructor(props) {

    super(props);

    this.state = {

      questions: [

        {

          question: 'What is the capital of France?',

          options: ['Paris', 'Berlin', 'Madrid', 'Rome'],

          correctAnswer: 'Paris'

        },

        {

          question: 'Which planet is known as the Red Planet?',

          options: ['Mars', 'Jupiter', 'Venus', 'Saturn'],

          correctAnswer: 'Mars'

        },

        {

          question: 'What is the largest mammal?',

          options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],

          correctAnswer: 'Blue Whale'

        }

      ],

      currentQuestion: 0,

      userAnswers: [],

      score: 0

    };

  }



  handleOptionClick = (selectedOption) => {

    const { currentQuestion, questions, userAnswers, score } = this.state;



    const isCorrect = selectedOption === questions[currentQuestion].correctAnswer;



    this.setState({

      userAnswers: [...userAnswers, { question: currentQuestion, answer: selectedOption, isCorrect }],

      score: isCorrect ? score + 1 : score

    });



    // Move to the next question

    this.setState((prevState) => ({ currentQuestion: prevState.currentQuestion + 1 }));

  };



//hanldeBackButton

handleBackButtonClick = () => {

  // Go back to the previous question

  this.setState((prevState) => ({ currentQuestion: prevState.currentQuestion - 1 }));

};



//handleHoeButton

handleHomeButtonClick = () => {

  // Go back to the home page

  this.setState({ currentQuestion: 0, userAnswers: [], score: 0 });

};







  render() {

    const { questions, currentQuestion, userAnswers, score } = this.state;

    const totalQuestions = questions.length;

    const isLastQuestion = currentQuestion === totalQuestions;



    return (

      <div className="question-container">

        

        {isLastQuestion ? (

          <div className="result-container">

            <h2>Your Score: {score}</h2>

             

            <ul>

              {userAnswers.map((answer, index) => (

                <li key={index} className={answer.isCorrect ? 'correct' : 'incorrect'}>

                  <p>

                    Question {answer.question + 1}:

                    {answer.isCorrect ? ' Correct' : ' Incorrect'}

                  </p>

                  <p>Your Answer: {answer.answer}</p>

                  <p>Correct Answer: {questions[answer.question].correctAnswer}</p>

                </li>

                

              ))}

            </ul>

            <button className="Back-Score" onClick={this.handleHomeButtonClick}>Back</button>

                  <p>

                  Page {currentQuestion + 1} of {totalQuestions}

                </p>

          </div>

        ) : (

      <div className="quesFlex"> 

            <div className="question">

              <h2>Question {currentQuestion + 1}</h2>

              <p>{questions[currentQuestion].question}</p>

            



            <div className="answer">

              {questions[currentQuestion].options.map((option, index) => (

                <button key={index} className="Answer-button" onClick={() => this.handleOptionClick(option)}>

                  {option}

                </button>

              ))}

  <button className="Back"onClick={this.handleBackButtonClick}>Back</button>


            </div>

               <p className="Page-Number">Page Number {currentQuestion + 1} of {totalQuestions}</p>

            </div>



           

          </div>

        )}

      </div>

    );

  }

}



export default QuizApp;