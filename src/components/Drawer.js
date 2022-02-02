import React, { useRef, useState } from "react";
import { Navigator,DrawerLayoutAndroid, Button, Text, StyleSheet, View, Image, Avatar,Title,Caption } from "react-native";
import { push } from '../navigation/Rootnavigation';
import { replace,navigate,reset } from "../navigation/Rootnavigation";

const Drawer = () => {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("left");
  const changeDrawerPosition = () => {
    if (drawerPosition === "left") {
      setDrawerPosition("right");
    } else {
      setDrawerPosition("left");
    }
  };

  const navigationView = () => (

    <View style={[styles.containercenter, styles.navigationContainer]}>

      <View style={styles.container}>
      <Image
        source={{
          uri: 'https://www.edarabia.com/wp-content/uploads/2015/11/7-ways-to-become-the-person-everyone-respects.jpg'
        }}
        style={styles.circleimag}
      />

     <Text style={styles.textstyle}>Bhupendra patel</Text>
     <Text style={styles.titlestyle}>Bhupendra@gmail.com</Text>
     <View style={styles.viewline}></View>

     </View>

      {/* <Image source={require('../images/newbarcode.png')}
      style={{ width: 40, height: 40 }}/> */}

      <View style={styles.viewstyle}>
      <Image source={require('../images/home.png')}
      style={{ width: 20, height: 20 }}/>
      <Text style={styles.paragraph} onPress={()=>replace("Login")}>Home</Text>
      </View>
     
      <View style={styles.viewstyle}>
      <Image source={require('../images/user.png')}
      style={{ width: 20, height: 20 }}
      />

      <Text style={styles.paragraph} onPress={()=>replace("Login")}>Profile</Text>
      </View>
      
      <View style={styles.viewstyle}>
      <Image source={require('../images/contact.png')}
      style={{ width: 20, height: 20 }}
      />

      <Text style={styles.paragraph}>Contact</Text>
      </View>
   
      <View style={styles.viewstyle}>
      <Image source={require('../images/information.png')}
      style={{ width: 20, height: 20 }}
      />

      <Text style={styles.paragraph}>About</Text>
      </View>

      <View style={styles.viewstyle}>
      <Image source={require('../images/gear.png')}
      style={{ width: 20, height: 20 }}
      />

      <Text style={styles.paragraph}>Setting</Text>
      </View>

      <View style={styles.viewstyle}>
      <Image source={require('../images/logout.png')}
      style={{ width: 20, height: 20 }}
      />

      <Text style={styles.paragraph}>Logout</Text>
      </View>

      {/* <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      /> */}
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}>

        <Navigator initialRoute = {{name: 'Login'}}
          configureScene = {this.configureScene}
          renderScene = {this.renderScene}>
          
        </Navigator>
      
      {/* <View style={styles.container}>
        <Text style={styles.paragraph}>
          Drawer on the {drawerPosition}!
        </Text>
        <Button
          title="Change Drawer Position"
          onPress={() => changeDrawerPosition()}
        />
        <Text style={styles.paragraph}>
          Swipe from the side or press button below to see it!
        </Text>
        <Button
          title="Open drawer"
          onPress={() => drawer.current.openDrawer()}
        />
      </View> */}
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  viewstyle:{
  marginLeft:20,
  alignItems:"center",
  flexDirection:"row"
  },
  textstyle:{
  fontWeight:"bold",
  fontSize:20
  },
  titlestyle:{
    fontSize:16
    },
  circleimag: {
    marginTop:20,
    height: 100,
    width: 100,
    borderWidth: 2,
    borderColor: "white",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  container: {
    //flex: 1,
    alignItems: "center",
   // justifyContent: "center",
   // padding: 16
  },
  containercenter: {
   // flex: 0.7,
   // alignItems:"baseline"
   // justifyContent: "center",
   // padding: 16
  },
  navigationContainer: {
    flex:1,
    backgroundColor: "#ecf0f1"
  },
  paragraph: {
    marginVertical:20,
    marginLeft:15,
    //padding: 16,
    fontWeight:"bold",
    fontSize: 20,
    textAlign: "center"
  },
  navItem: {
    fontSize: 25,
    textAlign: "center"
  },
  viewline: {
    marginVertical: 20,
    backgroundColor: '#A2A2A2',
    height: 2,
    width: 280
  },
  drawerContent: {
    flex: 1,
  },
});

export default Drawer;