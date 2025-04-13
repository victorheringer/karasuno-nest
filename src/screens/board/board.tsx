import { useStorage } from "hooks";
import { Screens } from "enums";

import board from "../../data/board.json";

import * as Styled from "./styled";

export default function Lobby() {
  const { storage, i18n } = useStorage(Screens.BOARD);
  const text = i18n as I18n.BoardScreen;

  return (
    <Styled.BoardContainer>
      {board?.map((item: any) => (
        <Styled.BoardNewsItemContainer key={item.title}>
          <Styled.BoardNewsTitle>{item.title}</Styled.BoardNewsTitle>
          <Styled.BoardNewsDescription>
            {item.description}
          </Styled.BoardNewsDescription>
        </Styled.BoardNewsItemContainer>
      ))}
    </Styled.BoardContainer>
  );
}
