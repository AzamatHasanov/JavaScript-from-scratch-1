function calcodnum() {
    const deyer1 = parseInt(document.getElementById('number1').value)
    const cavab = (deyer1 % 2 === 0) ? "Cut" : "tek"
    const tamcvb = document.getElementById('result1').textContent = cavab
    if (isNaN(deyer1)) {
        alert('Deyer daxil edin')
    }
}

function calculateSum() {
    const num = parseInt(document.getElementById('number2').value)
    const sum = parseInt(document.getElementById('number3').value)
    if (isNaN(num) || isNaN(sum)) {
        alert('Deyer daxil edin')
    } else {
        const cavab = num + sum
        document.getElementById('result2').textContent = cavab
    }

}