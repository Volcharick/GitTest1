const stringFirst = document.querySelector(".null-string");
const stringArray = document.querySelectorAll(".list__string");
const arrow = document.querySelector(".list__arrow-down");
const date = document.querySelectorAll(".up-part__datetime")
const checkbox = document.querySelectorAll(".up-part__checkbox")
const checkbox_id_1 = document.querySelectorAll("#up-part__checkbox-1")
const checkbox_id_2 = document.querySelectorAll("#up-part__checkbox-2")
const date_id_1 = document.getElementById("up-part__date-1")
const date_id_2 = document.getElementById("up-part__date-2")



const mainform = document.forms.mainForm;
const mainformInput = mainform.nameInput
const mainformInputPlaceholder = mainformInput.placeholder
mainformInput.addEventListener("focus", function(e){
    mainformInput.placeholder= ""
})
mainformInput.addEventListener("blur", function(e){
    mainformInput.placeholder = mainformInputPlaceholder
})



function addDisableFirst(){
    if (date_id_1.disabled == false){
        date_id_1.disabled = true;
    }
    else {
        date_id_1.disabled = false;
    }
    
};
function addDisableSecond(){
    if (date_id_2.disabled == false){
        date_id_2.disabled = true;
    }
    else {
        date_id_2.disabled = false;
    }
}

checkbox[0].addEventListener("click",addDisableFirst);
checkbox[1].addEventListener("click",addDisableSecond);

function useDatetime(){
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; 
    let yyyy = today.getFullYear();
    if (dd < 10){
      dd='0' + dd
    } 
    if (mm < 10){
      mm='0' + mm
    } 

    todaymin = yyyy + '-' + mm + '-' + dd;
    todaymax = (yyyy + 100) + '-' + mm + '-' + dd;
    date.forEach(function(item){
       item.setAttribute("min", todaymin);
       item.setAttribute("max", todaymax);
    })
}
useDatetime()



// const popupLinks = document.querySelectorAll('.popup-link');
// const body = document.querySelector('.popup-link');
// const lockPadding = document.querySelectorAll('.lock-padding');

// let unlock = true;
// const timeout = 800;

// if (popupLinks.length > 0){
//     for (let index = 0; index < popupLinks.length; index++) {
//         const popupLink = popupLinks[index];
//         popupLink.addEventListener("click", function (e){
//             const popupName = popupLink.getAttribute('href').replace("#", "")
//             const curentPopup = document.getElementById(popupName);
//             popupOpen(curentPopup);
//             e.preventDefault();
//         })    
//     }
// }

// const popupCloseIcon = document.querySelectorAll('.popup__area');
// if (popupCloseIcon.length > 0){
//     for (let index = 0; index < popupCloseIcon.length; index++){
//         const el = popupCloseIcon[index]
//         el.addEventListener('click', function (e) {
//             popupCloseIcon(el.closest('.popup'));
//             e.preventDefault();
//         });
//     }
// }

// function popupOpen(curentPopup){
//     if (curentPopup && unlock){
//         const popupActive = document.querySelector('.popup.open');
//         if (popupActive){
//             popupClose(popupActive, false);
//         } else {
//             bodyLock();
//         }
//         curentPopup.classList.add('open');
//         curentPopup.addEventListener("click", function (e) {
//             if (!e.target.closest('.popup__content')){
//                 popupClose(e.target.closest('.popup'));
//             }
//         });
//     }
// }
// function popupClose(popupActive, doUnlock = true){
//     if (unlock){
//         popupActive.classList.remove('open');
//         if (doUnlock){
//             bodyUnlock();
//         }
//     }
// }

// function bodyLock(){
//     const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

//     for (let index= 0; index < lockPadding.length; index++) {
//         const el = lockPadding[index];
//         el.style.paddingRight = lockPaddingValue;
//     }
//     body.style.paddingRight = lockPaddingValue;
//     body.classList.add('lock');

//     unlock = false;
//     setTimeout( function() { 
//         unlock = true;
//     }, timeout);
// }

