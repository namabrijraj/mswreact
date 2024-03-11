var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
    entry: {
        'js/app.bundle': './src/App.js',
        'js/app.utils': [
            './src_style/js/main'
        ]
    },
    output: {
        filename: '[name].js',
        chunkFilename: 'js/app-[id].bundle.js?[hash]',
        path: path.resolve(__dirname, '..', 'dist/'),
        publicPath: '/'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json', '.html'],
        modules: ['node_modules', path.resolve(__dirname, '..', 'src')]
    },
    resolveLoader: {
        modules: ['node_modules']
    },
    devServer: {
        inline: true,
        contentBase: 'dist/',
        port: 5000,
        proxy: [
            {
                path: '/api/*',
                target: 'http://localhost:5000/'
            }
        ],
        historyApiFallback: true
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js(x?)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.ts(x?)$/,
                loader: 'ts-loader',
                exclude: [/node_modules/, /\-test.ts(x?)$/]
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader' ,
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                exclude: /\.useable\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.useable\.css$/,
                loader: 'style-loader/useable!css'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /bootstrap\/js\//,
                loader: 'imports-loader?jQuery=jquery'
            },
            {
                test: /bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/,
                loader: 'imports-loader?jQuery=jquery'
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'html-loader'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: './index.html',
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: 'src/views/pages/profile.html',
            filename: './pages/profile.html',
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: 'src/views/pages/retentionOffer.html',
            filename: './pages/retentionOffer.html',
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: 'src/views/pages/bills.html',
            filename: './pages/bills.html',
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: 'src/views/pages/login.html',
            filename: './pages/login.html',
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: 'src/views/pages/subscriptions.html',
            filename: './pages/subscriptions.html',
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: 'src/views/pages/subscription.html',
            filename: './pages/subscription.html',
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: 'src/views/pages/prepaid.html',
            filename: './pages/prepaid.html',
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: 'src/views/pages/notifications.html',
            filename: './pages/notifications.html',
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: 'src/views/pages/overview.html',
            filename: './pages/overview.html',
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: 'src/views/pages/documents.html',
            filename: './pages/documents.html',
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: 'src/views/pages/securityStatistics.html',
            filename: './pages/securityStatistics.html',
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: 'src/views/pages/myVouchers.html',
            filename: './pages/myVouchers.html',
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: 'src/views/pages/myWidgetVouchers.html',
            filename: './pages/myWidgetVouchers.html',
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: 'src/views/pages/smsSender.html',
            filename: './pages/smsSender.html',
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: 'src/views/pages/widgetOpenAmount.html',
            filename: './pages/widgetOpenAmount.html',
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: 'src/views/pages/deepLinks.html',
            filename: './pages/deepLinks.html',
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: 'src/views/pages/employeeOfFirmOffer.html',
            filename: './pages/employee-of-firm-offer.html',
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: 'src/views/pages/onlineInformer.html',
            filename: './pages/onlineInformer.html',
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: 'src/views/pages/manage-callback.html',
            filename: './pages/manage-callback.html',
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: 'src/views/pages/inquiries.html',
            filename: './pages/inquiries.html',
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: 'src/views/pages/etf-refund.html',
            filename: './pages/etf-refund.html',
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: 'src/views/pages/websheet.html',
            filename: './pages/websheet.html',
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: 'src/views/pages/webSheetMngAccount.html',
            filename: './pages/webSheetMngAccount.html',
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: 'src/views/pages/create-callback.html',
            filename: './pages/create-callback.html',
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: 'src/views/pages/productsConfigurator.html',
            filename: './pages/productsConfigurator.html',
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: 'src/views/pages/selfcare-callback.html',
            filename: './pages/selfcare-callback.html',
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: 'src/views/pages/websheet-sim-transfer.html',
            filename: './pages/websheet-sim-transfer.html',
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: 'src/views/pages/unsubscribe-privacy-setting.html',
            filename: './pages/unsubscribe-privacy-setting.html',
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: 'src/views/pages/notification-detail.html',
            filename: './pages/notification-detail.html',
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: 'src/views/pages/mobile-orders.html',
            filename: './pages/mobile-orders.html',
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: 'src/views/pages/b2b-subscriptions.html',
            filename: './pages/b2b-subscriptions.html',
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: 'src/views/pages/insurance-option.html',
            filename: './pages/insurance-option.html',
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: 'src/views/pages/pre-sales-form.html',
            filename: './pages/pre-sales-form.html',
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: 'src/views/pages/fmc-benefits.html',
            filename: './pages/fmc-benefits.html',
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: 'src/views/pages/online-companion.html',
            filename: './pages/online-companion.html',
            hash: true
        }),
        new CopyWebpackPlugin([
            { context: path.resolve(__dirname, '..', 'src_style/css'), from: '**/*', to: path.resolve(__dirname, '..', 'dist/css') },
            { context: path.resolve(__dirname, '..', 'src_style/fonts'), from: '**/*', to: path.resolve(__dirname, '..', 'dist/fonts') },
            { context: path.resolve(__dirname, '..', 'src_style/data'), from: '**/*', to: path.resolve(__dirname, '..', 'dist/data') },
            { context: path.resolve(__dirname, '..', 'src_style/img'), from: '**/*', to: path.resolve(__dirname, '..', 'dist/img') },
            { context: path.resolve(__dirname, '..', 'src/environment/js'), from: '**/*', to: path.resolve(__dirname, '..', 'dist/js') }
        ])
    ]
};