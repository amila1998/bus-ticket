import React, { useEffect, useState } from 'react'
import axios from "axios";
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View,TouchableOpacity } from 'react-native'
import client from '../../api/client';

const Book = ({ route }) => {
  const { data } = route.params;
  const [details, setDetails] = useState('')
  const [busRouteID, setBusRouteID] = useState("123456")
  const [noOfPass, setNoOfPass] = useState('')
  const [totalPrice, setTotalPrice] = useState('')
  const [bookDate, setBookDate] = useState('')
  const [OneTimetables, setOneTimetables] = useState('')
  const [busRouteDetails, setbusRouteDetails] = useState('')
  const [busDetails, setbusDetails] = useState('')
  console.log("🚀 ~ file: Book.js ~ line 7 ~ Book ~ data", data)
  console.log("🚀 ~ file: Book.js ~ line 11 ~ Book ~ busDetails", busDetails)
  console.log("🚀 ~ file: Book.js ~ line 10 ~ Book ~ busRouteDetails", busRouteDetails)
  console.log("🚀 ~ file: Book.js ~ line 9 ~ Book ~ OneTimetables", OneTimetables)


  useEffect(() => {
    const getDetails = async () => {
      try {
        const res = await client.get(`/api/getDetailsForBusBook/${data}`)
        setOneTimetables(res.data.OneTimetables)
        setbusRouteDetails(res.data.busRouteDetails)
        setbusDetails(res.data.busDetails)
      } catch (error) {
        console.log("🚀 ~ file: Book.js ~ line 13 ~ useEffect ~ error", error)

      }
    }
    getDetails()
  }, [data])

  const addBusDetailsHandler = async (e) => {
    e.preventDefault();
    if (noOfPass === "" ||  totalPrice === "" ||  bookDate==="") {
        alert("Fill all the fields");
    } else {
        try {
            const res = await client.post("/api/booking",{busRouteID,noOfPass,totalPrice, bookDate});
            console.log(res)
            // alert(res.data)
            // setOpen(false)
            // window.location.href = '/pharmacist'
        } catch (err) {
            console.log(err);
        }
    }
};

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
                <Text style={styles.txt2}>{OneTimetables?.TimeTableID}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.txt}>Start Location</Text>
                <Text style={styles.txt}>:</Text>
                <Text style={styles.txt2}>{OneTimetables?.Navigation===true?busRouteDetails?.strtlocation:busRouteDetails?.desLocation}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.txt}>Destination Location</Text>
                <Text style={styles.txt}>:</Text>
                <Text style={styles.txt2}>{OneTimetables?.Navigation?busRouteDetails?.desLocation:busRouteDetails?.strtlocation }</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.txt}>Start Time</Text>
                <Text style={styles.txt}>:</Text>
                <Text style={styles.txt2}>{OneTimetables?.StartingTime}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.txt}>End Time</Text>
                <Text style={styles.txt}>:</Text>
                <Text style={styles.txt2}>{OneTimetables?.EndTime}</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.txt}>Bus Registration Number</Text>
                <Text style={styles.txt}>:</Text>
                <Text style={styles.txt2}>{busDetails?.busNumber}</Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.title}>Fill Booking Details</Text>
            <View style={styles.formInput}>
              <TextInput keyboardType='number-pad' type="number"  name="noOfPass" style={styles.textInput} placeholder='No of passangers' onChangeText={setNoOfPass}></TextInput>
            </View>
            <View style={styles.formInput}>
              <TextInput   name="totalPrice" style={styles.textInput} placeholder='total price' onChangeText={setTotalPrice}></TextInput>
            </View>
            <View style={styles.formInput}>
              <TextInput  name="bookDate"  style={styles.textInput} placeholder='booking date' onChangeText={setBookDate}></TextInput>
            </View>
          </View>
          <View style={styles.formInput}>
                                <TouchableOpacity  style={styles.defaultButton} onPress={addBusDetailsHandler}>
                                    <Text style={{ textAlign: 'center', fontSize: 16, color: '#fff' }}>Book Now</Text>
                                </TouchableOpacity>
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