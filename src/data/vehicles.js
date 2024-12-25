import d1 from "../assets/4d1.jpeg";
import d2 from "../assets/4d2.jpeg";
import d3 from "../assets/4d3.jpeg";
import d4 from "../assets/4d4.jpeg";
import e1 from "../assets/e1.jpeg";
import e2 from "../assets/e2.jpeg";
import e3 from "../assets/e3.jpeg";
import e4 from "../assets/e4.jpeg";
import e5 from "../assets/e5.jpeg";
import e6 from "../assets/e6.jpeg";
import e7 from "../assets/e7.jpeg";
import er1 from "../assets/6e1.jpg"
import er2 from "../assets/6e2.jpg"
import er3 from "../assets/6e3.jpg"
import er4 from "../assets/6e4.jpg"
import er5 from "../assets/6e5.jpg"
import er6 from "../assets/6e6.jpg"
import m1 from "../assets/m1.jpg"
import m2 from "../assets/m2.jpg"
import m5 from "../assets/m5.jpg"
import m6 from "../assets/m6.jpg"
import m7 from "../assets/m7.jpeg"
import m8 from "../assets/m8.jpeg"
import t1 from "../assets/t1.jpg"
import t2 from "../assets/t2.jpg"
import t3 from "../assets/t3.jpg"
import t4 from "../assets/t4.jpg"
import s1 from "../assets/s1.jpg"
import s2 from "../assets/s2.jpg"
import s3 from "../assets/s3.jpg"
import s4 from "../assets/s4.jpg"
import s5 from "../assets/s5.jpg"
import s6 from "../assets/s6.jpg"
import sb1 from "../assets/sb1.jpg"
import sb2 from "../assets/sb2.jpg"
import sb3 from "../assets/sb3.jpg"
import sb4 from "../assets/sb4.jpg"
import sb5 from "../assets/sb5.jpg"
import sb6 from "../assets/sb6.jpg"
import sb7 from "../assets/sb7.jpg"
import staff1 from "../assets/staff1.jpg"
import t20 from "../assets/t20.jpeg"
import ic1 from "../assets/ic1.jpg"
import ic2 from "../assets/ic2.jpg"
import ic3 from "../assets/ic3.jpg"
import ic4 from "../assets/ic4.jpg"
import t5 from "../assets/tourist1.jpeg"
import t6 from "../assets/tourist2.jpeg"
import t7 from "../assets/tourist3.jpeg"
import c1 from "../assets/traveler5.jpg"

