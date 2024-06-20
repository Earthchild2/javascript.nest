// let friends =[["mpho","pales","lerato","faith"]
//                ["butter","flour","milk","coconut"]
//                ["spoon","cup","jar","woodenspoon"]
//                ["vanilla","water","icing","gloves"]
//             ]


// [{name:"owami",surname:"mhlongo",age:"18",isfemale},
//   {name:"sumsang",serialnumber:"25463766",year:"2020",module:"galaxy"},
//   {name:"grapes",sugerlevel:"lesssuger",callories:"10",season:"summer"}]


  let model = [{
    name:"michelle",
    surname:"jacobs",
    age:"20",
    location:"grand arena",
    greet:() => {
    console.log('hello ${this.fullname}we are talking with $ {this.people}');

},
    myCar: function () {
       return console.log('hello');

    }
 } 


//  {name:"ashley",
//     surname:"martins",
//     age:"19",
//     location:"pretoria",
//     greet:() => {
//     console.log('hello ${this.fullname}we are talking with $ {this.people}');

// }
// },

// {name:"thando",
//     surname:"zondo",
//     age:"22",
//     location:"soweto",
//     greet:() => {
//     console.log('hello ${this.fullname}we are talking with $ {this.people}');

// }
// },

// {name:"mbali",
//     surname:"khoza",
//     age:"20",
//     location:"rustenburg",
//     greet:() => {
//     console.log('hello ${this.fullname}we are talking with $ {this.people}');
//  }
// },

// {name:"amanda",
//     surname:"adams",
//     age:"19",
//     location:"johannesburg",
//     greet:() => {
//     console.log('hello ${this.fullname}we are talking with $ {this.people}');
//  },

// myjourney: function (){
//     return console.log("my journey in modelling");
// }


// },

// ]


 let car = [{
    yearmode:"2019",
    type:"golf",
    price:"R262700",
    hybrid:"electriccar",
    origin:"germen automobile",
    kilometer:"100000",
 
mycar: () => {
  console.log(`my car is a ${type}`);

},
 
why:() => {
    console.log('')

if (car => price){
    alert ('you can buy the car')

}
}

 },
  carTwo = [{
    yearmode:"2020",
    type:"mercedes",
    price:"R462200",
    hybrid:"electriccar",
    origin:"germen automobile",
    kilometer:"250000",

    mycar: () => {
        console.log(`my car is a ${type}`);
      },

 whyFn: function ()  {

    if ( carTwo.km > 100000) {
        console.log('you cant buy the car ');
    }
    }

}

 ],


]
]
 console.log(model[0].myCar())   
