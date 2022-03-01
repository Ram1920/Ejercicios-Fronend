function changeText(value) {
    document.getElementById('Text').innerHTML = "Hola Silabuz";
    if(value == "Style")
    {
        document.getElementById('Text').setAttribute('style', 'color: green');
    }
}