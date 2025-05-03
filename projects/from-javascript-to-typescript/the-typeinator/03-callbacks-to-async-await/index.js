// Put your checkEmotion and speak functions here! ✨
// See ./original.js for their older JavaScript code.

function checkEmotion(knownEmotions, emotion) {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(knownEmotions.has(emotion));
		}, 1000);
	});
}

async function speak(knownEmotions, newEmotion, phrase) {
	const hasEmotion = await checkEmotion(knownEmotions, newEmotion);

	if (!hasEmotion) {
		throw new Error(`Does not compute. I do not understand ${newEmotion}.`);
	}

	return `"${phrase}" (${newEmotion})`;
}

module.exports.checkEmotion = checkEmotion;
module.exports.speak = speak;
