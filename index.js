const uno = () => {
  setTimeout(() => {
    console.log('uno');
  }, 1000);
}

const dos = () => {
  setTimeout(() => {
    console.log('dos');
  }, 500);
}

const tres = () => {
  setTimeout(() => {
    console.log('tres');
  }, 3000);
}

const final = () => {
  setTimeout(() => {
    console.log('final');
  }, 2000)
}


function main() {
  console.log('INICIO');
  uno();
  dos();
  tres();
  final();
}

//main();


//////// CALLBACK

function saludo(nombre) {
  console.log('Hola ' + nombre);
}

const llamadora = (callback1) => {
  //console.log('el tipo de parametro es ->', typeof (callback1));

  if (typeof (callback1) === 'function') {
    console.log('Abajo vamos a llamar a nuestra funciòn callback');
    callback1('Alberto');
  } else {
    console.log('El parametro no es una funcion');
  }

}

llamadora(saludo);

let miArray = [10, 20, 30, 40]
miArray.forEach(cosa => console.log(cosa))


///GITHUB Y GIT
