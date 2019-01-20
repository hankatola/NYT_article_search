

const getApiData = (api, limitValue) => {
    $.get(api)
    .then((data) => {
        const articleData = data.response.docs;
        $('.article-space').remove();
        
    
        for (let i = 0; i < limitValue; i++) {
            var div = $('<div class="article-space"></div>');
            const contentDiv = $('<div class="article-content">');
            var titleHeader = $('<p class="rowheader">');
            var author = $('<p class="author" style="font-weight: bolder;">');
            var p1 = $('<p>');
            var p2 = $('<p>');
            var p3 = $('<p>');
    
            let date = moment(articleData[i].pub_date);
            let newDate = date.utc().format('MMMM Do, YYYY');
            
    
            titleHeader.html(articleData[i].headline.main);
            p1.html(newDate);
            p2.html(articleData[i].snippet);
            author.html(articleData[i].byline.original);
            p3.html(articleData[i].web_url);
    
            contentDiv.append( p1, p2, p3, author);
            div.append(titleHeader, contentDiv);
            $("#article-container").append(div);
        }
    
    })
    .catch((error) => console.log(`you have an error: ${error}`));
}


    // $('.clear-reset').prop('disabled', true);
    $('.search-form').on('submit', function(event) {
        event.preventDefault();
        
        let searchEvent;
        let startDate;
        let endDate;
        if (event.currentTarget[0].value) {
            searchEvent = (!event.currentTarget[2].value || !event.currentTarget[3].value ) ? `q=${event.currentTarget[0].value}` : `&q=${event.currentTarget[0].value}`;
        } else return false;
        
        const limit = event.currentTarget[1].value;
        if (event.currentTarget[2].value.length < 8) {
            startDate = event.currentTarget[2].value + '0101';
        } else {
            startDate = event.currentTarget[2].value ? `begin_date=${event.currentTarget[2].value}` : '';
        }
        

        if (event.currentTarget[2].value.length < 8) {
            endDate = event.currentTarget[3].value + '1231';

        } else {
            endDate = event.currentTarget[3].value ? `&end_date=${event.currentTarget[3].value}` : '';

        }
    

        const baseUrl = 'https://cors-anywhere.herokuapp.com/https://api.nytimes.com/svc/search/v2/articlesearch.json?'

        searchEvent = searchEvent.split(" ").join("+");
        
        const url = `${baseUrl}${startDate}${endDate}${searchEvent}&sort=newest&api-key=DUboS1XV1GSEARcYle8Upu5f9MORBuaq`;

        

        getApiData(url, limit);
    });

    $('.clear-reset').on('click', () => $('.article-space').remove());
