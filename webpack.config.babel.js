import path from 'path';

module.exports = {
    entry: {
        classes: ['./target/myClass.js', './target/myStaticClass.js']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '../dist/',
        filename: 'es6-classes.js',
    }
};