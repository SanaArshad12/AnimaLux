// cursor
document.addEventListener("DOMContentLoaded", () => {
    var crsr = document.querySelector("#cursor");
    var blur = document.querySelector("#cursor-blur");

    if (crsr && blur) {
        document.addEventListener("mousemove", function(dets) {
            crsr.style.left = dets.clientX + "px";
            crsr.style.top = dets.clientY + "px";
            blur.style.left = (dets.clientX - 250) + "px";
            blur.style.top = (dets.clientY - 250) + "px";
        });
    } else {
        console.error("Cursor or blur element not found");
    }
});


// toggle menu button 
function toggleMenu(){
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav');
    menu.classList.toggle('active');
    nav.classList.toggle('active');
}

// change the background video when click on the gallery images
function changeVideo(name){
    const bgVideoList = document.querySelectorAll('.bg-video');
    const trailers = document.querySelectorAll('.trailer');
    const models = document.querySelectorAll('.model');


    // javaScript higher order array function for Each
    // this is easier to do data mapping

    bgVideoList.forEach(video=>
        {
            video.classList.remove('active');
            if(video.classList.contains(name)){
                video.classList.add('active');

            }
        });

        // mapping model name change
        models.forEach(model=>
            {
                model.classList.remove('active');
                if(model.classList.contains(name)){
                    model.classList.add('active');
    
                }
            });

            // mapping trailer video change
            trailers.forEach(video=>
                {
                    video.classList.remove('active');
                    if(video.classList.contains(name)){
                        video.classList.add('active');
        
                    }
                });
}