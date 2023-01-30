let evenArray = []

for (i = 2; i < 101; i++) {
    if (i%2 == 0) {
        evenArray.push(i)
    }
}

document.getElementById('nambari').innerHTML = evenArray.join(', ')