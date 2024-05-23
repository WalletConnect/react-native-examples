import React, {useState} from 'react';
import {View} from 'react-native';
import {Button} from '@web3modal/ui-react-native';

import {useAccount, useWriteContract} from 'wagmi';
import {RequestModal} from '@/components/RequestModal';
import usdtAbi from '@/utils/usdtAbi';

export function WriteContract() {
  const [requestModalVisible, setRequetsModalVisible] = useState(false);
  const {isConnected, address} = useAccount();

  const {data, isPending, isSuccess, isError, writeContract} =
    useWriteContract();

  const onPress = async () => {
    try {
      writeContract({
        address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
        abi: usdtAbi,
        functionName: 'approve',
        args: [address, 100000],
      });
    } catch (error) {
      console.log(error);
    } finally {
      setRequetsModalVisible(true);
    }
  };

  return isConnected ? (
    <View>
      <Button disabled={isPending} onPress={onPress}>
        {isPending ? 'Loading...' : 'Write contract'}
      </Button>

      <RequestModal
        isVisible={requestModalVisible}
        isLoading={isPending}
        rpcResponse={isSuccess ? data?.toString() : undefined}
        rpcError={isError ? 'Error writing contract' : undefined}
        onClose={() => setRequetsModalVisible(false)}
      />
    </View>
  ) : null;
}