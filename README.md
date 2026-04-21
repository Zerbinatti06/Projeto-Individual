# Samba Moderno: Do Cacique ao Estádio 

![Status do Projeto](https://img.shields.io/badge/Status-Em%20Desenvolvimento-yellow)
![JS](https://img.shields.io/badge/JavaScript-Vanilla-black)

Uma experiência interativa e imersiva sobre a evolução rítmica e estética do samba moderno brasileiro, partindo da revolução instrumental do Fundo de Quintal até o fenômeno de massa do Exaltasamba.

## Sobre o Projeto
Este projeto nasceu da necessidade de documentar visualmente a transição do pagode de mesa para o pagode romântico e pop. O design utiliza uma paleta de **Amarelo Pastel** sobre **Preto**, evocando a elegância e a alegria do gênero, com uma navegação horizontal que simula uma linha do tempo contínua.

### A Jornada:
1. **O Berço (Anos 70):** O Fundo de Quintal e a introdução do tantã, repique de mão e banjo.
2. **A Transição (Anos 80):** A chegada do samba às rádios com Bala, Bombom e Chocolate.
3. **A Explosão Pop (Anos 90):** A era de ouro com SPC, Molejo e a sofisticação de Soweto e Art Popular.
4. **O Legado (Anos 2000):** O ápice do gênero com o Exaltasamba e a consolidação do samba como instituição nacional.

## Tecnologias e Conceitos Aplicados

### Frontend
- **Vanilla JavaScript:** Toda a lógica de transição de telas, manipulação de estados e animações foi feita sem o uso de frameworks (como React ou Vue).
- **CSS Transitions & Transforms:** Uso intensivo de `translateX` para navegação horizontal e `scale` para efeitos de expansão imersiva.
- **SVG Dinâmico:** Manipulação de vetores para garantir que a identidade visual permaneça nítida em qualquer resolução.
- **Chart.js:** Implementação de gráficos interativos na sessão final para exibir as estatísticas de conhecimento dos usuários (Quiz).

### Backend & Dados
- **Consumo de API:** Integração com sistema de login e cadastro de usuários.
- **Persistência:** Armazenamento e recuperação de dados de desempenho dos usuários no Quiz.

## Funcionalidades Principais
- **Intro "Any Key":** Uma transição cinematográfica que utiliza uma div expansora para revelar o conteúdo principal.
- **Navegação Horizontal:** Scroll lateral controlado via teclado e botões, garantindo que o usuário siga a ordem cronológica.
- **Quiz de Conhecimento:** Um desafio final que testa o que o usuário aprendeu, gerando um gráfico de radar/pizza com os resultados.
- **Design Responsivo:** Adaptado para diferentes resoluções, mantendo a proporção áurea do conteúdo centralizado.

## 📁 Estrutura de Arquivos
```text
├── /src                 # Pasta Source (guarda todas os arquivos do site)
    ├── assets/          # Ícones e Fontes customizadas
    ├── scripts/         # Lógica core, módulos de API e gráficos
    ├── styles/          # Estilização modular (intro, décadas, quiz)
    ├──quiz/             # Páginas do quiz
    └── index.html       # Página principal