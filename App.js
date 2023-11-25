const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import LoadingScreen3 from "./screens/LoadingScreen3";
import LibraryofResourcesTranspor from "./screens/LibraryofResourcesTranspor";
import SearchQuery from "./screens/SearchQuery";
import CalcFood from "./screens/CalcFood";
import Category from "./components/Category";
import Search from "./components/Search";
import Property1HomeImage from "./components/Property1HomeImage";
import StyleDefaultDarkModeTrue from "./components/StyleDefaultDarkModeTrue";
import Forum from "./screens/Forum";
import ForumCreate from "./screens/ForumCreate";
import ForumView from "./screens/ForumView";
import CalcTrack2 from "./screens/CalcTrack2";
import UserProfile from "./screens/UserProfile";
import SettingsPage from "./screens/SettingsPage";
import CalcTrack from "./screens/CalcTrack";
import Calculator from "./screens/Calculator";
import CalcAir2 from "./screens/CalcAir2";
import NavigationBarrImage from "./components/NavigationBarrImage";
import Icons from "./components/Icons";
import Surface from "./components/Surface";
import IconCalculator from "./components/IconCalculator";
import IconPersonOutline1 from "./components/IconPersonOutline1";
import IconBookSaved2 from "./components/IconBookSaved";
import IconDiscussion2 from "./components/IconDiscussion2";
import IconGameControllerOutline2 from "./components/IconGameControllerOutline";
import IconDiscussion from "./components/IconDiscussion";
import Games from "./screens/Games";
import AllGames from "./screens/AllGames";
import PopularGames from "./screens/PopularGames";
import NewGames from "./screens/NewGames";
import RecommendedGames from "./screens/RecommendedGames";
import GameSelectedScreen from "./screens/GameSelectedScreen";
import SearchResults from "./screens/SearchResults";
import Articles from "./screens/Articles";
import EditProfile from "./screens/EditProfile";
import PasswordResetInApp from "./screens/PasswordResetInApp";
import PasswordResetSuccess from "./screens/PasswordResetSuccess";
import LoginPage from "./screens/LoginPage";
import ResetPassword from "./screens/ResetPassword";
import RegistrationPage from "./screens/RegistrationPage";
import MainPage from "./screens/MainPage";
import LibraryofResourcesFood from "./screens/LibraryofResourcesFood";
import LibraryofResourcesEnergy from "./screens/LibraryofResourcesEnergy";
import Quiz from "./screens/Quiz";
import QuizWrong from "./screens/QuizWrong";
import QuizCorrect from "./screens/QuizCorrect";
import QuizFinal from "./screens/QuizFinal";
import LibraryOfResourcesQuizzes from "./screens/LibraryOfResourcesQuizzes";
import VideoResource from "./screens/VideoResource";
import IconBookSaved from "./components/IconBookSaved";
import IconPersonOutline from "./components/IconPersonOutline";
import IconGameControllerOutline from "./components/IconGameControllerOutline";
import TravelTrackReport from "./screens/TravelTrackReport";
import MonthlyReport from "./screens/MonthlyReport";
import WeeklyReport from "./screens/WeeklyReport";
import EnergyTrackReport from "./screens/EnergyTrackReport";
import FoodTrackReport from "./screens/FoodTrackReport";
import CalcCar3 from "./screens/CalcCar3";
import CalcTravel from "./screens/CalcTravel";
import CalcCar from "./screens/CalcCar";
import CalcCar2 from "./screens/CalcCar2";
import CalcBus from "./screens/CalcBus";
import CalcAir from "./screens/CalcAir";
import CalcEnergy from "./screens/CalcEnergy";
import CalcElectricity from "./screens/CalcElectricity";
import CalcElectricity2 from "./screens/CalcElectricity2";
import Educational from "./screens/Educational";
import LibraryofResourcesSocial from "./screens/LibraryofResourcesSocial";
import IconGameControllerOutline1 from "./components/IconGameControllerOutline1";
import IconDiscussion1 from "./components/IconDiscussion1";
import IconBookSaved1 from "./components/IconBookSaved1";
import IconPersonOutline2 from "./components/IconPersonOutline2";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import GameScreen from "./screens/WebGame";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//firebase code starts here
import {initializeApp, getAuth} from "firebase/app";
import {getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyANC83ccuZFwUKGBAgpwRXZoDPEehiiBTs",
  authDomain: "carbono-6409e.firebaseapp.com",
  projectId: "carbono-6409e",
  storageBucket: "carbono-6409e.appspot.com",
  messagingSenderId: "828463853315",
  appId: "1:828463853315:web:873d0fb00c77486d504336",
  measurementId: "G-MEX5QYKN1Y",
  databaseURL: "https://carbono-6409e-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
//firebase code ends here

const Tab = createBottomTabNavigator();
function BottomTabsRoot({ navigation }) {
  const [bottomTabItemsNormal] = React.useState([
    <IconPersonOutline />,
    <IconBookSaved />,
    <IconDiscussion />,
    <IconGameControllerOutline />,
  ]);
  const [bottomTabItemsActive] = React.useState([
    <IconPersonOutline />,
    <IconBookSaved />,
    <IconDiscussion />,
    <IconGameControllerOutline />,
  ]);
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={({ state, descriptors, navigation }) => {
        const activeIndex = state.index;
        return (
          <View style={{ flexDirection: "row" }}>
            {bottomTabItemsNormal.map((item, index) => {
              const isFocused = state.index === index;
              return (
                <Pressable
                  key={index}
                  onPress={() => {
                    navigation.navigate({
                      name: state.routes[index].name,
                      merge: true,
                    });
                  }}
                >
                  {activeIndex === index
                    ? bottomTabItemsActive[index] || item
                    : item}
                </Pressable>
              );
            })}
          </View>
        );
      }}
    >
      <Tab.Screen
        name="UserProfile"
        component={UserProfile}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Educational"
        component={Educational}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Forum"
        component={Forum}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Games"
        component={Games}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  const [fontsLoaded, error] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
    "Nunito-ExtraLight": require("./assets/fonts/Nunito-ExtraLight.ttf"),
    "Nunito-Light": require("./assets/fonts/Nunito-Light.ttf"),
    "Nunito-Regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "Nunito-Medium": require("./assets/fonts/Nunito-Medium.ttf"),
    "Nunito-SemiBold": require("./assets/fonts/Nunito-SemiBold.ttf"),
    "Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
    "Nunito-ExtraBold": require("./assets/fonts/Nunito-ExtraBold.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Numans-Regular": require("./assets/fonts/Numans-Regular.ttf"),
    "DMSans-Bold": require("./assets/fonts/DMSans-Bold.ttf"),
    "FiraSans-Regular": require("./assets/fonts/FiraSans-Regular.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "OpenSans-SemiBold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 3000);
  }, []);

  function MaterialIcon({ name, style }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name) => ({
    toReactElement: (props) => MaterialIcon({ name, ...props }),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      }
    );
  }
  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <IconRegistry icons={[MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator
              initialRouteName="MainPage"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="BottomTabsRoot" component={BottomTabsRoot} />
              <Stack.Screen
                name="LoadingScreen3"
                component={LoadingScreen3}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="LibraryofResourcesTranspor"
                component={LibraryofResourcesTranspor}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SearchQuery"
                component={SearchQuery}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CalcFood"
                component={CalcFood}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ForumCreate"
                component={ForumCreate}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ForumView"
                component={ForumView}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CalcTrack2"
                component={CalcTrack2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SettingsPage"
                component={SettingsPage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CalcTrack"
                component={CalcTrack}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Calculator"
                component={Calculator}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CalcAir2"
                component={CalcAir2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="NavigationBarrImage"
                component={NavigationBarrImage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Icons"
                component={Icons}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Surface"
                component={Surface}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="IconCalculator"
                component={IconCalculator}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="IconPersonOutline1"
                component={IconPersonOutline1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="IconBookSaved2"
                component={IconBookSaved2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="IconDiscussion2"
                component={IconDiscussion2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="IconGameControllerOutline2"
                component={IconGameControllerOutline2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="IconDiscussion"
                component={IconDiscussion}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="AllGames"
                component={AllGames}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="GameScreen"
                component={GameScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="PopularGames"
                component={PopularGames}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="NewGames"
                component={NewGames}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="RecommendedGames"
                component={RecommendedGames}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="GameSelectedScreen"
                component={GameSelectedScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SearchResults"
                component={SearchResults}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Articles"
                component={Articles}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="EditProfile"
                component={EditProfile}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PasswordResetInApp"
                component={PasswordResetInApp}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PasswordResetSuccess"
                component={PasswordResetSuccess}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="LoginPage"
                component={LoginPage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ResetPassword"
                component={ResetPassword}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="RegistrationPage"
                component={RegistrationPage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MainPage"
                component={MainPage}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="LibraryofResourcesFood"
                component={LibraryofResourcesFood}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="LibraryofResourcesEnergy"
                component={LibraryofResourcesEnergy}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Quiz"
                component={Quiz}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="QuizWrong"
                component={QuizWrong}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="QuizCorrect"
                component={QuizCorrect}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="QuizFinal"
                component={QuizFinal}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="LibraryOfResourcesQuizzes"
                component={LibraryOfResourcesQuizzes}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="VideoResource"
                component={VideoResource}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="IconBookSaved"
                component={IconBookSaved}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="IconPersonOutline"
                component={IconPersonOutline}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="IconGameControllerOutline"
                component={IconGameControllerOutline}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TravelTrackReport"
                component={TravelTrackReport}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MonthlyReport"
                component={MonthlyReport}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="WeeklyReport"
                component={WeeklyReport}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="EnergyTrackReport"
                component={EnergyTrackReport}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="FoodTrackReport"
                component={FoodTrackReport}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CalcCar3"
                component={CalcCar3}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CalcTravel"
                component={CalcTravel}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CalcCar"
                component={CalcCar}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CalcCar2"
                component={CalcCar2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CalcBus"
                component={CalcBus}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CalcAir"
                component={CalcAir}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CalcEnergy"
                component={CalcEnergy}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CalcElectricity"
                component={CalcElectricity}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CalcElectricity2"
                component={CalcElectricity2}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="LibraryofResourcesSocial"
                component={LibraryofResourcesSocial}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="IconGameControllerOutline1"
                component={IconGameControllerOutline1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="IconDiscussion1"
                component={IconDiscussion1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="IconBookSaved1"
                component={IconBookSaved1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="IconPersonOutline2"
                component={IconPersonOutline2}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          ) : (
            <LoadingScreen3 />
          )}
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
export default App;

