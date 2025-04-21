import { useRemoteJson } from "hooks";

import * as Styled from "./styled";
import { PageContainer } from "components";

import type { RemoteBoardList } from "types";

export default function Board() {
  const [board] = useRemoteJson<RemoteBoardList>(
    process.env.REACT_APP_BOARD_FILE_NAME,
    []
  );

  return (
    <PageContainer>
      {board?.map((item: any) => (
        <Styled.BoardNewsItemContainer key={item.title}>
          <Styled.BoardNewsTitle>{item.title}</Styled.BoardNewsTitle>
          <Styled.BoardNewsDescription>
            {item.description}
          </Styled.BoardNewsDescription>
        </Styled.BoardNewsItemContainer>
      ))}
    </PageContainer>
  );
}
