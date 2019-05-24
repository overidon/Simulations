var skies = { 0 : DARKSKY, 
              1 : SKYBLUE, 
              2 : HAZE,
              3 : DAWN,
              4 : MIDNIGHT };


console.log(skies);

console.log(skies[0]);

// this will get the length of a dictionary... 
console.log( Object.keys(skies).length );

// draw sky
let randomKey = Math.floor(  Math.random() * Object.keys(skies).length );

console.log(skies[randomKey]);