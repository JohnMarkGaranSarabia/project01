import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/MarkZuckerberg.jpg")} style={styles.Image1}/>
      <Text style={styles.Text1}>Mark Zuckerberg</Text>
      <Text style={styles.Text2}>CEO META</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Image1: {
    marginBottom: 20,
    width: 300,
    height: 400,
    resizeMode: "cover",
    borderRadius: 20,
  },
  Text1: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
  },
  Text2: {
    fontSize: 16,
    color: "Black"
  }
});
