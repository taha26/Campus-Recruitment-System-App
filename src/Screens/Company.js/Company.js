import React from 'react';
import {
  // SafeAreaView,
  StyleSheet,
  // ScrollView,
  View,
  Image,
  Text,
  // TextInput,
  TouchableOpacity,
  // StatusBar,
} from 'react-native';

import { connect } from "react-redux"
import { stuDetails,postJobs,logout } from '../../Store/Actions/Actions'
// import {useDispatch} from 'react-redux'
class Company extends React.Component {

  render() {
    // console.log('ppppppppppppp',this.props.currentAction_user)
    // console.log('ppppppppppppprrrrrrrrrrr',this.props.current_user)
    return (

      <View style={styles.main}>
        <View style={styles.view1}>
          <Text style={styles.heading} >Campus Recruitment System</Text>
        </View>
        <View style={styles.view3}>
          {/* <TouchableOpacity style={styles.Butnblood} onPress={() => AvailableBlood(this.props)}> */}
            <Text style={styles.BtnTextblod}>Company Dashboard</Text>
          {/* </TouchableOpacity> */}
        </View>
        <View style={styles.view3}>
          <TouchableOpacity style={styles.Butnblood} onPress={() => stuDetails(this.props)}>
            <Text style={styles.BtnTextblood}>Student Details</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.view3}>
          <TouchableOpacity style={styles.Butnblood} onPress={() => postJobs(this.props)}>
            <Text style={styles.BtnTextblood}>Post Jobs</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.view2}>
          <TouchableOpacity style={styles.Butn} onPress={() => logout(this.props)} >
            <Text style={styles.BtnText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#D5F3FE',
    width: '100%',
    height: '100%',
  },
  view1: {
    backgroundColor: "#3C99DC",
    height: 150,
    flexDirection: 'row',
    borderRadius: 30,
    // alignSelf:'center',
    justifyContent:'space-around',
    alignContent:'center',
    alignItems: 'center',
  },
//   img: {
//     width: 100,
//     height: 100,
//     resizeMode: 'contain',
//     // borderColor: "red",
//     borderWidth: 1,
//     // marginLeft:-50,
//     // marginRight:-50
//     // opacity:0.6,
//   },
  heading: {
    //   marginLeft:0
    // marginRight:30,
    color: 'white',
    // borderColor: "red",
    // borderWidth: 1,
    fontSize: 26,
    fontWeight: 'bold',
    
  },
  view2: {
    marginTop: 40,
    alignItems: 'center',
  },
  view3: {
    marginTop: 40,
    // marginBottom: 10,
    alignItems: 'center',
  },
  Butn: {
    width: 120,
    // flexDirection:'row',
    padding: 14,
    // marginLeft:50,
    // marginRight:10,
    // marginTop:10,
    // textAlign: 'center',
    alignItems: 'center',
    // alignContent:'center',
    // fontWeight: 'bold',
    // fontSize: 10,
    // justifyContent:'space-evenly',
    backgroundColor: 'white',
    // color: 'skyblue',
    borderRadius: 14,
    // alignSelf:'flex-end',
    // position: 'absolute',
    // bottom:35,
    // left:50,
  },
  Butnblood: {
    width: 240,
    backgroundColor: '#3C99DC',
    borderRadius: 14,
    alignItems: 'center',
    padding: 20,
  },
  BtnText: {
    color: '#3C99DC',
    fontSize: 24,
    fontWeight: "bold",
    // marginLeft:50
  },
  BtnTextblood: {
    color: 'white',
    fontSize: 25,
    fontWeight: "bold",
  },
  BtnTextblod:{
    color:'#3C99DC',
    fontSize: 25,
    fontWeight: "bold"
  },
 
})


const mapDispatchToProps = (dispatch) => ({
    stuDetails: (props) => dispatch(stuDetails(props)),
    postJobs: (props) => dispatch(postJobs(props)),
    logout: (props) => dispatch(logout(props)),

})


export default connect(null, mapDispatchToProps)(Company);