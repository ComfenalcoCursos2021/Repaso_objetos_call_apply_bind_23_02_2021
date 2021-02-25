const comparar = function(p1,p2){
    let com = `Los números ingresados son ${this.n1}, ${this.n2}, ${this.n3}\n`;
    com += `Los números ingresados son ${p1} y ${p2}`;
    if(datos.n1>=5 || datos.n2>=5 || datos.n3>=5 || p1>=5 || p2>=5){
        suma = datos.n1 + datos.n2 + datos.n3 + p1 + p2;
        console.log(`La suma es ${suma}`);
        resta = (datos.n1+ datos.n2 + datos.n3)-(p1+p2);
        console.log(`La resta es ${resta}`);
        multi = (datos.n1 + datos.n2 + datos.n3)*(p1+p2);
        console.log(`La multiplicación es ${multi}`);
        divi = (datos.n1 + datos.n2 + datos.n3)/(p1+p2);
        console.log(`La división es ${divi}`);
    }
    console.log(com);
}
const datos = new Object({
    n1 : 3,
    n2 : 2,
    n3 : 4

});
comparar.call(datos, 4, 1);