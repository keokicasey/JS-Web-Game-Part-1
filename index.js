function newImage(url, left, bottom) {
    let image = document.createElement('img')
    image.src = url
    image.style.position = 'fixed'
    image.style.left = left
    image.style.bottom = bottom
    document.body.append(image)
}

function newItem(url, left, bottom) {
    let image = document.createElement('img')
    image.src = url
    image.style.position = 'fixed'
    image.style.left = left
    image.style.bottom = bottom
    document.body.append(image)
    image.addEventListener('dblclick', function() {
        image.remove()
    })
}

// character
newImage('assets/green-character.gif', '100px', '100px')

// pine tree
newImage('assets/pine-tree.png', '450px', '200px')

// tree
newImage('assets/tree.png', '200px', '300px')

// pillar
newImage('assets/pillar.png', '350px', '100px')

// crate
newImage('assets/crate.png', '150px', '200px')

// well
newImage('assets/well.png', '500px', '425px')

// sword
newItem('assets/sword.png', '500px', '405px')

// shield
newItem('assets/shield.png', '165px', '185px')

// staff
newItem('assets/staff.png', '600px', '100px')