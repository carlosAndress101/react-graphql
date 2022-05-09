const Customer = ({ custom }) =>{
    if(custom === null) return null;
    return(
        <div>
            <h2> Customer Carlos</h2>
            {custom.map(custom => <div key={custom._id}>
                Nombre: {custom.Name}<br/> 

                Numero: {custom.Phonenumber}<br/> 
                    
                Direccion: {custom.Email}<br/><br/>
            </div>)}
        </div>
    )
}
export default Customer;