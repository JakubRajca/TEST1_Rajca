const form = document.getElementById('myForm');
const resultParagraph = document.getElementById('result');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const firstName = form.firstname.value;
    const city = form.city.value;

    if (!firstName || !city) {
        resultParagraph.textContent = 'Please fill out all fields.';
        return;
    }

    if (firstName.length > 21||firstName.length > 21){
        resultParagraph.textContent = 'Your name or name of your city is too long, the maximum length is 21';
        return;
    }
    // Funkce mi kontroluje, zda jméno či město obsahuje daný character
    const specialCharRegex = /[^a-zA-Z\sáéíóúůýčšřÁÉÍÓÚŮÝČŠŘĚěžŽŤťďĎčČ]/;
    if (specialCharRegex.test(firstName) || specialCharRegex.test(city)) {
        resultParagraph.textContent = 'Special characters are not allowed.';
    return;
    }

    // Funkce pro spočítání samohlásek a souhlásek
    function countVowelsAndConsonants(str) {
        const vowels = 'aeiouyáéíóúůýAEIOUYÁÉÍÓÚŮÝ';
        let vowelCount = 0;
        let consonantCount = 0;

        for (let i = 0; i < str.length; i++) {
            if (vowels.includes(str[i])) {
                vowelCount++;
            } else {
                consonantCount++;
            }
        }

        return { vowelCount, consonantCount };
    }

    // Spočítáme samohlásky a souhlásky pro jméno a město
    const firstNameCounts = countVowelsAndConsonants(firstName);
    const cityCounts = countVowelsAndConsonants(city);

    // Sestavíme výslednou větu
    const result = `Welcome (${firstName}) from (${city}). There are ${firstNameCounts.vowelCount} vowels in your first name and ${firstNameCounts.consonantCount} consonants in your first name and there are ${cityCounts.vowelCount} vowels in your city and ${cityCounts.consonantCount} consonants in your city.`;

    resultParagraph.textContent = result;
});