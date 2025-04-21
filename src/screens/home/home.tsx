import { useState } from "react";
import { useStorage } from "hooks";
import { Screens } from "enums";
import {
  List,
  ListItem,
  Float,
  SolidButton,
  Wrapper,
  ListTitle,
  TextBox,
  PageContainer,
} from "components";

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
  const { players, i18n } = useStorage(Screens.HOME);
  const [teams, setTeams] = useState<{ teamA: Player[]; teamB: Player[] }>(
    DEFAULT_TEAMS
  );

  const text: I18n.HomeScreen = i18n as I18n.HomeScreen;
  const [availablePlayers, setAvailablePlayer] = useState<string[]>([]);

  return (
    <PageContainer>
      {teams.teamA.length > 0 && (
        <>
          <ListTitle>{text.teamTitle} 1</ListTitle>
          <List>
            {teams.teamA.map(({ name }) => (
              <>
                <ListItem>
                  <label>{name}</label>
                </ListItem>
              </>
            ))}
          </List>
        </>
      )}

      {teams.teamB.length > 0 && (
        <>
          <ListTitle>{text.teamTitle} 2</ListTitle>
          <List>
            {teams.teamB.map(({ name }) => (
              <>
                <ListItem>
                  <label>{name}</label>
                </ListItem>
              </>
            ))}
          </List>
        </>
      )}

      <Wrapper>
        {!players?.length && <TextBox text={text.noPlayers} />}

        <Wrapper inline mr={10}>
          {!!players?.length && (
            <SolidButton
              block={false}
              onClick={() => {
                const [teamA, teamB] = generateTeams(
                  players.filter((p) => availablePlayers.includes(p.id))
                );
                setTeams({ teamA, teamB });
                setAvailablePlayer([]);
              }}
            >
              {text.sortBtn}
            </SolidButton>
          )}
        </Wrapper>
        {!!players?.length && (
          <SolidButton
            block={false}
            onClick={() => {
              setTeams(DEFAULT_TEAMS);
              setAvailablePlayer([]);
            }}
          >
            {text.clearBtn}
          </SolidButton>
        )}
      </Wrapper>

      <List>
        {players?.map((player) => (
          <>
            <ListItem>
              <label>
                {player.name}
                {availablePlayers.includes(player.id) && ` - ${text.addLabel}`}
              </label>
              <Float>
                <SolidButton
                  block={false}
                  onClick={() =>
                    setAvailablePlayer((prev) => [...prev, player.id])
                  }
                  disabled={availablePlayers.includes(player.id)}
                >
                  {text.addPlayerBtn}
                </SolidButton>
              </Float>
            </ListItem>
          </>
        ))}
      </List>
    </PageContainer>
  );
}
