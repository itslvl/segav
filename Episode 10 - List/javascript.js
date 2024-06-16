document.addEventListener("DOMContentLoaded", function() {
    initMap();
    setupSlider();
    setupSearch();
    setupArticleChange();
});

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -7.9669, lng: 112.6322 }, // Koordinat Malang
        zoom: 13,
    });

    const searchBox = new google.maps.places.SearchBox(document.getElementById("searchBox"));
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(document.getElementById("searchBox"));

    searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();
        if (places.length === 0) {
            return;
        }

        const bounds = new google.maps.LatLngBounds();
        places.forEach((place) => {
            if (!place.geometry) {
                console.log("Returned place contains no geometry");
                return;
            }
            if (place.geometry.viewport) {
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);
    });
}

function searchArticles(query) {
    const articles = document.querySelectorAll('.article');
    articles.forEach(article => {
        const title = article.querySelector('h3').textContent.toLowerCase();
        const synopsis = article.querySelector('p').textContent.toLowerCase();
        if (title.includes(query.toLowerCase()) || synopsis.includes(query.toLowerCase())) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
}

document.getElementById('searchBox').addEventListener('input', (event) => {
    const query = event.target.value;
    searchArticles(query);
});

function setupSlider() {
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');
    const slideContainer = document.querySelector('.slide');
    const items = Array.from(document.querySelectorAll('.item'));
    
    nextBtn.addEventListener('click', function() {
        const firstItem = slideContainer.firstElementChild;
        slideContainer.appendChild(firstItem);
    });

    prevBtn.addEventListener('click', function() {
        const lastItem = slideContainer.lastElementChild;
        slideContainer.prepend(lastItem);
    });
}

function setupArticleChange() {
    document.querySelector('.buttons button:nth-child(2)').addEventListener('click', function() {
        const articles = document.querySelectorAll('.article');

        // Menyembunyikan semua artikel
        articles.forEach(article => {
            article.style.display = 'none';
        });

        // Menampilkan artikel ke-4
        const article4 = document.getElementById('article4');
        article4.style.display = 'block';
    });
}



























// document.addEventListener("DOMContentLoaded", function() {
//     initMap();
//     setupSlider();
//     setupSearch();
// });

// function initMap() {
//     const map = new google.maps.Map(document.getElementById("map"), {
//         center: { lat: -7.9669, lng: 112.6322 },
//         zoom: 13,
//     });

//     const searchBox = new google.maps.places.SearchBox(document.getElementById("searchBox"));
//     map.controls[google.maps.ControlPosition.TOP_LEFT].push(document.getElementById("searchBox"));

//     searchBox.addListener("places_changed", () => {
//         const places = searchBox.getPlaces();
//         if (places.length === 0) {
//             return;
//         }

//         const bounds = new google.maps.LatLngBounds();
//         places.forEach((place) => {
//             if (!place.geometry) {
//                 console.log("Returned place contains no geometry");
//                 return;
//             }
//             if (place.geometry.viewport) {
//                 bounds.union(place.geometry.viewport);
//             } else {
//                 bounds.extend(place.geometry.location);
//             }
//         });
//         map.fitBounds(bounds);
//     });
// }

// function searchArticles(query) {
//     const articles = document.querySelectorAll('.article');
//     articles.forEach(article => {
//         const title = article.querySelector('h3').textContent.toLowerCase();
//         const synopsis = article.querySelector('p').textContent.toLowerCase();
//         if (title.includes(query.toLowerCase()) || synopsis.includes(query.toLowerCase())) {
//             article.style.display = 'block';
//         } else {
//             article.style.display = 'none';
//         }
//     });
// }

// document.getElementById('searchBox').addEventListener('input', (event) => {
//     const query = event.target.value;
//     searchArticles(query);
// });

// function setupSlider() {
//     const nextBtn = document.querySelector('.next');
//     const prevBtn = document.querySelector('.prev');
//     const slideContainer = document.querySelector('.slide');
//     const items = Array.from(document.querySelectorAll('.item'));
    
//     nextBtn.addEventListener('click', function() {
//         const firstItem = slideContainer.firstElementChild;
//         slideContainer.appendChild(firstItem);
//     });

//     prevBtn.addEventListener('click', function() {
//         const lastItem = slideContainer.lastElementChild;
//         slideContainer.prepend(lastItem);
//     });
// }

// let next = document.querySelector('.next')
// let prev = document.querySelector('.prev')

// next.addEventListener('click', function(){
//     let items = document.querySelectorAll('.item')
//     document.querySelector('.slide').appendChild(items[0])
// })

// prev.addEventListener('click', function(){
//     let items = document.querySelectorAll('.item')
//     document.querySelector('.slide').prepend(items[items.length-1])
// })
























// function initMap() {
//     const map = new google.maps.Map(document.getElementById("map"), {
//         center: { lat: -7.9669, lng: 112.6322 },
//         zoom: 13,
//     });

//     const searchBox = new google.maps.places.SearchBox(document.getElementById("searchBox"));
//     map.controls[google.maps.ControlPosition.TOP_LEFT].push(document.getElementById("searchBox"));

//     searchBox.addListener("places_changed", () => {
//         const places = searchBox.getPlaces();
//         if (places.length === 0) {
//             return;
//         }

//         const bounds = new google.maps.LatLngBounds();
//         places.forEach((place) => {
//             if (!place.geometry) {
//                 console.log("Returned place contains no geometry");
//                 return;
//             }
//             if (place.geometry.viewport) {
//                 bounds.union(place.geometry.viewport);
//             } else {
//                 bounds.extend(place.geometry.location);
//             }
//         });
//         map.fitBounds(bounds);
//     });
// }

// document.addEventListener("DOMContentLoaded", function() {
//     initMap();
// });

// Fungsi untuk menangani pencarian artikel
// function searchArticles(query) {
    // Logika pencarian artikel berdasarkan query
    // Misalnya, filter artikel yang sesuai dengan query dan perbarui tampilan artikel
//     const articles = document.querySelectorAll('.article');
//     articles.forEach(article => {
//         const title = article.querySelector('h3').textContent.toLowerCase();
//         const synopsis = article.querySelector('p').textContent.toLowerCase();
//         if (title.includes(query.toLowerCase()) || synopsis.includes(query.toLowerCase())) {
//             article.style.display = 'block';
//         } else {
//             article.style.display = 'none';
//         }
//     });
// }

// Event listener untuk pencarian artikel
// document.getElementById('searchBox').addEventListener('input', (event) => {
//     const query = event.target.value;
//     searchArticles(query);
// });


// let next = document.querySelector('.next')
// let prev = document.querySelector('.prev')

// next.addEventListener('click', function(){
//     let items = document.querySelectorAll('.item')
//     document.querySelector('.slide').appendChild(items[0])
// })

// prev.addEventListener('click', function(){
//     let items = document.querySelectorAll('.item')
//     document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
// })
























// let map;
// let marker;

// function initMap() {
    // Initialize the map centered on Malang
    // map = new google.maps.Map(document.getElementById('map'), {
    //     center: { lat: -7.9666, lng: 112.6326 },
    //     zoom: 12
    // });

    // Create a marker at the center
    // marker = new google.maps.Marker({
    //     position: { lat: -7.9666, lng: 112.6326 },
    //     map: map
    // });

    // Initialize the search box
    // const searchBox = new google.maps.places.SearchBox(document.getElementById('searchBox'));

    // Bias the SearchBox results towards current map's viewport.
    // map.addListener('bounds_changed', () => {
    //     searchBox.setBounds(map.getBounds());
    // });

    // Listen for the event fired when the user selects a prediction and retrieve more details for that place.
    // searchBox.addListener('places_changed', () => {
    //     const places = searchBox.getPlaces();

    //     if (places.length === 0) {
    //         return;
    //     }

        // Clear out the old markers.
        // marker.setMap(null);

        // For each place, get the icon, name and location.
        // const bounds = new google.maps.LatLngBounds();
        // places.forEach((place) => {
        //     if (!place.geometry) {
        //         console.log("Returned place contains no geometry");
        //         return;
        //     }

            // Create a marker for each place.
            // marker = new google.maps.Marker({
            //     map,
            //     title: place.name,
            //     position: place.geometry.location
            // });

            // if (place.geometry.viewport) {
                // Only geocodes have viewport.
                // bounds.union(place.geometry.viewport);
//             } else {
//                 bounds.extend(place.geometry.location);
//             }
//         });
//         map.fitBounds(bounds);
//     });
// }























//menu
// var tombolMenu = $(".tombol-menu");
// var menu = $("nav .menu ul");

// function klikMenu() {
//     tombolMenu.click(function () {
//         menu.toggle();
//     });
//     menu.click(function () {
//         menu.toggle();
//     });
// }

// $(document).ready(function () {
//     var width = $(window).width();
//     if (width < 990) {
//         klikMenu();
//     }
// })

//check lebar
// $(window).resize(function () {
//     var width = $(window).width();
//     if (width > 989) {
//         menu.css("display", "block");
//         //display:block
//     } else {
//         menu.css("display", "none");
//     }
//     klikMenu();
// });

//efek scroll 
// $(document).ready(function () {
//     var scroll_pos = 0;
//     $(document).scroll(function () {
//         scroll_pos = $(this).scrollTop();
//         if (scroll_pos > 0) {
//             $("nav").addClass("putih");
//             $("nav img.hitam").show();
//             $("nav img.putih").hide();
//         } else {
//             $("nav").removeClass("putih");
//             $("nav img.hitam").hide();
//             $("nav img.putih").show();
//         }
//     })
// });