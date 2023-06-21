const buttonConvert = document.getElementById('result');
const buttonReset = document.getElementById('reset');

buttonConvert.addEventListener('click', () => {
    // Memanggil input dan inputOption dari element menggunakan ID HTML
    const input = parseFloat(document.getElementById('input').value);
    const inputOption = document.getElementById('input-option').value;

    // Memanggil output dan outputOption dari element menggunakan ID HTML
    const output = document.getElementById('output');
    const outputOption = document.getElementById('output-option').value;

    // Beri tahu user jika inputOption sama dengan outputOption
    if (inputOption === outputOption) {
        alert(`Input dan Output Option tidak boleh sama!`);
        // return;
    }

    // Dapatkan hasil dari kalkulasi
    let result = tempConverter(input, inputOption, outputOption).toFixed(2);

    // Pindahkan hasil kalkulasi ke dalam element HTML melalui ID output
    output.value = result;

    // Mengubah isi element dengan ID howto sesuai dengan rumus konversi yang digunakan
    let formula = getConvertionFormula(input, inputOption, outputOption);
    document.getElementById('howto').innerHTML = formula;
})

buttonReset.addEventListener('click', () => {

    // Lakukan reset ke value awal atau semula
    output.value = 32;
    document.getElementById('input').value = 0;
    document.getElementById('howto').innerHTML = `(0&deg;C &times; 9/5) + 32 = 32&deg;F`;
});

// Kalkulasi Celsius ke Fahrenheit

const cToF = (cel => {
    let fahrenheit = (cel * 9/5) + 32;
    return fahrenheit;
});

// Kalkulasi Fahrenheit ke Celsius

const fToC = (fah => {
    let celsius = (fah - 32) * 5/9;
    return celsius;
});

// Function yang berfungsi melakukan kalkulasi pada suhu

const tempConverter = (input, inputOption, outputOption) => {
    let result

    switch (inputOption) {
        case 'Celsius':

        switch (outputOption) {
            case 'Fahrenheit':
                result = cToF(input)
                break;

            default:
                result = `error`
                break;
        }            
            break;

        case 'Fahrenheit':
        switch (outputOption) {
            case 'Celsius':
                result = fToC(input);
               break;

            default:
                result = "error"
                break;
        };
            break;

        default:
            break;
    }
    return result;
}

// Function untuk mendapatkan rumus konversi

const getConvertionFormula = (input, inputOption, outputOption) => {
    let formula = ""
    let result 

    if (inputOption == 'Celsius' && outputOption == 'Fahrenheit') {
        result = cToF(input)
    } else if (inputOption == 'Fahrenheit' && outputOption == 'Celsius') {
        result = fToC(input)
    }

    switch (inputOption) {
        case 'Celsius':
            switch (outputOption) {
                case 'Fahrenheit':
                    formula = `(${input}&deg;C &times; 9/5) + 32 = ${result}&deg;F`
                    break;
            
                default:
                    formula = 'error'
                    break;
            }
            
            break;
        case 'Fahrenheit':
            switch (outputOption) {
                case 'Celsius':
                    formula = `(${input}-32)&deg;F &times; 5/9 = ${result}&deg;C`
                    
                    break;
            
                default:
                    formula = 'error'
                    break;
            }    
        default:
            break;
    }
    return formula;
}