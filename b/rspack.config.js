const path = require("path")

const src = path.resolve(__dirname, "src")

const rules = [
    {
        test: /\.ts$/,
        include: [src],
        use: [
            {
                loader: "builtin:swc-loader",
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
        path: path.resolve(__dirname, "./build"),
        filename: "main.js",
        library: { type: "module" }
    },
    optimization: {
        minimize: false
    },
    target: "web",
    resolve: {
        extensions: [".js", ".ts"],
    },
    module: { rules },
    externals: ["loro-crdt", "lodash-es"],
    devtool: false,
    experiments: {
        outputModule: true,
    }
}
