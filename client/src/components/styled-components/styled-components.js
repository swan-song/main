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
  transition: 200ms ease;

  &:hover {
    color: ${(props) => (props.light ? "black" : "white")};
    background: ${(props) => (props.light ? "white" : "black")};
  }

  @media (min-width: 992px) {
    height: ${(props) => (props.light ? "4rem" : "")};
    width: ${(props) => (props.light ? "25rem" : "")};
    font-size: ${(props) => (props.light ? "20px" : "")};
  }

  border: ${(props) => (props.dark ? "3px solid black" : "")};

  @media (min-width: 992px) {
    height: ${(props) => (props.dark ? "4rem" : "")};
    width: ${(props) => (props.dark ? "25rem" : "")};
    font-size: ${(props) => (props.dark ? "20px" : "")};
  }

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
  margin-top: 1rem;

  color: ${(props) => (props.light ? "white" : "")};
  text-shadow: ${(props) => (props.light ? "black 1px 0 10px" : "")};

  color: ${(props) => (props.dark ? "black" : "")};
  text-shadow: ${(props) => (props.dark ? "white 1px 0 10px" : "")};
`;

export const SubHeader = styled.h2`
  margin-left: auto;
  margin-right: auto;

  font-weight: ${(props) => (props.light ? "bold" : "")};
  color: ${(props) => (props.light ? "white" : "")};
  text-shadow: ${(props) => (props.light ? "black 1px 0 10px" : "")};
  background: ${(props) => (props.light ? "rgba(0, 0, 0, 0.5)" : "")};

  @media (min-width: 600px) {
    width: ${(props) => (props.light ? "30rem" : "")};
  }

  @media (min-width: 800px) {
    width: ${(props) => (props.light ? "35rem" : "")};
    background: ${(props) => (props.light ? "none" : "")};
  }

  @media (min-width: 1000px) {
    width: ${(props) => (props.light ? "40rem" : "")};
  }

  @media (min-width: 1200px) {
    width: ${(props) => (props.light ? "75%" : "")};
  }

  @media (min-width: 1500px) {
    padding-top: ${(props) => (props.light ? "3rem" : "")};
  }

  font-weight: ${(props) => (props.dark ? "bold" : "")};
  color: ${(props) => (props.dark ? "black" : "")};
  text-shadow: ${(props) => (props.dark ? "white 1px 0 10px" : "")};
  background: ${(props) => (props.dark ? "rgba(248, 248, 248, 0.6)" : "")};

  @media (min-width: 600px) {
    width: ${(props) => (props.dark ? "30rem" : "")};
  }

  @media (min-width: 800px) {
    width: ${(props) => (props.dark ? "35rem" : "")};
    background: ${(props) => (props.dark ? "none" : "")};
  }

  @media (min-width: 1000) {
    width: ${(props) => (props.dark ? "40rem" : "")};
  }

  @media (min-width: 1200px) {
    width: ${(props) => (props.dark ? "75%" : "")};
  }

  @media (min-width: 1500px) {
    padding-top: ${(props) => (props.dark ? "3rem" : "")};
  }
`;

export const Info = styled.p`
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;

  color: ${(props) => (props.light ? "white" : "")};
  font-weight: ${(props) => (props.light ? "bold" : "")};
  font-size: ${(props) => (props.light ? "20px" : "")};
  text-shadow: ${(props) => (props.light ? "black 1px 0 10px" : "")};
  background: ${(props) => (props.light ? "rgba(0, 0, 0, 0.5)" : "")};

  @media (min-width: 600px) {
    width: ${(props) => (props.light ? "75%" : "")};
  }

  @media (min-width: 800px) {
    width: ${(props) => (props.light ? "65%" : "")};
    font-size: ${(props) => (props.light ? "20px" : "")};
  }

  @media (min-width: 1000px) {
    width: ${(props) => (props.light ? "55%" : "")};
    font-size: ${(props) => (props.light ? "24px" : "")};
  }

  color: ${(props) => (props.dark ? "black" : "")};
  font-weight: ${(props) => (props.dark ? "bold" : "")};
  font-size: ${(props) => (props.dark ? "20px" : "")};
  text-shadow: ${(props) => (props.dark ? "white 1px 0 10px" : "")};
  background: ${(props) => (props.dark ? "rgba(248, 248, 248, 0.6)" : "")};

  @media (min-width: 600px) {
    width: ${(props) => (props.dark ? "75%" : "")};
  }

  @media (min-width: 800px) {
    width: ${(props) => (props.dark ? "65%" : "")};
    font-size: ${(props) => (props.dark ? "20px" : "")};
  }

  @media (min-width: 1000px) {
    width: ${(props) => (props.dark ? "55%" : "")};
    font-size: ${(props) => (props.dark ? "24px" : "")};
  }
