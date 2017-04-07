# 静的サイト テンプレ with webpack

## 何

webpack一本で静的サイトを構築し切るサンプル。  
シンプルそうに聞こえますがトコトンやったのでかなり複雑です。

## 機能

### JavaScript

babelを使って以下に対応しています。

- flowtype
    - 型をJavaScriptに導入します。やめたくなったらやめられるのがいいところです。
- env
    - 動作環境に応じて最適化されたJavaScriptをビルドします。
- latest (ES2015, 6, 7)
    - 次世代JavaScriptとして仕様が策定された機能を使えます。
- stage-0
    - マニアが提案した機能も使えます。とはいえあまり使わないほうが良いでしょう。
- minify
    - ライセンス残して圧縮します。production時のみです。

また、テストランナーとしてavaを採用しています。採用の動機としては

- グローバル参照なし
- 記述がシンプル
- 非同期テストがシンプル
- power-assertの力で問題点がわかりやすい

あたりです。

### CSS

いろいろ考えましたが、SCSSで書きます。  
SCSSをCSSに変換し、更に以下のPostCSSプラグインを利用しています。

- autoprefixer
    - prefixが必要なプロパティを自動的に判別し付与します。
- css-mqpacker
    - メディアクエリ内の設定をまとめて最適化します。

### View

いつも通りEJSです。

gulp-ejsと違い、 *他のファイルをincludeするときはrootディレクトリからの相対パスで書く必要がある* ので注意が必要です。

### webpack

TODO

### lint

#### eslint

TODO

#### stylelint

TODO

## ディレクトリ構成

```text
.
├── assets            # 静的ファイル。スコッとbuildへコピーされます
├── build             # ビルド先
├── flow-typed        # flowtypeの型ファイル
├── node_modules      # npm
├── source            # ソースはここ
│  ├── index.ejs     # これだけ例外でsource直下
│  ├── scripts       # JavaScript ただしJSとcomponent的な関係にあるCSSはここかも
│  ├── styles        # CSS
│  └── views         # EJS
├── tools             # ビルドツール関係 今後PostCSSが入るかも
│  └── webpack       # webpackビルド設定
├── .babelrc          # babel設定
├── .eslintrc         # eslint設定
├── .flowconfig       # flowtype設定
├── .gitignore        # git設定
├── .stylelintrc.js   # stylelint設定
├── README.md         # このファイル
├── package.json      # プロジェクト設定
├── postcss.config.js # PostCSS設定
├── webpack.config.js # webpack設定 実態はtools/webpack
└── yarn.lock         # yarnのlockファイル
```

## ボツ

ボツにした機能がいくつかあるので後学のためにまとめておきます。

### CSS

cssnextで書けばいいかなと思っていましたが変数の扱いやfont-awesomeの読み込みがうまくいかなくてやめました。

CSS Modulesを使おうと思っていましたがCSS Modulesを使う部分と使わない部分の切り分けがうまくいかずやめました。

### View

pugを検討しましたがやっぱり構文が難しいのでやめました。

pug-lintというlint機能に惹かれたんですよね・・・。

### webpack

flowtype、eslint、stylelintでそれぞれwebpackからチェックしようとしましたが、HMRとの食い合わせが悪いのでやめました。

