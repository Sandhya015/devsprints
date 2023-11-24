document.addEventListener('DOMContentLoaded', function() {
    const quizSubmitButtons = document.querySelectorAll('.quiz-submit');
    const quizFeedbacks = document.querySelectorAll('.quiz-feedback');
    const challengeCompleteButtons = document.querySelectorAll('.challenge-complete');
    const challengeFeedbacks = document.querySelectorAll('.challenge-feedback');
    const pointsDisplays = document.querySelectorAll('.points');
    const badgesDisplays = document.querySelectorAll('.badges');
    const earnPointsButtons = document.querySelectorAll('.earn-points');
    const earnBadgeButtons = document.querySelectorAll('.earn-badge');
    
    let points = 0;
    let badges = 0;
    
    quizSubmitButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const selectedAnswer = document.querySelector(`input[name="q${index + 1}"]:checked`);
            const feedback = quizFeedbacks[index];
            
            if (selectedAnswer && selectedAnswer.value === 'c') {
                feedback.textContent = 'Correct answer!';
            } else {
                feedback.textContent = 'Incorrect answer. Please try again.';
            }
        });
    });
    
    
    challengeCompleteButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            const feedback = challengeFeedbacks[index];
            feedback.textContent = 'Challenge completed! Thank you for making a positive impact.';
        });
    });
    
    
    earnPointsButtons.forEach(button => {
        button.addEventListener('click', function() {
            points += 10;
            pointsDisplays.forEach(display => {
                display.textContent = points;
            });
        });
    });
    
    earnBadgeButtons.forEach(button => {
        button.addEventListener('click', function() {
            badges++;
            const badgeDisplays = document.querySelectorAll('.badges');
            
            badgeDisplays.forEach(display => {
                if (badges === 1) {
                    display.textContent = 'Silver';
                } else if (badges === 2) {
                    display.textContent = 'Gold';
                }
            });
        });
    });
});
