import { series } from './data.js';
var seriesTbody = document.getElementById('series');
var tableFoot = document.getElementById('footTable');
function renderSeries(Series) {
    Series.forEach(function (s) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "\n        <td>".concat(s.id, "</td>\n        <td><a href=\"#\" class=\"serie-title\">").concat(s.title, "</a></td>\n        <td>").concat(s.platform, "</td>\n        <td>").concat(s.seasons, "</td>\n      ");
        seriesTbody.appendChild(trElement);
    });
}
function getTotalCredits(Series) {
    var totalSeasons = 0;
    Series.forEach(function (Serie) { return totalSeasons = totalSeasons + Serie.seasons; });
    var totalSeries = Series.length;
    return totalSeasons / totalSeries;
}
renderSeries(series);
var promSeasons = getTotalCredits(series);
var row = document.createElement("tr");
row.innerHTML =
    "<td>Seasons Average: ".concat(promSeasons, "</td>");
tableFoot.appendChild(row);
seriesTbody.addEventListener('click', function (event) {
    var target = event.target;
    // Verifica que el clic haya sido en un enlace con la clase correcta
    if (target.tagName === 'A' && target.classList.contains('serie-title')) {
        event.preventDefault(); // ✅ Evita que se abra otra página
        var parentRow = target.closest('tr');
        if (!parentRow)
            return;
        var idCell = parentRow.querySelector('td');
        if (!idCell)
            return;
        var id_1 = parseInt(idCell.textContent || '');
        var serie = series.find(function (s) { return s.id === id_1; });
        if (!serie)
            return;
        var card = "\n        <div class=\"card mt-5\" style=\"width: 18rem;\">\n          <img src=\"".concat(serie.image, "\" class=\"card-img-top\" alt=\"").concat(serie.title, "\">\n          <div class=\"card-body\">\n            <p class=\"card-text\">").concat(serie.description, "</p>\n            <a href=\"").concat(serie.link, "\" target=\"_blank\">").concat(serie.title, "</a>\n          </div>\n        </div>\n      ");
        var div = document.getElementById('detail');
        div.innerHTML = card;
    }
});
