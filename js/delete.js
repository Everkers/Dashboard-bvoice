const form = document.getElementById('form_delete');
const id  = document.querySelector('#id')
const logs = document.querySelector('ul.logs');
form.onsubmit = (event)=>{
    event.preventDefault()
    const id_s = id.value
    const dashboard_delete = new dash();
    dashboard_delete.delete(id_s)
    
}
class dash{
    constructor(){
        this.api_url_delete='https://recomanded-arrax.herokuapp.com/api/recomanded'
    }
    async delete(id){
        try{
            const response = await axios.delete(`${this.api_url_delete}/${id}`)
            const template_sucess = `<li class="item success">${response.data.message}</li>`
            $(logs).append(template_sucess)
        }
        catch(err){
            console.log(err)
        }
    }
}