import { useState } from "react";
import { useStorage, useRemoteJson } from "hooks";
import { Screens } from "enums";

import { InputText, PageContainer } from "components";

import * as Styled from "./styled";

import type { RemoteAchievementList } from "types";

function searchPlayer(data: any, name: any): RemoteAchievementList {
  if (!name) {
    return data;
  }

  return data.filter((item: any) =>
    item.players.some((jogador: any) =>
      jogador.name.toLowerCase().includes(name.toLowerCase())
    )
  );
}

export default function Achievements() {
  const { i18n } = useStorage(Screens.ACHIEVEMENTS);
  const text = i18n as I18n.AchievementsScreen;
  const [inputValue, setInputValue] = useState("");
  const [achievementsData] = useRemoteJson<RemoteAchievementList>(
    process.env.REACT_APP_ACHIEVIMENTS_FILE_NAME,
    []
  );

  return (
    <PageContainer>
      <InputText
        placeholder={text.searchPlayerPlaceholder}
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />

      {searchPlayer(achievementsData, inputValue).map((achievement) => (
        <Styled.AchievementsItemContainer key={achievement.title}>
          <Styled.AchievementsTitle>
            {achievement.title}
          </Styled.AchievementsTitle>
          <Styled.AchievementsDescription>
            {achievement.description}
          </Styled.AchievementsDescription>
          <Styled.AchievementSeparator />
          {!achievement.players.length && (
            <Styled.NoPlayersAchievement>
              Nenhum jogador alcançou esta conquista
            </Styled.NoPlayersAchievement>
          )}
          {achievement.players.map((player) => (
            <Styled.AchievementPlayertContainer>
              <Styled.AchievementPlayerDate>
                {player.date}
              </Styled.AchievementPlayerDate>
              <Styled.AchievementPlayerName>
                {player.name}
              </Styled.AchievementPlayerName>
            </Styled.AchievementPlayertContainer>
          ))}
        </Styled.AchievementsItemContainer>
      ))}
    </PageContainer>
  );
}
