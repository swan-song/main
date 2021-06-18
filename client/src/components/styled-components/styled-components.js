import styled from "styled-components";

export const Button = styled.button`
  width: ${(props) => (props.details ? "60%" : "")};
  margin-left: auto;
  margin-right: auto;
`;

export const Image = styled.img`
  max-height: auto;
  max-width: 100%;
`;

export const Header = styled.h1``;

export const Info = styled.p``;

export const Input = styled.input``;

export const Container = styled.div`
  height: ${(props) => (props.image ? "20rem" : "")};
  width: ${(props) => (props.image ? "100vw" : "")};
  width: ${(props) => (props.info ? "80vw" : "")};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${(props) => (props.car ? "2rem" : "")};
  border-bottom: ${(props) => (props.car ? "1px lightgray solid" : "")};
  padding-bottom: ${(props) => (props.car ? "2rem" : "")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`;
