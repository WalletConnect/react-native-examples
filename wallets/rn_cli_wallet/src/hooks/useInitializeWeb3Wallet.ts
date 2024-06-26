import {useCallback, useEffect, useRef, useState} from 'react';
import {useSnapshot} from 'valtio';

import SettingsStore from '@/store/SettingsStore';
import {createOrRestoreEIP155Wallet} from '@/utils/EIP155WalletUtil';
import {createWeb3Wallet, web3wallet} from '@/utils/WalletConnectUtil';

export default function useInitializeWeb3Wallet() {
  const [initialized, setInitialized] = useState(false);
  const prevRelayerURLValue = useRef<string>('');

  const {relayerRegionURL} = useSnapshot(SettingsStore.state);

  const onInitialize = useCallback(async () => {
    try {
      const {eip155Addresses, eip155Wallets} =
        await createOrRestoreEIP155Wallet();

      SettingsStore.setEIP155Address(eip155Addresses[0]);
      SettingsStore.setWallet(eip155Wallets[eip155Addresses[0]]);
      await createWeb3Wallet(relayerRegionURL);
      setInitialized(true);
      SettingsStore.state.initPromiseResolver?.resolve(undefined);
    } catch (err: unknown) {
      console.log(err);
    }
  }, [relayerRegionURL]);

  // restart transport if relayer region changes
  const onRelayerRegionChange = useCallback(() => {
    try {
      web3wallet.core.relayer.restartTransport(relayerRegionURL);
      prevRelayerURLValue.current = relayerRegionURL;
    } catch (err: unknown) {
      console.log(err);
    }
  }, [relayerRegionURL]);

  useEffect(() => {
    if (!initialized) {
      onInitialize();
    }
    if (prevRelayerURLValue.current !== relayerRegionURL) {
      onRelayerRegionChange();
    }
  }, [initialized, onInitialize, relayerRegionURL, onRelayerRegionChange]);

  return initialized;
}
