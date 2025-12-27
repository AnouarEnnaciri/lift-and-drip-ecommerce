
const products = [
  // 1. Dumbbells
  {
    name: "Hex Dumbbell 20 KG Pair",
    description:
      "Hex dumbbells 20 KG, grip antidérapant, revêtement caoutchouc. Idéals pour l'entraînement full-body et home gym.",
    price:400,
    discountPrice: 349,
    countInStock: 40,
    sku: "DB-HX-5KG",
    category: "Strength Equipment",
    equipmentType: ["Dumbbell"],
    weightRange: "20 KG",
    images: [
      {
        url: "https://images.pexels.com/photos/29224210/pexels-photo-29224210.jpeg?_gl=1*pj8u80*_ga*MTgxMDA2NDQwNC4xNzYxNzY5NDk3*_ga_8JE65Q40S6*czE3NjQ5MzU3OTEkbzQkZzEkdDE3NjQ5MzU4MjMkajI4JGwwJGgw",
        altText: "Hex dumbbell 20 KG pair",
      },
    ],
    isFeatured: true,
    isPublished: true,
    rating: 4.8,
    numReviews: 22,
    tags: ["dumbbell", "strength", "home gym", "upper body"],
    metaTitle: "Hex Dumbbell 20 KG Pair | Lift & Drip",
    metaDescription:
      "Paire d’hex dumbbells 20 KG avec grip antidérapant pour entraînement de force à la maison ou en salle.",
    metaKeywords: "dumbbell, 20kg, hex, musculation",
    dimensions: {
      length: 25,
      width: 10,
      height: 10,
      unit: "cm",
    },
    weight: 20,
    weightUnit: "KG",
  },

  {
    name: "Hex Dumbbell 2.5KG and 5KG Pair", 
    description:
      "Paire hex dumbbells 2.5KG et 5KG pour exercices de force lourds: presses, rows, fentes,épaules.",
    price: 649,
    discountPrice: 599,
    countInStock: 35,
    sku: "DB-HX-10KG",
    category: "Strength Equipment",
    equipmentType: ["Dumbbell"],
    weightRange: "10 KG",
    images: [
      {
        url:"https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        altText: "Hex dumbbell 10 KG pair",
      },
    ],
    isFeatured: true,
    isPublished: true,
    rating: 4.9,
    numReviews: 30,
    tags: ["dumbbell", "strength", "push", "pull"],
    metaTitle: "Hex Dumbbell 10 KG Pair | Lift & Drip",
    metaDescription:
      "Paire d’hex dumbbells 10 KG pour entraînements de force lourds à la maison ou en salle.",
    metaKeywords: "dumbbell 10kg, musculation, hex",
    dimensions: {
      length: 28,
      width: 11,
      height: 11,
      unit: "cm",
    },
    weight: 10,
    weightUnit: "KG",
  },

  // 2. Barbell + plates
  {
    name: "Olympic Barbell 20 KG",
    description:
      "Barre olympique 20 KG, longueur 220 cm, diamètre 50 mm, idéale pour squat, deadlift, bench press.",
    price: 1999,
    discountPrice: 1799,
    countInStock: 15,
    sku: "BB-OLY-20KG",
    category: "Strength Equipment",
    equipmentType: ["Barbell"],
    weightRange: "20 KG",
    images: [
      {
        url: "https://images.pexels.com/photos/7811528/pexels-photo-7811528.jpeg?_gl=1*z1zgku*_ga*MTgxMDA2NDQwNC4xNzYxNzY5NDk3*_ga_8JE65Q40S6*czE3NjQ5MzU3OTEkbzQkZzEkdDE3NjQ5MzU5NDQkajUyJGwwJGgw",
        altText: "Olympic barbell 20 KG",
      },
    ],
    isFeatured: true,
    isPublished: true,
    rating: 4.7,
    numReviews: 18,
    tags: ["barbell", "squat", "deadlift", "bench"],
    metaTitle: "Barre Olympique 20 KG | Lift & Drip",
    metaDescription:
      "Barre olympique 20 KG robuste pour mouvements de base : squat, deadlift, bench press.",
    metaKeywords: "barre olympique, 20kg, powerlifting",
    dimensions: {
      length: 220,
      width: 5,
      height: 5,
      unit: "cm",
    },
    weight: 20,
    weightUnit: "KG",
  },

  {
    name: "Bumper Plates Set 2x10 KG",
    description:
      "Paire de bumper plates 10 KG avec trou 50 mm, adaptées à la barre olympique et à l’entrainement type cross-training.",
    price: 899,
    discountPrice: 799,
    countInStock: 25,
    sku: "PL-BMP-10KG",
    category: "Strength Equipment",
    equipmentType: ["Plate"],
    weightRange: "2 x 10 KG",
    images: [
      {
        url: "https://images.pexels.com/photos/5580068/pexels-photo-5580068.jpeg?_gl=1*10p3aja*_ga*MTgxMDA2NDQwNC4xNzYxNzY5NDk3*_ga_8JE65Q40S6*czE3NjY2NzkyNjYkbzYkZzEkdDE3NjY2ODAyNTMkajQ0JGwwJGgw",
        altText: "Bumper plates 10 KG pair",
      },
    ],
    isFeatured: false,
    isPublished: true,
    rating: 4.6,
    numReviews: 14,
    tags: ["plates", "bumper", "crossfit"],
    metaTitle: "Bumper Plates 2x10 KG | Lift & Drip",
    metaDescription:
      "Paire de bumper plates 10 KG pour travail explosif, cross-training et musculation.",
    metaKeywords: "bumper plates, disques 10kg, crossfit",
    dimensions: {
      length: 45,
      width: 45,
      height: 3,
      unit: "cm",
    },
    weight: 20,
    weightUnit: "KG",
  },

  // 3. Kettlebell
  {
    name: "Kettlebell 16 KG",
    description:
      "Kettlebell 16 KG en fonte avec poignée large pour swings, snatch, goblet squat et conditioning.",
    price: 549,
    discountPrice: 499,
    countInStock: 30,
    sku: "KB-16KG",
    category: "Strength Equipment",
    equipmentType: ["Kettlebell"],
    weightRange: "16 KG",
    images: [
      {
        url: "https://images.unsplash.com/photo-1554980555-7afb7c8795fe?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        altText: "Kettlebell 16 KG",
      },
    ],
    isFeatured: false,
    isPublished: true,
    rating: 4.8,
    numReviews: 26,
    tags: ["kettlebell", "conditioning", "strength"],
    metaTitle: "Kettlebell 16 KG | Lift & Drip",
    metaDescription:
      "Kettlebell 16 KG pour travail de puissance, stabilité et conditioning cardio.",
    metaKeywords: "kettlebell 16kg, conditioning, force",
    dimensions: {
      length: 20,
      width: 17,
      height: 28,
      unit: "cm",
    },
    weight: 15,
    weightUnit: "KG",
  },

  // 4. Bands & mobility
  {
    name: "Resistance Bands Set (Light to Heavy)",
    description:
      "Set de 4 bandes élastiques de résistance progressive (light à heavy) pour activation, mobilité et rehab.",
    price: 249,
    discountPrice: 199,
    countInStock: 60,
    sku: "RB-SET-4",
    category: "Conditioning Gear",
    equipmentType: ["Resistance Band"],
    weightRange: "Multi (Light–Heavy)",
    images: [
      {
        url: "https://images.unsplash.com/photo-1584827386916-b5351d3ba34b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        altText: "Resistance bands set 4 niveaux",
      },
    ],
    isFeatured: true,
    isPublished: true,
    rating: 4.5,
    numReviews: 40,
    tags: ["bandes", "mobility", "warmup", "rehab"],
    metaTitle: "Set de Resistance Bands | Lift & Drip",
    metaDescription:
      "Set de 4 bandes élastiques pour échauffement, mobilité, rehab et renforcement léger.",
    metaKeywords: "resistance band, élastique musculation",
    dimensions: {
      length: 208,
      width: 2,
      height: 0.5,
      unit: "cm",
    },
    weight: 1,
    weightUnit: "KG",
  },

  // 5. Cardio / conditioning
  {
    name: "Speed Jump Rope",
    description:
      "Corde à sauter speed en acier gainé, idéale pour double unders, HIIT, work capacity et sèche.",
    price: 129,
    discountPrice: 99,
    countInStock: 80,
    sku: "JR-SPEED",
    category: "Conditioning Gear",
    equipmentType: ["Jump Rope"],
    weightRange: "Ultra-Light",
    images: [
      {
        url: "https://plus.unsplash.com/premium_photo-1664529498751-9bcd541edb9f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        altText: "Speed jump rope",
      },
    ],
    isFeatured: false,
    isPublished: true,
    rating: 4.4,
    numReviews: 35,
    tags: ["cardio", "jump rope", "conditioning"],
    metaTitle: "Speed Jump Rope | Lift & Drip",
    metaDescription:
      "Corde à sauter speed pour HIIT, double unders et conditioning rapide.",
    metaKeywords: "corde à sauter, speed rope, HIIT",
    dimensions: {
      length: 300,
      width: 0.5,
      height: 0.5,
      unit: "cm",
    },
    weight: 0.3,
    weightUnit: "KG",
  },

  // 6. Accessoires lifting
  {
    name: "Lifting Straps (Pair)",
    description:
      "Straps de tirage rembourrés pour sécuriser la prise sur deadlift, rows lourds et shrugs.",
    price: 179,
    discountPrice: 149,
    countInStock: 50,
    sku: "ACC-STRAPS",
    category: "Accessories",
    equipmentType: ["Lifting Strap"],
    weightRange: "One Size",
    images: [
      {
         url: "/images/lifting-straps.png",
        altText: "Lifting straps pair",
      },
    ],
    isFeatured: false,
    isPublished: true,
    rating: 4.6,
    numReviews: 19,
    tags: ["accessories", "grip", "deadlift"],
    metaTitle: "Lifting Straps | Lift & Drip",
    metaDescription:
      "Straps de tirage pour sécuriser la prise sur les barres lourdes et protéger les avant-bras.",
    metaKeywords: "lifting straps, tirage, deadlift",
    dimensions: {
      length: 60,
      width: 4,
      height: 0.3,
      unit: "cm",
    },
    weight: 0.2,
    weightUnit: "KG",
  },

  {
    name: "Weightlifting Belt 10 mm",
    description:
      "Ceinture de powerlifting 10 mm en cuir, verrouillage à boucle, idéale pour squat et deadlift lourds.",
    price: 300,
    discountPrice: 100,
    countInStock: 20,
    sku: "ACC-BELT-10MM",
    category: "Accessories",
    equipmentType: ["Belt"],
    weightRange: "S–XL",
    images: [
      {
        url: "https://images.unsplash.com/photo-1586232710888-675866d80ad2?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        altText: "Weightlifting belt 10mm",
      },
    ],
    isFeatured: true,
    isPublished: true,
    rating: 4.9,
    numReviews: 21,
    tags: ["belt", "powerlifting", "core", "squat"],
    metaTitle: "Ceinture Powerlifting 10 mm | Lift & Drip",
    metaDescription:
      "Ceinture de powerlifting 10 mm pour sécuriser le bas du dos sur squat et deadlift lourds.",
    metaKeywords: "ceinture musculation, powerlifting belt",
    dimensions: {
      length: 110,
      width: 10,
      height: 1,
      unit: "cm",
    },
    weight: 1.2,
    weightUnit: "KG",
  },
  {
  name: "Slam Ball",
  description:
    "Slam ball  anti-rebond, parfait pour conditioning, explosivité, core et circuits HIIT.",
  price: 299,
  discountPrice: 249,
  countInStock: 35,
  sku: "SB-10KG",
  category: "Conditioning Gear",
  equipmentType: ["Slam Ball"],
  images: [
    {
      url: "https://images.unsplash.com/photo-1685633224704-161d7032379e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      altText: "Slam ball",
    },
  ],
  isFeatured: false,
  isPublished: true,
  rating: 4.6,
  numReviews: 12,
  tags: ["slam ball", "conditioning", "hiit", "core"],
  metaTitle: "Slam Ball  | Lift & Drip",
  metaDescription:
    "Slam ball anti-rebond pour entraînements HIIT, core et explosivité.",
  metaKeywords: "slam ball 10kg, conditioning, hiit",
  dimensions: {
    length: 23,
    width: 23,
    height: 23,
    unit: "cm",
  },
},

  
  {
    name: "Home Gym Starter Bundle",
    description:
      "Pack starter pour home gym : paire de dumbbells 5 KG, set de bandes élastiques et speed rope.",
    price: 999,
    discountPrice: 899,
    countInStock: 10,
    sku: "BNDL-HOME-START",
    category: "Bundles",
    equipmentType: ["Dumbbell", "Resistance Band", "Jump Rope"],
    weightRange: "Light–Medium",
    images: [
      {
        url: "https://images.unsplash.com/photo-1697129392091-d08875930fec?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        altText: "Home gym starter bundle",
      },
    ],
    isFeatured: true,
    isPublished: true,
    rating: 4.7,
    numReviews: 16,
    tags: ["bundle", "home gym", "starter", "conditioning"],
    metaTitle: "Pack Home Gym Starter | Lift & Drip",
    metaDescription:
      "Bundle complet pour démarrer un home gym : dumbbells 5 KG, bandes de résistance et corde speed.",
    metaKeywords: "home gym pack, bundle musculation",
    dimensions: {
      length: 60,
      width: 40,
      height: 30,
      unit: "cm",
    },
    weight: 12,
    weightUnit: "KG",
  },

// Jump Rope (add 1)
  {
    name: "Adjustable Speed Rope (Pro)",
    description:
      "Corde speed réglable avec roulements fluides. Parfaite pour double unders, HIIT et work capacity.",
    price: 199,
    discountPrice: 169,
    countInStock: 70,
    sku: "JR-PRO-SPEED",
    category: "Conditioning Gear",
    equipmentType: ["Jump Rope"],
    weightRange: "Ultra-Light",
    images: [
      {
        url: "https://images.pexels.com/photos/7187951/pexels-photo-7187951.jpeg",
        altText: "Adjustable speed rope",
      },
    ],
    isFeatured: true,
    isPublished: true,
    rating: 4.6,
    numReviews: 24,
    tags: ["jump rope", "hiit", "double unders"],
    metaTitle: "Adjustable Speed Rope | Lift & Drip",
    metaDescription:
      "Corde speed pro réglable, idéale HIIT et double unders.",
    metaKeywords: "speed rope, double unders, hiit",
    dimensions: {
      length: 300,
      width: 1,
      height: 1,
      unit: "cm",
    },
    weight: 0.25,
    weightUnit: "KG",
  },

  // Resistance Band (add 1)
  {
    name: "Mini Bands Set (3 Levels)",
    description:
      "Set de mini bandes (light/medium/heavy) pour activation, mobilité, échauffement et rehab.",
    price: 149,
    discountPrice: 119,
    countInStock: 90,
    sku: "RB-MINI-3",
    category: "Conditioning Gear",
    equipmentType: ["Resistance Band"],
    weightRange: "Light–Heavy",
    images: [
      {
        url: "https://images.unsplash.com/photo-1605296867724-fa87a8ef53fd?q=80&w=1400&auto=format&fit=crop",
        altText: "Mini resistance bands set",
      },
    ],
    isFeatured: false,
    isPublished: true,
    rating: 4.5,
    numReviews: 27,
    tags: ["bandes", "warmup", "mobility"],
    metaTitle: "Mini Bands Set | Lift & Drip",
    metaDescription:
      "Mini bandes pour activation et mobilité (3 niveaux).",
    metaKeywords: "mini bands, resistance band, mobilité",
    dimensions: {
      length: 30,
      width: 5,
      height: 0.3,
      unit: "cm",
    },
    weight: 0.2,
    weightUnit: "KG",
  },

  // Medicine Ball (add 2)
  {
    name: "Medicine Ball 6 KG",
    description:
      "Medicine ball 6 KG avec surface texturée pour meilleure prise, idéal pour core training et exercices fonctionnels.",
    price: 349,
    discountPrice: 299,
    countInStock: 40,
    sku: "MB-6KG-TEXT",
    category: "Conditioning Gear",
    equipmentType: ["Medicine Ball"],
    weightRange: "6 KG",
    images: [
      {
        url: "https://images.pexels.com/photos/27810157/pexels-photo-27810157.jpeg",
        altText: "Medicine ball 6kg",
      },
    ],
    isFeatured: true,
    isPublished: true,
    rating: 4.7,
    numReviews: 19,
    tags: ["medicine ball", "core", "functional", "conditioning"],
    metaTitle: "Medicine Ball 6 KG | Lift & Drip",
    metaDescription:
      "Medicine ball 6 KG pour entraînement fonctionnel, core et exercices de puissance.",
    metaKeywords: "medicine ball 6kg, core, conditioning",
    dimensions: {
      length: 25,
      width: 25,
      height: 25,
      unit: "cm",
    },
    weight: 6,
    weightUnit: "KG",
  },

  {
    name: "Medicine Ball 10 KG",
    description:
      "Medicine ball lourd 10 KG pour puissance, wall balls, slams et rotational exercises.",
    price: 449,
    discountPrice: 399,
    countInStock: 25,
    sku: "MB-10KG-HEAVY",
    category: "Conditioning Gear",
    equipmentType: ["Medicine Ball"],
    weightRange: "10 KG",
    images: [
      {
        url: "https://images.pexels.com/photos/6455801/pexels-photo-6455801.jpeg",
        altText: "Medicine ball 10kg",
      },
    ],
    isFeatured: false,
    isPublished: true,
    rating: 4.9,
    numReviews: 15,
    tags: ["medicine ball", "power", "conditioning"],
    metaTitle: "Medicine Ball 10 KG | Lift & Drip",
    metaDescription:
      "Medicine ball 10 KG pour entraînements de puissance avancés et exercices fonctionnels lourds.",
    metaKeywords: "medicine ball 10kg, wall ball, conditioning",
    dimensions: {
      length: 28,
      width: 28,
      height: 28,
      unit: "cm",
    },
    weight: 10,
    weightUnit: "KG",
  },

  // Battle Rope (add 2)
  {
    name: "Battle Rope 10m (38mm)",
    description:
      "Battle rope 10m diamètre 38mm, idéale pour HIIT, endurance, épaules et circuits conditioning.",
    price: 899,
    discountPrice: 799,
    countInStock: 20,
    sku: "BR-10M-38",
    category: "Conditioning Gear",
    equipmentType: ["Battle Rope"],
    weightRange: "10m / 38mm",
    images: [
      {
        url: "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?q=80&w=1400&auto=format&fit=crop",
        altText: "Battle rope 10m",
      },
    ],
    isFeatured: true,
    isPublished: true,
    rating: 4.5,
    numReviews: 24,
    tags: ["battle rope", "hiit", "conditioning"],
    metaTitle: "Battle Rope 10m | Lift & Drip",
    metaDescription:
      "Battle rope 10m pour HIIT, cardio intense et endurance musculaire.",
    metaKeywords: "battle rope, corde ondulatoire, hiit",
    dimensions: {
      length: 1000,
      width: 3.8,
      height: 3.8,
      unit: "cm",
    },
    weight: 12,
    weightUnit: "KG",
  },

  {
    name: "Battle Rope 15m (50mm)",
    description:
      "Battle rope 15m diamètre 50mm pour conditioning lourd et work capacity avancé.",
    price: 1299,
    discountPrice: 1149,
    countInStock: 12,
    sku: "BR-15M-50",
    category: "Conditioning Gear",
    equipmentType: ["Battle Rope"],
    weightRange: "15m / 50mm",
    images: [
      {
        url: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?q=80&w=1400&auto=format&fit=crop",
        altText: "Battle rope 15m",
      },
    ],
    isFeatured: false,
    isPublished: true,
    rating: 4.7,
    numReviews: 11,
    tags: ["battle rope", "conditioning", "advanced"],
    metaTitle: "Battle Rope 15m | Lift & Drip",
    metaDescription:
      "Battle rope 15m pour conditioning intense et entraînement avancé.",
    metaKeywords: "battle rope 15m, conditioning, corde lourde",
    dimensions: {
      length: 1500,
      width: 5,
      height: 5,
      unit: "cm",
    },
    weight: 18,
    weightUnit: "KG",
  },

  // Slam Ball (add 1)
  {
    name: "Slam Ball 15 KG",
    description:
      "Slam ball lourd 15 KG anti-rebond pour explosivité, conditioning avancé et circuits HIIT.",
    price: 399,
    discountPrice: 349,
    countInStock: 20,
    sku: "SB-15KG",
    category: "Conditioning Gear",
    equipmentType: ["Slam Ball"],
    weightRange: "15 KG",
    images: [
      {
        url: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=1400&auto=format&fit=crop",
        altText: "Slam ball 15kg",
      },
    ],
    isFeatured: true,
    isPublished: true,
    rating: 4.8,
    numReviews: 18,
    tags: ["slam ball", "conditioning", "power", "hiit"],
    metaTitle: "Slam Ball 15 KG | Lift & Drip",
    metaDescription:
      "Slam ball 15 KG anti-rebond pour explosivité et conditioning.",
    metaKeywords: "slam ball 15kg, conditioning, hiit",
    dimensions: {
      length: 30,
      width: 30,
      height: 30,
      unit: "cm",
    },
    weight: 15,
    weightUnit: "KG",
  },

  // Pull Up Bar (add 2)
  {
    name: "Doorway Pull-Up Bar",
    description:
      "Barre de traction pour porte, installation rapide. Idéale pour tractions, chin-ups et home gym.",
    price: 249,
    discountPrice: 199,
    countInStock: 50,
    sku: "PU-DOORWAY",
    category: "Conditioning Gear",
    equipmentType: ["Pull Up Bar"],
    weightRange: "Doorway",
    images: [
      {
        url: "https://images.pexels.com/photos/7672109/pexels-photo-7672109.jpeg",
        altText: "Doorway pull-up bar",
      },
    ],
    isFeatured: false,
    isPublished: true,
    rating: 4.4,
    numReviews: 22,
    tags: ["pull up bar", "home gym", "back"],
    metaTitle: "Doorway Pull-Up Bar | Lift & Drip",
    metaDescription:
      "Barre traction pour porte, rapide à installer pour home gym.",
    metaKeywords: "pull up bar, barre traction porte, dos",
    dimensions: {
      length: 100,
      width: 5,
      height: 5,
      unit: "cm",
    },
    weight: 2.5,
    weightUnit: "KG",
  },

  {
    name: "Wall-Mounted Pull-Up Bar",
    description:
      "Barre de traction murale stable pour entraînement sérieux : pull-ups, chin-ups, abdos suspendus.",
    price: 499,
    discountPrice: 449,
    countInStock: 18,
    sku: "PU-WALL-MOUNT",
    category: "Conditioning Gear",
    equipmentType: ["Pull Up Bar"],
    weightRange: "Wall Mounted",
    images: [
      {
        url: "https://images.pexels.com/photos/7187880/pexels-photo-7187880.jpeg",
        altText: "Wall mounted pull-up bar",
      },
    ],
    isFeatured: true,
    isPublished: true,
    rating: 4.6,
    numReviews: 15,
    tags: ["pull up bar", "strength", "home gym"],
    metaTitle: "Wall Pull-Up Bar | Lift & Drip",
    metaDescription:
      "Barre traction murale stable pour entraînement du dos et abdos.",
    metaKeywords: "pull up bar murale, traction, home gym",
    dimensions: {
      length: 110,
      width: 50,
      height: 30,
      unit: "cm",
    },
    weight: 6,
    weightUnit: "KG",
  },
  // STRENGTH EQUIPMENT - ADDITIONS
 {
  name: "Hex Dumbbell 10 KG Pair",
  description:
    "Paire d'hex dumbbells 10 KG, parfaite pour progression, full-body et home gym.",
  price: 449,
  discountPrice: 399,
  countInStock: 50,
  sku: "DB-HE-10KG",
  category: "Strength Equipment",
  equipmentType: ["Dumbbell"],
  weightRange: "10 KG",
  images: [
    {
      url: "https://images.pexels.com/photos/4753994/pexels-photo-4753994.jpeg?_gl=1*zadsqr*_ga*MTgxMDA2NDQwNC4xNzYxNzY5NDk3*_ga_8JE65Q40S6*czE3NjY2NzkyNjYkbzYkZzEkdDE3NjY2Nzk0OTUkajU0JGwwJGgw",
      altText: "Hex dumbbell 10kg pair",
    },
  ],
  isFeatured: true,
  isPublished: true,
  rating: 4.8,
  numReviews: 35,
  tags: ["dumbbell", "strength", "home gym"],
  metaTitle: "Hex Dumbbell 10 KG Pair | Lift & Drip",
  metaDescription:
    "Paire d'hex dumbbells 10 KG, idéale pour progression et entraînement complet.",
  metaKeywords: "dumbbell 10kg, hex, musculation",
  dimensions: {
    length: 24,
    width: 9.5,
    height: 9.5,
    unit: "cm",
  },
  weight: 10,
  weightUnit: "KG",
},


  // Barbells 
  {
    name: "Women's Olympic Barbell 15 KG",
    description:
      "Barre olympique 15 KG (diamètre 25mm) pour meilleure prise, idéale pour technique et mouvements olympiques.",
    price: 1699,
    discountPrice: 1499,
    countInStock: 20,
    sku: "BB-W-15KG",
    category: "Strength Equipment",
    equipmentType: ["Barbell"],
    weightRange: "15 KG",
    images: [
      {
        url: "https://images.pexels.com/photos/32610337/pexels-photo-32610337.jpeg?_gl=1*1r3uqdq*_ga*MTgxMDA2NDQwNC4xNzYxNzY5NDk3*_ga_8JE65Q40S6*czE3NjY2NzkyNjYkbzYkZzEkdDE3NjY2Nzk5NTQkajM4JGwwJGgw",
        altText: "Women's olympic barbell 15kg",
      },
    ],
    isFeatured: true,
    isPublished: true,
    rating: 4.9,
    numReviews: 27,
    tags: ["barbell", "olympic", "technique"],
    metaTitle: "Women's Olympic Barbell 15 KG | Lift & Drip",
    metaDescription:
      "Barre olympique 15 KG avec diamètre réduit pour meilleure prise et technique.",
    metaKeywords: "barre olympique 15kg, technique",
    dimensions: {
      length: 210,
      width: 2.5,
      height: 2.5,
      unit: "cm",
    },
    weight: 15,
    weightUnit: "KG",
  },

  {
    name: "Powerlifting Barbell 20 KG (Stiff)",
    description:
      "Barre de powerlifting 20 KG rigide (flex minimal), idéale pour squat et bench press lourd.",
    price: 2199,
    discountPrice: 1999,
    countInStock: 12,
    sku: "BB-PL-20KG",
    category: "Strength Equipment",
    equipmentType: ["Barbell"],
    weightRange: "20 KG",
    images: [
      {
        url: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?_gl=1*5xj6ly*_ga*MTgxMDA2NDQwNC4xNzYxNzY5NDk3*_ga_8JE65Q40S6*czE3NjY2NzkyNjYkbzYkZzEkdDE3NjY2ODAwMDckajUwJGwwJGgw",
        altText: "Powerlifting barbell 20kg",
      },
    ],
    isFeatured: false,
    isPublished: true,
    rating: 4.7,
    numReviews: 14,
    tags: ["barbell", "powerlifting", "competition"],
    metaTitle: "Powerlifting Barbell 20 KG | Lift & Drip",
    metaDescription:
      "Barre de powerlifting 20 KG rigide, conçue pour charges lourdes et stabilité.",
    metaKeywords: "powerlifting barbell 20kg, stiff bar",
    dimensions: {
      length: 220,
      width: 5,
      height: 5,
      unit: "cm",
    },
    weight: 20,
    weightUnit: "KG",
  },

  // Plates (add 2)
  {
    name: "Bumper Plates Set 2x20 KG",
    description:
      "Paire de bumper plates 20 KG, adaptées à la barre olympique et à l’entraînement type cross-training.",
    price: 1199,
    discountPrice: 1099,
    countInStock: 22,
    sku: "PL-BGP-20KG",
    category: "Strength Equipment",
    equipmentType: ["Plate"],
    weightRange: "2 x 20 KG",
    images: [
      {
        url: "https://images.pexels.com/photos/4793236/pexels-photo-4793236.jpeg?_gl=1*1s66fg1*_ga*MTgxMDA2NDQwNC4xNzYxNzY5NDk3*_ga_8JE65Q40S6*czE3NjY2NzkyNjYkbzYkZzEkdDE3NjY2ODAwOTQkajIzJGwwJGgw",
        altText: "Bumper plates 20 KG pair",
      },
    ],
    isFeatured: false,
    isPublished: true,
    rating: 4.6,
    numReviews: 18,
    tags: ["plates", "bumper", "crossfit"],
    metaTitle: "Bumper Plates 2x20 KG | Lift & Drip",
    metaDescription:
      "Paire de bumper plates 20 KG pour progression et entraînement cross-training.",
    metaKeywords: "bumper plates 20kg, disques",
    dimensions: {
      length: 45,
      width: 45,
      height: 4.5,
      unit: "cm",
    },
    weight: 40,
    weightUnit: "KG",
  },

  {
    name: "Olympic Plate Set (4x5 KG, 2x10 KG)",
    description:
      "Set de disques olympiques : 4x5 KG + 2x10 KG pour progression graduelle en strength training.",
    price: 1899,
    discountPrice: 1699,
    countInStock: 15,
    sku: "PL-SET-40KG",
    category: "Strength Equipment",
    equipmentType: ["Plate"],
    weightRange: "40 KG Total",
    images: [
      {
        url: "https://images.pexels.com/photos/4793229/pexels-photo-4793229.jpeg?_gl=1*pt0h6z*_ga*MTgxMDA2NDQwNC4xNzYxNzY5NDk3*_ga_8JE65Q40S6*czE3NjY2NzkyNjYkbzYkZzEkdDE3NjY2ODAzMjAkajU1JGwwJGgw",
        altText: "Olympic plate starter set",
      },
    ],
    isFeatured: true,
    isPublished: true,
    rating: 4.9,
    numReviews: 33,
    tags: ["plate set", "olympic", "progression"],
    metaTitle: "Olympic Plate Starter Set | Lift & Drip",
    metaDescription:
      "Set complet de disques olympiques pour progression graduelle en entraînement de force.",
    metaKeywords: "plate set, olympic plates, 40kg",
    dimensions: {
      length: 50,
      width: 50,
      height: 30,
      unit: "cm",
    },
    weight: 40,
    weightUnit: "KG",
  },

  // Benches (add 2)
  {
    name: "Adjustable Weight Bench 0-90°",
    description:
      "Banc réglable 0-90° pour développé couché, incliné, assis épaules et travail complet.",
    price: 1299,
    discountPrice: 1099,
    countInStock: 25,
    sku: "BENCH-ADJ-090",
    category: "Strength Equipment",
    equipmentType: ["Bench"],
    weightRange: "Supports 300 KG",
    images: [
      {
        url: "https://images.pexels.com/photos/4488764/pexels-photo-4488764.jpeg?_gl=1*pex6qw*_ga*MTgxMDA2NDQwNC4xNzYxNzY5NDk3*_ga_8JE65Q40S6*czE3NjY2NzkyNjYkbzYkZzEkdDE3NjY2ODA0NjckajQyJGwwJGgw",
        altText: "Adjustable weight bench",
      },
    ],
    isFeatured: true,
    isPublished: true,
    rating: 4.8,
    numReviews: 42,
    tags: ["bench", "adjustable", "strength"],
    metaTitle: "Adjustable Weight Bench | Lift & Drip",
    metaDescription:
      "Banc de musculation réglable 0-90° pour tous les angles d'entraînement.",
    metaKeywords: "bench adjustable, banc musculation",
    dimensions: {
      length: 130,
      width: 30,
      height: 45,
      unit: "cm",
    },
    weight: 25,
    weightUnit: "KG",
  },

  {
    name: "Flat Weight Bench (Heavy Duty)",
    description:
      "Banc plat renforcé pour charges lourdes. Parfait pour bench press, haltères et home gym sérieux.",
    price: 899,
    discountPrice: 799,
    countInStock: 30,
    sku: "BENCH-FLAT-HD",
    category: "Strength Equipment",
    equipmentType: ["Bench"],
    weightRange: "Supports 500 KG",
    images: [
      {
        url: "https://images.pexels.com/photos/4488754/pexels-photo-4488754.jpeg?_gl=1*qf7avl*_ga*MTgxMDA2NDQwNC4xNzYxNzY5NDk3*_ga_8JE65Q40S6*czE3NjY2NzkyNjYkbzYkZzEkdDE3NjY2ODA1OTQkajI0JGwwJGgw",
        altText: "Flat weight bench heavy duty",
      },
    ],
    isFeatured: false,
    isPublished: true,
    rating: 4.9,
    numReviews: 38,
    tags: ["bench", "flat", "powerlifting"],
    metaTitle: "Flat Weight Bench Heavy Duty | Lift & Drip",
    metaDescription:
      "Banc plat renforcé supportant charges lourdes, idéal powerlifting et home gym.",
    metaKeywords: "flat bench, heavy duty bench",
    dimensions: {
      length: 120,
      width: 30,
      height: 45,
      unit: "cm",
    },
    weight: 30,
    weightUnit: "KG",
  },

  // Kettlebell (add 1)
  {
    name: "Kettlebell 24 KG",
    description:
      "Kettlebell 24 KG en fonte, poignée large. Idéal pour swings puissants, snatch et conditioning lourd.",
    price: 699,
    discountPrice: 649,
    countInStock: 18,
    sku: "KB-24KG",
    category: "Strength Equipment",
    equipmentType: ["Kettlebell"],
    weightRange: "24 KG",
    images: [
      {
        url: "https://images.pexels.com/photos/4162455/pexels-photo-4162455.jpeg",
        altText: "Kettlebell 24 KG",
      },
    ],
    isFeatured: true,
    isPublished: true,
    rating: 4.7,
    numReviews: 16,
    tags: ["kettlebell", "strength", "conditioning"],
    metaTitle: "Kettlebell 24 KG | Lift & Drip",
    metaDescription:
      "Kettlebell 24 KG pour puissance, explosivité et conditioning avancé.",
    metaKeywords: "kettlebell 24kg, swings, conditioning",
    dimensions: {
      length: 22,
      width: 19,
      height: 32,
      unit: "cm",
    },
    weight: 24,
    weightUnit: "KG",
  },

  // Racks (add 2)
  {
    name: "Rack Weights",
    description:
      "Rack avec barre de traction intégrée, safety bars ajustables, idéal pour home gym.",
    price: 2499,
    discountPrice: 2199,
    countInStock: 12,
    sku: "RACK-RACK-PU",
    category: "Strength Equipment",
    equipmentType: ["Rack"],
    weightRange: "Supports 400 KG",
    images: [
      {
        url: "https://images.pexels.com/photos/4162451/pexels-photo-4162451.jpeg",
        altText: "rack",
      },
    ],
    isFeatured: true,
    isPublished: true,
    rating: 4.9,
    numReviews: 29,
    tags: ["rack", "home gym", "power rack"],
    metaTitle: "Rack Weights | Lift & Drip",
    metaDescription:
      "Rack complet avec barre de traction intégrée et safety bars ajustables.",
    metaKeywords: "rack, power rack, home gym",
    dimensions: {
      length: 140,
      width: 120,
      height: 220,
      unit: "cm",
    },
    weight: 65,
    weightUnit: "KG",
  },

  {
    name: "Power Rack ",
    description:
      "Power rack avec station lat pulldown intégrée. Solution complète pour full-body en home gym.",
    price: 3499,
    discountPrice: 3199,
    countInStock: 8,
    sku: "RACK-POWRACK-LAT",
    category: "Strength Equipment",
    equipmentType: ["Rack"],
    weightRange: "Supports 500 KG",
    images: [
      {
        url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop",
        altText: "Power rack ",
      },
    ],
    isFeatured: false,
    isPublished: true,
    rating: 4.8,
    numReviews: 14,
    tags: ["power rack", "lat pulldown", "home gym"],
    metaTitle: "Power Rack  | Lift & Drip",
    metaDescription:
      "Power rack professionnel avec lat pulldown pour entraînement complet.",
    metaKeywords: "power rack, lat pulldown, home gym",
    dimensions: {
      length: 200,
      width: 150,
      height: 220,
      unit: "cm",
    },
    weight: 120,
    weightUnit: "KG",
  },
];

module.exports = products;