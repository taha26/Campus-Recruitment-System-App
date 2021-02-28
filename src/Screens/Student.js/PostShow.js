import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    ScrollView,
    // TextInput,
    // TouchableOpacity,

} from 'react-native';
import { connect } from "react-redux"
import { postView } from "../../Store/Actions/Actions";


class PostShow extends React.Component {



    componentDidMount() {
        this.props.postView()

    }
    render(props) {
        // console.log("post,,,,,<<<<<",this.props.postget)
        return (
            <ScrollView style={styles.main}>

                <View style={styles.main}>
                    <View style={styles.view1}>
                    <Text style={styles.heading} >Campus Recruitment System</Text>
                    </View>
                    <View>
                        <Text style={styles.heading2} >Student Details</Text>
                    </View>
                    <View>
                        {this.props.postview.map((v, i) => {
                            return <View style={styles.cards} key={i}>
                                <Text style={styles.textcards}>Job Title : {v.jobtitle}</Text>
                                <Text style={styles.textcards}>Salary : {v.salary}</Text>
                                {/* <Text style={styles.textcards}>Class : {v.class}</Text> */}
                                <Text style={styles.textcards}>Grade : {v.grade}</Text>
                            </View>
                        })}
                    </View>
                </View>
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    main: {
        // backgroundColor: 'black',
        // width: '100%',
        // height: '100%',
        // color: 'white',
    },  main: {
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
      // view2: {
      //   marginTop: 50,
      //   alignItems: 'center',
      // },
      view3: {
        marginTop: 55,
        // marginBottom: 10,
        alignItems: 'center',
      },

    headingview: {
        backgroundColor: "red",
        height: 100,
        flexDirection: 'row',
        // alignSelf:'baseline',
        // alignContent:'center',
        alignItems: 'center'
    },

    // heading: {
    //     //   marginLeft:0
    //     // marginRight:30,
    //     color: 'white',
    //     borderColor: "red",
    //     borderWidth: 1,
    //     fontSize: 41,
    //     fontWeight: 'bold'
    // },
    heading2: {
        color: '#3C99DC',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10

    },
    cards: {
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 22,
        backgroundColor: '#3C99DC'
    },
    textcards: {
        // backgroundColor:'red',
        color: 'white',
        // borderRadius:25,
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingRight: 10,
    }
})


const mapStateToProps = (state) => ({
    postview: state.postview,
    // current_user:state.current_user
})

const mapDispatchToProps = (dispatch) => ({

    postView: () => dispatch(postView())
})

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);