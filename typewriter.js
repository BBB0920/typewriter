const sentence = "hello there from lighthouse labs";

const typewriter = (string) => {
  
  let i = 0;
  
  for (const char of string) {
    setTimeout(() => {
      process.stdout.write(char);     //  prevents it from going to next line
    }, 50 * i)

    i++;
    
  }
  setTimeout(() => {
    console.log();                    //  next line
  }, 50 * i)
}

typewriter(sentence);