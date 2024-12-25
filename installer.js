const fs = require('fs');
const path = require('path');
const { app, dialog } = require('electron');

function checkAndInstallLicense() {
  const licensePath = path.join(app.getPath('userData'), 'license.txt');

  // If the license file doesn't exist, copy it there
  if (!fs.existsSync(licensePath)) {
    const licenseContent = 'Mr_0x1'; // The correct license key

    fs.writeFileSync(licensePath, licenseContent);
    dialog.showMessageBox({
      type: 'info',
      message: 'License file installed successfully.',
      buttons: ['OK']
    });
  }
}

app.whenReady().then(() => {
  checkAndInstallLicense();
});