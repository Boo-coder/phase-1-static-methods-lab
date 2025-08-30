class Formatter {
  static capitalize(firstLetter){
    return firstLetter.charAt(0).toUpperCase() + firstLetter.slice(1);
  }
  
  static sanitize(string){
    return string.replace(/[^a-zA-Z0-9-' ]/g, '');
  }

  static titleize(string) {
    const stopWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const words = string.split(" ");

    return words.map((word, index) => {
      // always capitalize the first word
      if (index === 0) {
        return this.capitalize(word);
      }

      // Capitalize if not a stop word
      if (!stopWords.includes(word.toLowerCase())) {
        return this.capitalize(word);
      }

      // Else leave it lowercase
      return word.toLowerCase();
    }).join(" ");
  }
}

Formatter.capitalize("crocodile");
capitalizes;

Formatter.sanitize("Entert*ain(i{ng-Elephan^ts");
sanitizes;

Formatter.titleize("getting giggles");
Formatter.titleize("where the wild things are");
Formatter.titleize("chicken soup with rice and a few other songs");
Formatter.titleize("Maurice a an but of and for at by from end");
Formatter.titleize("a tale of two cities"); 
Formatter.titleize("in the night kitchen"); 