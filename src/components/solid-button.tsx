import styled from "styled-components";

type SolidButtonProps = {
  block: boolean;
  flat?: boolean;
  responsiveGrow?: boolean;
};

const SolidButton = styled.button<SolidButtonProps>`
  background-color: ${(props) => props.theme.solidBtnBgColor};
  border: 1px solid ${(props) => props.theme.solidBtnBorder};
  text-align: center;
  padding: 10px 15px;
  ${(props) => !props.flat && "border-radius: 5px;"}
  ${(props) => props.block && "width: 100%;"}
  outline: none;
  cursor: pointer;
  color: ${(props) => props.theme.solidBtnFontColor};
  white-space: nowrap;
  &:hover {
    opacity: 0.6;
  }
  @media only screen and (max-width: 600px) {
    ${(props) => props.responsiveGrow && "width: 100%"}
  }
`;

export default SolidButton;
