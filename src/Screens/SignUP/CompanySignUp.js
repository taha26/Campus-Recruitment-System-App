import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label,Left, Body, Right,Text, Button, Icon, Title } from 'native-base';
import {View,StyleSheet} from 'react-native'
import { connect } from "react-redux"
import { companySignUp } from '../../Store/Actions/Actions'
import DropDownPicker from 'react-native-dropdown-picker';
class CompanySignUp extends React.Component {
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
            <Title>Company Sign Up</Title>
          </Body>
          {/* <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right> */}
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Company Name </Label>
              <Input onChangeText={(text) => this.setState({ name: text })} />
            </Item>
            {/* <Item floatingLabel>
              <Label>Student Class (Only Fill If You Sign Up As A Student)</Label>
              <Input onChangeText={(text) => this.setState({ email: text })} />
            </Item> */}
            {/* <Item floatingLabel>
              <Label>Student Marks (Only Fill If You Sign Up As A Student)</Label>
              <Input onChangeText={(text) => this.setState({ email: text })} />
            </Item> */}
            {/* <Item floatingLabel>
              <Label>Company Name (Only Fill If You Sign Up As A Company)</Label>
              <Input onChangeText={(text) => this.setState({ email: text })} />
            </Item> */}
            <Item floatingLabel>
              <Label>Email Address</Label>
              <Input onChangeText={(text) => this.setState({ email: text })} />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input onChangeText={(text) => this.setState({ password: text })} />
            </Item>
        <View style={styles.view1}>
                    <Label style={styles.textStyles}>Department : </Label>
                    <DropDownPicker
                        items={[
                            { label: 'Department', value: 'Department', hidden: true },
                            { label: 'Computer Science', value: 'Computer Science' },
                            { label: 'Software Engineering', value: 'Software Engineering' },
                            // { label: 'B', value: 'B' },
                            // { label: 'AB', value: 'AB' },
                        ]}
                        // defaultValue={this.state.bloodgroup}
                        containerStyle={{ height: 55}}
                        style={{ backgroundColor: '#3C99DC', width: 120, }}
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
                            department: item.value
                        })}
                    />
                </View>
          </Form>
        <Button onPress={() => companySignUp(this.state, this.props)} info style={{marginTop:140,width:180,alignSelf:'center',paddingLeft:40,borderRadius:20}} ><Text style={{fontSize:19,fontWeight:'bold'}}>Sign Up</Text></Button>
        </Content>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
    companySignUp: (state,props) => dispatch(companySignUp(state,props)),
  //   AvailableBlood: (props) => dispatch(AvailableBlood(props)),
  //   DonateBlood: (props) => dispatch(DonateBlood(props)),
  })
  
  
  export default connect(null, mapDispatchToProps)(CompanySignUp);


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