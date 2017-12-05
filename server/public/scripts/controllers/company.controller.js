app.controller('CompanyController', ['CompanyService', function(CompanyService){
    var self = this;
    self.message = 'Welcome Home';
    self.company = CompanyService.companies;
    self.newCompany = CompanyService.newCompany;
    self.postCompany = CompanyService.postCompany;
}]);