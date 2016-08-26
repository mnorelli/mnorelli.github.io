var val = process.argv[2];

m11 = (Math.sin (val * Math.PI / 180)).toFixed(3)
m12 = (Math.cos (val * Math.PI / 180)).toFixed(3)
m21 = (Math.cos (val * Math.PI/ 180)).toFixed(3)
m22 = (Math.sin (val * Math.PI / 180)).toFixed(3)

console.log('filter: progid:DXImageTransform.Microsoft.Matrix(M11='+m11+', M12='+m12+', M21='+m21+', M22='+m22+', SizingMethod="auto expand");')