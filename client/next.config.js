module.exports = {
    webpackkDevMiddleware: config => {
        config.watchOptions.poll = 300;
        return config;
    }
}

// This file is loaded up automatically by nextjs whenever our project starts up. to fix file change detection.
