document.getElementById('weightForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const preWeight = parseFloat(document.getElementById('preWeight').value);
    const currentWeight = parseFloat(document.getElementById('currentWeight').value);
    const height = parseFloat(document.getElementById('height').value);
  
    if (isNaN(preWeight) || isNaN(currentWeight) || preWeight <= 0 || currentWeight <= 0) {
      alert('Please enter valid weight values.');
      return;
    }
  
    const weightGain = currentWeight - preWeight;
    const recommendedGain = 11.5; // kg (example for normal BMI)
    const progressPercent = (weightGain / recommendedGain) * 100;
  
    document.getElementById('gainAmount').textContent = weightGain.toFixed(2);
    document.getElementById('gainProgress').style.width = `${Math.min(progressPercent, 100)}%`;
  
    // BMI Suggestion (Optional)
    let bmiText = '';
    if (!isNaN(height) && height > 0) {
      const heightInM = height / 100;
      const bmi = currentWeight / (heightInM * heightInM);
      bmiText = `Your current BMI is ${bmi.toFixed(1)} (${bmi < 18.5 ? "Underweight" : bmi < 25 ? "Normal" : "Overweight"})`;
    }
    document.getElementById('bmiText').textContent = bmiText;
  
    // Pregnancy Advice
    let advice = '', tips = '';
    if (weightGain < 0) {
      advice = '⚠️ You’ve lost weight. Please consult your doctor.';
      tips = '🧘‍♀️ Gentle yoga<br>🥗 Add more healthy calories<br>💧 Stay hydrated';
    } else if (weightGain < 5) {
      advice = '📉 Early stage weight gain. Keep monitoring!';
      tips = '🍲 Eat nutrient-dense meals<br>🧘‍♀️ Try prenatal yoga<br>📅 Track every 2 weeks';
    } else if (weightGain <= recommendedGain) {
      advice = '✅ Healthy weight gain! You’re on track.';
      tips = '🚶‍♀️ Light walking<br>🥦 Balanced meals<br>💤 Adequate rest & hydration';
    } else {
      advice = '⚠️ Weight gain exceeds recommendation.';
      tips = '🥗 Focus on portion control<br>🧘‍♀️ Practice light prenatal exercises<br>🩺 Consider dietitian consultation';
    }
  
    document.getElementById('advice').textContent = advice;
    document.getElementById('tips').innerHTML = tips;
    document.getElementById('result').classList.remove('hidden');
  });
  