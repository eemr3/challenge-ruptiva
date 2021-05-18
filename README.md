<h2 align="center">Ruptiva Code Challenge Front-End</h2>

___




<p align="center">
  <a href="LICENSE">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%23F8952D">
  </a>
</p>

___

<h3 align="center">
  <a href="#information_source-sobre">Sobre</a>&nbsp;|&nbsp;
  <a href="#interrobang-desenvolvimento">Desenvolvimento</a>&nbsp;|&nbsp;
  <a href="#seedling-requisitos-mínimos">Requisitos</a>&nbsp;|&nbsp;
  <a href="#rocket-tecnologias-utilizadas">Tecnologias</a>&nbsp;|&nbsp;
  <a href="#licença">Licença</a>
</h3>

___


## :information_source: Sobre

O projeto é uma tela com um formulário: 2 campos, um para o nome do usuário, e outro para o documento que no caso é CPF ou CNPJ. E mostra uma lista dos usuários cadastrados.

## :interrobang: Desenvolvimento

Construído usando React-Native (Expo), salvando os dados no Firebase/Firestore;
- inicie o projeto como expo init nome-do-projeto; 
- Criei uma tela (screen) de nome Register.tsx; 
- Criei 3 componentes: 1 button.tsx - 1 FormUser.tsx - 1 ListUsers.tsx; 
- Criei um arquivo nome firebase.ts com a conexão com o Cloud Firestore; 
- Um arquivo com a lógica de tirar a formatação do campo CPF/CNPJ para guardar no banco de dados, arquivo que fica na pasta utils; 
- Criei um arquivo com as configurações para yup validador que fica também na pasta utils.

#### Dificuldades que tive: 
- O próprio react-native, pois não conhecimento da tecnologia;
- O TypeScript, pelo mesmo motivo que react-native, não tinha conhecimento e ainda não tenho o suficiente.
- Testes, não conheço nada e por esse motivo não consegui cria-los, apesar de buscar informações na internet, não consegui cria-los.
- O Expo Snack, ainda está dando conflitos com o firebase e não consegui resolver, deixei funcionando no modo Android dele, pois, o Web está acusando erros.
- Tive um pouco de dificuldades em montar o layout também por motivo de desconhecimento de como funciona o ract-native.


### Link do Sanck
### [challenge-ruptiva](https://snack.expo.io/@eemr3/github.com-eemr3-challenge-ruptiva)
ps.: Não seio o motivo mas no snack o projeto esta rodando somente no modo Android, no modo web esta acusando erro que não consegui resolver.

## :seedling: Requisitos Mínimos

- NodeJs v14.16.1
- Expo v4.4.6

## :rocket: Tecnologias Utilizadas 

O projeto foi desenvolvido utilizando as seguintes tecnologias

- Expo
- React-native
- Firebase
- Firestore

## :link: Como baixar, instalar e rodar

- Clone o repositório
- Instalando as dependências: use ```yarn``` ou ```npm install```
- Rodando no localhost: use ```expo start```

## Licença 

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
