import { useStorage } from "hooks";
import { Screens } from "enums";

import { useBucket } from "hooks";

import * as Styled from "./styled";

export default function Lobby() {
  const { storage, i18n } = useStorage(Screens.BOARD);
  const text = i18n as I18n.BoardScreen;

  const { board } = useBucket();

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
