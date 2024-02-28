import '@walletconnect/react-native-compat';
import {StatusBar, useColorScheme} from 'react-native';
import {
  createWeb3Modal,
  defaultWagmiConfig,
  Web3Modal,
} from '@web3modal/wagmi-react-native';

import Clipboard from '@react-native-clipboard/clipboard';
import * as Sentry from '@sentry/react-native';

import {WagmiConfig} from 'wagmi';
import {
  arbitrum,
  mainnet,
  polygon,
  avalanche,
  bsc,
  optimism,
  gnosis,
  zkSync,
  zora,
  base,
  celo,
  aurora,
} from 'wagmi/chains';
import {ENV_PROJECT_ID, ENV_SENTRY_DSN} from '@env';
import {NavigationContainer} from '@react-navigation/native';
import {NotifyClientProvider} from './provider/NotifyClientProvider';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import TabNavigator from './navigation/TabNavigator';

if (!__DEV__ && ENV_SENTRY_DSN) {
  Sentry.init({
    dsn: ENV_SENTRY_DSN,
  });
}

const projectId = ENV_PROJECT_ID;

const metadata = {
  name: 'Web3Inbox',
  description: 'Web3Inbox mobile app with React Native',
  url: 'https://lab.web3inbox.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
  redirect: {
    native: 'web3inbox://',
  },
};

const clipboardClient = {
  setString: async (value: string) => {
    Clipboard.setString(value);
  },
};

const chains = [
  mainnet,
  polygon,
  arbitrum,
  avalanche,
  bsc,
  optimism,
  gnosis,
  zkSync,
  zora,
  base,
  celo,
  aurora,
];

const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
});

createWeb3Modal({
  projectId,
  chains,
  wagmiConfig,
  clipboardClient,
  excludeWalletIds: [
    'fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa', // Hide coinbase until their SDK is implemented
  ],
});

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <GestureHandlerRootView style={{flex: 1}}>
        <WagmiConfig config={wagmiConfig}>
          <NotifyClientProvider>
            <StatusBar
              barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            />
            <TabNavigator />
            <Web3Modal />
          </NotifyClientProvider>
        </WagmiConfig>
      </GestureHandlerRootView>
    </NavigationContainer>
  );
}

export default App;
