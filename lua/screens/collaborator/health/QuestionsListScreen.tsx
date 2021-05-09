import React from "react";
import { Text, View, ScrollView, useColorScheme, StyleSheet } from 'react-native';
import { TinyButton } from '../../../components/CommonComponents';
import { commonStyles } from '../../../styles/common.styles';
import Header from "../../../components/Header";
import { NavigationParams, NavigationState } from 'react-navigation';
import { NavigationStackProp } from 'react-navigation-stack';

export type SampleScreenProps = {
  navigation: NavigationStackProp<NavigationState, NavigationParams>
}

export default ({ navigation }: SampleScreenProps) => {
  const colorScheme = useColorScheme();
  const styles = commonStyles();
  const questionList = [
    {
      "title": "Comment enregistrer une plainte, une suggestion ou un compliment concernant les soins fournis par les bureaux de santé de base du district fédéral?"
    },
    {
      "title": "Qui peut se vacciner ? "
    },
    {
      "title": "¿Cómo funciona la Estrategia de Salud de la Familia en el Distrito Federal?"
    },
    {
      "title": "¿Puedo recibir la vacuna contra la covid y la vacuna contra la gripa al mismo tiempo?"
    }
  ]

  const onPressAnswer = (question: any) => {
    navigation.navigate('AnswerQuestion', { question: question });
  }
  return (
    <View style={styles.screen}>
      <Header
        title="Responder dúvida"
        hasBackButton={true}
        onBackPress={navigation.goBack}
      />
      <ScrollView style={styles.contentContainer}>
        {
          questionList.map((question, i) => {
            return (
              <View key={i} style={[styles.bigCardContainer, local_styles.cardContainer]}>
                <Text style={[styles.tinyPrimaryText]}>{question.title}</Text>
                <TinyButton
                  text="Responder"
                  style={local_styles.button}
                  onPress={() => onPressAnswer(question)}
                />
              </View>
            );
          })
        }
        <View style={styles.paddingBottomBar} />
      </ScrollView>
    </View>
  );
}
const local_styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
  },
  cardContainer: {
    marginBottom: 20,
    justifyContent:'space-between'
  },
  button: {
    alignSelf: 'flex-end'
  }
})