// function bodyUnlock(){
//     setTimeout(function() {
//         for (let index = 0; index < lockPadding.length; index++){
//             const el = lockPadding[index];
//             el.style.paddingRight = '0px';
//         }
//         body.style.paddingRight = '0px';
//         body.classList.remove('lock');
//     }, timeout);

//     unlock = false;
//     setTimeout(function(){
//         unlock = true;
//     }, timeout);
// }

// document.addEventListener('keydown', function(e){
//     if (e.which == 27){
//         const popupActive = document.querySelector('.popup.open');
//         popupClose(popupActive);
//     }
// });

const ingredient = document.querySelectorAll(".popup-ingredient__ingredient");
const category = document.querySelectorAll(".popup-category__category") 
const blockIngredient = document.querySelectorAll(".popup-ingredient");
const arrowList = document.querySelectorAll(".list-popup__arrow")
const blockIngredientAll = document.querySelectorAll('.popup-category')
const listArray = document.querySelectorAll('.list-popup__array')
const popup = document.querySelector(".popup")
const popupSubBlock = document.querySelectorAll(".list-popup__subblock")
const bigListBlock = document.querySelector(".list")
const nullString = document.querySelector(".null-string")
const arrowListMain = document.querySelector(".list__arrow-down")
const arrowListMainImg = document.querySelector(".list__img")
const crossPopup = document.querySelector(".popup__cross")
const crossPopupLink = document.querySelector(".popup__area")
const finalButton = document.querySelector(".subblock-button__button")
const popupNot = document.querySelector(".popup-notification")
const popupNotCont = document.querySelector(".popup-notification__content")
const mainForm = document.querySelector(".main-form")

function useIngredients(event){
    if (event.target.closest(".popup-ingredient").classList.contains('popup-ingredient_background')){
        event.target.closest(".popup-ingredient").classList.remove('popup-ingredient_background');
    }
    else{
        event.target.closest(".popup-ingredient").classList.add('popup-ingredient_background');
    }
};

function useBlockIngredients(event){
    if (event.target.closest(".popup-category").nextElementSibling.classList.contains('list-popup__array_background')){
        event.target.closest(".popup-category").nextElementSibling.classList.remove('list-popup__array_background');
    } else{
        event.target.closest(".popup-category").nextElementSibling.classList.add('list-popup__array_background');
    }
};

function useArrowList(event){
    if (event.target.closest(".popup-category").nextElementSibling.hidden == false){

        event.target.closest(".popup-category").nextElementSibling.hidden = true;
        blockIngredientAll[blockIngredientAll.length-1].classList.add("popup-category__category_border-radius");

        event.target.closest(".list-popup__arrow").classList.remove("list-popup__arrow_rotate");

    } else{
        event.target.closest(".popup-category").nextElementSibling.hidden = false;
        blockIngredientAll[blockIngredientAll.length-1].classList.remove("popup-category__category_border-radius");

        event.target.closest(".list-popup__arrow").classList.add("list-popup__arrow_rotate");
    }
}


