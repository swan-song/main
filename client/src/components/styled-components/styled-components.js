import styled from "styled-components";

export const Button = styled.button`
  margin-left: auto;
  margin-right: auto;

  height: ${(props) => (props.light ? "3rem" : "3rem")};
  width: ${(props) => (props.light ? "21rem" : "15rem")};
  border-radius: ${(props) => (props.light ? "5rem" : "5rem")};
  border: ${(props) => (props.light ? "3px solid white" : "2px solid black")};
  color: ${(props) => (props.light ? "white" : "black")};
  background: ${(props) =>
    props.light ? "rgba(0, 0, 0, 0.5)" : "rgba(248, 248, 248, 0.5)"};

  border: ${(props) => (props.dark ? "3px solid black" : "")};

  height: ${(props) => (props.details ? "2.5rem" : "")};
  width: ${(props) => (props.details ? "10rem" : "")};

  height: ${(props) => (props.signout ? "2rem" : "")};
  width: ${(props) => (props.signout ? "8rem" : "")};
  border: ${(props) => (props.signout ? "1px solid black" : "")};
`;

export const Image = styled.img`
  max-height: auto;
  max-width: 100%;
`;

export const Header = styled.h1`
  font-weight: bold;

  color: ${(props) => (props.light ? "white" : "")};
  text-shadow: ${(props) => (props.light ? "black 1px 0 10px" : "")};

  color: ${(props) => (props.dark ? "black" : "")};
  text-shadow: ${(props) => (props.dark ? "white 1px 0 10px" : "")};
`;

export const SubHeader = styled.h2``;

export const Info = styled.p`
  color: ${(props) => (props.light ? "white" : "")};
  font-weight: ${(props) => (props.light ? "bold" : "")};
  text-shadow: ${(props) => (props.light ? "black 1px 0 10px" : "")};
  background: ${(props) => (props.light ? "rgba(0, 0, 0, 0.5)" : "")};

  color: ${(props) => (props.dark ? "black" : "")};
  font-weight: ${(props) => (props.dark ? "bold" : "")};
  text-shadow: ${(props) => (props.dark ? "white 1px 0 10px" : "")};
  background: ${(props) => (props.dark ? "rgba(248, 248, 248, 0.6)" : "")};
`;

export const Input = styled.input``;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;

  height: ${(props) => (props.image ? "20rem" : "")};
  width: ${(props) => (props.image ? "100vw" : "")};

  width: ${(props) => (props.info ? "80vw" : "")};

  margin-bottom: ${(props) => (props.car ? "2rem" : "")};
  border-bottom: ${(props) => (props.car ? "1px lightgray solid" : "")};
  padding-bottom: ${(props) => (props.car ? "2rem" : "")};

  display: ${(props) => (props.home ? "" : "flex")};
  flex-direction: ${(props) => (props.home ? "" : "column")};
  justify-content: ${(props) => (props.home ? "" : "center")};
  overflow: hidden;
  place-items: ${(props) => (props.home ? "center" : "")};
  height: ${(props) => (props.home ? "25rem" : "")};

  display: ${(props) => (props.banner ? "grid" : "flex")};
  grid-template-rows: ${(props) => (props.banner ? "3fr 1fr" : "")};
  height: ${(props) => (props.banner ? "100%" : "")};
  padding: ${(props) => (props.banner ? "1rem 0 1rem 0" : "")};
  background: ${(props) =>
    props.banner ? "url(https://bit.ly/3cXK5ib) center" : ""};
  background-size: ${(props) => (props.banner ? "cover" : "")};

  background: ${(props) =>
    props.bannerTwo ? "url(https://bit.ly/2SIA6GD) center" : ""};
  background-size: ${(props) => (props.bannerTwo ? "cover" : "")};

  background: ${(props) =>
    props.bannerThree ? "url(https://bit.ly/3zMpvuH) center" : ""};
  background-size: ${(props) => (props.bannerThree ? "cover" : "")};

  background: ${(props) =>
    props.bannerFour ? "url(https://bit.ly/3gTHLJY) center" : ""};
  background-size: ${(props) => (props.bannerFour ? "cover" : "")};

  background: ${(props) =>
    props.bannerFive ? "url(https://cnn.it/3vPkVbY) center" : ""};
  background-size: ${(props) => (props.bannerFive ? "cover" : "")};
`;
