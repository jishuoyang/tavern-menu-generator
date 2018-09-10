const PRICING = { premium: 3, expensive: 2, average: 1, cheap: 0 };
const VARIETY = { drink: { poor: 4, average: 7, good: 11 }, food: { poor: 10, average: 12, good: 14 } };
const SPECIALITY = { coastal: "coastal", northern: "northern", southern: "southern"};
const FAERUN_MENU = {
	food: [
		{ name: "Beef in ginger and cinnamon", price: 3, increment: 1, variability: 3, unit: "sp", category: [PRICING.expensive] },
		{ name: "Roasted and smoked pork spareribs", price: 3, increment: 1, variability: 3, unit: "sp", category: [PRICING.expensive] },
		{ name: "Roast goose strewn with caraway seeds", price: 3, increment: 1, variability: 3, unit: "sp", category: [PRICING.expensive] },
		{ name: "Roast stuffed leg of lamb with mint sauce", price: 3, increment: 1, variability: 3, unit: "sp", category: [PRICING.expensive] },
		{ name: "Honey glazed carrots and parsnips", price: 1, increment: 1, variability: 3, unit: "sp", category: [PRICING.expensive] },
		{ name: "Breaded breast of chicken, whiskey and mushroom sauce", price: 3, increment: 1, variability: 3, unit: "sp", category: [PRICING.expensive] },
		{ name: "Chicken liver pate and bread", price: 2, increment: 1, variability: 3, unit: "sp", category: [PRICING.expensive] },
		{ name: "Stuffed mushrooms with thyme and cream cheese", price: 2, increment: 1, variability: 2, unit: "sp", category: [PRICING.expensive] },
		{ name: "Sword Coast spiced potatoes", price: 5, increment: 1, variability: 4, unit: "cp", category: [PRICING.expensive] },
		{ name: "Garlic and basil leg of lamb", price: 3, increment: 1, variability: 4, unit: "sp", category: [PRICING.expensive] },
		{ name: "Spiced pork loin", price: 3, increment: 1, variability: 3, unit: "sp", category: [PRICING.expensive] },
		{ name: "Oxtail in ginger and cinnamon", price: 2, increment: 1, variability: 3, unit: "sp", category: [PRICING.expensive] },
		{ name: "Grilled fillet of salmon", price: 3, increment: 1, variability: 3, unit: "sp", category: [PRICING.expensive], specialities: [SPECIALITY.coastal] },
		{ name: "Lobster with melted butter", price: 3, increment: 1, variability: 4, unit: "sp", category: [PRICING.expensive], specialities: [SPECIALITY.coastal] },
		{ name: "Apple stuffed mushrooms", price: 5, increment: 2, variability: 2, unit: "cp", category: [PRICING.average, PRICING.expensive] },
		{ name: "Cheese rolls with a filling of nuts, honey and vegetables", price: 4, increment: 1, variability: 2, unit: "cp", category: [PRICING.average, PRICING.expensive] },
		{ name: "Breaded breast of chicken", price: 3, increment: 1, variability: 3, unit: "sp", category: [PRICING.average] },
		{ name: "Chicken and garlic stew", price: 3, increment: 1, variability: 3, unit: "sp", category: [PRICING.average] },
		{ name: "Boiled bacon and cabbage parsley sauce", price: 2, increment: 1, variability: 3, unit: "sp", category: [PRICING.average] },
		{ name: "Beef vegetable casserole", price: 3, increment: 1, variability: 3, unit: "sp", category: [PRICING.average] },
		{ name: "Prime roast sirloin", price: 3, increment: 1, variability: 4, unit: "sp", category: [PRICING.average] },
		{ name: "Roast duck with apples", price: 2, increment: 1, variability: 4, unit: "sp", category: [PRICING.average] },
		{ name: "Pork knuckle roasted in beer", price: 2, increment: 1, variability: 3, unit: "sp", category: [PRICING.average, PRICING.expensive] },
		{ name: "Roast beef served with cranberry sauce", price: 3, increment: 1, variability: 4, unit: "sp", category: [PRICING.average, PRICING.expensive] },
		{ name: "Roasted peppers filled with a mix of cheeses", price: 1, increment: 1, variability: 2, unit: "sp", category: [PRICING.average] },
		{ name: "Spinach mashed potatoes", price: 2, increment: 1, variability: 2, unit: "sp", category: [PRICING.average] },
		{ name: "Luskar hens with olives", price: 5, increment: 1, variability: 4, unit: "sp", category: [PRICING.average] },
		{ name: "Braised oxtails with mushrooms", price: 4, increment: 1, variability: 4, unit: "sp", category: [PRICING.average, PRICING.expensive] },
		{ name: "Mutton, lettuce and tomato", price: 3, increment: 1, variability: 3, unit: "sp", category: [PRICING.average, PRICING.expensive] },
		{ name: "Smoked boar ribs", price: 5, increment: 2, variability: 3, unit: "sp", category: [PRICING.average] },
		{ name: "Smoked fresh trout fillets", price: 2, increment: 1, variability: 2, unit: "sp", category: [PRICING.average, PRICING.expensive], specialities: [SPECIALITY.coastal] },
		{ name: "Smoked salmon salad", price: 3, increment: 1, variability: 3, unit: "sp", category: [PRICING.average, PRICING.expensive], specialities: [SPECIALITY.coastal] },
		{ name: "Oyster and mushroom stew", price: 3, increment: 1, variability: 4, unit: "sp", category: [PRICING.average], specialities: [SPECIALITY.coastal] },
		{ name: "Beef stew", price: 2, increment: 1, variability: 2, unit: "sp", category: [PRICING.cheap] },
		{ name: "Porridge", price: 1, increment: 1, variability: 2, unit: "sp", category: [PRICING.cheap] },
		{ name: "Shepherd's pie", price: 2, increment: 1, variability: 2, unit: "sp", category: [PRICING.cheap] },
		{ name: "Baked potato", price: 2, increment: 2, variability: 3, unit: "cp", category: [PRICING.cheap] },
		{ name: "Cheese and crackers", price: 2, increment: 2, variability: 4, unit: "cp", category: [PRICING.cheap] },
		{ name: "Bread and butter", price: 1, increment: 2, variability: 3, unit: "cp", category: [PRICING.cheap] },
		{ name: "Boiled broccoli", price: 1, increment: 2, variability: 2, unit: "cp", category: [PRICING.cheap] },
		{ name: "Steamed carrots", price: 1, increment: 2, variability: 2, unit: "cp", category: [PRICING.cheap] },
		{ name: "Pickled sausage", price: 1, increment: 1, variability: 2, unit: "sp", category: [PRICING.cheap] },
		{ name: "Smoked pork", price: 2, increment: 1, variability: 2, unit: "sp", category: [PRICING.cheap] },
		{ name: "Biscuit", price: 1, increment: 1, variability: 2, unit: "cp", category: [PRICING.cheap] },
		{ name: "Mashed potatoes", price: 2, increment: 2, variability: 2, unit: "cp", category: [PRICING.cheap] },
		{ name: "Corn on the cob", price: 1, increment: 2, variability: 2, unit: "cp", category: [PRICING.cheap] },
		{ name: "Cheese rolls", price: 2, increment: 2, variability: 2, unit: "cp", category: [PRICING.cheap] },
		{ name: "Spiced potatoes", price: 3, increment: 2, variability: 2, unit: "cp", category: [PRICING.cheap] },
		{ name: "Pickled beets", price: 1, increment: 2, variability: 2, unit: "cp", category: [PRICING.cheap, PRICING.average] },
		{ name: "Boiled leeks", price: 1, increment: 2, variability: 2, unit: "cp", category: [PRICING.cheap] },
		{ name: "Artichoke soup", price: 1, increment: 2, variability: 2, unit: "cp", category: [PRICING.cheap, PRICING.average] },
		{ name: "Clam chowder", price: 2, increment: 2, variability: 3, unit: "cp", category: [PRICING.cheap, PRICING.average], specialities: [SPECIALITY.coastal] }
	],
	drink: [
		{ name: "House rum", price: 3, increment: 2, variability: 2, unit: "cp", category: [PRICING.cheap, PRICING.average] },
		{ name: "House ale", price: 3, increment: 1, variability: 2, unit: "cp", category: [PRICING.cheap, PRICING.average] },
		{ name: "House wine", price: 6, increment: 2, variability: 4, unit: "cp", category: [PRICING.cheap, PRICING.average] },
		{ name: "Ale flip", price: 3, increment: 1, variability: 3, unit: "cp", category: [PRICING.cheap, PRICING.average], description: "Made by mixing one part rum with fifteen parts ale in a metal bowl, adding sugar according to taste, and then flash-heating it by thrusting a red-hot metal bar (called a loggerhead) into the mixture." },
		{ name: "Moon Rum", price: 5, increment: 2, variability: 2, unit: "cp", category: [PRICING.cheap, PRICING.average], description: "A strong, fiery drink that is anything but subtle. Was distilled from sugar beets and is a dark reddish purple." },
		{ name: "Amberfire (whiskey)", price: 4, increment: 1, variability: 3, unit: "sp", category: [PRICING.average], description: "Strong and fiery, ingredients are proprietary and kept secret." },
		{ name: "Baldur's Gate Pale (beer)", price: 4, increment: 1, variability: 3, unit: "cp", category: [PRICING.cheap, PRICING.average] },
		{ name: "Belbuck (beer)", price: 3, increment: 1, variability: 3, unit: "cp", category: [PRICING.cheap, PRICING.average], description: "Translucent green, spearmint beer favored by halflings." },
		{ name: "Bitter Black (beer)", price: 2, increment: 1, variability: 2, unit: "sp", category: [PRICING.average], description: "Heavy and jet black with a dark brown head of foam, served at cellar temperature." },
		{ name: "Dragon's Breath (beer)", price: 8, increment: 1, variability: 3, unit: "cp", category: [PRICING.cheap, PRICING.average], description: "Strong and harsh, imported from Sembia." },
		{ name: "Elminster's Choice (beer)", price: 10, increment: 2, variability: 2, unit: "cp", category: [PRICING.cheap, PRICING.average], description: "Dark beer, cloudy with yeast and having a heavy head. Bitter with a smoky aftertaste." },
		{ name: "Golden Sands Brews (beer)", price: 1, increment: 1, variability: 2, unit: "sp", category: [PRICING.average, PRICING.expensive], description: "Pale yellow lager, white foam, light bubbles. Imported from Calimshan." },
		{ name: "Iriaeboran North Brew (beer)", price: 7, increment: 1, variability: 3, unit: "cp", category: [PRICING.average, PRICING.expensive], description: "Dark amber with a harsh, bitter aftertaste." },
		{ name: "Luiren's Best (beer)", price: 1, increment: 1, variability: 3, unit: "sp", category: [PRICING.average, PRICING.expensive], description: "Black as ink and thick as snow, with a sweet flavor and frothy head." },
		{ name: "Old One Eye (beer)", price: 12, increment: 2, variability: 4, unit: "cp", category: [PRICING.average, PRICING.expensive], description: "Light-bodied lager, fiery red in color and with a spicy aftertaste." },
		{ name: "Shadowdark Ale (beer)", price: 13, increment: 2, variability: 4, unit: "cp", category: [PRICING.average, PRICING.expensive], description: "Pale yellow foam atop a cloudy brown bubbly liquid, with a light bitter taste. Imported from Shadowdale." },
		{ name: "Suzale (beer)", price: 2, increment: 2, variability: 2, unit: "sp", category: [PRICING.expensive], description: "Dark, complex with a nutty aftertaste. Imported from Cormyr." },
		{ name: "Tanagyr's Stout (beer)", price: 2, increment: 1, variability: 3, unit: "sp", category: [PRICING.expensive], description: "A heavy, pitch-black stout with a low, rich malt flavor. Imported from Zhentil Keep." },
		{ name: "Kneecracker (cider)", price: 6, increment: 2, variability: 4, unit: "cp", category: [PRICING.average, PRICING.expensive], description: "Robust and cloudy apple cider." },
		{ name: "Purple Hill Cider (cider)", price: 2, increment: 1, variability: 2, unit: "sp", category: [PRICING.average, PRICING.expensive], description: "Fine, fruity and strong. Scent of apple, cherries and plums." },
		{ name: "Vilhon Cider (cider)", price: 3, increment: 1, variability: 3, unit: "sp", category: [PRICING.expensive], description: "Heavy and sweet, served hot. Scent of apples, cherries, blueberries and pears." },
		{ name: "Arabellan Dry (wine)", price: 2, increment: 1, variability: 3, unit: "sp", category: [PRICING.average, PRICING.expensive], description: "Fine red wine, served at cellar temperature. Dry with a slight woodsy undertone with a hint of berry." },
		{ name: "Berduskan Dark (wine)", price: 10, increment: 1, variability: 3, unit: "gp", category: [PRICING.expensive, PRICING.premium], description: "Heavy wine, dark and sweet with a slight burning aftertaste. Rare and highly sought-after." },
		{ name: "Blood Wine (wine)", price: 10, increment: 2, variability: 4, unit: "sp", category: [PRICING.average, PRICING.expensive], description: "Heavy body and deep-red tone. Taste is lush and full, with a slight afterbite. Imported from Aglarond." },
		{ name: "Clarry (wine)", price: 1, increment: 2, variability: 2, unit: "sp", category: [PRICING.average], description: "Blend of table wines sweetened with honey and spices." },
		{ name: "Evermead (wine)", price: 40, increment: 5, variability: 10, unit: "gp", category: [PRICING.premium] },
		{ name: "Fire Wine (wine)", price: 2, increment: 1, variability: 2, unit: "sp", category: [PRICING.average, PRICING.expensive], description: "Thick and almost black, extremely strong and spicy." },
		{ name: "Mead (wine)", price: 18, increment: 3, variability: 5, unit: "sp", category: [PRICING.expensive], description: "Delicate and slightly sweet." },
		{ name: "Saerloonian Special Vat (wine)", price: 4, increment: 1, variability: 3, unit: "sp", category: [PRICING.average, PRICING.expensive], description: "Pale red in color, full-bodied and leaves a tingle on the tongue. Hints of strawberry and raspberry." },
		{ name: "Saerloonian Glowfire (wine)", price: 3, increment: 1, variability: 3, unit: "sp", category: [PRICING.average, PRICING.expensive], description: "Pale green-yellow and faintly luminous. Low acidity, hint of pears." },
		{ name: "Saerloonian Topaz (wine)", price: 2, increment: 1, variability: 2, unit: "sp", category: [PRICING.average, PRICING.expensive], description: "Yellow amber in color, sightly dry with a nutty taste balanced by bold fruit overtones." },
		{ name: "Undermountain Alurlyath (wine)", price: 1, increment: 1, variability: 2, unit: "sp", category: [PRICING.average], description: "Sweet white wine with a slightly nutty aftertaste. Silver-green in color, faintly luminous." },
		{ name: "Westgate Ruby (wine)", price: 1, increment: 1, variability: 2, unit: "sp", category: [PRICING.average], description: "Bold crimson wine with slight acidity." },
		{ name: "Spiced Wine (wine)", price: 2, increment: 1, variability: 2, unit: "sp", category: [PRICING.average], description: "Spiced with raisin, cinnamon, fennel, anise, nutmeg, and clove. Imported from Calimshan." },
		{ name: "Winter Wine (wine)", price: 3, increment: 2, variability: 2, unit: "sp", category: [PRICING.average, PRICING.expensive], description: "Purplish-blue in hue, strong and sweet desert wine, faintly spicy aftertaste." }
	]
};
const SETTING_MENUS = { faerun: FAERUN_MENU };

