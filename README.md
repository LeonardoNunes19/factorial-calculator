# Factorial Calculator

Factorial Calculator é uma aplicação desenvolvida em Spring Boot e ReactJS que tem por objetivo receber um valor inteiro e retornar o seu fatorial.

# Pré requisitos

- Java 11
- Node v10

# Instalação

- Após baixar este repositório, faça a extração.
- Dentro da pasta, instale os pacotes necessários pelo terminal do seu sistema operacional

    `npm install`
    
- Inicie o frontend da aplicação

    `npm start`
    
Feito isso, será aberto o frontend da aplicação localmente, utilizando a porta 3000

# Inicializar a API

Agora precisamos iniciar o backend da nossa aplicação, para isso, execute estes comandos na raíz da pasta

`java -jar backend/target/apirest-0.0.1-SNAPSHOT.jar`

Pronto! a aplicação já está pronta para ser utilizada!

---

# Principais tecnologias

Tendo em vista as especificações do projeto, toda a etapa de cálculo do fatorial deve ser feita pelo backend da aplicação, além desta dever ser codificada em Java.

### Spring Boot
Este é um framework Java que facilita a criação de aplicações backend. Necessário justamente por receber as requisições POST feitas pelo frontend em React.

### React
Foi utilizado para oferecer uma interface amigável e trabalhar com tudo que não seja calcular o fatorial. Exemplos:

- Fazer a validação dos dados antes de ir para o backend da apliação
- Renderizar uma lista com o histórico dos cálculos realizados
