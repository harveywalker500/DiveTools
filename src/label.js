// Get data from URL
const params = new URLSearchParams(window.location.search);

const data = {
    o2: params.get('o2'),
    he: params.get('he'),
    po2: params.get('po2'),
    units: params.get('units'),
    rounding: parseFloat(params.get('rounding')),
    date: params.get('analysisDate'),
    name: params.get('analystName'),
    mod: params.get('mod'),
    largeLabel: params.get('largeLabel'),
    gasType: params.get('gasType')
};

const unitLabel = data.units === 'imperial' ? 'ft' : 'm';

const displayO2 = document.getElementById('display-o2');
const displayHe = document.getElementById('display-he');
const displayPo2 = document.getElementById('display-po2');
const displayDate = document.getElementById('display-date');
const displayName = document.getElementById('display-name');
const displayLargeLabel = document.getElementById('display-large-label');
const displayLargeUnits = document.getElementById('display-large-units');
const gasTypeHeading = document.getElementById('display-large-gastype');

if (displayO2) displayO2.textContent = data.o2;
if (displayHe) displayHe.textContent = data.he;
if (displayPo2) displayPo2.textContent = data.po2;
if (displayDate) displayDate.textContent = data.date;
if (displayName) displayName.textContent = data.name;
if (displayLargeLabel) displayLargeLabel.textContent = data.largeLabel;
if (displayLargeUnits) displayLargeUnits.textContent = unitLabel;

if (data.gasType && gasTypeHeading) {
    gasTypeHeading.textContent = data.gasType;
}

// Automatically trigger print
window.print();
