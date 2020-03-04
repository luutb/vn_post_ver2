
const HOST = "http://192.168.44.103:8080/";
export default
{
    getHeader: function(more ={}){

        return {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          ...more
        }
  
      },
    categoryApi: function (data) 
    {
        let query = this.makeParam(data);
        return  fetch(HOST+'api/Category/getCategory'+query, {
            method: 'GET',
            headers: this.getHeader({"Token":"Hall"}),
           
          })
          .then((response) => response.json())
         
          
          
    },
       
    postApi: function(data){
        let query = this.makeParam(data);
        return fetch(HOST+'api/Category/getPost'+query,{
            method:'GET',
            headers: this.getHeader({"Token":"Hall"})
        })
        .then((response)=>response.json())
    },
    allApi: function(data){
        let query = this.makeParam(data);
        return fetch(HOST+'api/Category/getData'+query,{
            method:'GET',
            headers: this.getHeader({"Token":"Hall"})
        })
        .then((response)=>response.json())
    },
    postData: function(data){
        return fetch(HOST+'api/Login/postData', {
            method:'POST',
            headers: this.getHeader({"Token":"Hall"}),
            
            body: JSON.stringify(data),
        })
        .then((response)=>response.json())

    },

    makeParam(parms){
        let query = "";
        for (var k in parms){
            if (query.length<1){
                query+= "?"+k+"="+parms[k];
            }
            else
            {
                query+=  "&"+k+"="+parms[k];
            }
        }
        return query;
    }
}
