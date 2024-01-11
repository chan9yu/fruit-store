const FRUITS = [
	'🍎', //
	'🍌',
	'🍇',
	'🍉',
	'🍓',
	'🍑',
	'🍍',
	'🥭',
	'🍈'
] as const;

export const roll = () => {
	const randomIndex = Math.floor(Math.random() * FRUITS.length);
	const randomFruit = FRUITS[randomIndex];

	return randomFruit;
};

export const rollArray = (count: number = 1) => {
	const result = [];

	for (let i = 0; i < count; i++) {
		const randomFruit = roll();
		result.push(randomFruit);
	}

	return result;
};
