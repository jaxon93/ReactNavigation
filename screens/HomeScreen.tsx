import { StyleSheet, Text, View, Button} from "react-native";

function HomeScreen (props) {
    console.log(props);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to HomeScreen</Text>
      <Button title="Profile" onPress={()=> props.navigation.navigate("Profile", {
        name:"Jaxon"
      })}/>
      <Button title="User" onPress={()=> props.navigation.navigate("User", {
        name:"Jaxon"
      })}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default HomeScreen;