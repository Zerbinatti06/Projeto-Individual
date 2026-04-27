# Tamarineira 🌳🥁

![Status do Projeto](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green)
![MySQL](https://img.shields.io/badge/Database-MySQL-blue)
![Architecture](https://img.shields.io/badge/Pattern-MVC-orange)

> "Tudo nasceu sob a sombra da tamarineira..."

**Tamarineira** é uma aplicação Full-Stack imersiva que documenta a evolução rítmica, instrumental e estética do samba moderno brasileiro. Do pagode de mesa do Cacique de Ramos à explosão pop dos anos 2000, o projeto une narrativa histórica com tecnologia de ponta.

## 📖 Sobre o Projeto
O nome homenageia a árvore sagrada do bloco Cacique de Ramos, berço do grupo Fundo de Quintal. O projeto utiliza uma interface de navegação horizontal (Timeline) e transições cinematográficas para contar como o samba se transformou ao longo das décadas.

### A Jornada Histórica:
1.  **Anos 70 (O Berço):** A revolução do Fundo de Quintal e os novos instrumentos (tantã, repique de mão e banjo).
2.  **Anos 80 (A Transição):** A chegada do samba às rádios e a profissionalização do pagode.
3.  **Anos 90 (A Explosão Pop):** A era de ouro com grupos como Molejo, SPC e Art Popular.
4.  **Anos 2000 (O Legado):** O fenômeno de massa e o ápice do gênero com o Exaltasamba.

## 🛠️ Stack Tecnológica

### Frontend (Interface Imersiva)
- **Vanilla JavaScript:** Lógica de estados, controle de timeline e animações complexas.
- **CSS Avançado:** Uso de Transições dinâmicas e `Transform: Scale` para efeitos de profundidade.

### Backend (Infraestrutura Web-Data-Viz)
- **Node.js & Express:** Servidor robusto para gerenciamento de rotas e requisições.
- **Padrão MVC (Model-View-Controller):** Organização de código profissional para separação de responsabilidades.
- **MySQL:** Banco de dados relacional para persistência de usuários e métricas do Quiz.

## 🚀 Funcionalidades Principais
- **Sistema de Usuários:** Cadastro e Login integrados ao banco de dados MySQL.
- **Intro Interativa:** Transição "Any Key" com expansão de elementos e sistema de cortinas via JavaScript.
- **Linha do Tempo Horizontal:** Navegação fluida entre décadas através de eventos de teclado e clique.
- **Quiz Dinâmico:** Avaliação de conhecimento com inserção de pontuação no banco e exibição de performance via gráficos.
- **Microinterações:** Efeitos de hover inteligentes que revelam detalhes sobre os instrumentos musicais.

## 📁 Estrutura de Pastas (MVC)
```text
├── public/              # Todo o conteúdo Frontend (HTML, CSS, JS, Assets)
│   ├── assets/          # Ícones, fontes e imagens
│   ├── auth/            # Páginas de login/cadastro
│   ├── scripts/         # Funções para animações e etc.
│   ├── styles/          # Estilização modularizada
│   └── index.html       # Single Page Application
├── src/                 # Backend (Lógica de Negócio)
│   ├── controllers/     # Processamento de dados e respostas HTTP
│   ├── database/        # Scripts SQL de criação do banco e configurações de conexão
│   ├── models/          # Comunicação direta com o Banco de Dados (Queries)
│   └── routes/          # Definição dos endpoints da API
├── app.js               # Configuração do servidor Express