
# Phone Emulator DesktopA lightweight desktop application that turns your local                       into a standalone mobile phone emulator, built with Electron. Perfect for testing mobile web apps or presentations without needing a physical device.

## Features

- 📱 **Phone frame** with iPhone-style notch and Android theme toggle

- 🌐 **Built-in browser** – load any URL (local or remote)

- 🔄 **3D rotation** – tilt the phone for presentation effects

- 🎨 **Theme switching** – toggle between iPhone and Android look

- ⌨️ **Keyboard shortcut** –                to show/hide controls

- 💾 **URL persistence** – remembers last visited URL

## Installation

- Clone or download this repository.

- Open a terminal in the project folder.

- Install dependencies:

                   

## Usage
Start the application:

                 

The emulator window will open. Use the address bar to enter any URL (e.g.,                         for your local dev server) and press **Go** or **Enter**.

### Controls
Press                to toggle the control panel (hidden by default). From there you can:

- Switch between **iPhone** and **Android** themes

- Rotate the phone using the slider

- Reset rotation

## Project Structure

-                       – the main frontend (phone UI + iframe)

-           – Electron entry point (creates the window)

-                – npm configuration and dependencies

-              – excludes node_modules, logs, and IDE files

## Requirements

- Node.js (v16 or later recommended)

- npm (comes with Node.js)

## Building for Distribution (optional)
To package the app as an executable for Windows/macOS/Linux, you can use                   . Add it to                and run:

                    

(You'll need to set up the build configuration in               .)

## License
Private. All rights reserved.
