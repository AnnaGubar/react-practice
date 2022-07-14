import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getStatus } from '../../services/statusApi';
import { addContact } from '../../redux/contacts/contacts-slice';
import {FcApproval} from 'react-icons/fc';
import s from './AddContactView.module.css';

export const AddContactView = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const id = nanoid();

  const dispatch = useDispatch();

  const handlerOnChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'age':
        return setAge(value);
      default:
        return;
    }
  };

  const handlerOnSubmit = async e => {
    e.preventDefault();

    const status = await getStatus();

    const newContact = {
      id,
      name,
      age,
      avatar:name,
      status,
    }; 

    dispatch(addContact(newContact));

    setName('');
    setAge('');
  };

  return (
    <form onSubmit={handlerOnSubmit} className={s.form}>
      <label htmlFor="nameId" className={s.label}>
        Name
      </label>
      <input
        type="text"
        value={name}
        name="name"
        id="nameId"
        onChange={handlerOnChange}
      />

      <label htmlFor="ageId" className={s.label}>
        Age
      </label>
      <input
        type="number"
        value={age}
        name="age"
        id="ageId"
        onChange={handlerOnChange}
      />

      <button type="submit" className={s.submitBtn}><FcApproval className={s.addIcon}/></button>
    </form>
  );
};
