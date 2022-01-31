import {  Image, StyleSheet, Text, View , Dimensions} from 'react-native';


const Card = ({imageUrl, title, price}) => {
  return (
    




          <View style={styles.card}>
            <Image source={{uri: imageUrl}} style={{backgroundColor: 'red', width: '100%', height: 150}} />
            <View style={{padding: 20}}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>{title}</Text>
              <Text style={{fontSize: 14, color: '#949288', paddingVertical: 5}}>{price}</Text>
            </View>
          </View>
          
          

  );
}

export default Card

const windowWidth = Dimensions.get('window').width;
const cardWidth = windowWidth * 0.4
const styles = StyleSheet.create({
    card: {
        flexDirection: 'column', 
        borderRadius: 20,
        shadowColor: 'black', 
        shadowOpacity: 0.1,
         shadowRadius: 5, 
         margin: 10,
   width: cardWidth, 
    backgroundColor: '#fff', 
    overflow: 'hidden'
    },

  container: {
    flex: 1,
    backgroundColor: '#f4f3ef',
    alignItems: 'center',

    paddingTop: 40
  },
});
