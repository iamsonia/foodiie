var foodieApp = angular.module('foodieApp',['ngRoute']);  //foodieapp is a variable. We are storing the value returned by the angular.module() function here
 foodieApp.config(function ($routeProvider) {   //.config() is a function that allows us to set-up our app in some way and in this We pass it a function as the parameter and $routeProvider is an object defined in ngRoute  which allows us to set-up routes
	$routeProvider
	.when('/',{        //   / is for login page
		templateUrl: 'pages/logincontroller.html',    //here We pass two parameters & The first parameter is the URL of the route Here '/' means the root route
		controller: 'loginController'
	})
	.when('/home',{            //   / is for main page on which we show mainController
		templateUrl: 'pages/maincontroller.html',
		controller: 'mainController'
	})
  .when('/restaurant/:id',{     //bcoz we have no. of restaurant so  we dont want to create multiple restaurant.html file and this hashbang par is called template url and id part is known as route parameter now after restaurant/ whatever value is given it take like /1 /2 /3 then id value is 1,2,3 and so on now for catching the id value it is necessary that anywhere it is defined also so we have to define id in restaurantController
    templateUrl: 'pages/restaurant.html',
		controller:  'restaurantController'
  })
  .when('/favouritesfoodlist',{     //bcoz we have no. of restaurant so  we dont want to create multiple restaurant.html file and this hashbang par is called template url and id part is known as route parameter now after restaurant/ whatever value is given it take like /1 /2 /3 then id value is 1,2,3 and so on now for catching the id value it is necessary that anywhere it is defined also so we have to define id in restaurantController
    templateUrl: 'pages/favfood.html',
    controller:  'foodListController'
  })
})   //route provider closed

