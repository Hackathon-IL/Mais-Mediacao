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
      "title": "O que é o SUS?",
      "answers": [
        {
          "icon": null,
          "subtitle": "",
          "text": "O SUS (Sistema Único de Saúde) é o sistema público de saúde brasileiro criado pela Constituição Federal de 1988. É a maior política de saúde do Brasil e atende todos os indivíduos."
        }
      ]
    },
    {
      "title": "Como fazer o cartão do SUS?",
      "answers": [
        {
          "icon": require('../../../assets/images/immigrant.png'),
          "subtitle": "Imigrantes",
          "text": "Para fazer o seu Cartão SUS que é gratuito, basta se dirigir a uma Unidade Básica de Saúde (UBS) mais próxima da sua residência, popularmente chamado de Posto de Saúde, ou até a Secretaria Municipal de Saúde de seu Município, portando os seguintes documentos pessoais: Registro Nacional Migratório (RNM) e CPF. Em alguns municípios, é solicitada a apresentação de comprovação de residência – conta de água, luz, telefone, etc."
        },
        {
          "icon": require('../../../assets/images/indigenous.png'),
          "subtitle": "Indígenas",
          "text": "Para fazer o seu Cartão SUS que é gratuito, basta se dirigir a uma Unidade Básica de Saúde (UBS) mais próxima da sua residência, popularmente chamado de Posto de Saúde, ou até a Secretaria Municipal de Saúde de seu Município, portando os seguintes documentos pessoais: Carteira de Identidade (RG), CPF, Certidão de nascimento ou casamento e número de PIS/PASEP (se tiver). Em alguns municípios, é solicitada a apresentação de comprovação de residência – conta de água, luz, telefone, etc."
        }
      ]
    },
    {
      "title": "Como posso me vacinar contra a COVID?",
      "answers": [
        {
          "icon": require('../../../assets/images/immigrant.png'),
          "subtitle": "Imigrantes",
          "text": "O Projeto de Lei 5418/20 concede a todos os brasileiros e estrangeiros residentes direito a vacinação gratuita contra a Covid-19, obrigando União, estados, Distrito Federal e municípios a adquirirem e disponibilizarem a esse público todas as vacinas contra o vírus com eficácia e segurança reconhecidas pela Agência Nacional de Vigilância Sanitária (Anvisa). A vacinação, de acordo com a proposta, deverá ser operacionalizada pelo Sistema Único de Saúde (SUS), até que sejam alcançadas as metas de cobertura vacinal definidas no Programa Nacional de Imunizações.\n\nFonte: Agência Câmara de Notícias"
        },
        {
          "icon": require('../../../assets/images/indigenous.png'),
          "subtitle": "Indígenas",
          "text": "No Plano Nacional de Vacinação, os indígenas que vivem em aldeias são considerados grupo prioritário. Mas há variação entre os estados. No Amazonas, indígenas aldeados já constam na primeira fase de vacinação. Comunidades tradicionais estão na fase 4. No caso dos indígenas aldeados, a vacinação será feita pelos profissionais de saúde dos Distritos Sanitários Especiais Indígenas (Dseis). Em relação às comunidades quilombolas, a situação varia de estado para estado. O Plano Nacional de Vacinação estabelece que estas comunidades estão na quarta fase de vacinação, mas ainda sem data estipulada para início da imunização. Há estados que, em seus planos próprios, definiram que quilombolas seriam vacinados em fases distintas daquela estabelecida pelo Ministério da Saúde - é o caso, por exemplo, de São Paulo, onde o governo estadual garantiu iniciar a vacinação dos quilombolas em 22 de janeiro."
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
        title="FAQ - Saúde"
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
    marginTop:15
  },
  editText: {
    fontWeight: 'bold'
  }
})