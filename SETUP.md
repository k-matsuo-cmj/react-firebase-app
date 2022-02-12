# Firebaseによるサーバレスシングルアプリケーション  
## セットアップ
1. Reactプロジェクト作成  
`npx create-react-app react-fb-app`

1. Firebaseプロジェクト作成（ブラウザ）  
https://console.firebase.google.com/

   1. プロジェクトを追加  
    serverless-spa-demo
   1. Cloud Firestore作成  
    テストモード

1. CLIインストール  
`npm i -D firebase-tools`

1. CLIからログイン  
`npx firebase login`  
1. セットアップ  
`npx firebase init`  
 - Firestore
 - Functions
 - Hosting
 - Storage

  > ? Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices. Firestore: Configure security rules and indexes files for Firestore, Functions: Configure a Cloud Functions directory and its files, Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys, Storage: Configure a security rules file for Cloud Storage

  > ? Please select an option: Use an existing project  

  > ? Select a default Firebase project for this directory: serverless-spa-demo (serverless-spa-demo)

  > ? What file should be used for Firestore Rules? firestore.rules  

  > ? What file should be used for Firestore indexes? firestore.indexes.json

  > ? What language would you like to use to write Cloud Functions? JavaScript

  > ? Do you want to use ESLint to catch probable bugs and enforce style? No

  > ? Do you want to install dependencies with npm now? Yes

  > ? What do you want to use as your public directory? build  

  > ? Configure as a single-page app (rewrite all urls to /index.html)? No

  > ? Set up automatic builds and deploys with GitHub? No

  > ? What file should be used for Storage Rules? storage.rules

1.  ビルド  
`npm run build`

1. ホスティングデプロイ  
`npx firebase deploy --only hosting`

