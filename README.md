
# Example

## Description
This project is an Electron application that includes functionality for licensing and trial period management. It ensures that users can run the program either under a free trial or with a valid license.

## Features
- License management.
- Trial period expiration after a set duration.
- Easy setup with Electron.
- Logs "App is ready!" when the app is initialized successfully.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/Mr-0x1/exemple.git
   cd exemple
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. To run the application locally:
   ```bash
   npm start
   ```

## Packaging for Distribution

To create a distributable installer for your platform, you can use `electron-builder`. Below are the steps for packaging the app for Windows, macOS, and Linux.

### For Windows (.exe)

1. Install `electron-builder` if you haven't already:
   ```bash
   npm install --save-dev electron-builder
   ```

2. Update `package.json` to include the following configuration under the `build` section for Windows:
   ```json
   "win": {
     "icon": "assets/icon.ico",
     "target": [
       "nsis"
     ]
   }
   ```

3. Package the app as an `.exe` installer:
   ```bash
   npm run dist
   ```

   This will create an `.exe` installer in the `dist/` directory.

### For macOS (.dmg)

1. Install `electron-builder` if you haven't already:
   ```bash
   npm install --save-dev electron-builder
   ```

2. Update `package.json` to include the following configuration under the `build` section for macOS:
   ```json
   "mac": {
     "icon": "assets/icon.icns"
   }
   ```

3. Package the app as a `.dmg` installer:
   ```bash
   npm run dist
   ```

   This will create a `.dmg` file in the `dist/` directory.

### For Linux (.AppImage, .deb, .rpm)

1. Install `electron-builder` if you haven't already:
   ```bash
   npm install --save-dev electron-builder
   ```

2. Update `package.json` to include the following configuration under the `build` section for Linux:
   ```json
   "linux": {
     "icon": "assets/icon.png",
     "target": [
       "AppImage",
       "deb",
       "rpm"
     ]
   }
   ```

3. Package the app for Linux:
   ```bash
   npm run dist
   ```

   This will create `.AppImage`, `.deb`, and `.rpm` packages in the `dist/` directory.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Credits
Created by [@mr_0x1](https://github.com/Mr-0x1).

## Additional Notes
Once the app is ready, it will log a message to the console:
```javascript
window.addEventListener('DOMContentLoaded', () => {
    console.log("App is ready!");
});
```