function usePopup(event){
    

    let sum = 0;
    if (true) {

        popupSubBlock.forEach(function useSubBlockList(item,index,array){
            let elemArray= item.firstElementChild.nextElementSibling;
            let masChild = elemArray.children

            if (elemArray.classList.contains("list-popup__array_background")){
                masGlobal[item.firstElementChild.textContent.replace(/\n/g, '').trim()]['category chosen'][0] = 1
                for(let index = 0; index<masChild.length;index++){
                    masGlobal[item.firstElementChild.textContent.replace(/\n/g, '').trim()]['ingredients'][elemArray.children[index].textContent.replace(/\n/g, '').trim()][0] = 0;
                }
            } else {
                masGlobal[item.firstElementChild.textContent.replace(/\n/g, '').trim()]['category chosen'][0] = 0;
                for (let index = 0; index < masChild.length;index++){
                    if (elemArray.children[index].classList.contains("popup-ingredient_background")){
                        masGlobal[item.firstElementChild.textContent.replace(/\n/g, '').trim()]['ingredients'][elemArray.children[index].textContent.replace(/\n/g, '').trim()][0] = 1;
                    }
                    else{
                        masGlobal[item.firstElementChild.textContent.replace(/\n/g, '').trim()]['ingredients'][elemArray.children[index].textContent.replace(/\n/g, '').trim()][0] = 0;
                    }
                }
            }
            if (event.target.closest(".popup__area")){
                if (masGlobal[item.firstElementChild.textContent.replace(/\n/g, '').trim()]['category chosen'][0] == 1 && masGlobal[item.firstElementChild.textContent.replace(/\n/g, '').trim()]['category chosen'][1] == 0){
                    bigListBlock.insertAdjacentHTML("afterbegin",`<div class="list__string"> <img src="../static/img/Plus.png" alt="" class="list__cross"><div class="list__substring">${item.firstElementChild.textContent.replace(/\n/g, '').trim()}</div>
                    <input name="category[]" value="${item.firstElementChild.textContent.replace(/\n/g, '').trim()}" type="hidden"></div>`);
                    masGlobal[item.firstElementChild.textContent.replace(/\n/g, '').trim()]['category chosen'][1] = 1;

                }
                else {
                    for (let index = 0; index < masChild.length;index++){
                        if (masGlobal[item.firstElementChild.textContent.replace(/\n/g, '').trim()]['ingredients'][elemArray.children[index].textContent.replace(/\n/g, '').trim()][0] == 1 && masGlobal[item.firstElementChild.textContent.replace(/\n/g, '').trim()]['ingredients'][elemArray.children[index].textContent.replace(/\n/g, '').trim()][1] == 0){
                            bigListBlock.insertAdjacentHTML("afterbegin",`<div class="list__string"> <img src="../static/img/Plus.png" alt="" class="list__cross"><div class="list__substring">${elemArray.children[index].textContent.replace(/\n/g, '').trim()}</div>
                            <input name="ingredients[]" value="${elemArray.children[index].textContent.replace(/\n/g, '').trim()}" type="hidden">
                            </div>`);
                            masGlobal[item.firstElementChild.textContent.replace(/\n/g, '').trim()]['ingredients'][elemArray.children[index].textContent.replace(/\n/g, '').trim()][1] = 1;
                        }
                    }
                }
            }
        })

        const cross = document.querySelectorAll(".list__cross")
        cross.forEach( function deleteCrossAll(item,index,array){
            item.addEventListener("click",deleteCross)
        })
        if (bigListBlock.children.length > 2){
            nullString.hidden = true;
        }
        if (bigListBlock.children.length > 7){
            arrowListMain.hidden = false;
        }
        if (bigListBlock.children.length > 5){
            for (let index = 0; index < bigListBlock.children.length; index++){
                if (index > 4 && index < (bigListBlock.children.length - 2)){
                bigListBlock.children[index].hidden = true;
                }
            }
        }
    }
};

function all(iterable) {
    for (var index = 0; index < iterable.length; index++) {
        if (!iterable[index]) return false;
    }
    return true;
};

let masGlobal = {}; 

function createMas(masGlobal){
    popupSubBlock.forEach(function useFirstTime(item,index,array){
        let elemArray= item.firstElementChild.nextElementSibling;
        let masChild = elemArray.children
        let textC = item.firstElementChild.textContent.replace(/\n/g, '').trim();
        masGlobal[textC] = {};
        masGlobal[textC]['category chosen']= [0,0];
        masGlobal[textC]['ingredients']={}
        for (let index = 0; index < masChild.length;index++){
            masGlobal[textC]['ingredients'][elemArray.children[index].textContent.replace(/\n/g, '').trim()]=[0,0];
        }
    })      
}

