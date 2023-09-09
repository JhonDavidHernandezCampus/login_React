import React, { useState } from "react";

function Login() {
/* 
    const [formData, setFormData] = useState({
        nameuser: "",
        passport: ""
    })

    const handleInputChange = (e) => {
        console.log(e.target);

    } */

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(e.target);
        let data = Object.fromEntries(new FormData(e.target));
        console.log(data.usuario);
        let config = {
            method:"POST",
            headers: new Headers(),
            body: data
        }
        let consu = await (await fetch(`http://localhost:5001`,config)).json();
        console.log(consu);
    }    


    return <div>
        <h1>Iniciar secion</h1>
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Nombre usuario</label>
                <input
                    type="text"
                    name="usuario"
                    placeholder="Usuario"
                    required
                />
            </div>
            <div>
                <label htmlFor="">introdusca la contraseña </label>
                <input
                    type="text"
                    name="password"
                    placeholder="Contraseña"
                    required
                />
            </div>
            <button type="submit">Enviar</button>

        </form>
    </div>
}

export default Login;