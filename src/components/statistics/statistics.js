import React from 'react';
import PropTypes from 'prop-types';
import styles from './statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={styles.feedBackList}>
      <li className={styles.feedBackItem}>Good: {good}</li>
      <li className={styles.feedBackItem}>Neutral: {neutral}</li>
      <li className={styles.feedBackItem}>Bad: {bad}</li>
      <li className={styles.feedBackItem}>
        Total: {total(good, neutral, bad)}
      </li>
      <li className={styles.feedBackItem}>
        Positive feedback: {good ? positivePercentage(good, neutral, bad) : 0}%
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;
