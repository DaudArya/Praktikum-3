function modif() {
    document.getElementById("mod").innerHTML = "dimodifikasi terakhir pada" + document.lastModified;
}

function itambah() {
    document.kirim.hasil.value = parseInt(document.kirim.text1.value) + parseInt(document.kirim.text2.value);
    modif();

}

function ikurang() {
    document.kirim.hasil.value = parseInt(document.kirim.text1.value) - parseInt(document.kirim.text2.value);
    modif();

}

function ikali() {
    document.kirim.hasil.value = parseInt(document.kirim.text1.value) * parseInt(document.kirim.text2.value);
    modif();

}

function ibagi() {
    document.kirim.hasil.value = parseInt(document.kirim.text1.value) / parseInt(document.kirim.text2.value);
    modif();

}