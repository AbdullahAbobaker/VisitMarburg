document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    let score = 0;
  
    // Collect answers and calculate score
    const answers = {
      q1: document.querySelector('input[name="q1"]:checked'),
      q2: document.querySelector('input[name="q2"]:checked'),
      q3: document.querySelector('input[name="q3"]:checked'),
      q4: document.querySelector('input[name="q4"]:checked'),
      q5: document.querySelector('input[name="q5"]:checked'),
      q6: document.querySelector('input[name="q6"]:checked'),
      q7: document.querySelector('input[name="q7"]:checked'),
      q8: document.querySelector('input[name="q8"]:checked'),
      q9: document.querySelector('input[name="q9"]:checked'),
      q10: document.querySelector('input[name="q10"]:checked'),
    };
  
    // Validate if all questions are answered
    if (!answers.q1 || !answers.q2 || !answers.q3 || !answers.q4 || !answers.q5 ||
        !answers.q6 || !answers.q7 || !answers.q8 || !answers.q9 || !answers.q10) {
      alert('Please answer all questions.');
      return;
    }
  
    // Calculate score based on correct answers
    if (answers.q1.value === 'c') {
      score += 10; // Example points for correct answer
    }
    if (answers.q2.value === 'c') {
      score += 10; // Example points for correct answer
    }
    if (answers.q3.value === 'a') {
      score += 10; // Example points for correct answer
    }
    if (answers.q4.value === 'b') {
      score += 10; // Example points for correct answer
    }
    if (answers.q5.value === 'a') {
      score += 10; // Example points for correct answer
    }
    if (answers.q6.value === 'b') {
      score += 10; // Example points for correct answer
    }
    if (answers.q7.value === 'b') {
      score += 10; // Example points for correct answer
    }
    if (answers.q8.value === 'a') {
      score += 10; // Example points for correct answer
    }
    if (answers.q9.value === 'c') {
      score += 10; // Example points for correct answer
    }
    if (answers.q10.value === 'b') {
      score += 10; // Example points for correct answer
    }
  
    // Determine result text based on score
    let resultText = '';
    if (score >= 80) {
      resultText = 'Wow! You are a true Marburg expert!';
    } else if (score >= 50) {
      resultText = 'Not bad! You know quite a bit about Marburg.';
    } else {
      resultText = 'You should visit Marburg to learn more!';
    }
  
    // Display result
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `<h3>Your Score: ${score}/100</h3><p>${resultText}</p>`;
  });
  
  