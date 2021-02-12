function messService(){
    this.sendMessage = function(mess){
        return axios({
            "url" : "https://6006de233698a80017de2224.mockapi.io/api/chatPhu",
            "method" : "POST",
            "data" : mess
        });
    }
    this.getMessage = function(){
        return axios({
            "url" : "https://6006de233698a80017de2224.mockapi.io/api/chatPhu",
            "method" : "GET",
        });
    }
}