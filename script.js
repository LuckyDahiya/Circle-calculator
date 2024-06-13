function calculate() {
    const diameter = document.getElementById('diameter').value;
    if (diameter <= 0) {
        alert('Please enter a valid diameter greater than 0');
        return;
    }

    const radius = diameter / 2;
    const area = Math.PI * radius * radius;
    const circumference = Math.PI * diameter;

    document.getElementById('result').innerHTML = `
        <p>Area: ${area.toFixed(2)}</p>
        <p>Circumference: ${circumference.toFixed(2)}</p>
    `;
}
