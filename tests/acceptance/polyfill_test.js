'use strict';

const packageToUniqueContent = {
    'CustomElements': 'window.customElements',
    'EventSource': 'EventSourcePolyfill'
};

Feature('Polyfill');

Object.keys(packageToUniqueContent).forEach((name) => {
    Scenario('I can load ' + name + '.', (I) => {
        I.amOnPage('/polyfill.min.js?packages=' + name);

        I.see(packageToUniqueContent[name]);
    });
});

Scenario('I can load all.', (I) => {
    I.amOnPage('/polyfill.min.js');

    Object.keys(packageToUniqueContent).forEach((name) => {
        I.see(packageToUniqueContent[name]);
    });
});

Scenario('It trims packages query parameter and loads all.', (I) => {
    I.amOnPage('/polyfill.min.js?packages=%20');

    Object.keys(packageToUniqueContent).forEach((name) => {
        I.see(packageToUniqueContent[name]);
    });
});

Scenario('I can load specific packages.', (I) => {
    I.amOnPage('/polyfill.min.js?packages=CustomElements,EventSource');

    I.see(packageToUniqueContent.CustomElements);
    I.see(packageToUniqueContent.EventSource);
});
