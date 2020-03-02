import React from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Color from "../constants/colors";
import MainButton from "../components/MainButton";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={1000}
          //source={require("../assets/success.png")}
          source={{
            uri:
              "https://www.extendeddisc.org/wp-content/uploads/2017/06/BS-D-style-alone-on-top-of-mountain.jpg"
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <BodyText style={styles.textContainer}>
        Your phone needed{" "}
        <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
        guess the number{" "}
        <Text style={styles.highlight}>{props.userNumber}</Text>
      </BodyText>
      <View style={styles.buttonStyle}>
        <MainButton onPress={props.onRestart}>New Game</MainButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 2,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 20
  },

  image: {
    width: "100%",
    height: "100%",
    borderRadius: 5
  },

  highlight: {
    color: Color.primary
  },

  buttonStyle: {
    paddingVertical: 10
  }
});

export default GameOverScreen;
