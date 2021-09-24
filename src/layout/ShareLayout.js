import {Box, Center, Heading, ScrollView, Stack, VStack} from 'native-base';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ShareButton from '../components/ShareButton';
import Share from 'react-native-share';
import TakeSnapshotButton from '../components/TakeSnapshotButton';

export default function ShareLayout({
  onPressShareByWhatsApp,
  onPressShareByEmail,
}) {
  return (
    <Center
      flex={1}
      justifyContent={'space-between'}
      // style={{borderColor: 'red', borderWidth: 1}}
    >
      <Heading marginBottom="24" size="lg">
        Share App
      </Heading>
      <Stack space={5}>
        <Box marginBottom="24">
          <TakeSnapshotButton onPress={onPressShareByWhatsApp} />
        </Box>

        <ShareButton
          label="Compartir por WhatsApp"
          onPress={onPressShareByWhatsApp}
        />

        <ShareButton
          label="Compartir por Mail"
          icon={'envelope'}
          onPress={onPressShareByEmail}
        />
      </Stack>
    </Center>
  );
}
