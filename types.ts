// types.ts
export interface Sport {
    id: number;
    name: string;
    teams: Team[];
  }
  
  export interface Team {
    id: number;
    name: string;
    players: Player[];
  }
  
  export interface Player {
    id: number;
    name: string;
    age: number;
  }
  