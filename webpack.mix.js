const mix = require('laravel-mix');
require('laravel-mix-polyfill');

mix.js('resources/ts/site.ts', 'web/resources/js/site.min.js').polyfill({
    enabled: true,
    useBuiltIns: "usage",
    targets: "firefox 50, IE 11"
})
.sass('resources/scss/site.scss', 'web/resources/css/site.min.css')
.webpackConfig({
    module: {
        rules: [
                {
                    test: /\.ts?$/,
                    loader: "ts-loader",
                    exclude: /node_modules/
                }
        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx", ".vue", ".ts", ".tsx"]
    }
});