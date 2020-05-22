function isArithmatic(arr) {
  let prevDiff
  for (let i = 0; i < arr.length; i++) {
    let diff = arr[i + 1] - arr[i]
  }

  return true
}

function ArithGeo(arr) {
  // code goes here
  console.log(isArithmatic(arr))

  if (isArithmatic(arr)) {
    return 'Arithmetic'
  } else {
    return -1
  }
}

// keep this function call here
console.log(ArithGeo(readline()))
