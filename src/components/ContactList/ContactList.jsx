import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {filteredContacts.map((contactItem) => (
        <li key={contactItem.id} className={css.contactItems}>
          <Contact
            name={contactItem.name}
            number={contactItem.number}
            id={contactItem.id}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
