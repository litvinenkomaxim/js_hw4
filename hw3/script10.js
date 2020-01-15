let obj = {
	tagName: 'img',
	attr: {
		src: 'https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
		alt: "",
		style: {
			border: {
				borderWidth: '1px',
				borderStyle: 'solid',
				borderColor: '#ccc',
			},
			width: 200,
		}
	}
}
console.log(obj);

let json = JSON.stringify(obj);
console.log(obj);
console.log(json);

let back = JSON.parse(json);
console.log(back);