import React from 'react';
import { useState, useEffect } from 'react'
import { StyleSheet, Text, ScrollView, View, SafeAreaView, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const trips = [
  {
    "id": "1",
    "trip_title": "Tropical Paradise Getaway",
    "location": "Maldives",
    "date": "July 15, 2024 - July 22, 2024",
    "description": "Escape to the breathtaking beaches and crystal-clear waters of the Maldives. Enjoy a week of relaxation, water sports, and island exploration in luxurious overwater bungalows.",
    "images": ["https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800"],
    "participants": [],
    "messages": [{
      "time": "",
      "userId": "",
      "userName": "admin",
      "message": "welcome to your trip chat"

    }]
  },
  {
    "id": "2",
    "trip_title": "Alpine Adventure Retreat",
    "location": "Swiss Alps",
    "date": "January 10, 2025 - January 18, 2025",
    "description": "Embrace the winter wonderland of the Swiss Alps with this thrilling adventure trip. Ski and snowboard down powdery slopes, indulge in Swiss cuisine, and take in the stunning mountain views.",
    "images": ["https://images.pexels.com/photos/15964998/pexels-photo-15964998/free-photo-of-cold-snow-landscape-mountains.jpeg?auto=compress&cs=tinysrgb&w=800"],
    "participants": [],
    "messages": [{
      "time": "",
      "userId": "",
      "userName": "admin",
      "message": "welcome to your trip chat"

    }]
  },
  {
    "id": "3",
    "trip_title": "Historic European Capitals Tour",
    "location": "London, Paris, Rome",
    "date_start": "April 5, 2024",
    "date_end": "  April 20, 2024",
    "description": "Embark on a cultural journey through three iconic European capitals. Explore the historical landmarks, museums, and indulge in the local delicacies of London, Paris, and Rome.",
    "image": ["https://images.pexels.com/photos/1530259/pexels-photo-1530259.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1427581/pexels-photo-1427581.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1701595/pexels-photo-1701595.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    "participants": [],
    "messages": [{
      "time": "",
      "userId": "",
      "userName": "admin",
      "message": "welcome to your trip chat"

    }]
  },
  {
    "id": "4",
    "trip_title": "Serengeti Safari Expedition",
    "location": "Tanzania, Africa",
    "date": "September 3, 2024 - September 10, 2024",
    "description": "Witness the incredible wildlife of the Serengeti on an unforgettable safari adventure. Spot lions, elephants, giraffes, and more as you traverse the vast plains of Tanzania.",
    "images": ["https://images.pexels.com/photos/259547/pexels-photo-259547.jpeg?auto=compress&cs=tinysrgb&w=800"],
    "participants": [],
    "messages": [{
      "time": "",
      "userId": "",
      "userName": "admin",
      "message": "welcome to your trip chat"

    }]
  },
  {
    "id": "5",
    "trip_title": "Asian Foodie Delight",
    "location": "Tokyo, Bangkok, Singapore",
    "date": "November 12, 2024 - November 24, 2024",
    "description": "Satisfy your taste buds on this culinary journey through Tokyo, Bangkok, and Singapore. Experience a diverse range of Asian cuisines and street food delights.",
    "images": ["https://images.pexels.com/photos/1031780/pexels-photo-1031780.jpeg?auto=compress&cs=tinysrgb&w=800"],
    "participants": [],
    "messages": [{
      "time": "",
      "userId": "",
      "userName": "admin",
      "message": "welcome to your trip chat"

    }]
  },
  {
    "id": "6",
    "trip_title": "Amazon Rainforest Expedition",
    "location": "Brazil",
    "date": "May 1, 2025 - May 10, 2025",
    "description": "Immerse yourself in the unparalleled biodiversity of the Amazon Rainforest. Hike through lush jungles, spot exotic wildlife, and learn about indigenous cultures.",
    "images": ["https://images.pexels.com/photos/325807/pexels-photo-325807.jpeg?auto=compress&cs=tinysrgb&w=800"],
    "participants": [],
    "messages": [{
      "time": "",
      "userId": "",
      "userName": "admin",
      "message": "welcome to your trip chat"

    }]
  },
  {
    "id": "7",
    "trip_title": "California Road Trip",
    "location": "Los Angeles, San Francisco, Napa Valley",
    "date": "August 20, 2024 - August 30, 2024",
    "description": "Hit the open road along California's scenic coast. Explore vibrant cities, visit famous landmarks, and taste exquisite wines in Napa Valley.",
    "images": ["https://images.pexels.com/photos/3605316/pexels-photo-3605316.jpeg?auto=compress&cs=tinysrgb&w=800"],
    "participants": [],
    "messages": [{
      "time": "",
      "userId": "",
      "userName": "admin",
      "message": "welcome to your trip chat"

    }]
  }
]

const ImageCard = () => {
  const [tripToShow, setTrip] = useState(trips[0])
  const [imgIndex, setIndex] = useState(0)
  const [imgUrl, setUrl] = useState(tripToShow.images[imgIndex])
  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => {
    setExpanded(!expanded)
  }

  useEffect(() => {
    console.log(imgIndex)
    setUrl(tripToShow.images[imgIndex])
  }, [imgIndex])

  const scrollImg = (direction) => {
    let length = tripToShow.images.length

    console.log(length)
    console.log(imgIndex)
    if (direction == 'forward' && imgIndex < length - 1) {

      setIndex(imgIndex + 1)
      

    }
    if (direction == 'back' && imgIndex >= 1) {

      setIndex(imgIndex - 1)
    

    }
    if (direction == 'back' && imgIndex === 0) {

      setIndex(length - 1)
      


    }
    if (direction == 'forward' && imgIndex === length - 1) {

      setIndex(0)
     


    }

    console.log(imgIndex)

  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: 'white' }]}>
      <View style={[styles.container, { justifyContent: 'space-between', width: '100%' }]}>
        <View style={{ height: "90%", width: '100%' }}>
          <ImageBackground
            source={{ uri: imgUrl }}
            style={{ height: '100%', width: '100%', resizeMode: 'contain' }}>
              <View style={{height: '85%',justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity>
                  <AntDesign name="left" size={24} color="white" onPress={()=>{scrollImg('back')}} />
                </TouchableOpacity>
                <TouchableOpacity style={{}}>
                  <AntDesign name="right" size={24} color="white" onPress={()=>{scrollImg('forward')}} />
                </TouchableOpacity>
              </View>
            <Text style={styles.textRegular}>{tripToShow.trip_title}</Text>
            <Text style={styles.textRegular}>{tripToShow.location}</Text>
            <View style={styles.expandable}>
              <TouchableOpacity onPress={toggleExpanded}>
                <AntDesign name="infocirlceo" size={24} color="white" />
              </TouchableOpacity>
              {expanded && <ScrollView style={{backgroundColor: 'white'}}>
                <Text>Trip details:</Text>
                <Text>
                  {tripToShow.description}
                </Text>
              </ScrollView>}
              

            </View>


          </ImageBackground>
          

        </View>
        <View style={styles.bottom}>
          <TouchableOpacity><AntDesign name="close" size={40} color="red" />
          </TouchableOpacity>
          <TouchableOpacity><MaterialIcons name="stars" size={40} color="cyan" /></TouchableOpacity>
          <TouchableOpacity><Ionicons name="md-heart" size={40} color="green" /></TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },

  bottom: {
    // flex: 0,
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 80,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',


  },

  textHeader: {

  },

  textRegular: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    padding: 2
  }

});



export default ImageCard