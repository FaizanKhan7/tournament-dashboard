// EditablePlayerDetails.jsx
import React, { useState } from 'react';
import { Player } from '../../../types';

interface EditablePlayerDetailsProps {
    player: Player;
  }
  
  const EditablePlayerDetails: React.FC<EditablePlayerDetailsProps> = ({ player }) => {
    const [editedName, setEditedName] = useState(player.name);
    const [editedAge, setEditedAge] = useState(player.age);
  
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setEditedName(e.target.value);
  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => setEditedAge(Number(e.target.value));

  return (
    <div>
      <input type="text" value={editedName} onChange={handleNameChange} />
      <input type="number" value={editedAge} onChange={handleAgeChange} />
      <button onClick={() => {}}>
        Save
      </button>
    </div>
  );
};

export default EditablePlayerDetails;
