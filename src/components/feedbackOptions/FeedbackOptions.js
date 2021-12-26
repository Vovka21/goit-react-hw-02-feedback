import React from 'react';
import styles from './feedBackOptions.module.css';

const FeedbackOptions = props => {
  const { options, onLeaveFeedback } = props;
  return (
    <>
      {Object.keys(options).map(name => (
        <button
          className={styles.btn}
          type="button"
          key={name}
          name={name}
          onClick={onLeaveFeedback}
        >
          {name}
        </button>
      ))}
    </>
  );
};

export default FeedbackOptions;
