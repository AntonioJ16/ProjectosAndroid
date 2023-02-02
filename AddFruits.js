import React, { useState } from 'react';
import {Text, TextInput, View, Button } from 'react-native';




export default function MarketScreen(){
  
    const [nombre, setNombre] = useState();
    const [validateNombre, setValidateNombre]=useState(false);
    const [precio, setPrecio] = useState();
    const [validatePrecio, setValidatePrecio]=useState(false);

    function setNombreFruta(nombre){
        const re= /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;

        if(re.test(nombre)){
            setValidateNombre(true);
        }else{
            setValidateNombre(false);
        }setNombre(nombre);

    }

    function setPrecioFruta(precio){
        const re= /^\d+(\.\d{1,2})?$/;

        if(re.test(precio)){
            setValidatePrecio(true);
        }else{
            setValidatePrecio(false);
        }setPrecio(precio);
    }

    function comprobar(){
        if(validateNombre && validatePrecio){
            post();
        }
    }

    function post(){
       
        fetch('http://10.88.10.243:8080/fruits', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstParam: nombre,
                secondParam: precio,
            }),
        
        })
            .then((response) => response.json())
            .then((responseData) => {
                console.log(
                    "POST Response",
                    "Response Body -> " + JSON.stringify(responseData)
                )
                }).catch()
            
    }


    return(
            <View>
            <Text style={{textAlign: 'center', fontSize: 17,textShadowColor:'black', color:'blue' }}>Add fruits</Text>
            <TextInput style={{
                alignSelf:'center',
                marginBottom:25,
                marginTop:25,
                marginLeft:25,
                padding:0,
                height:30,
                width:250,
                borderWidth:1,
                fontSize:15,
                borderColor: 'F1A999'
            }}
            placeholder="   Name"
            value={nombre}
            onChangeText={nombre => setNombreFruta(nombre)}/>
            <TextInput
            style={{
                alignSelf:'center',
                marginBottom:25,
                marginLeft:25,
                padding:0,
                height:30,
                width:250,
                borderWidth:1,
                fontSize:15,
                borderColor: 'F1A999'
            }}
            placeholder="   Price"
            value={precio}
            onChangeText={precio => setPrecioFruta(precio)}/>
            
            <Button onPress={()=> comprobar()} title="Comprobar"/>
            </View>
        
    )
}