let data = {
    cif:"A82798943"
}

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

function randomFromArray(list){
    return list[Math.floor(Math.random() * list.length)]
}

function randomLetter() {
    return letters.charAt(Math.floor(Math.random() * letters.length))
}

function randomInt(from, to) {
    return Math.floor(Math.random() * (to-from) + from)
}

function randomIntString(len) {
    let res = ''
    for (let i = 0; i < len; i++) {
        res += randomInt(0, 9).toString()
    }
    return res
}

const products = {
    burguers:[
        ['Doble Crispy Chicken', 6.82],
        ['Doble Steakhouse', 9.65],
        ['Duo Bacon Cheddar - Doble Crispy Chicken', 7.43],
        ['Brutal Bacon Crispy Chicken', 8.25],
        ['Doble Cheese Salad', 4.87],
        ['Big King XXL', 7.85],
        ['Steakhouse', 7.75],
        ['doble cheese bacon XXL', 7.85],
        ['The King Huevo', 7.94],
        ['The King Bacon', 7.94],
        ['Doble Whopper', 7.82],
        ['King Chicken', 7.42],
        ['Whopper Vegetal', 5.92],
        ['Long Chicken', 5.87],
        ['Doble Cheese Burger BBQ', 5.16],
        ['Long Vegetal', 5.91],
        ['Big King', 5.82],
        ['Big King vegetal', 5.93],
        ['Chicken Tendercrisp', 6.72],
        ['Whopper', 5.89],
        ['Crispy Chicken', 5.82],
        ['Chicken Wrap', 5.41],
        ['Whopper sin Gluten', 3.07],
        ['Cheeseburger Sin Gluten', 4.61],
        ['Burger Sin Gluten', 4.03]
    ],
    sides:[
        ['Cubo de Nuggets x24', 9.74],
        ['Alitas de pollo x4', 2.9],
        ['Cubo de alitas x12', 9.95],
        ['Cubo King Aros', 8.87],
        ['Cubo Chili Cheese Bites', 8.88],
        ['Chili Cheese Bites x9', 4.84],
        ['Delicias de Pollo x4', 2.93],
        ['Chicken Nuggets x9', 4.86],
        ['Nuggets vegetales x9', 4.89],
        ['Cubo de patatas clásicas', 5.11],
        ['Cubo de alitas x16', 9.49],
        ['Cubo de patatas supreme', 5.11],
        ['Cubo alitas + Nuggets x10', 9.49],
        ['Alitas de pollo x6', 5.73],
        ['Alitas de pollo x8', 4.73],
        ['Nuggets vegetales x6', 3.67],
        ['Delicias de Pollo x8', 4.64],
        ['Alitas de pollo x3', 3.74],
        ['Chicken Nuggets x6', 3.64],
        ['Chili Cheese Bites x6', 3.62],
        ['King Aros de Cebolla x13', 3.43],
        ['Patatas Clásicas', 3.19],
        ['King Aros de Cebolla x10', 3.22],
        ['Patatas Supreme', 3.2],
        ['Patatas Sin Gluten', 3.07],
        ['King Aros de Cebolla x7', 2.92]
    ],
    drink:[
        ['Sprite', 2.98],
        ['Nestea', 2.98],
        ['coca-cola', 2.98],
        ['fanta naranja', 2.98],
        ['trina', 2.98],
        ['agua mineral', 1.98],
        ['caprisun tropical', 1.91]
    ],
    sauces:[
        ['Salsa queso', 0.60],
        ['Salsa barbacoa', 0.60],
        ['sour cream', 0.60],
        ['salsa miel y mostaza', 0.60],
        ['Salsa mayonesa', 0.60],
        ['Salsa maracuyá', 0.60]
    ],
    extras:[
        ['Ben and Jerry´s Chocolate Fudge 465 ML', 7.27],
        ['Mini Ben and Jerry´s Chocolate Fudge 100 ML', 3.48],
        ['Ben and Jerry´s Strawberry Cheesecake 465 ML', 7.28],
        ['Mini Ben and Jerry´s Cookie Dough 100 ML', 3.48],
        ['Ben and Jerry´s Cookie Dough 465 ML', 7.27],
        ['Tarta Oreo', 3.36],
        ['King Fusion Kit Kat', 3.23],
        ['Burger King Sandy Chocolate', 2.52],
        ['Burger King Sandy Caramelo', 2.52]
    ]
}

