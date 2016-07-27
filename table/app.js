var app = angular.module('app', ['ngAnimate','ngTouch', 'ui.grid','ui.grid.resizeColumns', 'ui.grid.moveColumns', 'ui.grid.exporter']);



app.controller('MainCtrl', ['$scope','$http','uiGridConstants', function ($scope, $http, uiGridConstants) {
    
    $http.get('./resources/turbine1.json') //get data from json, to be replaced with db call
        .success(function(data){
            $scope.gridOptions.data = data;
    });
    
    var filteringRules = [
            { field: 'Date', headerCellClass: $scope.highlightFilteredHeader },
            { field: 'Output', filters: [
                    {
                      condition: uiGridConstants.filter.GREATER_THAN,
                      placeholder: 'Above'
                    },
                    {
                      condition: uiGridConstants.filter.LESS_THAN,
                      placeholder: 'Under'
                    }
                ], headerCellClass: $scope.highlightFilteredHeader},
            { field: 'Heat Rate', filters: [
                    {
                      condition: uiGridConstants.filter.GREATER_THAN,
                      placeholder: 'Above'
                    },
                    {
                      condition: uiGridConstants.filter.LESS_THAN,
                      placeholder: 'Under'
                    }
                ], headerCellClass: $scope.highlightFilteredHeader},
            { field: 'Compressor Efficiency', filters: [
                    {
                      condition: uiGridConstants.filter.GREATER_THAN,
                      placeholder: 'Above'
                    },
                    {
                      condition: uiGridConstants.filter.LESS_THAN,
                      placeholder: 'Under'
                    }
                ], headerCellClass: $scope.highlightFilteredHeader},
            { field: 'Availability', filters: [
                    {
                      condition: uiGridConstants.filter.GREATER_THAN,
                      placeholder: 'Above'
                    },
                    {
                      condition: uiGridConstants.filter.LESS_THAN,
                      placeholder: 'Under'
                    }
                ], headerCellClass: $scope.highlightFilteredHeader},
            { field: 'Reliability', filters: [
                    {
                      condition: uiGridConstants.filter.GREATER_THAN,
                      placeholder: 'Above'
                    },
                    {
                      condition: uiGridConstants.filter.LESS_THAN,
                      placeholder: 'Under'
                    }
                ], headerCellClass: $scope.highlightFilteredHeader},
            { field: 'Fired Hours', filters: [
                    {
                      condition: uiGridConstants.filter.GREATER_THAN,
                      placeholder: 'Above'
                    },
                    {
                      condition: uiGridConstants.filter.LESS_THAN,
                      placeholder: 'Under'
                    }
                ], headerCellClass: $scope.highlightFilteredHeader},
            { field: 'Trips', headerCellClass: $scope.highlightFilteredHeader },
            { field: 'Starts', headerCellClass: $scope.highlightFilteredHeader },
            
        ]
    
    $scope.gridOptions = { //Handles the filtering
        enableFiltering: true,
        enableColumnResizing: true,
        exporterCsvFilename: 'data.csv',
        enableGridMenu: true,
        exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location")),
        columnDefs:filteringRules};   
    
    $scope.gridOptions2 = { //Handles the filtering
        enableFiltering: true,
        enableColumnResizing: true,
        exporterCsvFilename: 'data.csv',
        enableGridMenu: true,
        exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location")),
        columnDefs:filteringRules};  
    
    $http.get('./resources/turbine2.json') //get data from json, to be replaced with db call
        .success(function(data){
            $scope.gridOptions2.data = data;
    });
    
    $scope.gridOptions3 = { //Handles the filtering
        enableFiltering: true,
        enableColumnResizing: true,
        exporterCsvFilename: 'data.csv',
        enableGridMenu: true,
        exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location")),
        columnDefs:filteringRules};   
    
    $http.get('./resources/turbine3.json') //get data from json, to be replaced with db call
        .success(function(data){
            $scope.gridOptions3.data = data;
    });
    
    $scope.gridOptions4 = { //Handles the filtering
        enableFiltering: true,
        enableColumnResizing: true,
        exporterCsvFilename: 'data.csv',
        enableGridMenu: true,
        exporterCsvLinkElement: angular.element(document.querySelectorAll(".custom-csv-link-location")),
        columnDefs:filteringRules};   
    
    $http.get('./resources/turbine4.json') //get data from json, to be replaced with db call
        .success(function(data){
            $scope.gridOptions4.data = data;
    });
}]);
