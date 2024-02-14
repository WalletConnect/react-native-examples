import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import useColors from '../utils/theme';
import {DateUtil} from '../utils/date';
import {NotifyClientTypes} from '@walletconnect/notify-client';

type NotificationItemProps = {
  title: string;
  description: string;
  sentAt: number;
  url: string | null;
  subscription: NotifyClientTypes.NotifySubscription;
  onPress: () => void;
};

export default function NotificationItemWithSubscription({
  title,
  description,
  sentAt,
  url,
  subscription,
  onPress,
}: NotificationItemProps) {
  const colors = useColors();

  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        {
          backgroundColor:
            pressed && url ? colors.backgroundActive : colors.background,
          borderColor: colors.border,
        },
        styles.container,
      ]}>
      <View style={styles.subscriptionImageContainer}>
        <View style={styles.subscriptionImageBorder} />
        <Image
          source={{
            uri: subscription.metadata.icons[0],
          }}
          style={styles.subscriptionImage}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text
          style={[
            styles.title,
            {
              color: colors.primary,
            },
          ]}>
          {title}
        </Text>
        {sentAt ? (
          <Text
            style={[
              styles.description,
              {
                color: colors.secondary,
              },
            ]}>
            {DateUtil.getRelativeDateFromNow(sentAt)}
          </Text>
        ) : null}
      </View>
      <Text style={styles.description}>{description}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
  },
  subscriptionImageContainer: {
    position: 'absolute',
    bottom: -4,
    left: -4,
    width: 16,
    height: 16,
    borderRadius: 8,
  },
  subscriptionImageBorder: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 32,
    borderWidth: 1.25,
    borderColor: 'rgba(150,150,150,1)',
    zIndex: 999,
    opacity: 0.15,
  },
  subscriptionImage: {
    width: 16,
    height: 16,
    borderRadius: 8,
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
  },
  description: {
    fontSize: 12,
    fontWeight: '400',
  },
  sentAt: {
    fontSize: 11,
    fontWeight: '400',
  },
});
