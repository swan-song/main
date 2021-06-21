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

export const Header = styled.h1`
  ${(props) => (props.home ? "color: white" : "")}
`;

export const Info = styled.p`
  ${(props) => (props.home ? "color: white" : "")}
`;

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
  background: ${(props) =>
    props.banner ? "url(https://bit.ly/3cXK5ib) no-repeat center" : ""};
  background-size: ${(props) => (props.banner ? "cover" : "")};
  background: ${(props) =>
    props.bannerTwo ? "url(https://bit.ly/2SIA6GD) no-repeat center" : ""};
  background-size: ${(props) => (props.bannerTwo ? "cover" : "")};
  background: ${(props) =>
    props.bannerThree ? "url(https://bit.ly/3zMpvuH) no-repeat center" : ""};
  background-size: ${(props) => (props.bannerThree ? "cover" : "")};
  background: ${(props) =>
    props.bannerFour ? "url(https://bit.ly/3gTHLJY) no-repeat center" : ""};
  background-size: ${(props) => (props.bannerFour ? "cover" : "")};
  background: ${(props) =>
    props.bannerFive ? "url(https://cnn.it/3vPkVbY) no-repeat center" : ""};
  background-size: ${(props) => (props.bannerFive ? "cover" : "")};
`;
