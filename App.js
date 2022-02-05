
import React, { useEffect, useState } from "react";
import {  Text, View,  FlatList } from 'react-native';
import axios from "axios";
import * as Location from "expo-location";
import Card from "./src/components/Card";
export default function App() {


  const [pharmacies, setPharmacies] = useState([]);
  const [locations, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
console.log(pharmacies ,"eczeneler")


  //deneme data
  const eczaneler = [
      {
          name: "Sağlık Eczanesi",
          dist: "Merkez",
          address: " merkez mah. No:1/C ",
          phone: "0312 231 71 75",
          loc: "39.92887565500589,32.84444332122803"
      },
      {
          name: "Yaşar Eczanesi",
          dist: "Şükrüpaşa",
          address: "no 2 ",
          phone: "0312 236 36 96",
          loc: "39.88566860058295,32.71559000015259"
      },
      {
        name: "Neşe Eczanesi",
        dist: "Zübeyde",
        address: "no 3 ",
        phone: "0312 236 36 90",
        loc: "39.8856686005855,32.71559000014259"
    },
  ]

  //apiden nöbetçi eczane çekme

  useEffect(() => {
      const fetchData = async () => {

          const response = await axios.get("https://api.collectapi.com/health/dutyPharmacy?il=Edirne", {
              headers: {
                  "authorization": "apikey 0fESBcKb0EQ2RCNWJFjuJr:2mGi93VfsJFCZ4dU6zsIDA",
                  "content-type": "application/json"
              }

          });
          setPharmacies(response.data.result);
          console.log(pharmacies ,"eczeneler")

      }
      fetchData(pharmacies);

  }, [pharmacies]);
 



  // konum bulmak için
  useEffect(() => {
      (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();

          if (status !== 'granted') {
              setErrorMsg('Permission to access location was denied');
              console.log(errorMsg);
              return;
          }

          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
      })();
  }, []);
  



  return (
    <View style={{flex:1}}>

      <View style={{ width: "100%", height: "10%", marginTop: "7%",backgroundColor:"red" ,padding:10 }}>
       
        <Text style={{ fontSize: 23, fontWeight: "bold", color: "#fff" }}>Nöbetçi Eczane</Text>
        <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff" }}>Edirne</Text>
      </View>

      <FlatList
      
        data={pharmacies}
        
        renderItem={({ item }) => {
          return (
            
            <Card
           
              //datanın içindekileri componente gönderme
              title={item.name}
              town={item.dist}
              telephone={item.phone}
              location={item.loc}
              map={locations} />
          )
        }} />
    </View>
  );
}


