let name = 'Jonathan'
let age = 100

function parseThroughMyString(strings, nameExp, ageExp) {
  console.log(strings)
  let oldOrYoung
  if (ageExp > 99) {
    oldOrYoung = 'centenarian'
  } else {
    oldOrYoung = 'youngster'
  }
  return `${nameExp}${strings[1]}${oldOrYoung}`
}

console.log(parseThroughMyString`${name} is a ${age}`)

