let btn_cript = document.getElementById("criptografar");
let btn_descript = document.getElementById("descriptografar");
let btn_copy = document.getElementById("copiar");
let text_area = document.querySelector('textarea'); 

var criptografia = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
}
    
function string_to_regex(string) {
    return new RegExp(string, 'g');
}

function encrypt(message){
    for (const key of Object.keys(criptografia)) {
        var regex = string_to_regex(key);
        message = message.replace(regex, criptografia[key]);    
    }
    return message;
    
}
function descrypt (message) {
    for (const key of Object.keys(criptografia)) {
        var regex = string_to_regex(criptografia[key]);
        message = message.replace(regex, key);         
    }
    return message;
}   
function get_element (selector) {
     return document.querySelector(selector);
    
}
function criptografar () {
    let input = get_element(".text-area");
    encrypt_message = encrypt(input.value.trim());
    output_message(encrypt_message);
    cleanField(input);
    console.log("criptografado");
}

function remove_acentos(message) {
    return message.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}

function output_message(message) {
    let output = get_element(".message");
    output.innerText = message;
    console.log(message);
}

function descriptografar () {
    let input = get_element(".text-area");
    var descrypt_message = descrypt(input.value);
    output_message(descrypt_message);
    cleanField(input);
    console.log("descriptografado");
}
function onChange(event){
    var message = remove_acentos(event.target.value);
    
    event.target.value = message;
}
function copiar () {
    let output = get_element(".message");
    output.select();
    document.execCommand("copy");
}

function cleanField(field) {
    field.value = "";
}

btn_cript.addEventListener("click", criptografar);
btn_descript.addEventListener("click", descriptografar);
btn_copy.addEventListener("click", copiar);
text_area.addEventListener("input", onChange);