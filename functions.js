
bankAccount = 0
let deposit = 290
let withdraw =  135

function deposits() {
    return deposit + bankAccount
}

function withdrawals() {
    return deposits() - withdraw
}


function checkcurrentBalance () {
    bankAccount = withdrawals()
    return bankAccount
} 

console.log("Remaining Balance:", checkcurrentBalance())

deposits()
withdrawals()
checkcurrentBalance()

