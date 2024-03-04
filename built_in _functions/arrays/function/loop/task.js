 
 const users = [
    {
        username : "Buchi",
        height : 5.7,
        age  : 31
    
    
    },

    {
        username : "James",
        height  : 5.6,
        age  : 28

    },


    {
        username : "Irene",
        height : 5.4,
        age : 26
    }
 ]

 function squareHeight(arr) {
    arr.forEach(function(ele){
        let height = ele.height
        let height_squared = height**2
        console.log(height_squared);
        
    });
 
 }
  const square_of_height = squareHeight(users)
  


  const rectangles = [
    {
        height:10,
        width:20
    }, 
   {
       height:5,
       width:10
   },
   {
       height:20,
       width:30
   }

]

// Using foreach loop, write a function that will iterate through an array of shapes and print the area of each shape. Use the rectangles object as example

function areaOfShape(arr) {
    arr.forEach(function(element) {
        let area = element.height * element.width
        console.log(area);

    })

    
}

const area_of_rectangles = areaOfShape(rectangles)


