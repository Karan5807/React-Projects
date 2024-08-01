export const IndianSystem = (number) => {
    const suffixes = ["", "Thousand", "Lakh", "Crore"];
    const base = 100;
    let result = "";
    let i = 0;

    while (number > 0) {
      let remainder = number % base;
      if (remainder !== 0) {
          result = remainder + suffixes[i] + result;
      }
      number = Math.floor(number / base);
      i++;
  }

  return result.trim();
}
