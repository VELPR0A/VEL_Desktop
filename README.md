# VEL

## Entrando no projeto pela primeira vez? Confira o passo a passo:

### Baixando o projeto

1. Localize o botão de criar um "Fork" no canto direito superior:

![image](https://github.com/VisualEasyLog/VirtualEasyLog/assets/102389309/13466bc1-dbd6-44e1-bbc8-8c82c3dbfeef)

2. Preencha o nome do seu usuário, DEMARQUE a caixinha e dê uma descrição ao fork, Exemplo: "Alteração de Diogo Antonny, fazendo as tela de pagamento, lading page e a tela de login.", em seguida clique em "create Fork" ou "Criar Fork":

![image](https://github.com/VisualEasyLog/VirtualEasyLog/assets/102389309/80814711-7ba8-4ec0-9035-048c87e2ba86)

3. Após esses passos, o ambiente será baixado em seu github:

![image](https://github.com/VisualEasyLog/VirtualEasyLog/assets/102389309/ba5c7b79-eaad-45d6-992c-8881e345d62a)

4. Escolha o seu time de trabalho/Branch:

![image](https://github.com/VisualEasyLog/VirtualEasyLog/assets/102389309/42fded7c-ac48-4e33-8ce7-9928890172f9)

5. Baixe o repositório para a sua maquina via git:

![image](https://github.com/VisualEasyLog/VirtualEasyLog/assets/102389309/e3f3b84e-e58e-4c0f-8351-c379828b27e0)

### Como funciona a estrutura do código:

![image](https://github.com/VisualEasyLog/VirtualEasyLog/assets/102389309/d312f290-e2d4-405d-9f09-8f31fa3d31b7)

- Pasta **"Pages"**: Ficará todas as páginas html de nosso projeto (Tirando a index.html);
- Pasta **"assets"**: Ficaram os arquivos de imagens e estilos css.
- Pasta **"Paginas"**: Ficaram os componentes reacts que serão utilizados pelas as páginas html.
- Pasta **"Components"**: Ficaram os componentes reacts filhos de cada componente da pasta "Paginas".

### Como iniciar o código:

1. Abra o terminal, `Ctrl + Shift + '`

2. Digite o comando `npm run dev`, caso o ocorra um erro, certifique-se de estar dentro da pasta "ambiente", para isso utilize o comando `cd .\ambiente\`

3. No navegador escreva o seguinte link: `http://localhost:5173` 

4. Precione `Ctrl + C` para finalizar o terminal.

### Criando uma página:

1. Crie uma página html na pasta "pages" e crie a estrutura inicial dela, exemplo:

![image](https://github.com/VisualEasyLog/VirtualEasyLog/assets/102389309/54ed4560-e69e-4241-a776-1ded92a92bfd)

```html
<!doctype html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Página Exemplo</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="Link do componente na pasta 'Paginas' aqui!"></script>
  </body>
</html>
```

2. Após isso, dentro da pasta "Paginas", crie outra pasta de acordo com o nome da sua pagina html:

![image](https://github.com/VisualEasyLog/VirtualEasyLog/assets/102389309/e325a486-366b-4c49-a82d-716072deb16c)

3. Depois da ter criado a pasta, dentro dela, crie um arquivo chamado "main.jsx" com a seguinte estrutura:

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.jsx' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

4. Após isso, crie outro arquivo, na mesma pasta, com o nome de "app.jsx" com a seguinte estrutura:

```jsx
function App() {
  return (
    <>
      {/* Comece a codar por aqui! */}
    </>
  )
}

export default App;
```

#### Criando e utilizando componentes:

> Utilizando o exemplo anterior.

1. Crie uma pasta dentro de "components" de acordo com o nome da sua página:

![image](https://github.com/VisualEasyLog/VirtualEasyLog/assets/102389309/78288577-d9a3-43d6-a16e-2c77de0f7330)

2. Após isso, já é possivel criar um componente, exemplo:

![image](https://github.com/VisualEasyLog/VirtualEasyLog/assets/102389309/05d53d58-648a-4b8e-b13a-ef25b952a94e)

```jsx
export default function HelloWorld(){
    return(
        <>
            <h1>Hello World!</h1>
        </>
    )
}
```

3. Desse jeito, poderemos utilizar o componente em nosso `app.jsx`:

![image](https://github.com/VisualEasyLog/VirtualEasyLog/assets/102389309/34a2d5dc-947b-4d2a-9c2f-a9a70bec2929)

### Abrindo o arquivo no navegador:

1. localize o arquivo "app.jsx" dentro da pasta "src":

![image](https://github.com/VisualEasyLog/VirtualEasyLog/assets/102389309/0f80bc23-1d88-4825-ba8f-9c15fe581105)


2. Dentro dela, adicione o caminho/link da sua página html (Adicione a tag `<a href""></a>`):

> Neste caso adicionamos `<a href="../pages/paginaTeste.html">Tela teste aqui!</a>`

![image](https://github.com/VisualEasyLog/VirtualEasyLog/assets/102389309/5151baf8-d27f-45a8-9106-cbb2f7a828e9)

3. Depois disso, no terminal, execute o comando `npm run dev` e no navegador escreva o seguinte link: `http://localhost:5173` 

![image](https://github.com/VisualEasyLog/VirtualEasyLog/assets/102389309/a2a91373-6513-4a1a-870c-a7cc5a301739)

4. Agora basta clica no link da sua página para visualiza-la em tempo real:

![image](https://github.com/VisualEasyLog/VirtualEasyLog/assets/102389309/9e2a4b9c-0c75-4186-8ba8-1ace8b7cc7ac)

### Enviando as alterações:

1. Selecione a Branch/equipe que você deseja enviar:

![image](https://github.com/VisualEasyLog/VirtualEasyLog/assets/102389309/e2a414d3-7bb2-420d-ac15-4fea09eeb958)

2. Localize e clique no botão "Contribute", depois clique em "Open Pull Request":

![image](https://github.com/VisualEasyLog/VirtualEasyLog/assets/102389309/aff332be-dd50-40e4-990e-030501a26f7f)

3. Após isso, adicione um título e descrição e clique em "Create Pull Request":

![image](https://github.com/VisualEasyLog/VirtualEasyLog/assets/102389309/d70617a6-4bac-480b-a61d-6828eb3a2e99)
