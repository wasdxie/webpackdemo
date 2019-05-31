const path = require('path');
var webpack = require('webpack');
module.exports = {
    entry:'./src/a.js',
    output:{
        filename:'[name].[id].[hash].js',
        chunkFilename:'[chunkhash].js',
        path:path.resolve(__dirname,'dist')
    },
    devtool:'inline-source-map',
    mode:'development',
    // plugins:[
    //     new webpack.optimize.AggressiveSplittingPlugin({
    //         minSize:10000,
    //         maxSize:20000,
    //         chunkOverhead:0,
    //         entryChunkMultiplicator:1
    //     })
    // ]
}