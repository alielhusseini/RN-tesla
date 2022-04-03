import { View, Text, FlatList, Dimensions, Platform } from 'react-native'
import React from 'react'
import { CarItem } from '../../shared'
import data from '../../../assets/data'

export function Home() {

    return (
        <View style={{ width: '100%', height: '100%' }}>

            <FlatList
                keyExtractor={(item) => item.id.toString()}
                data={data}
                renderItem={({ item }) => <CarItem name={item.name} tagline={item.tagline} image={item.image} taglineCTA={item?.taglineCTA} />}
                showsVerticalScrollIndicator={false}
                snapToAlignment='start'
                decelerationRate='fast'
                snapToInterval={Platform.OS === 'ios' ? Dimensions.get('screen').height : Dimensions.get('screen').height * .95}
            />

        </View>
    )
}