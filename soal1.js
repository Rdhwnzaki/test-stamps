const apaBole = () => {
  let output = "";
  for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      output += "ApaBole ";
    } else if (i % 3 == 0) {
      output += "Apa ";
    } else if (i % 5 == 0) {
      output += "Bole ";
    } else {
      output += i + " ";
    }
  }

  console.log(output);
};

apaBole();
