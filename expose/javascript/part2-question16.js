let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
  };
  
for (let p in statistics) {
    let num = statistics[p];
    if (p.startsWith('r') || num % 2 != 0) {
      console.log(num);
    }
}