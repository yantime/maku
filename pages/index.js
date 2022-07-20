import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import profilePic from '../public/tiendas.png'
import foto from '../public/maku.jpg'
import logo from '../public/logo.png'
import mascotas from '../public/mascotas.jpeg'
import cursos from '../public/cursos-online-negocio.jpg'
import inmuebles from '../public/venta-inmuebles.jpg'
import fitness from '../public/negocio-fitness.jpg'
import acciones from '../public/negocios-bolsa.jpg'
import agua from '../public/negocio-agua-embotellada.png'
import galonera from '../public/galonera.jpeg'
import bidon from '../public/bidon.jpg'
import recarga from '../public/recarga.jpg'
import promo from '../public/promo.jpg'
import docena from '../public/docena.jpg'
import dispensador from '../public/dispensador.jpg'
import principio from '../public/principio.png'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Agua de mesa Maku - Trujillo</title>
        <meta name="description" content="Agua de mesa Maku,el agua del norte - trujillo " />
        <link rel="icon" href="/makuico.ico" />
      </Head>


      <div classNameName='container'>
      
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">

            <Link href="/">
              <a className="navbar-item"></a>
            </Link>
            
              

              <Image
        src={logo}
        alt="Agua de mesa maku, trujillo"
        
        
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
            </a>
        
            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
        
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <a className="navbar-item">
                Inicio
              </a>
        
              <a className="navbar-item">
                Nosotros
              </a>
        
              
            </div>
        
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <a className="button is-success is-outlined" href="https://api.whatsapp.com/send?phone=51927580020&text=Hola%2C%20a%20cuanto%20esta%20la%20recarga%20de%20agua%3F" target="_blank" >
                    Whatsapp: 927 580 020
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>

      <div classNameName="columns mt-2">

      <div classNameName="column ">
      
      <main>

      <div classNameName="content is-medium">
        

        <Image
        src={foto}
        alt="Agua de mesa maku, trujillo"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
        

      </div>


      <section className="section has-background-info-light ">

      <div classNameName="columns ">
      
      <div classNameName="column ">

        <h1 classNameName="title is-1 mt-5" >
           
          
          <span className="has-text-danger"> MAKU</span>
          
          , el agua del Norte.
        </h1>

        
        <div className="content">

        <p classNameName="is-size-4">
        Agua Maku es ligera, baja en Sodio, debidamente tratada para cuidar tu salud.
        
          
        </p>

        <p classNameName="is-size-4">
          
          Nuestro compromiso es brindarles a los consumidores Trujillanos un <strong> producto de calidad </strong> y un servicio abastecimiento eficiente y puntual.
          
            
          </p>

          <p classNameName="is-size-4">
          
            Contamos con los procesos más modernos de tratamiento de agua como es la <strong> ósmosis inversa y ozonización</strong>, para brindar a nuestros clientes un producto de calidad.
            
              
            </p>

            

            <a href="https://api.whatsapp.com/send?phone=51927580020&text=Hola%2C%20a%20cuanto%20esta%20la%20recarga%20de%20agua%3F" target="_blank">
              <button className="button is-medium is-success is-responsive"  >Escribir al Whatsapp</button>
          </a>

            

          </div>

      </div>


      <div classNameName="column ">


        

        <Image
        src={principio}
        alt="Agua de mesa maku en galonera, trujillo"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />


      </div>


      </div>

    </section>


    <section className="section">


      <div classNameName="column  mb-2">

        <h2 classNameName="title is-2 has-text-centered"> Todos los Productos</h2>


      </div>




      <div classNameName="columns ">

 
      
        <div classNameName="column">

        
          <div className="box">
          
          <Image
          src={galonera}
          alt="Agua de mesa maku en galonera, trujillo"
          // width={500} automatically provided
          // height={500} automatically provided
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />

          </div>
  
        </div>
  
        <div classNameName="column ">
  
          <div classNameName="box">
          <Image
          src={bidon}
          alt="Agua de mesa maku en bidon, trujillo"
          // width={500} automatically provided
          // height={500} automatically provided
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />

      </div>
  
        </div>

        <div classNameName="column ">
  
          <div classNameName="box">
          <Image
          src={recarga}
          alt="Recarga de Agua de mesa maku, trujillo"
          // width={500} automatically provided
          // height={500} automatically provided
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
      </div>
  
        </div>
  
        
  
  
        </div>

      
      
        <div classNameName="columns ">

 
      
          <div classNameName="column ">
    
            <div classNameName="box"> 
            <Image
            src={promo}
            alt="Agua de mesa maku, trujillo"
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
          </div>
    
          <div classNameName="column ">
    
            <div classNameName="box"> 
            <Image
            src={docena}
            alt="Agua de mesa maku, trujillo"
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
    
          </div>
        </div>
  
          <div classNameName="column ">
    
            <div classNameName="box"> 
            <Image
            src={dispensador}
            alt="Agua de mesa maku, trujillo"
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
        </div>
          </div>
    
          
    
    
          </div>

        </section>


        <section className="section has-background-info-light">

          <div classNameName="columns is-mobile">
          
          
    
    
          <div classNameName="column is-full-mobile">

          <div classNameName="content">
    
          <h3 className="title is-2">Llámanos:</h3>

          <Link href="tel:927580020">
            <a className="title is-2 has-text-info">927 580 020</a>
          </Link>
          
          <p></p>
          <p className="is-size-5">Nuestras presentaciones de bidón de 20 litros y galonera de 7 litros</p>
          <p className="is-size-5" >Delivery gratis a toda la ciudad de Trujillo, atendemos a casas, negocios y empresas.</p>
          <p classNameName="is-size-5"> Registro Sanitario: P0604322NLACRNR </p>

          <p className="is-size-5"> <strong>Pedidos corporativos:</strong> nortprosac@gmail.com </p>

          </div>
    
    
          </div>
    
    
          </div>
    
        </section>


        <br/>

        

        

     
      </main>

     
      </div>


      </div>

      <footer classNameName="footer">

        <div className="columns">
        <div  className="column is-desktop">
        <div classNameName="content has-text-centered">
          <p className="is-size-5" >
            <strong> Corporación Nortpro S.A.C - 2022 </strong>, todos los derechos reservados 
          </p>
        </div>
      </div>

      </div>
      </footer>

    </div>
    </div>
    
  )
}
