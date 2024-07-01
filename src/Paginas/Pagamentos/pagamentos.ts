import styled from "styled-components";
export const Container = styled.div.attrs({ className: "container" })`
  @import url("https://fonts.googleapis.com/css2?family=Biryani:wght@200;300;400;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

  section {
    height: 100vh;
    display: flex;
    flex-direction: column;
    width: 83vw;
    width: -webkit-fill-available !important;
  }

  section > h1 {
    width: 80%;
    margin: 40px auto;
    padding: 20px;
    text-align: center;
    font-size: 2.4em;
    color: #fff;
    background-color: #005a8d;
    border-radius: 20px;
    box-shadow: 1px 1px 3px #00000074;
  }

  section #itens {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
    text-align: center;
    margin: 20px 0;
  }

  section #itens div {
    padding: 10px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 1px 3px 5px #00000059;
    margin: 5px;
    width: 230px;
  }

  section #itens div h2 {
    font-size: 1.1em;
  }

  section #itens div p {
    font-size: 1.9em;
    font-weight: bold;
  }

  #tabela {
    max-width: 1700px;
    width: 95%;
    max-height: 610px;
    height: 50%;
    padding: 30px;
    margin: auto;
    background-color: #fff;
    border-radius: 25px;
  }

  #tabela > header {
    text-align: center;
  }

  #tabela > main > header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    margin: 40px 0;
    background-color: #f3f6f9;
    border-radius: 10px;
  }

  #tabela input[type="month"] {
    padding: 10px;
    color: #087dbf;
    border: 2px solid #f38342;
    border-radius: 10px;
  }

  #tabela main > ul {
    list-style: none;
  }

  #tabela main > ul > li {
    display: flex;
    justify-content: space-around;
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #c6d8db;
  }

  .Nome,
  .Id,
  .DataPag,
  .Valor {
    text-align: center;
    width: 25%;
  }

  .Nome {
    text-align: left;
  }

  #card {
    position: absolute;
    max-width: 1000px;
    width: 80vw;
    background-color: #ecf3fb;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    z-index: 2;
  }

  #cardBackground {
    content: "";
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    position: absolute;
    background-color: #00000060;
    z-index: 1;
  }

  #card h2 {
    width: 95%;
    margin: 20px auto;
    padding: 20px;
    font-size: 2em;
    color: #fff;
    text-align: center;
    background-color: #005a8d;
    border-radius: 10px;
  }

  #card > div:first-of-type {
    width: 200px;
    padding: 10px;
    margin: 20px;
    text-align: center;
    border-radius: 10px;
    background-color: #fff;
  }

  #card > div:first-of-type h3 {
    color: #005a8d;
    font-size: 1.35em;
  }

  #card > div:first-of-type p {
    color: #005a8d;
    font-size: 1.25em;
    font-weight: 600;
  }

  #card > div:last-of-type {
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    gap: 5px;
  }

  #card > div:last-of-type p {
    font-size: 1.1em;
    padding: 7px;
    background-color: #fff;
    border-radius: 10px;
  }

  #card > div:last-of-type p:first-of-type {
    width: 70%;
  }

  #card > div:last-of-type p:last-of-type {
    text-align: center;
    width: 30%;
  }

  #card li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    gap: 10px;
    width: 95%;
    background-color: #fff;
    margin: 20px auto;
    padding: 5px 20px;
    border-radius: 10px;
  }

  #card li > p {
    font-size: 1.3em;
  }

  #card > button {
    float: right;
    margin: 20px;
    padding: 5px 25px;
    font-size: 1.5em;
    font-weight: 700;
    color: #fff;
    border: 0;
    border-radius: 5px;
    background-color: #f38342;
    cursor: pointer;
  }

  .ativado {
    display: none !important;
  }
`;
