import {useSnapshot} from 'valtio';
import {useEffect, useState} from 'react';
import {Text, View, Alert, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Clipboard from '@react-native-clipboard/clipboard';
import {getVersion, getBuildNumber} from 'react-native-device-info';

import {eip155Wallets} from '@/utils/EIP155WalletUtil';
import SettingsStore from '@/store/SettingsStore';
import {Card} from '@/components/Card';
import {useTheme} from '@/hooks/useTheme';
import styles from './styles';
export default function Settings() {
  const Theme = useTheme();
  const {eip155Address} = useSnapshot(SettingsStore.state);
  const [clientId, setClientId] = useState('');

  useEffect(() => {
    async function getAsyncData() {
      const _clientId = await AsyncStorage.getItem('WALLETCONNECT_CLIENT_ID');
      if (_clientId) {
        setClientId(_clientId);
      }
    }
    getAsyncData();
  }, []);

  const copyToClipboard = (value: string) => {
    Clipboard.setString(value);
    Alert.alert('Value copied to clipboard');
  };

  return (
    <ScrollView
      style={[styles.container]}
      contentContainerStyle={[styles.content]}
      contentInsetAdjustmentBehavior="automatic">
      <Text style={[styles.subtitle, {color: Theme['fg-100']}]}>Account</Text>
      <View style={styles.sectionContainer}>
        <Card
          title="ETH Address"
          value={eip155Address}
          onPress={() => copyToClipboard(eip155Address)}
        />
        <Card
          title="Seed Phrase"
          onPress={() =>
            copyToClipboard(eip155Wallets[eip155Address].getMnemonic())
          }
          value={eip155Wallets[eip155Address].getMnemonic()}
        />
      </View>
      <Text style={[styles.subtitle, {color: Theme['fg-100']}]}>Device</Text>
      <View style={styles.sectionContainer}>
        <Card
          title="Client ID"
          value={clientId}
          onPress={() => copyToClipboard(clientId)}
        />
        <Card
          title="App version"
          value={`${getVersion()} (${getBuildNumber()})`}
        />
      </View>
    </ScrollView>
  );
}
