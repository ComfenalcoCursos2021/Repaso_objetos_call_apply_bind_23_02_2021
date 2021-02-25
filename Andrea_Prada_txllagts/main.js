

//Crear una funcion que revisa x cantidad de numeros en viados en this y mostrar 
//el mayor de ellos,
//si los numeros ingresados en this, es mayor o igual a 5 
//realizar todas las operaciones matematicas basicas
// Suma, resta, multiplicacion, division


//const saludar = function(p1, p2){
//    let cadena = `Hola ${this.name} como estas te saluda ${this.maquina} ${this.mensaje} \n`;
//    cadena += `Hola ${p1} como estas te saluda ${p2}`;
//    console.log(cadena); 
//}
//const data = new Object ({
//    name : "Miguel",
//    maquina : "Cortana",
//    mensaje : ":V"
//});

const Calculadora = new Object({
    sumar(){
        for (let value of this.data){
            this.res += value;
        }
        return `La suma de los datos son ${this.res}`;
    },
    restar(){
        for (let i = this.data.length; i >= 0;) {
    
            this.res -= this.data[i]-this.data[(i-1)];
            i -=2; 
            console.log(i);
            break;
        }
        return `La suma de los datos son : ${this.res}`
    }
})

const Mayor = function(){
    let mayor = this.x.sort((a,b)=>{return a=b});
    let comparacion = parseInt(orden.slice((orden.length)-1, (orden.length.join())));
    if (comparacion>=5) {
        const resultados = Calculadora.sumar(this, orden);
        return resultados(orden);
    } else {
        return `Los datos suministrados son ${orden} y el mayor de ellos es ${comparacion}`;
    }
};

const data = new Object({
    x : [50,9,5]
});

console.log(Mayor.call(data));

// saludar.call(data, "Adrian", "Siri");

// const arg = ["Adrian", "Siri"];
// saludar.apply(data, arg);

// const mostrar = saludar.bind(data);

// mostrar("Adrian", "Siri");
// mostrar("Diana", "Ok Google");