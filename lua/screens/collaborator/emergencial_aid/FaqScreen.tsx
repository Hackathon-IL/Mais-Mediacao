import React from "react";
import { Text, View, ScrollView, Image, StyleSheet } from 'react-native';
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
      "title": "Como conseguir o auxílio emergencial?",
      "answers": [
        {
          "icon": require('../../../assets/images/immigrant.png'),
          "subtitle": "Imigrantes",
          "text": "Para receber o auxílio emergencial, os imigrantes devem cumprir os seguintes requisitos: Ter mais de 18 anos; Estar inscrito no cadastro de Pessoas Físicas – CPF;  Não ter emprego formal; Não estar recebendo os benefícios: Previdenciário Assistencial, Seguro-desemprego ou Programa de Transferência de Renda Federal; Ter renda familiar de  até R$ 522,50 por pessoa ou até R$ 3.135,00, renda familiar total; Estar desempregado ou exercer atividades em uma das seguintes condições: Micro Empreendedor Individual (MEI), Contribuinte individual ou facultativo do Regime Geral de Previdência Social (RGPS), Trabalhador Informal; Não ter recebido rendimentos tributáveis no ano de 2018, acima de R$ 28.449,70. O cadastro é feito pelo site da Caixa Econômica Federal: auxilio.caixa.gov.br ou pelo APP CAIXA -  Auxilio Emergencial."
        },
        {
          "icon": require('../../../assets/images/indigenous.png'),
          "subtitle": "Indígenas",
          "text": "As populações indígenas estão incluídas entre a parte da população que tem direito ao auxílio emergencial. Quando for mais vantajosa, a renda emergencial substituirá automaticamente o benefício do Bolsa Família. Para receber o auxílio, é necessário cumprir os seguintes requisitos, que também se aplicam aos povos indígenas: ser maior de 18 (dezoito) anos de idade; não ter emprego formal; não ser titular de benefício previdenciário ou assistencial, do seguro-desemprego ou de programa de transferência de renda federal; ter renda mensal por pessoa de até meio salário mínimo ou renda familiar de até três salários mínimos; estar com o CPF regularizado. A exigência do CPF regularizado, que pode dificultar o acesso de muitos indígenas ao benefício, foi questionada na Justiça* e ainda aguarda decisão definitiva. No caso de quem já recebe o benefício do Bolsa Família, o pagamento será feito automaticamente. O mesmo ocorre com quem já estava inscrito no cadastro único do governo federal até o dia 20 de março de 2020. Quem não está inscrito no cadastro único e se enquadra nos requisitos para receber o benefício emergencial pode se cadastrar no endereço: https://auxilio.caixa.gov.br. Os indígenas também podem ligar para o telefone 111, criado pela Caixa, para tirar dúvidas sobre o auxílio emergencial."
        }
      ]
    }
  ]

  const onPressSendQuestion = () => {
    navigation.navigate('SendQuestion');
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
                </View>
              );
            })
          }
        </ScrollView>
        <View style={local_styles.bottomContainer}>
          <View style={styles.horizontalSeparator} />
          <Button
            style={local_styles.button}
            text="Não encontrou sua dúvida?"
            onPress={onPressSendQuestion}
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
  }
})