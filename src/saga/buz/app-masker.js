export function getMaskPass(pass) {
    var mask = ''
    for(var i=0; i<pass.length; i++) {
        mask = mask + '*'
    }
    return mask
}