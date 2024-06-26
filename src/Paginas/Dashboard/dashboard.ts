import styled from "styled-components"
export const Container = styled.div.attrs({className: 'container'})`
@charset "UTF-8";
@import url('https://fonts.googleapis.com/css2?family=Biryani:wght@200;300;400;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: "biryani";
}


.container1{
    display: grid;
    grid-template-rows: repeat(5, 20%);
    grid-template-columns: repeat(4, 25%);
    background-color: #ECF3FB;
    width: 83vw;
    width: -webkit-fill-available !important;
    height: 100vh;
    padding: 10px;
}

.item{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    margin: 5px;
    background-color: #fff;
    border-radius: 10px;
}

.item > main{
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.item h2{
    font-size: 2em;
    color: #404040;
}

.item h3{
    font-size: 1.2em;
    color: #7f7f7f;
}

.item h4{
    font-size: 0.9em;
    color: #7f7f7f;
}

.item h4 span{
    margin-right: 10px;
}

.En h2{
    font-size: 1.1em;
    color: #404040; 
}

.En h2 span{
    font-size: 2.1em;
}

.Graf1{
    grid-column: 1 / 3;
    grid-row: 2 / 4;
}

.Graf2{
    grid-column: 3;
    grid-row: 2 / 4;
}

.Graf1 h2, .Graf2 h2{
    font-size: 1.3em;
    color: #333333;
}

.Graf1 h3, .Graf2 h3{
    font-size: 2em;
    color: #404040;
}

.Graf1 p, .Graf2 p{
    font-size: 0.9em;
    color: #7f7f7f;
}

.Graf1 p span, .Graf2 p span{
    margin-right: 10px;
}


.Graf3{
    grid-column: 1 / 4;
    grid-row: 4 / 6;
}

.Graf1, .Graf2{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.Graf1 > .conteudo, .Graf2 > .conteudo{
    width: 100%;
    height: 100%;
}

.Graf1 > .conteudo > div, .Graf2 > .conteudo > div{
    height: 68%;
}

.Graf3 > div{
    width: 98%;
    height: 98%;
}

.ListaEn{
    grid-column: 4;
    grid-row: 2 / 6;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
}

.ListaEn h2{
    width: 100%;
    font-size: 1.1em;
    text-align: left;
}

.ListaEn ul{
    width: 100%;
    list-style-type: none;
    height: 90%;
    margin-top: 10px;
    overflow-y: hidden;
}

.ListaEn ul li{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.ListaEn ul .on::after{
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    background-color: #6BDACC;
    border-radius: 50%;
}

.ListaEn ul .off::after{
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    background-color: #2B2B36;
    border-radius: 50%;
}

.ListaEn ul li .EnID{
    color: #00aaff;
}

.ListaEn footer{
    display: flex;
}

footer div{
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 0 10px;
    font-size: 0.8em;
}

footer div:first-of-type{
    border-right: 1px solid #00000017;
}

.online::before{
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    background-color: #6BDACC;
    border-radius: 50%;
}

.offline::before{
    content: "";
    display: block;
    width: 10px;
    height: 10px;
    background-color: #2B2B36;
    border-radius: 50%;
}

#root{
    display: flex;
}

@media screen and (max-width: 1399px) {
    .container{
        grid-template-rows: repeat(6, 16.66%);
        grid-template-columns: repeat(4, 25%);
    }

    .FD{
        grid-column: 1 / 3;
        grid-row: 1;
    }

    .FS{
        grid-column: 3 / 5;
        grid-row: 1;
    }

    .TP{
        grid-column: 1 / 3;
        grid-row: 2;
    }

    .En{
        grid-column: 3 / 6;
        grid-row: 2; 
    }

    .Graf1{
        grid-column: 1 / 3;
        grid-row: 3 / 5;
    }
    
    .Graf2{
        grid-column: 3;
        grid-row: 3 / 5;
    }
    
    .Graf3{
        grid-column: 1 / 4;
        grid-row: 5 / 7;
    }
    
    .ListaEn{
        grid-column: 4;
        grid-row: 3 / 7;
    }

    .Graf1 > .conteudo > div, .Graf2 > .conteudo > div{
        height: 52%;
    }
}

@media screen and (max-width: 929px) {
    .item > main{
        gap: 0 !important;
    }

    .container{
        grid-template-rows: repeat(6, 16.66%);
        grid-template-columns: repeat(4, 25%);
    }

    .Graf2{
        grid-column: 3 / 5;
        grid-row: 3 / 5;
    }
    
    .Graf3{
        grid-column: 1 / 3;
        grid-row: 5 / 7;
    }
    
    .ListaEn{
        grid-column: 3 / 5;
        grid-row: 5 / 7;
    }
}

@media screen and (max-height: 850px) {
    .item > main{
        display: flex;
        flex-direction: column;
        gap: 0px !important;
    }

    .item .valorEn{
        font-size: 1em !important;
        color: #404040;
    }
    
    .item h2{
        font-size: 1em !important;
        color: #404040;
    }
}
`