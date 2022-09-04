(() => {
    function moveSlider(elements, arrowLeft, arrowRight, classAdd){
        // получение элементов массива
        let arrElements = document.querySelectorAll(`.${elements}`),
        // кнопки
        arrowLeftElement = document.querySelector(`.${arrowLeft}`),
        arrowRightElement = document.querySelector(`.${arrowRight}`),
        // счетчик
        counter = 0

        if(arrElements.length != 0){
            // нажатие левой кнопки
            arrowLeftElement.addEventListener("click", () => {
                counter--

                // условие на изменение счетчика
                if(checkingSliderElement(arrElements, counter) == false) counter = arrElements.length - 1

                // функция на удаление из элементов массива определенного класса
                deleteElements(elements, classAdd)
                // добавление активного класса в полученный элемент
                arrElements[counter].classList.add(classAdd)
            })

            // аналогично нажатой левой кнопке
            arrowRightElement.addEventListener("click", () => {
                counter++

                if(checkingSliderElement(arrElements, counter) == false) counter = 0 

                deleteElements(elements, classAdd)
                arrElements[counter].classList.add(classAdd)
            })
        }

        
    }

    function checkingSliderElement(arrays = [], counter = 0){
        if(counter > arrays.length - 1 || counter < 0) return false
        return true
    }
    function deleteElements(elements, classRemove){
        document.querySelectorAll(`.${elements}`).forEach(elem => elem.classList.remove(classRemove))
    }

    moveSlider("container__booking--slide", "container__booking--arrow__left", "container__booking--arrow__right", "active__slide")

    document.querySelector(".container__header--menu .fa").addEventListener("click", e => {
        if(e.target.classList.contains("fa-bars") == true){
            document.querySelector(".container__header--nav").classList.add("active__menu")
            e.target.className = "fa fa-times"
        } else {
            document.querySelector(".container__header--nav").classList.remove("active__menu")
            e.target.className = "fa fa-bars"
        }
    })

    document.querySelectorAll(".container__stocks--favourite i").forEach(el => {
        el.addEventListener("click", e => {
            if(e.target.classList.contains("fa-heart-o") == true) e.target.className = "fa fa-heart"
            else e.target.className = "fa fa-heart-o"
        })
    })

    document.querySelectorAll(".stocks__hover").forEach(el => {
        el.addEventListener("click", e => {
            if(e.target.classList.contains("active__stocks") == true) e.target.className = "container__stocks--item stocks__hover"
            else el.className = "container__stocks--item stocks__hover active__stocks"
        })
    })
})()