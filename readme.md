## Getting Started

Follow these steps to set up and run the project from scratch.

---

### Prerequisites

Ensure the following are installed on your system:

1. **Node.js**  
   Download and install from [https://nodejs.org/en/download](https://nodejs.org/en/download)

2. **Git**  
   Install Git if you have not already done so. Visit [https://git-scm.com/downloads](https://git-scm.com/downloads)

3. **Watchman** (optional but recommended)  
   Watchman improves the development experience by:
   - Detecting file changes quickly and reliably after saving
   - Reducing the chance of missed updates or stale reloads
   - Improving Fast Refresh performance on macOS and Linux-based systems
   - Handling large projects efficiently by indexing and watching only relevant files
   - Supporting cross-platform usage, including WSL and networked filesystems

   **Note:** Watchman does **not** eliminate the need to save files — it simply ensures updates are triggered more reliably after saving.

   **To install Watchman on Ubuntu/Debian-based systems:**
   ```bash
   sudo apt install -y watchman
   ```

   In your project root, run:
   ```bash
   watchman watch .
   ```

   To verify:
   ```bash
   watchman watch-list
   ```

   If your project path appears in the output, Watchman is set up correctly.

---

### Mobile App Preview

1. **Install the Expo Go app**  
   - [Google Play Store – Expo Go](https://play.google.com/store/apps/details?id=host.exp.exponent)  
   - [Apple App Store – Expo Go](https://apps.apple.com/app/expo-go/id982107779)

---

### Development Environment

1. **Choose an IDE or text editor**  
   You may use any code editor of your choice. This project was originally developed using Visual Studio Code.

2. **Verify Node.js installation**  
   Open your terminal and run:
   ```bash
   node -v
   ```

3. **Clone the repository**  
   Navigate to your preferred directory and run:
   ```bash
   git clone <your-repo-url>
   cd <your-project-folder>
   ```

4. **Activate the correct Node version (if using NVM):**
   ```bash
   nvm use
   ```

5. **Install project dependencies:**
   ```bash
   npm install
   ```

---

### Running the Project

1. Open the project in your IDE.

2. In the terminal, start the Expo development server:
   ```bash
   npx expo start
   ```

3. Ensure that:
   - Your computer and your mobile device are connected to the **same Wi-Fi network**
   - The IP address is correctly shared (e.g. both devices are visible to each other)

4. Use the **Expo Go app** to scan the QR code displayed in the terminal. The project will run directly on your mobile device.

---

### Running on Android Emulator (Optional)

If you wish to use an Android emulator:

1. **Install Android Studio**  
   Follow instructions at [https://developer.android.com/studio/install](https://developer.android.com/studio/install)

2. **Set up an Android emulator with Expo Go**  
   Refer to [Expo Android Emulator Setup Guide](https://docs.expo.dev/get-started/set-up-your-environment/?platform=android&device=simulated&mode=expo-go)

3. **Recommended configuration:**  
   - **SDK Platform:** Android 14.0 ("UpsideDownCake") – API level 34  
   - **System Image:** Use the recommended image for API 34  
   - **Virtual Device:** Create a virtual device with the above specifications