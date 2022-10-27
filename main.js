const user1 ={ name: 'Cristhian', id:'5', mybooks: []}
const user2 ={name:'Nelson', id:'7', mybooks: []}


const books1 ={tittle: 'Harry Potter y la Piedra Filosofal', author: 'J. K Rowling', isbn:'978-84-18174-07-0', category: 'Fantasy'}
const books2 ={tittle: 'El Principito', author: 'Anthony de Saint Exuperry', isbn:'978-84-9838-149-8', category: 'Classic Literature'}


user1.mybooks.push=[books2]
user2.mybooks.push=[books1]

console.log(user1)
//console.log(user2)

const library =[]
library.push =[user1, user2]
console.log(library)

const books3 ={tittle: 'Don Quijote', author: 'Miguel de Cervantes Saavedra', isbn:'978-84-316-7396-3', category: 'clasicc Literature'}

user2.mybooks.push=[books3,books1]
console.log(user2)
