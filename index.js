katzDeliLine = [];

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return (`Welcome, ${name}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing(katzDeli) {
  let i = [];
  while (i<katzDeli.length){
    i++;
    if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else
  return (`Currently serving ${katzDeli.shift()}.`);

  }
}

function currentLine(line) {
var theLine=[];
if(line>[]) {
  for(var i=0; i<line.length; i++) {
      theLine.push(` ${i+1}. ${line[i]}`);
    }
    return "The line is currently:" + theLine;
}
    else{
      return "The line is currently empty."
    }
}
