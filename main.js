let messSer = new messService();
let sendMess = (mess) => {
    messSer.sendMessage(mess)
    .then(function(){
    })
    .catch(function(err){
        console.log(err);
    })
}
let getMess = () => {
    
    messSer.getMessage()
    .then(function(result){
        var content = "";
        if(result.data.length >= 5){
             lenI = result.data.length - 5;
        }
        else lenI = 0;
        for(var i = lenI; i < result.data.length; i++){
            content += `
                <tr>
                    <td>${result.data[i].id}</td>
                    <td>${result.data[i].message}</td>
                    <td>${result.data[i].date}</td>
                </tr>
            `;
        }
        document.querySelector('#showMess').innerHTML = content;
    })
    .catch(function(err){
        console.log(err);
    })
}
document.querySelector('#btnSend').addEventListener('click', function(){
    let today = new Date();
    let mess = document.querySelector('#mess').value;
    let date = `${today.getDate()} -  ${today.getMonth()} - ${today.getFullYear()}`;
    let obMess = {
        id:"",
        message: mess,
        date : date,
    }
    sendMess(obMess);
    
})
getMess();
