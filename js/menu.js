;(function () {

	'use strict';

	var menu = {
 "items":[
		{
			 "id":"soupNRice",
			 "name":"Soup And Rice",
			 "menuName":"Soup and Rice",
			 "items":[
					{
						 "Name":"Miso",
						 "Description":"Soy Bean Soup",
						 "Price":"$1.50"
					},
					{
						 "Name":"Rice",
						 "Description":"Plain White Rice",
						 "Price":"$1.50"
					},
					{
						 "Name":"Tonjiru",
						 "Description":"Beef and Vegetable with Soy Bean Soup",
						 "Price":"$5.99"
					},
					{
						 "Name":"Seafood",
						 "Description":"",
						 "Price":"$5.99"
					}
			 ]
		},
		{
			 "id":"appetizer",
			 "name":"Appetizer",
			 "menuName":"Appetizer",
			 "items":[
					{
						 "Name":"Hiyayako",
						 "Description":"Chilled Bean Curd",
						 "Price":"$1.99"
					},
					{
						 "Name":"Edamame",
						 "Description":"Boiled Soya Bean with Salt ",
						 "Price":"$3.99"
					},
					{
						 "Name":"Yaki Tori",
						 "Description":"Skewered Chicken with Terriaki Sauce ",
						 "Price":"$3.99"
					},
					{
						 "Name":"Agedashi Tofu",
						 "Description":"Deep Fried Tofu",
						 "Price":"$3.50"
					},
					{
						 "Name":"Kimchi",
						 "Description":"",
						 "Price":"$4.50"
					},
					{
						 "Name":"Salmon Kama",
						 "Description":"Grilled Salmon Collar ",
						 "Price":"$4.99"
					},
					{
						 "Name":"Spring Roll",
						 "Description":"(5pcs)",
						 "Price":"$5.99"
					},
					{
						 "Name":"Croquette",
						 "Description":"Deep Fried Potatos with Sauce ",
						 "Price":"$5.99"
					},
					{
						 "Name":"Yaki Gyoza",
						 "Description":"6pcs Pan Fried Dumpling ",
						 "Price":"$5.99"
					},
					{
						 "Name":"Yaki Saba",
						 "Description":"Grilled Mackeral ",
						 "Price":"$5.99"
					},
					{
						 "Name":"Vegetable Tempura",
						 "Description":"",
						 "Price":"$5.50"
					},
					{
						 "Name":"Tako Tempura",
						 "Description":"Octopus ",
						 "Price":"$5.50"
					},
					{
						 "Name":"Yam Tempura",
						 "Description":"",
						 "Price":"$5.50"
					},
					{
						 "Name":"Onion Ring Tempura",
						 "Description":"",
						 "Price":"$5.50"
					},
					{
						 "Name":"Nasu Butter",
						 "Description":"Grilled Eggplant ",
						 "Price":"$6.99"
					},
					{
						 "Name":"Hotate yaki(2)",
						 "Description":"Grilled Scallop on a Stick",
						 "Price":"$8.99"
					},
					{
						 "Name":"Taro Tempura",
						 "Description":"",
						 "Price":"$5.99"
					},
					{
						 "Name":"Tempura Appetizer",
						 "Description":"2pcs Shrimps and Vegetables",
						 "Price":"$6.99"
					},
					{
						 "Name":"Chicken Wings",
						 "Description":"Deep Fried(4pcs)",
						 "Price":"$6.99"
					},
					{
						 "Name":"B.B.Q Shrimp",
						 "Description":"(4pcs) with Spicy Pepper",
						 "Price":"$6.99"
					},
					{
						 "Name":"Cheese Wonton (6pcs)",
						 "Description":"",
						 "Price":"$6.99"
					},
					{
						 "Name":"Urajiro Deep ",
						 "Description":"Fried Japenese Mushrooms Stuffed with Shrimp",
						 "Price":"$8.99"
					},
					{
						 "Name":"Fried Calamari",
						 "Description":"Deep Fried Breaded Squid",
						 "Price":"$8.99"
					},
					{
						 "Name":"Tori Karage ",
						 "Description":"Deep Fried Chicken Pieces",
						 "Price":"$6.99"
					},
					{
						 "Name":"Butter Enoki",
						 "Description":"Pan Fried Japenese Mushroom with Butter ",
						 "Price":"$7.99"
					},
					{
						 "Name":"Hamachi Kama",
						 "Description":"Grilled Yellow-Tail Collar",
						 "Price":"$8.50"
					},
					{
						 "Name":"Yaki Ika",
						 "Description":"Grilled Squid ",
						 "Price":"$9.99"
					},
					{
						 "Name":"Negima Yaki",
						 "Description":"Sliced Beef Roll, Terriaki Sauce and Japenese Mushrooms    ",
						 "Price":"$9.99"
					},
					{
						 "Name":"Shrimp Tempura",
						 "Description":"(6pcs)Deep Fried Shrimp",
						 "Price":"$10.99"
					},
					{
						 "Name":"Soft Shell Crab ",
						 "Description":"Deep Fried Crab Served with Ponzu Soup ",
						 "Price":"$11.99"
					}
			 ]
		},
		{
			 "id":"salad",
			 "menuName":"Salad",
			 "name":"Salad (with Kuni special Dressing)",
			 "items":[
					{
						 "Name":"Green Salad",
						 "Price":"$4.99"
					},
					{
						 "Name":"Tofu Salad ",
						 "Description":"Tofu, Lettuce, Onion, Seaweed",
						 "Price":"$7.99"
					},
					{
						 "Name":"Avacodo Salad",
						 "Description":"Vegetable, Avacodo and Special Dressing ",
						 "Price":"$6.99"
					},
					{
						 "Name":"Kani Salad ",
						 "Description":"Green salad, Cucumbers, Crab, Tobiko and Mayo",
						 "Price":"$5.99"
					},
					{
						 "Name":"Soba Salad ",
						 "Description":"Buckwheat noodle with Vegetable ",
						 "Price":"$8.99"
					}
			 ]
		},
		{
			 "id":"rice",
			 "menuName":"Rice Dishes",
			 "name":"Rice Dishes (served with Soup and Salad)",
			 "items":[
					{
						 "Name":"Tofu Don ",
						 "Description":"Tofu, Egg and Onion ",
						 "Price":"$9.99"
					},
					{
						 "Name":"Veggie Ten Don ",
						 "Description":"Tempura Mixed Vegetable ",
						 "Price":"$9.99"
					},
					{
						 "Name":"Oyako Don ",
						 "Description":"Sliced Chicken, Egg and Onion ",
						 "Price":"$10.99"
					},
					{
						 "Name":"Gyu Don ",
						 "Description":"Sliced Beef with Onion ",
						 "Price":"$10.99"
					},
					{
						 "Name":"Ten Don ",
						 "Description":"Tempura Shrimps and Vegetables ",
						 "Price":"$10.99"
					},
					{
						 "Name":"Curry Chicken Katsu",
						 "Description":"Deep Fried Breaded Chicken in Curry Sauce",
						 "Price":"$11.99"
					},
					{
						 "Name":"Curry Pork Katsu ",
						 "Description":"Deep Fried Breaded Pork in Curry Sauce ",
						 "Price":"$11.99"
					},
					{
						 "Name":"Curry Ebi Fry",
						 "Description":"Deep Fried Breaded Shrimp in Curry Sauce ",
						 "Price":"$11.99"
					},
					{
						 "Name":"Curry Beef",
						 "Description":"Sliced Beef in Curry Sauce ",
						 "Price":"$11.99"
					},
					{
						 "Name":"Curry Croquette ",
						 "Description":"Potato, Onion in Curry Sauce ",
						 "Price":"$11.99"
					},
					{
						 "Name":"Katsu Don ",
						 "Description":"Breaded Pork Cutlet, Egg and Onion ",
						 "Price":"$11.99"
					},
					{
						 "Name":"Chicken Katsu Don ",
						 "Description":"Breaded Chicken, Egg and Onion ",
						 "Price":"$11.99"
					},
					{
						 "Name":"Unagi Don ",
						 "Description":"Barbecued Eel on Rice ",
						 "Price":"$15.99"
					},
					{
						 "Name":"Seafood Fried Rice ",
						 "Price":"$13.99"
					}
			 ]
		},
		{
			 "id":"noodle",
			 "name":"Noodle Dishes (Choice of Udon or Soba)",
			 "menuName":"Noodle Dishes",
			 "items":[
					{
						 "Name":"Vegetable Tempura Noodle ",
						 "Description":"Tempura Vegetable in Noodle in Soup",
						 "Price":"$8.99"
					},
					{
						 "Name":"Tofu Noodle",
						 "Description":"Veggie, Tofu and Noodle in Soup",
						 "Price":"$8.99"
					},
					{
						 "Name":"Kitsune Noodle",
						 "Description":"Tofu Skin, Wakame, Tempura Bits and Noodle in Soup",
						 "Price":"$8.99"
					},
					{
						 "Name":"Zaru Soba ",
						 "Description":"Cold Noodle Served with Dipping Sauce ",
						 "Price":"$8.99"
					},
					{
						 "Name":"Ebi Tempura Noodle ",
						 "Description":"2pcs Shrimp and Noodle in Soup",
						 "Price":"$9.99"
					},
					{
						 "Name":"Mixed Tempura Noodle",
						 "Description":"1 pc Shrimp and Veggie Noodle in Soup",
						 "Price":"$9.99"
					},
					{
						 "Name":"Chicken noodle ",
						 "Description":"Chicken and Veggie and Noodle in Soup",
						 "Price":"$9.99"
					},
					{
						 "Name":"Beef Noodle ",
						 "Description":"Beeg and Veggie and Noodle in Soup",
						 "Price":"$9.99"
					},
					{
						 "Name":"Katsu Noodle",
						 "Description":"Breaded Pork or Chicken and Noodle in Soup",
						 "Price":"$10.99"
					},
					{
						 "Name":"Yasai Ramen ",
						 "Description":"Mixed Veggie in Soup",
						 "Price":"$10.99"
					},
					{
						 "Name":"Miso Ramen ",
						 "Description":"Pork, Egg, Fish Cake, Veggie and Corn in Soup",
						 "Price":"$10.99"
					},
					{
						 "Name":"Sho Yu Ramen ",
						 "Description":"Pork, Egg, Fish Cake, Veggie and Corn in Soup",
						 "Price":"$10.99"
					},
					{
						 "Name":"Zapon Ramen ",
						 "Description":"Mechi Beef Pan Fried with Veggie and Onion in Soup",
						 "Price":"$10.99"
					},
					{
						 "Name":"Curry Noodle ",
						 "Description":"Chicken and Noodle In Curry soup",
						 "Price":"$10.99"
					},
					{
						 "Name":"Yaki Udon",
						 "Description":"Pork, Veggie, Egg and Onion(Pan Fried Noodle)",
						 "Price":"$11.99"
					},
					{
						 "Name":"Yaki Soba ",
						 "Description":"Pork, Veggie,Squid and Onion(Pan Fried Noodle)",
						 "Price":"$11.99"
					},
					{
						 "Name":"Seafood Noodle",
						 "Description":"Mixed Seafood and Noodle in Soup",
						 "Price":"$11.99"
					}
			 ]
		},
		{
			 "id":"nabeMono",
			 "name":"NabeMono (served in Hot Pot, comes with Rice)",
			 "menuName":"NabeMono",
			 "items":[
					{
						 "Name":"Yu-Tofu Nabe ",
						 "Description":"Tofu and Veggie in Hot Water with Ponzu Sauce ",
						 "Price":"$9.99"
					},
					{
						 "Name":"Kimichi Nabe ",
						 "Description":"Tofu, Pork and Veggie ",
						 "Price":"$10.99"
					},
					{
						 "Name":"Beef Nabe ",
						 "Description":"Beef, Tofu and Veggie ",
						 "Price":"$11.99"
					},
					{
						 "Name":"Seafood Nabe ",
						 "Description":"Seafood, Tofu and Veggie ",
						 "Price":"$13.99"
					}
			 ]
		},
		{
			 "id":"bento",
			 "name":"Kuni Bento Boxes (served with Soup,Salad and Rice)",
			 "menuName":"Kuni Bento Boxes",
			 "items":[
					{
						 "Name":"Kuni Bento Special",
						 "Description":"Mixed Tempura with choice of salmon sashmi(3pcs),Salmon Sushi(3pcs) or dynamite roll(4pcs)",
						 "Price":"$14.99"
					},
					{
						 "Name":"Ume Bento",
						 "Description":"Chicken Teriyaki,(AgeDashi Tofu,Tempura and Cumcumber roll",
						 "Price":"$14.99"
					},
					{
						 "Name":"Matsu Bento",
						 "Description":"Salmon Teriyaki,(AgeDashi Tofu,Tempura and Salmon roll",
						 "Price":"$15.99"
					},
					{
						 "Name":"Sakura Bento",
						 "Description":"Beef Teriyaki,(AgeDashi Tofu,Tempura and Tuna roll",
						 "Price":"$15.99"
					},
					{
						 "Name":"Veggie Bento",
						 "Description":"Tempura Vegetable,Tofu Teriyaki and Avacdo roll",
						 "Price":"$12.99"
					}
			 ]
		},
		{
			 "id":"sushSpecial",
			 "name":"Sushi Specials",
			 "menuName":"Sushi Specials",
			 "items":[
					{
						 "Name":"Sushi Special A(served with Soup)",
						 "Description":"5 pcs of sushi, 6 pcs of Sashimi, 6pcs of California Roll",
						 "Price":"$17.99"
					},
					{
						 "Name":"Sushi Special B(served with Soup)",
						 "Description":"5 pcs of sushi, 8 pcs of Dynamite Maki",
						 "Price":"$14.99"
					},
					{
						 "Name":"Sushi Special C(served with Soup)",
						 "Description":"5pcs of Sushi, 8 pcs of Dynamite Maki, Sashimi(2 pcs each): Tuna, Salmon and Hamachi",
						 "Price":"$19.99"
					}
			 ]
		},
		{
			 "id":"sushBarAppeteizer",
			 "name":"Sushi Bar Appetizer",
			 "menuName":"Sushi Bar Appetizer",
			 "items":[
					{
						 "Name":"Sunomono Salad",
						 "Description":"Seafood with Vegetable Seafood ",
						 "Price":"$5.99"
					},
					{
						 "Name":"Wakame Salad ",
						 "Description":"Seaweed,Vegetable",
						 "Price":"$4.99"
					},
					{
						 "Name":"Hisashi Wakame",
						 "Description":"Japenese Seaweed Salad",
						 "Price":"$5.99"
					},
					{
						 "Name":"Sushi Salad ",
						 "Description":"Salmon,CRab,Fish Egg,Avacodo,Spicy Tuna, wrapped with Cucumber",
						 "Price":"$7.99"
					},
					{
						 "Name":"Sushi Appetizer ",
						 "Description":"Kani,Tuna,Salmon, Tai (1 pc each)",
						 "Price":"$5.99"
					},
					{
						 "Name":"Tunatata ",
						 "Description":"Spicy Tuna, Tempura Bits, Fruits and Avacodo",
						 "Price":"$6.99"
					},
					{
						 "Name":"Sushi and Sashimi Appetizer ",
						 "Description":"Salmon, Tuna, Tai Sashimi or Kani Sushi(1 pc each)",
						 "Price":"$8.99"
					},
					{
						 "Name":"Sashimi Appetizer",
						 "Description":"Tuna, Salmon, White Tuna, TAi(2 pcs each)",
						 "Price":"$10.99"
					}
			 ]
		}
 ]
};

 var rolls = {
 "items":[
		{
			 "id":"rolls",
			 "name":"Rolls",
			 "menuName":"Rolls",
			 "items":[
					{
						 "Name":"Kani Maki",
						 "Description":"Crab Roll",
						 "Regular Price":"$3.99",
						 "Handroll Price":"$3.50"
					},
					{
						 "Name":"White Tuna Roll",
						 "Regular Price":"$4.50",
						 "Handroll Price":"$3.99"
					},
					{
						 "Name":"Salmon Skin Roll",
						 "Regular Price":"$4.50",
						 "Handroll Price":"$3.99"
					},
					{
						 "Name":"Ebi Maki",
						 "Description":"Shrimp Roll",
						 "Regular Price":"$4.50",
						 "Handroll Price":"$3.99"
					},
					{
						 "Name":"Sake Maki",
						 "Description":"Salmon Roll",
						 "Regular Price":"$4.99",
						 "Handroll Price":"$3.99"
					},
					{
						 "Name":"Unagi Maki",
						 "Description":"Eel Roll",
						 "Regular Price":"$5.50",
						 "Handroll Price":"$4.99"
					},
					{
						 "Name":"California Roll",
						 "Regular Price":"$5.50",
						 "Handroll Price":"$4.50"
					},
					{
						 "Name":"Tekka Maki",
						 "Description":"Tuna Roll",
						 "Regular Price":"$4.99",
						 "Handroll Price":"$4.20"
					},
					{
						 "Name":"Hamachi Maki",
						 "Description":"Yellow Tail",
						 "Regular Price":"$4.99",
						 "Handroll Price":"$4.50"
					},
					{
						 "Name":"Tempura Maki",
						 "Description":"Shrimp Deep Fried",
						 "Regular Price":"$5.50",
						 "Handroll Price":"$4.50"
					},
					{
						 "Name":"Spicy Tuna Roll",
						 "Regular Price":"$5.50",
						 "Handroll Price":"$4.75"
					},
					{
						 "Name":"Spicy Salmon Roll",
						 "Regular Price":"$5.50",
						 "Handroll Price":"$4.75"
					},
					{
						 "Name":"Spicy Scallop Roll",
						 "Regular Price":"$5.50",
						 "Handroll Price":"$4.75"
					},
					{
						 "Name":"Spicy White Tuna Roll",
						 "Regular Price":"$5.50",
						 "Handroll Price":"$4.75"
					},
					{
						 "Name":"Spicy Kani Roll",
						 "Regular Price":"$5.50",
						 "Handroll Price":"$4.75"
					}
			 ]
		},
		{
			 "id":"vegetarianRolls",
			 "name":"Vegetarian Rolls",
			 "menuName":"Vegetarian Rolls",
			 "items":[
					{
						 "Name":"Avacodo Maki",
						 "Regular Price":"$3.99",
						 "Handroll Price":"$3.50"
					},
					{
						 "Name":"Ginger Maki",
						 "Regular Price":"$3.99",
						 "Handroll Price":"$3.25"
					},
					{
						 "Name":"Kappa Maki",
						 "Description":"Cucumber Roll",
						 "Regular Price":"$3.99",
						 "Handroll Price":"$3.25"
					},
					{
						 "Name":"Kanpyo",
						 "Description":"Pickle Japenese Pumpkin Roll",
						 "Regular Price":"$3.99",
						 "Handroll Price":"$3.25"
					},
					{
						 "Name":"Oshinko Maki",
						 "Description":"Pickle Radish Roll",
						 "Regular Price":"$3.99",
						 "Handroll Price":"$3.25"
					},
					{
						 "Name":"Shitake Maki",
						 "Description":"Japenese Mushroom Roll",
						 "Regular Price":"$4.50",
						 "Handroll Price":"$3.99"
					},
					{
						 "Name":"Vegetarian California Maki",
						 "Description":"Carrot, Avacodo, Cucumber",
						 "Regular Price":"$4.75",
						 "Handroll Price":"$4.25"
					},
					{
						 "Name":"Vege Tempura Roll",
						 "Description":"with mayo",
						 "Regular Price":"$4.75",
						 "Handroll Price":"$4.25"
					},
					{
						 "Name":"Yam Tempura Maki",
						 "Description":"Sweet Potato Tempura With Mayo",
						 "Regular Price":"$4.75",
						 "Handroll Price":"$4.25"
					},
					{
						 "Name":"A & C Maki",
						 "Description":"Avacodo and Cucumber Roll",
						 "Regular Price":"$4.75",
						 "Handroll Price":"$4.25"
					},
					{
						 "Name":"Taro Maki",
						 "Description":"with Mayo",
						 "Regular Price":"$4.99",
						 "Handroll Price":"$4.50"
					},
					{
						 "Name":"Brocolii Maki",
						 "Description":"with Mayo",
						 "Regular Price":"$5.50",
						 "Handroll Price":"$4.75"
					},
					{
						 "Name":"Tamago Maki",
						 "Description":"Egg",
						 "Regular Price":"$3.99",
						 "Handroll Price":"$3.25"
					},
					{
						 "Name":"Inari Maki",
						 "Description":"Tofu Skin",
						 "Regular Price":"$3.99",
						 "Handroll Price":"$3.25"
					},
					{
						 "Name":"Mango Roll",
						 "Regular Price":"$5.50",
						 "Handroll Price":"$4.50"
					},
					{
						 "Name":"Yam and Avacodo Maki",
						 "Description":"With Mayo",
						 "Regular Price":"$5.50",
						 "Handroll Price":"$4.50"
					},
					{
						 "Name":"Veggie Green Dragon Roll",
						 "Description":"Yam and Taro with Mayo, Avacodo on top",
						 "Regular Price":"$7.99"
					},
					{
						 "Name":"Yellow Dragon Roll",
						 "Description":"Avacodo And Cucumber with Banana on top",
						 "Regular Price":"$7.99"
					}
			 ]
		}
 ]
};

	var sushi = {
 "items":[
		{
			 "id":"sushiASashimi",
			 "name":"Sushi and Sashimi",
			 "menuName":"Sushi and Sashimi",
			 "items":[
					{
						 "Name":"Maguro",
						 "Description":"Tuna",
						 "2piece":"$4.99",
						 "3piece":"$5.99"
					},
					{
						 "Name":"Sake",
						 "Description":"Salmon",
						 "2piece":"$4.50",
						 "3piece":"$5.50"
					},
					{
						 "Name":"Hamachi",
						 "Description":"Yellow Tail",
						 "2piece":"$5.50",
						 "3piece":"$5.99"
					},
					{
						 "Name":"White Tuna",
						 "2piece":"$4.20",
						 "3piece":"$4.99"
					},
					{
						 "Name":"Tai",
						 "Description":"Red Snapper",
						 "2piece":"$3.50",
						 "3piece":"$3.99"
					},
					{
						 "Name":"Saba",
						 "Description":"Mackerel",
						 "2piece":"$3.50",
						 "3piece":"$3.99"
					},
					{
						 "Name":"Hokkigai",
						 "Description":"Surf Clam",
						 "2piece":"$3.50",
						 "3piece":"$3.99"
					},
					{
						 "Name":"Hotate",
						 "Description":"Scallop",
						 "2piece":"$4.50",
						 "3piece":"$6.50"
					},
					{
						 "Name":"Ika",
						 "Description":"Squid",
						 "2piece":"$3.99",
						 "3piece":"$4.50"
					},
					{
						 "Name":"Kani",
						 "Description":"Crab",
						 "2piece":"$3.99",
						 "3piece":"$4.50"
					},
					{
						 "Name":"Tako",
						 "Description":"Octopus",
						 "2piece":"$4.50",
						 "3piece":"$4.99"
					},
					{
						 "Name":"Unagi",
						 "Description":"Fresh Water Eel",
						 "2piece":"$4.99",
						 "3piece":"$5.99"
					},
					{
						 "Name":"Ebi",
						 "Description":"Shrimp",
						 "2piece":"$3.50",
						 "3piece":"$3.99"
					},
					{
						 "Name":"Amaebi",
						 "Description":"Sweet Shrimp",
						 "2piece":"$4.99",
						 "3piece":"$5.50"
					},
					{
						 "Name":"Ikura",
						 "Description":"Salmon Roe",
						 "2piece":"$5.50",
						 "3piece":"$5.99"
					},
					{
						 "Name":"Tobiko",
						 "Description":"Flying Fish Roe",
						 "2piece":"$3.50",
						 "3piece":"$3.99"
					},
					{
						 "Name":"Tamago",
						 "Description":"Egg",
						 "2piece":"$2.99",
						 "3piece":"$3.99"
					},
					{
						 "Name":"Inari",
						 "Description":"Tofu",
						 "2piece":"$3.50",
						 "3piece":"$3.99"
					},
					{
						 "Name":"Spicy Salmon",
						 "2piece":"$4.50"
					},
					{
						 "Name":"Spicy Tuna",
						 "Description":"Spicy Tuna and Japenese Sauce",
						 "2piece":"$4.50"
					},
					{
						 "Name":"Spicy Scallop",
						 "2piece":"$4.50"
					},
					{
						 "Name":"Route 66",
						 "Description":"Yellow Tail, Tuna and Green Onion",
						 "2piece":"$5.50"
					},
					{
						 "Name":"Wakame",
						 "Description":"Japenese Seaweed Salad",
						 "2piece":"$2.99"
					}
			 ]
		}
 ]
};

	var combo = {
 "items":[
		{
			 "id":"grilledApetizerCombo",
			 "name":"Grilled Apetizer Combo",
			 "menuName":"Grilled Apetizer Combo",
			 "items":[
					{
						 "Name":"Tofu Teppanyaki Combo",
						 "Appetizer Price":"$7.99",
						 "Combo Price":"$10.99"
					},
					{
						 "Name":"Chicken Teppanyaki Combo",
						 "Appetizer Price":"$10.99",
						 "Combo Price":"$13.99"
					},
					{
						 "Name":"Beef Teppanyaki Combo",
						 "Appetizer Price":"$10.99",
						 "Combo Price":"$13.99"
					},
					{
						 "Name":"Salmon Teppanyaki Combo",
						 "Appetizer Price":"$11.99",
						 "Combo Price":"$14.99"
					},
					{
						 "Name":"Beef Short RIbs Teppanyaki Combo",
						 "Appetizer Price":"$12.99",
						 "Combo Price":"$15.99"
					},
					{
						 "Name":"Lemon Chicken",
						 "Appetizer Price":"$10.99",
						 "Combo Price":"$13.99"
					},
					{
						 "Name":"Sesame Chicken",
						 "Appetizer Price":"$10.99",
						 "Combo Price":"$13.99"
					},
					{
						 "Name":"Chicken  Katsu Combo",
						 "Appetizer Price":"$8.99",
						 "Combo Price":"$11.99"
					},
					{
						 "Name":"Tonkatsu(pork) Combo",
						 "Appetizer Price":"$8.99",
						 "Combo Price":"$11.99"
					},
					{
						 "Name":"Kuni Special",
						 "Description":"3 pcs California Roll, 4 pcs Kappa Roll, 1 pcs Ebi Sushi, Chicken Teriyaki and Tempura",
						 "Combo Price":"$12.99"
					},
					{
						 "Name":"Vegetable Tempura Combo",
						 "Combo Price":"$9.99"
					},
					{
						 "Name":"Assorted Tempura Combo",
						 "Combo Price":"$11.99"
					},
					{
						 "Name":"Seaafood Tempura Combo",
						 "Combo Price":"$13.99"
					}
			 ]
		}
 ]
};

var sashimiCombo = {
 "items":[
		{
			 "id":"sushiSashimiCombo",
			 "name":"Sushi Sashimi Combo",
			 "menuName":"Sushi Sashimi Combo",
			 "items":[
					{
						 "Name":"Sushi Beginner ",
						 "Description":"Egg,Shimp, 6 pcs Californa Roll, 6 pcs Salmom Skin Roll",
						 "Price":"$12.99"
					},
					{
						 "Name":"Vegetable Sushi ",
						 "Description":"6 pcs vegetarian California Roll, 6pcs Cucumber Roll, 6 pcs  Avacodo Roll, 2 pcs Inari ",
						 "Price":"$12.99"
					},
					{
						 "Name":"Chef Special ",
						 "Description":"(Sushi)Tuna,Salmon,White Fish,Crab, Surf Clam, Californa Roll(6pcs) & Spicy Salmon Handroll",
						 "Price":"$13.99"
					},
					{
						 "Name":"Combo Sushi Roll",
						 "Description":"6 pcs California Roll, 6 pcs Tuna Roll, 6 pcs Salmon Roll ",
						 "Price":"$13.99"
					},
					{
						 "Name":"Tempura Special Combo",
						 "Description":"Tempura Maki 6 pcs, Dynamite Maki 8 pcs ",
						 "Price":"$14.99"
					},
					{
						 "Name":"Hand Roll Combo ",
						 "Description":"Spy Tuna,Spy Salmon, Spy scallop, Hamachi,California ",
						 "Price":"$14.99"
					},
					{
						 "Name":"Spicy Combo Sushi Roll",
						 "Description":"6pcs Spicy California Roll, 6pcs Spicy Tuna Roll, 6pcs Spicy Salmon Roll ",
						 "Price":"$15.99"
					},
					{
						 "Name":"Sushi Nami",
						 "Description":"(sushi)Tuna, Salmon, Red Snapper, Shrimp, Eel, Crab, White Tuna, Surf Clam, Octopus,Tobiko, 3 pcs California Roll, 4 pcs Tuna Roll",
						 "Price":"$15.99"
					},
					{
						 "Name":"Sushi Jyo",
						 "Description":"(sushi)Tuna, Salmon,Flounder Shrimp,Fresh Water Eel, Yellow Tail, Kani,Octopus, Surf Clam,Salmon Roe, 3 pcs California Roll, 4 pcs Tuna Roll",
						 "Price":"$16.99"
					},
					{
						 "Name":"Chirashi Don ",
						 "Description":"Daily Fish on top of Rice",
						 "Price":"$16.99"
					},
					{
						 "Name":"Salmon Lover ",
						 "Description":"Red Dragon Roll, 3 pcs Salmon Sushi, & 3 pcs Salmon Sashimi ",
						 "Price":"$16.99"
					},
					{
						 "Name":"Sashimi Combo",
						 "Description":"Salmon, Tuna, Tai Hoikkigai (3 pcs each) with Rice",
						 "Price":"$15.99"
					},
					{
						 "Name":"Sashimi Dinner ",
						 "Description":"Daily Fish (18 pcs) Served with Rice",
						 "Price":"$19.99"
					},
					{
						 "Name":"Sashimi For Two ",
						 "Description":"6 pcs California Roll, 6 pcs Tuna Roll, 6 pcs Samon Roll, 18 pcs Daily Fish (Ice cream for Dessert for Dine-in Only) ",
						 "Price":"$39.99"
					},
					{
						 "Name":"Sushi For Two",
						 "Description":"6 pcs California Roll, 6 pcs Tuna Roll, 6 pcs Salmon Roll, 18 pcs Daily Fish, Ice Cream For Dessert",
						 "Price":"$39.99"
					}
			 ]
		}
 ]
};

    function createGeneric(name, arr, id) {


      var str = '<div class="">';
      str+= '<div id="'+id+'"class="col-md-12 fh5co-heading text-center" style="padding-top:100px;padding-bottom:100px;">';
      str+= '<h1 style="color: #fee856;"><em>'+name+'</em></h1>';
      str+= "</div>";

      var x;
      var y = 0;
      for(x =0; x< arr.length; x++) {
        if(y === 0) {
          str+= '<div class="row">';
        }
        str+= '<div class="col-md-4" style="padding-left:30px;padding-right:30px;margin-bottom:40px;">';
        str+= '<h2 style="color: #fee856;float:right;">'+ arr[x].Price +'</h2>';
        str+= '<h2 style="color:white;text-align:left!important;">'+arr[x].Name+'</h2>';

        var desc = (arr[x].Description !== undefined) ? arr[x].Description : '';
        str+= '<h3 style="color:#949494;text-align:left!important;">'+desc +'</h3>';
        str+= '</div>';
        if(y === 2) {
          str+= '</div>';
          y=0;
        } else {
          y++;
        }
      }
      str+= '</div>'

      document.getElementById('menu-insert').innerHTML += str;

    }
		function createCombo(name, arr, id) {


			var str = '<div class="">';
			str+= '<div id="'+id+'"class="col-md-12 fh5co-heading text-center" style="padding-top:100px;padding-bottom:100px;">';
			str+= '<h1 style="color: #fee856;"><em>'+name+'</em></h1>';
			str+= "</div>"

			var x;
			var y = 0;
			str+= '<div class="row">';
			str+= '<div class="col-xs-6">';
			str+= '</div>';
			str+= '<div class="col-xs-3">';
			str+= '<h3 style="color:white;text-align:center;">Appetizer Price</h3>';
			str+= '</div>';
			str+= '<div class="col-xs-3">';
			str+= '<h3 style="color:white;text-align:center;padding-right:20px;">Combo Price</h3>';
			str+= '</div>';
			str+= '</div>';
			for(x =0; x< arr.length; x++) {
				str+= '<div class="row" style="padding-left:20px;padding-right:20px;margin-bottom:100px;">';
				str+= '<div class="col-xs-6">';
				str+='<div class="article">'
				str+= '<h2 style="color:white">'+arr[x].Name+'</h2>';
				str+= '<span class="dots"></span>';
				str+= '</div>'
				var desc = (arr[x].Description !== undefined) ? arr[x].Description : '';
				str+= '<h3 style="color:#949494;">'+desc +'</h3>';
				str+= '</div>';
				str+= '<div class="col-xs-3">';
				if(arr[x]['Appetizer Price'] !== undefined) {
					str+= '<h2 style="color: #fee856;text-align:center;">'+ arr[x]['Appetizer Price'] +'</h2>';
				}
				str+= '</div>';
				str+= '<div class="col-xs-3">';
				if(arr[x]['Combo Price'] !== undefined) {
					str+= '<h2 style="color: #fee856;text-align:center;">'+ arr[x]['Combo Price'] +'</h2>';
				}
				str+= '</div>';
				str+= '</div>';
			}
			str+= '</div>'

			document.getElementById('menu-insert').innerHTML += str;

		}
		function createRoll(name, arr, id) {


      var str = '<div class="">';
      str+= '<div id="'+id+'" class="col-md-12 fh5co-heading text-center" style="padding-top:100px;padding-bottom:100px;">';
      str+= '<h1 style="color: #fee856;"><em>'+name+'</em></h1>';
      str+= "</div>"

      var x;
      var y = 0;
			str+= '<div class="row">';
			str+= '<div class="col-xs-6">';
			str+= '</div>';
			str+= '<div class="col-xs-3">';
			str+= '<h3 style="color:white;text-align:center;">Reg.</h3>';
			str+= '</div>';
			str+= '<div class="col-xs-3">';
			str+= '<h3 style="color:white;text-align:center;padding-right:20px;">Hand Roll</h3>';
			str+= '</div>';
			str+= '</div>';
      for(x =0; x< arr.length; x++) {
        str+= '<div class="row" style="padding-left:20px;padding-right:20px;margin-bottom:100px;">';
        str+= '<div class="col-xs-6">';
				str+='<div class="article">'
        str+= '<h2 style="color:white">'+arr[x].Name+'</h2>';
        str+= '<span class="dots"></span>';
				str+= '</div>'
        var desc = (arr[x].Description !== undefined) ? arr[x].Description : '';
        str+= '<h3 style="color:#949494;">'+desc +'</h3>';
        str+= '</div>';
				str+= '<div class="col-xs-3">';
				if(arr[x]['Regular Price'] !== undefined) {
					str+= '<h2 style="color: #fee856;text-align:center;">'+ arr[x]['Regular Price'] +'</h2>';
				}
				str+= '</div>';
				str+= '<div class="col-xs-3">';
				if(arr[x]['Handroll Price'] !== undefined) {
					str+= '<h2 style="color: #fee856;text-align:center;">'+ arr[x]['Handroll Price'] +'</h2>';
				}
				str+= '</div>';
				str+= '</div>';
      }
      str+= '</div>'

      document.getElementById('menu-insert').innerHTML += str;

    }

		function createSushi(name, arr, id) {

			var str = '<div class="">';
			str+= '<div id="'+id+'"class="col-md-12 fh5co-heading text-center" style="padding-top:100px;padding-bottom:100px;">';
			str+= '<h1 style="color: #fee856;"><em>'+name+'</em></h1>';
			str+= "</div>"

			var x;
			var y = 0;
			str+= '<div class="row">';
			str+= '<div class="col-xs-6">';
			str+= '</div>';
			str+= '<div class="col-xs-3">';
			str+= '<h3 style="color:white;text-align:center;">Sushi  Price for 2pcs.</h3>';
			str+= '</div>';
			str+= '<div class="col-xs-3">';
			str+= '<h3 style="color:white;text-align:center;padding-right:20px;">Sashimi Prices for 3 pcs</h3>';
			str+= '</div>';
			str+= '</div>';
			for(x =0; x< arr.length; x++) {
				str+= '<div class="row" style="padding-left:20px;padding-right:20px;margin-bottom:100px;">';
				str+= '<div class="col-xs-6">';
				str+='<div class="article">'
				str+= '<h2 style="color:white">'+arr[x].Name+'</h2>';
				str+= '<span class="dots"></span>';
				str+= '</div>'
				var desc = (arr[x].Description !== undefined) ? arr[x].Description : '';
				str+= '<h3 style="color:#949494;">'+desc +'</h3>';
				str+= '</div>';
				str+= '<div class="col-xs-3">';
				if(arr[x]['2piece'] !== undefined) {
					str+= '<h2 style="color: #fee856;text-align:center;">'+ arr[x]['2piece'] +'</h2>';
				}
				str+= '</div>';
				str+= '<div class="col-xs-3">';
				if(arr[x]['3piece'] !== undefined) {
					str+= '<h2 style="color: #fee856;text-align:center;">'+ arr[x]['3piece'] +'</h2>';
				}
				str+= '</div>';
				str+= '</div>';
			}
			str+= '</div>'

			document.getElementById('menu-insert').innerHTML += str;

		}

		var menuItemLinks = "";

		var menuItems = menu["items"];
		var i;
		for(i = 0 ; i< menuItems.length; i++) {
			createGeneric(menuItems[i].name,menuItems[i].items,menuItems[i].id);
			menuItemLinks += '<li><a href="menu.html#'+menuItems[i].id+'">'+ menuItems[i].menuName +'</a></li>';
		}

		var rollItems = rolls["items"];
		var i;
		for(i = 0 ; i< rollItems.length; i++) {
			createRoll(rollItems[i].name,rollItems[i].items,rollItems[i].id);
			menuItemLinks += '<li><a href="menu.html#'+rollItems[i].id+'">'+ rollItems[i].menuName +'</a></li>';
		}

		var sushiItems = sushi["items"];
		var i;
		for(i = 0 ; i< sushiItems.length; i++) {
			createSushi(sushiItems[i].name,sushiItems[i].items,sushiItems[i].id );
			menuItemLinks += '<li><a href="menu.html#'+sushiItems[i].id+'">'+ sushiItems[i].menuName +'</a></li>';
		}

		var comboItems = combo["items"];
		var i;
		for(i = 0 ; i< comboItems.length; i++) {
			createCombo(comboItems[i].name,comboItems[i].items,comboItems[i].id);
			menuItemLinks += '<li><a href="menu.html#'+comboItems[i].id+'">'+ comboItems[i].menuName +'</a></li>';
		}

		var sashimiItems = sashimiCombo["items"];
		var i;
		for(i = 0 ; i< sashimiItems.length; i++) {
			createGeneric(sashimiItems[i].name,sashimiItems[i].items,sashimiItems[i].id);
			menuItemLinks += '<li><a href="menu.html#'+sashimiItems[i].id+'">'+ sashimiItems[i].menuName +'</a></li>';
		}
			document.getElementById('nav-drop-down').innerHTML += menuItemLinks;

}());
