import {
    StyleSheet,
} from 'react-native';
import Colors from './colors'
import { scale, moderateScale } from './scaling'

const styles = StyleSheet.create({
    txtTabMain: {
        color: Colors.black,
        fontSize: moderateScale(10),
        textAlign: 'left'
    },
    txtFunctionMain: {
        color: Colors.black,
        fontSize: moderateScale(12),
        textAlign: 'center'
    },
    txtFunctionMainExpand: {
        color: Colors.black,
        fontSize: moderateScale(12),
        textAlign: 'left'
    },
    txtFunctionMainTitle: {
        color: Colors.black,
        fontSize: moderateScale(18),
        textAlign: 'left'
    },
    LeftBlackNormal: {
        color: Colors.black,
        fontSize: moderateScale(12),
        textAlign: 'left'
    },

    Credit_Center_White: {
        fontSize: moderateScale(25),
        // fontFamily: 'Gill Sans',
        textAlign: 'center',
        color: '#ffffff',
    },
    Menu_Center_Black: {
        fontSize: moderateScale(8),
        // fontFamily: 'Gill Sans',
        textAlign: 'center',
        color: Colors.black,
    },
    /// 
    Title_Left_Black: {
        fontSize: moderateScale(18),
        // fontFamily: 'Gill Sans',
        textAlign: 'left',
        color: Colors.black,
    },
    Title_Left_Red: {
        fontSize: moderateScale(18),
        // fontFamily: 'Gill Sans',
        textAlign: 'center',
        color: Colors.red,
    },
    Title_Center_Black: {
        fontSize: moderateScale(18),
        // fontFamily: 'Gill Sans',
        textAlign: 'center',
        color: 'black',
    },
    Title_Center_Red: {
        fontSize: moderateScale(18),
        // fontFamily: 'Gill Sans',
        textAlign: 'center',
        color: Colors.red,
    },
    Title_Center_White: {
        fontSize: moderateScale(18),
        // fontFamily: 'Gill Sans',
        textAlign: 'center',
        color: '#ffffff',
    },
    Title_Right_White: {
        fontSize: moderateScale(18),
        // fontFamily: 'Gill Sans',
        textAlign: 'right',
        color: '#ffffff',
    },

    Paragraph_Center_White: {
        fontSize: moderateScale(16),
        // fontFamily: 'Gill Sans',
        textAlign: 'center',
        color: Colors.whiteTwo,
    },
    Paragraph_Left_Black: {
        fontSize: moderateScale(16),
        // fontFamily: 'Gill Sans',
        textAlign: 'left',
        color: 'black',
    },
    Paragraph_Left_Grey: {
        fontSize: moderateScale(16),
        // fontFamily: 'Gill Sans',
        textAlign: 'left',
        color: Colors.grey,
    },
    Paragraph_Left_Red: {
        fontSize: moderateScale(16),
        // fontFamily: 'Gill Sans',
        textAlign: 'left',
        color: Colors.red,
    },
    Paragraph_Left_White: {
        fontSize: moderateScale(16),
        // fontFamily: 'Gill Sans',
        textAlign: 'left',
        color: '#ffffff',
    },
    Paragraph_Center_Black: {
        fontSize: moderateScale(16),
        // fontFamily: 'Gill Sans',
        textAlign: 'center',
        color: 'black',
    },
    Paragraph_Center_Grey: {
        fontSize: moderateScale(16),
        // fontFamily: 'Gill Sans',
        textAlign: 'center',
        color: Colors.grey,
    },
    Paragraph_Center_Red: {
        fontSize: moderateScale(16),
        // fontFamily: 'Gill Sans',
        textAlign: 'center',
        color: Colors.red,
    },
    Paragraph_Right_Black: {
        fontSize: moderateScale(16),
        // fontFamily: 'Gill Sans',
        textAlign: 'right',
        color: 'black',
    },

    // Tiny
    Tiny_Center_White: {
        fontSize: moderateScale(14),
        // fontFamily: 'Gill Sans',
        textAlign: 'center',
        color: Colors.whiteTwo,
    },
    Tiny_Left_Black: {
        fontSize: moderateScale(14),
        // fontFamily: 'Gill Sans',
        textAlign: 'left',
        color: 'black',
    },
    Tiny_Left_Grey: {
        fontSize: moderateScale(14),
        // fontFamily: 'Gill Sans',
        textAlign: 'left',
        color: Colors.grey,
    },
    Tiny_Left_Red: {
        fontSize: moderateScale(14),
        // fontFamily: 'Gill Sans',
        textAlign: 'left',
        color: Colors.red,
    },
    Tiny_Left_White: {
        fontSize: moderateScale(14),
        // fontFamily: 'Gill Sans',
        textAlign: 'left',
        color: '#ffffff',
    },
    Tiny_Center_Black: {
        fontSize: moderateScale(14),
        // fontFamily: 'Gill Sans',
        textAlign: 'center',
        color: 'black',
    },
    Tiny_Center_Grey: {
        fontSize: moderateScale(14),
        // fontFamily: 'Gill Sans',
        textAlign: 'center',
        color: Colors.grey,
    },
    Tiny_Center_Red: {
        fontSize: moderateScale(14),
        // fontFamily: 'Gill Sans',
        textAlign: 'center',
        color: Colors.red,
    },
    Tiny_Right_Black: {
        fontSize: moderateScale(14),
        // fontFamily: 'Gill Sans',
        textAlign: 'right',
        color: 'black',
    },
    Tiny_Right_Red: {
        fontSize: moderateScale(14),
        // fontFamily: 'Gill Sans',
        textAlign: 'right',
        color: Colors.red,
    },
    Tiny_Right_White: {
        fontSize: moderateScale(14),
        // fontFamily: 'Gill Sans',
        textAlign: 'right',
        color: Colors.whiteTwo,
    },
    

    Small_Center_Black: {
        fontSize: moderateScale(12),
        // fontFamily: 'Gill Sans',
        textAlign: 'center',
        color: Colors.black,
    },
    Small_Center_White: {
        fontSize: moderateScale(12),
        // fontFamily: 'Gill Sans',
        textAlign: 'center',
        color: Colors.whiteTwo,
    },
    Small_Center_Grey: {
        fontSize: moderateScale(12),
        // fontFamily: 'Gill Sans',
        textAlign: 'center',
        color: Colors.grey,
    },
    Small_Center_Red: {
        fontSize: moderateScale(12),
        // fontFamily: 'Gill Sans',
        textAlign: 'center',
        color: Colors.red,
    },
    Small_Left_Black: {
        fontSize: moderateScale(12),
        // fontFamily: 'Gill Sans',
        textAlign: 'left',
        color: 'black',
    },
    Small_Left_Grey: {
        fontSize: moderateScale(12),
        // fontFamily: 'Gill Sans',
        textAlign: 'left',
        color: Colors.grey,
    },
    Small_Left_Red: {
        fontSize: moderateScale(12),
        // fontFamily: 'Gill Sans',
        textAlign: 'left',
        color: Colors.red,
    },
    Small_Left_White: {
        fontSize: moderateScale(12),
        // fontFamily: 'Gill Sans',
        textAlign: 'left',
        color: '#ffffff',
    },
    Small_Right_Black: {
        fontSize: moderateScale(12),
        // fontFamily: 'Gill Sans',
        textAlign: 'right',
        color: 'black',
    },
    Small_Right_Red: {
        fontSize: moderateScale(12),
        // fontFamily: 'Gill Sans',
        textAlign: 'right',
        color: Colors.red,
    },
    VerySmall_Left_White: {
        fontSize: moderateScale(10),
        // fontFamily: 'Gill Sans',
        textAlign: 'left',
        color: Colors.whiteTwo,
    },
    VerySmall_Left_Black: {
        fontSize: moderateScale(10),
        // fontFamily: 'Gill Sans',
        textAlign: 'left',
        color: Colors.black,
    },
    VerySmall_Center_Black: {
        fontSize: moderateScale(10),
        // fontFamily: 'Gill Sans',
        textAlign: 'center',
        color: Colors.black,
    },

    TabMain_Center_Black: {
        fontSize: moderateScale(11),
        // fontFamily: 'Gill Sans',
        textAlign: 'center',
        color: Colors.black,
    },
})

export default styles