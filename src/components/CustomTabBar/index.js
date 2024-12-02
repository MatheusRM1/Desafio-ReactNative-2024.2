import {
  StyleSheet,
  View,
  TouchableOpacity,
  Platform,
  Text,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function CustomTabBar({ state, descriptors, navigation }) {
  return (
    <View style={estilo.container}>
      <View style={estilo.content}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
             key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={estilo.buttomTab}
            >
              <View style={{ alignItems: "center", padding: 4 }}>
                <View style={[estilo.innerButton, {backgroundColor: isFocused ? "#f8e2fd" : "transparent",}]}>
                  <MaterialIcons
                    name={options.tabBarIcon}
                    size={34}
                    color={isFocused ? "#6156E2" : "#535353"}
                  />
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    borderRadius: 99,
    flexDirection: "row",
    marginVertical: Platform.OS === "ios" ? 38 : 24,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    gap: 8,
    elevation: 5,
    shadowColor: "#6156E2",
    shadowOffset:{
      width:100,
      height:100,
    }
  },
  buttomTab: {
    justifyContent: "center",
    alignItems: "center",
  },
  innerButton: {
    padding: 8,
    borderRadius: 99,
  },
});
