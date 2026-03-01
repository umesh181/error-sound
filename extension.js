const vscode = require("vscode");
const { exec } = require("child_process");
const os = require("os");
const path = require("path");

function playSound(file) {
  const platform = os.platform();

  if (platform === "darwin") {
    // macOS
    exec(`afplay "${file}"`, handleError);
  } else if (platform === "win32") {
    // Windows (WAV recommended)
    exec(`powershell -c (New-Object Media.SoundPlayer '${file}').PlaySync();`, handleError);
  } else {
    // Linux
    exec(`aplay "${file}"`, handleError);
  }
}

function handleError(error) {
  if (error) {
    console.error("Error playing sound:", error.message);
  }
}

function activate(context) {
  console.log("Error Sound Extension Activated 🚀");

  vscode.window.onDidEndTerminalShellExecution((event) => {
    const config = vscode.workspace.getConfiguration("errorSound");

    const enableSuccess = config.get("enableSuccessSound", true);
    const enableFailure = config.get("enableFailureSound", true);

    const exitCode = event.exitCode;

    const successSound = context.asAbsolutePath("audios/7_crore.wav");
    const failureSound = context.asAbsolutePath("audios/fah.wav");

    if (exitCode === 0 && enableSuccess) {
      playSound(successSound);
    }

    if (exitCode !== 0 && enableFailure) {
      playSound(failureSound);
    }
  });
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};