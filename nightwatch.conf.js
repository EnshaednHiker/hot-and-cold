require ('dotenv').config();

const selenium = require('selenium-download');
const path = require('path');
const BINPATH = './node_modules/nightwatch/bin/'; 

require('fs').stat(BINPATH + 'selenium.jar', function (err, stat) { // got it?
  if (err || !stat || stat.size < 1) {
    require('selenium-download').ensure(BINPATH, function(error) {
      if (error) throw new Error(error); // no point continuing so exit!
      console.log('✔ Selenium & Chromedriver downloaded to:', BINPATH);
    });
  }
});

const config = {
    "src_folders" : ["tests/e2e"],
    "output_folder" : "reports",
    "custom_commands_path" : "",
    "custom_assertions_path" : "",
    "page_objects_path" : "",
    "globals_path" : "",

    "selenium" : {
      "start_process" : true,
      "server_path" : "./node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-3.4.0.jar",
      "log_path" : "",
      "port" : 4444,
      "host": "127.0.0.1",
      "cli_args" : {
        "webdriver.chrome.driver" : "./node_modules/nightwatch/bin/chromedriver"
      }
    },
    "test_workers" : {"enabled" : true, "workers" : "auto"},
    "test_settings" : {
      "default": {
        "launch_url": "http://localhost:3000", // we're testing a Public or "staging" site on Saucelabs
        //"selenium_port": 80,
        //"selenium_host": "ondemand.saucelabs.com",
        "silent": true,
        "screenshots": {
          "enabled": false,
          "path": ""
        },
        "username" : process.env.SAUCE_USERNAME,     // if you want to use Saucelabs remember to
        "access_key" : process.env.SAUCE_ACCESS_KEY, // export your environment variables (see readme)
        "globals": {
          "waitForConditionTimeout": 10000    // wait for content on the page before continuing
        }
      },
      "local": {
        "launch_url": "http://localhost:3000",
        "selenium_port": 4444,
        "selenium_host": "127.0.0.1",
        "silent": true,
        "screenshots": {
          "enabled": false, 
          "path": ""
        }, 
        "globals": {
          "waitForConditionTimeout": 15000 // on localhost sometimes internet is slow so wait...
        },
        "desiredCapabilities": {
        "browserName": "chrome",
        // "chromeOptions": {
        //   "args": [
        //     `Mozilla/5.0 (iPhone; CPU iPhone OS 5_0 like Mac OS X) AppleWebKit/534.46
        //     (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3`,
        //     "--window-size=640,1136" // iphone 5
        //   ]
        },
        // "javascriptEnabled": true,
        // "acceptSslCerts": true
        }
      },
      "chrome": { // your local Chrome browser (chromedriver)
        "desiredCapabilities": {
          "browserName": "chrome",
          "javascriptEnabled": true,
          "acceptSslCerts": true
        }
      },
        // "chromemac": { // browsers used on saucelabs:
        //   "desiredCapabilities": {
        //     "browserName": "chrome",
        //     "platform": "OS X 10.11",
        //     "version": "47"
        //   }
        // },
        // "ie11": {
        //   "desiredCapabilities": {
        //     "browserName": "internet explorer",
        //     "platform": "Windows 10",
        //     "version": "11.0"
        //   }
        // },
        // "firefox" : {
        //   "desiredCapabilities": {
        //     "platform": "XP",
        //     "browserName": "firefox",
        //     "version": "33"
        //   }
        // },
        // "internet_explorer_10" : {
        //   "desiredCapabilities": {
        //     "platform": "Windows 7",
        //     "browserName": "internet explorer",
        //     "version": "10"
        //   }
        // },
        // "android_s4_emulator": {
        //   "desiredCapabilities": {
        //     "browserName": "android",
        //     "deviceOrientation": "portrait",
        //     "deviceName": "Samsung Galaxy S4 Emulator",
        //     "version": "4.4"
        //   }
        // },
        // "iphone_6_simulator": {
        //   "desiredCapabilities": {
        //     "browserName": "iPhone",
        //     "deviceOrientation": "portrait",
        //     "deviceName": "iPhone 6",
        //     "platform": "OSX 10.10",
        //     "version": "8.4"
        //   }
}
      
    
  


module.exports = config;