function atualizarResultados() {
  const soma1 = parseFloat(document.getElementById('soma1').value) || 0;
  const soma2 = parseFloat(document.getElementById('soma2').value) || 0;
  document.getElementById('resSoma').innerText = `Resultado: ${soma1 + soma2}`;

  const sub1 = parseFloat(document.getElementById('sub1').value) || 0;
  const sub2 = parseFloat(document.getElementById('sub2').value) || 0;
  document.getElementById('resSub').innerText = `Resultado: ${sub1 - sub2}`;

  const mult1 = parseFloat(document.getElementById('mult1').value) || 0;
  const mult2 = parseFloat(document.getElementById('mult2').value) || 0;
  document.getElementById('resMult').innerText = `Resultado: ${mult1 * mult2}`;

  const div1 = parseFloat(document.getElementById('div1').value) || 0;
  const div2 = parseFloat(document.getElementById('div2').value) || 1;
  const resultadoDiv = div2 !== 0 ? (div1 / div2).toFixed(2) : 'Erro';
  document.getElementById('resDiv').innerText = `Resultado: ${resultadoDiv}`;
}

document.querySelectorAll('input').forEach(input => {
  input.addEventListener('input', atualizarResultados);
});

atualizarResultados();