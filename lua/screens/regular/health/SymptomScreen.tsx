import React from "react";
import { Text, View, ScrollView, useColorScheme, StyleSheet, Image } from 'react-native';
import { Button, TinyButton } from '../../../components/CommonComponents';
import { commonStyles } from '../../../styles/common.styles';
import { t } from 'i18n-js';
import Header from "../../../components/Header";
import { NavigationParams, NavigationState } from 'react-navigation';
import { NavigationStackProp } from 'react-navigation-stack';

export type SymptomScreenProps = {
  navigation: NavigationStackProp<NavigationState, NavigationParams>
}

export default ({ navigation }: SymptomScreenProps) => {
  const styles = commonStyles();

  const symptomsList = [
    [
      {
        "name": "Febre",
        "source": require('../../../assets/images/febre.png')
      },
      {
        "name": "Coriza",
        "source": require('../../../assets/images/rinite.png')
      }
    ],
    [
      {
        "name": "Fadiga",
        "source": require('../../../assets/images/fadiga.png')
      },
      {
        "name": "Espirros",
        "source": require('../../../assets/images/espirrar.png')
      }
    ],
    [
      {
        "name": "Insônia",
        "source": require('../../../assets/images/insonia.png')
      },
      {
        "name": "Vômitos",
        "source": require('../../../assets/images/vomito.png')
      }
    ],
    [
      {
        "name": "Diarreia",
        "source": require('../../../assets/images/diarreia.png')
      },
      {
        "name": "Cólicas",
        "source": require('../../../assets/images/colicas.png')
      }
    ],
    [
      {
        "name": "Perda de conciência",
        "source": require('../../../assets/images/perda-de-consciencia.png')
      },
      {
        "name": "Asma",
        "source": require('../../../assets/images/asma.png')
      }
    ],
    [
      {
        "name": "Dor nas juntas",
        "source": require('../../../assets/images/joint.png')
      },
      {
        "name": "Tontura",
        "source": require('../../../assets/images/tontura.png')
      }
    ]
  ]
  return (
    <View style={styles.screen}>
      <Header
        title="Atendimento médico por símbolos"
        hasBackButton={true}
        onBackPress={navigation.goBack}
      />
      <ScrollView style={styles.contentContainer}>
        <Text style={[styles.tinyPrimaryText, local_styles.labelText]}> Mostre ao seu médico as imágens dos sintomas </Text>
        <View style={styles.horizontalSeparator} />
        <View>
          {
            symptomsList.map((symptoms, i) => {
              return (
                <View style={local_styles.cardsContainer} key={i}>
                  {
                    symptoms.map((symptom, j) => {
                      return (
                        <View style={[styles.bigCardContainer, local_styles.cardContainer]} key={j}>
                          <Image style={local_styles.image} source={symptom.source} />
                          <Text style={local_styles.symptomText}>{symptom.name}</Text>
                        </View>
                      )
                    })
                  }

                </View>
              )
            })
          }
        </View>
        <View style={styles.paddingBottomBar}/>
      </ScrollView>
    </View>
  );
}
const local_styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
  },
  labelText: {
    textAlign: 'center',
    fontSize: 14,
  },
  image: {
    height: 80,
    width: 80,
    marginBottom:10
  },
  cardContainer: {
    height: 130,
    width: 130,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:20,
    marginRight:20
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop:10,
    marginBottom: 10,
  },
  symptomText: {
    color: '#4671C6',
    fontWeight: 'bold',
    fontSize: 14
  }
})