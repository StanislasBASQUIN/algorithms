// SUJET 1
// Avec une liste de nombres entiers relatifs et un nombre k, créé une méthode retournant un booléen qui affiche si deux nombres de cette liste ont k comme résultat de leur somme.
// Par exemple, si je te donne la liste [10, 15, 3, 7] et k = 17, la fonction devra sortir true car 10 + 7 = 17.
// Si je te donne la liste [1, 8, 10, 21] et k = 19, la fonction devra sortir false car il n'y a pas deux nombres ayant 19 comme résultat de leur addition.

const fs = require('fs');

const fileName = process.argv[2];

// Méthode asynchrone
fs.readFile(fileName, 'utf8', (error, data) => {
    if (error) {
        console.error(error.message);
        return ;
    }
    
    const arrayData = data.split(' ').map(value => parseInt(value))
    const k = 20
    console.log('Existe-t-il deux chiffres dont l\'addition est', k, '?', test2(arrayData, k))
});


const test = (data, k) => {
  let nb_comparaison = 0
  const testingOneVariable = (i, j) => {    
    nb_comparaison++
    if (data[i] + data[j] === k){
      return true
    }
    else if (j === data.length-1 ) {
      return false
    }
    else {            
      return testingOneVariable(i, j+1)
    }
  }
  
  
  const testingNextVariable = (i) => {
    if (testingOneVariable(i, i+1) === true) {
      console.log('Nombre de comparaison : ', nb_comparaison)
      return true
    }
    else if (i === data.length-2) {
      console.log('Nombre de comparaison : ', nb_comparaison)
      return false
    }
    else {
      return testingNextVariable(i+1)
    }
  }  
  return testingNextVariable(0)
}

const test2 = (data, k) => {
  let arrayDifference = [k - data[0]];

  const dataTest = (i = 1) => {
    if (arrayDifference.includes(data[i])) {
      return true;
    } else if(i === data.length - 1) {
      return false;
    } else {
      arrayDifference.push(k - data[i]);
      return dataTest(i + 1);
    }
  }

  return dataTest();
}