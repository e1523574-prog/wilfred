
document.addEventListener("DOMContentLoaded", function () {


    // Portfolio Filter

    const filterButtons = document.querySelectorAll(".filter-btn");

    const galleryItems = document.querySelectorAll(".portfolio-item");


    filterButtons.forEach(button => {


        button.addEventListener("click", function () {


            // Remove active class

            filterButtons.forEach(btn => {

                btn.classList.remove("active");

            });


            // Add active class

            this.classList.add("active");


            const filter = this.dataset.filter;



            galleryItems.forEach(item => {


                const category = item.dataset.category;



                if(filter === "all" || category === filter){


                    item.style.display = "block";


                    setTimeout(()=>{

                        item.style.opacity = "1";

                        item.style.transform = "scale(1)";


                    },100);



                }else{


                    item.style.opacity = "0";

                    item.style.transform = "scale(.8)";


                    setTimeout(()=>{

                        item.style.display = "none";

                    },300);


                }


            });


        });


    });



    // =====================================
    // IMAGE LIGHTBOX
    // =====================================


    const images = document.querySelectorAll(".portfolio-item img");


    images.forEach(image => {


        image.addEventListener("click", function(){


            const overlay = document.createElement("div");


            overlay.className = "lightbox";


            overlay.innerHTML = `

                <span class="close-lightbox">&times;</span>

                <img src="${this.src}" alt="Gallery Image">

            `;


            document.body.appendChild(overlay);



            // Close button

            overlay.querySelector(".close-lightbox")
            .onclick = function(){

                overlay.remove();

            };



            // Click outside image

            overlay.onclick = function(e){

                if(e.target === overlay){

                    overlay.remove();

                }

            };


        });


    });


});
