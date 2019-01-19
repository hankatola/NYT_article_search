


$.get('https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20150101&end_date=20160101&q=war&sort=newest&api-key=DUboS1XV1GSEARcYle8Upu5f9MORBuaq')
.then((data) => {
    const articleData = data.response.docs;
    let count = 5;

    for (let i = 1; i < count; i++) {
        var div = $('<div class="article-space"></div>');
        var titleHeader = $('<p class="rowheader">');
        var author = $('<p class="author" style="font-weight: bolder;">');
        var p1 = $('<p>');
        var p2 = $('<p>');
        var p3 = $('<p>');

    

        titleHeader.html(articleData[i].headline.main);
        p1.html(articleData[i].pub_date);
        p2.html(articleData[i].snippet);
        author.html(articleData[i].byline.original);
        p3.html(articleData[i].web_url);

        div.append(titleHeader, p1, p2, p3, author);
        $("#article-container").append(div);
    }

})
.catch((error) => console.log(`you have an error: ${error}`));
