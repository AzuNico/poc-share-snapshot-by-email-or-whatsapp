import {Box, Center} from 'native-base';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ShareButton from '../components/ShareButton';
import Share from 'react-native-share';
import ShareLayout from '../layout/ShareLayout';
import {captureScreen} from 'react-native-view-shot';
import moment from 'moment';

export default function ShareContainer() {
  const [snapshot, setSnapshot] = useState('');
  const [currentTime, setCurrentTime] = useState(
    moment(new Date()).format('HH:mm:ss'),
  );
  useEffect(() => {
    setInterval(
      () => setCurrentTime(moment(new Date()).format('HH:mm:ss')),
      1000,
    );
  }, []);

  const shareOptionsWhatsApp = {
    social: Share.Social.WHATSAPP,
    // whatsAppNumber: '9199999999', // country code + phone number
    // message: 'probando compartir mensaje por whatsapp',
    url: snapshot,
    type: 'jpg',
    filename: 'captura hora', // only for base64 file in Android
  };
  const shareOptionsEmail = {
    social: Share.Social.EMAIL,
    url: snapshot,
    type: 'jpg',
    filename: 'captura hora',
    // whatsAppNumber: '9199999999', // country code + phone number
    // filename: 'test', // only for base64 file in Android
  };

  const caputureOptions = {
    format: 'jpg',
    quality: 0.8,
  };

  const handleShareByEmail = async () => {
    console.log('SHARE BY EMAIL');
    try {
      const shareResponse = await Share.shareSingle(shareOptionsEmail);
      console.log(
        'shareResponse Email: ',
        JSON.stringify(shareResponse, null, 2),
      );
      setSnapshot('');
    } catch (error) {
      console.log('Share Email Error', error);
      setSnapshot('');
    }
  };
  const handleShareByWhatsApp = async () => {
    console.log('SHARE BY WHATSAPP');
    try {
      const shareResponse = await Share.shareSingle(shareOptionsWhatsApp);
      console.log(
        'shareResponse WhatsApp: ',
        JSON.stringify(shareResponse, null, 2),
      );
      setSnapshot('');
    } catch (error) {
      console.log('Share WhatsApp Error', error);
      setSnapshot('');
    }
  };

  const handleTakeSnapshot = async () => {
    console.log('take snapshot');
    try {
      const uri = await captureScreen(caputureOptions);
      console.log('Image saved to', uri);
      setSnapshot(uri);
    } catch (error) {
      console.error('Oops, snapshot failed', error);
    }
  };
  const isDisabledShare = snapshot.length === 0;

  return (
    <ShareLayout
      time={currentTime}
      onPressShareByEmail={handleShareByEmail}
      onPressShareByWhatsApp={handleShareByWhatsApp}
      onTakeSnapshot={handleTakeSnapshot}
      disabledShare={isDisabledShare}
    />
  );
}
