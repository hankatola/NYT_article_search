$.get('https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20150101&end_date=20160101&q=war&sort=newest&api-key=DUboS1XV1GSEARcYle8Upu5f9MORBuaq')
.then((data) => {
    const articleData = data.response.docs;
    articleData.forEach(article => {
        console.log(article.pub_date);
        console.log(article.headline.main);
        console.log(article.byline.person.firstname + " " + article.byline.person.lastname);
        console.log(article.snippet);
        console.log(article.web_url);



    });
})
.catch((error) => console.log(`you have an error: ${error}`));
