//1. a b və c ədədləri verilir. a və b ədədlərindən hansının c ədədinə daha yaxın olduğunu tapmağınız tələb olunur.
// let a=-11
// let b=-22
// let c=13

// if(c-a>c-b){
//     console.log("b ededi c ededine daha yaxindir")
// }
// else if(c-a<c-b){
//     console.log("a ededi c ededine daha yaxindir")
// }


//2. x adında dəyişən təyin edin. bu dəyişənə istənilən tipdə data təyin edilə bilər.Sizdən tələb olununan daxil
//  edilən dəyərin növünü tapmaq və ona uyğun ekrana mesaj yazdırmaqdır. (Nümunə: Daxil etdiyini dəyər rəqəmdir)
let x
x=5
if(typeof(x)=="number"){
    console.log("daxil edilen deyer reqemdir")
}
else if(typeof(x)=="string"){
    console.log("daxil edilen deyer metndir")
}
else if(typeof(x)=="boolean"){
    console.log("daxil edilen deyer booleandir")
}
else if(typeof(x)=="undefined"){
    console.log("daxil edilen deyer bosdur")
}