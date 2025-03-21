// Inicializa o índice do slider, que vai controlar qual grupo de imagens será mostrado
let slideIndex = 0;

// Função que move o slider quando os botões "próximo" ou "anterior" são clicados
function moveSlide(step) {
  // Seleciona todas as imagens dentro do slider
  const slides = document.querySelectorAll('.slider a');
  // Obtém o número total de imagens
  const totalSlides = slides.length;
  // Define que serão exibidas 3 imagens de cada vez
  const slidesPerView = 3;

  // Atualiza o índice do slide com base no valor de step
  // `step` pode ser 1 (próximo) ou -1 (anterior)
  slideIndex += step * slidesPerView; // Muda o índice para o próximo bloco de 3 imagens

  // Se o índice for menor que 0 (tentando ir para um bloco negativo),
  // ajusta para mostrar o último bloco de imagens
  if (slideIndex < 0) {
    slideIndex = totalSlides - slidesPerView; // Vai para o último bloco de 3
  } 
  // Se o índice for maior ou igual ao número total de imagens,
  // ajusta para o primeiro bloco
  else if (slideIndex >= totalSlides) {
    slideIndex = 0; // Volta para o primeiro bloco
  }

  // Chama a função para atualizar a posição do slider
  updateSlidePosition();
}

// Função para mover o slider na tela, atualizando a posição
function updateSlidePosition() {
  // Seleciona o contêiner do slider
  const slides = document.querySelector('.slider');
  // Define quantas imagens serão mostradas por vez (3 neste caso)
  const slidesPerView = 3;
  
  // Calcula a posição de deslocamento (desloca o contêiner do slider)
  // `slideIndex * (100 / slidesPerView)` calcula quanto o slider precisa se mover
  // para mostrar o próximo bloco de 3 imagens
  slides.style.transform = `translateX(-${slideIndex * (100 / slidesPerView)}%)`; 
  // O valor do translateX vai ser algo como:
  // -0% (nenhuma movimentação), -33.33% (primeiro bloco de 3 imagens) e assim por diante
}
