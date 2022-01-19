function newImage(name, left , bottom) {
    let image = document.createElement('img')
    switch (name) {
        case 'greenCharacter':
            image.src = 'assets/green-character.gif'
        break;
        case 'pineTree':
            image.src = 'assets/pine-tree.png'
        break;
        case 'tree':
            image.src = 'assets/tree.png'
        break;
        case 'pillar':
            image.src = 'assets/pillar.png'
        break;
        case 'crate':
            image.src = 'assets/crate.png'
        break;
        case 'well':
            image.src = 'assets/well.png'
        break;
    }
    image.style.position = 'fixed'
    image.style.left = left
    image.style.bottom = bottom
    document.body.append(image)
}

function newItem(name, left, bottom) {
    let image = document.createElement('img')
    switch (name) {
        case 'sword':
            image.src = 'assets/sword.png'
        break;
        case 'shield':
            image.src = 'assets/shield.png'
        break;
        case 'staff':
            image.src = 'assets/staff.png'
        break;
    }
    image.style.position = 'fixed'
    image.style.left = left
    image.style.bottom = bottom
    document.body.append(image)
    image.addEventListener('dblclick', function() {
        image.remove()
    })
}

// character
newImage('greenCharacter', '100px', '100px')

// pine tree
newImage('pineTree', '450px', '200px')

// tree
newImage('tree', '200px', '300px')

// pillar
newImage('pillar', '350px', '100px')

// crate
newImage('crate', '150px', '200px')

// well
newImage('well', '500px', '425px')

// sword
newItem('sword', '500px', '405px')

// shield
newItem('shield', '165px', '185px')

// staff
newItem('staff', '600px', '100px')