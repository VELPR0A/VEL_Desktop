import styled from "styled-components"
export const Container = styled.div.attrs({className: 'container'})`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Biryani:wght@200;300;400;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

.container * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
}

.blue{
  color: #0785D2;
}

.pointer{cursor: pointer;}

.container > div{
  width: 100%;
  font-family: "Roboto", sans-serif;
  overflow-x: hidden;
}


 nav{
    background-color: #fff;
    width: 100%;
    height: 71px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;
 }

 .logo {
    background-image: url('/images/logo.png');
    background-repeat: repeat;
    background-size: cover;
    background-position: center;
    width: 400px;
    height: 100px; 
 }

.ul
{
    display: flex;
    align-items: center;
}

.ul li
{
    margin: 0 30px;
    font-size: 1.35em;
}

.ul li a
{
    color: var(--branco);
}

.Login {
    font-size: 0.8em;
    color: #222;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    cursor: pointer;
    position: relative;
    border: none;
    background: none;
    text-transform: uppercase;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: color;
  }
  
  .login:focus, .Login:hover {
    color: #222;
  }
  
.Login:focus:after, .Login:hover:after {
    width: 100%;
    left: 0%;
  }
  
  .Login:after {
    content: "";
    pointer-events: none;
    bottom: -2px;
    left: 50%;
    position: absolute;
    width: 0%;
    height: 2px;
    background-color: #F38342;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: width, left;
  }

  /*Botão Cadastro*/
.Cadastro {
    --primary-color: #F38342;
    --secondary-color: #fff;
    --hover-color: #d9d9d9;
    --arrow-width: 10px;
    --arrow-stroke: 2px;
    box-sizing: border-box;
    border: 0;
    border-radius: 10px;
    color: var(--secondary-color);
    padding: 1em 1.8em;
    background: var(--primary-color);
    display: flex;
    transition: 0.2s background;
    align-items: center;
    gap: 0.6em;
    font-weight: bold;
    font-size: 1em;
    cursor: pointer;
  }
  
  .Cadastro .arrow-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .Cadastro .arrow {
    margin-top: 1px;
    width: var(--arrow-width);
    background: var(--primary-color);
    height: var(--arrow-stroke);
    position: relative;
    transition: 0.2s;
  }
  
  .Cadastro .arrow::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    border: solid var(--secondary-color);
    border-width: 0 var(--arrow-stroke) var(--arrow-stroke) 0;
    display: inline-block;
    top: -3px;
    right: 3px;
    transition: 0.2s;
    padding: 3px;
    transform: rotate(-45deg);
  }
  
  .Cadastro:hover {
    background-color: var(--hover-color);
  }
  
  .Cadastro:hover .arrow {
    background: var(--secondary-color);
  }
  
  .Cadastro:hover .arrow:before {
    right: 0;
  }

  /*Video*/
  .Video {
    width: 100%;
    height: 694px; /* Ajuste conforme necessário */
    background-image: url('/images/videos/altaQualidade.gif');
    background-size: cover; /* Para cobrir toda a área da div */
    background-repeat: no-repeat;
    background-position: center center;
    position: relative;
  }

.Video .conteudo {
    height: 100%;
    width: 100%;
    background-color: #33333380;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 54px;
}

.conteudo h1 {
  font-size: 2.5em;
  color: #fff;
  font-weight: bolder;
  margin-bottom: 40px;
}

.conteudo h2 {
  font-size: 1.5em;
  color: #fff;
  font-weight: 500;
  margin-bottom:40px;
}

.torneProdutividade {
  background-color: #F38342;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1em;
}

  /* Frase diga adeu as comandas de papel */
  .Frase {
    width: 100%;
    height: 280px;
    background-color: #005A8D;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: "Roboto", sans-serif;
    flex-direction: column;
    gap: 30px;
  }

  h1{
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 6px;
  }

p{
    text-align: center;
    font-size: 29px;
}


/*Simplificando suas entregas*/
.solution-description {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: 76px;
    margin-bottom: 100px;
  }

  .simplificando{
    font-size: 42px;
    font-weight: bold;
    font-family: "Roboto", sans-serif;
    margin-top: 20px;
  }

  .um{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 50px;
  }

.imgNotebook {
  width: 95%;
  max-width: 700px;
}

  /* App.css */
.app-container {
    display: flex;
    flex-direction: column;
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  .solution-description h2 {
    color: #333;
    text-align: center;
  }
  
  .solution-description .highlight {
    color: #F38342;
  }
  
  .solution-description p {
    color: #555;
    line-height: 1.6;
    text-align: center;
    font-size: 20px;
    width: 100%;
    max-width: 674px;
  }
  
  .dois{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
  }


  #avaliacoes{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 100px 0;
  }

  #avaliacoes .avaliacao{
    width: 80%;
    max-width: 900px;
    padding: 20px 80px;
    color: #fff;
    font-family: "Poppins";
    background-color: #005A8D;
    border-radius: 20px;
  }

  .avaliacao p{
    font-size: 1.6em;
  }

  .avaliacao > div{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
    margin-top: 50px;
  }

  .avaliacao > div img{
    border-radius: 50%;
  }

  .avaliacao div div{
    display: flex;
    flex-direction: column;
  }

  .starB{color: #000;}
  .starW{color: #fff;}

  /*Funcionalidades*/
  .Funcionalidades {
    width: 100%;
    padding: 20px;
    background-color: #F3F0ED;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 90px;
    text-align: center;
  }

  .Funcionalidades p {
    font-size: 14px;
    font-weight: bold;
    color: #F38342;
  }

  .Funcionalidades h1 {
    font-size: 40px;
    font-weight: 300;
    color: #F38342;
  }

  .Func {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 100px;
  }

  .facilUsabilidade { 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
  }

  .usabilidade {
    background-image: url('/images/icons/usabilidade.png');
    background-repeat: repeat;
    background-size: cover;
    background-position: center;
    width: 100px;
    height: 100px;
  }

  .gestaoSimplificada { 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
  }

  .gestao {
    background-image: url('/images/icons/gestao-da-informacao.png');
    background-repeat: repeat;
    background-size: cover;
    background-position: center;
    width: 100px;
    height: 100px;
  }

  .gerenciamentoComandas { 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
  }

  .Comandas {
    background-image: url('/images/icons/fatura.png');
    background-repeat: repeat;
    background-size: cover;
    background-position: center;
    width: 100px;
    height: 100px;
  }

  .Financeiro { 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
  }

  .educacao {
    background-image: url('/images/icons/cofrinho.png');
    background-repeat: repeat;
    background-size: cover;
    background-position: center;
    width: 100px;
    height: 100px;
  }


  /*Pagamentos*/
  .NossosPlanos {
    background-color: #ECF3FB;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;
    padding: 25px;
  }

  .NossosPlanos h1 {
    font-size: 52px;
    font-family: "Roboto", sans-serif;
    color: #333;
    text-align: center;
  }

  .TiposPlanos {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 50px;
  }

  .TiposPlanos p:first-of-type{
    font-size: 1.2em;
    padding: 10px;
  }


  /* DESPERTE*/

  .Desperte {
    width: 279px;
    height: 400px;
    padding: 4px;
    border-radius: 15px;
    text-align: center;
    font-family: "Roboto", sans-serif;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #000;
    background-image: linear-gradient(to top, #005A8D, #F38342);
    display: flex;
    justify-content: center;
    flex-direction: column;
    z-index: 0;
}

.Desperte:nth-of-type(3){
  background-image: linear-gradient(to bottom, #005A8D, #F38342);
}

.Desperte > div{
  position: relative;
  z-index: 2;
}

.Desperte:nth-of-type(3) > div{
  position: relative;
  top: -15px;
}

.Desperte:nth-of-type(3)::before{
  content: "Best seller";
  position: relative;
  width: 200px;
  height: 15px;
  left: 25px;
  top: -10px;
  padding: 10px;
  font-family: "Roboto", sans-serif;
  color: #fff;
  border-radius: 0 0 17px 17px;
  background-color: #005A8D;
  z-index: 3;
}

.Desperte::after{
  content: "";
  position: absolute;
  display: block;
  width: 231px;
  height: 350px;
  border-radius: 15px;
  padding: 20px;
  background-color: #ffffff;
  z-index: 0;
}

.tituloCard {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #474747;
}

.conteudoPlano {
    font-size: 15px;
    color: #666666;
    margin-bottom: 20px;
}

.precoVelho {
    text-decoration: line-through;
    color: #ff0000;
    font-size: 16px;
    margin-right: 90px;
}

.precoNovo {
    font-size: 24px;
    font-weight: bold;
    color: #333333;
    margin-bottom: 20px;
}

.buttonCard {
  background-color: #F38342;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.buttonCard:hover {
    background-color: #e6692e;
}



/* Footer */

/* Add these styles to your existing styles.css file */

footer {
  display: flex;
  flex-direction: column;
  font-family: "Biryani";
}

footer .branco{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 30px 0;
  background-color: #fff;
}

footer > .branco img{
  max-width: 200px;
}

footer > .branco a{
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
  color: #005A8D;
  font-weight: bold;
}

footer > .branco a:hover{
  color: #e6692e;
}

footer > .branco div{
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-start;
}

footer > .azul{
  display: flex;
  justify-content: space-between;
}

footer > .azul{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: #fff;
  padding: 5px 20px;
  background-color: #005A8D;
}

footer > .azul span{
  padding: 5px;
  display: flex;
  gap: 100px;
}

footer > .azul span a{
  font-size: 1.1em;
  color: #fff;
}

footer > .azul span a:hover{
  color: #e6692e;
}


footer > .azul span p{
  font-size: 1.1em;
}

@media screen and (min-width: 1070px) { 
  footer > .branco div{
    gap: 30px;
    flex-direction: row;
  }
}

@media screen and (min-width: 880px) { 
  footer > .azul{
    justify-content: space-between;
    padding: 5px 20px;
  }
}
`