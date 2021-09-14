const comment = [];

document.querySelector('.btn').onclick = () => {
    let value = document.querySelector('.inp').value;
    comment.push(value);
}

function draw() {
    let out = '';
    for (let i = 0; i < comment.length; i++) {
        out += `<li>${comment[i]}</li>`;
    }
    document.querySelector('ul').innerHTML = out;
}