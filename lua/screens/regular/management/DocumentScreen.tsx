import React from "react";
import { Text, View, ScrollView, useColorScheme, StyleSheet, Image } from 'react-native';
import { Button, TinyButton } from '../../../components/CommonComponents';
import { commonStyles } from '../../../styles/common.styles';
import { t } from 'i18n-js';
import Header from "../../../components/Header";
import { NavigationParams, NavigationState } from 'react-navigation';
import { NavigationStackProp } from 'react-navigation-stack';

export type DocumentScreenProps = {
  navigation: NavigationStackProp<NavigationState, NavigationParams>
}

export default ({ navigation }: DocumentScreenProps) => {
  const colorScheme = useColorScheme();
  const styles = commonStyles();
  return (
    <View style={styles.screen}>
      <Header
        title={"Emissão de documentos"}
        hasBackButton={true}
        onBackPress={navigation.goBack}
      />
      <ScrollView style={styles.contentContainer}>
        <View style={local_styles.contentContainer}>
          <View style={local_styles.labelContainer}>
            <Image source={require('../../../assets/images/immigrant.png')} style={local_styles.icon} />
            <Text style={local_styles.labelText}>Imigrantes</Text>
          </View>
          <View style={styles.horizontalSeparator} />
          <Text style={local_styles.contentText}>
            O solicitante deve se dirigir à unidade da Polícia Federal em que haja atendimento a imigrantes da circunscrição onde esteja domiciliado. A Carteira de Registro Nacional Migratório será entregue na unidade de atendimento da Polícia Federal.  O registro consiste na identificação civil, por dados biográficos e biométricos, para obter um número de Registro Nacional Migratório (RNM) e a Carteira de Registro Nacional Migratório (CRNM).
            O imigrante com visto temporário que tenha ingressado no País deverá proceder à solicitação de registro no prazo de noventa dias, contado da data de ingresso em território nacional. O imigrante a quem tenha sido deferido o pedido de autorização de residência no País deverá proceder à solicitação de registro no prazo de trinta dias, contado da data da publicação do deferimento do referido pedido.
          </Text>
        </View>
        <View style={local_styles.contentContainer}>
          <View style={local_styles.labelContainer}>
            <Image source={require('../../../assets/images/indigenous.png')} style={local_styles.icon} />
            <Text style={local_styles.labelText}>Indígenas</Text>
          </View>
          <View style={styles.horizontalSeparator} />
          <Text style={local_styles.contentText}>
            O indígena pode ir à Advocacia-Geral da União (AGU) ou à Fundação Nacional do Índio (Funai) e retirar o Registro Administrativo de Nascimento de Índio (Rani).          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
const local_styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
  },
  icon: {
    height: 30,
    width: 30,
    marginRight: 1
  },
  labelText: {
    fontSize: 14
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 5,
    marginBottom: 10
  },
  contentText: {

  },
  contentContainer: {
    padding: 10
  }
})