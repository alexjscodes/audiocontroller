# Simple Audio Controller
This application is a simple web-socket/web server that will let you control your computer's audio basically through IP. The project will get more modern soon, as this is just a little thing I made to control my speakers when I'm away from the PC.
## Install Guide
First, download this repository as a ZIP file. Before you extract it, initialize your Node.JS project. Go in the directory you will be working on and execute this in your terminal.
```
npm init
```
Call the project whatever you want, after that, extract the ZIP file from this repository and put all the files in your working directory.
Once you've done that, you will want to install the packages that are required from the server.
```
npm install express loudness ws
```
And now, it is ready to be fired up. So run the project by doing:
```
node .
```
When you have done that, you should be able to go to `localhost:1010` and see the page that comes with it. If you want to play around with it, the pages are in the `views` folder and the attachments are in the `public` folder and the server file is `index.js` in the main working directory. The WebSocket server that controls all of it is running on port `1011`.
## The Controller
![image](https://github.com/user-attachments/assets/4e9a2262-0a18-4623-a628-dfeb9392d4b2)

Just a basic slider and text that shows the current volume.

## Questions?

If you have questions about this, you can DM me on Discord `@alex.codes`
