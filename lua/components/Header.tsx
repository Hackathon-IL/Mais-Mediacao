import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { BackIcon, OptionsIcon } from './svg/IconsSvg'
import { commonStyles } from '../styles/common.styles';

type HeaderProp = {
  title?: string,
  subtitle?: string,
  onBackPress?: () => void,
  onOptionsPress?: () => void,
  hasBackButton?: boolean,
  hasOptionsButton?: boolean
}
const Header = ({
  subtitle, title = '',
  onBackPress = () => { }, onOptionsPress = () => { },
  hasBackButton = false, hasOptionsButton = false }: HeaderProp) => {
  const styles = commonStyles();
  return (
    <View
      style={[styles.headerContainer,
      {
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 15,
        paddingRight: 15
      }
      ]}>
      <TouchableOpacity
        onPress={onBackPress}
      >
        <BackIcon width={hasBackButton ? 25 : 0} />
      </TouchableOpacity>
      <View>
        <Text style={[styles.mediumPrimaryText, { color: '#FFFFFF', textAlign: 'center' }]}>
          {title}
        </Text>
        {
          subtitle !== undefined ?
          <Text style={[styles.tinyPrimaryText, { color: '#FFFFFF', textAlign: 'center' }]}>
          {subtitle}
        </Text> : null
        }

      </View>
      <TouchableOpacity
        onPress={onOptionsPress}
        style={{}}
      >
        <OptionsIcon width={hasOptionsButton ? 25 : 0} />
      </TouchableOpacity>
    </View>
  );
}
export default Header;
