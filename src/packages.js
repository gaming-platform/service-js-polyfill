'use strict';

const fs = require('file-system');

// Load files to memory at server startup.
const packageToContent = {
    'CustomElements': fs.readFileSync('node_modules/@webcomponents/custom-elements/custom-elements.min.js'),
    'EventSource': fs.readFileSync('node_modules/event-source-polyfill/src/eventsource.min.js')
};

module.exports = {
    /**
     * Returns the contents of the specified packages.
     * If a package is not found, it is ignored.
     *
     * @param {string[]} packages
     * @returns {string}
     */
    content: function (packages) {
        if (packages.length === 0) {
            packages = Object.keys(packageToContent);
        }

        packages.sort();

        let content = '';

        packages.forEach((p) => {
            if (packageToContent.hasOwnProperty(p)) {
                content += packageToContent[p];
            }
        });

        return content;
    },
};
