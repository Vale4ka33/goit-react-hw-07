import css from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contactContainer}>
      <div>
        <div className={css.contactItem}>
          <IoMdPerson className={css.iconPerson} />
          <span>{name}</span>
        </div>
        <div className={css.contactItem}>
          <FaPhoneAlt className={css.iconPhone} />
          <span>{number}</span>
        </div>
      </div>
      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
