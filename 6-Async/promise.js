
console.log('before')

getUser(10)
   .then((user) => {
       console.log(user)
      return getProducts(user.id)
   })
   .then(products => console.log(products))
   .catch((err) => console.warn(err))

console.log('between')
console.log('after')

function getUser(id) {

    return new Promise((resolve, reject) => {
        let status = true;
        setTimeout(() => {
            console.log('retreive data from database')

            if(status) {

                return resolve({ id: id, name: "Samar AYADI" })
            }else {
                return reject("user not found !!")
            }
        }
            , 2000)
    })

}
function getProducts(userId) {

    return new Promise((resolve, reject) => {
        let status = true;
        setTimeout(() => {
            console.log('retreive products from database')

            if(status) {

                return resolve(['p1', 'p2', 'p3'])
            }else {
                return reject("products not found !!")
            }
        }
            , 2000)
    })

}


// let p = new Promise((resolve, reject) => {

//     let status = false;

//     if(status) {
//         resolve("ok")
//     }else {
//         reject("ko")
//     }

// })

// p
//  .then(res => console.log(res))
//  .catch(err => console.error(err))