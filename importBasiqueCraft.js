/* eslint-disable */
const categoris = {
    "message": "categories",
    "body": [
        {
            "name": "Matériau de fabrication",
            "_id": "65653ca45a42de53c3afde16"
        },
        {
            "name": "Pierre brute",
            "_id": "65653ca45a42de53c3afde17"
        },
        {
            "name": "Bois",
            "_id": "65653ca45a42de53c3afde18"
        },
        {
            "name": "Ficelle",
            "_id": "65653ca45a42de53c3afde19"
        },
        {
            "name": "Gemme",
            "_id": "65653ca45a42de53c3afde1a"
        },
        {
            "name": "Métal",
            "_id": "65653ca45a42de53c3afde1b"
        },
        {
            "name": "Outil de fabrication",
            "_id": "65653ca45a42de53c3afde1c"
        },
        {
            "name": "Herbe",
            "_id": "656545d8ab199b09f6084a0b"
        },
        {
            "name": "Minéral",
            "_id": "6565485ff3ea4360262dbd80"
        },
        {
            "name": "Gemme rouge ciselée",
            "_id": "65654ab61b20bd5485cfe70b"
        },
        {
            "name": "Fruit",
            "_id": "6567bb10842acd2a6b1cefa6"
        },
        {
            "name": "Poisson",
            "_id": "6567bc26b47664e3a31bf987"
        },
        {
            "name": "Matériau d'amélioration",
            "_id": "656a74536c05ab62f95186e1"
        },
        {
            "name": "Ingrédient",
            "_id": "656a76d70fb1628887d179c3"
        },
        {
            "name": "Aliment",
            "_id": "656a7dfbcc3ca3a2da5d8feb"
        }
    ]
};

