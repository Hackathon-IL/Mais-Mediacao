import React, { useEffect } from "react";
import { Text, View, StyleSheet, TextInput as TInput } from 'react-native';
import { Button } from '../../../components/CommonComponents';
import { commonStyles } from '../../../styles/common.styles';
import Header from "../../../components/Header";
import { NavigationParams, NavigationState } from 'react-navigation';
import { NavigationStackProp } from 'react-navigation-stack';

export type EditAnswerProps = {
  navigation: NavigationStackProp<NavigationState, NavigationParams>
  route: any
}

export default ({ navigation, route }: EditAnswerProps) => {
  const styles = commonStyles();
  const [questionTitle, setQuestionTitle] = React.useState<string>('');

  useEffect(() => {
    console.log(route);
    if (route.params?.question != undefined) {
      setQuestionTitle(route.params.question.title);
    }
  });

  return (
    <View style={styles.screen}>
      <Header
        title="Editar resposta"
        hasBackButton={true}
        onBackPress={navigation.goBack}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.mediumPrimaryText}>{questionTitle}</Text>
        <View style={styles.horizontalSeparator} />
        <View style={[styles.placeholderContainer, local_styles.questionContainer]}>
          <TInput
            placeholder={"Escreva a resposta"}
            style={local_styles.questionContainer}
            multiline
            numberOfLines={4}
          />
        </View>
        <Button text="Editar resposta" style={local_styles.button} />
      </View>
    </View>
  );
}
const local_styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
  },
  questionContainer: {
    height: 250,
  },
  button: {
    width:'100%'
  }
})