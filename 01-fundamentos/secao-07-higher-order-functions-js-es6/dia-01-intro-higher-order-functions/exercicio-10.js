const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:

  // const expectedResult = 'Stephen King';
  const authorBornIn1947 = (arr) => {
    const rightObj = arr.find(book => book.author.birthYear === 1947);
    return rightObj.author.name;
  }

  console.log(authorBornIn1947(books));

  // Retorne o nome do livro com menor número de caracteres (menor nome).

	// const expectedResult = 'Duna';
	const smallerName = (arr) => {
  	let nameBook;
		let bookNameLength = arr[0].name.length;
		arr.forEach(element => {
			if (element.name.length < bookNameLength) {
				nameBook = element.name;
				bookNameLength = nameBook.length;
			}
		});
  	return nameBook;
	}
  
	console.log(smallerName(books));

	// Encontre o primeiro livro cujo nome possua 26 caracteres.

	// const expectedResult = {
	// 	author: {
	// 		birthYear: 1948,
	// 		name: 'George R. R. Martin',
	// 	},
	// 	genre: 'Fantasia',
	// 	id: 1,
	// 	name: 'As Crônicas de Gelo e Fogo',
	// 	releaseYear: 1991,
	// };
	
	const getNamedBook = (arr) => arr.find(element => element.name.length === 26);

	console.log(getNamedBook(books));

	// Faça uma função que retorne true se todas as pessoas autoras tiverem nascido no século XX, ou false, caso contrário.

	// const expectedResult = false;

	function everyoneWasBornOnSecXX(arr) {
		return arr.every(element => element.author.birthYear > 1901 && element.author.birthYear < 2000);
	}

	console.log(everyoneWasBornOnSecXX(books));

	// Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.

	// const expectedResult = true;

	const someBookWasReleaseOnThe80s = (arr) => arr.some(element => element.releaseYear >= 1980 && element.releaseYear < 1990);

	console.log(someBookWasReleaseOnThe80s(books));

	// Faça uma função que retorne true, caso nenhuma pessoa autora tenha nascido no mesmo ano, e false, caso contrário.

	const expectedResult = false;

	const authorUnique = (arr) => {
		const birthYear = [];
		arr.forEach(book => {
			birthYear.push(book.author.birthYear);
		});
		return !birthYear.some((year, index) => birthYear.indexOf(year) !== index);
	}

	console.log(authorUnique(books));