class Menu{
    constructor () {
        this.items = []
        this.total = 0

        this.items.push( randomFromArray(products.burguers) )
        this.items.push( randomFromArray(products.sides) )
        this.items.push( randomFromArray(products.drink) )

        if (Math.random() < 0.3) {
            this.items.push( randomFromArray(products.extras) )
        }

        if (Math.random() < 0.25) {
            this.items.push( randomFromArray(products.burguers) )
            this.items.push( randomFromArray(products.extras) )
            this.items.push( randomFromArray(products.sides) )
            this.items.push( randomFromArray(products.drink) )

            if (Math.random() < 0.3) {
                this.items.push( randomFromArray(products.extras) )
            }
        }

        if (Math.random() < 0.1) {
            this.items.push( randomFromArray(products.burguers) )
            this.items.push( randomFromArray(products.extras) )
            this.items.push( randomFromArray(products.sides) )
            this.items.push( randomFromArray(products.drink) )

            if (Math.random() < 0.3) {
                this.items.push( randomFromArray(products.extras) )
            }
        }

        if (Math.random() < 0.5) {
            this.items.push( randomFromArray(products.sauces) )
        }

        this.calcTotal()
    }

    calcTotal() {
        let total = 0 
        for (let item of this.items) {
            total += item[1]
        }

        this.total = total
    }
}

function fill() {
    document.getElementById('receipt').style.display = 'flex';

    // date
    let d = new Date();
    d = new Date(d.getTime() - 60000*randomInt(9, 15)); // mas o menos 10 minutos antes de mostrar el recibo se hace el pedido
    let time = d.toISOString();
    time = time.split('T')
    time[1] = time[1].split('.')[0]
    time[0] = time[0].split('-').reverse().join('/')
    data.time = time[0] + time[1]

    // bk fake tag
    let bk = 'BK-' + randomInt(11111, 49999).toString()
    data.bk = bk

    // fs fake tag
    let fs = 'FS ' + randomLetter() + randomInt(0, 100).toString() + '/' + randomInt(20000, 99999)
    data.fs = fs

    // winrest
    let winrest = randomInt(100, 400)
    data.winrest = winrest

    // till
    let kiosko = 'K' + randomInt(1, 3).toString()
    data.kiosko = kiosko

    // order id
    let id = randomInt(100000, 800000)
    data.id = id

    // kiosko 
    data.kiosko = 'K' + randomInt(1, 3).toString()

    // cc info
    data.cc = randomIntString(4)
    data.title = randomFromArray(['MASTERCARD', 'VISA'])
    data.aid = 'A' + '00000000' + randomIntString(5)
    data.account = randomFromArray(['Sabadell', 'LaCaixa', 'BBVA', 'Santander', 'IberCaja'])

    // menu
    data.menu = new Menu()

    // show everthing
    const takeAway = document.getElementById('takeAway')
    const street = document.getElementById('street')
    const num = document.getElementById('num')

    document.getElementById('street-show').innerText = street.value
    document.getElementById('num-show').innerText = num.value
    document.getElementById('takeAway-show').innerText = takeAway.checked ? 'PARA LLEVAR' : '';

    document.getElementById('bk-show').innerText = data.bk
    document.getElementById('cif-show').innerText = data.cif
    document.getElementById('fs-show').innerText = data.fs
    document.getElementById('date-show').innerText = data.time

    document.getElementById('winrest-show').innerText = data.winrest
    document.getElementById('id-show').innerText = data.id
    document.getElementById('kiosko-show').innerText = data.kiosko

    document.getElementById('card-show').innerText = data.cc
    document.getElementById('title-show').innerText = data.title
    document.getElementById('aid-show').innerText = data.aid
    document.getElementById('account-show').innerText = data.aid

    document.getElementById('menutable').innerHTML = '<tr><td>Ctd</td><td>Descripción</td><td>Precio</td></tr>'
    for (let item of data.menu.items) {
        document.getElementById('menutable').innerHTML += '<tr><td>1</td><td>'+ item[0].toUpperCase() +'</td><td>€'+ item[1].toFixed(2).replace('.', ',') +'</td></tr>'
    }

    document.getElementById('total-show').innerText = data.menu.total.toFixed(2).replace('.', ',')
    document.getElementById('total-card-show').innerText = data.menu.total.toFixed(2).replace('.', ',')
}