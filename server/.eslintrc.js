module.exports = {
    "extends": ["eslint:recommended",
                ],
    "plugins": [
        "standard",
        "promise",
    ],
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "sourceType": "module"
    },
    "rules": {
        "no-const-assign": "warn",
        "no-unused-vars": 1,
        "no-this-before-super": "warn",
        "no-undef": "warn",
        "no-unreachable": "warn",
        "constructor-super": "warn",
        "valid-typeof": "warn",
        "indent": [2, 4],
        "space-before-function-paren": [0, "always"],//函数定义时括号前面要不要有空格
        "semi": [2, "always"],//语句强制分号结尾,
    }
};