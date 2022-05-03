import { useForm } from "react-hook-form";
import "./App.scss";
import logo from "./img/acceso.png"

const App = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm()

  const submit = data => {
    console.log(data)
  }

/*   console.log(watch("email")) // muestra en consola letra por letra
  console.log(errors) */

  return (
    <div className="ed-grid">
      <form className="ed-container form__item l-30" onSubmit={ handleSubmit(submit) }>
        <div className="ed-item s-center">
          <img 
            className="s-mb-2" 
            src={ logo }
            alt="logo la gotera"
          />
        </div>

        <div className="ed-item form__item">
          <label htmlFor="email">
          Correo electrónico
            <input 
              { ...register("email", { required: "El correo es obligatorio" }) }
              type="email" 
              name="email"
              id="email" 
              defaultValue=""
            />
          </label>

          { errors?.email && // Si existe error.mail, entonces muestrame su respectivo mensaje en rojo
          <span className="color red-500 smaller">
            {errors?.email?.message}
          </span>
          }

        </div>

        <div className="ed-item form__item">
          <label htmlFor="password">
          Contraseña
            <input 
            { ...register("password", { 
              required: "La contraseña es obligatora" ,
              minLength: {value: 4, message:"La contraseña debe tener un minimo de 4 caracteres" },
              maxLength: {value: 10, message:"La contraseña no debe superar los 10 caracteres" }
            }) }
              type="password" 
              name="password" 
              id="password"
              defaultValue=""
            />
          </label>

          { errors?.password && // Si existe errores en la contraseña, entonces muestreame el mensaje en rojo
          <span className="color red-500 smaller">
            {errors?.password?.message}
          </span>
          }

        </div>

        <div className="ed-item form__item">
          <input 
            type="submit" 
            value="Ingresar" 
            className="button full"
          />
        </div>

      </form>
    </div>
  );
}

export default App;
