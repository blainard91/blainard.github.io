

    function getJSON(url) {
        return fetch(url)
            .then(function (response) {
                return response.json();
            })
            .catch(function (error) {
                console.log(error);
            });
    }


(function init() {
    var about = document.getElementById('about');
    var facilities = document.getElementById('facilities');

    about.addEventListener('click', function(event) {
        event.preventDefault();
        fetchData('About');
    });
    facilities.addEventListener('click', function(event) {
        event.preventDefault();
        fetchData('Facilities');
    });
}) ();


    function fetchData(grab) {
        var url = "/blainard91.github.io/final_project/dropd.json";
        getJSON(url).then(function (data) {
            console.log(data);

            var title = data[grab]["Title"];
            var paragraph = data[grab]["Paragraph"];


            var pagetitle = document.getElementById('title');
            var pageparagraph = document.getElementById('paragraph');

            pagetitle.innerHTML = title;
            pageparagraph.innerHTML = paragraph;

        });

        };


fetchData();
