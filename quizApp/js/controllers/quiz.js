(function(){
    
    angular.module('Quiz')
        .controller('quizCtrl', ['quizMatrix','DataService',function(quizMatrix,DataService) { 
            let quiz = this;
            
            quiz.quizMatrix = quizMatrix;
            quiz.msg = "quiz message";
            
            quiz.data = DataService;
            quiz.answers = DataService.correctAnswers;
            quiz.questions = DataService.questions;
            quiz.selectedQuest = 0;
            quiz.questionsNum = DataService.questions.length;
            quiz.score = 0;
            quiz.finish = 1;
            quiz.error = "";
            
            
            quiz.chSelectedQuest = function(index) {
                quiz.selectedQuest = index;
                quiz.error = '';
            };
            
            quiz.selectAnswer = function(index) {
                quiz.questions[quiz.selectedQuest].selected = index;
//              gebug 
                //console.info(quiz.answers[quiz.selectedQuest]);
//                console.log(quiz.questions[quiz.selectedQuest].selected);
            };
            quiz.plusActive = function(){
                if(quiz.selectedQuest <quiz.questionsNum-1){
                    quiz.error = "";
                    quiz.selectedQuest++;
                    
                    console.log(quiz.selectedQuest);
                } else {
                    // check for unanswered questions
                    for(var i=0;i<quiz.questionsNum;i++) {
                        if(quiz.questions[i].selected === null) {
                            quiz.error = 'You have not answered this question yet!';
                            quiz.selectedQuest = i;
                            break;
                            
                        } else {
                            // claculate the result
                                quiz.finish++;
                                if(quiz.answers[i] === quiz.questions[i].selected) {
                                   quiz.questions[i].correct = true;
                                    quiz.score++;
                                } else {
                                    quiz.questions[i].correct = false;
   
                                }
                            console.log(quiz.finish);
                        }
                    
                            
                        
                    }
                    
                      
                     if(quiz.finish >= quiz.questionsNum) {
                         var scorePercentage = (quiz.score/quiz.questionsNum)*100;
                         Loader(scorePercentage);    
                    alert("Your score is s" +quiz.score+' out of '+quiz.questionsNum);
                         }
                     
                    //quiz.selectedQuest = 0;
                }  
            };
            
        }]);
    
})();