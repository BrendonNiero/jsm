# 🚦 Site Institucional JSM
Este repositório contém o código-fonte do site institucional da JSM, desenvolvido para apresentar a empresa, seus serviços e mais.

# 🔗 Link do Projeto
- <a href="https://brendonniero.github.io/jsm/">Acesse o site</a>

# 🚀 Tecnologias Utilizadas
[![My Skills](https://skillicons.dev/icons?i=html,css,js,cs,dotnet,tailwind,nodejs,npm,linux)](https://skillicons.dev)

# Pré-requisitos
Certifique-se de que você tem as seguintes dependências instaladas:

.NET SDK
Node.js e npm (necessários para o TailwindCSS)

# Como Rodar o Projeto
Para rodar o projeto, você precisará de dois terminais abertos.

### Passo 1: Instalar Dependências
- No terminal, navegue até o diretório do projeto.

- Instale as dependências do TailwindCSS usando o npm:
  ``` bash
    npm install
  ```

### Passo 2: Iniciar TailwindCSS
No primeiro terminal, execute o seguinte comando para iniciar o TailwindCSS:
``` bash
  npm run watch
```
Este comando compilará o CSS conforme as mudanças que você fizer nos arquivos de estilo.

### Passo 3: Iniciar o Projeto Blazor
No segundo terminal, rode o seguinte comando para iniciar o servidor de desenvolvimento do Blazor:
``` bash
  dotnet watch run
```

# Estrutura do Projeto
- Layout/: Contém componentes de layout, como Footer.razor, MainLayout.razor e NavMenu.razor.
- Models/: Estruturas de dados usadas no projeto.
- Pages/:
   - Contém as páginas principais do site, como Home.razor, Servicos.razor, Sobre.razor e TrabalheConosco.razor.
   - Pasta Components/: Componentes auxiliares, como Contato.razor e SingleProduct.razor.
- Themes/: Inclui o arquivo de tema Theme.css com estilos personalizados.
- wwwroot/: Diretório para arquivos estáticos, incluindo subpastas css, images e o arquivo index.html.
- App.razor: Componente principal da aplicação Blazor.
- package.json: Configuração do projeto Node.js para dependências do TailwindCSS.
