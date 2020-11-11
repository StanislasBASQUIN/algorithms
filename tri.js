const fs = require('fs');

const dataFile = process.argv[2];

fs.readFile(dataFile, 'utf8', (error, data) => {
  if (error) {
    console.error(error.message);
    return;
  }

  const dataInArray = data.split(' ').map( (nb) => parseInt(nb));

  // console.log("Tableau intial : ", dataInArray);
  console.log("Tri à Bulle : ", TriABulle(dataInArray), " comparaisons");
  console.log("Tri par inversion : ", TriParInversion(dataInArray), " comparaisons");
  console.log("Tri par sélection : ", TriParSelection(dataInArray), " comparaisons");
  console.log("Tri rapide : ", TriRapide(dataInArray), " comparaisons");
  console.log("Tri par fusion : ", TriParFusion(dataInArray));
});

// Tri à Bulle

const TriABulle = (data) => {
  
  let nbComparaison = 0;

  const sortArray = (array) => {
    for (let i = array.length; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        nbComparaison++;
        if (array[j] - array[j+1] > 0) {
          [array[j], array[j+1]] = [array[j+1], array[j]];
        }
      }
    };
    return nbComparaison;
  }

  return sortArray(data);
}

// Tri par Inversion

const TriParInversion = (data) => {
  let nbComparaison = 0;
  let arraySorted = data;

  const sortArray = (i, j) => {
    nbComparaison++;
    if (arraySorted[i] > arraySorted[j]) {
      return arraySorted.splice(j+1, 0, arraySorted[i]);   
    } else if (j === 0) {
      return arraySorted.unshift(arraySorted[i]);
    } else {
      return sortArray(i, j-1);
    }
  }

  for (let i = 1; i <= arraySorted.length - 1; i++) {
    let j = i-1;
    sortArray(i, j);
    arraySorted.splice(i+1, 1);
  }

  return nbComparaison;
}

// Tri par sélection

const TriParSelection = (data) => {
  let nbComparaison = 0;
  let dataSorted = data;

  const findSmallest = (i) => {
    let smallest = [i, dataSorted[i]];

    for (let j = i+1; j <= dataSorted.length; j++) {
      nbComparaison++;
      if (dataSorted[j] < smallest[1]) {
        smallest[0] = j;
        smallest[1] = dataSorted[j];
      }
    }
    return smallest;
  }

  for (let i = 0; i <= dataSorted.length - 2; i++) {
    smallestNumber = findSmallest(i);
    dataSorted.splice(i, 0, smallestNumber[1]);
    dataSorted.splice(smallestNumber[0] + 1, 1);
  }

  return nbComparaison;
}

// Tri rapide

const TriRapide = (data) => {
  let nbComparaison = 0;
  let dataSorted = data;

  const sortData = (array) => {
    if (array.length === 0) return [];

    let pivot = array[0];
    let arraySmallest = [];
    let arrayBiggest = [];

    for (let i=1; i <= array.length - 1; i++) {
      nbComparaison++;
      array[i] <= pivot ? arraySmallest.push(array[i]) : arrayBiggest.push(array[i]);
    };

    return [...sortData(arraySmallest), pivot, ...sortData(arrayBiggest)];
  }
  
  sortData(dataSorted);
  return nbComparaison;
}

// Tri par Fusion

const TriParFusion = (data) => {
  let nbComparaison = 0;
  const dataSorted = data.map( value => [value]);

  const fusionArrays = (array) => {
    if (array[0].length === 0) {
      return array[1];
    } else if (array[1].length === 0) {
      return array[0];
    } else if (array[0][0] <= array[1][0]) {
      nbComparaison++;
      let newArray = [array[0].splice(1, array[0].length - 1), [...array[1]]];
      return [array[0][0], ...fusionArrays(newArray)];
    } else if (array[0][0] > array[1][0]) {
      nbComparaison++;
      let newArray = [[...array[0]], array[1].splice(1, array[1].length - 1)];
      return [array[1][0], ...fusionArrays(newArray)];
    }
  }

  const cutArray = (array) => {
    let newArray = [];

    if (array.length > 1) {
      for (let i = 0; i <= array.length - 1; i += 2) {
        if (array[i+1]) {
          newArray.push(fusionArrays([array[i], array[i+1]]));
        } else {
          newArray.push(array[i]);
        }
      }
      return cutArray(newArray)
    } else {
      return array[0];
    }
  }

  cutArray(dataSorted);
  return nbComparaison;
}

// Smoothsort

const smoothsort = (array) => {
  
}