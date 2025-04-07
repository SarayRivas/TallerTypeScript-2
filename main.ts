import { Serie } from './Serie.js';
import { series } from './data.js';

const seriesTbody: HTMLElement = document.getElementById('series')!; 
const tableFoot: HTMLElement = document.getElementById('footTable')!;

function renderSeries(Series: Serie[]): void {
  Series.forEach(s => {
      let trElement = document.createElement("tr");
      trElement.innerHTML = `
        <td>${s.id}</td>
        <td><a href="#" class="serie-title">${s.title}</a></td>
        <td>${s.platform}</td>
        <td>${s.seasons}</td>
      `;

      seriesTbody.appendChild(trElement);

    });
}

function getTotalCredits(Series: Serie[]): number {
    let totalSeasons: number = 0;
    Series.forEach((Serie) => totalSeasons = totalSeasons + Serie.seasons);
    let totalSeries = Series.length;
    return totalSeasons/totalSeries;
  }

renderSeries(series);
  let promSeasons = getTotalCredits(series);
  let row = document.createElement("tr");
  row.innerHTML = 
    `<td>Seasons Average: ${promSeasons}</td>`
  ;
  
  tableFoot.appendChild(row);

  seriesTbody.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
  
    // Verifica que el clic haya sido en un enlace con la clase correcta
    if (target.tagName === 'A' && target.classList.contains('serie-title')) {
      event.preventDefault(); // ✅ Evita que se abra otra página
  
      const parentRow = target.closest('tr');
      if (!parentRow) return;
  
      const idCell = parentRow.querySelector('td');
      if (!idCell) return;
  
      const id = parseInt(idCell.textContent || '');
      const serie = series.find(s => s.id === id);
      if (!serie) return;
  
      const card = `
        <div class="card mt-5" style="width: 18rem;">
          <img src="${serie.image}" class="card-img-top" alt="${serie.title}">
          <div class="card-body">
            <p class="card-text">${serie.description}</p>
            <a href="${serie.link}" target="_blank">${serie.title}</a>
          </div>
        </div>
      `;
      
      const div: HTMLElement = document.getElementById('detail')!;
      div.innerHTML = card;
    }
  });