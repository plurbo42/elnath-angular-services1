app.service('CompanyService', ['$http', function($http){
    var self = this;
    self.companies = { list: [] };
    self.getCompany = function(){
        $http({
            method: 'GET',
            url: '/company',
        }).then(function(response){
            console.log(response.data);
            self.companies.list = response.data;
        })
    };

    self.getCompany();
    
    self.newCompany = {};

    self.postCompany = function(newCompanyObject){
        console.log(newCompanyObject)
        $http({
            method: 'POST',
            url: '/company',
            data: newCompanyObject,
        }).then(function(response){
            console.log(response);
            self.getCompany();
            self.newCompany.name = '';
            self.newCompany.country = '';
        })
    };

}]);