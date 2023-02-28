var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result= JSON.parse(request.response);
    //1.Get all the countries from the Asia continent /region using the Filter function
    var reg=result.filter((ele)=>ele.region==="Asia");
    console.log(reg);

    //2.Get all the countries with a population of less than 2 lakhs using Filter function
    var pop=result.filter((a)=>a.population<2000000);
     console.log(pop);

    //3.Print the following details name, capital, flag using forEach function
      var detail=result.forEach(element => {
      console.log(element.name,element.capital,element.flag);
    })

   //4.Print the total population of countries using reduce function
     var total=result.reduce((a,b)=>a+b.population,0);
     console.log(total);
    
    //5.Print the country which uses US Dollars as currency.
   var dollar=result.filter((ele)=>ele.currencies==="US Dollar");
   console.log(dollar);



}