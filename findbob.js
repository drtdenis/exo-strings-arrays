let str =
  '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '

str = str.trim()
str = str.toLowerCase()

if (str.included('bob')) {

} else {
  console.log('bob n\'est pas là')
}