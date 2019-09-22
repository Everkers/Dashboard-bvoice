const form = document.getElementById('form');
const artist = document.querySelector('#artistName');
const song = document.querySelector('#songName');
const artwork = document.querySelector('#artwork');
const log = document.querySelector('ul.logs');
form.onsubmit = (event)=>{
    event.preventDefault()
    const dashboard = new dash();
    const data = {
        s_artist : artist.value,
        s_song :  song.value,
        s_artwork:  artwork.value,
    }
    dashboard.addSong(data)
}
class dash{
    constructor(){
        this.api_url_upload='http://recomanded-arrax.herokuapp.com/api/upload'
    }
    async addSong(obj){
        try{
            const {s_artist , s_artwork , s_song} = obj
            const response = await axios.post(this.api_url_upload,{
                data:{
                    name:s_song,
                    artist:s_artist,
                    artwork:s_artwork
                }
            })
            const template_err = `<li class="item failed">${response.data.message}</li>`
            const template_sucess = `<li class="item success">${response.data.message}</li>`
            if(response.data.message == 'this song is already on our database'){
                $(log).append(template_err)
            }
            else if(response.data.message == 'the song has been added to the database!'){
                $(log).append(template_sucess)
            }
        }
        catch(err){
            console.log(err)
        }
    }
}