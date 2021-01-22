const fs = require('fs');

const dir = './src/assets/';
const dataFilePath = './src/data.js';

const getDate = fileName => {
	const rawDate = fileName.split('_')[0];
	const year = rawDate.slice(0, 4);
	const month = rawDate.slice(4, 6);
	const day = rawDate.slice(-2);

	return `${day}/${month}/${year}`;
};

fs.readdir(dir, (err, files) => {
	const data = files.map(file => ({ src: file, id: file, alt: file, date: getDate(file) }));
	console.log(data);
	fs.writeFile(
		dataFilePath,
		`export const images = [${data.map(
			({ src, alt, id, date }) => `{ src: '${src}', alt:'${alt}', id:'${id}', date: '${date}'}`
		)}];`,
		null,
		err => {
			console.log(err);
		}
	);
});

getDate('20190813_211802');
