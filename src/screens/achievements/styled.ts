import styled from "styled-components";

export const AchievementsItemContainer = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid ${(props) => props.theme.separatorColor};
  color: ${(props) => props.theme.mainFontColor};
`;

export const AchievementsTitle = styled.h2`
  margin-bottom: 5px;
  font-size: 16px;
  margin-top: 25px;
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.mainFontColor};
`;

export const AchievementsDescription = styled.p`
  margin: 0px;
  font-size: 13px;
  line-height: 20px;
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.mainFontColor};
`;

export const AchievementPlayertContainer = styled.div`
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.mainFontColor};
  font-size: 12px;
  padding-left: 10px;
  margin-bottom: 3px;
`;

export const AchievementSeparator = styled.div`
  width: 50%;
  margin-top: 10px;
  margin-bottom: 10px;
  border-bottom: ${(props) => props.theme.separatorColor} 1px dashed;
`;

export const AchievementPlayerDate = styled.small`
  margin-right: 5px;
`;

export const AchievementPlayerName = styled.small``;

export const NoPlayersAchievement = styled.h4`
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.mutedFontColor};
  font-size: 12px;
  margin: 0px;
`;
