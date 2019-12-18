let promise2 = new Promise((resolve, reject) => {
    console.log(1);
    resolve(5);
    console.log(2);
  }).then((val) => {
    console.log(val);
  },(rej)=>{console.log(rej);});
  
  promise2.then(() => {
    console.log(3);
  });
  
  console.log(4);
  
  setTimeout(function() {
    console.log(6);
  });