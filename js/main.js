let id, nameClient, lastName, address, priceNoDiscount, modelSelected;
const DESCUENTO_FIESTA = 0.05;
const DESCUENTO_FOCUS = 0.1;
let price = document.getElementById('precio');
let model = document.getElementById('modelo');
let buttonCotizar = document.getElementById('boton')


model.addEventListener('change', () => {
    modelSelected = model.value;
});

buttonCotizar.addEventListener('click', () => {
    nameClient = document.getElementById('nombre').value;
    lastName = document.getElementById('apellido').value;
    address = document.getElementById('direccion').value;
    id = document.getElementById('cedula').value;
    price.addEventListener('input', () => {
        priceNoDiscount = price.value;
    })
    generarCotizacion();
    limpiar();
})

let printName = document.getElementById('print-nombre');
let printModel = document.getElementById('print-modelo');
let printPrice = document.getElementById('print-precio');
let printPercentage = document.getElementById('print-porcentaje');
let printDiscount = document.getElementById('print-descuento');



const generarCotizacion = () => {
    console.log(modelSelected);
    priceNoDiscount = price.value;
    let priceDiscount = 0;

    switch (modelSelected) {
        case 'fiesta':
            // photo = './assets/fiesta.jpg';
            printName.innerHTML = (`${nameClient} ${lastName}`)
            printModel.innerHTML = (`Ford Fiesta`);
            priceDiscount = priceNoDiscount / (1 + DESCUENTO_FIESTA)
            printPrice.innerHTML = `${priceNoDiscount}`
            printPercentage.innerHTML = (`${Math.round(DESCUENTO_FIESTA * 100)} %`)
            printDiscount.innerHTML = (`${priceDiscount.toFixed(2)}`)
            break;
        case 'focus':
            printName.innerHTML = (`${nameClient} ${lastName}`)
            printModel.innerHTML = (`Ford Focus`);
            priceDiscount = priceNoDiscount / (1 + DESCUENTO_FOCUS)
            printPrice.innerHTML = `${priceNoDiscount}`
            printPercentage.innerHTML = (`${Math.round(DESCUENTO_FOCUS * 100)} %`)
            printDiscount.innerHTML = (`${priceDiscount.toFixed(2)}`)
            break;
    }


}

const limpiar = ()=>{
    id = document.getElementById('cedula').value = "";
    nameClient = document.getElementById('nombre').value = "";
    lastName = document.getElementById('apellido').value = "";
    address = document.getElementById('direccion').value = "";
    model.value = 'escoja';
    price.value = "";

}



let reset = document.getElementById('limpiar');

// reset.addEventListener('click',()=>{
//     limpiar();
// })
