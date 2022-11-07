import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

const ViewSearchedRoutes = ({ route }) => {
  const { startLocation, endLocation } = route.params;
  const state  = {
    tableHead: ['Route No', 'Bus No', 'Start Time', 'End Time', ''],
    tableData: [
      ['17','4','6.00 AM', '9.00 AM',''],
    ]
  }


  const element = (data, index) => (
    <TouchableOpacity onPress={()=>{
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
        <View>
          <Text>hkdjasdjas</Text>
        </View>
      <View style={styles.container}>
        <Table borderStyle={{borderColor: 'transparent'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          {
            state.tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellIndex === 4 ? element(rowData, index) : cellData} textStyle={styles.text}/>
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
  container: { flex: 1, padding: 16, paddingTop: 30,},
  head: { height: 60, backgroundColor: '#808B97' },
  text: { margin: 6 },
  row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
  btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' },
  dataWrapper: { marginTop: -1 },
  header: { height: 50, backgroundColor: '#537791' },

})

export default ViewSearchedRoutes