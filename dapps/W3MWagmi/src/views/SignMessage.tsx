import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {Button} from '@web3modal/ui-react-native';

import {useAccount, useSignMessage} from 'wagmi';
import {RequestModal} from '../components/RequestModal';

export function SignMessage() {
  const [requestModalVisible, setRequetsModalVisible] = useState(false);
  const {isConnected} = useAccount();

  const {data, isError, isLoading, isSuccess, signMessage} = useSignMessage({
    message: 'hello web3modal + wagmi',
  });

  const onPress = () => {
    signMessage();
  };

  useEffect(() => {
    if (isSuccess || isError) {
      setRequetsModalVisible(true);
    }
  }, [isSuccess, isError]);

  return isConnected ? (
    <View>
      <Button disabled={isLoading} onPress={onPress}>
        {isLoading ? 'Loading...' : 'Sign message'}
      </Button>

      <RequestModal
        isVisible={requestModalVisible}
        isLoading={isLoading}
        rpcResponse={isSuccess ? data : undefined}
        rpcError={isError ? 'Error signing message' : undefined}
        onClose={() => setRequetsModalVisible(false)}
      />
    </View>
  ) : null;
}
