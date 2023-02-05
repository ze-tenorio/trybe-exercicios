const colors = document.querySelectorAll('.colors');
const fontColors = document.querySelectorAll('.font-color');
const fontSizes = document.querySelectorAll('.font-size')
const lineHeights = document.querySelectorAll('.line-height');
const fontTypes = document.querySelectorAll('.font-type');

document.body.style.backgroundColor = localStorage.getItem('backgroundColor');
document.body.style.color = localStorage.getItem('fontColor');

colors.forEach(color => {
    color.addEventListener('click', () => {
        localStorage.setItem('backgroundColor', color.innerHTML);
        document.body.style.backgroundColor = localStorage.getItem('backgroundColor');
    })
})

fontColors.forEach(color => {
    color.addEventListener('click', () => {
        localStorage.setItem('fontColor', color.innerHTML);
        document.body.style.color = localStorage.getItem('fontColor')
    })
})

fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        document.body.style.fontSize = size.innerHTML
    })
})

lineHeights.forEach(height => {
    height.addEventListener('click', () => {
        document.body.style.lineHeight = height.innerHTML
    })
})

fontTypes.forEach(type => {
    type.addEventListener('click', () => {
        document.body.style.fontFamily = type.innerHTML
    })
})