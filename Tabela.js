const elements = document.querySelectorAll('.element');
const tooltip = document.getElementById('tooltip');

elements.forEach(element => {
  element.addEventListener('mouseover', (e) => {
    const details = JSON.parse(element.dataset.details);
    tooltip.innerHTML = `
      <strong>${details.nome}</strong><br>
      Número Atômico: ${details.numeroAtomico}<br>
      Massa Atômica: ${details.massa}<br>
      Prótons: ${details.protons}<br>
      Elétrons: ${details.eletrons}
    `;
    tooltip.style.left = `${e.pageX + 10}px`;
    tooltip.style.top = `${e.pageY + 10}px`;
    tooltip.classList.remove('hidden');
  });

  element.addEventListener('mousemove', (e) => {
    tooltip.style.left = `${e.pageX + 10}px`;
    tooltip.style.top = `${e.pageY + 10}px`;
  });

  element.addEventListener('mouseout', () => {
    tooltip.classList.add('hidden');
  });
});
