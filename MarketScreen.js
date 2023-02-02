import React, { useEffect, useState } from 'react';
import { RefreshControl, Text, FlatList, View, Image } from 'react-native';

const wait = (timeout) => {
    return new Promise(resolve =>{
        setTimeout(resolve, timeout);
    });
}

export default function MarketScreen(){
    const[fruits, setFruits] = useState(null);
    const[refreshing,setRefreshing]= useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    },[]);

    useEffect(() => {
        fetch("http:/10.88.10.243:8080/fruits")
        .then(response => response.json())
        .then((responseJson) => {
            console.log('getting data from fetch', responseJson);
            setFruits(responseJson);
        })
        .catch(error=> console.log(error));
    },[]);

    const renderItem= ({item})=>{
        return(
            <View>
        <Text style={{
            color:'blue',
            shadowColor:'black',
            fontSize:18,
            textAlign:'center'
        }}>{item.name}, Precio: {item.price}</Text> 
        <Image
            style={{
                height: 350,
                width: 350,
            }}
            source={(item.name === 'Strawberry')?require("../PrimerProyecto/Img/1341264.jpeg"):(item.name === 'Piña')?require("../PrimerProyecto/Img/piña_g.jpg"):(item.name === 'Platano')?require("../PrimerProyecto/Img/Platano.jpg"):(item.name === 'Sandia')?require("../PrimerProyecto/Img/Sandia.jpg"):require("../PrimerProyecto/Img/melon.png")}
        />
    </View>
      )
    }
       
    return(
       <View>
            
            <FlatList refreshControl={
                <RefreshControl refreshing={refreshing}onRefresh={onRefresh}/>
            }
            data={fruits}
            renderItem={renderItem}
            keyExtractor={item=>item.id}
            />
             </View>
    )
}