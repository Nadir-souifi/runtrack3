function showhide() {
    const article = document.createElement('article');
    article.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
    const existingArticle = document.getElementById('dynamic-article');

    if (existingArticle) {
        existingArticle.remove();
    } else {
        article.id = 'dynamic-article';
        document.body.appendChild(article);
    }
}

document.getElementById('button').addEventListener('click', showhide);
