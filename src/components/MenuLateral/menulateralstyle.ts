import styled from "styled-components";
export const Container = styled.div.attrs({ className: "container" })`
  @charset "UTF-8";
  @import url("https://fonts.googleapis.com/css2?family=Biryani:wght@200;300;400;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

  .laranja {
    color: #f38342;
  }

  .MenuLateral{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 19vw !important;
    height: 100vh;
    color: #fff;
    background-color: #005a8d;
    background-image: linear-gradient(to bottom, #005a8d, #087dbf);
  }

  .MenuLateral h1 {
    text-align: center;
    font-size: 1.5em;
    margin-top: 10px;
  }

  .MenuLateral .ToggleButton {
    position: relative;
    display: block;
    width: 100%;
    left: 90%;
    transition: all 0.5s;
  }

  .MenuLateral .ToggleButton img {
    cursor: pointer;
  }

  .MenuLateral main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .MenuLateral main .logoEmpresa {
    width: 100%;
    text-align: center;
  }

  .logoEmpresa div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .imgEmpresa {
    width: 100%;
    max-width: 100px;
  }

  .logoEmpresa div::after {
    content: "";
    display: block;
    position: relative;
    top: -25px;
    left: 30px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #0f0;
    background-image: radial-gradient(#06ef06, #01b001);
  }

  .nomeEmpresa {
    font-size: 1.4em;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .MenuLateral ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    list-style: none;
  }

  .MenuLateral ul li {
    position: relative;
  }

  .MenuLateral ul li a {
    display: flex;
    align-items: center;
  }

  .MenuLateral ul li a img {
    width: 30px;
    margin-right: 10px;
  }

  .MenuLateral ul li:nth-child(4) a img {
    width: 20px;
    margin-left: 5px !important;
  }

  .pageSelected {
    font-weight: 700;
  }

  .pageSelected::before {
    content: "";
    display: block;
    position: absolute;
    left: -30%;
    width: 15px;
    height: 50px;
    margin: -10px 0px 0px 0px;
    background-color: #32b5ff;
    animation: breath 1.5s infinite alternate-reverse;
  }

  .MenuLateral ul a {
    color: #fff;
    text-decoration: none;
    font-size: 1.2em;
    font-weight: 400;
  }

  @keyframes breath {
    from {
      background-color: #32b5ff;
    }

    to {
      background-color: #32b4ff30;
    }
  }

  .desaparecer {
    transition: all 0.5s;
    opacity: 0 !important;
  }

  .shrinkedAside {
    transition: all 1s;
    width: 170px !important;
  }

  .flip {
    transform: rotateY(175deg);
  }

  footer {
    margin-bottom: 10px;
  }
`;
