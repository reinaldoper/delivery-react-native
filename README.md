# Delivery React Native App

Este é um aplicativo desenvolvido em React Native. O aplicativo permite que os usuários visualizem listas de bebidas alcoólicas e não alcoólicas, com a capacidade de ver detalhes de cada item e também as receitas de como fazê-las.

## Dependências

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Elements](https://reactnativeelements.com/)
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
- [Axios](https://github.com/axios/axios)

## Instalação

### Pré-requisitos

- Node.js (versão 20)
- npm ou yarn
- Expo CLI
- Android Studio 

### Passos para instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/reinaldoper/delivery-react-native.git
   cd delivery-react-native/delivery
   ```
2. Instale as dependências:

   ```sh
   npm install
   ```

3. Instale o Expo CLI globalmente (se ainda não estiver instalado):

  ```sh
  npm install -g expo-cli
  ```

4. Abra o aplicativo no emulador Android:

  ```sh
  npm run android
  ```

5. Ou abra o aplicativo no emulador iOS:


  ```sh
  npm run ios
  ```

6. Um pequeno spoiler do App:

<details>
  <summary>Clique para ver o spoiler</summary>
  <video controls>
    <source src="./assets/delivery.webm" type="video/webm">
  </video>
</details>


## Estrutura do Projeto:

```sh
 delivery-react-native/
├── delivery/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   │   ├── Delivery.js
│   │   ├── Alcoholic.js
│   │   ├── Home.js
│   │   └── Details.js
│   │   └── Categorys.js
│   │   └── FilterCategory.js
│   │   └── NoAlcoholic.js
│   ├── routes/
│   │   ├── indexRoute.js
│   │   └── [bottonsNavigate.js](http://_vscodecontentref_/0)
│   │   ├── topNavigation.js
│   ├── service/
│   │   ├── fetchAlcoholic.js
│   │   └── fetchMargarita.js
│   │   └── fetchDetails.js
│   ├── styles/
│   │   ├── colors.js
│   │   └── style.js
│   ├── App.js
│   └── app.json
├── .gitignore
├── package.json
└── README.md
```