foodieApp.controller('mainController',function($scope, $location) {    //here in the first argument, we are passing the name of the controller we want to create And in the second argument, we are passing the function we want the controller to do .if we write in console that console.log(foodieApp) then we will find that it is a object with no. of properties
      //$Scope is an object to which we can add a list of properties and functions
	//$scope.restaurants = ['Farzi Cafe','Pizza Hut','Wenger\'s Deli','Sagar Ratna']; //\is used to print quotes and this code is for list of items in restaurant and it is array
    //[] bracesc we write ng route and here We are telling Angular, that when you are initializing, also use the module called 'ngRoute'
    $scope.foodListApp = function(){
    		$location.url('favouritesfoodlist')

    	}
$scope.restaurants = [{
	name: 'Karnal Haveli',
	address: '135.5 K M Stone Near Karan Lake',
	location: 'karnal,Haryana',
	category: ' Indian, Asian, Vegetarian Friendly',
	vote: '3.9',
	cuisines: 'Indian',
	cost: '2808',
	hours: '6:00 AM to 11:00 PM',
	image: 'haveli1.jpg',
	phone:'09891900884',
	  id:1
},
{
	name: 'Neelkanth Star',
	address: 'Near Radha Swami Satsang | G.T Road |NH-1 |Ansal Town',
	location: 'karnal,Haryana',
	category: 'Food Court',
	vote: '4.2',
	cuisines: 'Indian,Fast Food ,Asian',
	cost: '1500',
	hours: '24 hrs open',
	image: 'neelkanth1.jpg',
    phone:'09992222222',
	id:2
},{
	name: 'Madrasi Masala Dosa',
	address: 'Shop No. 101, Mugal Canal',
	location: 'karnal,Haryana',
	category: 'Southern Food',
	vote: '4.7',
	cuisines: 'South Indian',
	cost: '150',
	hours: ' 6:00 PM to 11:45 PM (Mon-Sat), Sunday Closed',
	image: 'Dosa2.jpg',
	phone:'09034191912',
	id:3
},{
	name: 'Bikaner Sweets',
	address: 'Near Civil Hospital Chowk, Kunjpura Road',
	location: 'karnal,Haryana',
	category: 'Sweets Corner',
	vote: '4.0',
	cuisines: 'Indian',
	cost: '250',
	hours: ' 10 AM to 10 PM (Mon-Sat), Sunday Closed',
	image: 'bikaner1.jpg',
	phone:'09416362667',
	id:4
},
{
	name: 'Daana Paani',
	address: 'sector-45,CHD City, Jhanjhari village, National Highway-1 |Adjacent to Chd city Entrance',
	location: 'karnal,Haryana',
	category: 'Family restaurant',
	vote: '4.5',
	cuisines: 'Indian',
	cost:'2000',
	hours: '24 hrs open',
	image: 'daana1.jpg',
	phone:'09834549876',
	id:5
},
{
	name: 'Vivaan',
	address: '1.8 Km from karan lake, NH-1 Highway',
	location: 'karnal,Haryana',
	category: 'Family restaurant',
	vote: '4.1',
	cuisines: 'Indian',
	cost: '4215',
	hours: '24 hrs open',
	image: 'Vivan1.jpg',
	phone:'09215710000',
	id:6
},{
	name: 'Hot Billions',
	address: 'Railway Station Road Near Jain Girl School',
	location: 'karnal,Haryana',
	category: 'Chinesse Food',
	vote: '4.0',
	cuisines: 'Indian',
	cost:'500',
	hours: '11:00 AM to 1000 PM',
	image: 'hot1.jpg',
	phone: '09813475000, 9253868000',
	id:7
},{
	name: 'Food Hut',
	address: 'Shop No. 19, Behind Bus Stand,Mahila Ashram Complex',
	location: 'karnal,Haryana',
	category: 'Chinesse Food',
	vote: '3.8',
	cuisines: 'Indian',
	cost:'500',
	hours: '12 PM to 9 Pm (Mon To Sat only)',
	image: 'chinesse1.jpg',
	phone: '01842261483,9812055483',
	id:8
},{
	name: 'Savoy Greens',
	address: '131 Km Milestone Near Karna Lake,GT Road Karnal',
	location: 'karnal,Haryana',
	category: 'Chinesse Food',
	vote: '4.6',
	cuisines: 'Indian',
	cost:'1200',
	hours: '6 AM to 11 Pm',
	image: 'savoy1.jpg',
	phone: '01842265858',
	id:9
}]
})   //maincontroller closed
foodieApp.controller('loginController',function($scope , $location) {     //controller defined in class login
$scope.gotohome=function(){
//console.log('Do Something')
$location.url('home')    //we give here location bcoz we define place from where it take the url
}
})  //logincontroller closed

foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {    //params is parameter and $http bcoz for ingredients we have to use clarifai and with the help of http we make http request without the help of jquery
    $scope.foodListApp = function(){
    		$location.url('favouritesfoodlist')
    	                             }
    	$scope.ingredients = [];
    	$scope.getIngredients = function(url) {
    	var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}' //passing 3 strings very intelligetnly :)
    	//clarifai ka define kiya hua format ^
    	//$.ajax ki jaga $http use kia... $http angualr ka argument h
    	$http({
    		// type is replaced with method
    		'method': 'POST',
    		'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
    		'headers': {
    			'Authorization': 'Key dc6ed7b0754745c9880d1093ada33d40 ',
    			'Content-Type': 'application/json'
    		},
    		'data': data //yahaan se chaining concept use hua h.. first function success k liye aur second failure k liye
    	}).then(function (response) {
    			var ingredients = response.data.outputs[0].data.concepts;//object(response) k andar k object(data) k andar k object(outputs) k andar k araay-ka-first-index([0]) k andar k object(data) kandar k object(concepts) ko access kiya h
      			var list = '';
      			for (var i =0;i<ingredients.length;i++)
    				{
    					// console.log(response.data.outputs[0].data.concepts[i].name);
    					//object(response) k andar k object(data) k andar k object(outputs) k andar k araay-ka-first-index([0]) k andar k object(data) kandar k object(concepts) ke ek ek index  k object(name) ko liya
    					$scope.ingredients.push(ingredients[i].name); //aur usko isme push kiya one-by-one
      			}
            }, function (xhr) {
            	console.log(xhr);
            })
    	}
    $scope.restaurantId = $routeParams.id;
  var restaurants = [{
    	name: 'Karnal Haveli',
    	address: '135.5 K M Stone Near Karan Lake',
    	location: 'karnal,Haryana',
    	category: ' Indian, Asian, Vegetarian Friendly',
    	vote: '3.9',
    	cuisines: 'Indian',
    	cost: '2808',
    	hours: '6:00 AM to 11:00 PM',
    	image: 'haveli1.jpg',
    	phone:'09891900884',
      bestDish: {     //here we declare objects into objects now it is also defined in restaurnt.html and in main.js file
      name: 'Jalebi',
      image: 'http://www.buzzntravel.com/userfiles/images/Jalebi-with-Rabri.png'
              }
    },
    {
    	name: 'Neelkanth Star',
    	address: 'Near Radha Swami Satsang | G.T Road |NH-1 |Ansal Town',
    	location: 'karnal,Haryana',
    	category: 'Food Court',
    	vote: '4.2',
    	cuisines: 'Indian,Fast Food ,Asian',
    	cost: '1500',
    	hours: '24 hrs open',
    	image: 'neelkanth1.jpg',
        phone:'09992222222'
    },{
    	name: 'Madrasi Masala Dosa',
    	address: 'Shop No. 101, Mugal Canal',
    	location: 'karnal,Haryana',
    	category: 'Southern Food',
    	vote: '4.7',
    	cuisines: 'South Indian',
    	cost: '150',
    	hours: ' 6:00 PM to 11:45 PM (Mon-Sat), Sunday Closed',
    	image: 'Dosa2.jpg',
    	phone:'09034191912'
    },{
    	name: 'Bikaner Sweets',
    	address: 'Near Civil Hospital Chowk, Kunjpura Road',
    	location: 'karnal,Haryana',
    	category: 'Sweets Corner',
    	vote: '4.0',
    	cuisines: 'Indian',
    	cost: '250',
    	hours: ' 10 AM to 10 PM (Mon-Sat), Sunday Closed',
    	image: 'bikaner1.jpg',
    	phone:'09416362667'
    },
    {
    	name: 'Daana Paani',
    	address: 'sector-45,CHD City, Jhanjhari village, National Highway-1 |Adjacent to Chd city Entrance',
    	location: 'karnal,Haryana',
    	category: 'Family restaurant',
    	vote: '4.5',
    	cuisines: 'Indian',
    	cost:'2000',
    	hours: '24 hrs open',
    	image: 'daana1.jpg',
    	phone:'09834549876'
    },
    {
    	name: 'Vivaan',
    	address: '1.8 Km from karan lake, NH-1 Highway',
    	location: 'karnal,Haryana',
    	category: 'Family restaurant',
    	vote: '4.1',
    	cuisines: 'Indian',
    	cost: '4215',
    	hours: '24 hrs open',
    	image: 'Vivan1.jpg',
    	phone:'09215710000'
    },{
    	name: 'Hot Billions',
    	address: 'Railway Station Road Near Jain Girl School',
    	location: 'karnal,Haryana',
    	category: 'Chinesse Food',
    	vote: '4.0',
    	cuisines: 'Indian',
    	cost:'500',
    	hours: '11:00 AM to 1000 PM',
    	image: 'hot1.jpg',
    	phone: '09813475000, 9253868000'
    },{
    	name: 'Food Hut',
    	address: 'Shop No. 19, Behind Bus Stand,Mahila Ashram Complex',
    	location: 'karnal,Haryana',
    	category: 'Chinesse Food',
    	vote: '3.8',
    	cuisines: 'Indian',
    	cost:'500',
    	hours: '12 PM to 9 Pm (Mon To Sat only)',
    	image: 'chinesse1.jpg',
    	phone: '01842261483,9812055483'
    },{
    	name: 'Savoy Greens',
    	address: '131 Km Milestone Near Karna Lake,GT Road Karnal',
    	location: 'karnal,Haryana',
    	category: 'Chinesse Food',
    	vote: '4.6',
    	cuisines: 'Indian',
    	cost:'1200',
    	hours: '6 AM to 11 Pm',
    	image: 'savoy1.jpg',
    	phone: '01842265858'
    }]

 $scope.restaurant = restaurants[$routeParams.id - 1];
 // restaurant k id k according uska object use krna
});


