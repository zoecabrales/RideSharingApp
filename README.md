# RideSharingApp
Test App that allows drivers to view nearby ride requests and accept or decline them

Project is used using React Native Expo CLI

Steps to run project
1. Clone project by copying the repository url
  - git clone <repository-url>
  
2. Open project using your preferred IDE navigate to project folder
  - cd ridesharing

3. Install dependencies
  - npm install or yarn install

4. Run project
  - expo start
  - if you get a warning due to SDK issues you can run "npm run es"
  short script that has been to the package.json instead of typing npx expo start which is obviously longer

5. Its best advisable to have your iOS simulator or Android emulator up and running
  - once Metro bundler is up and running press "i" to to install Expo Go app in iOS simulator and wait until app successfully builds
  - press "a" to install Expo Go in Android simulator and wait until app successfully builds

Project structure
root project folder
 - android (android native code implementation)
 - assets (images used for SplashScreen, logos, etc.)
 - ios (ios native code implementation)
 - navigation (root directory in navigating betwen screens)
 - redux (global state management directory)
 - screens (UI implementation directory)
