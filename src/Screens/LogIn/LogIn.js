import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label,Left, Body, Right,Text, Button, Icon, Title } from 'native-base';
import {View,StyleSheet} from 'react-native'
import { connect } from "react-redux"
import { login } from '../../Store/Actions/Actions'
// import DropDownPicker from 'react-native-dropdown-picker';
class LogIn extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         applicant:''
    //     }
    // }
  render() {
    return (
      <Container>
          {/* <StatusBar style={{backgroundColor: "#3C99DC"}} barStyle="dark-content"/> */}
        <Header style={{backgroundColor: "#3C99DC"}} androidStatusBarColor='#000' >
        {/* <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left> */}
          <Body>
            <Title>Log In</Title>
          </Body>
          {/* <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right> */}
        </Header>
        <Content>
          <Form>
            {/* <Item floatingLabel>
              <Label>Name </Label>
              <Input onChangeText={(text) => this.setState({ name: text })} />
            </Item> */}
            {/* <Item floatingLabel>
              <Label>Class </Label>
              <Input onChangeText={(text) => this.setState({ class: text })} />
            </Item> */}
            {/* <Item floatingLabel>
              <Label>Grade </Label>
              <Input onChangeText={(text) => this.setState({ grade: text })} />
            </Item>
            <Item floatingLabel>
              <Label>Roll no.</Label>
              <Input onChangeText={(text) => this.setState({ roll : text })} />
            </Item> */}
            <Item floatingLabel>
              <Label>Email Address</Label>
              <Input onChangeText={(text) => this.setState({ email: text })} />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input onChangeText={(text) => this.setState({ password: text })} />
            </Item>
        {/* <View style={styles.view1}>
                    <Label style={styles.textStyles}>Applicant : </Label>
                    <DropDownPicker
                        items={[
                            { label: 'Applicant', value: 'Applicant', hidden: true },
                            { label: 'Company', value: 'Company' },
                            { label: 'Student', value: 'Student' },
                            // { label: 'B', value: 'B' },
                            // { label: 'AB', value: 'AB' },
                        ]}
                        // defaultValue={this.state.bloodgroup}
                        containerStyle={{ height: 40}}
                        style={{ backgroundColor: '#3C99DC', width: 100, }}
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
                            applicant: item.value
                        })}
                    />
                </View> */}
          </Form>
        <Button onPress={() => login(this.state, this.props)} info style={{marginTop:100,width:180,alignSelf:'center',paddingLeft:40,borderRadius:20}} ><Text style={{fontSize:19,fontWeight:'bold'}}>Log In</Text></Button>
        </Content>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
    login: (state,props) => dispatch(login(state,props)),
  })
  
  
  export default connect(null, mapDispatchToProps)(LogIn);


  const styles = StyleSheet.create({
    textStyles: {
        color: '#888888',
        fontSize: 18,
        fontWeight: 'bold',
    },
    view1: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        // marginLeft:15,
        marginTop: 50
    },
  })