import {
  Box,
  Center,
  Heading,
  ScrollView,
  Stack,
  VStack,
  Text,
  View,
} from 'native-base';
import React from 'react';

import ShareButton from '../components/ShareButton';
import Share from 'react-native-share';
import TakeSnapshotButton from '../components/TakeSnapshotButton';
import moment from 'moment';

export default function ShareLayout({
  onPressShareByWhatsApp,
  onPressShareByEmail,
  onTakeSnapshot,
  disabledShare,
  time,
}) {
  return (
    <View flex={1} style={{backgroundColor:"white"}} >
      <Center flex={1} justifyContent={'space-between'}>
        <Heading marginBottom="24" size="lg">
          Share App
        </Heading>

        <Text marginBottom="24" bold fontSize="2xl">
          {time}
        </Text>

        <Stack space={5}>
          <Box marginBottom="24">
            <TakeSnapshotButton onPress={onTakeSnapshot} />
          </Box>

          <ShareButton
            label="Compartir por WhatsApp"
            onPress={onPressShareByWhatsApp}
            disabled={disabledShare}
          />

          <ShareButton
            label="Compartir por Mail"
            icon={'envelope'}
            onPress={onPressShareByEmail}
            disabled={disabledShare}
          />
        </Stack>
      </Center>
    </View>
  );
}
