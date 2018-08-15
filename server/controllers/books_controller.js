let books = [];
let id = 0;


module.exports = {
    read:(req, res)=>{
        res.status(200).json(books);
    },

    create:(req, res)=>{
        const {title, author}= req.body;
        let newBook = {
            title: title,
            author: author,
            id: id
        }
        books.push(newBook)
        id++
        res.status(200).json(books)
    },

    update:(req, res)=>{
        const { id } = req.params;
        const { newTitle, newAuthor } = req.body;

        let index = books.findIndex(book => book.id == id);
        console.log(index);

        // console.log(title, author)

        books[index].title = newTitle;
        books[index].author = newAuthor;
  
        console.log(id)
        res.status(200).json(books)
    },

    delete:(req, res)=>{
        
    },
}