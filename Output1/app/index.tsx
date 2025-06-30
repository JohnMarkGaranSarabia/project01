import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
       >
      <Text>Hello World!</Text>
      <Text>Welcome to React Native Project Development.</Text>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    
   
    }
  });