function getMenu(menu, pricing, specialities) {
	const filteredMenu = menu.filter(function(item) {
		let matchSpecialities;
		if (!item.specialities) {
			matchSpecialities = true;
		} else {
			if (item.specialities.every(val => specialities.includes(val))) {
				matchSpecialities = true;
			} else {
				matchSpecialities = false;
			}
		}
		return item.category.includes(PRICING[pricing]) && matchSpecialities;
	});

	const result = [];
	filteredMenu.forEach(function(item) {
		const price = item.price
			+ item.increment * PRICING[pricing] 					// price varies based on fanciness of establishment
			+ Math.floor(Math.random() * (item.variability + 1));	// price increased between 0 and variability value
		result.push({ name: item.name, price: price, unit: item.unit, description: item.description });
	});

	return result;
}

function trimMenu(menu, size) {
	return getRandom(menu, size);
}

function sortMenu(menu) {
	menu.sort(function(a, b) {
		if (a.name < b.name) {
			return -1;
		} else if (a.name > b.name) {
			return 1;
		} else {
			return 0;
		}
	});
}

function generateMenuJSON(setting, pricing, variety, specialities) {
	const result = { food: [], drink: [] };

	// Generate food
	result.food = getMenu(SETTING_MENUS[setting].food, pricing, specialities);
	result.food = trimMenu(result.food, VARIETY.food[variety]);
	sortMenu(result.food);

	// Generate drinks
	result.drink = getMenu(SETTING_MENUS[setting].drink, pricing, specialities);
	result.drink = trimMenu(result.drink, VARIETY.drink[variety]);
	sortMenu(result.drink);

	return result;
}

