import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import TopicPage from './containers/TopicPage/TopicPage';
import TopicTutorials from './containers/TopicTutorials/TopicTutorials';
import ProblemDesc from './containers/ProblemDesc/ProblemDesc';
import {
  Switch,
  Route,
} from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allCards: true,
      isTopic: false,
      topic: '',
      problemId: 0,
    }
  }

  changeState = () => {
    this.setState({
      allCards: !this.state.allCards
    })
    console.log('Clicked')
  }

  topicChangeHandler = (newTopic) => {
    this.setState({
      allCards: false,
      isTopic: true,
      topic: newTopic,
    })
  }

  problemHandler = (newProblemId) => {
    this.setState({
      problemId: newProblemId
    })
  }

  render() {
    return (
      <div className="App">
        <div className="bag-img">
          <img src="https://www.unseenopp.com/wp-content/uploads/2019/01/faangstocks2.png" alt="Background_image"/>
        </div>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <TopicPage changeTopic={this.topicChangeHandler}/>
          </Route>
          <Route path="/topic">
            <TopicTutorials name={this.state.topic} problemSelect={this.problemHandler}/>
          </Route>
          <Route path="/problem">
            <ProblemDesc className="problem" problemId={this.state.problemId}/>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