function chooseArrowMain(event){
    if (arrowListMainImg.classList.contains('list__img_arrow-rotate')){
        arrowListMainImg.classList.remove('list__img_arrow-rotate');
        for (let index = 0; index < bigListBlock.children.length; index++){
            if (index > 4 && index < (bigListBlock.children.length - 2)){
            bigListBlock.children[index].hidden = true;
            }
        }
    }
    else{
        arrowListMainImg.classList.add('list__img_arrow-rotate');
        for (let index = 0; index < bigListBlock.children.length; index++){
            if (index > 4 && index < (bigListBlock.children.length - 2)){
            bigListBlock.children[index].hidden = false;
            }
        }
    }
}

createMas(masGlobal);


blockIngredient.forEach( function useIngredientsAll(item, index, array){
    item.addEventListener("click",useIngredients)
});

blockIngredientAll.forEach( function useBlockIngredientsAll(item,index,array){
    item.addEventListener("dblclick",useBlockIngredients)
});

arrowList.forEach( function useArrowListAll(item,index,array){
    item.addEventListener("click",useArrowList)
});

arrowListMain.addEventListener("click",chooseArrowMain)

crossPopupLink.addEventListener("click", usePopup);

function deleteCross(event){
    Object.keys(masGlobal).forEach( function useMasFirstZero(itemCategory,index,array){
        if (event.target.closest(".list__string").textContent.replace(/\n/g, '').trim() == itemCategory){
            masGlobal[itemCategory]['category chosen'][1] = 0;
        }
        else {
            Object.keys(masGlobal[itemCategory]['ingredients']).forEach( function useMasSecondZero(itemIngredient,index,array){
                if (itemIngredient == event.target.closest(".list__string").textContent.replace(/\n/g, '').trim()){
                    masGlobal[itemCategory]['ingredients'][itemIngredient][1] = 0;
                }
            })
        }
    })

    event.target.closest(".list__string").remove()
    
    for (let index = 0; index< category.length;index++){
        if(event.target.closest(".list__string").textContent.replace(/\n/g, '').trim() == category[index].textContent.replace(/\n/g, '').trim()){
            category[index].closest(".popup-category").nextElementSibling.classList.remove('list-popup__array_background')
        }
    }
    for (let index = 0; index < ingredient.length; index++){
        if(event.target.closest(".list__string").textContent.replace(/\n/g, '').trim() == ingredient[index].textContent.replace(/\n/g, '').trim()){     
            ingredient[index].closest(".popup-ingredient").classList.remove('popup-ingredient_background')
        }
    } 

    if (checkNulBlock()){
        nullString.hidden = false;
    }
    else{
        nullString.hidden = true;
    }

    if (bigListBlock.children.length < 8){
        arrowListMain.hidden = true;
    }
};
function checkNulBlock(){
    for (let indexCategory=0;indexCategory<Object.keys(masGlobal).length;indexCategory++){
        if (masGlobal[Object.keys(masGlobal)[indexCategory]]['category chosen'][1] == 0){
            for(let indexIngredient = 0; indexIngredient < Object.keys(masGlobal[Object.keys(masGlobal)[indexCategory]]['ingredients']).length;indexIngredient++){
                if (masGlobal[Object.keys(masGlobal)[indexCategory]]['ingredients'][Object.keys(masGlobal[Object.keys(masGlobal)[indexCategory]]['ingredients'])[indexIngredient]][1] != 0){
                    return false;
                }
            }
        }
        else{
            return false;
        }
    }
    return true;
}

mainForm.addEventListener("submit", async event => {
    event.preventDefault();
    // log.textContent = `Form Submitted! Timestamp: ${event.timeStamp}`;
    // popupNot.classList.add('popup-notification-visible');
    // popupNotCont.classList.add('popup-notification__content-visible');
    let response = await fetch('horoscope/meri/lao',{method:"POST", body: new FormData(mainForm)})
    // let response = await fetch('/horoscope/meri/lao');
    
    if (response.ok){
        popupNot.classList.add('popup-notification-visible');
        popupNotCont.classList.add('popup-notification__content-visible');
        
        window.location.href = '/done'
    }
    // else{
    //     console.log(123)
    // }

})