function generateMenuRowHTML(rowJson) {
	let result = "<li class='item-line'>" + rowJson.name + ": " + rowJson.price + " " + rowJson.unit;

	if (rowJson.description) {
		result += "<div class='item-description'>" + rowJson.description + "</div>";
	}

	result += "</li>";
	return result;
}

function generateMenuHTML(json) {
	let result = "<h3>Menu</h3>";

	// Food menu
	result += "<ul>";
	json.food.forEach(function(rowJson) {
		result += generateMenuRowHTML(rowJson);
	});
	result += "</ul>";

	// Drink menu
	result += "<ul>";
	json.drink.forEach(function(rowJson) {
		result += generateMenuRowHTML(rowJson);
	});
	result += "</ul>";

	return result;
}

function updatePageMenu(html) {
	const selectionSection = document.getElementById("selection-section");
	if (selectionSection) {
		selectionSection.classList.add("hidden");
	}

	const menuSection = document.getElementById("menu-section");
	if (menuSection) {
		menuSection.innerHTML = html;
	}
}

function validateParams(setting, pricing, variety, specialities) {
	let result = true;

	if (!SETTING_MENUS[setting]) {
		result = false;
		setting && console.error(`"${setting}" not a valid setting.`);
	}
	if (!PRICING[pricing] && PRICING[pricing] !== 0) {
		result = false;
		pricing && console.error(`"${pricing}" not a valid menu pricing.`);
	}
	if (!VARIETY.food[variety] || !VARIETY.drink[variety]) {
		result = false;
		variety && console.error(`"${variety}" not a valid menu variety.`);
	}

	if (Array.isArray(specialities)) {
		specialities.forEach(function(speciality) {
			if (!SPECIALITY[speciality]) {
				result = false;
				setting && console.error(`"${speciality}" not a valid food speciality.`);
			}
		});
	} else {
		console.error("Speciality parameters are not an array.");
	}

	return result;
}

function renderPage() {
	const params = (new URL(document.location)).searchParams;
	const setting = params.get("setting"),
		pricing = params.get("pricing"),
		variety = params.get("variety"),
		specialities = params.getAll("specialities");

	if (setting && validateParams(setting, pricing, variety, specialities)) {
		const menuJSON = generateMenuJSON(setting, pricing, variety, specialities);
		const menuHTML = generateMenuHTML(menuJSON);
		updatePageMenu(menuHTML);
	} else {
		console.warn("No params passed in or params are invalid.");
	}
}

window.onload = renderPage;

function getRandom(arr, n) {
	var result = new Array(n),
		len = arr.length,
		taken = new Array(len);
	if (n > len)
		throw new RangeError("getRandom: more elements taken than available");
	while (n--) {
		var x = Math.floor(Math.random() * len);
		result[n] = arr[x in taken ? taken[x] : x];
		taken[x] = --len in taken ? taken[len] : len;
	}
	return result;
}
