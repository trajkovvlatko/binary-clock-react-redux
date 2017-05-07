function convert(state, action) {
  switch (action.type) {
    case 'TICK':
      let digital = getTime()
      let binary = getBinaryTime(digital.replace(/:/g, ""))
      return {digital: digital, binary: binary}
    default:
      return state
  }
}

function getTime() {
  let date = new Date()

  let h = date.getHours().toString()
  if (h.length === 1)
    h = "0" + h

  let m = date.getMinutes().toString()
  if (m.length === 1)
    m = "0" + m

  let s = date.getSeconds().toString()
  if (s.length === 1)
    s = "0" + s

  return h + ":" + m + ":" + s
}

function getBinaryTime(time) {
  let binary = []
  for (let i = 0; i < time.length; i++) {
    let converted = decToBin(time[i])
    binary.push(converted)
  }
  return binary;
}

function decToBin(dec){
  let converted = (dec >>> 0).toString(2)
  let padded = padLeft("0000", converted)
  return padded
}

function padLeft(pad, str) {
  return (pad + str).slice(-pad.length)
}

export default convert
