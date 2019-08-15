module.exports = {
    presets: [
        // 'transform-decorators-legacy',
        'module:metro-react-native-babel-preset',
        'mobx'
    ],

    "plugins": [
        '@babel/plugin-transform-flow-strip-types',
        [
            "@babel/plugin-proposal-decorators",
            {
                "legacy": true
            }
        ],
        [
            "@babel/transform-runtime",
            {
                "helpers": true,
                "regenerator": false
            }
        ]
    ]
};
