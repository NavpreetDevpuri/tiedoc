![tiedoc_splash_screen](https://raw.githubusercontent.com/NavpreetDevpuri/tIedoC/master/public/data/logo/tiedoc_logo_landscape_splash_screen.gif)
# tIedoC
A visual programming language for making games. A combination of Phaser, Babylon.js, Blockly, Scratch and Catrobat

# Getting started
## Setup 
### method 1 (Recommended) 
This requires you to have Git and Node.js installed.
1) setup project by following commands
```console
git clone https://github.com/NavpreetDevpuri/tIedoC.git
cd tIedoC
npm install
```
2) start server by command `npm start` 
3) Then go to http://localhost:3000/ 

### method 2 (With local web server) 
1) Setting up your <b>local web server</b>. The simplest solution I’ve found is a Chrome application named (surprisingly) [ Web Server for Chrome](https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb?hl=en). Once you install this application, you can launch it from Chrome directly, and load your
project folder.
2) just open <b>public/index.html</b> from <b>Web Server URL(s)</b> shown in "Web Server For Chrome".

### method 3 (Without local web server by enabling file access from files for Chrome)
1.  Make a <b>new copy of the shortcut of Chrome</b> and rename it, (for example: 'chrome with file access').
2.  Next right click your newly created icon and select <b>'properties'</b>.
3.  Find the <b>'target'</b> box and add <b>--allow-file-access-from-files</b> to the end of it.  It should now look similar to this  "C:Program Files (x86)\Google\Chrome\Application\chrome.exe" <b>--allow-file-access-from-files</b>.
4. Now open Chrome from that shortcut then simply open <b>public/index.html</b> to that chrome window.
