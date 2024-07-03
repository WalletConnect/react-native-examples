import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import {useSnapshot} from 'valtio';
import SettingsStore from '@/stores/SettingsStore';
import {useTheme} from '@/hooks/useTheme';

interface Props {
  isVisible: boolean;
  onClose: () => void;
  isLoading?: boolean;
  rpcResponse?: string;
  rpcError?: string;
}

export function RequestModal({
  isVisible,
  onClose,
  isLoading,
  rpcResponse,
  rpcError,
}: Props) {
  const Theme = useTheme();
  const {isCurrentRequestLinkMode} = useSnapshot(SettingsStore.state);

  const handleClose = () => {
    SettingsStore.setCurrentRequestLinkMode(false);
    onClose();
  };

  const isSuccess = !!rpcResponse && !rpcError;

  return (
    <Modal isVisible={isVisible} onBackdropPress={handleClose}>
      <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
        <Text>X</Text>
      </TouchableOpacity>
      <View style={styles.innerContainer}>
        {isLoading && (
          <>
            <Text style={styles.title}>Pending Request</Text>
            <ActivityIndicator
              color={Theme['accent-100']}
              style={styles.loader}
            />
            <Text style={styles.center}>
              Approve or reject request using your wallet if needed
            </Text>
          </>
        )}

        {rpcResponse && (
          <>
            <Text style={[styles.title, {color: Theme['success-100']}]}>
              Request Response
            </Text>
            <Text style={styles.responseText}>{rpcResponse}</Text>
          </>
        )}
        {rpcError && (
          <>
            <Text style={[styles.title, {color: Theme['error-100']}]}>
              Request Failure
            </Text>
            <Text style={styles.subtitle}>
              Error: <Text style={styles.responseText}>{rpcError}</Text>
            </Text>
          </>
        )}
        {isCurrentRequestLinkMode && (
          <View
            style={[
              styles.linkModeContainer,
              {
                backgroundColor: isSuccess
                  ? Theme['success-100']
                  : Theme['error-100'],
              },
            ]}>
            <Text style={[styles.linkMode, {color: Theme['inverse-000']}]}>
              LINK MODE
            </Text>
          </View>
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  closeButton: {
    alignSelf: 'flex-end',
    backgroundColor: 'white',
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    margin: 8,
  },
  innerContainer: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  loader: {
    marginVertical: 24,
  },
  title: {
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontWeight: 'bold',
    marginVertical: 4,
  },
  center: {
    textAlign: 'center',
  },
  responseText: {
    fontWeight: '300',
  },
  linkModeContainer: {
    borderRadius: 20,
    height: 25,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  linkMode: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
  },
});
