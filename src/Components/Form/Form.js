import PropTypes from "prop-types";
import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import css from "../Form/Form.module.css";

class FormSubmit extends Component {
  state = {
    name: "",
    number: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const contacts = {
      id: uuidv4(),
      name: this.state.name,
      number: this.state.number,
    };
    this.props.addContact(contacts);
    this.reset();
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { title, phone } = this.props;
    const { name, number } = this.state;

    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label className={css.label}>
          <p className={css.description}>{title}</p>
          <input
            className={css.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={this.handleChange}
          />
        </label>

        <label className={css.label}>
          <p className={css.description}>{phone}</p>
          <input
            className={css.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={number}
            onChange={this.handleChange}
          />
        </label>
        <button className={css.button} type="submit">
          add contact
        </button>
      </form>
    );
  }
}

FormSubmit.propType = {
  title: PropTypes.string,
  addContact: PropTypes.func,
  phone: PropTypes.string,
};

export default FormSubmit;
