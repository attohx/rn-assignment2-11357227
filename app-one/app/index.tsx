import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f8f7de" ,
      }}
    >
      <Text style={{fontSize: 24}}>My Name is <Text style={{fontWeight: 'bold'}}> Nathan </Text></Text>
    </View>
  );
}
