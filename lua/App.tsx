import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import translations from './translations'

i18n.translations = translations
i18n.locale = Localization.locale;
i18n.fallbacks = true;

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider >
        <Navigation/>
        <StatusBar style="light" translucent={true} />
      </SafeAreaProvider>
    );
  }
}
