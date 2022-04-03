import { View, Text, ImageBackground, ImageSourcePropType } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Btn } from '../Btn'

export function CarItem({ name, tagline, image, taglineCTA }: { name: string, tagline: string, image: ImageSourcePropType, taglineCTA: string | undefined }) {

    return (
        <View style={styles.container}>

            {/* background */}
            <ImageBackground source={image} style={styles.imageBackground} />

            {/* title */}
            <View style={styles.titlesContainer}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>{tagline}&nbsp;<Text style={styles.subtitleCTA}>{taglineCTA}</Text></Text>
            </View>

            {/* buttons */}
            <View style={styles.btnContainer}>
                <Btn type='primary' text='custom order' handlePress={() => console.warn('custom order')} />
                <Btn type='secondary' text='existing inventory' handlePress={() => console.warn('existing inventory')} />
            </View>

        </View>
    )
}