import c2 from "../assets/traveler6.jpg"
import c3 from "../assets/traveler10.jpg"
import c4 from "../assets/traveler17.jpg"
import mini1 from "../assets/sun1.jpeg"
import mini2 from "../assets/sun2.jpeg"
import mini3 from "../assets/sun3.jpeg"
import sb8 from "../assets/sun4.jpeg"
import sb9 from "../assets/sun5.jpeg"
import sb10 from "../assets/sun6.jpeg"
import sb11 from "../assets/sun7.jpeg"
import sb12 from "../assets/sun8.jpeg"
import sb13 from "../assets/sun9.jpeg"
import sb14 from "../assets/sun10.jpeg"
import sb15 from "../assets/sun11.jpeg"
import sb16 from "../assets/sun12.jpeg"
import sb17 from "../assets/sun13.jpeg"
import sb18 from "../assets/sun14.jpeg"
import sb19 from "../assets/sun15.jpeg"
import sb20 from "../assets/sun16.jpeg"
import sb21 from "../assets/sun17.jpeg"
import sb22 from "../assets/sun18.jpeg"
import sb23 from "../assets/sun19.jpeg"
import sb24 from "../assets/sun20.jpeg"
import sb25 from "../assets/sun21.jpeg"
import car4 from "../assets/car4.jpeg"
import car5 from "../assets/car5.jpeg"
import car6 from "../assets/car6.jpeg"
import car7 from "../assets/car7.jpeg"
import car8 from "../assets/car8.jpeg"
import car9 from "../assets/car9.jpeg"
import car10 from "../assets/car10.jpeg"
import car11 from "../assets/car11.jpeg"
const rating = [1840,1680,3460,3140,3641,3140,1800,1859]
export const vehicles = [
  {
    id: 1,
    name: "Luxury Tempo Traveller",
    image: [
      t1,t20,t2,t3,t4,
      "https://images.jdmagicbox.com/v2/comp/ghaziabad/a8/011pxx11.xx11.240709201213.i3a8/catalogue/upadhyaya-tours-and-travels-govindpuram-ghaziabad-taxi-services-ekxnhdw884.jpg",
      "https://images.jdmagicbox.com/v2/comp/ghaziabad/a8/011pxx11.xx11.240709201213.i3a8/catalogue/upadhyaya-tours-and-travels-govindpuram-ghaziabad-taxi-services-jlxxfca5c2.jpg",
      
      "https://content.jdmagicbox.com/v2/comp/ghaziabad/a8/011pxx11.xx11.240709201213.i3a8/catalogue/upadhyaya-tours-and-travels-govindpuram-ghaziabad-taxi-services-hid5cemsbr.jpg?imwidth=128",
      sb14,sb15,sb16,sb17,
    ],
    rating: "3140",
    seats: "13/16/17/20/22/26 Seats",
    extras: "Tolls, State Taxes & parking",
    minRunning: "Luxury And Deluxe",
    Minimum: "250 kms/day",
    features: [ " Music, Led TV, Pushback Seats", "Fully Air Conditioned", " Rooftop Carrier, Icebox", " Fire Cylnder, First Aid Box" ],
  },
  {
    id: 2,
    name: "Tourist Bus",
    image: [
      t5,t6,t7,s1,s3,s4,s5,s6,sb21,sb22,sb23,sb24,sb25
    ],
    rating: "3447",
    seats: "49/52/53/55 Seats",
    extras: "Tolls, State Taxes & parking",
    minRunning: "24 hours per day",
    Minimum: "250 kms/day",
    features: [ " Music, Led TV, Pushback Seats", "Fully Air Conditioned", " Rooftop Carrier, Icebox", " Fire Cylnder, First Aid Box" ],
  },
  {
    id: 3,
    name: "Executive Bus",
    image: [
      e1,e2,e3,e4,e5,e6,e7
    ],
    rating: "3460",
    seats: "49/52/53/55 Seats",
    extras: "Tolls, State Taxes & parking",
    minRunning: "Tata , Eicher , Leyland",
    Minimum: "250 kms/day",
    features: [ " Music, Led TV, Pushback Seats", "Fully Air Conditioned", " Rooftop Carrier, Icebox", " Fire Cylnder, First Aid Box" ],
  },
  {
    id: 4,
    name: "Mini Bus",
    
    rating: "3140",
    image: [
      m1,m2,m5,m6,m7,m8,
      "https://images.jdmagicbox.com/v2/comp/ghaziabad/a8/011pxx11.xx11.240709201213.i3a8/catalogue/upadhyaya-tours-and-travels-govindpuram-ghaziabad-taxi-services-caf98ym13l.jpg",
       mini1, mini2,mini3,sb18,sb19,sb20
    ],
    seats: "21/23/25/28 Seats",
    extras: "Tolls, State Taxes & parking",
    minRunning: "SML , Eicher ",
    Minimum: "250 kms/day",
    features:[ " Music, Led TV, Pushback Seats", "Fully Air Conditioned", " Rooftop Carrier, Icebox", " Fire Cylnder, First Aid Box" ],
  },
  {
    id: 5,
    name: "6+D cars",
    image: [
      er1,,car8,er2,er3,er4,er5,er6,ic1,ic2,ic3,ic4,
     
    ],
    rating: "3641",
    seats: "6 Seats",
    extras:"Tolls, State Taxes & parking",
    minRunning: "Ertiga , Innova Crysta",
    Minimum: "250 kms/day",
    features: [ " Music, Led TV, Pushback Seats", "Fully Air Conditioned", " Rooftop Carrier, Icebox", " Fire Cylnder, First Aid Box" ],
  },
  {
    id: 6,
    name: "4+D cars",
    image: [
      car4,car6,car7,car9,car10,car11,d1,d2,d3,d4,c1,c2,c3,c4
    ],
    rating: "3140",
    seats: "4 Seats",
    extras: "Tolls, State Taxes & parking",
    minRunning: "Swift , Dzire ,WagonR , Volkswagen etc",
    Minimum: "250 kms/day",
    features: [ " Music, Led TV, Pushback Seats", "Fully Air Conditioned", " Rooftop Carrier, Icebox", " Fire Cylnder, First Aid Box" ],
  },
  {
    id: 7,
    name: "Mini School Bus",
    image: [
      sb2,sb3,sb4,sb5,sb6,sb7,sb1,sb8,sb9
    ],
    rating: "3100",
    seats: "16/20/25/30/40/50 Seats",
    extras: "Tolls, State Taxes & parking",
    minRunning: "Traveller , Mini Bus , Bus",
    Minimum: "250 kms/day",
    features: [ " Music, Led TV, Pushback Seats", "Fully Air Conditioned", " Rooftop Carrier, Icebox", " Fire Cylnder, First Aid Box" ],
  },
  
  {
    id: 8,
    name: "Staff bus",
    rating: "3467",
    image: [
      s2,staff1,sb10,sb11,sb12,sb13,
      "https://content.jdmagicbox.com/v2/comp/ghaziabad/a8/011pxx11.xx11.240709201213.i3a8/catalogue/upadhyaya-tours-and-travels-govindpuram-ghaziabad-taxi-services-k1yt9mtcue.jpg?imwidth=128",
    ],
    seats: "16/20/25/30/40/50 Seats",
    extras: "Toll Tax",
    minRunning: "Traveller , Mini Bus , Bus",
    Minimum: "2000 km/month",
    features:[ " Music, Led TV, Pushback Seats", "Fully Air Conditioned", " Rooftop Carrier, Icebox", " Fire Cylnder, First Aid Box" ],
  },

];