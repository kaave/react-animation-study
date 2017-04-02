module.exports = {
  extends: 'stylelint-config-standard',
  ignoreFiles: [
    'node_modules/**/*'
  ],
  /*
   * 以下に緩めたいルールを記述していく。
   * 参考: https://github.com/bjankord/stylelint-config-sass-guidelines
   */
  rules: {
    // インデントは弊社の場合4と決定しました
    'indentation': 4,
    // 文字列はシングルでもダブルでも構わない
    'string-quotes': null,
    // 色指定は小文字大文字どちらでもOK
    'color-hex-case': null,
    // ネストの深さはこんくらい？
    'max-nesting-depth': 5,
    // BEMにマッチさせるのが難しいので無効
    'selector-class-pattern': null
  }
};
