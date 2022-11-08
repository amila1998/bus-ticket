import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import client from '../../api/client';

const Book = ({ route }) => {
  const { data } = route.params;
  const [details, setDetails] = useState('')
  console.log("🚀 ~ file: Book.js ~ line 9 ~ Book ~ details", details)

  useEffect(() => {
    const getDetails = async () => {
      try {
        const res = await client.get(`/api/getDetailsForBusBook/${data}`)
        setDetails(res.data)
      } catch (error) {
        console.log("🚀 ~ file: Book.js ~ line 13 ~ useEffect ~ error", error)

      }
    }
    getDetails()
  }, [data])

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.main}>
          <View style={{ backgroundColor: '#b8bbe8' }}>
            <Text style={styles.title}>Bus Details</Text>
            <View style={styles.rowMain}>
              <View style={styles.row}>
                <Text style={styles.txt}>Time Table ID</Text>
                <Text style={styles.txt}>:</Text>
                <Text style={styles.txt2}>BT001</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.txt}>Time Table ID</Text>
                <Text style={styles.txt}>:</Text>
                <Text style={styles.txt2}>BT001</Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.title}>Fill Booking Details</Text>
            <View style={styles.formInput}>
              <TextInput keyboardType='number-pad'  style={styles.textInput} placeholder='No of passangers'></TextInput>
            </View>
            <View style={styles.formInput}>
              <TextInput keyboardType='number-pad'  style={styles.textInput} placeholder='No of passangers'></TextInput>
            </View>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  txt: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 5

  },
  rowMain: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt2: {
    fontSize: 18

  },
  row: {

    flexDirection: "row",
    flexWrap: "wrap",
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#8cacf7',
    width: '100%',
    height: '100%',
  },
  dummyText: {
  },
  main: {
    width: '100%',
    height: '100%',
    flex: 2,
  },
  defultBg: {
    width: '100%',
    height: 150,
    padding: 10
  },
  loginBody: {
    padding: 10,
  },
  formInput: {
    marginBottom: 10,
    padding: 10,
  },
  textInput: {
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#10006b',
    color: '#10006b',
    borderRadius: 50,
    backgroundColor: '#fff'

  },
  defaultButton: {
    padding: 15,
    backgroundColor: '#fd307b',
    borderRadius: 50,
  },
  defaultButton2: {
    padding: 15,
    backgroundColor: '#f5a727',
    borderRadius: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    padding: 15,
  },

})
export default Book