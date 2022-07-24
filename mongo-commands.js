

db.movie.insertMany([
    {
      id: "100",
      name: "RRR",
      poster:
        "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
      rating: 8.8,
      summary:
        "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
      trailer: "https://www.youtube.com/embed/f_vbAtFSEc0"
    },
    {
      id: "101",
      name: "Iron man 2",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 7,
      summary:
        "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
      trailer: "https://www.youtube.com/embed/wKtcmiifycU"
    },
    {
      id: "102",
      name: "No Country for Old Men",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      rating: 8.1,
      summary:
        "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
      trailer: "https://www.youtube.com/embed/38A__WT3-o0"
    },
    {
      id: "103",
      name: "Jai Bhim",
      poster:
        "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      summary:
        "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      rating: 8.8,
      trailer: "https://www.youtube.com/embed/nnXpbTFrqXA"
    },
    {
      id: "104",
      name: "The Avengers",
      rating: 8,
      summary:
        "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
      poster:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
      trailer: "https://www.youtube.com/embed/eOrNdBpGMv8"
    },
    {
      id: "105",
      name: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      summary:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
    },
    {
      id: "106",
      name: "Baahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      summary:
        "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
      trailer: "https://www.youtube.com/embed/sOEg_YZQsTI"
    },
    {
      id: "107",
      name: "Ratatouille",
      poster:
        "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating: 8,
      summary:
        "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
      trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w"
    }
  ]
  )


db.movies.find({});
db.movies.find({}).pretty();
db.movies.find({}).count();

db.movies.find({
    rating: {$gt: 8.5}
}).pretty();

//Projection -> inclusion and exclusion
//inclusion
db.movies.find({}, {name: 1, rating: 1}).pretty();


//exclusion
db.movies.find({}, {summary: 0, poster: 0}).pretty();

//error
db.movies.find({}, {name: 1, rating: 0}).pretty();

//exception
db.movies.find({}, {_id:0, name: 1, rating: 1}).pretty();

//sorting
db.movies.find({}).sort({rating: 1}).pretty();

db.movies.find({}, {_id:0, name: 1, rating: 1}).sort({rating: 1});

db.movies.find({}, {_id:0, name: 1, rating: 1}).sort({rating: -1});

db.movies.find({}, {_id:0, name: 1, rating: 1}).sort({rating: 1, name: 1});

db.movies.find({}, {_id:0, name: 1, rating: 1}).sort({rating: -1, name: 1}).limit(3);

db.movies.find({}, {_id:0, name: 1, rating: 1}).sort({rating: -1}).limit(3).skip(3);


db.orders.insertMany([
  { _id: 0, productName: "Steel beam", status: "new", quantity: 10 },
  { _id: 1, productName: "Steel beam", status: "urgent", quantity: 20 },
  { _id: 2, productName: "Steel beam", status: "urgent", quantity: 30 },
  { _id: 3, productName: "Iron rod", status: "new", quantity: 15 },
  { _id: 4, productName: "Iron rod", status: "urgent", quantity: 50 },
  { _id: 5, productName: "Iron rod", status: "urgent", quantity: 10 }
]
);

db.orders.aggregate([
  {$match: {status: "urgent"}}
]);

db.orders.aggregate([
  {$match: {status: "urgent"}},
  {$group: {_id: "$productName"}}
]);


db.orders.aggregate([
  {$match: {status: "urgent"}}, //stage I
  {$group: {_id: "$productName", totalUrgentQuantity: {$sum: "$quantity"}}} //stage II
]);


//update

db.movies.updateMany({}, { $set: {language: "English"} });

db.movies.find({}, {_id:0, name: 1, language: 1});

db.movies.find( { name: { $in: ["RRR", "Baahubali"]}});

db.movies.updateMany( 
  { name: { $in: ["RRR", "Baahubali"] } },
  { $set: { language: "Telugu"} }
);

db.movies.findOne({name: "Jai Bhim"});

db.movies.updateOne( 
  { name: "Jai Bhim"},
  { $set: { language: "Tamil"} }
);

db.movies.find({}, {_id: 0, name: 1, language: 1});

//Delete

db.orders.find({ quantity: {$lt : 15}});

db.orders.deleteMany({ quantity: {$lt : 15}});


db.electronics.insertMany([
  {
    img: "https://rukminim1.flixcart.com/image/312/312/l1dwknk0/mobile/f/t/x/-original-imagcyj4unsxhadw.jpeg?q=70",
    title: "realme C31 (Light Silver, 32 GB)",
    rating: "4.6",
    price: "10,999",
    final_price: "8,999"
  },
  {
    img: "https://rukminim1.flixcart.com/image/312/312/ku4ezrk0/mobile/p/e/4/c31-mzb0a0jin-poco-original-imag7bzqxgdhgf2n.jpeg?q=70",
    title: "POCO C31 (Royal Blue, 64 GB)",
    rating: "4.4",
    price: "11,999",
    final_price: "7,999"
  },
  {
    img: "https://rukminim1.flixcart.com/image/312/312/l4n2oi80/mobile/x/o/a/-original-imagfhu75eupxyft.jpeg?q=70",
    title: "SAMSUNG Galaxy F13 (Waterfall Blue, 64 GB)",
    rating: "4.1",
    price: "14,999",
    final_price: "11,999"
  },
  {
    img: "https://rukminim1.flixcart.com/image/312/312/kg8avm80/mobile/r/h/z/apple-iphone-12-dummyapplefsn-original-imafwg8duby8qbn4.jpeg?q=70",
    title: "APPLE iPhone 12 (Black, 128 GB)",
    rating: "4.6",
    price: "70,900",
    final_price: "56,999"
  },
 {
    img: "https://m.media-amazon.com/images/I/81OZGH4fZiL._SX522_.jpg",
    title: "Redmi 10 Power (Sporty Orange, 8GB RAM, 128GB Storage)",
    rating: "3.6",
    price: "18,999",
    final_price: "14,999"
  },
  {
    img: "https://m.media-amazon.com/images/I/71geVdy6-OS._SX522_.jpg",
    title: "OPPO A74 5G (Fantastic Purple,6GB RAM,128GB Storage)",
    rating: "4.2",
    price: "20,990",
    final_price: "14,990"
  },
 {
    img: "https://m.media-amazon.com/images/I/61+Q6Rh3OQL._SX522_.jpg",
    title: "OnePlus Nord CE 2 5G (Bahamas Blue, 8GB RAM, 128GB Storage)",
    rating: "4.3",
    price: "33,999",
    final_price: "24,999"
  },
  {
    img: "https://m.media-amazon.com/images/I/71BZ2hz0IZL._SX522_.jpg",
    title: "Nokia G21 Android Smartphone",
    rating: "4.1",
    price: "15,999",
    final_price: "11,999"
  },
 {
    img: "https://m.media-amazon.com/images/I/41+sLJHyA8L._SY300_SX300_.jpg",
    title: "Vivo Y21G (Midnight Blue, 4GB RAM, 64GB ROM)",
    rating: "4",
    price: "17,990",
    final_price: "13,499"
  },
 {
    img: "https://m.media-amazon.com/images/I/413iZjGV3cL._SX522_.jpg",
    title: "Lava Agni 5G |64 MP AI Quad Camera| (8GB RAM/128 GB ROM)",
    rating: "4.3",
    price: "23,999",
    final_price: "15,999"
  },
])


db.electronics.deleteMany({})