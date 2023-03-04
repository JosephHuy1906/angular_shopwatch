(function ($) {
    "use strict";
    $(document).ready(function() {
        $('#slide100-01').slide100({
            autoPlay: "false",
            timeAuto: 3000,
            deLay: 400,

            linkIMG: [
            'images/20180629_184735_127_1.png',
            'images/teintop-t8629-2.jpg',
            'images/teintop-t8629-1-3.jpg',
            'images/teintop-t8629-1-4.jpg'
            ],

            linkThumb: [
            'images/20180629_184735_127_1.png',
            'images/teintop-t8629-2.jpg',
            'images/teintop-t8629-1-3.jpg',
            'images/teintop-t8629-1-4.jpg'
            ]
        });
    });
})

