import auth from '@react-native-firebase/auth';
// // import React from 'react';
import database from '@react-native-firebase/database';


const signup=(props)=>{
  props.navigation.navigate('SignUp')
  // console.log('running',props)
}






const stuSignup=(props)=>{
  props.navigation.navigate('StudentSignUp')
  // console.log('running',props)
}





const compSignup=(props)=>{
  props.navigation.navigate('CompanySignUp')
  // console.log('running',props)
}





const studentSignUp=(state,props)=>{
  auth()
  .createUserWithEmailAndPassword(state.email, state.password)
  .then((result) => {
    console.log('User account created & signed in!');
    // console.log('result>>>',result.user.uid);
    let students = {
      name:state.name,
      class:state.class,
      grade:state.grade,
      roll:state.roll,
      email:result.user.email,
      uid:result.user.uid
    }
    
    //  console.log("studebras",students)
    database().ref('/').child(`students/${result.user.uid}`).set(students)
    .then(()=>{
      return (dispatch)=>{
      // try{
      //   // console.log('dispatch+++>>>>',dispatch)
      dispatch({type:"STUDENTS",payload:students})
    // }catch(err){
    //   console.log("err...",err)
    // }
  }
  })
})
.catch(error => {
  if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
  alert("Successfully Sign Up")
  setTimeout(()=>{
    props.navigation.navigate('Home')
  },2000)
}







const companySignUp=(state,props)=>{
  auth()
  .createUserWithEmailAndPassword(state.email, state.password)
  .then((result) => {
    console.log('User account created & signed in!');
    // console.log('result>>>',result.user.uid);
    let company = {
      name:state.name,
      // class:state.class,
      // grade:state.grade,
      // roll:state.roll,
      email:result.user.email,
      uid:result.user.uid
    }
    
    //  console.log("studebras",students)
    database().ref('/').child(`company/${result.user.uid}`).set(company)
    .then(()=>{
      return (dispatch)=>{
      // try{
      //   // console.log('dispatch+++>>>>',dispatch)
      dispatch({type:"COMPANY",payload:company})
    // }catch(err){
    //   console.log("err...",err)
    // }
  }
  })
})
.catch(error => {
  if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
  alert("Successfully Sign Up")
  setTimeout(()=>{
    props.navigation.navigate('Home')
  },2000)
}







const Login=(props)=>{
  props.navigation.navigate('LogIn')
}


// let StudentEmail;




const login=(state,props)=>{
  // props.navigation.navigate('LogIn')
  auth()
  .signInWithEmailAndPassword(state.email, state.password)
  .then((result) => {
    // var stuid;
    // var comuid;
    //  database().ref('/').child(`students/`).on("child_added",(data)=>{
    //   stuid= data.val().uid
    // });
    //  database().ref('/').child(`company/`).on("child_added",(data)=>{
    //   comuid= data.val().uid
    // });
    database().ref('/').child(`students/`).on("child_added",(data)=>{
  let StudentEmail={email:data.val().email}
  if(StudentEmail.email===result.user.email){
    props.navigation.navigate("Student")
  }
})
    database().ref('/').child(`company/`).on("child_added",(data)=>{
  let CompanyEmail={email:data.val().email}
  if(CompanyEmail.email===result.user.email){
    props.navigation.navigate("Company")
  }
})


    //  else if(database().ref('/').child(`company/${result.user.uid}`)===result.user.uid){
    //   props.navigation.navigate("Company")
    // }
     if("admin@gmail.com"===result.user.email){
      props.navigation.navigate("Admin")
    }

      // console.log("DATA>>>>>>>>....",da)
      // get_data=
      // {
      //   uid: data.val().uid,
      //   // bloodgroup:data.val().bloodgroup,
      //   // key:data.val().key,
      //   // name:data.val().name,
        
      // }


      // dispatch({type:"POSTGET",payload:post_get_data})
  // if(get_data.uid === result.user.uid){

  //   props.navigation.navigate("Student")
  // }
    
    // return (dispatch)=>{
    // console.log('reuslt........>>>>>>',result.user.uid);
    // extract(result)

  //     // try{
  //     //   // console.log('dispatch+++>>>>',dispatch)
      // dispatch({type:"CURRENTUSER",payload:result.user})
  //   // }catch(err){
  //   //   console.log("err...",err)
  //   // }
// }
})
.catch(error => {
  if (error.code === 'auth/email-already-in-use') {
    console.log('That email address is already in use!');
  }
  
  if (error.code === 'auth/invalid-email') {
    console.log('That email address is invalid!');
  }
  
  console.error(error);
});
// setTimeout(()=>{
//   props.navigation.navigate('Admin')
//   },3000)
}


// const extract=(val)=> {
//   var value = val
//   return (dispatch)=>{
//   // console.log("val.....",val.user.uid)
//     // try{
//     //   // console.log('dispatch+++>>>>',dispatch)
//     dispatch({type:"CURRENTUSER",payload:value})
//   // }catch(err){
//   //   console.log("err...",err)
//   // }
// }
// }



const stuDetails=(props)=>{
  props.navigation.navigate("StudentDetails")
}



const postJobs=(props)=>{
  props.navigation.navigate("PostJobs")
}




const postGet =()=>{
  return(dispatch)=>{
      // let post_get_data_array = []
      database().ref('/').child(`students/`).on("child_added",(data)=>{

          let post_get_data=
          {
                  name: data.val().name,
                  class:data.val().class,
                  roll:data.val().roll,
                  grade:data.val().grade,

          }

          dispatch({type:"POSTGET",payload:post_get_data})
      })
  }
}



const Postnow=(state,props)=>{
  var key = database().ref('/').child(`post/`).push().key
  let stateKey = {
      ...state,
      key:key
  }
  database().ref('/').child(`post/${key}`).set(stateKey)
  alert("Sucessfully Posted")
  setTimeout(()=>{
    props.navigation.navigate('Company')
  },2000)
}


const logout=(props)=>{
  auth()
.signOut()
.then(() => console.log('User signed out!'));


props.navigation.navigate('Home')

}




const postShow=(props)=>{
  props.navigation.navigate('PostShow')
}


const postView=(props)=>{
  return(dispatch)=>{
    // let post_get_data_array = []
    database().ref('/').child(`post/`).on("child_added",(data)=>{

        let post_view=
        {
                jobtitle: data.val().jobtitle,
                salary:data.val().salary,
                grade:data.val().grade,

        }

        dispatch({type:"POSTVIEW",payload:post_view})
    })
}
}




export{
  // facebook_login,
  signup,
  logout,
  postGet,
  postView,
  Login,
  stuSignup,
  compSignup,
  studentSignUp,
  companySignUp,
  login,
  stuDetails,
  postJobs,
  Postnow,
  postShow,
  // action,
} 