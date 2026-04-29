# Quick Screenshot

Minimal Chrome extension that captures the visible part of the current page with a single keyboard shortcut and saves it as a PNG to your Downloads folder.

## Shortcut

- **macOS:** `Cmd + Shift + S`
- **Windows / Linux:** `Ctrl + Shift + S`

## Install (Load Unpacked)

1. Clone or download this repository.
2. Open `chrome://extensions` in Chrome.
3. Enable **Developer mode** (top right).
4. Click **Load unpacked** and select the project folder.
5. Press the shortcut on any page to save a screenshot.

## What it does

- Captures the **visible viewport** of the active tab (not the full scrollable page).
- Saves the file as `screenshot_YYYY-MM-DD_HH-MM-SS.png` to the default Downloads folder.
- Saves silently — no save dialog, no popup.

## Customize the shortcut

Open `chrome://extensions/shortcuts` to rebind the key combination if `Cmd+Shift+S` conflicts with another extension.

## Files

- `manifest.json` — Manifest V3 declaration, permissions, and command binding.
- `background.js` — Service worker that handles the command and triggers the capture + download.
- `icons/` — Extension icons (16, 48, 128).

## Permissions

- `activeTab` — read the currently focused tab when the shortcut fires.
- `tabs` — required by `captureVisibleTab`.
- `downloads` — write the PNG file to disk.

## License

MIT
