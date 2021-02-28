import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,

} from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';
import { connect } from "react-redux"
import { Postnow } from "../../Store/Actions/Actions";

class PostJobs extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.main}>
                <ScrollView>

                    <View style={styles.view}>
                    <Text style={styles.headin} >Campus Recruitment System</Text>
                    </View>
                <View style={styles.view1}>
                    <Text style={styles.textStyles}>Job Tilte : </Text>
                    <TextInput style={{
                        backgroundColor: 'white',
                        height: 50,
                        borderRadius: 25,
                        width: '65%',
                        fontSize: 17,
                        paddingLeft: 12,
                        borderBottomColor: 'white',
                        //   border:'none',
                    }} placeholder={"Title..."}
                        onChangeText={(text) => this.setState({ jobtitle: text })} />
                </View>
                <View style={styles.view1}>
                    <Text style={styles.textStyles}>Salary : </Text>
                    <TextInput style={{
                        backgroundColor: 'white',
                        height: 50,
                        borderRadius: 25,
                        width: '70%',
                        fontSize: 17,
                        paddingLeft: 12,
                        borderBottomColor: 'white',
                        //   border:'none',
                    }} placeholder={"Salary..."}
                    onChangeText={(text) => this.setState({ salary: text })} />
                </View>
                {/* <View style={styles.view1}>
                    <Text style={styles.textStyles}>Contact No. : </Text>
                    <TextInput style={{
                        backgroundColor: 'white',
                        height: 50,
                        borderRadius: 25,
                        width: '55%',
                        fontSize: 17,
                        paddingLeft: 12,
                        borderBottomColor: 'white',
                        //   border:'none',
                    }} keyboardType='phone-pad' placeholder={"Enter Contact Number"}
                    
                        onChangeText={(text) => this.setState({ contact: text })} />
                </View> */}
                <View style={styles.view1}>
                    <Text style={styles.textStyles}>Grade : </Text>
                    <DropDownPicker
                        items={[
                            { label: 'Grade', value: 'Grade', hidden: true },
                            { label: 'A+', value: 'A+' },
                            { label: 'A', value: 'A' },
                            { label: 'B', value: 'B' },
                            { label: 'C', value: 'C' },
                            { label: 'D', value: 'D' },
                        ]}
                        containerStyle={{ height: 55}}
                        style={{ backgroundColor: '#3C99DC', width: 80, }}
                        itemStyle={{
                            justifyContent: 'center',
                            
                        }}
                        dropDownStyle={{backgroundColor: '#3C99DC' }}
                        labelStyle={{
                            fontWeight: 'bold',
                            // textAlign: 'left',
                            color: 'white'
                        }}
                        selectedLabelStyle={{
                            color: 'white'
                        }}
                        onChangeItem={item => this.setState({
                            grade: item.value
                        })}
                    />
                </View>
                <View style={styles.view3}>
                    <TouchableOpacity style={styles.Butnblood} onPress={() => Postnow(this.state, this.props)}>
                        <Text style={styles.BtnTextblood}>Post Now</Text>
                    </TouchableOpacity>
                </View>

</ScrollView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    main: {
        backgroundColor: '#D5F3FE',
        width: '100%',
        height: '100%',
        // color: 'white',
    },
    headingview: {
        backgroundColor: "#3C99DC",
        height: 100,
        flexDirection: 'row',
        // alignSelf:'baseline',
        // alignContent:'center',
        alignItems: 'center'
    },
    view: {
        backgroundColor: "#3C99DC",
        height: 100,
        flexDirection: 'row',
        borderRadius: 30,
        // alignSelf:'center',
        justifyContent:'space-around',
        alignContent:'center',
        alignItems: 'center',
      },
    // img: {
    //     width: 100,
    //     height: 100,
    //     resizeMode: 'contain',
    //     borderColor: "red",
    //     borderWidth: 1,
    //     // marginLeft:-50,
    //     // marginRight:-50
    //     // opacity:0.6,
    // },
    headin: {
        //   marginLeft:0
        // marginRight:30,
        color: 'white',
        // borderColor: "red",
        // borderWidth: 1,
        fontSize: 26,
        fontWeight: 'bold',
        
      },
    heading: {
        //   marginLeft:0
        // marginRight:30,
        color: 'white',
        borderColor: "red",
        borderWidth: 1,
        fontSize: 41,
        fontWeight: 'bold'
    },
    textStyles: {
        color: '#3C99DC',
        fontSize: 24,
        fontWeight: 'bold',
    },
    view1: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        // marginLeft:15,
        marginTop: 50
    },
    view3: {
        marginTop: 90,
        marginBottom: 10,
        alignItems: 'center',
    },
    Butnblood: {
        width: 200,
        backgroundColor: '#3C99DC',
        borderRadius: 16,
        alignItems: 'center',
        padding: 18,
    },
    BtnTextblood: {
        color: 'white',
        fontSize: 24,
        fontWeight: "bold",
    },
})




const mapDispatchToProps = (dispatch) => ({
    Postnow: (state, props) => dispatch(Postnow(state, props))
})

export default connect(null, mapDispatchToProps)(PostJobs);