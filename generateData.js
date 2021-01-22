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
	const imports = files.map(file => `import img${file.slice(0, -4)} from './assets/${file}';`);
	const exportArray = files.map(file => ({
		src: `img${file.slice(0, -4)}`,
		id: file,
		alt: getDate(file),
		date: getDate(file),
	}));

	fs.writeFile(
		dataFilePath,
		`${imports.join('\n')}
		export const imageData = [${exportArray.map(
			({ src, alt, id, date }) => `{ src: ${src}, alt:'${alt}', id:'${id}', date: '${date}'}`
		)}];`,
		null,
		err => {
			console.log(err);
		}
	);
});
