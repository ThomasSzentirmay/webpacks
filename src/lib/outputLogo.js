import logo from '../assets/images/mixmate-logo.png';

export function outputLogo() {
    const outputDiv = document.querySelector('output');

    outputDiv.innerHTML = `<img src="logo">`;
}