import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../../components/ui/card';

export interface Producto {
    id: number;
    title: string;
    category: string;
    price: number;
    thumbnail: string;
    dimensions: {
        width: number;
        heigth: number;
        depth: number;
    }
}
export const Productos = () => {
    //en esta PAGINA deseo cargar la lista de producos
    //1--- no puedo mostrar el HTML hasta que no esten disponibles todos los datos de la API
    // para esto vamos usar el hook useEffect + useState + axios
    //2---crear una variable de estado que almacene los productos cuando esten disponibles 
    // en axios para posteriormente mostralos en el html
    //3---crear types o interface que definen la estructura de los datos
    // que nos vienen desde la API (xTypescript, legibilidad/claridad, documentacion)
    const [productos, setProductos] = useState<Producto[]>([]);
    const [limit, setLimit] = useState<number>(0)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)


    useEffect ( () => {
        //el code se bloquea al pedir los datos
        axios.get('https://dummyjson.com/products')
        .then(respuesta => {
            //la variable respuesta solo tiene validez en el ambito o contexto de la funcion then
            // es decir no se puede leer en el return
            console.log(respuesta)

            setProductos(respuesta.data.products)
            setLimit(respuesta.data.limit)
            setLoading(false)
            setTimeout(() => {
                console.log("Han pasado 5 segundos");
              }, 5000); // Tiempo en milisegundos (5 segundos en este caso)
              

        })
    }, [])
  return (
    (loading)
    ?
    <h2>Cargando documento...</h2>

    :
    <>
    <div>Seccion prod {limit}</div>
    {/* <ul>
        
        {productos.map( (producto: Producto) => { return ( <li key={producto.id}>
            <span>{producto.title}</span>
            <img src={producto.thumbnail} alt="" /></li>)   })}
    </ul> */}
<section className="flex flex-wrap justify-center items-start gap-4">
  {productos.map((producto: Producto) => (
    <Card key={producto.id}>
      <CardHeader>
        <CardTitle>{producto.title}</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <img src={producto.thumbnail} alt="" />
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  ))}
</section>

    </>
  )
}
