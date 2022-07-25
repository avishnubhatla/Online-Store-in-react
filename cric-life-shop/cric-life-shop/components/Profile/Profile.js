import * as React from 'react';
import { Text, View, TextInput, StyleSheet, ScrollView, FlatList} from 'react-native';

export function Profile(props) {

  return (
    <View>
    <ScrollView>
      <Text style = {styles.profileText}>
        Profile
      </Text>

      <Text style = {styles.helloText}>
        Hello {props.user}
      </Text>

      <Text style = {styles.emailText}>
        email:
      </Text>

      <TextInput defaultValue={props.email} style={{borderColor: "black",borderWidth: 1}} editable = {false}/>

      <Text style = {styles.helloText}>
        Recent Purchases:
      </Text>
      
      <FlatList
        // pass in a props object like data and put it here, then render it
        data={[
          {key: "ball"}
        ]}
        renderItem={({item}) => <Text style={styles.listText}>{item.key}</Text>}
      />

    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  profileText: {
    justifyContent: 'flex-start',
    marginTop: 50,
    fontWeight: 'bold',
    fontSize: 70,
    textAlign:'center',
    color: "black"
  },
  helloText:{
    justifyContent: 'flex-start',
    marginTop: 15,
    fontSize: 30,
    textAlign:'center',
    color: "black",
    fontWeight: "bold"
  },
  emailText:{
    justifyContent: 'flex-start',
    marginTop: 15,
    fontSize: 30,
    textAlign:'left',
    color: "black"
  },
  listText:{
    justifyContent: 'flex-start',
    marginTop: 5,
    fontSize: 30,
    textAlign:'left',
    color: "black"
  }
});
