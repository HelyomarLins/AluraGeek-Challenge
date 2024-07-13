# AluraGeek-challenge

Este projeto foi desenvolvido como parte de um desafio proposto pela Alura, com o objetivo de criar um e-commerce chamado "AluraGeek" a partir de um design disponibilizado no Figma. O desafio exigiu a criação de todas as funcionalidades do zero, utilizando apenas HTML, CSS e JavaScript.

## Descrição do Projeto

O AluraGeek é uma plataforma de e-commerce que permite aos usuários visualizar, adicionar e remover produtos de um catálogo. Os produtos são exibidos dinamicamente a partir de uma base de dados local (JSON), e os usuários podem adicionar novos produtos através de um formulário.

## Funcionalidades

- Exibição dinâmica dos produtos a partir de uma base de dados (JSON).
- Adição de novos produtos através de um formulário.
- Exclusão de produtos existentes.
- Armazenamento dos produtos no `localStorage` para persistência de dados.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- JSON Server (para simular uma API REST)

## Validação do Formulário

Este projeto inclui um sistema de validação para garantir que os campos do formulário sejam preenchidos corretamente antes de serem enviados. Abaixo está o código de validação utilizado no arquivo `valida.js`:

- Verificação Personalizada de URL: Adicionamos uma verificação personalizada para garantir que a URL começa com https://.
- Mensagens de Erro: Mensagens de erro personalizadas são exibidas dependendo do tipo de erro de validação.
- Eventos de Validação: Utilizamos eventos blur e invalid para verificar e impedir o envio de dados inválidos.

## Pré-requisitos

Para executar este projeto, você precisará ter o Node.js instalado em sua máquina. Além disso, você precisará instalar o JSON Server.
