// HTML'de <input id="password"> öğesi ile ilişkilendirilmiş bir password kutusu alınır.
const passwordBox = document.getElementById("password");

// Oluşturulacak şifrenin uzunluğu belirlenir.
const length = 12;

// Şifrede kullanılacak karakter grupları tanımlanır.
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "123456789";
const symbol = "@#$%^&*()_+~|{}[]></-=";

// Tüm karakter grupları birleştirilerek şifre oluşturulacak karakter kümesi oluşturulur.
const allChars = upperCase + lowerCase + number + symbol;

// Şifre oluşturan fonksiyon
function createPassword(){
    // Her bir karakter grubundan rastgele bir karakter seçilerek şifre oluşturulmaya başlanır.
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    // Belirlenen uzunluğa ulaşana kadar tüm karakter grubundan rastgele karakterler eklenir.
    while(length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    
    // Oluşturulan şifre, HTML'deki ilgili input kutusuna atanır.
    passwordBox.value = password;
}

// Oluşturulan şifreyi panoya kopyalamak için kullanılan fonksiyon
function copyPassword() {
    // Oluşturulan şifre alınır.
    const copy = passwordBox.value;
    
    // Kopyalanan şifre panoya yazılır.
    navigator.clipboard.writeText(copy);
}
