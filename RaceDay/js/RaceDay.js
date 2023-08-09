let raceNumber = Math.floor(Math.random() * 1000);

let horarioDeRegistro = true;
let idade = parseInt(prompt("Digite sua idade: "))

if(idade >= 18 && horarioDeRegistro == true){
    console.log(raceNumber);
}


if(horarioDeRegistro == true && idade >= 18){
    document.write(`Os competidores correram as 9h30. O seu numero de corrida é ${raceNumber}.`);
}else if(idade >= 18 && horarioDeRegistro == false){
    document.write(`Adultos que se registram tarde correm às 11h00. O seu numero é ${raceNumber}.`);
}else if(idade <= 17){
    document.write(`Jovens registados correm às 12h30. O seu numero é ${raceNumber}`);
}