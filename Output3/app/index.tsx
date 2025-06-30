import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>COLLEGE OF COMPUTING</Text>
        <Text style={styles.titleText}>AND INFORMATION SCIENCES</Text>
      </View>
      <Image source={require("../assets/images/logo.jpg")} style={styles.logoImage} />
      <View style={styles.footerContainer}>
        <Text style={styles.footerText2}>Developed by</Text>
        <Text style={styles.footerText}>John Mark Sarabia</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 60,
    backgroundColor: "white"
  },
  titleContainer: {
    alignItems: "center"
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
    textAlign: "center"
  },
  logoImage: {
    width: 400,
    height: 400,
    resizeMode: "contain"
  },
  footerContainer: {
    alignItems: "center",
    marginBottom: 20
  },
  footerText: {
    fontWeight: "bold",
    fontSize: 12,
    color: "black",
    textAlign: "center",
    marginTop: 0
  },
  footerText2: {
    fontSize: 12,
    color: "black",
    textAlign: "center",
    marginBottom: 2
  }
});

