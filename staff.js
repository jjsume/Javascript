var employees = [];
var employerA = {
	name: "Jere",
	occupation: "Programmer",
	age: 34
	};
var employerB = {
	name: "Ilkka",
	occupation: "Programmer",
	age: 34
	};
var employerC = {
	name: "Tino",
	occupation: "Network communication and security specliist",
	age: 27
	};
employees.push(employerA);
employees.push(employerB);
employees.push(employerC);
var sumOfProgrammers = 0;
var sumOfOthers = 0;
document.writeln("Company's programmers' ages and names:"+"<br>");
for (var x=0;x<employees.length;x++) {
	if (employees[x].occupation === "Programmer") {
		sumOfProgrammers++;
		document.writeln(employees[x].name +"\t"+employees[x].age+"<br>");	
	}
}
document.writeln("Other employees than programmes, and the their information<br>");
for (var x=0;x<employees.length;x++) {
	if (employees[x].occupation != "Programmer") {
		sumOfOthers++;
		document.writeln(employees[x].name +"\t"+employees[x].age +"\t" +employees[x].occupation +"");	
	}
}
document.getElementById("results").innerHTML = "Number of Programmers: " +sumOfProgrammers.valueOf() +"\t Number of other employees at the Company: " +sumOfOthers;

	

