var i = 0,
    images = [
        "https://i.ibb.co/DL99mvb/start1.png",
        "https://i.ibb.co/kmMJBH5/ns1.png",
        "https://i.ibb.co/s5Gsks7/ns2.png",
        "https://i.ibb.co/NSqQrF2/ns3.png",
        "https://i.ibb.co/wZncKyX/ns4.png",
        "https://i.ibb.co/5TmjfHQ/ns5.png",
        "https://i.ibb.co/pQjZ4RC/ns6.png",
        "https://i.ibb.co/6rnGSBJ/ns7.png",
        "https://i.ibb.co/r0sPwTY/ns8.png",
        "https://i.ibb.co/3h8YHGK/ns9.png",
        "https://i.ibb.co/XJRRd3j/ns10.png",
        "https://i.ibb.co/n8Yzhsb/ns11.png",
        "https://i.ibb.co/m432p3L/ns12.png",
        "https://i.ibb.co/SNVvyPP/ns13.png",
        "https://i.ibb.co/p1pXqXX/ns14.png",
        "https://i.ibb.co/hC949vQ/ns15.png",
        "https://i.ibb.co/nDJy0gS/start2.png"
    ];

function mySlide(param) {
    if (param === "next") {
        i++;
        if (i === images.length) {
            i = images.length - 1;
        }
    } else {
        i--;
        if (i < 0) {
            i = 0;
        }
    }

    document.getElementById("slide").src = images[i];
}
