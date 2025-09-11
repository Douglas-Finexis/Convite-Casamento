// Data alvo
const alvo = new Date("2026-03-28T17:00:00").getTime();

function atualizarContador() {
  const agora = new Date().getTime();
  const distancia = alvo - agora;

  if (distancia <= 0) {
    document.getElementById("contador").innerHTML = "Chegou o grande dia!";
    clearInterval(timer);
    return;
  }

  // cálculos
  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  // Atualiza na tela
  document.getElementById("dias").textContent = dias;
  document.getElementById("horas").textContent = horas;
  document.getElementById("minutos").textContent = minutos;
  document.getElementById("segundos").textContent = segundos;
}

// Atualiza a cada 1 segundo
const timer = setInterval(atualizarContador, 1000);
atualizarContador(); // chama já no início
