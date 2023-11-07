// old method 

// const user=(name, password, image)=>{
//     const img = image || 'photo.png'
//     console.log(name, password, img);
// };

// user('AMit', 'Secrete', 'image.png');

// new Concept

 const user=(name, password, image='love.png')=>{
         console.log(name, password, image);
     };
    
     user('AMit', 'Secrete'); 
