import React,{ Component } from "react";
import { View } from "react-native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
export default class GoogleSearch extends Component
{

autoComplete(){
    return  <GooglePlacesAutocomplete
    placeholder='Enter Location'
    minLength={2}
    autoFocus={false}
    returnKeyType={'search'}
    fetchDetails={true}
    query={{
        key: 'AIzaSyBDQHOnkXBu5C_CVGOuQ9F8UN2y09m6RL8',
        language: 'vi', // language of the results
        types: 'geocode' // default: 'geocode'
      }}
      
      onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
      console.log("data", data)
      if(this.props.route.params.key==1){
         this.props.route.params.onSubmit(data)
         this.props.navigation.goBack(null)
      }
      if(this.props.route.params.key==2)
      {
        this.props.route.params.onSubmit(data)
        this.props.navigation.goBack(null)
      }
     
      console.log("data", data)
    }}
    styles={{
      textInputContainer: {
        backgroundColor: 'rgba(0,0,0,0)',
        borderTopWidth: 0,
        borderBottomWidth:0
      },
      textInput: {
        marginLeft: 0,
        marginRight: 0,
        height: 38,
        color: '#5d5d5d',
        fontSize: 16
      },
      predefinedPlacesDescription: {
        color: '#1faadb'
      },
    }}
  
    currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
    currentLocationLabel="Current location"
    nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
    GoogleReverseGeocodingQuery={{
      // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
    }}
    GooglePlacesSearchQuery={{
      // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
      rankby: 'distance',
      types: 'food',
    }}
    GooglePlacesDetailsQuery={{
        // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
        fields: 'formatted_address',
    }}

    filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities

  /> 
     

}

render(){
    return(

        <View style={{flex:1}}>
            {this.autoComplete()}
        </View>
    );
}
}