module.exports = function () {
    var config = {
        allTs: './app/**/*.ts',
        tsOutputPath: './app/',
        indexSass: './src/sass/style.sass',
        allSass: './src/sass/**/*.sass',
        cssOutputPath: './src/css',
        build: {

        }
    };

    return config;
}