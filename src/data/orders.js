export const ORDERS = [
	{
		id: 1,
		date: `${new Date().getDate()} - ${new Date().getMonth()} - ${new Date().getFullYear()}`,
		total: 259.99,
		items: [
			{
				id: 2,
				stock: 10,
				title: "Razer Kraken V3 HyperSense",
				img: "https://i.ibb.co/gSn9vZk/hx-product-headsets-cloud-stinger-core-wireless-71-1-tn.png",
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam blanditiis officia dignissimos! Expedita quod voluptatem molestias id maxime explicabo ipsa.",
				price: 129.99,
				category: "headset",
				quantity: 2,
			},
		],
	},
];
