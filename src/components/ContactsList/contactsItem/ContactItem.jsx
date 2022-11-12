import { memo } from 'react';
import PropTypes from 'prop-types';
import s from './contactItem.module.css';

export const ContactItem = ({ name, number, onClick }) => {
  return (
    <li className={s.item}>
        <p className={s.type}>{name} : {number}</p>
      {
          <button
            className={s.button}
                  type="button"
                  
            onClick={onClick}
          >
            Delete
          </button>
        }
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default memo(ContactItem);