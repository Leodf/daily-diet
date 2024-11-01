import { ThemeProvider } from "styled-components/native";
import Home from "./src/screens/Home";
import theme from "src/theme";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";
import { StatusBar } from "expo-status-bar";
import Loading from "@components/Loading";

export default function App() {
  let [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="dark" backgroundColor="transparent" translucent />
      {fontsLoaded ? <Home /> : <Loading />}
    </ThemeProvider>
  );
}
