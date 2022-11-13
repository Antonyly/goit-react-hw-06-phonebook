import PropTypes from 'prop-types';
import s from '../ContactForm/ContactForm.module.css';

export const Filter = ({ value, onChange }) => {
  return (
    <div>
      <label className={s.label}>
        Find contacts by name
        <input
          value={value}
          type="text"
          onChange={onChange}
          className={s.input}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;