import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

export const ContactItem = ({ id, name, number, deleteContact }) => {
  return (
    <li className={css.item}>
      {name}: {number}
      <button className={css.button} onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
