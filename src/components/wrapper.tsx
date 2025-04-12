import styled from "styled-components";

type WrapperProps = {
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  inline?: boolean;
};

const Wrapper = styled.div<WrapperProps>`
  margin-top: ${(props) => (props.mt ? `${props.mt}px` : "0")};
  margin-bottom: ${(props) => (props.mb ? `${props.mb}px` : "0")};
  margin-left: ${(props) => (props.ml ? `${props.ml}px` : "0")};
  margin-right: ${(props) => (props.mr ? `${props.mr}px` : "0")};
  display: ${(props) => (props.inline ? "inline-block" : "block")};
`;

export default Wrapper;
