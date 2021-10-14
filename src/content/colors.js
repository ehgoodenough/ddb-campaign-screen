export function tween(alpha, omega, progress) {
    return alpha + ((omega - alpha) * progress)
}
import rgb2hsv from "rgb-hsv"
import hsv2rgb from "hsv-rgb"

// given any color format, returns #000000 between the two colors.
export function colortween(a, b, progress) {
    const aRGB = translateColor(a).map((num) => num * 255)
    const bRGB = translateColor(b).map((num) => num * 255)
    const aHSV = rgb2hsv(...aRGB)
    const bHSV = rgb2hsv(...bRGB)
    const cHSV = [
        tween(aHSV[0], bHSV[0], progress),
        tween(aHSV[1], bHSV[1], progress),
        tween(aHSV[2], bHSV[2], progress),
    ]
    const cRGB = hsv2rgb(...cHSV)

    return "#" + cRGB.map((value) => value.toString(16)).join("")
}

// always returns an array of r, g, b, regardless of input format.
// they are not 0 to 255, but 0 to 1.
function translateColor(color) {
    if(color == undefined) {
        return undefined
    }
    // [0.6, 0.7, 0.8]
    if(color instanceof Array) {
        return color
    }
    // 0xAABBCC
    if(isNaN(color) == false) {
        color = "#" + color.toString(16) // assuming this is a hex number.
        while(color.length < 7) {
            color += "0"
        }
    }
    // // "red"
    // color = colornames(color) || color
    // "#AABBCC"
    if(color[0] == "#"
    && color.length == 7) {
        return [
            color.substring(1, 3),
            color.substring(3, 5),
            color.substring(5, 7),
        ].map((colorpart) => {
            return parseInt(colorpart, 16) / 255
        })
    }
    // "#ABC"
    if(color[0] == "#"
    && color.length == 4) {
        return [
            color[1],
            color[2],
            color[3],
        ].map((colorpart) => {
            return parseInt(colorpart, 16) / 255
        })
    }
    throw new Error("Could not parse this color", color)
}
