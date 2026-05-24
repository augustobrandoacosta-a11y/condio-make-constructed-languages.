let lexicon = JSON.parse(localStorage.getItem('condio_data')) || [];

function addWord() {
    const word = document.getElementById('conword').value;
    const def = document.getElementById('def').value;
    if(word && def) {
        lexicon.push({word, def});
        localStorage.setItem('condio_data', JSON.stringify(lexicon));
        updateTable();
    }
}

function updateTable() {
    const tbody = document.querySelector('#lexTable tbody');
    tbody.innerHTML = lexicon.map(item => `<tr><td>${item.word}</td><td>${item.def}</td></tr>`).join('');
}

updateTable();
