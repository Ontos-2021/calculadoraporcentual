
document.addEventListener('DOMContentLoaded', function() {
  const baseInput = document.getElementById('base');
  const secondInput = document.getElementById('second');
  const modeInputs = document.getElementsByName('mode');
  const resultDiv = document.getElementById('result');
  const errorDiv = document.getElementById('error');
  
  function calculate() {
    const baseValue = parseFloat(baseInput.value);
    const secondValue = parseFloat(secondInput.value);
    let mode;
    for (const input of modeInputs) {
      if (input.checked) {
        mode = input.value;
        break;
      }
    }
    
    // Limpiar mensajes anteriores
    errorDiv.textContent = '';
    resultDiv.textContent = '';
    
    // Validación de datos
    if (isNaN(baseValue) || isNaN(secondValue)) {
      errorDiv.textContent = 'Por favor, ingresa números válidos en ambos campos.';
      return;
    }
    
    if (mode === 'calculatePercentage') {
      // Calcula: el porcentaje ingresado del número base
      const result = (baseValue * secondValue) / 100;
      resultDiv.textContent = `${secondValue}% de ${baseValue} es ${result}`;
    } else if (mode === 'calculateRepresentation') {
      // Calcula: qué porcentaje representa el segundo número del número base
      if (baseValue === 0) {
        errorDiv.textContent = 'El número base no puede ser 0 para este cálculo.';
        return;
      }
      const result = (secondValue / baseValue) * 100;
      resultDiv.textContent = `${secondValue} es el ${result.toFixed(2)}% de ${baseValue}`;
    }
  }
  
  // Actualiza el cálculo en tiempo real
  baseInput.addEventListener('input', calculate);
  secondInput.addEventListener('input', calculate);
  for (const input of modeInputs) {
    input.addEventListener('change', calculate);
  }
});
