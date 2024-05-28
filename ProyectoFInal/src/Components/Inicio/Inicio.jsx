import './Inicio.css'
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
import { FaCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from 'react-icons/fa';
import Cart, {agregarProducto } from '../Carrito/Cart';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../Imagenes/logo.jpg';
import Descuento from '../Imagenes/descuento.jpg'
import Oferta1 from '../Imagenes/ofert-1.webp'
import Oferta2 from '../Imagenes/ofert-2.webp'
import Oferta3 from '../Imagenes/ofert-3.webp'
import Prod1 from '../Imagenes/1.webp'
import Prod2 from '../Imagenes/2.webp'
import Prod3 from '../Imagenes/3.webp'
import Prod4 from '../Imagenes/4.webp'
import Prod5 from '../Imagenes/5.webp'
import Prod6 from '../Imagenes/6.webp'
import Icon1 from '../Imagenes/i1.png'
import Icon2 from '../Imagenes/i2.png'
import Icon3 from '../Imagenes/i3.png'
import Servicio from '../Imagenes/servicio.jpg'
import Producto from '../Imagenes/producto.jpg'
import Calidad from '../Imagenes/calidad.jpg'
import Facebook from '../Imagenes/facebook.png'
import Instagram from '../Imagenes/instagram.png'
import X from '../Imagenes/signo-de-twitter.png'
import { UserContext } from '../../Contexto';
import Swal from 'sweetalert2';
import { MdOutlineInventory } from "react-icons/md";


const Inicio = () => {
    const { user, logout } = useContext(UserContext);
    const [showLogout, setShowLogout] = useState(false);
    const navigate = useNavigate();

    const BotonAgregarCarrito = (event) => {
        const productContainer = event.target.closest('.product-txt');

        // Obtener el ID del producto desde el atributo 'data-id' del botón
        const productId = event.target.getAttribute('data-id');

        // Obtener el nombre del producto (texto dentro del h3)
        const productName = productContainer.querySelector('h3').textContent;

        // Obtener el precio del producto (texto dentro de p.precio)
        const productPriceText = productContainer.querySelector('p.precio').textContent;

        // Convertir el precio a un número y realizar cualquier manipulación necesaria
        const productPrice = parseFloat(productPriceText.replace(/\D/g, '')); // Eliminar cualquier carácter que no sea un número

        // AgregarCart(productId, productName, productPrice);

        
        agregarProducto(productId);
    };
    const handleAgregarCarrito = (event) => {
        if (user) {
            BotonAgregarCarrito(event);
           
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Inicia sesión.',
            });
        }
    };
    const handleCarrito = (event) => {
        if (user) {
            navigate('/carrito');
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Inicia sesión.',
            });
        }
    };



    const [mostrarTextoProducto1, setMostrarTextoProducto1] = useState(false);
    const [mostrarTextoProducto2, setMostrarTextoProducto2] = useState(false);
    const [mostrarTextoProducto3, setMostrarTextoProducto3] = useState(false);

    // Funciones para alternar la visibilidad del texto para cada producto
    const toggleTextoProducto1 = () => {
        setMostrarTextoProducto1(!mostrarTextoProducto1);
    };

    const toggleTextoProducto2 = () => {
        setMostrarTextoProducto2(!mostrarTextoProducto2);
    };

    const toggleTextoProducto3 = () => {
        setMostrarTextoProducto3(!mostrarTextoProducto3);
    };
    return (
        <div >
            <header className="header" id="header">
                <div className="menu-container">
                    <label htmlFor="menu">
                        <Link to="/"><img src={Logo} alt="Logo de la pagina " className="logo" /></Link>
                    </label>
                    <nav className="navbar">
                        <ul>
                            <li><a href="/">Inicio</a></li>
                            <li><a href="#footer">Nosotros</a></li>
                            <li><a href="#productos">Productos</a></li>
                            <li><a href="#Oferta">Ofertas</a></li>
                        </ul>
                    </nav>
                    <div className="icons">
                        <div>
                            {user && user.id_usuario === 1 && (
                                <div>
                                    <Link to="/inventario"><MdOutlineInventory className='logo'/></Link>
                                    
                                </div>
                            )}
                        </div>

                        <Link to="/login"><FaCircleUser className='logo' /></Link>
                        <div>
                            {user ? (
                                <div
                                    onMouseEnter={() => setShowLogout(true)}
                                    onMouseLeave={() => setShowLogout(false)}
                                >
                                    <h2 className='inicio-sesion'>Bienvenido, {user.nombre}</h2>
                                    {showLogout && (
                                        <button className='agregar-carrito btn-2' onClick={logout}>Cerrar sesión</button>
                                    )}
                                </div>

                            ) : (
                                <h2 className='inicio-sesion'>Inicio de sesión</h2>
                            )}
                        </div>
                        <FaShoppingCart className='logo' onClick={handleCarrito} />
                    </div>
                </div>

                <marquee><div className="header-content">
                    <div className="header-img">
                        <img src={Descuento} alt="desc" />
                    </div>
                    <div className="header-txt">
                        <h1>Ofertas especiales</h1>
                        <p>Estrena las mejores prendas</p>
                    </div>
                </div></marquee>
            </header>
            <section className="ofert" id="Oferta">
                <div className="ofert-1">
                    <div className="ofert-img">
                        <img src={Oferta1} alt="oferta1" />
                    </div>
                    <div className="ofert-txt">
                        <h3>Buzo</h3>
                        <button className="btn-2" onClick={toggleTextoProducto1}>Información</button>
                        {mostrarTextoProducto1 && <p>Saco de franela con motivo delante, mangas raglán y cuello redondo. Ribete acanalado en cuello, puños y bajo..</p>}
                    </div>
                </div>

                <div className="ofert-1">
                    <div className="ofert-img">
                        <img src={Oferta2} alt="oferta2" />
                    </div>
                    <div className="ofert-txt">
                        <h3>Pantalon</h3>
                        <button className="btn-2" onClick={toggleTextoProducto2}>Información</button>
                        {mostrarTextoProducto2 && <p>Pantalón de traje en lino vaporoso y piernas con línea de quiebre. Modelo con cierre de cremallera con botón, bolsillos laterales y bolsillos traseros de ribete con botón.</p>}
                    </div>
                </div>


                <div className="ofert-1">
                    <div className="ofert-img">
                        <img src={Oferta3} alt="oferta3" />
                    </div>
                    <div className="ofert-txt">
                        <h3>Camiseta</h3>
                        <button className="btn-2" onClick={toggleTextoProducto3}>Información</button>
                        {mostrarTextoProducto3 && <p>Camisa de mangas cortas en popelina de algodón con cuello resort. Modelo de tapeta lisa, bolsillo en el pecho y canesú en la espalda.</p>}
                    </div>
                </div>

            </section>

            <main className="products" id="productos">
                <h2>Productos</h2>

                <div className="product-content">

                    <div className="product">
                        <img src={Prod1} alt="prod1" />
                        <div className="product-txt" >
                            <h3>Jean</h3>
                            <p>Baggy low jeans</p>
                            <p className="precio">$120000</p>
                            <button type="button" className="agregar-carrito btn-2" data-id="1" onClick={handleAgregarCarrito}>Agregar al carrito </button>
                        </div>
                    </div>
                    <div className="product">
                        <img src={Prod2} alt="prod2" />
                        <div className="product-txt">
                            <h3>Hoddie</h3>
                            <p>Oversize</p>
                            <p className="precio">$90000</p>
                            <button type="button" className="agregar-carrito btn-2" data-id="2" onClick={handleAgregarCarrito}>Agregar al carrito </button>
                        </div>
                    </div>
                    <div className="product">
                        <img src={Prod3} alt="prod3" />
                        <div className="product-txt">
                            <h3>Falda</h3>
                            <p>Mini falda con fruncidos</p>
                            <p className="precio">$85000</p>
                            <button type="button" className="agregar-carrito btn-2" data-id="3" onClick={handleAgregarCarrito}>Agregar al carrito </button>
                        </div>
                    </div>
                    <div className="product">
                        <img src={Prod4} alt="prod4" />
                        <div className="product-txt">
                            <h3>Jean</h3>
                            <p>Flared High Jeans</p>
                            <p className="precio">$130000</p>
                            <button type="button" className="agregar-carrito btn-2" data-id="4" onClick={handleAgregarCarrito}>Agregar al carrito </button>
                        </div>
                    </div>
                    <div className="product">
                        <img src={Prod5} alt="prod5" />
                        <div className="product-txt">
                            <h3>Vestido</h3>
                            <p>Vestido ajustado acanalado</p>
                            <p className="precio">$115000</p>
                            <button type="button" className="agregar-carrito btn-2" data-id="5" onClick={handleAgregarCarrito}>Agregar al carrito </button>
                        </div>
                    </div>
                    <div className="product">
                        <img src={Prod6} alt="prod6" />
                        <div className="product-txt">
                            <h3>Camiseta</h3>
                            <p>Camiseta con estilo estampado</p>
                            <p className="precio">$50000</p>
                            <button type="button" className="agregar-carrito btn-2" data-id="6" onClick={handleAgregarCarrito}>Agregar al carrito </button>
                        </div>
                    </div>

                </div>
            </main>

            <section className="iconos">

                <div className="icon-1">
                    <div className="icon-img">
                        <img src={Icon1} alt="icono1" />
                    </div>
                    <div className="icon-txt">
                        <h3>Tela</h3>
                        <p>Tela de excelente calidad y amigable con el ambiente</p>
                    </div>
                </div>
                <div className="icon-1">
                    <div className="icon-img">
                        <img src={Icon2} alt="icono2" />
                    </div>
                    <div className="icon-txt">
                        <h3>Tallas</h3>
                        <p>Ajustable a cualquier tipo de cuerpo</p>
                    </div>
                </div>
                <div className="icon-1">
                    <div className="icon-img">
                        <img src={Icon3} alt="icono3" />
                    </div>
                    <div className="icon-txt">
                        <h3>Variedad</h3>
                        <p>Gran variedad de productos y costos</p>
                    </div>
                </div>

            </section>

            <section className="blog">
                <div className="blog-1">
                    <img src={Servicio} alt="serv" />
                    <h3>Servicio</h3>
                    <p>Contamos con una excente atencion al cliente, soporte a preguntas y agilidad a sugerencias
                    </p>
                </div>

                <div className="blog-1">
                    <img src={Producto} alt="producto" />
                    <h3>Productos</h3>
                    <p>Variedad de productos, prendas, accesorios, acomodados a tus gustos y precios
                    </p>
                </div>

                <div className="blog-1">
                    <img src={Calidad} alt="calidad" />
                    <h3>Calidad</h3>
                    <p>Contamos con los mejores precios para la mejor calidad
                    </p>
                </div>
            </section>

            <footer id="footer">
                <div className="footer-left">
                    <a href="#header"><img src={Logo} alt="Icono de la página" /></a>
                    <a href="https://www.facebook.com"><img src={Facebook} alt="Facebook" /></a>
                    <a href="https://www.twitter.com"><img src={Instagram} alt="Twitter" /></a>
                    <a href="https://www.instagram.com"><img src={X} alt="Instagram" /></a>
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