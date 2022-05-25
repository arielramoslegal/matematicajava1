var a, nlinhas, ncolunas, multiplica, v1, v2, v3, v4, v5, v6, v7, v8, v9;

var matriz1 = [];

a = parseFloat(prompt("número para multiplicar com a matriz"));
matriz1 = a;
if (isNaN(a)) {
    alert("digite um número válido");
}
document.write("<div>[" + matriz1 + "]<br></div>");
document.write("<div>X <br></div>");
v1 = (prompt("DIGITE O PRIMEIRO VALOR"));
v2 = (prompt("DIGITE O SEGUNDO VALOR"));
v3 = (prompt("DIGITE O TERCEIRO VALOR"));
v4 = (prompt("DIGITE O QUARTO VALOR"));
v5 = (prompt("DIGITE O QUINTO VALOR"));
v6 = (prompt("DIGITE O SEXTO VALOR"));
v7 = (prompt("DIGITE O SETIMO VALOR"));
v8 = (prompt("DIGITE O OIVATO VALOR"));
v9 = (prompt("DIGITE O NONO VALOR"));
var matriz2 = [];
matriz2.push([v1, v2, v3]);
matriz2.push([v4, v5, v6]);
matriz2.push([v7, v8, v9]);

console.table(matriz2);

document.write("<div id=primeiro><table border=1></div>");
for (i = 0; i < matriz2.length; i++) {
    var linha = '<tr>';
    for (x = 0; x < matriz2[i].length; x++) {
        linha = linha + "<td>" + matriz2[i][x] + "</td>";
    }
    linha = linha + "</tr>";
    document.write("<div>" + linha + "</div>");
}
document.write("<div></table></div>");
document.write("<div>=<br></div>");
var matriz3 = [];
matriz3.push([matriz2[0][0] * a, matriz2[0][1] * a, matriz2[0][2] * a]);
matriz3.push([matriz2[1][0] * a, matriz2[1][1] * a, matriz2[1][2] * a]);
matriz3.push([matriz2[2][0] * a, matriz2[2][1] * a, matriz2[2][2] * a]);
document.write("<div id=ultimo><table border=1></div>");
for (i = 0; i < matriz3.length; i++) {
    var linha = '<tr>';
    for (x = 0; x < matriz3[i].length; x++) {
        linha = linha + "<td>" + matriz3[i][x] + "</td>";
    }
    linha = linha + "</tr>";
    document.write(linha);
}
document.write("</table>");
console.table(matriz3);