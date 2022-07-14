import { useSelector,useDispatch } from 'react-redux';
import Avatar from 'react-avatar';
import contactsSelectors from '../../redux/contacts/contacts-selectors';
import {removeContact} from '../../redux/contacts/contacts-slice';
import { MdDelete} from 'react-icons/md';
import s from './TableContacts.module.css';

export const TableContacts = () => {
  const tableHeaders = ['№', 'avatar', 'name', 'age', 'status', 'option'];
  const contacts = useSelector(contactsSelectors.getContacts);
  const dispatch = useDispatch();

  return (
    <table className={s.table}>
      <thead>
        <tr>
          {tableHeaders.map(item => (
            <th key={item}>{item}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {contacts.contacts &&
          contacts.contacts.map((contact, index) => (
            <tr key={contact.id}>
              <td>{index + 1}</td>
              <td>
                <Avatar name={contact.avatar} round={true} size={40} />
              </td>
              <td>{contact.name}</td>
              <td>{contact.age}</td>
              <td>{contact.status === 'yes' ? 'online' : 'offline'}</td>
              <td>
                <button type="button" className={s.deleteBtn} onClick={()=>dispatch(removeContact(contact.id))}><MdDelete className={s.icon}/></button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
