import React, {useState} from 'react';
import {View} from 'react-native';
import {Button} from '@web3modal/ui-react-native';

import {useAccount, useContractWrite} from 'wagmi';
import {RequestModal} from '../components/RequestModal';
import usdtAbi from '../utils/usdtAbi';

export function WriteContract() {
  const [requestModalVisible, setRequetsModalVisible] = useState(false);
  const {isConnected, address} = useAccount();

  const {data, isLoading, isSuccess, isError, writeAsync} = useContractWrite({
    address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    abi: usdtAbi,
    functionName: 'approve',
  });

  const onPress = () => {
    setRequetsModalVisible(true);
    try {
      writeAsync({
        args: [address, 100000],
      });
    } catch (error) {
      console.log(error);
    }
  };

  return isConnected ? (
    <View>
      <Button disabled={isLoading} onPress={onPress}>
        Write contract
      </Button>

      <RequestModal
        isVisible={requestModalVisible}
        isLoading={isLoading}
        rpcResponse={isSuccess ? data?.toString() : undefined}
        rpcError={isError ? 'Error writing contract' : undefined}
        onClose={() => setRequetsModalVisible(false)}
      />
    </View>
  ) : null;
}
