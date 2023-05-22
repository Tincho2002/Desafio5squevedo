import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { COLORS } from "../../constants";
import { Tkt } from "../../screens";

const Stack = createNativeStackNavigator();

const TktNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Tkt"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.text,
        headerTitleStyle: {
          fontFamily: "Inter-Bold",
        },
      }}
    >
      <Stack.Screen name="Tkt" component={Tkt} />
    </Stack.Navigator>
  );
};

export default TktNavigator;
