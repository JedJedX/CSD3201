import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from
    'react-native';
const products = [
    {
        id: '1',
        name: '2014 Chevrolet Camaro 6.2 (ปี 09-15) ZL1 Coupe',
        price: '2,520,000 บาท',
        image:'https://img1.icarcdn.com/21230741/gallery_%E0%B8%A3%E0%B8%96%E0%B8%A1%E0%B8%B7%E0%B8%AD%E0%B8%AA%E0%B8%AD%E0%B8%87-one2car-chevrolet-camaro-zl1-coupe-thailand_9ab2fee1-c72d-46a5-ae05-e20c8f558473.jpg.webp?smia=xTM', 
    },
    
    
];
const Worklistapp = () => {
    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image}/>
            <Text style={styles.name}>Product Name: {item.name}</Text>
            <Text style={styles.price}>Price: {item.price}</Text>
        </View>
    );
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Product List</Text>
            <Text style={styles.subtitle}>Programmer Name: Jedsada Chimnok</Text>
            <FlatList

                data={products}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#122122',
        padding: 30,   
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        marginTop:20,
        color: '#fff',
    },
    subtitle: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,
        marginTop:20,
        color: '#fff'
    },
    card: {
        backgroundColor: '#ffff',
        padding: 15,
        marginVertical: 10,
        borderRadius: 8,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
    },
    image: {
        width: 150,
        height: 100,
        marginBottom: 10,

        resizeMode: 'contain',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    price: {
        fontSize: 16,
        color: 'red',
    },
});
export default Worklistapp;