import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, SIZES, FONTS } from "../constants"
const Button = (props) => {
    const filledBgColor = props.color || COLORS.primary;
    const outlinedBgColor = COLORS.white;
    const bgColor = props.filled ? filledBgColor : outlinedBgColor;
  return (
     <TouchableOpacity
       style={{
         ...styles.btn,
         ...{ backgroundColor: bgColor },
         ...props.style
       }}
       onPress={props.onPress}>
        <Text style={{ ...FONTS.body3, ...{ color: props.textColor } }}>
                    {props.title}
        </Text>
     </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    btn: {
        paddingHorizontal: SIZES.padding,
        height: 48,
        borderColor: COLORS.primary,
        borderWidth: 2,
        borderRadius: SIZES.padding,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default Button