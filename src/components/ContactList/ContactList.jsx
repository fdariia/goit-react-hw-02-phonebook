const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({id, name, number}) => (
      <li key={id}>
        <span>{name}</span>
        <span>{number}</span>
        <button onClick={()=>onDeleteContact(id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default ContactList;