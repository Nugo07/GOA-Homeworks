const book = {
    author: "Jules Verne",
    title: "The Mysterious Island",
    yearPublished: 1875
  };
  
  book.genre = "Adventure Fiction";
  
  delete book.yearPublished;
  
  console.log(book.title)
  
  if ("yearPublished" in book) {
    console.log("Hello");
  }else{
      console.log("This property not in object")
  }
  
  for (let key in book){
      console.log(Object.keys(book))
  }
  
  const goaStudents = [
    { name: "Roba", age: 13 },
    { name: "Nugzar", age: 16 },
    { name: "Gio", age: 15 }
  ];
  
  const objectLength = Object.keys(book).length;
  console.log(objectLength);
  
  const bookValues = Object.values(book);
  console.log(bookValues); 
  
  const  nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  nums.push(11)
  console.log(nums)
  
  nums.unshift(0)
  console.log(nums)
  
  nums.pop()
  console.log(nums)
  
  numbers.shift()
  console.log(nums)
  
  const arrayLength = nums.length;
  console.log(arrayLength)
  
  console.log(nums[2])
  
  const reversedNumbers = nums.reverse();
  console.log(reversedNumbers)
  