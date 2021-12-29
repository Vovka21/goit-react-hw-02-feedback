import React, { Component } from 'react';
import './App.css';
import FeedbackOptions from './components/feedbackOptions/FeedbackOptions';
import Statistics from './components/statistics/statistics';
import Section from './components/section/section';
import Notification from './components/notification/notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedBack = e => {
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };

  // countTotalFeedback(good, neutral, bad) {
  //   const total = good + neutral + bad;
  //   return total;
  // }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  // countPositiveFeedbackPercentage(good, neutral, bad) {
  //   const positive = (good / this.countTotalFeedback(good, neutral, bad)) * 100;
  //   return Math.round(positive);
  // }

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    const { good, neutral, bad } = this.state;
    const options = this.state;
    const total = this.countTotalFeedback;
    const positive = this.countPositiveFeedbackPercentage;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.leaveFeedBack}
          />
        </Section>
        {total(good, neutral, bad) ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positive}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}

export default App;
