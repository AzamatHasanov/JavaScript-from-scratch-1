//1.  İki ədədi cəmlə

function sum(a, b) {
    return a + b;
}

document.write("1. The sum of two numbers: " + sum(3, 5) + "<br><br>");

//2. Ədədi kvadrata vur

function eded(num) {
    return num * num;
}

document.write("2. Square the number: " + eded(4) + "<br><br>");

//3. String uzunluğunu tap

function soz(str) {
    return str.length;
}

document.write(
    "3.Find the length of the string: " + soz("JavaScript") + "<br><br>"
);

//4.  Array uzunluğunu tap
function ar(rray) {
    return rray.length;
}
document.write(
    "4. Find the length of the array: " + ar([22, 3, 1, 3, 3]) + "<br><br>"
);

//5.  İki stringi birləşdir

function strm(sr1, sr2) {
    return sr1 + sr2;
}

document.write(
    "5. Concatenate the two strings: " + strm("Hello ", "World") + "<br><br>"
);
//6. Minimum tap
// ------------------------------------------------------------------------------------------------------
// return a < b ? a : b;:
// Bu hissədə JavaScript-in şərtli operatoru (? :) istifadə olunur.
// Şərtli operator, müəyyən bir şərtə əsaslanaraq iki mümkün dəyərdən birini seçir.
function min(a, b) {
    return a < b ? a : b;
}

document.write("6. Find the minimum: " + min(10, 6) + "<br><br>");
// 6 step 2 Maks tap
// function findMaximum(a, b) {
//     return a > b ? a : b;
// }
// console.log(findMaximum(10, 15));

// ------------------------------------------------------------------------------------------------------
// 7. Array-da maksimum tap

function findMaxInArray(arrr) {
    return Math.max(...arrr);
}

document.write(
    "7.Find the maximum in an Array: " +
    findMaxInArray([3, 7, 2, 9, 5]) +
    "<br><br>"
);

// ------------------------------------------------------------------------------------------------------

// 8.Ədədi tərsinə çevir
// 1. 12345.toString(): 12345 ədədini stringə çevirir: "12345".
// 2."12345".split(''): "12345" stringini array-ə çevirir: ['1', '2', '3', '4', '5'].
// 3. ['1', '2', '3', '4', '5'].reverse(): Array-i tərsinə çevirir: ['5', '4', '3', '2', '1'].
// 4. ['5', '4', '3', '2', '1'].join(''): Array-i birləşdirərək string halına gətirir: "54321".
// 5.parseInt("54321"): Stringi ədədə çevirir: 54321.

function reverseNumber(numss) {
    return parseInt(numss.toString().split("").reverse().join(""));
}
document.write(
    "8. Ədədi tərsinə çevir: " + reverseNumber(1234567) + "<br><br>"
);

// ------------------------------------------------------------------------------------------------------
// 9.String-i tərsinə çevir
function reverseString(strma) {
    return strma.split("").reverse().join("");
}
document.write(
    "9.String-i tərsinə çevir: " + reverseString("JAvascript") + "<br><br>"
);

// 10. Verilən ədədin cüt və ya tək olduğunu tap
// num % 2 === 0 ifadəsi bir ədədin cüt olub olmadığını yoxlamaq üçün istifadə olunur. Əgər bu şərt doğru olarsa, ədəd cütdür; əgər yanlış olarsa, ədəd təkdir.

function oddNum(odds) {
    return odds % 2 == 1;
}
document.write(
    "10. Verilən ədədin cüt və ya tək olduğunu tap : " + oddNum(161) + "<br><br>"
);

// 11. Verilən array-dan tək ədədləri tap
// arr.filter(...): filter metodu JavaScript-in array metodudur. Bu metod array-in hər bir elementini yoxlayır
// və şərtə uyğun olanları seçib yeni bir array yaradır.

function findOddNumbers(oddslar) {
    return oddslar.filter((num) => num % 2 !== 0);
}

document.write(
    "11. Find the odd numbers from the given array: " +
    findOddNumbers([22, 11, 442, 1, 12, 121, 231, 31, 2323, 2]) +
    "<br><br>"
);

// 12.Verilən array-dan cüt ədədləri tap

function findEvenNumbers(arrm) {
    return arrm.filter((num) => num % 2 === 0);
}

document.write(
    "12.Find the even numbers from the given array: " +
    findEvenNumbers([1, 2, 3, 4, 5]) +
    " <br> <br>"
);

// 13.Find the sum of the numbers in the array

// arr.reduce((total, num) => total + num, 0);:
// reduce metodu: JavaScript-in array metodudur. Bu metod array-in hər bir elementini bir dəyərə toplamaq üçün istifadə olunur.
// (total, num) => total + num: Bu, reduce metodunun callback (dönüş) funksiyasıdır. Bu funksiya iki parametr qəbul edir: total və num.
// total: Reduce metodunun hər bir addımda saxladığı yığılmış nəticədir. İlk addımda bu, 0-a bərabər olur (reduce metodunun ikinci parametrində müəyyən edilir).
// num: Array-in cari elementi.
// total + num: Cari elementi (num) yığılmış nəticəyə (total) əlavə edir.
// 0: Reduce metoduna başlanğıc dəyəri kimi verilir. Bu, total dəyişəninin ilk dəyəri olaraq 0 istifadə olunur.

function recdu(rec) {
    return rec.reduce((total, num) => total + num, 0);
}

document.write(
    "13.Find the sum of the numbers in the array: " +
    recdu([12, 13, 12]) +
    " <br> <br>"
);

// 14.Array-dakı ədədlərin hasilini tap
// burada 1 den baslamalidir deyer
function hasil(has) {
    return has.reduce((product, num) => product * num, 1);
}

document.write(
    "14. Find the product of the numbers in the array: " +
    hasil([12, 3]) +
    " <br> <br>"
);

// 15. Array - da müəyyən ədədin olub - olmadığını tap
// true qaytarsa demekki 4 reqem var false qaytarsa demekki yoxdur
function searchAr(sear, target) {
    return sear.includes(target);
}

document.write(
    "15. Array-da müəyyən ədədin olub-olmadığını tap: " +
    searchAr([12, 44, 12, 12, 1, 13, 4], 4)
);

// 16.Ədədlərin böyükdən kiçiyə sıralanması

// arr.sort((a, b) => b - a);
// sort metodu, array - in elementlərini sıralamaq üçün istifadə olunur.
// sort metoduna bir funksiyonu(callback) parametr olaraq veririksə, bu funksiya
//  sıralamanın qaydasını müəyyən edir.Bu funksiyaya "comparator function"
// deyilir.

function sorttem(temsr) {
    return temsr.sort((a, b) => b - a);
}
document.write('16. Ədədlərin böyükdən kiçiyə sıralanması: ')