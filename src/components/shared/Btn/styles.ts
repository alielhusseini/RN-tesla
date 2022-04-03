import { ScaledSheet } from "react-native-size-matters";
import { COLORS } from "../../../assets/colors";

export const styles = ScaledSheet.create({
    btnContainer: {
        width: "100%",
        padding: "10@s",
    },
    btn: {
        height: '40@s',
        borderRadius: '20@s',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        fontSize: '12@s',
        fontWeight: '500',
        textTransform: 'uppercase',
        letterSpacing: '1@s',
    },
})