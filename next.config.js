const path = require('path');

const nextConfig = {

    experimental: {
        appDir: true
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    distDir: "dist/"
}

module.exports = nextConfig
