import React from 'react';
import { ScrollView, Text, View,Image, TextInput, Button ,Alert} from 'react-native';

const Appcc = () => {
  const name  = "Bhupendra";
  return (
   <ScrollView>
     <Text>My Login Page</Text>
     <View>
       <Text>My  name is {name}</Text>
       <Image 
       source={{
         uri:'https://reactnative.dev/docs/assets/p_cat2.png',
       }}
       style={{width:200,height:200}}
       />
     </View>
     <TextInput
      style={{
        height:40,
        borderColor:'gray',
        borderWidth:1
      }}
      placeholder='Enter Name'
     />

<TextInput
      style={{
        marginTop:50,
        marginBottom:20,
        height:40,
        borderColor:'gray',
        borderWidth:1
      }}
      placeholder='Enter Email'
     />

  <Button
  title='Submit'
  // onPress={()=>Alert.alert('its login page')}
  />

   </ScrollView>
  );
}

export default Appcc;