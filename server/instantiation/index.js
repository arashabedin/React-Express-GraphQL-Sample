const Book = require('mongoose').model('Book');
const Author = require('mongoose').model('Author');
//This happens only first time you start the server, to fill up some dummy data
Book.find({},(err,data) =>{
    if(data.length===0){
        var books = [
            {name:'Boofe Koor', genre:'Surealistic', authorId:'1'},
            {name:'A Clockwork Orange', genre:'Crime', authorId:'2'},
            {name:'Harry Potter and the Chamber of Secrets', genre:'Adventure', authorId:'3'},
            {name:'Harry Potter and the Prisoner of Azkaban', genre:'Adventure', authorId:'3'},
            {name:'Sage velgard', genre:'drama', authorId:'1'},
        ];
        var authors = [
            {name:'Sadegh Hedayat', age:50, id:'1'},
            {name:'Anthony Burgess ', age:80, id:'2'},
            {name:'J.K Rowling', age:53, id:'3'},
        ]
        books.forEach(book => {
            let newBook = new Book({
                name:book.name,
                genre:book.genre,
                authorId:book.authorId
            });
            newBook.save((err) => {
                if(err)
                    console.log(err)
                else{
                }
            });
        });
        authors.forEach(author => {
            let newAuthor = new Author({
                id:author.id,
                name:author.name,
                age:author.age,
            });
            newAuthor.save((err) => {
                if(err)
                    console.log(err)
                else{
                }
            });
        });
    }
});
