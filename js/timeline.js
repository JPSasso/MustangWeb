const btnCierra = document.querySelector('#btn-cierra');
const btnAdelanta = document.querySelector('#btn-adelanta');
const btnRetrocede = document.querySelector('#btn-retrocede');
const imagenes = document.querySelectorAll('#galeria img');
const lightbox = document.querySelector('#contenedor-principal');
const imagenActiva = document.querySelector('#img-activa');
let indiceImagen = 0;

function mappearMustang(src){
  if(src.includes('1965')){
    return Mustang1;
  }
  else if(src.includes('2 gen') || src.includes('2%20gen')){
    return Mustang2;
  }
  else if(src.includes('1990')){
    return Mustang3;
  }
  else if(src.includes('2003')){
    return Mustang4;
  }
  else if(src.includes('2005')){
    return Mustang5;
  }
  else {
    return Mustang6;
  }
}

const abreLightbox = (event) => {
  imagenActiva.src = event.target.src;
  lightbox.style.display = 'flex';
  indiceImagen = Array.from(imagenes).indexOf(event.target);
  getMustangData();
};

imagenes.forEach((imagen) => {
  imagen.addEventListener('click', abreLightbox);
});

btnCierra.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

const adelantaImagen = () => {
  if (indiceImagen === imagenes.length - 1) {
    indiceImagen = -1;
  }
  imagenActiva.src = imagenes[indiceImagen + 1].src;
  indiceImagen++;
  getMustangData();
};

btnAdelanta.addEventListener('click', adelantaImagen);

const retrocederImagen = () => {
  if (indiceImagen === 0) {
    indiceImagen = imagenes.length;
  }
  imagenActiva.src = imagenes[indiceImagen - 1].src;
  indiceImagen--;
  getMustangData();
};

btnRetrocede.addEventListener('click', retrocederImagen);

function getMustangData() {
  let mappedMustang = mappearMustang(imagenActiva.src);
  document.getElementById("h-Generacion").innerHTML = mappedMustang.Generation;
  document.getElementById("p-Historia").innerHTML = mappedMustang.history;
}


function loadHistoryPage(){  
  if(localStorage.getItem("manualReload") == 0){   
    let mappedMustang = GetMustang(Number(localStorage.getItem("RandomMustang")));
    document.getElementById("h-Generacion").innerHTML = mappedMustang.Generation;
    document.getElementById("p-Historia").innerHTML = mappedMustang.history;
    document.getElementById("img-activa").src = mappedMustang.Img1;
    lightbox.style.display = 'flex';
    localStorage.setItem("manualReload",1);
  }
  console.log(localStorage.getItem('RandomMustang'));
}
