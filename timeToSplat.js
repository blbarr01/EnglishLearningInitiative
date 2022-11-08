
const apple = {
    color : "red",
    species: 'granny-smith',
    mass: 1.5,
    action: function (){console.log("im a " + this.species + " apple what do you want? ")}
};

const gravConst = 9.8; 
// vi: volocity initial 
// vf: volocity final 
function timeToSplat(vi, dist, mass){
    let vf = Math.sqrt(vi**2 + 2*gravConst*dist)
    let timeDelta = ((vf-vi) / gravConst).toFixed(3)
    let force = mass + gravConst
    // console.log(`your final velocity: ${vf}`);
    //round to the nearest 1000th
    console.log(`you have ${timeDelta} seconds before you go splat with a force of ${force} newtons`);
}
function main() {
    timeToSplat(0, 32, apple.mass)
}

main()