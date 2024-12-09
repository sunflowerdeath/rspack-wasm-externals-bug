const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const src = path.resolve(__dirname, "src")

const rules = [
    {
        test: /\.ts$/,
        include: [src],
        use: [
            {
                loader: "swc-loader",
                options: {
                    jsc: { parser: { syntax: "typescript" } }
                }
            }
        ]
    }
]

module.exports = {
    entry: "./src/index.ts",
    output: {
        clean: true,
        path: path.resolve(__dirname, "./build"),
        publicPath: "/",
    },
    optimization: {
        minimize: false
    },
    target: "web",
    resolve: {
        extensions: [".js", ".ts"],
    },
    module: { rules },
    devtool: false,
    experiments: {
        asyncWebAssembly: true,
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        })
    ],
    devServer: {
        host: "0.0.0.0",
        port: 8080
    }
}
