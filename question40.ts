// Function to create an album object
function make_album(artist: string, title: string, tracks?: number) {
    let album:any = {
        artist: artist,
        title: title
    };
    
    // Add tracks property only if it is defined
    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}


let album1 = make_album('Black Pink', '2016');
let album2 = make_album('Bts', 'Proof');
let album3 = make_album('Coldplay', 'A Head Full of Dreams', 11);


console.log(album1);
console.log(album2);
console.log(album3);
