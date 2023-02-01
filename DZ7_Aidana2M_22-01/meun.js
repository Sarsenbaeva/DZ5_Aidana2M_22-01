const color = prompt('Выберите цвет')

class Svetofor {
    constructor(selector) {
        this.$element = document.querySelector(selector)
    }

    hide() {
        this.$element.style.display = 'none'
    }
    show() {
        this.$element.style.display = 'block'
    }
}



class Circle extends Svetofor {
    constructor(options) {
        super(options.selector);
        this.$element.style.backgroundColor = options.color
        this.$element.style.borderRadius = '50%'
        this.$element.style.width = this.$element.style.height = options.razmer + 'px'
        this.$element.style.borderRadius = '50%'
    }
}

if (color === 'красный') {
    const red = new Circle({
        selector: '#red',
        razmer: 90,
        color: 'red'

    })
    red.hide()
    red.show()
} else if (color === 'желтый') {
    const yellow = new Circle({
        selector: '#yellow',
        razmer: 90,
        color: 'yellow'
    })
    yellow.hide()
    yellow.show()

} else if (color === 'зеленый') {
    const green = new Circle({
        selector: '#green',
        razmer: 90,
        color: 'green'
    })
    green.hide()
    green.show()
} else {
    alert('ERROR')
}