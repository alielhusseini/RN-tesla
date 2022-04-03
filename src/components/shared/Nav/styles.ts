import { ScaledSheet } from "react-native-size-matters";
import { Platform } from "react-native";

export const styles = ScaledSheet.create({
    container: {
        flexDirection: 'row',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'space-between',
        top: Platform.OS === 'ios' ? 50 : 20,
        zIndex: 1,
        width: '100%',
        paddingHorizontal: '20@s',
    },
    logo: {
        width: '100@s',
        height: '20@s',
        resizeMode: 'contain',
    },
    menu: {
        width: '25@s',
        height: '25@s',
        resizeMode: 'contain',
    },
})