import { StyleSheet, Text, View} from "react-native";

function UserScreen (props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.route.params.name}</Text>
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

export default UserScreen;