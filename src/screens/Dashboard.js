import { FlatList, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore'
import auth from '@react-native-firebase/auth'
import { RegularFont, primaryColor } from '../utils/Style'

const Dashboard = ({navigation}) => {
  const [usersData, setUsersData] = useState({})
  console.log("🚀 ~ Dashboard ~ usersData:", usersData)
  console.log("🚀 ~ Dashboard ~ usersData:", usersData)
  const getData = async () => {
    const users = await firestore().collection('CustomersData').get();
    const storeData = users.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    
    setUsersData(storeData)
    console.log(usersData.id)
  }
  useEffect(() => {
    getData()
  }, [])
  const { height, width } = useWindowDimensions()
  return (
    <View style={{
      height: height,
      width: width
    }}>
      <Text style={{
        fontSize: 30,
        color: primaryColor,
        fontFamily: RegularFont,
        textAlign: 'center',
        margin: 20
      }}>
        Customers Data
      </Text>
      <View style={styles.contentView}>
        <FlatList
          data={usersData}
          renderItem={({ item, index }) => {
            return (
              <View style={styles.itemContainer}>
              <TouchableOpacity style={styles.item} onPress={()=>navigation.navigate('Individual',{
                data:item} )}>
                <View style={styles.row}>
                  <Text style={styles.indexText}>{index + 1}.</Text>
                  <Text style={styles.labelText}> Name: </Text>
                  <Text style={styles.nameText}>{item.name}</Text>
                </View>
                <View style={styles.contactInfo}>
                  <Text style={[styles.infoText,{marginLeft:20}]}>Phone: {item.phone}</Text>
                  <View style={styles.row}>
                  <Text style={[styles.infoText,{marginLeft:20}]}>Address:</Text>
                  <Text style={styles.nameText}>{item.address}</Text>
                </View>
                </View>
              </TouchableOpacity>
            </View>
            )
          }}
        />
      </View>
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
  flatlistText:{
    color:primaryColor,
    fontFamily:RegularFont,
    fontSize:20,
    textAlign:'right'
  },
  contentView:{
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: 'white',
    marginHorizontal: 30,
    height: '80%',
    borderRadius: 40,
    elevation: 2,
    paddingHorizontal: 15,
    paddingTop: 20
  },
  opacity:{
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap:'wrap',
  },
  itemContainer: {
    justifyContent: "space-between",
    alignItems: 'center',
  },
  item: {
    borderWidth: 2,
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderColor: primaryColor,
    borderRadius: 10,
    width: '100%',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  indexText: {
    color: primaryColor,
    fontFamily: RegularFont,
    fontSize: 20,
    marginRight: 5,
  },
  labelText: {
    color: primaryColor,
    fontFamily: RegularFont,
    fontSize: 20,
  },
  nameText: {
    color: primaryColor,
    fontFamily: RegularFont,
    fontSize: 20,
    flex: 1, 
  },
  contactInfo: {
    alignItems: 'flex-start',
    paddingTop: 5,
  },
  infoText: {
    color: primaryColor,
    fontFamily: RegularFont,
    fontSize: 20,
  },
})