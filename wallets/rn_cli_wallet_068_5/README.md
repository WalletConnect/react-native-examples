## React Native CLI Wallet (0.68.5)

This is a React Native Application that uses the `react-native` CLI client.

### Installation

Inside this directory (`wallets/rn_cli_wallet_068_5`), install the React Native dependencies:

```bash
yarn
```

Set up your own `.env` file from the example and **replace `ENV_PROJECT_ID` with your own ProjectId from https://cloud.reown.com**

```bash
cp .env.example .env
```

### Testing the Wallet

- Go to our [React App](https://react-app.reown.com/)
- Get the WC URI
- Paste into the React Native Wallet
- Pair (Approve or reject)
- Perform actions on the React App to test the various methods

### Setup (iOS)

If CocoaPods is not installed on your system yet:

```bash
brew install cocoapods
```

Install iOS deps:

```bash
cd ios
pod install
```

To run:

- `npx react-native run-ios`

### Setup (Android)

1. Follow the [official Environment Setup guidance](https://reactnative.dev/docs/environment-setup) for Android (select `Android` for `Target OS`) to install Android Studio etc.
2. Set up either a virtual or physical device as outlined in the _Preparing the Android device_ section of the guidance.

To run:

- `npx react-native run-android`
