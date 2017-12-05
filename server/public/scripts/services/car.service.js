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
        console.log('in post car')
        $http({
            method: 'POST',
            url: '/car',
            data: newCarObject,
        }).then(function(response){
            console.log(response);
            self.getCar();
        })
    };

    self.deleteCar = function(carObject){
        console.log('clicked delete car', carObject.id);
        $http({
            method: 'DELETE',
            url: '/car/' + carObject.id
        }).then(function(response){
            console.log(response);
            self.getCar();
        })
    };

}]);