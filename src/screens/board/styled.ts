import styled from "styled-components";

export const BoardNewsItemContainer = styled.div`
  padding-bottom: 20px;
  border-bottom: 1px solid ${(props) => props.theme.separatorColor};
  color: ${(props) => props.theme.mainFontColor};
`;

export const BoardNewsTitle = styled.h2`
  margin-bottom: 5px;
  font-size: 16px;
  margin-top: 25px;
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.mainFontColor};
`;

export const BoardNewsDescription = styled.p`
  margin: 0px;
  font-size: 13px;
  line-height: 20px;
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.mainFontColor};
`;
