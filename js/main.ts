interface baseUser {
    name: string;
    age: number;
    address: string;
};

let user: baseUser = {
    name: "John Wick",
    age: 45,
    address: "Los Angeles"
};

/*void-nál nem tér vissza a függvény semmivel
a currentUser a  baseUser interfészt valósítja meg, azaz megfelele a baseUser interface leírásának.
*/ 
function greet(currentUser: baseUser): baseUser{
    document.body.innerHTML = `Hello ${currentUser.name}.`; ///altgr+7
    return currentUser;
}

greet(user);


/*Tuple adattípus.
*/
let order : [number,number,number,string,number,string];
 order = [1,44,765,"valami",37000,"Kecskemét"]

 function showOrder(order: [number,number,number,string,number,string]): void {
    document.body.innerHTML = `Summary: orderID = ${order[0]}, productCategory = ${order[1]},
 productNumber = ${order[2]}, productName = ${order[3]}, price = ${order[4]}, destination = ${order[5]}.`;
 }

 showOrder(order);