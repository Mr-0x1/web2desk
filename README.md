
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
   git clone https://github.com/Mr-0x1/web2desk.git
   cd web2desk
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. To run the application locally:
   ```bash
   npm start
   ```

4. To package the app for Windows:
   ```bash
   npm run dist
   ```

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
