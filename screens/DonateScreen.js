import * as React from 'react';
import {FlatList,ScrollView,Text,View,TouchableOpacity,Alert,StyleSheet,TextInput,Image,Modal,KeyboardAvoidingView} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader';
import {ListItems} from 'react-native-elements';

export default class DonateScreen extends React.Component{

    constructor(){
        super()
        this.state={
            requestedBooksList:[],
            

        }
        this.requestRef=null
    }
 getRequestedBooksList=()=>{
     this.requestRef=db.collection("Request_Books").onSnapshot((snapshot)=>{
         var requestedBooksList=snapshot.docs.map(document=>document.data())
         this.setState({
             requestedBooksLists:requestedBooksList
         })
         })
     

 }

 componentDidMount(){
     this.getRequestedBooksList
 }
 componentWillUnmount(){
     this.requestRef
 }

 keyExtracter=(item,index)=>{
 index.toString()
 }

 renderItem=({item,i})=>{
return(
    <ListItem
    key={i}
    title={item.book_name}
    subtitle={item.reasonto_request}
    titleStyle={{color:"grey",fontWeight:"bold"}}
    rightElement={
        <TouchableOpacity style={styles.button}>
            <Text style={{color:"yellow"}}>View</Text>
        </TouchableOpacity>
    }
    bottomDivider
    />
)
 }
render(){
    return(
        <View style={{flex:1}}>
            <MyHeader title ="DonateBooks" > </MyHeader>
            <View style={{flex:1}}>
                {
                    this.state.requestedBooksList.length===0?
                    (
                        <View style={styles.subContainer}> <Text style={{fontSize:20}}>
                            List Of all Requested Books </Text></View> 
                    );
                    (
                        <FlatList keyExtractor={this.keyExtractor}
                        data={this.state.requestedBooksList}
                        renderItem={this.renderItem}
                        >

                        </FlatList>
                    )

                }
            </View>
        </View>
    )
}

}

const styles = StyleSheet.create({
    keyBoardStyle : {
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    formTextInput:{
      width:"75%",
      height:35,
      alignSelf:'center',
      borderColor:'#ffab91',
      borderRadius:10,
      borderWidth:1,
      marginTop:20,
      padding:10,
    },
    button:{
      width:"75%",
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
      marginTop:20
      },
    }
  )
  