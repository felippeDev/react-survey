import React, { Component } from 'react';

var firebase  = require('firebase');
var uuid  = require('uuid');
var config = {
    apiKey: "AIzaSyAaO6mjchJzdHlPalyu-xWgRooRsybb2V4",
    authDomain: "react-survey-f0824.firebaseapp.com",
    databaseURL: "https://react-survey-f0824.firebaseio.com",
    projectId: "react-survey-f0824",
    storageBucket: "react-survey-f0824.appspot.com",
    messagingSenderId: "596880637510"
  };
firebase.initializeApp(config);

class Survey extends Component {
  constructor(props){
    super(props);

    this.state = {
      uuid: uuid.v1(),
      studentName: '',
      answers: {
        answer1: '',
        answer2: '',
        answer3: ''
      },
      isSubmitted: false
    };
    this.submitName = this.submitName.bind(this);
    this.answerSelected = this.answerSelected.bind(this);
    this.submitQuestions = this.submitQuestions.bind(this);
  }

  submitName(event){
    var studentName = this.refs.name.value;
    this.setState({studentName: studentName}, ()=>{
      console.log(this.state);
    });
  }

  answerSelected(){

  }

  submitQuestions(){

  }

  render(){
    var studentName;
    var questions;

    if(this.state.studentName === '' && this.state.isSubmitted === false) {
      studentName = <div>
        <h1>Please enter your name</h1>
        <form onSubmit={this.submitName}>
          <input type="text" placeholder="Enter your name" ref="name" />
        </form>
      </div>;
      questions = ''
    } else if (this.state.studentName !== '' && this.state.isSubmitted === false){
      studentName = <h1>Hello, {this.state.studentName}</h1>
      questions = <div>
        <h2>Answer the questions</h2>
        <form onSubmit={this.submitQuestions}>
          <div className="card">
            <label>What is your favorite color?</label>
            <input type="radio" name="answer1" value="Red" onChange={this.answerSelected} /> Red
            <input type="radio" name="answer1" value="Green" onChange={this.answerSelected} /> Green
            <input type="radio" name="answer1" value="Blue" onChange={this.answerSelected} /> Blue
          </div>
          <div className="card">
            <label>What is your current job?</label>
            <input type="radio" name="answer2" value="Design" onChange={this.answerSelected} /> Design
            <input type="radio" name="answer2" value="Developer" onChange={this.answerSelected} /> Developer
            <input type="radio" name="answer2" value="Manager" onChange={this.answerSelected} /> Manager
          </div>
          <div className="card">
            <label>What is your favorite JS framework?</label>
            <input type="radio" name="answer3" value="React" onChange={this.answerSelected} /> React
            <input type="radio" name="answer3" value="Angular" onChange={this.answerSelected} /> Angular
            <input type="radio" name="answer3" value="Vue" onChange={this.answerSelected} /> Vue
          </div>
          <input type="submit" value="submit" />
        </form>
      </div>
    }

    return(
      <div>
        {studentName}
        {questions}
      </div>
    );
  }
}

export default Survey;
