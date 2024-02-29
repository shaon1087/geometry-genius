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
}

function rectangleCalculator() {
  const rectangleFieldWidth = document.getElementById("rectangle-width");
  const rectangleFieldWidthText = rectangleFieldWidth.value;
  const rectangleFieldWidthValue = parseFloat(rectangleFieldWidthText);

  const rectangleFieldLength = document.getElementById("rectangle-length");
  const rectangleFieldText = rectangleFieldLength.value;
  const rectangleFieldLengthValue = parseFloat(rectangleFieldText);

  const triangleArea = rectangleFieldWidthValue * rectangleFieldLengthValue;

  const areaSpan = document.getElementById("rectangle-area");
  areaSpan.innerText = triangleArea;
}

function parallelogramCalculator() {
  const parallelogramBase = getInputValueById("parallelogram-b");
  const parallelogramLength = getInputValueById("parallelogram-h");
  const parallelogramArea = parallelogramBase * parallelogramLength;
  setTextFieldText("parallelogram-area", parallelogramArea);
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
