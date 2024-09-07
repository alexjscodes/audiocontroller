# Simple Audio Controller
## NOTE: You must have Node.JS for this to run!
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

## Background Service (WINDOWS ONLY)
The audio controller doesn't turn itself into a background service automatically, but you can do it by using [nssm](https://nssm.cc/release/nssm-2.24.zip) (the Non-Sucking Service Manager). Put that ZIP file in the root of your Windows drive, and extract it, then go into the directory and the directory in there has a `win32` and `win64` folder in there. Whichever one your computer uses, go into that folder. Then open Command Prompt in that directory and do:
```
nssm install audiocontroller
```

Once you've executed that, a GUI should pop up. In `Path`, click the three dots and go to your Node.JS installation directory and choose `node.exe`. In `Startup directory`, put it in the `audiocontroller` folder where all of the project files. Last one, in `Arguments`, put `index.js`. What this does is it will be in the working directory, and run the `index.js` file with the `node.exe` executeable you provided it. It will do that as a service on your Windows Machine. If you want to uninstall the service, just go into the nssm folder and in Command Prompt you want to execute, `nssm remove audiocontroller confirm`. There are plenty of other apps that can do this, but `nssm` is the one I mostly use for background services. If you have questions about this, look below.

## Questions?

If you have questions about this repository or any of the guides, you can DM me on Discord `@alex.codes`
