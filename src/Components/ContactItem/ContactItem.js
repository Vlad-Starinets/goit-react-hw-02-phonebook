import PropTypes from "prop-types";
import css from "../ContactItem/ContactItem.module.css";

function ContactItem({ id, name, number, removeContact }) {
  return (
    <li className={css.item}>
      <p>{name}</p>: <p className={css.text}>{number}</p>
      <button
        className={css.button}
        type="button"
        onClick={() => removeContact(id)}
      >
        Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  removeContact: PropTypes.func,
};

export default ContactItem;
