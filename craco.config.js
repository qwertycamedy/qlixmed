const path = require('path');

const resolvePath = p => path.resolve(__dirname, p)

module.exports = {
    webpack: {
        alias: {
            '@pages': resolvePath('./src/pages'),
            '@components': resolvePath('./src/components'),
            '@assets': resolvePath('./src/assets'),
            '@hooks': resolvePath('./src/hooks'),
            '@store': resolvePath('./src/store'),
        }
    },
}
