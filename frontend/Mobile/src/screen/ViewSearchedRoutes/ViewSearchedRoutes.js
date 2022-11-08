import React, { useEffect, useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import client from '../../api/client';

const ViewSearchedRoutes = ({ route }) => {
  const { startLocation, endLocation } = route.params;
  const [allRoutes, setAllRoutes] = useState([])
  // console.log("🚀 ~ file: ViewSearchedRoutes.js ~ line 9 ~ ViewSearchedRoutes ~ allRoutes", allRoutes)
  const [allTimeTables, setAllTimeTables] = useState([])
  // console.log("🚀 ~ file: ViewSearchedRoutes.js ~ line 10 ~ ViewSearchedRoutes ~ allTimeTables", allTimeTables)
  const [callBack, setCallback] = useState(false)


  useEffect(() => {
    const getAllBusShedules = async () => {
      try {
        const res = await client.get('/api/timetable/')
        const res2 = await client.get('/api/getAllBusRoutes')
        setAllRoutes(res2.data.fetch)
        setAllTimeTables(res.data.AllTimetables)
        setCallback(true)
      } catch (error) {
        console.log("🚀 ~ file: ViewSearchedRoutes.js ~ line 19 ~ getAllBusShedules ~ error", error)

      }
    }
    getAllBusShedules()
  }, [])
  const [serchRoutes, setSerchedRoutes] = useState([])


  useEffect(() => {
    let serchedRoutes = serchRoutes
    if (callBack) {
      if (allTimeTables && allRoutes) {
        for (const r of allRoutes) {
          for (const t of allTimeTables) {
            if (r.routeNumber === t.routeNo) {

              if (t.Navigation === false) {//down
                if (r.desLocation == startLocation && r.strtlocation == endLocation) {
                  serchedRoutes.push(t)
                }
              } else if (t.Navigation === true) {//up
                if (r.desLocation = endLocation && r.strtlocation == startLocation) {
                  serchedRoutes.push(t)
                }
              }

            }
          }
        }
      }
      setCallback(false)
    }

    setSerchedRoutes(serchedRoutes)
  }, [callBack, allTimeTables, allRoutes])

  // console.log("🚀 ~ file: ViewSearchedRoutes.js ~ line 33 ~ ViewSearchedRoutes ~ serchRoutes", serchRoutes)

  let data1 = []

  for (const d of serchRoutes) {
    let RouteNo, BusNo, StartTime, EndTime, empt;
    RouteNo = d.routeNo
    BusNo = d.busID
    StartTime = d.StartingTime
    EndTime = d.EndTime
    empt = ''
    const dd = [
      RouteNo,
      BusNo,
      StartTime,
      EndTime,
      empt
    ]
    data1.push(dd)
  }
// console.log(data1);
  const state = {
    tableHead: ['Route No', 'Bus No', 'Start Time', 'End Time', ''],
    tableData: data1
  }

  const element = (data, index) => (
    <TouchableOpacity onPress={() => {
      console.log(data);
    }}>
      <View style={styles.btn}>
        <Text style={styles.btnText}>Book</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.textTitle}>
          <View>
            <Text style={styles.text2}>Start Location : {startLocation}</Text>
          </View>
          <View>
            <Text style={styles.text2}>End Location  : {endLocation}</Text>
          </View>
        </View>
        <View style={styles.container}>
          <Table borderStyle={{ borderColor: 'transparent' }}>
            <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
            {
              state.tableData.map((rowData, index) => (
                <TableWrapper key={index} style={styles.row}>
                  {
                    rowData.map((cellData, cellIndex) => (
                      <Cell key={cellIndex} data={cellIndex === 4 ? element(rowData, index) : cellData} textStyle={styles.text} />
                    ))
                  }
                </TableWrapper>
              ))
            }
          </Table>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
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
  container: { flex: 1, padding: 16, paddingTop: 30, },
  head: { height: 60, backgroundColor: '#8a47fd' },
  text: { margin: 6 },
  row: { flexDirection: 'row', backgroundColor: '#b8bbe8' },
  btn: { width: 58, height: 18, backgroundColor: '#fd307b', borderRadius: 2},
  btnText: { textAlign: 'center', color: '#fff' },
  dataWrapper: { marginTop: -1 },
  header: { height: 50, backgroundColor: '#537791' },
  textTitle:{
    padding:10,
    justifyContent: 'center',
    textAlign: 'center',
    margin:0,
    width:'100%'
  },
  text2:{
    color:'white',
    textAlign: 'center',
    fontSize:24,
fontWeight:'bold',

  }

})

export default ViewSearchedRoutes