function grabDoll(dolls){
    var bag=[];
    //coding here
    for (let i = 0; i < dolls.length ; i++) {
        console.log(dolls[i]);
      if (dolls[i].includes("Hello Kitty") || dolls[i].includes("Barbie doll")) bag.push(dolls[i]) 
}
    return bag;
  }

 let doll = ["Mickey Mouse","Hello Kitty","Hello Kitty","Barbie doll","Snow white"];

 grabDoll(doll)