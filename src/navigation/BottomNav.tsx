import * as React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Splash from "../components/Splash";
import Login from "../components/Login";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { BottomNavigation, Text } from 'react-native-paper';

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const BottomNav = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Music' },
    { key: 'albums', title: 'Albums'},
    { key: 'recents', title: 'Recents' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BottomNav;

// const Tab = createMaterialBottomTabNavigator();

// const BottomNav = ()=>{
//     return(
//         <Tab.Navigator>
//         <Tab.Screen name="Home" component={Splash} />
//         <Tab.Screen name="Settings" component={Login} />
//       </Tab.Navigator>
//     );
// }
// export default BottomNav;