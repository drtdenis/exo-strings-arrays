//si dans le texte suivant le mot Javascript est présent:
//JS, ECMAScript, esm6 peuvent être considérés comme des alias de Javascript 


let texte = 'JS, ECMAScript, esm6 peuvent être considérés comme des alias de Javascript'
let mot = 'Javascript'

if (texte.includes(mot)) {
  console.log(`il y a le mot ${mot}`)
} else {
  console.log(`il n'y a pas le mot ${mot} `)
}
