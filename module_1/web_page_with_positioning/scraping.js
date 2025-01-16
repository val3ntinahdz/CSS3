// require('dotenv').config();
const API_KEY = 'your-api-key';
const API_URL = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json"
booksContainer = document.getElementById('books-container')

async function fetchBestSellers () {
    try { 
        const response = await fetch(`${API_URL}?api-key=${API_KEY}`);
        const data = await response.json();
        console.log(data);
        const books = data.results.books;

        booksContainer.innerHTML = '';

        books.forEach(book => {
            const bookDiv = document.createElement('div');
            bookDiv.classList.add('book');
            bookDiv.innerHTML = `
            <img src="${book.book_image}" alt="${book.title}" style="width:120px;">
            <h2>${book.title}</h2>
            <p>By ${book.author}</p>
            `;
            booksContainer.appendChild(bookDiv);
        });

    } catch (error) {
        console.error('Error fetching the best sellers:', error);
        booksContainer.innerHTML = '<p>Failed to load the best sellers. Please try again later!</p>';
    }
}

fetchBestSellers();