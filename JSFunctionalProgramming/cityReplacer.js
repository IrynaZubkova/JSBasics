const csvText = `
48.30,32.16,Кропивницький,200000,
44.38,34.33,Алушта,31440,
49.46,30.17,Біла Церква,200131,
49.54,28.49,Бердичів,87575,
# коментар
46.49,36.58,#Бердянськ,121692,
49.15,28.41,Вінниця,356665,
#45.40,34.29,Джанкой,43343,
`;

const inputText = "Я хочу поїхати в Бердянськ";


const csvLines = csvText.split('\n')
    .filter(line => line.trim() !== '' && !line.trim().startsWith('#'));

const cities = csvLines.map(line => {
    const [x, y, name, population] = line.split(',');
    const cityName = name.trim().replace(/^#/, ''); 
    return {
        x: parseFloat(x.trim()),
        y: parseFloat(y.trim()),
        name: cityName,
        population: parseInt(population.trim())
    };
});

cities.sort((a, b) => b.population - a.population);

const top10Cities = cities.slice(0, 10);

const formatCityInfo = (text) => {
    return () => {
        const foundCity = top10Cities.find(city => text.includes(city.name));
        if (foundCity) {
            const rank = top10Cities.findIndex(city => city.name === foundCity.name) + 1;
            return `${text} (${rank} місце в ТОП-10 найбільших міст України, населення ${foundCity.population} людей)`;
        } else {
            return `${text} (не знайдено серед ТОП-10 міст)`;
        }
    };
};

const formatCityText = formatCityInfo(inputText);

console.log(formatCityText());
