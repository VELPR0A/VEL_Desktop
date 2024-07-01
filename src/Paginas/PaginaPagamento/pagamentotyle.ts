import styled from "styled-components"
export const Container = styled.div.attrs({className: 'container'})`
@charset "UTF-8";
@import url('https://fonts.googleapis.com/css2?family=Biryani:wght@200;300;400;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

.container{ 
    min-height: 100vh;
    width: 100%;
    background-color: #ECF3FB; 
    font-family: "Roboto";
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.container *{
    margin: 0;
    padding: 0;
}

nav > img{
    width: 100px;
}

.laranja{ color: #F38342 }

.container main{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin: 10px;
}

form h2{
    width: 100%;
    font-size: 2em;
    font-family: "Biryani";
}

form > div{
    width: 100%;
}

form > div > div{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 98%;
}

form > div > div > div{
    display: flex;
    flex-direction: column;
    width: 48%;
}

form > div > div:last-of-type > div{
    width: 99%;
}

form > div > div:last-of-type > div div{
    display: flex;
}

.container form > div > div:last-of-type > div div input[type=button]{
    width: 40%;
    max-width: 150px;
    margin-left: 10px;
    color: #fff;
    font-size: 0.9em;
    background-color: #F38342;
}

.container form div input{
    width: 100%;
    padding: 10px;
    margin: 10px 0px;
    background-color: #ECF3FB;
    border: 1px solid #000;
    border-radius: 5px;
}

.container form svg{
    font-size: 1.5em;
    vertical-align: middle;
    margin-right: 10px;
}

section{
    text-align: center;
}

section h2{
    font-size: 24px;
    text-align: left;
}

.container section > button{
    display: inline-block;
    background-color: #CADBDE;
    padding: 20px;
    width: 200px;
    margin: 10px;
    text-align: left;
    border: 0;
    border-radius: 5px;
}

section > button svg{
    font-size: 1.4em;
    color: #F38342;
}

.container section > button h3{
    margin: 10px 0;
    color: #333333;
    font-weight: 500;
    font-size: 1em;
}

section > button p{
    color: #222222;
    font-size: 0.9em;
}

aside{
    width: 100%;
}

aside h2{
    font-family: "Biryani", sans-serif;
    font-size: 1.5em;
}

aside > p:first-of-type{
    font-size: 1em;
    border-bottom: 3px solid #082D3D;
}

aside > p:first-of-type span:last-of-type{
    float: right;
}

.container aside > p:last-of-type{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.3em;
    margin: 20px 0;
}

aside > p:last-of-type span:last-of-type strong{
    font-size: 1.4em;
}

aside > div{
    text-align: center;
}

.container aside > div > div{
    width: 94%;
    margin: auto;
    padding: 20px;
    text-align: left;
    background-color: #E8E8E8;
    border: 1px solid #000;
    border-radius: 5px;
}

aside > div > div h4{
    font-size: 2em;
}

.container aside > div > div ul{
    list-style-type: none;
    margin: 15px 0;
}

.container aside > div > div li{
    margin: 10px 0;
}

aside > div > div li svg{
    color: #F38342;
}

.container aside > div > input[type=submit]{
    background-color: #F38342;
    margin: 20px 0;
    padding: 15px;
    width: 95%;
    font-size: 1.6em;
    font-weight: bold;
    color: #fff;
    border: 0px;
    border-radius: 5px;
    cursor: pointer;
}

.container footer{
    padding: 10px;
}

.container footer > p{
    display: flex;
    margin: 20px 0;
}

.container footer > p svg{
    font-size: 1.2em;
    margin: 0 5px;
}

@media screen and (min-width: 1000px) {
    .container{
        display: flex;
        align-items: center;
        overflow: hidden;
        align-items: flex-start;
    }
    
    .container main{
        flex-direction: row;
        width: 98vw;
        justify-content: space-around;
    }

    .container main article{
        padding: 20px;
        max-width: 1000px;
    }

    .container main form > div{
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    .container section h2{
        margin: 30px 0 !important;
    }

    .container form > div > div:last-of-type input[type=text]{
        max-width: 460px;
    }

    .container main aside{
        max-width: 500px;
    }
}
`