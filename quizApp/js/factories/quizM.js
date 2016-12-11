(function() {
    angular
        .module('Quiz')
        .factory('quizMatrix', function() {
         
            var quizObj = {
                quizActive: false,
                changeState(state) {
                    this.quizActive = state;
                }
            };
            return quizObj;
        });
})();