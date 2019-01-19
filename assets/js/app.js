$.get('https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20150101&end_date=20160101&q=war&sort=newest&api-key=DUboS1XV1GSEARcYle8Upu5f9MORBuaq')
.then((data) => {
    const articleData = data.response.docs;
    articleData.forEach(article => {
        var div = $('<div>');
        var titleHeader = $('<h3>');
        var author = $('<h4>');
        var p1 = $('<p>');
        var p2 = $('<p>');
        var p3 = $('<p>');

        titleHeader.html(article.headline.main);
        p1.html(article.pub_date);
        p2.html(article.snippet);
        author.html(article.byline.person[0].firstname + " " + article.byline.person[0].lastname);
        p3.html(article.web_url);

        div.append(titleHeader, p1, p2, p3, author);
        $("#article-container").append(div);




    });
})
.catch((error) => console.log(`you have an error: ${error}`));
