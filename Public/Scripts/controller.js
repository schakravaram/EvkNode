

angular.module("gifApp").controller("gifController", function ($scope, gifService) {
   // alert(frmCntrl);
    $scope.Phrase = '';     // Search string holder
    
    $scope.giphys = [];    // Result object holder            
    
    $scope.GifSearch = function () {
       // alert(frmCntrl);
        return gifService.hitGiphy($scope);          // Hit Nodejs Rest API
    };
    
    $scope.hover = function () {                    // OnHover display action image
        swapImages(this);
    };
    
    $scope.leave = function () {                    // OnLeave display still image
        swapImages(this);
    };
});

//Swap the action and still images when user hovers/leaves mouse pointer from the image

function swapImages(obj) {
    var tmp = obj.gif.fxHiStillImgUrl;
    obj.gif.fxHiStillImgUrl = obj.gif.fxHiImgUrl;
    obj.gif.fxHiImgUrl = tmp;
}

