# vuex-sample

## セットアップ

```bash
git clone https://github.com/ryosukemochizuki/vuex-introduction-templete.git
npm ci
npm run serve
```

## ペアワークステップ

vuex を使ってカウンター、todo アプリ(保存機能なし)を作ります。

※vuex で検索すると vue2 の実装例に当たりやすいので間違えないように。

今回はセットアップも割と大事なのでそこからやります。

1. vuex をインストールする

公式を見てパッケージインストールしましょう。

[Vue 公式ドキュメント](https://next.vuex.vuejs.org/ja/installation.html)

(package.json に確認が取れたら、OK。store ファイルが生成されるかもしれない。されていなかったら`src/store/index.js`を作成する。)

2. store のセットアップをする。

`src/main.js`と`src/store/index.js`のセットアップ

下記の記事が非常にわかりやすい。

(次ステップ以降でも使える)

https://zenn.dev/okakyo/articles/87faf411c4766e5ccb4a

3. +1 ボタンを押したら数字が 1 増える counter アプリを作る。

store の state と mutations を使って実装します。

[この記事](https://next.vuex.vuejs.org/ja/guide/)を参考にして下さい。

4. 上で実装した+1 ボタンを押したら 同時に state の 2 倍の数字を表示できるようにする。

store の getters を使って実装して下さい。

[この記事](https://next.vuex.vuejs.org/ja/guide/getters.html)を参考にして下さい。

### 発展

getters は引数を取ることができます。

+1 ボタンを押したら、getters の方の数字は+10 となるように実装し直して下さい。

5. 1 秒たったら、hello world!が表示される機能を実装する。

mutations は同期的でなければいけません。

非同期的な動きを取り入れたい場合は、actions を使います。

※やるとわかりますが、context とか log で出すと深まるかも

[この記事](https://next.vuex.vuejs.org/ja/guide/actions.html)を参考にして下さい。

6. あえて store を使って todo アプリ(保存機能なし)を作って下さい。

## 回答

`feature/sample-answer`ブランチに 5 までの例があります。
