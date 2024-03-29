import React from 'react';

import SubscriptionSettingsScreen from '@/screens/SubscriptionSettingsScreen';
import SubscriptionDetailsScreen from '@/screens/SubscriptionDetailsScreen';

import {useTheme} from '@/hooks/useTheme';
import {SubscriptionsStackParamList} from '@/utils/TypesUtil';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SubscriptionsScreen from '@/screens/SubscriptionsScreen';
import SubscriptionDetailsSettingsButton from '@/components/SubscriptionDetailsSettingsButton';

const Stack = createNativeStackNavigator<SubscriptionsStackParamList>();

export default function SubscriptionsStack() {
  const Theme = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {backgroundColor: Theme['bg-100']},
        headerStyle: {backgroundColor: Theme['bg-100']},
        headerTitleStyle: {
          color: Theme['fg-100'],
        },
      }}>
      <Stack.Screen
        name="SubscriptionsScreen"
        options={{
          headerLargeTitle: true,
          headerTitle: 'Notifications',
        }}
        component={SubscriptionsScreen}
      />
      <Stack.Screen
        name="SubscriptionDetailsScreen"
        component={SubscriptionDetailsScreen}
        options={({route}) => ({
          title: route?.params?.name,
          headerTintColor: Theme['fg-100'],
          headerRight: () => (
            <SubscriptionDetailsSettingsButton
              topic={route.params.topic}
              name={route.params?.name}
            />
          ),
        })}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Settings',
          headerLargeTitle: true,
          headerTintColor: Theme['fg-100'],
          headerBackTitle: 'Back',
        }}
        name="SubscriptionSettingsScreen"
        component={SubscriptionSettingsScreen}
      />
    </Stack.Navigator>
  );
}
