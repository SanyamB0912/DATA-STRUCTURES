function submitQuiz() {
    // Correct answers
    var answers = {
      q1: 'PUSH',
      q2: 'POP',
      q3: 'UNDERFLOW',
      q4: 'ENQUEUE',
      q5: 'FIFO',
    };
  
    // Get user inputs
    var userAnswers = {
      q1: document.getElementById('q1').value.trim(),
      q2: document.getElementById('q2').value.trim(),
      q3: document.getElementById('q3').value.trim(),
      q4: document.getElementById('q4').value.trim(),
      q5: document.getElementById('q5').value.trim(),
    };
  
    // Calculate marks and create result message
    var marks = 0;
    var result = '<h3>Quiz Result</h3>';
    for (var question in userAnswers) {
      if (userAnswers[question].toLowerCase() === answers[question].toLowerCase()) {
        marks++;
      }
      result += '<p><strong>Q' + question.slice(1) + ':</strong> ' + userAnswers[question] + ' (Correct Answer: ' + answers[question] + ')</p>';
    }
    result += '<p><strong>Marks Obtained:</strong> ' + marks + '/' + Object.keys(answers).length + '</p>';
  
    // Display result
    document.getElementById('quiz-result').innerHTML = result;
  }
  