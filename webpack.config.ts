import path from 'path'
import type webpack from 'webpack'
import 'webpack-dev-server'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

export interface EnvVariables {
    mode?: 'production' | 'development'
}

const config = (env: EnvVariables): webpack.Configuration => {
    const mode = env.mode ?? 'development'
    const isDev = mode === 'development'

    const webpackConfig: webpack.Configuration = {
        mode,
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].[contenthash].js',
            clean: true,
            publicPath: '/'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'public', 'index.html')
            }),
            new ReactRefreshWebpackPlugin(),
            new ForkTsCheckerWebpackPlugin({
                async: false,
                typescript: {
                    configFile: './tsconfig.json',
                }
            })
        ],
        module: {
            rules: [
                {
                    test: /\.svg$/i,
                    use: [{
                        loader: '@svgr/webpack',
                        options: {
                        icon: true
                        }
                    }]
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    auto: (resPath: string) => Boolean(resPath.includes('.module')),
                                    localIdentName: '[path][name]__[local]--[hash:base64:5]'
                                }
                            }
                        },
                        'sass-loader'
                    ]
                },
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            plugins: ['react-refresh/babel']
                        }
                        // options: { // вынесла в конфиг
                        //     presets: [
                        //         [
                        //             '@babel/preset-env',
                        //             "@babel/preset-typescript",
                        //             [
                        //                 "@babel/preset-react",
                        //                 {
                        //                     runtime: 'classic',
                        //                 }
                        //             ]
                        //         ]
                        //     ],
                        //     // plugins: undefined,
                        // }
                    }
                }
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
            alias: {
                '@': path.resolve(__dirname, 'src')
            }
        },
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: {
            historyApiFallback: true,
            static: {
                directory: path.join(__dirname, 'public')
            },
            port: 9000,
            hot: true,
            open: true
        }
    }

        return webpackConfig
}

export default config
