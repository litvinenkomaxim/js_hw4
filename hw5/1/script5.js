var country = {
  name: 'Ukraine',
  language: 'ukrainian',
  capital: {
    name: 'Kyiv',
    population: 2907817,
    area: 847.66
  }
};

function format(start, end) {
  console.log(start + this.name + end);
}

format.call(country, '', ''); // Ukraine
format.apply(country, ['[', ']']); // [Ukraine]
format.call(country.capital, '', ''); // Kyiv
format.apply(country.capital, ['', '']); // Kyiv
format.apply('', ['', '']); // undefined