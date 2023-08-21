

//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=99db18ed4405b31d392f6d9e808fe78f


const hoursElement = document.getElementById("hours"); 
const dateElement = document.getElementById("date"); 

const currentDateTime = new Date();
const currentHours = currentDateTime.getHours();
const currentMinutes = currentDateTime.getMinutes();

const formattedHours = String(currentHours).padStart(2, '0');
const formattedMinutes = String(currentMinutes).padStart(2, '0');

const timeString = `${formattedHours}:${formattedMinutes}`;

hoursElement.textContent = timeString;

const meses = [
    "janeiro", "fevereiro", "março", "abril", "maio", "junho",
    "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
];

const diasSemana = [
    "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira",
    "Quinta-feira", "Sexta-feira", "Sábado"
];

const diaSemana = diasSemana[currentDateTime.getDay()];
const diaMes = currentDateTime.getDate();
const mes = meses[currentDateTime.getMonth()];
const ano = currentDateTime.getFullYear();

const dateString = `${diaSemana}, ${diaMes} de ${mes} de ${ano}`;

dateElement.textContent = dateString;

// EXTRAÇÃO DE DADOS DA API

