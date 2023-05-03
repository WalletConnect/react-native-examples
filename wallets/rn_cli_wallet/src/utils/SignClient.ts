import {Core} from '@walletconnect/core';
import {WalletClient} from '@walletconnect/push-client';
import SignClient from '@walletconnect/sign-client';
// @ts-expect-error - `@env` is a virtualised module via Babel config.
import {ENV_PROJECT_ID, ENV_RELAY_URL} from '@env';

export let signClient: SignClient;
export let pushClient: WalletClient;

const core = new Core({
  projectId: ENV_PROJECT_ID,
  relayUrl: ENV_RELAY_URL ?? 'wss://relay.walletconnect.com',
});

export async function createSignClient() {
  console.log('[CONFIG] ENV_PROJECT_ID:', ENV_PROJECT_ID);
  console.log('[CONFIG] ENV_RELAY_URL:', ENV_RELAY_URL);

  signClient = await SignClient.init({
    core,
    logger: 'debug',
    projectId: ENV_PROJECT_ID,
    relayUrl: ENV_RELAY_URL,
    metadata: {
      name: 'React Native Wallet',
      description: 'React Native Wallet for WalletConnect',
      url: 'https://walletconnect.com/',
      icons: ['https://avatars.githubusercontent.com/u/37784886'],
    },
  });
}

export async function createPushClient() {
  pushClient = await WalletClient.init({
    core,
    projectId: ENV_PROJECT_ID,
    relayUrl: ENV_RELAY_URL,
    logger: 'debug',
  });
}
