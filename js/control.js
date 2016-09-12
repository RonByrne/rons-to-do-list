var myModule = angular.module("myModule",[]);

//  the [] is blank so as to contain other modules. this module will inherit
//  properties and methods from those that are passed


myModule.controller("myController", function ($scope) {

// declaration of ToDoList array, with three pre-set elements
// user adds further elements to this array with the input fields in the index page
	ToDoList =[
	    {Task:'Wash Hair', Day: 'Monday', Time: '6pm'},
	    {Task:'Lace Up Shoes', Day: 'Tuesday', Time: '10am'},
	    {Task:'Shave Legs', Day: 'Wednesday', Time: '8pm'},
	    ];
	//add ToDoList array to the scope
	$scope.ToDoList = ToDoList;

// this delete function fires first, so the user is able to delete the pre-set tasks when launching the app,
// otherwise the user needed to input their own task, before they were able to delete the preset ones

	  $scope.delete=function(at){ 
  $scope.ToDoList.splice(at,1);     
}

// this function puts user input data into the ToDoList array with 'push'
	$scope.makeListItem = function() {
		 
	    $scope.ToDoList.push(
	    	{
	    		Task: $scope.newListItem.Task,
	    		Day: $scope.newListItem.Day,
	    		Time: $scope.newListItem.Time
	    	}
		
	    );


	};

});
