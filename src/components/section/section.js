import PropTypes from 'prop-types';
import styles from './section.module.css';

const Section = props => {
  const { title = '', children } = props;
  return (
    <section className={styles.section}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
