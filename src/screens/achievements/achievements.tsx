import { useState, useEffect } from "react";
import { useStorage } from "hooks";
import { Screens } from "enums";
import achievementsData from "../../data/achievements.json";

import {
  InputText,
  SolidButton,
  Wrapper,
  List,
  ListItem,
  Float,
  TextBox,
} from "components";

import * as Styled from "./styled";

function searchPlayer(data: any, name: any) {
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
  const [achievements, setAchievements] = useState(achievementsData);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const filteredAchievements = searchPlayer(achievementsData, inputValue);
    setAchievements(filteredAchievements);
  }, [inputValue]);

  return (
    <Wrapper mt={20}>
      <InputText
        placeholder={text.searchPlayerPlaceholder}
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />

      {achievements.map((achievement) => (
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
    </Wrapper>
  );
}
