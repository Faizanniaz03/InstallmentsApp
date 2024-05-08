import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RegularFont, primaryColor } from '../utils/Style'
import DetailsText from '../components/DetailsText'

const Individual = ({route}) => {
const {data} = route.params
console.log("🚀 ~ Individual ~ data:", data)
  return (
    <View>
      <View>
        <Text style={{
            fontSize: 30,
            color: primaryColor,
            fontFamily: RegularFont,
            textAlign: 'center',
            margin: 20
        }}>
          {data.name}({data.Product})
        </Text>
      </View>
      <View style={styles.contentMainView}>
      <DetailsText title={'Phone'}  details={data.phone}/>
      <View style={{borderWidth:1}}></View>
      <DetailsText title={'Address'}  details={data.address} width={'60%'}/>
      <View style={{borderWidth:1}}></View>

      <DetailsText title={'Product'}  details={data.Product}/>
      <View style={{borderWidth:1}}></View>

      <DetailsText title={'Down Payment'}  details={data.downPay}/>
      <View style={{borderWidth:1}}></View>

      <DetailsText title={'Installment'}  details={data.installment}/>
      <View style={{borderWidth:1}}></View>

      <DetailsText title={'Markup(%)'}  details={data.markup}/>
      <View style={{borderWidth:1,}}></View>

      <DetailsText title={'Receivable'}  details={data.totalReceivable}/>
      <View style={{borderWidth:1}}></View>

      <DetailsText title={'Duration (Months)'} details={data.Duration} />
      
      </View>
    </View>
  )
}

export default Individual

const styles = StyleSheet.create({
  contentMainView:{
    borderWidth:2,
    padding:5,
    margin:10
  },
})






