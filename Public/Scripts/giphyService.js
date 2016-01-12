

var gifRest = angular.module("gifRest", []);

gifRest.service("gifService", function ($http) {
    this.hitGiphy = function (scope) {
        if (scope && $http) { 
            $http.get('/api/giphy/' + scope.Phrase.replace(/\s+/g, '+'))            //Replace space with +
             .success(function (data) {
                scope.giphys = data;
            })
             .error(function (data) {
                scope.giphys = [];
                console.log('Error: ' + data);
            });
        }
    }
}
);






















