import { ThemeProvider } from "styled-components/native";
import Home from "./src/screens/Home";
import theme from "src/theme";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";
import { ActivityIndicator } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  let [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });
  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="dark" backgroundColor="transparent" translucent />
      <Home />
    </ThemeProvider>
  );
}
