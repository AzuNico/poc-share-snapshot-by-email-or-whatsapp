import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Button} from 'native-base';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TakeSnapshotButton = ({
  label = 'Sacar Captura',
  icon = ['fab', 'whatsapp'],
  onPress,
}) => {
  return (
    <View>
      <Button
        colorScheme="secondary"
        onPress={onPress}
        endIcon={<FontAwesomeIcon color={'white'} size={25} icon={'camera'} />}
        size={'lg'}>
        {label}
      </Button>
    </View>
  );
};

export default TakeSnapshotButton;
