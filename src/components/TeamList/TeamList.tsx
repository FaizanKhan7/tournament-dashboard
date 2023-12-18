"use client"
import React from "react";
import PlayerList from "../PlayerList/PlayerList";
import { Team } from "../../../types";

interface TeamListProps {
  teams: Team[];
}

const TeamList: React.FC<TeamListProps> =({ teams }) => {
  return (
    <ul>
        <li>Team 1</li>
        <li>Team 2</li>
        {/* {teams.map((team) => (
        <li key={team.id}>
          {team.name} - Total Players: {team.players.length}
          <PlayerList player={team.players} />
        </li>
      ))} */}
    </ul>
  );
};

export default TeamList;
