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
import { signup,Login } from '../Store/Actions/Actions'
// import {useDispatch} from 'react-redux'
class Home extends React.Component {

  render() {
    // console.log('ppppppppppppp',this.state)
    // console.log('ppppppppppppprrrrrrrrrrr',this.props)
    return (

      <View style={styles.main}>
        <View style={styles.view1}>
          {/* <Image source={require('../Assets/logo.png')} style={styles.img} /> */}
          <Text style={styles.heading} >Campus Recruitment System</Text>
        </View>
        <View style={styles.view3}>
          <TouchableOpacity style={styles.Butnblood} onPress={() => Login(this.props)}>
            <Text style={styles.BtnTextblood}>Admin Log In</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.view3}>
          <TouchableOpacity style={styles.Butnblood} onPress={() => Login(this.props)}>
            <Text style={styles.BtnTextblood}>Student Log In</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.view3}>
          <TouchableOpacity style={styles.Butnblood} onPress={() => Login(this.props)}>
            <Text style={styles.BtnTextblood}>Company Log In</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.view2}>
          <TouchableOpacity style={styles.Butn} onPress={() => signup(this.props)} >
            {/* <Image source={require('../Assets/fblogo.png')} style={styles.fbimg} /> */}
            <Text style={styles.BtnText}>Sign Up</Text>
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
    marginTop: 30,
    alignItems: 'center',
  },
  view3: {
    marginTop: 25,
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
    width: 230,
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
  // fbimg:{
  //   marginRight:15,
  //   width:40,
  //   height:60,
  //   resizeMode:'contain',
  // },
})

// dispatch = useDispatch();

const mapStateToProps = (state) => ({
  current_user: state.current_user
})

const mapDispatchToProps = (dispatch) => ({
  signup: (props) => dispatch(signup(props)),
  Login: (props) => dispatch(Login(props)),

})


export default connect(mapStateToProps, mapDispatchToProps)(Home);