import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from "react";

import { ScrollView, Image, StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Card from './src/component/card'
import RBSheet from "react-native-raw-bottom-sheet";
import { Entypo } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const refRBSheet = useRef();

 
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
      imageUrl: 'https://images.unsplash.com/photo-1629118639928-b178ae9ceefc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
      price: '£2,000'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      imageUrl: 'https://images.unsplash.com/photo-1629118639928-b178ae9ceefc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
      price: '£2,000'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      imageUrl: 'https://images.unsplash.com/photo-1629118639928-b178ae9ceefc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
      price: '£2,000'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      imageUrl: 'https://images.unsplash.com/photo-1629118639928-b178ae9ceefc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
      price: '£2,000'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
      imageUrl: 'https://images.unsplash.com/photo-1629118639928-b178ae9ceefc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
      price: '£2,000'
    },
    
  ];

  const renderItem = ({ item }) => (
    <Card imageUrl={item.imageUrl} title={item.title} price={item.price}/>
    );
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
        <View style={{ width: '100%', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 20,  flexDirection: 'row'}}>

      <Text style={{fontSize: 24, fontWeight: 'bold'}}>Inventory</Text>

      <TouchableOpacity onPress={() => refRBSheet.current.open() }  >
      <AntDesign name="pluscircle" size={24} color="#2D50E6" />
      </TouchableOpacity>
        </View>



        <ScrollView >

         

          

          <FlatList
          numColumns={2}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />

        </ScrollView>


        <RBSheet
            // @ts-ignore
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {


          },
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            height: '95%',
            backgroundColor: '#f4f3ef'

            
          },
          draggableIcon: {
            backgroundColor: "#9AACC93B"
          }
        }}
      >
        <SheetContent 
            closeSheet={() => refRBSheet.current.close() }
     />
      </RBSheet>


    </View>
  );
}


const SheetContent = ({closeSheet}) => {

    const [profileImage, setProfileImage] = useState()

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    setProfileImage(pickerResult);
  }

  return (
    <View style={{paddingHorizontal: 30, paddingBottom: 20}} >
    <View style={{justifyContent: 'space-between', marginVertical: 30, flexDirection: 'row', marginTop:20, width:'100%'}}> 
   
   <TouchableOpacity onPress={closeSheet }>
     <Text style={[styles.label, {color: 'blue'}]}>Cancel</Text>
   </TouchableOpacity>
   <TouchableOpacity>
     <Text style={styles.label}>Add</Text>
   </TouchableOpacity>
    </View>



    <View style={{flexDirection: 'column'}}>



      <View style={{justifyContent: 'center', alignItems: 'center'}}>

      {
        profileImage && <Image 
        style={{   borderRadius: 60,
          borderWidth: 1,
          width: 120 ,
          height: 120}}
        source={{uri: profileImage.uri}} />
      }

   {     !profileImage &&  <TouchableOpacity 
        onPress={openImagePickerAsync}
      
      style={{alignItems: 'center',
      padding: 20,
      borderRadius: 60,
      borderWidth: 1,
      width: 120 ,
      height: 120,
      borderColor: '#949288',
      borderStyle: 'dashed'


    }}>

      <Entypo name="camera" size={40} color="blue" />

        <Text style={styles.label}>Add photo</Text>
      </TouchableOpacity>
}

      </View>


      <View style={{width: '100%', marginVertical: 5}}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.textInput} placeholder='Bracelet' />
      </View>

      <View style={{width: '100%', marginVertical: 5}}>
        <Text style={styles.label}>Category</Text>
        <TextInput style={styles.textInput} placeholder='Select a category...' />
      </View>

      <View style={{width: '100%', marginVertical: 5}}>
        <Text style={styles.label}>Value</Text>
        <TextInput style={styles.textInput} placeholder='700' />
      </View>

      <View style={{width: '100%', marginVertical: 5}}>
        <Text style={[styles.label]}>Description</Text>
        <TextInput style={styles.description}
        multiline
        numberOfLines={5}
        maxLength={40}

         placeholder='Optional' />
      </View>



    </View>

   
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f3ef',
    alignItems: 'center',

    paddingTop: 40
  },

  label: {
    fontWeight: 'bold',
    margin: 5
  },
  description: {
    width: '100%' , paddingHorizontal: 10,
    paddingVertical: 5, borderRadius: 10, borderWidth: 2, 
    borderColor: '#f0efea', backgroundColor: 'white',
  },

  textInput: {
    width: '100%' , paddingHorizontal: 10,
    paddingVertical: 5, borderRadius: 10, borderWidth: 2, 
    borderColor: '#f0efea', backgroundColor: 'white',
    alignItems: 'flex-start'
  }
});
