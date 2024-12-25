const { app, BrowserWindow, dialog } = require('electron');
const fs = require('fs');
const path = require('path');

// Function to create the main application window
function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: path.join(__dirname, 'assets', 'icon.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
      sandbox: true,
      enableRemoteModule: false,
      allowRunningInsecureContent: false,
    },
    resizable: true,
    show: false,
    frame: true,
  });

  // Load the URL or the local application content
  win.loadURL('https://exemple..com');

  win.once('ready-to-show', () => {
    win.show();
  });
}

// Function to check license and manage trial period
function checkLicense() {
  const licensePath = path.join(app.getPath('userData'), 'license.txt');
  const trialDuration = 1 * 60 * 1000; // 1 minutes * 60 seconds/minute * 1000 milliseconds/second = 86,400,000 milliseconds = 1 day (24 hours)
  const installationTimePath = path.join(app.getPath('userData'), 'installation-time.json');
  const trialExpiredPath = path.join(app.getPath('userData'), 'trial-expired.json'); // To track if trial expired

  // Step 1: Check if trial is expired and if the "trial-expired.json" file exists
  if (fs.existsSync(trialExpiredPath)) {
    // Trial expired, check for license
    if (fs.existsSync(licensePath)) {
      const license = fs.readFileSync(licensePath, 'utf-8').trim();
      
      // Check if the license is valid
      if (license === 'Mr_0x1') {
        dialog.showMessageBox({
          type: 'info',
          message: 'License verified successfully. You can now use the program.',
          buttons: ['OK'],
        });
      } else {
        dialog.showErrorBox('Invalid License', 'The license key is invalid. Please contact support.');
        app.quit();  // Quit the application if license is invalid
      }
    } else {
      dialog.showErrorBox('No License Found', 'License file not found. Please contact support.');
      app.quit();  // Quit the application if no license is found
    }
  } else {
    // Step 2: If trial hasn't expired yet, initiate trial
    const installationTime = new Date().getTime();
    fs.writeFileSync(installationTimePath, JSON.stringify({ installationTime }));

    // Display the trial expiration message
    dialog.showMessageBox({
      type: 'info',
      message: 'Your free trial is now active. You have 2 minutes to use the program.',
      buttons: ['OK'],
    });

    // Step 3: Start the countdown for trial expiration
    setTimeout(() => {
      // Mark the trial as expired after 2 minutes
      fs.writeFileSync(trialExpiredPath, JSON.stringify({ expired: true }));
      dialog.showErrorBox('Trial Expired', 'Your trial period has expired. Please contact support for a professional version.');
      app.quit(); // Quit the application immediately
    }, trialDuration);
  }
}

app.whenReady().then(() => {
  checkLicense();
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();  // Quit the application when all windows are closed
  }
});