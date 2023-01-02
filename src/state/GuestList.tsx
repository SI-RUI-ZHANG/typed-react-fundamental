import React, {FC} from 'react';
import {useState} from "react";

const GuestList: FC = () => {
  const [name, setName] = useState(''); // inferred type is string
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setGuests([...guests, name]);
    setName('');
  }

  return (
    <div>
      <h3>Guest List</h3>
      <ul>
        {guests.map(guest => <li key={guest}>{guest}</li>)}
      </ul>
      <input value={name} onChange={(e) => setName(e.target.value)}/>
      <button onClick={onClick}>Add Guest</button>
    </div>
  );
};

export default GuestList;