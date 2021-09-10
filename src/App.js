import { Component } from "react";
import "./App.css";
import FormSubmit from "./Components/Form/Form";
import CreateContactList from "./Components/ContactList/ContactList";
import Filter from "./Components/Filter/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  addContact = (contact) => {
    if (!this.checkContact(contact.name)) {
      this.setState(({ contacts }) => ({
        contacts: [contact, ...contacts],
      }));
    } else {
      alert(`${contact.name} is alredy in contacts`);
    }
  };

  checkContact = (name) => {
    const { contacts } = this.state;
    return contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  filterContact = () => {
    const { filter, contacts } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  removeContact = (id) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;

    return (
      <div className="App">
        <h1 className="title">Phonebook</h1>
        <FormSubmit
          title={"Name"}
          phone={"Number"}
          addContact={this.addContact}
        />
        <Filter filter={filter} onChange={this.handleChange} />
        <CreateContactList
          filterContact={this.filterContact}
          title={"Contacts"}
          removeContact={this.removeContact}
        />
      </div>
    );
  }
}

export default App;
