//bloco 01
//aula 01

/*
var nome = "Limited";
var n1 = 5;
var n2 = 3;
var frase = "japão é o melhor time do mundo";
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
console.log(nome);
//console.log(idade + idade2);
console.log(n1 * n2);
console.log(frase.toUpperCase());
//alert(frase.replace("japão", "Brasil"));

*/

//aula 02

//array

//var lista = ["maça", "pêra", "laranja"]

//console.log(lista);
//alert(lista[1]);
//lista.push("uva"); // inserir elemento	
//lista.pop();		 // retirar elemento

//console.log(lista.length); // número de elementos na array

//console.log(lista.reverse()); //inverte a ordem dos elementos

//console.log(lista.toString());	//transforma a lista em string apenas

//console.log(lista[0]);				//mostra o primeiro elemento da lista (maça)

//console.log(lista.toString()[0]);	//mostra o primeiro elemento da string maça (letra m)

//console.log(lista.join(""));		// insere um caractere, elemento entre cada elemento da lista. Ex.: se colocar um traço, então entre cada elemento da lista terá um traço maça - pêra - laranja
//ou seja, substitui a vírgula

//dicionário			como se fosse um objeto Json
//var fruta = {nome:"maça", cor:"vermelha"}
//console.log(fruta); --> resultado nome:"maça", cor:"vermelha" 
//ou 
//console.log(fruta.nome); --> resultado maça
//alert(fruta.cor);

//var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"maça", cor:"roxa"}]
//console.log(frutas);
//alert(frutas[1].nome);


//aula 03 
//condicionais, laços de repetição e date


/*var idade = 18;
if (idade >= 18){
	alert("maior de idade");
}else{
	alert("menor de idade")
};*/


/*var idade = prompt("Qual sua idade?")	//comando prompt vai inserir uma pergunta
if (idade >= 18){
	alert("maior de idade");
}else{
	alert("menor de idade")
};*/


/*var count = 0;
while (count <= 5){
	console.log(count);
	count = count +1;	// ou count = count++;
};*/


/*var count;				//mesmo resultado da construção anterior com while. A diferença é que tem um alert que vai mostrar cada número na contagem
for(count=0; count <=5; count++){
	alert(count);
};*/


//var d = new Date();		//mostra a data no alerta
//alert(d);

/*var d = new Date();		//mostra o mês no alerta
alert(d.getMonth()+1);

var d = new Date();		//mostra os minutos no alerta
alert(d.getMinutes());

var d = new Date();		//mostra as horas no alerta
alert(d.getHours());*/

//var d = new Date();		//mostra o horário no alerta
//alert(d.getHours()+ ":" + d.getMinutes());

//var all = d.getHours()+ ":" + d.getMinutes() + ":" + d.getSeconds();
//document.write(all);	//mostra a hora com horas, minutos e segundos

//document.write(d.getHours()+ ":" + d.getMinutes()); //mostra a hora com horas e minutos

//document.write(all);



/*if (d.getSeconds() >= 0){
	location.reload();
};*/

/*var abc= new Date();
document.getElementById("output").innerHTML=abc;*/


//bloco 02 
//aula 01

/*function soma(n1, n2){
	return n1 + n2;
}

alert(soma(5, 10)); */

//prof falou que esse exemplo ficou uma bosta... então pula
/*function setReplace(frase, nome){
	frase.replace(nome, novo_nome)
}

alert(setReplace("Vai Japão, "Japão", "Brasil"));*/


//esse exemplo era para falar de variável global e local, mas ficou uma merda. Pesquise no google que é melhor
/*function validaIdade(idade){
	var validar;
	if (idade >= 18){
		validar = true
	}else{
		validar = false
	}
	return validar;
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade)); */

//aula 02

//configura junto com o html que irá aparecer uma caixa de texto ao clicar no botão com a mensagem do alert
/*function clicou(){
	alert("Obrigado por clicar");
}*/

//configura junto com o html que irá aparecer no console ao clicar no botão com a mensagem descrita, que nesse exemplo é um trecho do código
/*function clicou(){
	document.getElementById("agradecimento");
	console.log(document.getElementById("agradecimento"));
}*/

//configura junto com o html que irá injetar na tela ao clicar no botão a mensagem descrita no innerHTML
function clicou(){
	document.getElementById("agradecimento").innerHTML = "obrigado por clicar";
}

//função que faz abrir um link, respectivamente em outra aba(window.open), na mesma aba(window.location.href)
function redirecionar() {
	window.open("https://google.com/");
	window.location.href = "https://google.com/"
}

//função faz com que ao passar o mouse no texto ele seja substituído pelo conteúdo do innerHTML
function trocar(elemento) {
	//document.getElementById("mousemove").innerHTML = "obrigado por passar o mouse";
	elemento.innerHTML = "obrigado por passar o mouse";
	//alert("trocar texto");
}

//idem do anterior
function voltar(elemento) {
	//document.getElementById("mousemove2").innerHTML = "passe o mouse aqui";
	elemento.innerHTML = "passe o mouse aqui";
}

//caixa de texto com mensagem quando carregar a pagina
function load(){
	alert("pag carregada");
}

//substitui um elemento na caixa de seleção clicando com o mouse
function funcaoChange(elemento) {
	console.log(elemento.value)
}