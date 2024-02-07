// // console.log(document.forms[0])
// let form = document.forms.registration
//
// // console.log(form.elements[1])
// // console.log(form.elements.email)
// let elem = form.elements.email
//
// for (let i of form.elements) {
//     console.log(i)
// }
// console.log(elem.form)

// console.log(form.elements[0].value)
// console.log(form.elements[2].classList[0])
//
// console.log(form.elements[5].checked)
//
// console.log(form.elements.gender[0].checked)

// console.log(form.elements[3].value)
// let select = form.elements[3];
// console.log(form.elements[3].options[1].selected = true);
// select.selectedIndex = 1;
// select.value = "Moscow";

// let option = new Option('Челябинск', 'Chelyabinsk')
// select[select.options.length] = option

let form = document.forms.registration
let email = form.elements[1]

// email.onblur = () => {
//     if (!email.value.includes('@') || !email.value.includes('.')) {
//         let error = document.querySelector('.error')
//         error.innerHTML = 'Email error'
//     }
// }
//
// email.onfocus = () => {
//     let error = document.querySelector('.error')
//     error.innerHTML = ''
// }

// form.addEventListener('focus', () => console.log('focus'))
// form.addEventListener('blur', () => console.log('blur'))
// form.addEventListener('focusin', () => console.log('focusin'))
// form.addEventListener('focusout', () => console.log('focusout'))

email.addEventListener('input', () => console.log(email.value))

function sumb(event) {
    event.preventDefault();
    console.log('qwerty')
}