console.log('everything works!')

let SONGURL = 'https://taylor-swift-api.sarbo.workers.dev/albums/'
const ALBUMS = [
    {
        id: 2,
        name: "Taylor Swift",
        image: 'albumiamges/taylorswiftcover.webp',
        date: '2006'
    },
    {
        id: 3,
        name: "Fearless (TV)",
        image: 'albumiamges/fearlesstvcover.jpeg',
        date: '2021 (2008)'
    },
    {
        id: 4,
        name: "Speak Now (TV)",
        image: 'albumiamges/speaknowtv.jpeg',
        date: '2023 (2010)'
    },
    {
        id: 5,
        name: "Red (TV)",
        image: 'albumiamges/redcover.webp',
        date: '2021 (2012)'
    },
    {
        id: 1,
        name: "1989",
        image: 'albumiamges/1989cover.webp',
        date: '2014'
    },
    {
        id: 6,
        name: "Reputation",
        image: 'albumiamges/reputayioncover.webp',
        date: '2017'
    },
    {
        id: 7,
        name: "Lover",
        image: 'albumiamges/lovercover.webp',
        date: '2019'
    },
    {
        id: 8,
        name: "Folklore",
        image: 'albumiamges/folklorcoiver.webp',
        date: '2020'
    },
    {
        id: 9,
        name: "Evermore",
        image: 'albumiamges/evermorecover.png',
        date: '2021'
    },
    {
        id: 10,
        name: "Midnights",
        image: 'albumiamges/midnightscover.webp',
        date: '2022'
    },
]

const albums = document.querySelector('.albumcovers')
// const getRandom = Math.floor(Math.random() * 9)

const randomBtnAlbum = document.querySelector('#randoAlbumBtn')


// albums section
function getRandomAlbums() {
    try {
        const album = ALBUMS[Math.floor(Math.random() * 9)]
        const album2 = ALBUMS[Math.floor(Math.random() * 9)]
        const album3 = ALBUMS[Math.floor(Math.random() * 9)]

        console.log(album)
        
        albums.innerHTML = `
            <div class="album">
                <img src="${album.image}" alt="">
                <div class="overlay">
                    <h3 class="noto">${album.name}</h3>
                    <h5 class="noto">Released in: ${album.date}</h5>
                    <button class="info-btn" data-id="${album.id}">Click here!</button>
                </div>
            </div>
            
            <div class="album" data-id="${album2.id}">
                <img src="${album2.image}" alt="">
                <div class="overlay">
                    <h3 class="noto">${album2.name}</h3>
                    <h5 class="noto">Released in: ${album2.date}</h5>
                    <button class="info-btn" data-id="${album2.id}">Click here!</button>
                </div>
            </div>
            
            <div class="album" data-id="${album3.id}">
                <img src="${album3.image}" alt="">
                <div class="overlay">
                    <h3 class="noto">${album3.name}</h3>
                    <h5 class="noto">Released in: ${album3.date}</h5>
                    <button class="info-btn" data-id="${album3.id}">Click here!</button>
                </div>
            </div>`

    } catch(error) {
        console.log(error.message)
    }

    getAlbumNme()
}

function getAlbumNme() {
    const buttonsClicked = document.querySelectorAll('.info-btn')
    buttonsClicked.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const btnid = btn.dataset.id
            // console.log(btnid)

            fetchSongs(btnid)
        })
    })
}

const fetchSongs = async (btnid) => {
    try {
        document.querySelector('.songslist').innerHTML = `<div class="loadingcircle"></div>`

        const songresponse = await fetch(SONGURL + btnid)
        const songdata = await songresponse.json()
        // console.log(songdata.title)

        displaySongs(songdata)
        
    } catch(error) {
        console.log(error.message)
    }
}

function displaySongs(songdata) {
    const songContent = songdata.map((song) => {
        return `<li>${song.title}</li>`
    }).join("")

    document.querySelector('.songslist').innerHTML = `${songContent}`
}

randomBtnAlbum.addEventListener('click', () => {
    console.log('ranodm button pressed')
    getRandomAlbums()
})

// songs 

getRandomAlbums()