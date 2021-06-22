import styled from "styled-components";

export const Button = styled.button`
  width: ${(props) => (props.details ? "60%" : "")};
  margin-left: auto;
  margin-right: auto;
  box-shadow: inset 0px 1px 3px 0px #91b8b3;
  background-color: black;
  border-radius: 5px;
  border: 1px solid #566963;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 11px 23px;
  text-decoration: none;
  text-shadow: 0px -1px 0px #2b665e;
  &:hover {
    background: linear-gradient(to bottom, #6c7c7c 5%, #768d87 100%);
    background-color: #6c7c7c;
  }
  :active {
    position: relative;
    top: 1px;
  }
`;

export const Image = styled.img`
  max-height: auto;
  max-width: 100%;
`;

export const Header = styled.h1`
  ${(props) => (props.home ? "color: white" : "")};
  ${(props) => (props.home ? "background: rgba(0,0,0,0.5)" : "")}
`;

export const Info = styled.p`
  ${(props) => (props.home ? "color: white" : "")};
  ${(props) => (props.home ? "font-weight: bold" : "")};
  ${(props) => (props.home ? "background: rgba(0,0,0,0.5)" : "")}
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
