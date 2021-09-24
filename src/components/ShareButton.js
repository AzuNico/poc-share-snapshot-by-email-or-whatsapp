import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Button} from 'native-base';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ShareButton = ({
  label = 'Compartir',
  icon = ['fab', 'whatsapp'],
  onPress,
}) => {
  return (
    <View>
      <Button
        onPress={onPress}
        endIcon={<FontAwesomeIcon color={'white'} size={25} icon={icon} />}
        size={'lg'}>
        {label}
      </Button>
    </View>
  );
};

export default ShareButton;
