# Desafio - Front-End
- Introdução
- Configuração
- Comandos
- Detalhes do projeto
    - Estrutura de pastas
    - Pacotes utilizados
    - Comandos de desenvolvimento
- Ajustes na API

## Introdução
A descrição do projeto pode ser visualizada [aqui](https://github.com/gupy-io/do-at-home-front-interview/blob/main/README.md).
As contas criadas para realizar os testes são:
- email: `candidato@email.com` senha: `some-password`
- email: `entrevistador@email.com` senha: `some-password`
- email: `recrutador@email.com` senha: `some-password`

## Configuração
- [Instalar Node](https://nodejs.org/en/download/package-manager/).
- Execurtar o comando `cd frontend`, em seguida `npm ci` para instalar as dependências.

## Comandos
- `npm run start`, executa a aplicação na porta `http://localhost:3000/`.

## Detalhes do projeto

### Estrutura das pastas
- src 
    - componentes - Utilizado a metodologia [Atomic design](https://vidadeproduto.com.br/atomic-design/)
        - atoms - São os blocos básicos de construção da matéria. Aplicados às interfaces da web, os átomos são nossas tags HTML/componentes básicos, uma imagem de perfil, um label de formulário, um campo de texto ou um botão.
        - molecules - São grupos relativamente simples de elementos da interface que funcionam juntos como uma unidade. Por exemplo, uma imagem de perfil, um label, um card e botão podem se combinar em um card de informação do usuário.
        - organisms - São componentes de interface relativamente complexos compostos por grupos de moléculas e/ou átomos e/ou outros organismos. Por exemplo, uma lista composta de cards com imagem de perfil e nome.
        - templates - Colocam componentes em um layout e demonstram a estrutura de conteúdo subjacente do design.
        - pages - Aplicam conteúdo real aos modelos e articulam variações para demonstrar a interface do usuário final e testar a resiliência do sistema de design.
    - helpers - São funções para auxiliar no desenvolvimento. Por exemplo, uma conversão de unidade como `px` para `rem`.
    - services - São funções utilizada para se comunicar com serviços externos. Por exemplo, uma requisição para o servidor.
    - theme - São objetos utilizados para configurar o tema do sistema. Por exemplo, configurar as cores utilizadas.

### Pacotes utilizados
- [create-react-app](https://create-react-app.dev/docs/getting-started) - Create React App é uma maneira oficialmente suportada de criar aplicativos React de página única. Ele oferece uma configuração de compilação moderna sem configuração.
- [axios](https://axios-http.com/docs/intro) - Axios é um cliente HTTP baseado-em-promessas para o node.js e para o navegador.
- [react-router-dom](https://reactrouter.com/docs/en/v6/getting-started/overview) - O React Router é uma biblioteca de roteamento do lado do servidor e cliente com todos os recursos para React, uma biblioteca JavaScript para construir interfaces de usuário.
- [styled-components](https://styled-components.com/)
- [react-toastify](https://fkhadra.github.io/react-toastify/introduction)

### Comandos de desenvolvimento
- `npm run lint` - Executa o lint
- `npm run format` - Executa o prettier

## Ajustes na API
- Variável baseUrl ajustada no arquivo do `insomnia.json`
- Adicionado o campo `type` para entidade account. O arquivo `account.enums.ts` contém os tipos de usuário
- Alterado o endpoint `/accounts/create-account` para receber o campo `type`
- Adicionado endpoint `/accounts/login` para o usuário realizar o acesso ao sistema