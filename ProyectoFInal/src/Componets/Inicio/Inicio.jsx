
import './Inicio.css'

// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import {Link} from "react-router-dom"


const Inicio = () => {
  return (
   <div>
    <header className="header">
        <div className="menu-container">
            <label htmlFor="menu">
              <img src="imagenes/logo.jpg" className="logo"/>
           </label>
           <nav className="navbar">
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
           </nav>
           <div className="icons">
             
             <FaCircleUser className="logo"/>
             
             
             <Link to="/carrito"><FaShoppingCart className="logo"/></Link>
         </div>
        </div>

        <div className="header-content">
            <div className="header-img">
                <img src="imagenes/descuento.jpg" alt=""/>
            </div>
            <div className="header-txt">
                <h1>Ofertas especiales</h1>
                <p>Estrena las mejores prendas</p>
            </div>
        </div>
    </header>
    <section className="ofert">
        <div className="ofert-1">
            <div className="ofert-img">
                <img src="imagenes/ofert-1.webp" alt=""/>
            </div>
            <div className="ofert-txt">
                <h3>Producto 1</h3>
                <a href="#" className="btn-2">Informacion</a>
            </div>
        </div>

        <div className="ofert-1">
            <div className="ofert-img">
                <img src="imagenes/ofert-2.webp" alt=""/>
            </div>
            <div className="ofert-txt">
                <h3>Producto 2</h3>
                <a href="#" className="btn-2">Informacion</a>
            </div>
        </div>

        <div className="ofert-1">
            <div className="ofert-img">
                <img src="imagenes/ofert-3.webp" alt=""/>
            </div>
            <div className="ofert-txt">
                <h3>Producto 3</h3>
                <a href="#" className="btn-2">Informacion</a>
            </div>
        </div>
    </section>

    <main className="products" id="lista-1">
        <h2>Productos</h2>

        <div className="product-content">

            <div className="product">
                <img src="imagenes/1.webp" alt=""/>
                <div className="product-txt">
                    <h3>Elisyum</h3>
                    <p>calidad premium</p>
                    <p className="precio">$200</p>
                    <a href="#" className="agregar-carrito btn-2" data-id="1">agregar al carrito</a>
                </div>
            </div>
            <div className="product">
                <img src="imagenes/2.webp" alt=""/>
                <div className="product-txt">
                    <h3>Elisyum</h3>
                    <p>calidad premium</p>
                    <p className="precio">$200</p>
                    <a href="#" className="agregar-carrito btn-2" data-id="2">agregar al carrito</a>
                </div>
            </div>
            <div className="product">
                <img src="imagenes/3.webp" alt=""/>
                <div className="product-txt">
                    <h3>Elisyum</h3>
                    <p>calidad premium</p>
                    <p className="precio">$200</p>
                    <a href="#" className="agregar-carrito btn-2" data-id="3">agregar al carrito</a>
                </div>
            </div>
            <div className="product">
                <img src="imagenes/4.webp" alt=""/>
                <div className="product-txt">
                    <h3>Elisyum</h3>
                    <p>calidad premium</p>
                    <p className="precio">$200</p>
                    <a href="#" className="agregar-carrito btn-2" data-id="4">agregar al carrito</a>
                </div>
            </div>
            <div className="product">
                <img src="imagenes/5.webp" alt=""/>
                <div className="product-txt">
                    <h3>Elisyum</h3>
                    <p>calidad premium</p>
                    <p className="precio">$200</p>
                    <a href="#" className="agregar-carrito btn-2" data-id="5">agregar al carrito</a>
                </div>
            </div>
            <div className="product">
                <img src="imagenes/6.webp" alt=""/>
                <div className="product-txt">
                    <h3>Elisyum</h3>
                    <p>calidad premium</p>
                    <p className="precio">$200</p>
                    <a href="#" className="agregar-carrito btn-2" data-id="6">agregar al carrito</a>
                </div>
            </div>

        </div>
    </main>

    <section className="iconos">

        <div className="icon-1">
            <div className="icon-img">
                <img src="imagenes/i1.png" alt=""/>
            </div>
            <div className="icon-txt">
                <h3>Hola como estas</h3>
                <p>xjnjxnsdbcjdxjxjsnxjsdnxsjcsjdcnsjc</p>
            </div>
        </div>
        <div className="icon-1">
            <div className="icon-img">
                <img src="imagenes/i2.png" alt=""/>
            </div>
            <div className="icon-txt">
                <h3>Hola como estas</h3>
                <p>xjnjxnsdbcjdxjxjsnxjsdnxsjcsjdcnsjc</p>
            </div>
        </div>
        <div className="icon-1">
            <div className="icon-img">
                <img src="imagenes/i3.png" alt=""/>
            </div>
            <div className="icon-txt">
                <h3>Hola como estas</h3>
                <p>xjnjxnsdbcjdxjxjsnxjsdnxsjcsjdcnsjc</p>
            </div>
        </div>

    </section>

    <section className="blog">
        <div className="blog-1">
            <img src="imagenes/servicio.jpg" alt=""/>
            <h3>Blog 1</h3>
            <p>bcbhdcbc
                jbcbcusbcdsbcd
                csbcsgcscidscjkschcihsch
                jdbcgcyuscsdc
            </p>
        </div>

        <div className="blog-1">
            <img src="imagenes/producto.jpg" alt=""/>
            <h3>Blog 1</h3>
            <p>bcbhdcbc
                jbcbcusbcdsbcd
                csbcsgcscidscjkschcihsch
                jdbcgcyuscsdc
            </p>
        </div>

        <div className="blog-1">
            <img src="imagenes/calidad.jpg" alt=""/>
            <h3>Blog 1</h3>
            <p>bcbhdcbc
                jbcbcusbcdsbcd
                csbcsgcscidscjkschcihsch
                jdbcgcyuscsdc
            </p>
        </div>
    </section>

    <footer>
        <div className="footer-left">
            <img src="imagenes/logo.jpg" alt="Icono de la página"/>
            <a href="https://www.facebook.com"><img src="imagenes/facebook.png" alt="Facebook"/></a>
            <a href="https://www.twitter.com"><img src="imagenes/instagram.png" alt="Twitter"/></a>
            <a href="https://www.instagram.com"><img src="imagenes/signo-de-twitter.png" alt="Instagram"/></a>
        </div>
        <div className="footer-right">
            <div className="footer-column">
                <h4>Condiciones de uso</h4>
            </div>
            <div className="footer-column">
                <h4>Políticas de privacidad</h4>
            </div>
            <div className="footer-column">
                <h4>Configuración de privacidad</h4>
            </div>
        </div>
    </footer>
    
    </div>

  )
}

export default Inicio