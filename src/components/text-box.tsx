import styled from "styled-components";

const Container = styled.div`
  padding: 30px 20px;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => props.theme.boxBackgroundColor};
  border: 1px solid ${(props) => props.theme.boxBorderColor};
  margin-bottom: 15px;
  border-radius: 4px;
  font-family: ${(props) => props.theme.fontFamily};
  position: relative;
  color: ${(props) => props.theme.boxFontColor};
  cursor: pointer;
`;

type BannerProps = {
  text: string;
};

export default function TextBox({ text }: BannerProps) {
  return <Container>{text}</Container>;
}
