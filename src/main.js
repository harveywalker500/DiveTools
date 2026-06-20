import { CalculateMaxOperatingDepth, GetGasType } from './utils/gasUtils.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('labelForm');

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const data = {
        o2: parseFloat(formData.get('o2')),
        he: parseFloat(formData.get('he')),
        po2: parseFloat(formData.get('po2')),
        units: formData.get('units'),
        rounding: parseInt(formData.get('rounding')),
        date: formData.get('analysisDate'),
        name: formData.get('analystName'),
      };

      let fo2 = data.o2 / 100;
      const modValue = CalculateMaxOperatingDepth(data.po2, fo2, data.units);
      const mod = parseFloat(modValue.toPrecision(data.rounding));

      const params = new URLSearchParams({
        o2: data.o2,
        he: data.he,
        po2: data.po2,
        mod: mod,
        largeLabel: mod,
        analysisDate: data.date,
        analystName: data.name,
        units: data.units,
        rounding: data.rounding,
      });

      params.append('gasType', GetGasType(data.o2, data.he));

      window.location.href = `label.html?${params.toString()}`;
    })
  }
});