`;

export const Input = styled.input``;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;

  height: ${(props) => (props.image ? "25rem" : "")};
  width: ${(props) => (props.image ? "100vw" : "")};
  margin-bottom: ${(props) => (props.image ? "2rem" : "")};

  @media (min-width: 480px) {
    height: ${(props) => (props.image ? "30rem" : "")};
    width: ${(props) => (props.image ? "auto" : "")};
  }

  @media (min-width: 580px) {
    height: ${(props) => (props.image ? "35rem" : "")};
  }

  @media (min-width: 630px) {
    // height: ${(props) => (props.image ? "auto" : "")};
    width: ${(props) => (props.image ? "75vw" : "")};
  }

  @media (min-width: 860px) {
    height: ${(props) => (props.image ? "auto" : "")};
    width: ${(props) => (props.image ? "75%" : "")};
  }

  width: ${(props) => (props.info ? "80vw" : "")};

  @media (min-width: 630px) {
    width: ${(props) => (props.info ? "70%" : "")};
  }

  @media (min-width: 860px) {
    width: ${(props) => (props.info ? "60%" : "")};
  }

  @media (min-width: 1000px) {
    width: ${(props) => (props.info ? "40rem" : "")};
  }

  margin-bottom: ${(props) => (props.car ? "2rem" : "")};
  border-bottom: ${(props) => (props.car ? "1px lightgray solid" : "")};
  padding-bottom: ${(props) => (props.car ? "2rem" : "")};

  @media (max-width: 400px) {
    height: ${(props) => (props.car ? "30rem" : "")};
    width: ${(props) => (props.car ? "100%" : "")};
  }

  @media (min-width: 630px) {
    height: ${(props) => (props.car ? "35rem" : "")};
    width: ${(props) => (props.car ? "75%" : "")};
  }

  @media (min-width: 730px) {
    height: ${(props) => (props.car ? "40rem" : "")};
  }

  @media (min-width: 860px) {
    height: ${(props) => (props.car ? "45rem" : "")};
    width: ${(props) => (props.car ? "45rem" : "")};
  }

  @media (min-width: 1600px) {
    display: ${(props) => (props.garage ? "grid" : "")};
    grid-template-columns: ${(props) => (props.garage ? "1fr 1fr" : "")};
    height: ${(props) => (props.garage ? "auto" : "")};
    width: ${(props) => (props.garage ? "80vw" : "")};
  }

  display: ${(props) => (props.home ? "" : "flex")};
  flex-direction: ${(props) => (props.home ? "" : "column")};
  justify-content: ${(props) => (props.home ? "" : "center")};
  place-items: ${(props) => (props.home ? "center" : "")};
  height: ${(props) => (props.home ? "25rem" : "")};

  @media (min-width: 800px) {
    height: ${(props) => (props.home ? "35rem" : "")};
  }

  @media (min-width: 1000px) {
    height: ${(props) => (props.home ? "45rem" : "")};
  }

  @media (min-width: 1200px) {
    width: ${(props) => (props.home ? "75vw" : "")};
  }

  display: ${(props) => (props.banner ? "grid" : "flex")};
  grid-template-rows: ${(props) => (props.banner ? "3fr 1fr" : "")};
  height: ${(props) => (props.banner ? "100%" : "")};
  width: ${(props) => (props.banner ? "100vw" : "")};
  padding: ${(props) => (props.banner ? "1rem 0 1rem 0" : "")};
  background: ${(props) =>
    props.banner ? "url(https://bit.ly/3cXK5ib) center" : ""};
  background-size: ${(props) => (props.banner ? "cover" : "")};

  background: ${(props) =>
    props.bannerTwo ? "url(https://bit.ly/2SIA6GD) center" : ""};
  background-size: ${(props) => (props.bannerTwo ? "cover" : "")};

  background: ${(props) =>
    props.bannerThree ? "url(https://bit.ly/3xS7LfA) center" : ""};
  background-size: ${(props) => (props.bannerThree ? "cover" : "")};

  background: ${(props) =>
    props.bannerFour ? "url(https://bit.ly/3j6zTI1) center" : ""};
  background-size: ${(props) => (props.bannerFour ? "cover" : "")};

  background: ${(props) =>
    props.bannerFive ? "url(https://cnn.it/3vPkVbY) center" : ""};
  background-size: ${(props) => (props.bannerFive ? "cover" : "")};

  background: ${(props) =>
    props.error ? "url(https://bit.ly/3h0vX8W) center" : ""};
  background-size: ${(props) => (props.error ? "cover" : "")};

  margin-top: ${(props) => (props.footer ? "6rem" : "")};
`;
