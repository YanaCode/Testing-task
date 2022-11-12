let askNumber = prompt("Какое ваше любимое число?");
if (askNumber > 7) {
    alert("Привет");
}
let askName = prompt("Как вас зовут?")
 if (askName === "Вячеслав") {
    alert("Привет, Вячеслав!");
 } else {
    alert("Нет такого имени!")
 }

 var multiplicity = function (arr) {
   var newArr = [],
       length = arr.length;
   for (var i = 0; i < length; i++) {
       if (arr[i] != 0 && (arr[i] % 3 == 0 )) {
           newArr.push(arr[i]);
       }
   }
   return newArr;
};