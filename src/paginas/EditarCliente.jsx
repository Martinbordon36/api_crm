import {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'

import Formulario from '../components/Formulario'

const EditarCliente = () => {

  const [cliente, setCliente] = useState({});
  const [cargando, setCargando] = useState(true);

  const { id } = useParams();


  useEffect(() => {
    const obtenerClienteApi = async () => {
      try {
        const url = `http://localhost:4000/clientes/${id}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setCliente(resultado);
      } catch (error) {
        console.log(error);
      }

      setTimeout(() => {
        setCargando(false);

      }, 1200);


    };

    obtenerClienteApi();
  }, []);

  return (
    <>
        <h1 className='font-black text-4xl text-blue-900'>Editar Cliente</h1>
        <p className='mt-3'>Edita los datos de un cliente</p>
    
    {cliente?.nombre ? (
      <Formulario 
      cliente={cliente}
      cargando={cargando}
  />
    ) :
      <p className='bg-red-500 p-5 text-white text-center mt-3'>Cliente ID NO VALIDO</p>
    }

    </>
  )
}

export default EditarCliente