import React from "react";
import { Text, View, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from '../../../components/CommonComponents';
import { commonStyles } from '../../../styles/common.styles';
import Header from "../../../components/Header";
import { NavigationParams, NavigationState } from 'react-navigation';
import { NavigationStackProp } from 'react-navigation-stack';

export type FaqScreenProps = {
  navigation: NavigationStackProp<NavigationState, NavigationParams>
}

export default ({ navigation }: FaqScreenProps) => {
  const styles = commonStyles();
  const questions = [
    {
      "title": "Como posso me cadastrar no bolsa família?",
      "answers": [
        {
          "icon": require('../../../assets/images/immigrant.png'),
          "subtitle": "Imigrantes",
          "text": "Para entrar no programa o cidadão deve estar inscrito no Cadastro Único para Programas Sociais do Governo Federal (CadÚnico) para participar. Além disso, os membros do grupo familiar devem atender a outros critérios estabelecidos pelo Ministério da Cidadania para serem considerados elegíveis de receber o benefício."
        },
        {
          "icon": require('../../../assets/images/indigenous.png'),
          "subtitle": "Indígenas",
          "text": "Para entrar no programa o cidadão deve estar inscrito no Cadastro Único para Programas Sociais do Governo Federal (CadÚnico) para participar. Além disso, os membros do grupo familiar devem atender a outros critérios estabelecidos pelo Ministério da Cidadania para serem considerados elegíveis de receber o benefício."
        }
      ]
    },
    {
      "title": "Como posso me cadastrar no CADÚnico?",
      "answers": [
        {
          "icon": require('../../../assets/images/immigrant.png'),
          "subtitle": "Imigrantes",
          "text": "O Cadastro Único para Programas Sociais do Governo Federal (Cadastro Único) é um instrumento que identifica e caracteriza as famílias de baixa renda. São consideradas famílias de baixa renda aquelas que possuem renda mensal por pessoa (renda per capita) de até meio salário mínimo (R $522,50) ou renda familiar total de até três salários mínimos (R $3.135,00). Para ser inserido no CadÚnico, o imigrante deverá estar legalmente no Brasil e ter pelo menos um documento, como CPF ou carteira de trabalho. Com os documentos em mãos, você pode ir até um Centro de Referência de Assistência Social – CRAS para se informar ou procurar a Prefeitura."
        },
        {
          "icon": require('../../../assets/images/indigenous.png'),
          "subtitle": "Indígenas",
          "text": "O Cadastro Único para Programas Sociais do Governo Federal (Cadastro Único) é um instrumento que identifica e caracteriza as famílias de baixa renda. São consideradas famílias de baixa renda aquelas que possuem renda mensal por pessoa (renda per capita) de até meio salário mínimo (R $522,50) ou renda familiar total de até três salários mínimos (R $3.135,00). Para se registrar, é necessário ter a Certidão Administrativa de Nascimento do Indígena (RANI). Com os documentos de todos os integrantes da família em mãos, você pode ir até um Centro de Referência de Assistência Social – CRAS para se informar ou procurar a Prefeitura."
        }
      ]
    }
  ]

  const onPressAnswerQuestions = () => {
    navigation.navigate('QuestionList');
  }

  const onPressEditAnswer = (question: any) => {
    navigation.navigate('EditAnswer', question);
  }
  return (
    <View style={styles.screen}>
      <Header
        title="FAQ - Auxílio emergencial"
        hasBackButton={true}
        onBackPress={navigation.goBack}
      />
      <View style={[styles.contentContainer, local_styles.mainContainer]}>
        <ScrollView>
          {
            questions.map((question, i) => {
              return (
                <View key={i} style={local_styles.questionContainer}>
                  <Text style={[styles.mediumPrimaryText, local_styles.questionTitle]}>{question.title}</Text>
                  <View style={styles.horizontalSeparator} />
                  {
                    question.answers.map((answer, j) => {
                      return (
                        <View style={local_styles.answerContainer} key={j}>

                          {answer.icon == null ? null :
                            <View style={local_styles.answerTitleContainer}>

                              <Image source={answer.icon} style={local_styles.answerIcon} />

                              <Text style={[styles.mediumPrimaryText, local_styles.answerSubTitle]}>{answer.subtitle}</Text>
                            </View>
                          }
                          <Text style={[styles.tinyPrimaryText, local_styles.answerText]}>{answer.text}</Text>
                        </View>
                      );
                    })
                  }
                  <TouchableOpacity
                    onPress={() => onPressEditAnswer(question)}
                    style={local_styles.editContainer}
                  >
                    <Text style={[styles.tinySecondaryText, local_styles.editText]}> Editar resposta </Text>
                  </TouchableOpacity>
                </View>
              );
            })
          }
        </ScrollView>
        <View style={local_styles.bottomContainer}>
          <View style={styles.horizontalSeparator} />
          <Button
            style={local_styles.button}
            text="Responder dúvidas"
            onPress={onPressAnswerQuestions}
          />
        </View>
      </View>
    </View>
  );
}
const local_styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center'
  },
  bottomContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 200,
  },
  button: {
    width: 300
  },
  questionContainer: {
    padding: 5,
    marginBottom: 20
  },
  answerContainer: {

  },
  answerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 5,
    marginBottom: 10
  },
  questionTitle: {
    fontWeight: 'bold',

  },
  answerSubTitle: {
    fontSize: 14
  },
  answerText: {

  },
  answerIcon: {
    height: 30,
    width: 30,
    marginRight: 10
  },
  editContainer: {
    alignItems: 'flex-end',
    marginTop: 15
  },
  editText: {
    fontWeight: 'bold'
  }
})