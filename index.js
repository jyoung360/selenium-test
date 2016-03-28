var webdriverio = require('webdriverio');

var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    },
    host: '52.33.217.105',
    port: 4444,
    logLevel: 'verbose'
};

webdriverio
.remote(options)
.init()
.url('http://google.com/')
.getTitle()
.end();

