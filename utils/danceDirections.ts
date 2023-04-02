export const getRandomWordFromArray = (wordArray: string[]): string =>
	wordArray[Math.floor(Math.random() * wordArray.length)]

export const getDanceDirection = (): string => {
	const actions = [
		"Shake it",
		"Pop it",
		"Wiggle",
		"Twist it",
		"Bop it",
		"Drop it",
		"Pat it",
		"Jump",
		"Bend",
		"Snap",
		"Shimmy",
		"Stomp",
		"Shake",
		"Flick it",
		"Step",
		"Saunter",
		"Strut",
		"Retreat",
		"Wave",
		"Tiptoe",
		"Glide",
		"Hop",
		"Dip",
		"Flop",
		"Shrug it",
		"Harumph",
		"Swim",
		"Plunge",
		"Scoot",
		"Levitate",
		"Bow",
		"Jump",
		"Tiptoe",
		"Nap",
		"Ski",
		"Repent",
		"Explode",
		"Sit down",
		"Two step",
		"Preen",
		"Guffaw",
		"Slide",
	]

	const nouns = [
		"a cheese stick",
		"an octopus",
		"a cute little mouse",
		"a fidget spinner",
		"a pool noodle",
		"a wolf",
		"an eel",
		"a sea cucumber",
		"a roomba",
		"a jar of jam",
		"200 pythons",
		"all my secrets",
		"pickles",
		"a soggy mop",
		"100 years of solitude",
		"beep beep boop boop",
		"a shy robot",
		"several thousand angry bees",
		"Steve Buscemi",
		"your middle school crush",
		"a sea star",
		"a leaky bucket",
		"600 mimes",
		"Meryl Streep",
		"Mister Rogers",
		"a flock of geese",
		"a swan",
		"a hockey puck",
		"a very impressive resume",
		"a jar of soup",
		"a soothing fish tank",
		"a frustrating game",
		"a Kardashian",
		"a troll",
		"a kangaroo",
		"a mountain",
		"a brick house",
		"a baked Alaska",
		"a ballerina",
		"a steamboat",
		"a crypto bro",
	]

	const punctuation = [".", "!", "", " :)", "!!"]

	const comboAction = `${getRandomWordFromArray(
		actions
	)} like ${getRandomWordFromArray(nouns)}${getRandomWordFromArray(
		punctuation
	)}`

	return comboAction
}
