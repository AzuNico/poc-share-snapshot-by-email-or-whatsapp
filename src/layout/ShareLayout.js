import {Box, Center} from 'native-base';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ShareButton from '../components/ShareButton';
import Share from 'react-native-share';

export default function ShareLayout({
  onPressShareByWhatsApp,
  onPressShareByEmail,
}) {
  return (
    <Center flex={1} px="3">
      <Box marginBottom={'5'}>
        <ShareButton
          label="Compartir por WhatsApp"
          onPress={onPressShareByWhatsApp}
        />
      </Box>
      <ShareButton
        label="Compartir por Mail"
        icon={'envelope'}
        onPress={onPressShareByEmail}
      />
    </Center>
  );
}
