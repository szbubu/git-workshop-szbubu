// Task: Create a program that calls a cat based on a language.

// If the language: Hungarian, it should print 'cicc-cicc'
// If the language: Chinese, it should print 'miao-miao'
// If the language: Tunisian, it should print 'besh-besh'
// If the language: Japanese, it should print 'neko chan oide'
// Call it in any other language 'kitty-kitty'.

// Execute: node.js calling-a-cat.js Hungarian

function main(language) {
  switch (language) {
    case 'Hungarian':
     return 'cicc/cicc';

      case 'Chinese':
        return  'miao-miao';
        

        case 'Tunisian':
        return  'besh-besh';
    

          case 'Japanese':
          return  'neko chan oide';
            

  }
  // The language variable will be the language from the command line. 

}

console.log(main('Hungarian'));