[
    {
        "name": "Diamant rouge brut",
        "categories": ["65653ca45a42de53c3afde16", "65653ca45a42de53c3afde17"],
        "isCraftable": false,
        "isFarmable": true,
        "_id": "65653d835a42de53c3afde20"
    },
    {
        "name": "Rubis brut",
        "categories": ["65653ca45a42de53c3afde16", "65653ca45a42de53c3afde17"],
        "isCraftable": false,
        "isFarmable": true,
        "_id": "65653f331b70334d5ea853fa"
    },
    {
        "name": "Topaze brut",
        "categories": ["65653ca45a42de53c3afde16", "65653ca45a42de53c3afde17"],
        "isCraftable": false,
        "isFarmable": true,
        "_id": "65653f331b70334d5ea853fb"
    },
    {
        "name": "Topaze",
        "categories": ["65653ca45a42de53c3afde16", "65653ca45a42de53c3afde1a"],
        "isCraftable": true,
        "isFarmable": false,
        "priceToCraft": 5000,
        "listObjectsToCraft": [
            [
                {
                    "object": "65653f331b70334d5ea853fb",
                    "quantity": 3
                }
            ]
        ],
        "_id": "65653fb51b70334d5ea853fd"
    },
    {
        "name": "Diamant rouge",
        "categories": ["65653ca45a42de53c3afde16", "65653ca45a42de53c3afde1a"],
        "isCraftable": true,
        "isFarmable": false,
        "priceToCraft": 10000,
        "listObjectsToCraft": [
            [
                {
                    "object": "65653d835a42de53c3afde20",
                    "quantity": 3
                }
            ]
        ],
        "_id": "65653fb51b70334d5ea853ff"
    },
    {
        "name": "Rubis",
        "categories": ["65653ca45a42de53c3afde16", "65653ca45a42de53c3afde1a"],
        "isCraftable": true,
        "isFarmable": false,
        "priceToCraft": 7500,
        "listObjectsToCraft": [
            [
                {
                    "object": "65653f331b70334d5ea853fa",
                    "quantity": 3
                }
            ]
        ],
        "_id": "65653fb51b70334d5ea85401"
    },
    {
        "name": "Branche d'arbre",
        "categories": ["65653ca45a42de53c3afde16"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "N",
        "_id": "656543704ab677fd9206c2f5"
    },
    {
        "name": "Branche d'arbre collante",
        "categories": ["65653ca45a42de53c3afde16"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "R",
        "_id": "656543704ab677fd9206c2f6"
    },
    {
        "name": "Branche d'arbre robuste",
        "categories": ["65653ca45a42de53c3afde16"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "M",
        "_id": "656543704ab677fd9206c2f7"
    },
    {
        "name": "Bois normal",
        "categories": ["65653ca45a42de53c3afde16", "65653ca45a42de53c3afde18"],
        "isCraftable": true,
        "isFarmable": false,
        "priceToCraft": 1500,
        "rarity": "M",
        "listObjectsToCraft": [
            [
                {
                    "object": "656543704ab677fd9206c2f6",
                    "quantity": 1
                },
                {
                    "object": "656543704ab677fd9206c2f5",
                    "quantity": 1
                }
            ],
            [
                {
                    "object": "656543704ab677fd9206c2f7",
                    "quantity": 1
                },
                {
                    "object": "656543704ab677fd9206c2f5",
                    "quantity": 3
                }
            ]
        ],
        "_id": "6565446b4ab677fd9206c2fe"
    },
    {
        "name": "Feuille dure",
        "categories": ["65653ca45a42de53c3afde16", "656545d8ab199b09f6084a0b"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "M",
        "_id": "656546c5114765dfeb5a4179"
    },
    {
        "name": "Racine de mandragore",
        "categories": ["65653ca45a42de53c3afde16", "656545d8ab199b09f6084a0b"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "M",
        "_id": "656546c5114765dfeb5a417a"
    },
    {
        "name": "Feuille",
        "categories": ["65653ca45a42de53c3afde16", "656545d8ab199b09f6084a0b"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "N",
        "_id": "656546c5114765dfeb5a417b"
    },
    {
        "name": "Ficelle normale",
        "categories": ["65653ca45a42de53c3afde16", "65653ca45a42de53c3afde19"],
        "isCraftable": true,
        "isFarmable": false,
        "priceToCraft": 1500,
        "rarity": "M",
        "listObjectsToCraft": [
            [
                {
                    "object": "656546c5114765dfeb5a4179",
                    "quantity": 1
                },
                {
                    "object": "656546c5114765dfeb5a417a",
                    "quantity": 1
                }
            ],
            [
                {
                    "object": "656546c5114765dfeb5a4179",
                    "quantity": 1
                },
                {
                    "object": "656546c5114765dfeb5a417b",
                    "quantity": 3
                }
            ]
        ],
        "_id": "656547d70f59485dc53ab259"
    },
    {
        "name": "Minerai d'orichalque",
        "categories": ["65653ca45a42de53c3afde16", "6565485ff3ea4360262dbd80"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "R",
        "_id": "65654894c53854a54a6c9882"
    },
    {
        "name": "Lingot d'orichalque",
        "categories": ["65653ca45a42de53c3afde16", "65653ca45a42de53c3afde1b"],
        "isCraftable": true,
        "isFarmable": false,
        "priceToCraft": 1500,
        "rarity": "R",
        "listObjectsToCraft": [
            [
                {
                    "object": "65654894c53854a54a6c9882",
                    "quantity": 3
                }
            ]
        ],
        "_id": "656548c063347bc299775200"
    },
    {
        "name": "Émeraude brut",
        "categories": ["65653ca45a42de53c3afde16", "65653ca45a42de53c3afde17"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "R",
        "_id": "6565494ee3aeac3822db4139"
    },
    {
        "name": "Émeraude",
        "categories": ["65653ca45a42de53c3afde16", "65653ca45a42de53c3afde1a"],
        "isCraftable": true,
        "isFarmable": false,
        "priceToCraft": 1500,
        "rarity": "R",
        "listObjectsToCraft": [
            [
                {
                    "object": "6565494ee3aeac3822db4139",
                    "quantity": 3
                }
            ]
        ],
        "_id": "6565496fe3aeac3822db413b"
    },
    {
        "name": "Outil de fabrication pour le ciselage premium",
        "categories": ["65653ca45a42de53c3afde16", "65653ca45a42de53c3afde1c"],
        "isCraftable": true,
        "isFarmable": false,
        "priceToCraft": 5000,
        "rarity": "R",
        "listObjectsToCraft": [
            [
                {
                    "object": "656548c063347bc299775200",
                    "quantity": 2
                },
                {
                    "object": "656547d70f59485dc53ab259",
                    "quantity": 2
                },
                {
                    "object": "6565446b4ab677fd9206c2fe",
                    "quantity": 3
                }
            ],
            [
                {
                    "object": "6565496fe3aeac3822db413b",
                    "quantity": 3
                },
                {
                    "object": "656547d70f59485dc53ab259",
                    "quantity": 2
                },
                {
                    "object": "6565446b4ab677fd9206c2fe",
                    "quantity": 3
                }
            ]
        ],
        "_id": "65654a575599fd3f3deb2dec"
    },
    {
        "name": "Gemme ciselée rouge (ultime)",
        "categories": ["65654ab61b20bd5485cfe70b"],
        "isCraftable": true,
        "isFarmable": false,
        "priceToCraft": 50000,
        "rarity": "L",
        "listObjectsToCraft": [
            [
                {
                    "object": "65653fb51b70334d5ea853ff",
                    "quantity": 300
                },
                {
                    "object": "65653fb51b70334d5ea85401",
                    "quantity": 300
                },
                {
                    "object": "65653fb51b70334d5ea853fd",
                    "quantity": 100
                },
                {
                    "object": "65654a575599fd3f3deb2dec",
                    "quantity": 60
                }
            ]
        ],
        "_id": "65654b47c50e0f761c7ce5cd"
    },
    {
        "name": "Aigue-marine brute",
        "categories": ["65653ca45a42de53c3afde16", "65653ca45a42de53c3afde17"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "M",
        "_id": "6567b739b54c68c4c22b4b8d"
    },
    {
        "name": "Saphir brut",
        "categories": ["65653ca45a42de53c3afde16", "65653ca45a42de53c3afde17"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "R",
        "_id": "6567b739b54c68c4c22b4b8e"
    },
    {
        "name": "Ambre brut",
        "categories": ["65653ca45a42de53c3afde16", "65653ca45a42de53c3afde17"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "M",
        "_id": "6567b739b54c68c4c22b4b8f"
    },
    {
        "name": "Péridot brut",
        "categories": ["65653ca45a42de53c3afde16", "65653ca45a42de53c3afde17"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "M",
        "_id": "6567b739b54c68c4c22b4b90"
    },
    {
        "name": "Grenat brut",
        "categories": ["65653ca45a42de53c3afde16", "65653ca45a42de53c3afde17"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "M",
        "_id": "6567b739b54c68c4c22b4b91"
    },
    {
        "name": "Opale brute",
        "categories": ["65653ca45a42de53c3afde16", "65653ca45a42de53c3afde17"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "N",
        "_id": "6567b739b54c68c4c22b4b92"
    },
    {
        "name": "Zircon brut",
        "categories": ["65653ca45a42de53c3afde16", "65653ca45a42de53c3afde17"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "N",
        "_id": "6567b739b54c68c4c22b4b93"
    },
    {
        "name": "Minerai d'obsidienne",
        "categories": ["65653ca45a42de53c3afde16", "6565485ff3ea4360262dbd80"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "H",
        "_id": "6567b739b54c68c4c22b4b94"
    },
    {
        "name": "Minerai de fer le plus dur",
        "categories": ["65653ca45a42de53c3afde16", "6565485ff3ea4360262dbd80"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "H",
        "_id": "6567b739b54c68c4c22b4b95"
    },
    {
        "name": "Minerai de platine incandescent",
        "categories": ["65653ca45a42de53c3afde16", "6565485ff3ea4360262dbd80"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "H",
        "_id": "6567b739b54c68c4c22b4b96"
    },
    {
        "name": "Minerai de fluorite",
        "categories": ["65653ca45a42de53c3afde16", "6565485ff3ea4360262dbd80"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "R",
        "_id": "6567b739b54c68c4c22b4b97"
    },
    {
        "name": "Minerai d'adamantium",
        "categories": ["65653ca45a42de53c3afde16", "6565485ff3ea4360262dbd80"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "R",
        "_id": "6567b739b54c68c4c22b4b98"
    },
    {
        "name": "Minerai de platine",
        "categories": ["65653ca45a42de53c3afde16", "6565485ff3ea4360262dbd80"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "R",
        "_id": "6567b739b54c68c4c22b4b99"
    },
    {
        "name": "Minerai de mythril",
        "categories": ["65653ca45a42de53c3afde16", "6565485ff3ea4360262dbd80"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "M",
        "_id": "6567b739b54c68c4c22b4b9a"
    },
    {
        "name": "Minerai d'or",
        "categories": ["65653ca45a42de53c3afde16", "6565485ff3ea4360262dbd80"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "M",
        "_id": "6567b739b54c68c4c22b4b9b"
    },
    {
        "name": "Minerai de cobalt",
        "categories": ["65653ca45a42de53c3afde16", "6565485ff3ea4360262dbd80"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "M",
        "_id": "6567b739b54c68c4c22b4b9c"
    },
    {
        "name": "Minerai de fer",
        "categories": ["65653ca45a42de53c3afde16", "6565485ff3ea4360262dbd80"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "N",
        "_id": "6567b739b54c68c4c22b4b9d"
    },
    {
        "name": "Minerai d'argent",
        "categories": ["65653ca45a42de53c3afde16", "6565485ff3ea4360262dbd80"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "N",
        "_id": "6567b739b54c68c4c22b4b9e"
    },
    // TODO HERE
    {
        "name": "Camomille Ensoleillée",
        "categories": ["65653ca45a42de53c3afde16", "656545d8ab199b09f6084a0b"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "H",
        "_id": "6567c241a7011a062a6ed644"
    },
    {
        "name": "Trèfle à 4 feuilles",
        "categories": ["65653ca45a42de53c3afde16", "656545d8ab199b09f6084a0b"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "R",
        "_id": "6567c241a7011a062a6ed645"
    },
    {
        "name": "Feuille éternelle",
        "categories": ["65653ca45a42de53c3afde16", "656545d8ab199b09f6084a0b"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "R",
        "_id": "6567c241a7011a062a6ed646"
    },
    {
        "name": "Bourgeon de camommille",
        "categories": ["65653ca45a42de53c3afde16", "656545d8ab199b09f6084a0b"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "M",
        "_id": "6567c241a7011a062a6ed647"
    },
    {
        "name": "Pétale de safran",
        "categories": ["65653ca45a42de53c3afde16", "656545d8ab199b09f6084a0b"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "M",
        "_id": "6567c241a7011a062a6ed648"
    },
    {
        "name": "Feuille de sauge",
        "categories": ["65653ca45a42de53c3afde16", "656545d8ab199b09f6084a0b"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "M",
        "_id": "6567c241a7011a062a6ed649"
    },
    {
        "name": "Tige de lavande",
        "categories": ["65653ca45a42de53c3afde16", "656545d8ab199b09f6084a0b"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "N",
        "_id": "6567c241a7011a062a6ed64a"
    },
    {
        "name": "Feuille de basilic",
        "categories": ["65653ca45a42de53c3afde16", "656545d8ab199b09f6084a0b"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "N",
        "_id": "6567c241a7011a062a6ed64b"
    },
    {
        "name": "Fruit magique mystique",
        "categories": ["65653ca45a42de53c3afde16", "6567bb10842acd2a6b1cefa6"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "H",
        "_id": "6567c241a7011a062a6ed64c"
    },
    {
        "name": "Mangue à double pulpe",
        "categories": ["65653ca45a42de53c3afde16", "6567bb10842acd2a6b1cefa6"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "H",
        "_id": "6567c241a7011a062a6ed64d"
    },
    {
        "name": "Mangue gelée",
        "categories": ["65653ca45a42de53c3afde16", "6567bb10842acd2a6b1cefa6"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "R",
        "_id": "6567c241a7011a062a6ed64e"
    },
    {
        "name": "Pomme sucrée",
        "categories": ["65653ca45a42de53c3afde16", "6567bb10842acd2a6b1cefa6"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "R",
        "_id": "6567c241a7011a062a6ed64f"
    },
    {
        "name": "Banane",
        "categories": ["65653ca45a42de53c3afde16", "6567bb10842acd2a6b1cefa6"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "R",
        "_id": "6567c241a7011a062a6ed650"
    },
    {
        "name": "Avocat",
        "categories": ["65653ca45a42de53c3afde16", "6567bb10842acd2a6b1cefa6"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "R",
        "_id": "6567c241a7011a062a6ed651"
    },
    {
        "name": "Pomme",
        "categories": ["65653ca45a42de53c3afde16", "6567bb10842acd2a6b1cefa6"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "M",
        "_id": "6567c241a7011a062a6ed652"
    },
    {
        "name": "Fraise",
        "categories": ["65653ca45a42de53c3afde16", "6567bb10842acd2a6b1cefa6"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "M",
        "_id": "6567c241a7011a062a6ed653"
    },
    {
        "name": "Kiwi",
        "categories": ["65653ca45a42de53c3afde16", "6567bb10842acd2a6b1cefa6"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "M",
        "_id": "6567c241a7011a062a6ed654"
    },
    {
        "name": "Mangue",
        "categories": ["65653ca45a42de53c3afde16", "6567bb10842acd2a6b1cefa6"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "N",
        "_id": "6567c241a7011a062a6ed655"
    },
    {
        "name": "Pêche",
        "categories": ["65653ca45a42de53c3afde16", "6567bb10842acd2a6b1cefa6"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "N",
        "_id": "6567c241a7011a062a6ed656"
    },
    {
        "name": "Pompano",
        "categories": ["65653ca45a42de53c3afde16", "6567bc26b47664e3a31bf987"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "M",
        "_id": "6567c241a7011a062a6ed657"
    },
    {
        "name": "Raie-aigle",
        "categories": ["65653ca45a42de53c3afde16", "6567bc26b47664e3a31bf987"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "H",
        "_id": "6567c241a7011a062a6ed658"
    },
    {
        "name": "Crabe",
        "categories": ["65653ca45a42de53c3afde16", "6567bc26b47664e3a31bf987"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "H",
        "_id": "6567c241a7011a062a6ed659"
    },
    {
        "name": "Crevette de rivière",
        "categories": ["65653ca45a42de53c3afde16", "6567bc26b47664e3a31bf987"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "H",
        "_id": "6567c241a7011a062a6ed65a"
    },
    {
        "name": "Grande carpe rayée",
        "categories": ["65653ca45a42de53c3afde16", "6567bc26b47664e3a31bf987"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "H",
        "_id": "6567c241a7011a062a6ed65b"
    },
    {
        "name": "Manquereau tranquille",
        "categories": ["65653ca45a42de53c3afde16", "6567bc26b47664e3a31bf987"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "H",
        "_id": "6567c241a7011a062a6ed65c"
    },
    {
        "name": "Chevalier lancier",
        "categories": ["65653ca45a42de53c3afde16", "6567bc26b47664e3a31bf987"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "R",
        "_id": "6567c241a7011a062a6ed65d"
    },
    {
        "name": "Mérou bossu",
        "categories": ["65653ca45a42de53c3afde16", "6567bc26b47664e3a31bf987"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "R",
        "_id": "6567c241a7011a062a6ed65e"
    },
    {
        "name": "Sardine argentée",
        "categories": ["65653ca45a42de53c3afde16", "6567bc26b47664e3a31bf987"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "R",
        "_id": "6567c241a7011a062a6ed65f"
    },
    {
        "name": "Mérou à rayures rouges",
        "categories": ["65653ca45a42de53c3afde16", "6567bc26b47664e3a31bf987"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "R",
        "_id": "6567c241a7011a062a6ed660"
    },
    {
        "name": "Mérou à rayures bleues",
        "categories": ["65653ca45a42de53c3afde16", "6567bc26b47664e3a31bf987"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "R",
        "_id": "6567c241a7011a062a6ed661"
    },
    {
        "name": "Mérou à rayures vertes",
        "categories": ["65653ca45a42de53c3afde16", "6567bc26b47664e3a31bf987"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "R",
        "_id": "6567c241a7011a062a6ed662"
    },
    {
        "name": "Mérou à rayures jaunes",
        "categories": ["65653ca45a42de53c3afde16", "6567bc26b47664e3a31bf987"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "R",
        "_id": "6567c241a7011a062a6ed663"
    },
    {
        "name": "Mérou à rayures noires",
        "categories": ["65653ca45a42de53c3afde16", "6567bc26b47664e3a31bf987"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "R",
        "_id": "6567c241a7011a062a6ed664"
    },
    {
        "name": "Carpe miroir",
        "categories": ["65653ca45a42de53c3afde16", "6567bc26b47664e3a31bf987"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "M",
        "_id": "6567c241a7011a062a6ed665"
    },
    {
        "name": "Sébaste aux yeux jaunes",
        "categories": ["65653ca45a42de53c3afde16", "6567bc26b47664e3a31bf987"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "M",
        "_id": "6567c241a7011a062a6ed666"
    },
    {
        "name": "Poisson-mandarin",
        "categories": ["65653ca45a42de53c3afde16", "6567bc26b47664e3a31bf987"],
        "isCraftable": false,
        "isFarmable": true,
        "rariry": "M",
        "_id": "6567c241a7011a062a6ed667"
    },
    {
        "name": "Grand barracuda",
        "categories": ["65653ca45a42de53c3afde16", "6567bc26b47664e3a31bf987"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "M",
        "_id": "6567c241a7011a062a6ed668"
    },
    {
        "name": "Sébaste-tigre",
        "categories": ["65653ca45a42de53c3afde16", "6567bc26b47664e3a31bf987"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "M",
        "_id": "6567c241a7011a062a6ed669"
    },
    {
        "name": "Poisson-chat",
        "categories": ["65653ca45a42de53c3afde16", "6567bc26b47664e3a31bf987"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "M",
        "_id": "6567c241a7011a062a6ed66a"
    },
    {
        "name": "Truite",
        "categories": ["65653ca45a42de53c3afde16", "6567bc26b47664e3a31bf987"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "M",
        "_id": "6567c241a7011a062a6ed66b"
    },
    {
        "name": "Achigan à grande bouche",
        "categories": ["65653ca45a42de53c3afde16", "6567bc26b47664e3a31bf987"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "M",
        "_id": "6567c241a7011a062a6ed66c"
    },
    {
        "name": "Saumon",
        "categories": ["65653ca45a42de53c3afde16", "6567bc26b47664e3a31bf987"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "M",
        "_id": "6567c241a7011a062a6ed66d"
    },
    {
        "name": "Alose à gésier",
        "categories": ["65653ca45a42de53c3afde16", "6567bc26b47664e3a31bf987"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "M",
        "_id": "6567c241a7011a062a6ed66e"
    },
    {
        "name": "Prochilodus bleu",
        "categories": ["65653ca45a42de53c3afde16", "6567bc26b47664e3a31bf987"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "M",
        "_id": "6567c241a7011a062a6ed66f"
    },
    {
        "name": "Perroquet bleu",
        "categories": ["65653ca45a42de53c3afde16", "6567bc26b47664e3a31bf987"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "M",
        "_id": "6567c241a7011a062a6ed670"
    },
    {
        "name": "Saumon masou",
        "categories": ["65653ca45a42de53c3afde16", "6567bc26b47664e3a31bf987"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "M",
        "_id": "6567c241a7011a062a6ed671"
    },
    {
        "name": "Ayu",
        "categories": ["65653ca45a42de53c3afde16", "6567bc26b47664e3a31bf987"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "M",
        "_id": "6567c241a7011a062a6ed672"
    },
    {
        "name": "Poisson-globe",
        "categories": ["65653ca45a42de53c3afde16", "6567bc26b47664e3a31bf987"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "M",
        "_id": "6567c241a7011a062a6ed673"
    },
    {
        "name": "Barbotte coréenne",
        "categories": ["65653ca45a42de53c3afde16", "6567bc26b47664e3a31bf987"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "M",
        "_id": "6567c241a7011a062a6ed674"
    },
    {
        "name": "Maquereau arc-en-ciel",
        "categories": ["65653ca45a42de53c3afde16", "6567bc26b47664e3a31bf987"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "M",
        "_id": "6567c241a7011a062a6ed675"
    },
    {
        "name": "Poisson-clown",
        "categories": ["65653ca45a42de53c3afde16", "6567bc26b47664e3a31bf987"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "M",
        "_id": "6567c241a7011a062a6ed676"
    },

    {
        "name": "Fretin",
        "categories": ["65653ca45a42de53c3afde16", "6567bc26b47664e3a31bf987"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "H",
        "_id": "6567c241a7011a062a6ed677"
    },
    {
        "name": "Poisson-lion",
        "categories": ["65653ca45a42de53c3afde16", "6567bc26b47664e3a31bf987"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "H",
        "_id": "6567c241a7011a062a6ed678"
    },
    {
        "name": "Pelote brute",
        "categories": ["65653ca45a42de53c3afde16"],
        "isCraftable": true,
        "isFarmable": false,
        "priceToCraft": 1500,
        "rarity": "M",
        "listObjectsToCraft": [
            [
                {
                    "object": "6567c241a7011a062a6ed64b",
                    "quantity": 2
                },
                {
                    "object": "656543704ab677fd9206c2f5",
                    "quantity": 2
                },
                {
                    "object": "6567c241a7011a062a6ed645",
                    "quantity": 1
                }
            ]
        ],
        "_id": "656a732da2abd4680a06a01c"
    },
    {
        "name": "Pelote utile",
        "categories": ["65653ca45a42de53c3afde16"],
        "isCraftable": true,
        "isFarmable": false,
        "priceToCraft": 2000,
        "rarity": "R",
        "listObjectsToCraft": [
            [
                {
                    "object": "6567c241a7011a062a6ed648",
                    "quantity": 6
                },
                {
                    "object": "656543704ab677fd9206c2f5",
                    "quantity": 6
                },
                {
                    "object": "6567c241a7011a062a6ed645",
                    "quantity": 2
                }
            ]
        ],
        "_id": "656a732da2abd4680a06a020"
    },
    {
        "name": "Pelote",
        "categories": ["65653ca45a42de53c3afde16"],
        "isCraftable": true,
        "isFarmable": false,
        "priceToCraft": 2500,
        "rarity": "H",
        "listObjectsToCraft": [
            [
                {
                    "object": "6567c241a7011a062a6ed649",
                    "quantity": 12
                },
                {
                    "object": "656543704ab677fd9206c2f5",
                    "quantity": 12
                },
                {
                    "object": "6567c241a7011a062a6ed645",
                    "quantity": 2
                }
            ]
        ],
        "_id": "656a732da2abd4680a06a024"
    },
    {
        "name": "Morceau de rune magique",
        "categories": ["65653ca45a42de53c3afde16"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "M",
        "_id": "656a732da2abd4680a06a028"
    },
    {
        "name": "Traces d'artefact",
        "categories": ["656a74536c05ab62f95186e1"],
        "isCraftable": true,
        "isFarmable": false,
        "priceToCraft": 100,
        "rarity": "N",
        "listObjectsToCraft": [
            [
                {
                    "object": "656a732da2abd4680a06a028",
                    "quantity": 100
                }
            ]
        ],
        "_id": "656a73edbe652a7dae795802"
    },
    {
        "name": "Restes d'artefact",
        "categories": ["656a74536c05ab62f95186e1"],
        "isCraftable": true,
        "isFarmable": false,
        "priceToCraft": 500,
        "rarity": "M",
        "listObjectsToCraft": [
            [
                {
                    "object": "656a73edbe652a7dae795802",
                    "quantity": 3
                }
            ]
        ],
        "_id": "656a74b140591e935e0b3dd4"
    },
    {
        "name": "Cristal d'artefact",
        "categories": ["656a74536c05ab62f95186e1"],
        "isCraftable": true,
        "isFarmable": false,
        "priceToCraft": 1000,
        "rarity": "R",
        "listObjectsToCraft": [
            [
                {
                    "object": "656a74b140591e935e0b3dd4",
                    "quantity": 3
                }
            ]
        ],
        "_id": "656a74f214b2f1e58a76fcec"
    },
    {
        "name": "Essence d'artefact",
        "categories": ["656a74536c05ab62f95186e1"],
        "isCraftable": true,
        "isFarmable": false,
        "priceToCraft": 3000,
        "rarity": "H",
        "listObjectsToCraft": [
            [
                {
                    "object": "656a74f214b2f1e58a76fcec",
                    "quantity": 2
                }
            ]
        ],
        "_id": "656a753fa1849561a55685b9"
    },
    {
        "name": "Farine",
        "categories": ["65653ca45a42de53c3afde16", "656a76d70fb1628887d179c3"],
        "isCraftable": false,
        "isFarmable": true,
        "priceToCraft": 100,
        "rarity": "M",
        "_id": "656a781b6ae81d4a7d33e2ed"
    },
    {
        "name": "Sucre",
        "categories": ["65653ca45a42de53c3afde16", "656a76d70fb1628887d179c3"],
        "isCraftable": false,
        "isFarmable": true,
        "priceToCraft": 100,
        "rarity": "M",
        "_id": "656a781b6ae81d4a7d33e2ee"
    },
    {
        "name": "Eau naturelle",
        "categories": ["65653ca45a42de53c3afde16", "656a76d70fb1628887d179c3"],
        "isCraftable": false,
        "isFarmable": true,
        "priceToCraft": 100,
        "rarity": "N",
        "_id": "656a781b6ae81d4a7d33e2ef"
    },
    {
        "name": "Huile d'olive",
        "categories": ["65653ca45a42de53c3afde16", "656a76d70fb1628887d179c3"],
        "isCraftable": false,
        "isFarmable": true,
        "priceToCraft": 100,
        "rarity": "R",
        "_id": "656a781b6ae81d4a7d33e2f0"
    },
    {
        "name": "Farine de premier choix",
        "categories": ["65653ca45a42de53c3afde16", "656a76d70fb1628887d179c3"],
        "isCraftable": true,
        "isFarmable": false,
        "priceToCraft": 500,
        "rarity": "H",
        "listObjectsToCraft": [
            [
                {
                    "object": "656a781b6ae81d4a7d33e2ed",
                    "quantity": 5
                },
                {
                    "object": "6567c241a7011a062a6ed648",
                    "quantity": 5
                },
                {
                    "object": "6567c241a7011a062a6ed646",
                    "quantity": 1
                }
            ]
        ],
        "_id": "656a7ea1a49ed9567dfe5a1b"
    },
    {
        "name": "Sucre de premier choix",
        "categories": ["65653ca45a42de53c3afde16", "656a76d70fb1628887d179c3"],
        "isCraftable": true,
        "isFarmable": false,
        "priceToCraft": 500,
        "rarity": "H",
        "listObjectsToCraft": [
            [
                {
                    "object": "656a781b6ae81d4a7d33e2ee",
                    "quantity": 5
                },
                {
                    "object": "6567c241a7011a062a6ed64f",
                    "quantity": 5
                },
                {
                    "object": "6567c241a7011a062a6ed650",
                    "quantity": 1
                }
            ]
        ],
        "_id": "656a7ea1a49ed9567dfe5a1f"
    },
    {
        "name": "Boeuf",
        "categories": ["65653ca45a42de53c3afde16"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "M",
        "_id": "656a7cad9ba1bb8732c74ac2"
    },
    {
        "name": "Agneau",
        "categories": ["65653ca45a42de53c3afde16"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "M",
        "_id": "656a7cad9ba1bb8732c74ac3"
    },
    {
        "name": "Porc",
        "categories": ["65653ca45a42de53c3afde16"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "M",
        "_id": "656a7cad9ba1bb8732c74ac4"
    },
    {
        "name": "Viande",
        "categories": ["65653ca45a42de53c3afde16"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "N",
        "_id": "656a7cad9ba1bb8732c74ac5"
    },
    {
        "name": "Poulet",
        "categories": ["65653ca45a42de53c3afde16"],
        "isCraftable": false,
        "isFarmable": true,
        "rarity": "N",
        "_id": "656a7cad9ba1bb8732c74ac6"
    },
    {
        "name": "Ingrédient tout-usage premium",
        "categories": ["65653ca45a42de53c3afde16", "656a76d70fb1628887d179c3"],
        "isCraftable": true,
        "isFarmable": false,
        "priceToCraft": 5000,
        "rarity": "H",
        "listObjectsToCraft": [
            [
                {
                    "object": "6567c241a7011a062a6ed651",
                    "quantity": 1
                },
                {
                    "object": "656a7cad9ba1bb8732c74ac3",
                    "quantity": 1
                }
            ],
            [
                {
                    "object": "656a7cad9ba1bb8732c74ac5",
                    "quantity": 1
                },
                {
                    "object": "656a7cad9ba1bb8732c74ac2",
                    "quantity": 1
                },
                {
                    "object": "6567c241a7011a062a6ed648",
                    "quantity": 3
                }
            ],
            [
                {
                    "object": "656a7cad9ba1bb8732c74ac6",
                    "quantity": 1
                },
                {
                    "object": "656a7cad9ba1bb8732c74ac2",
                    "quantity": 1
                },
                {
                    "object": "6567c241a7011a062a6ed649",
                    "quantity": 3
                }
            ]
        ],
        "_id": "656a7cf6177a429bb56f76cc"
    },
    {
        "name": "Gâteau au fruits",
        "categories": ["65653ca45a42de53c3afde16", "656a76d70fb1628887d179c3"],
        "isCraftable": true,
        "isFarmable": false,
        "priceToCraft": 20000,
        "rarity": "L",
        "listObjectsToCraft": [
            [
                {
                    "object": "6567c241a7011a062a6ed655",
                    "quantity": 10
                },
                {
                    "object": "6567c241a7011a062a6ed64f",
                    "quantity": 8
                },
                {
                    "object": "656a7ea1a49ed9567dfe5a1b",
                    "quantity": 5
                },
                {
                    "object": "656a7ea1a49ed9567dfe5a1f",
                    "quantity": 5
                }
            ]
        ],
        "_id": "656a7ed8820eb4e863a39466"
    },
    
]
