//Ecrivez un programme qui remplace toutes les occurrences Alice par votre propre prénom dans le texte suivant.

//In cryptography, Alice and Bob are fictional characters commonly used as placeholders in discussions about cryptographic protocols or systems.
//As the use of Alice and Bob became more widespread, additional characters were added, sometimes each with a particular meaning.
//The most common characters are Alice and Bob.Eve, Mallory, and Trent are also common names.

let texte = "In cryptography, Alice and Bob are fictional characters commonly used as placeholders in discussions about cryptographic protocols or systems.\
As the use of Alice and Bob became more widespread, additional characters were added, sometimes each with a particular meaning.\
The most common characters are Alice and Bob. Eve, Mallory, and Trent are also common names."

const nouveautexte = texte.replace("Alice", "Denis")

console.log(nouveautexte)