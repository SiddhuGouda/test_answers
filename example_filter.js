var ScoreKeeper = [
        {name:"Siddhu", hero: "Captain America"},
        {name:"Shubham", hero: "Iron Man"},
        {name: "Ravi", hero:"Iron Man"},
        {name:"Sabrish", hero:"Flash"}
];

var superHero = ScoreKeeper.filter(function(e){
  return (e.hero === "Iron Man");
});

superHero.forEach(function(e1){
    console.log(e1);
});

//results
 {name:"Shubham", hero: "Iron Man"}
 {name: "Ravi", hero:"Iron Man"}