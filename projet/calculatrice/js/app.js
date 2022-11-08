var OperationCalcul = "";

const mesBoutons = document.querySelectorAll('.number');

const clearButton = document.querySelector('.clear');

const screen = document.querySelector('.screen');

const numberButtons = document.querySelectorAll('.number');

const operationButtons = document.querySelectorAll('.operator');

const equalsButton = document.querySelector('.equal');

//----------------------------------------------------------------------------------------//

function appendNumber(number) {

    screen.innerText = screen.innerText.toString() + number.innerText;

};

function clear() {

    screen.innerText='';

    OperationCalcul = "";

};

function chooseOperation(operation) {

    if( screen.innerText.includes('x') || 
        screen.innerText.includes('+') || 
        screen.innerText.includes('%') || 
        screen.innerText.includes('÷') || 
        screen.innerText.includes('-')  ) 

        calcul();

    OperationCalcul = operation;

    screen.innerText = screen.innerText.toString() + ' ' + operation + ' ';

};

function calcul() {

    if(screen.innerText === '') return

    let split = screen.innerHTML.split(OperationCalcul)

    let nombre1 = parseFloat(split[0])

    let nombre2 = parseFloat(split[1])


    if (isNaN(nombre1) || isNaN(nombre2)) return

    console.log(nombre1)

    console.log(nombre2)

    console.log(OperationCalcul)

    let moncalcul;

    switch (OperationCalcul) {

        case '+':

            moncalcul =  nombre1 + nombre2 

            break

        case '-':

            moncalcul =  nombre1 - nombre2 

            break

        case 'x':

            moncalcul =  nombre1 * nombre2

            break

        case '÷':

            moncalcul =  nombre1 / nombre2

            break

        default:

            return

    }

    screen.innerText.innerText = moncalcul

    OperationCalcul = undefined

    console.info(moncalcul)

    screen.innerText = moncalcul

}

//----------------------------------------------------------------------------------------//

clearButton.addEventListener('click', ()=> {

    console.info('effacer')

    clear()

})

console.log(numberButtons)

numberButtons.forEach(button => {

    button.addEventListener('click', () => {

        console.info(button.innerText)

        appendNumber(button)

    })

})

operationButtons.forEach(button => {

    button.addEventListener('click', () => {

        chooseOperation(button.innerText)

    })

})

equalsButton.addEventListener('click', button => {

    calcul()

})

