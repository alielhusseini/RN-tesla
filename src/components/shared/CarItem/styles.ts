import { Dimensions, Platform } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { COLORS } from "../../../assets/colors";

export const styles = ScaledSheet.create({
    container: {
        width: '100%',
        // inside a flatlist, never set the higth to 100%
        height: Platform.OS === 'ios' ? Dimensions.get('screen').height : Dimensions.get('screen').height * .95,
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    },
    titlesContainer: {
        marginTop: '30%',
        alignItems: 'center',
        width: '100%',
    },
    title: {
        fontSize: '40@s',
        fontWeight: '500',
        color: COLORS.black,
    },
    subtitle: {
        fontSize: '16@s',
        color: COLORS.gray,
    },
    subtitleCTA: {
        textDecorationLine: 'underline',
    },
    btnContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 50,
    }
})