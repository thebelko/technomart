
        var mapOpen = document.querySelector(".open-map");
        var mapPopup = document.querySelector(".modal-map");
        var mapClose = mapPopup.querySelector(".modal-map-close");
        
        mapOpen.addEventListener("click", function(event) {
            event.preventDefault();
            mapPopup.classList.add("modal-content-show");
        })

        mapClose.addEventListener("click", function(event) {
            event.preventDefault();
            mapPopup.classList.remove("modal-content-show");
    
        })
        
        window.addEventListener("keydown", function(event) {

            if (event.keyCode == 27) {
                if (mapPopup && mapPopup.classList.contains("modal-content-show")) {
                    mapPopup.classList.remove("modal-content-show");
                }
            }

        });

    

        var writeUsOpen = document.querySelector(".write-us-open");
        var writeUsPopup = document.querySelector(".modal-write-us");
        var writeUsClose = writeUsPopup.querySelector(".write-us-close");
        
        writeUsOpen.addEventListener("click", function(event) {
            event.preventDefault();
            writeUsPopup.classList.add("modal-content-show");
        })

        writeUsClose.addEventListener("click", function(event) {
            event.preventDefault();
            writeUsPopup.classList.remove("modal-content-show");
    
        })
        
        window.addEventListener("keydown", function(event) {

            if (event.keyCode == 27) {
                if (writeUsPopup && writeUsPopup.classList.contains("modal-content-show")) {
                    writeUsPopup.classList.remove("modal-content-show");
                }
            }

        });

    

        var cartAddOpen = document.querySelectorAll(".actions-to-buy");
        var cartAddPopup = document.querySelector(".modal-add-cart");

        var cartClose = cartAddPopup.querySelector(".add-cart-close");
        var cartCancel = cartAddPopup.querySelector(".cancel-btn");
        
        var cartBlock = document.querySelector(".header-top-basket");
        var cartCountText = document.querySelector(".cart-count");
        var cartCount = 0;

        var i;
        for (i = 0; i < cartAddOpen.length; i++) {
            cartAddOpen[i].addEventListener("click", function(event) {
                event.preventDefault();
                cartAddPopup.classList.add("modal-content-show");

                cartCount++;
                cartCountText.innerHTML = cartCount;
                cartBlock.classList.add("top-basket-full");

            });
        }

        cartClose.addEventListener("click", function(event) {
            event.preventDefault();
            cartAddPopup.classList.remove("modal-content-show");
        });

        cartCancel.addEventListener("click", function(event) {
            event.preventDefault();
            cartAddPopup.classList.remove("modal-content-show");
        });

        window.addEventListener("keydown", function(event) {

            if (event.keyCode == 27) {
                if (cartAddPopup && cartAddPopup.classList.contains("modal-content-show")) {
                    cartAddPopup.classList.remove("modal-content-show");
                }
            }

        });           

