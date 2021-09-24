import {Box, Center} from 'native-base';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ShareButton from '../components/ShareButton';
import Share from 'react-native-share';
import ShareLayout from '../layout/ShareLayout';

export default function ShareContainer() {
  const shareOptionsWhatsApp = {
    social: Share.Social.WHATSAPP,
    // whatsAppNumber: '9199999999', // country code + phone number
    // message: 'probando compartir mensaje por whatsapp',
    type: 'jpg',
    filename: 'full', // only for base64 file in Android
  };
  const shareOptionsEmail = {
    social: Share.Social.EMAIL,
    // whatsAppNumber: '9199999999', // country code + phone number
    // filename: 'test', // only for base64 file in Android
  };

  const handleShareByEmail = async () => {
    console.log('SHARE BY EMAIL');
    try {
      const shareResponse = await Share.shareSingle(shareOptionsEmail);
      console.log('shareResponse Email: ', JSON.stringify(shareResponse, null, 2));
    } catch (error) {
      console.log('Share Email Error', error);
    }
  };
  const handleShareByWhatsApp = async () => {
    console.log('SHARE BY WHATSAPP');
    try {
      const shareResponse = await Share.shareSingle(shareOptionsWhatsApp);
      console.log('shareResponse WhatsApp: ', JSON.stringify(shareResponse, null, 2));
    } catch (error) {
      console.log('Share WhatsApp Error', error);
    }
  };

  return (
    <ShareLayout
      onPressShareByEmail={handleShareByEmail}
      onPressShareByWhatsApp={handleShareByWhatsApp}
    />
  );
}
