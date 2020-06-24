function reverseString(str) {
    let rev = str.map("");
    let no = rev.length;
    let newArr = [];
    for (let i = no ;i<0; i-- ) {
      newArr.push(rev[i]);
    }
    console.log( newArr);
  }
  
  reverseString("hello");

  console.log("oi");
  