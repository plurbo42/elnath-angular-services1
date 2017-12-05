app.service('CarService', ['$http', function($http){
    var self = this;
    self.cars = { list: [] };
    self.getCar = function(){
        $http({
            method: 'GET',
            url: '/car',
        }).then(function(response){
            console.log(response.data);
            self.cars.list = response.data;
        })
    };

    self.getCar();

    self.newCar = {};

    self.postCar = function(newCarObject){
        $http({
            method: 'POST',
            url: '/car',
            data: newCarObject,
        }).then(function(response){
            console.log(response)
        })
    };


}]);