module.exports = {
    // 검사환경 설정 browser, node 환경 모두에서 검사(true)
    env: {
        browser: true,
        node: true
    },

    // 코드 규칙 명시
    extends: [
        // vue
        // 'plugin:vue/vue3-essential',            // Lv1
        'plugin:vue/vue3-strongly-recommended', // Lv2
        // 'plugin:vue/vue3-recommended',          // Lv3
        // js
        'eslint:recommended'
    ],

    // 코드 분석기 지정
    parserOptions: {
        parser: '@babel/eslint-parser',
        // parser: 'babel-eslint',
    },

    // extends에 적용한 규칙을 그대로 사용한다면 작성 불필요 
    // 지정된 규칙에서 별도 수정할 내용이 있으면 작성
    rules: {
        "vue/html-closing-bracket-newline": ["error", {
            "singleline": "never",
            "multiline": "never"
        }],
        "vue/html-self-closing": ["error", {
            "html": {
              "void": "always",
              "normal": "never",
              "component": "always"
            },
            "svg": "always",
            "math": "always"
        }]
    }
}