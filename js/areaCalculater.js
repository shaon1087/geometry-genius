function triangleCalculator() {
  const triangleFieldBase = document.getElementById("triangle-base");
  const triangleFieldBaseText = triangleFieldBase.value;
  const triangleFieldBaseValue = parseFloat(triangleFieldBaseText);

  const triangleFieldHeight = document.getElementById("triangle-height");
  const triangleFieldHeightText = triangleFieldHeight.value;
  const triangleFieldHeightValue = parseFloat(triangleFieldHeightText);

  const triangleArea = triangleFieldBaseValue * 0.5 * triangleFieldHeightValue;

  const areaSpan = document.getElementById("triangle-area");
  areaSpan.innerText = triangleArea;
  addToCalculationEntry("Triangle", triangleArea);
}

function rectangleCalculator() {
  const rectangleFieldWidth = document.getElementById("rectangle-width");
  const rectangleFieldWidthText = rectangleFieldWidth.value;
  const rectangleFieldWidthValue = parseFloat(rectangleFieldWidthText);

  const rectangleFieldLength = document.getElementById("rectangle-length");
  const rectangleFieldText = rectangleFieldLength.value;
  const rectangleFieldLengthValue = parseFloat(rectangleFieldText);

  const recTangleArea = rectangleFieldWidthValue * rectangleFieldLengthValue;

  const areaSpan = document.getElementById("rectangle-area");
  areaSpan.innerText = recTangleArea;
  addToCalculationEntry("recTangle", recTangleArea);
}

function parallelogramCalculator() {
  const parallelogramBase = getInputValueById("parallelogram-b");
  const parallelogramLength = getInputValueById("parallelogram-h");
  const parallelogramArea = parallelogramBase * parallelogramLength;
  setTextFieldText("parallelogram-area", parallelogramArea);

  // add to calculationEntry
  addToCalculationEntry("parallelogram", parallelogramArea);
}

function RhombusCalculator(){
    const rhombusD1 = getInputValueById('Rhombus-d1');
    const rhombusD2 = getInputValueById('Rhombus-d1');
    const rhombusArea = rhombusD1 * 0.5 * rhombusD2;
    setTextFieldText("Rhombus-area", rhombusArea);
    addToCalculationEntry("Rhombus", rhombusArea);
}

function getInputValueById(inputId) {
  const inputValueField = document.getElementById(inputId);
  const inputValueText = inputValueField.value;
  const inputValue = parseFloat(inputValueText);
  return inputValue;
}

function setTextFieldText(areaId, area) {
  const TextArea = document.getElementById(areaId);
  TextArea.innerText = area;
}

// add to calculation entry
function addToCalculationEntry(areaType,area){
    const calculationEntry = document.getElementById('calculation-Entry');
    const count =  calculationEntry.childElementCount;
    const  p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count+1}.${areaType} ${area} cm<sup>2</sup> <button class="btn btn-primary btn-sm">Convert</button>`;
    calculationEntry.appendChild(p);

}
