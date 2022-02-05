
import React from "react";
import { Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Card = ({ title, telephone, town, location, map }) => {
    // const latitude = map.coords.latitude;
    // const longitude = map.coords.longitude

    return (

        <View style={{
            width: "90%", height: "20%", backgroundColor: "#fff", borderRadius: 30, flex: 1,
            marginHorizontal: "5%", padding: "3%",
            marginVertical: "4%", borderColor: "red", borderWidth: 1.5
        }}>


            <View style={{ flexDirection: "row", alignItems: "center", borderBottomColor: "red", borderBottomWidth: 1, paddingBottom: "2%" }}>
                <Image source={require("../images/eczane-logo.png")} style={{ width: 50, height: 50 }} />
                <Text style={{ fontSize: 20, fontWeight: "bold", paddingLeft: "5%" }}>{title}</Text>
            </View>

            <View style={{ paddingTop: "3%" }} >
                <Text style={{ fontSize: 17, color: "red" }}> Bulunduğu ilçe : {town}</Text>
                <Text style={{ fontSize: 17, color: "red", marginTop: "3%" }}> Telefon : {telephone}</Text>

            </View>

            {/* telefon numarasını verip telefonla aratma */}
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>

                <TouchableOpacity onPress={() => Linking.openURL(`tel:${telephone}`)} style={{ flexDirection: "row", alignItems: "center", marginVertical: "5%" }}>
                    <Text style={{ fontWeight: "bold", fontSize: 15 }}> ARA</Text>
                    <Ionicons name="call-outline" size={40} color={"red"} />

                </TouchableOpacity>

                {/* konum bilgilerini verip haritada yol tarifi gösterme location benim konumum map içinden gelen koordinatlar eczanenin konumu */}
                <TouchableOpacity onPress={() =>
                    Linking.openURL(`https://www.google.com/maps/dir/?api=1&destination=${location}&origin=${map.coords.latitude},${map.coords.longitude}`)}
                    style={{ flexDirection: "row", alignItems: "center", }}>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}> KONUMA GİT </Text>
                    <Ionicons name="location-outline" size={40} color={"red"} />

                </TouchableOpacity>
            </View>

        </View>

    )


}

export default Card