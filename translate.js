//Ecrivez d'une maniere différente ce programme:

let str =
  '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '

str
  str = str.trim()
  str = str.toUpperCase()
  str= str.split(' ')
  str = str.forEach((elem) => console.log(`mot: ${elem}`))