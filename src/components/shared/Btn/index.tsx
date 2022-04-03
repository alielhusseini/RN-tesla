import { View, Text, Pressable, Alert } from 'react-native'
import React, { useCallback } from 'react'
import { styles } from './styles'
import { COLORS } from '../../../assets/colors'

export function Btn({ type, text, handlePress }: { type: string, text: string, handlePress: () => void }) {

    const backgroundColor = type === 'primary' ? COLORS.grayDark : COLORS.whiteDark
    const color = type !== 'primary' ? COLORS.grayDark : COLORS.white

    return (
        <View style={styles.btnContainer}>
            <Pressable onPress={() => handlePress()} style={[styles.btn, { backgroundColor }]}>
                <Text style={[styles.btnText, { color }]}>{text}</Text>
            </Pressable>
        </View>
    )
}