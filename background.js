chrome.commands.onCommand.addListener((command) => {
  if (command !== "take-screenshot") return;

  chrome.tabs.captureVisibleTab(null, { format: "png" }, (dataUrl) => {
    if (chrome.runtime.lastError || !dataUrl) return;

    const now = new Date();
    const pad = (n) => String(n).padStart(2, "0");
    const filename = `screenshot_${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}_${pad(now.getHours())}-${pad(now.getMinutes())}-${pad(now.getSeconds())}.png`;

    chrome.downloads.download({
      url: dataUrl,
      filename: filename,
      saveAs: false,
    });
  });
});
