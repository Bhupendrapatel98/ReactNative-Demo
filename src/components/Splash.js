import React, { useState } from "react";
import { View, Image, Text, StyleSheet, TextInput, Button, Alert, TouchableOpacity, Platform } from 'react-native'
import { Icon } from 'react-native-elements'
import DateTimePicker from '@react-native-community/datetimepicker';
import { push,replace } from '../navigation/Rootnavigation';


const Splash = ({ navigation }) => {

  var validyear = new Date().getFullYear() - 18;
  var validmonth = new Date().getMonth() + 1;
  var validdae = new Date().getDate();
  console.log("date" + validdae + " month" + validmonth + " year" + validyear);

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [date1, setDate1] = useState('select date');
  const [time1, settime1] = useState('select time');


  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios'); ``
    setDate(currentDate);

    let tempDate = new Date(currentDate)
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    let fTime = 'Hours:' + tempDate.getHours() + '| Minutes:' + tempDate.getMinutes();

    setDate1(fDate)
    settime1(fTime)

    // console.log(fDate+'/n'+fTime)
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const showDatepicker = () => {
    showMode('date');
  };


  return (
    <View style={styles.container}>

      <View style={styles.top}>
        {/* <Image style={styles.topimag}
            source={{
            uri:'https://c4.wallpaperflare.com/wallpaper/97/237/71/nature-landscape-winter-snow-wallpaper-preview.jpg'
         }}/> */}

        <Image style={styles.circleimag}
          source={{
            uri: 'https://www.aconsciousrethink.com/wp-content/uploads/2019/05/reserved-person-line.jpg'
          }} />

      </View>

      <View style={styles.middle}>
        <Text style={styles.titleText} >Login</Text>

        <View style={styles.input}>

          <Icon name="person" size={20} />
          <TextInput
            placeholder="UserName" />
        </View>

        <View style={styles.input}>
          <Icon name="lock" size={20} />
          <TextInput
            placeholder="password" />
        </View>


        <View>
          <View style={styles.input}>
            <Icon name="lock" size={20} />
            <Text onPress={showDatepicker} title="Show date picker!">{date1}</Text>
          </View>
          <View style={styles.input}>
            <Icon name="lock" size={20} />
            <Text onPress={showTimepicker} title="Show time picker!" >{time1}</Text>
          </View>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
              placeholderText="Select date"
              maximumDate={date}
              minimumDate={new Date(validyear, validmonth, validdae)}
            />
          )}
        </View>

        <Text style={styles.forgotText}>Forgot Password?</Text>

      </View>

      <View style={styles.bottom}>

        <TouchableOpacity

          onPress={() => {
            console.log("helooooo")
            push("Login")
          }
          }
          style={styles.roundButton1}>
          <Text style={{ color: "black", fontSize: 16 }}>Login</Text>
        </TouchableOpacity>

        <View style={styles.newusrstyle}>
          <Text style={styles.forgotTextcolor}>NewUser? </Text>
          <Text style={styles.forgotTextcolor}>SignUp</Text>
        </View>

      </View>

    </View>
  )
}


const styles = StyleSheet.create({
  newusrstyle: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "center"
  },
  roundButton1: {
    //width: 100,
    marginHorizontal: 20,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#FA8072',
  },
  input: {
    alignItems: "center",
    flexDirection: "row",
    height: 40,
    marginHorizontal: 20,
    marginTop: 25,
    borderWidth: 1,
    borderColor: "grey",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  circleimag: {
    height: 100,
    width: 100,
    borderWidth: 2,
    borderColor: "white",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50
  },
  topimag: {
    height: 200,
    // width:200
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,

  },
  forgotText: {
    marginRight: 20,
    marginTop: 20,
    fontFamily: "Cochin",
    fontSize: 16,
    color: "#FA8072",
    textAlign: "right"
  },
  forgotTextcolor: {
    marginTop: 20,
    fontFamily: "Cochin",
    fontSize: 16,
    color: "#FA8072",
    //fontWeight:"bold",
    textAlign: "center",
  },
  titleText: {
    flex: 0.5,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
  },
  container: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  top: {
    flex: 0.3,
    backgroundColor: "#FA8072",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    // margin:10,
    // borderWidth:5,
    // borderTopLeftRadius:20,
    //  borderTopRightRadius:20 
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  middle: {
    flex: 0.4,
    //backgroundColor: "beige",
    margin: 10
    // borderWidth: 5,
  },
  bottom: {
    flex: 0.3,
    //backgroundColor: "red",
    margin: 10
    // borderWidth: 5,
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
  },
})

export default Splash;