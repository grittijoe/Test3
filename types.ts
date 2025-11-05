export interface Team {
  id: number;
  name: string;
  budget?: number;
}

export interface Group {
  id: number;
  name: string;
  teams: Team[];
}
