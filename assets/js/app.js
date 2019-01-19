<<<<<<< HEAD
queryURL = 'https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20150101&end_date=20160101&q=war&sort=newest&api-key=DUboS1XV1GSEARcYle8Upu5f9MORBuaq'

$.get(queryURL)
.then((data) => {


});
=======
$.get('https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date=20150101&end_date=20160101&q=war&sort=newest&api-key=DUboS1XV1GSEARcYle8Upu5f9MORBuaq')
.then((data) => {
    const articleData = data.response.docs;
    articleData.forEach(article => {
        console.log(article.pub_date);
    });
})
.catch((error) => console.log(`you have an error: ${error}`));
>>>>>>> 08dbf5a2fe7bb8c61f284b0085f84c7466a1bbfa
