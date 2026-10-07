# ✊ Pedra, Papel e Tesoura

Um jogo de **Pedra, Papel e Tesoura** desenvolvido com **HTML, CSS e JavaScript**, criado com o objetivo de praticar lógica de programação, manipulação do DOM e interação com o usuário.

## 📌 Sobre o projeto

O jogador escolhe entre **Pedra**, **Papel** ou **Tesoura**, enquanto o computador realiza uma escolha aleatória.

Após as escolhas, o sistema compara os resultados e informa se o jogador **venceu, perdeu ou empatou**.

O projeto também possui um botão para reiniciar a partida e retornar ao estado inicial.

## 🎮 Como jogar

1. Escolha uma das opções:
   - 🪨 Pedra
   - 📄 Papel
   - ✂️ Tesoura

2. O computador fará uma escolha automaticamente.

3. O jogo compara as duas escolhas.

4. O resultado será exibido na tela:
   - 🏆 Você ganhou;
   - 😐 Empate;
   - 🤖 Você perdeu.

## ✨ Funcionalidades

- 🪨 Escolha entre Pedra, Papel e Tesoura;
- 🤖 Escolha aleatória do computador;
- 🏆 Identificação automática do vencedor;
- 😐 Tratamento de empate;
- 📢 Exibição do resultado na interface;
- 🔄 Botão para reiniciar a partida.

As opções do computador são armazenadas em um array e selecionadas aleatoriamente utilizando `Math.random()`.

## 🧠 Lógica do jogo

A função `determinarVencedor()` recebe a escolha do usuário e a escolha do computador e verifica as possibilidades do jogo.

As regras implementadas são:

```text
Pedra vence Tesoura
Tesoura vence Papel
Papel vence Pedra
```

Caso as duas escolhas sejam iguais, o resultado é considerado empate.

## 🛠️ Tecnologias utilizadas

| Tecnologia | Utilização |
|---|---|
| **HTML5** | Estrutura da aplicação |
| **CSS3** | Estilização e layout |
| **JavaScript** | Lógica do jogo e interação |

## 📚 Conceitos praticados

Este projeto foi desenvolvido para praticar conceitos fundamentais de JavaScript, como:

- Variáveis;
- Arrays;
- Funções;
- Estruturas condicionais `if / else`;
- Eventos de clique;
- `Math.random()`;
- Manipulação do DOM;
- `querySelectorAll()`;
- `getElementById()`;
- Alteração de conteúdo com `innerHTML`;
- Controle de elementos com `style.display`.

Os botões do jogo são identificados através do DOM e recebem eventos de clique para iniciar cada rodada.

## 🔄 Reiniciar o jogo

Após uma rodada, o botão de reinício é exibido. Ao clicar nele, o resultado anterior é removido e a interface retorna para a mensagem inicial.

```text
Faça sua escolha para começar!
```



## 📂 Estrutura do projeto

```text
pedra-papel-tesoura/
│
├── index.html
├── style.css
├── script.js
│
└── images/
    └── ...
```

> A estrutura da pasta `images` pode variar de acordo com os recursos visuais utilizados no projeto.

## ⚙️ Como executar

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/pedra-papel-tesoura.git
```

### 2. Acesse a pasta

```bash
cd pedra-papel-tesoura
```

### 3. Execute o projeto

Abra o arquivo:

```text
index.html
```

Você também pode utilizar a extensão **Live Server** no Visual Studio Code para executar o projeto localmente.

## 🚀 Possíveis melhorias

Como evolução do projeto, algumas funcionalidades podem ser adicionadas:

- 📊 Placar de vitórias e derrotas;
- 🏆 Sistema de pontuação;
- 🔢 Número de rodadas;
- 🔊 Efeitos sonoros;
- ✨ Animações durante as jogadas;
- 📱 Melhor adaptação para dispositivos móveis;
- 🎨 Melhorias na interface;
- 🥇 Registro do maior número de vitórias.

## 🎯 Objetivo de aprendizagem

O principal objetivo deste projeto é praticar a construção de uma aplicação web interativa utilizando **JavaScript**, aplicando lógica de programação e manipulação de elementos HTML através do DOM.

## 👨‍💻 Autor

**Rafael Morbach**

Projeto desenvolvido para fins de estudo e prática em desenvolvimento web.