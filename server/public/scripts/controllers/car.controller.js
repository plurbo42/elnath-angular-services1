app.controller('CarController', ['CarService', 'CompanyService', function(CarService, CompanyService){
    var self = this;
    self.car = CarService.cars;
    self.company = CompanyService.companies;
    self.newCar = CarService.newCar;
}]);