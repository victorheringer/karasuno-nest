import { useState } from "react";
import * as Styled from "./styled";
import { useStorage } from "hooks";
import { Screens } from "enums";

function generateTeams(jogadores: Player[]): [Player[], Player[]] {
  const shuffle = [...jogadores].sort(() => Math.random() - 0.5);

  const center = Math.ceil(shuffle.length / 2);
  const teamA = shuffle.slice(0, center);
  const teamB = shuffle.slice(center);

  return [teamA, teamB];
}

const DEFAULT_TEAMS = {
  teamA: [],
  teamB: [],
};

export default function Home() {
  const { players } = useStorage(Screens.HOME);
  const [teams, setTeams] = useState<{ teamA: Player[]; teamB: Player[] }>(
    DEFAULT_TEAMS
  );
  const [availablePlayers, setAvailablePlayer] = useState<string[]>([]);

  return (
    <Styled.Container>
      <h1>Home</h1>

      <h3>Time 1</h3>

      {teams.teamA.map(({ name }) => (
        <p>{name}</p>
      ))}

      <h3>Time 2</h3>
      {teams.teamB.map(({ name }) => (
        <p>{name}</p>
      ))}

      <button
        onClick={() => {
          const [teamA, teamB] = generateTeams(
            players.filter((p) => availablePlayers.includes(p.id))
          );

          setTeams({ teamA, teamB });
          setAvailablePlayer([]);
        }}
      >
        Sort
      </button>
      <button
        onClick={() => {
          setTeams(DEFAULT_TEAMS);
        }}
      >
        Clean
      </button>
      <hr />
      {players?.map((player) => (
        <>
          <p>{player.name}</p>
          {availablePlayers.includes(player.id) && <p>adicionado</p>}
          <button
            onClick={() => setAvailablePlayer((prev) => [...prev, player.id])}
            disabled={availablePlayers.includes(player.id)}
          >
            add
          </button>
        </>
      ))}
    </Styled.Container>
  );
}
