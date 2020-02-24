
const HOST = "http://10.141.23.164:8080/";
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
