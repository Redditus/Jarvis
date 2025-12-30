const nome = document.getElementById("nome").value


const password = document.getElementById("password").value

const idade = document.getElementById("idade").value




function enviar() {
 if (nome !==  " " &&  password !== idade !==  " ") {
  
  localStorage.name = nome;
localStorage.password = password;

localStorage.idade = idade;

 }
 else {

alert("Prenxe todos os campos")

 }
 
 
 
 
 
}