const siteList = [
    {
        "id": 1,
        "name": "Auto Detailing",
        "href": "./auto-detail/index.html"

    },
    {
        "id": 2,
        "name": "Flight School",
        "href": "./flight-school/index.html"
    },
    {
        "id": 3,
        "name": "Floral Shop",
        "href": "./flower-store/home/index.html"
    },
    {
        "id": 4,
        "name": "Medical Practice",
        "href": "https://mattc-27.github.io/didactic-train/"
    }
]


$(document).ready(function () {
    // Replace the URL with the path to your fleetData.json file

    siteList.forEach(function (item) {
        var card = `
                <div class='item-card' data-id='${item.id}'>
                    <div class='card-title'>
                        <h2>${item.name}</h2>
                    </div>
                    <div class='card-link'>
               
                    <div class='card-link-a'>
                    <a class='card-href' href=${item.href}>View</a>
                    </div>
                         <div class='card-link-icon'>
                    <img src=${"md-view.png"} />
                    </div>
                    </div>
                </div>
            `;
        $('#demoSiteSection').append(card);
    });


});
