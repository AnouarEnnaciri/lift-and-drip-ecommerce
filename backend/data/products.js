
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
        url: "/images/bumper-plates.png",
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
    weight: 16,
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
];

module.exports = products;