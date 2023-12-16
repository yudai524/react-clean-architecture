# React Clean Architecture
React プロジェクトで Clean Architecture を利用するサンプルリポジトリです。

## コンセプト
### 概念図
![概念図](docs/images/conceptual-diagram.png)

### 概要
MVVM をベースに詳細部分を Clean Architecture で実装する形になっています。  
ひとことに MVVM と言っても M などは特に漠然としており、そういった部分に Clean Architecture の概念が活用されているようなイメージです。

#### 役割
役割の概要は下記の通りです。
- **UI**: ユーザーインターフェースを提供
- **Store**: MobX の Store として、 EntityVM を格納して UI に提供する
- **EntityVM**: Entity を表示用に加工する
- **Entity**: エンティティのデータを管理するシンプルなオブジェクト
- **Gateway**: API など外部とのやりとりを行う
- **UseCase**: ビジネスロジック

### Store

上記の概念図の VM 以降の Model 寄りの部分は、基本的に DI するようになっており、 Store は DI のコンポジションルートの役割があります。

### EntityVM

### Entity

### Gateway
API や Storage など外部サービスとのやりとりを行います。  

型定義自体は `Service` としてより細かい粒度で定義しています。  
例えば、Todo 管理機能と Calendar 機能を提供する API を管理する AppAPIGateway というクラスがあったとして、  
型定義は `TodoService` と `CalendarService` のようになるイメージです。  
これによって、フロントとサーバーが同時期に開発になる際などに、Todo 機能は出来ているけど、Calendar 機能が出来ていないというようなケースで、どちらかだけをモックしたり出来ます。  
また、マイクロサービス化などを行って機能が別サーバーになってしまったようなケースでも優位性を発揮します。

### UseCase


## ディレクトリ構成

```sh
.
├── plopTemplates # スキャフォールディング用のテンプレート
├── plopfile.js # スキャフォールディング用の設定ファイル
├── public
├── src
│   ├── App.tsx
│   ├── components
│   ├── core # Clean Architecture の UI に依存しない部分の処理が入るディレクトリ
│   │   ├── entities
│   │   │   ├── AppError.ts # エラーハンドリング用のクラス
│   │   │   └── UseCaseOutput.ts # UseCase の出力用のクラス
│   │   ├── entityVMs
│   │   │   ├── BaseEntityVM.ts # EntityVM の基底クラス
│   │   │   ├── TodoListVM.ts
│   │   │   └── TodoVM.ts
│   │   ├── factories
│   │   │   ├── entities # Entity のファクトリ
│   │   │   │   ├── AppErrorFactory.ts
│   │   │   │   └── UseCaseOutputFactory.ts
│   │   │   └── entityVMs
│   │   │       ├── TodoListVMFactory.ts
│   │   │       └── TodoVMFactory.ts
│   │   ├── gateways
│   │   │   ├── AppGraphQLAPIGateway.ts
│   │   │   ├── graphql
│   │   │   ├── lib
│   │   │   └── schema.graphql
│   │   ├── stores # UI に依存しない Store を格納するディレクトリ
│   │   ├── symbols # DI 用の Symbol を格納するディレクトリ
│   │   ├── types # 型定義
│   │   │   ├── entities.ts
│   │   │   ├── entityVMs
│   │   │   ├── factories
│   │   │   ├── services # 外部サービス（API や Storage など）を利用する Gateway など向けの型定義
│   │   │   ├── stores
│   │   │   └── useCases # useCase の型定義
│   │   └── useCases # Interactor を格納するディレクトリ
│   ├── hooks
│   ├── index.tsx
│   ├── inversify.config.ts # DI コンテナの設定ファイル
│   ├── mocks
│   ├── react-app-env.d.ts
│   ├── stores # React でのみ利用する Store や React と core の Store を糊付けする処理を格納するディレクトリ
│   └── utils
├── tsconfig.json
└── tsconfig.paths.json

```

## スキャフォールディング
以下の要領でスキャフォールディングを行います。  
ファイル数が多くなるのでスキャフォールディングがあると便利です。  

```sh
# UseCase & Interactor のスキャフォールディング
npm run g UseCase 

# FetchTodosUseCase や FetchTodosInteractor を生成する例。
? What is your UseCase name? FetchTodos
? ./useCases/{path please} TodoLists
✔  ++ /useCases/TodoLists/FetchTodosInteractor.ts
✔  _+ /symbols/index.ts
✔  ++ /types/useCases/todoLists.ts
✔  _+ /types/useCases/todoLists.ts

# EntityVM & Factory のスキャフォールディング
npm run g EntityVM

# TodoVM や TodoVMFactory を生成する例。
? What is your EntityVM name? Todo
? ./entityVMs/{path please} todoLists
✔  ++ /entityVMs/todoLists/TodoVM.ts
✔  ++ /factories/entityVMs/todoLists/TodoVMFactory.ts
✔  _+ /symbols/index.ts
✔  _+ /types/entityVMs.ts
✔  _+ /types/factories.ts

```