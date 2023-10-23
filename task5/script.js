// Define variables
let articles = [];

// Functions
function displayArticles() {
    const articleList = document.getElementById('articleList');
    articleList.innerHTML = '';

    articles.forEach((article, index) => {
        const articleItem = document.createElement('div');
        articleItem.classList.add('articleItem');
        articleItem.innerHTML = `
            <h3>${article.title}</h3>
            <p>${article.content}</p>
            <img src="${article.image}" style="max-width: 100px;">
            <p>Category: ${article.category}</p>
            <button onclick="editArticle(${index})">Edit</button>
            <button onclick="deleteArticle(${index})">Delete</button>
        `;
        articleList.appendChild(articleItem);
    });
}

function showForm() {
    document.getElementById('articleForm').style.display = 'block';
}

function hideForm() {
    document.getElementById('articleForm').style.display = 'none';
}

function saveArticle() {
    const title = document.getElementById('articleTitle').value;
    const content = document.getElementById('articleContent').value;
    const image = document.getElementById('imageUpload').value; // Assuming you handle file uploads appropriately
    const category = document.getElementById('categorySelect').value;

    const newArticle = {
        title,
        content,
        image,
        category,
    };

    articles.push(newArticle);
    displayArticles();
    hideForm();
}

function editArticle(index) {
    // Logic to edit an article
}

function deleteArticle(index) {
    articles.splice(index, 1);
    displayArticles();
}

// Event listeners
document.getElementById('createArticleBtn').addEventListener('click', showForm);
document.getElementById('saveArticleBtn').addEventListener('click', saveArticle);

// Display initial articles
displayArticles();
