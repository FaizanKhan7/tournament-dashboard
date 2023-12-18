// PlayerList.jsx
import React from 'react';
import EditablePlayerDetails from '../EditablePlayerDetails/EditablePlayerDetails';
import { Player } from '../../../types';

interface PlayerListProps {
    player: Player[];
  }
  
const PlayerList: React.FC<PlayerListProps>  = ({ player }) => {
  return (
    <ul>
        <li>John</li>
        <li>Jane</li>
        {/* <EditablePlayerDetails player={player}/> */}
    </ul>
  );
};

export default PlayerList;
