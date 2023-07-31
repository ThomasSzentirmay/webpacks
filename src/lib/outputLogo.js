import logo from '../assets/images/mixmate-logo.png';

export function outputLogo() {
    const outputDiv = document.querySelector('.output');

    outputDiv.innerHTML = `<img src="${logo}">`;
}

class Person {
    constructor(name, age) {
        this.name = name,
        this.age = age
    }
}

const jd = new Person ('JD', 40)