import PropTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ value, onChange }) => {
  return (
    <label className={css.label}>
      Find contacts by name
      <input
        className={css.input}
        onChange={onChange}
        value={value}
        type="text"
        name="filter"
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