foodieApp.controller('foodListController',function($scope,$http){

 // first request using api
   $scope.list1 = [];
   var data = '{"inputs":[{"data":{"image":{"url":"' +'https://img.grouponcdn.com/deal/iJVvZzL5wXt2WdwKgQhLgN/186347703-3642x2185/v1/c700x420.jpg'+ '"}}}]}'
   $http({
     'method' : 'POST',
     'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
     'headers': {
       'Authorization': 'Key adba995b40d0445a87e358298029565a',
       'Content-Type': 'application/json'
     },
     'data': data
   }).then(function (response){
     var ingredients = response.data.outputs[0].data.concepts;
     var list = '';
     for (var i =0;i<ingredients.length-10;i++)
     {
       $scope.list1.push(ingredients[i].name);
       // console.log(ingredients[i].name)
     }

   },function (xhr){
     console.log(xhr)
   })
 // second request
   $scope.list2 = [];
   var data = '{"inputs":[{"data":{"image":{"url":"' +'http://www.blendspice6.com/images/2.jpg'+ '"}}}]}'
   $http({
     'method' : 'POST',
     'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
     'headers': {
       'Authorization': 'Key adba995b40d0445a87e358298029565a',
       'Content-Type': 'application/json'
     },
     'data': data
   }).then(function (response){
     var ingredients = response.data.outputs[0].data.concepts;
     for (var i =0;i<ingredients.length-10;i++)
     {
       $scope.list2.push(ingredients[i].name);
       // console.log(ingredients[i].name)
     }
   },function (xhr){
     console.log(xhr)
   })
 // Third request
   $scope.list3 = [];
   var data = '{"inputs":[{"data":{"image":{"url":"' +'https://img.grouponcdn.com/deal/uvzXjairBk34ASNJGeTn/DT-700x420/v1/c700x420.jpg'+ '"}}}]}'
   $http({
     'method' : 'POST',
     'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
     'headers': {
       'Authorization': 'Key adba995b40d0445a87e358298029565a',
       'Content-Type': 'application/json'
     },
     'data': data
   }).then(function (response){
     var ingredients = response.data.outputs[0].data.concepts;
     var list = '';
     for (var i =0;i<ingredients.length-10;i++)
     {
       $scope.list3.push(ingredients[i].name);
       // console.log(ingredients[i].name)
     }
   },function (xhr){
     console.log(xhr)
   })
 // Fourth request
   $scope.list4 = [];
   var data = '{"inputs":[{"data":{"image":{"url":"' +'https://img.grouponcdn.com/deal/8DDtq5XRzVnLXEUnPHPd/p2-2048x1229/v1/c700x420.jpg'+ '"}}}]}'
   $http({
     'method' : 'POST',
     'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
     'headers': {
       'Authorization': 'Key adba995b40d0445a87e358298029565a',
       'Content-Type': 'application/json'
     },
     'data': data
   }).then(function (response){
     var ingredients = response.data.outputs[0].data.concepts;
     var list = '';
     for (var i =0;i<ingredients.length-10;i++)
     {
       $scope.list4.push(ingredients[i].name);
       // console.log(ingredients[i].name)
     }
   },function (xhr){
     console.log(xhr)
   })
 // Fifth request
   $scope.list5 = [];
   var data = '{"inputs":[{"data":{"image":{"url":"' +'http://desotopharmacy.com/wp-content/uploads/2014/05/ice-cream.png'+ '"}}}]}'
   $http({
     'method' : 'POST',
     'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
     'headers': {
       'Authorization': 'Key adba995b40d0445a87e358298029565a',
       'Content-Type': 'application/json'
     },
     'data': data
   }).then(function (response){
     var ingredients = response.data.outputs[0].data.concepts;
     var list = '';
     for (var i =0;i<ingredients.length-10;i++)
     {
       $scope.list5.push(ingredients[i].name);
       // console.log(ingredients[i].name)
     }
   },function (xhr){
     console.log(xhr)
   })

   var imagesList=[{
     name:'Fajitas',
     img:'https://img.grouponcdn.com/deal/iJVvZzL5wXt2WdwKgQhLgN/186347703-3642x2185/v1/c700x420.jpg'
   },{
     name:'Chicken Tikka',
     img:'http://www.blendspice6.com/images/2.jpg'
   },{
     name:'German Pastries',
     img:'https://img.grouponcdn.com/deal/uvzXjairBk34ASNJGeTn/DT-700x420/v1/c700x420.jpg'
   },{
     name:'Pizza',
     img:'https://img.grouponcdn.com/deal/8DDtq5XRzVnLXEUnPHPd/p2-2048x1229/v1/c700x420.jpg'
   },{
     name:'Sundae scoops',
     img:'http://desotopharmacy.com/wp-content/uploads/2014/05/ice-cream.png'
   }]
   var bit;

 // click event
 $scope.newFunc = function(){

     if($('input:checked').length>=5)
     {
       var n1 = $('#ig0').prop("checked");
       var n2 = $('#ig1').prop("checked");
       var n3 = $('#ig2').prop("checked");
       var n4 = $('#ig3').prop("checked");
       var n5 = $('#ig4').prop("checked");
       var n6 = $('#ig5').prop("checked");
       var n7 = $('#ig6').prop("checked");
       var n8 = $('#ig7').prop("checked");
       var n9 = $('#ig8').prop("checked");
       var n10 = $('#ig9').prop("checked");
       var n11 = $('#ig10').prop("checked");
       var n12 = $('#ig11').prop("checked");
       var n13 = $('#ig12').prop("checked");
       var n14 = $('#ig13').prop("checked");
       var n15 = $('#ig14').prop("checked");
       var n16 = $('#ig15').prop("checked");
       var n17 = $('#ig16').prop("checked");
       var n18 = $('#ig17').prop("checked");
       var n19 = $('#ig18').prop("checked");
       var n20 = $('#ig19').prop("checked");
       var n21 = $('#ig20').prop("checked");
       var n22 = $('#ig21').prop("checked");
       var n23 = $('#ig22').prop("checked");
       var n24 = $('#ig23').prop("checked");
       var n25 = $('#ig24').prop("checked");
       var n26 = $('#ig25').prop("checked");
       var n27 = $('#ig26').prop("checked");
       var n28 = $('#ig27').prop("checked");
       var n29 = $('#ig28').prop("checked");
       var n30 = $('#ig29').prop("checked");

       var dummylist0 =[n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n11,n12,n13,n14,n15,n16,n17,n18,n19,n20,n21,n22,n23,n24,n25,n26,n27,n28,n29,n30]

       var selectList1 =[];
       var selectList2 =[];
       for(var i=0 ;i<dummylist0.length;i++)
       {
         if(dummylist0[i] === true){
           var id = '#ig'+i
           selectList1.push($(id).val())
         }
         else{
           var id = '#ig'+i
           selectList2.push($(id).val())
         }
       }
       console.log('Selected ingredients '+selectList1)
       console.log('left out ingredients '+selectList2)
       var count1=0;
       var count2=0;
       var count3=0;
       var count4=0;
       var count5=0;
       for(var i=0;i<selectList1.length;i++)
       {
         for(var j=0;j<$scope.list1.length;j++)
         {
           console.log('searching for '+selectList1[i])
           if(selectList1[i] == $scope.list1[j]){
             console.log(selectList1[i]+' found on '+ j +' index of $scope.list1')
             count1++;
           }
         }
       // }
       // // console.log(count1+' matched in $scope.list1')
       // for(var i=0;i<selectList1.length;i++)
       // {
         for(var j=0;j<$scope.list2.length;j++)
         {
           // console.log('searching for '+selectList1[i])
           if(selectList1[i] == $scope.list2[j]){
             // console.log(selectList1[i]+' found on '+ j +' index of $scope.list2')
             count2++;
           }
         }
       // }
       // // console.log(count2 +' matched in $scope.list2')
       // for(var i=0;i<selectList1.length;i++)
       // {
         for(var j=0;j<$scope.list3.length;j++)
         {
           // console.log('searching for '+selectList1[i])
           if(selectList1[i] == $scope.list3[j]){
             // console.log(selectList1[i]+' found on '+ j +' index of $scope.list3')
             count3++;
           }
         }
       // }
       // // console.log(count3 +' matched in $scope.list3')
       // for(var i=0;i<selectList1.length;i++)
       // {
         for(var j=0;j<$scope.list4.length;j++)
         {
           // console.log('searching for '+selectList1[i])
           if(selectList1[i] == $scope.list4[j]){
             // console.log(selectList1[i]+' found on '+ j +' index of $scope.list3')
             count4++;
           }
         }
       // }
       // for(var i=0;i<selectList1.length;i++)
       // {
         for(var j=0;j<$scope.list5.length;j++)
         {
           // console.log('searching for '+selectList1[i])
           if(selectList1[i] == $scope.list5[j]){
             // console.log(selectList1[i]+' found on '+ j +' index of $scope.list3')
             count5++;
           }
         }
       }
       var countList = [];
       var max = Math.max(count1,count2,count3,count4,count5)
       countList.push(count1,count2,count3,count4,count5)
       console.log(countList)
       console.log('max is '+max)

       // $scope.bgSet = imagesList[max]
     // console.log($scope.bgSet);

     if(countList[0]!=countList[1]!=countList[2]!=countList[3]!=countList[4]){
       for(var s=0;s<countList.length;s++)
       {
         if(countList[s]==max)
         {
           bit = s;
           $scope.bgSet = imagesList[bit]
           console.log(imagesList[bit])
           console.log(bit+' is the used index')
           return 0;
         }
       }
     }
     else {
       equalCheck();
     }
       function equalCheck(){
         for(var i=0;i<countList.length;i++)
         {
           for(var j=1;j<countList.length;j++)
           {
             if(countList[i]==max && countList[j]==max && i!=j){
               console.log(i+' & '+j+' match')
               var listName1;
               var listName2;
               var countAgain1 =0;
               var countAgain2 = 0;
               if(i=0){ listName1 = $scope.list5}
               else if(i=1){listName1 = $scope.list1}
               else if(i=2){listName1 = $scope.list2}
               else if(i=3){listName1 = $scope.list3}
               else if(i=4){listName1 = $scope.list4}
               if(j=1){listName2 = $scope.list2}
               else if(j=2){listName2 = $scope.list3}
               else if(j=3){listName2 = $scope.list4}
               else if(j=4){listName2 = $scope.list5}

               for(var x=0;x<selectList2.length;x++)
               {
                 for(var y=0;y<listName1.length;y++)
                 {
                   if(selectList2[x]===listName1[y])
                   {
                     countAgain1++;
                   }
                 }
                 for(var y=0;y<listName2.length;y++)
                 {
                   if(selectList2[x]===listName2[y])
                   {
                     countAgain2++;
                   }
                 }
                 if(countAgain1>countAgain2){
                   bit=j
                 }
                 else if(countAgain2>countAgain1){
                   bit=i
                 }
               }
               // $scope.bgSet = imagesList[max]
               console.log(bit+' from inside equal check func')
               console.log(countAgain1);
               console.log(countAgain2);
               // $scope.bgSet= imagesList[bit]
               // console.log(imagesList[bit])
               // console.log($scope.bgSet)
               // return 0;
             }
           }
         }

         // return 0;
       }
     // bit = max;
     $scope.bgSet = imagesList[bit]
     console.log($scope.bgSet);

     }
     else{
       alert('please select more than 5')
     }
 };


 //
});
