export function footerComponent(el) {
    const footerEl = document.createElement("div");
    footerEl.classList.add("Footer");

    footerEl.innerHTML = `
        <div class="FTop">
            <div class="Contenedor">

                <form id="form" class=" Suscripcion">
                    <div class="Suscripcion-txtSuscribite dN-sm">Suscribite</div>
                    <input class="Suscripcion-email" 
                    name="email" 
                    id="email" 
                    type="email" 
                    placeholder="Tu e-mail"
                    required>
                    <button class="Suscripcion-btn">Suscribite</button>
                </form>

                <div id="F-SuscripcionVal" class="Suscripcion-Resultado dN">
                    <img src="./images/check.svg" alt="suscripcion valida"> 
                    Ya estás suscripto a nuestras ofertas y promociones!
                    <span class="Volver">Volver</span>
                </div>

                <div id="F-SuscripcionError" class="Suscripcion-Resultado dN">
                    <img src="./images/cruz.svg" alt="suscripcion invalida">
                    El email ingresado es invalido <span class="Volver">Volver</span>
                </div>

                <div class="VtaTel">
                    <div class="VtaTel-iconoTel md"></div>

                    <div class="VtaTel-contenedor">

                        <div>
                            <div class="VtaTel-iconoTel sm dN-lg"></div>

                            <div class="VtaTel-txtVtaTel">
                                VENTA TELEFÓNICA
                            </div>
                            
                            <div class="VtaTel-txtNumTel">
                                0810-444-6342
                            </div>
                        </div>

                        <div>
                            <div class="VtaTel-txtAtCliente">
                                AT. AL CLIENTE:
                            </div>

                            <div class="VtaTel-txtHorarios">
                                Lun. a Vie. de <span>9</span> a <span>20 hs</span>
                                / Sáb. de <span>9</span> a <span>18 hs</span>
                            </div>
                        </div>

                        <a href="mailto:atencionalcliente@megatone.net" class="VtaTel-txtEmail">
                                EMAIL: <span>atencionalcliente@megatone.net</span>
                            </a>
                    </div>
                </div>

                <div class="RedesSociales">
                    <a href="https://www.facebook.com/megatone.AR/" target="_blank">
                        <img src="./images/facebook.svg" alt="facebook-icon">
                    </a>
                    <a href="https://www.youtube.com/c/MegatoneNetOficial" target="_blank">
                        <img src="./images/youtube.svg" alt="youtube-icon">
                    </a>
                    <a href="https://twitter.com/bamegatone" target="_blank">
                        <img src="./images/twitter.svg" alt="twitter-icon">
                    </a>
                    <a href="https://www.instagram.com/megatone.ar/" target="_blank">
                        <img src="./images/instagram.svg" alt="instagram-icon">
                    </a>
                    <a href="https://www.megatone.net/Contacto.aspx" target="_blank">
                        <img src="./images/contacto.svg" alt="contacto-icon">
                    </a>
                </div>

            </div>
        </div>
        <!-- Inicio FooterMain - Fmain-->
        <div class="FMain">
            <div class="Contenedor">

                <div class="Lista-seccion">

                    <div class="Lista-titulo">
                        CATEGORIAS
                    </div>

                    <div class="Toggle Lista-fila">
                        <a href=# class="Lista-item">Smart TV</a>
                        <a href=# class="Lista-item">Celulares</a>
                        <a href=# class="Lista-item">Notebooks</a>
                        <a href=# class="Lista-item">Climatización</a>
                        <a href="#" class="Lista-item">Heladeras</a>
                        <a href="#" class="Lista-item">Lavado</a>
                        <a href="#" class="Lista-item">Colchones y Sommiers</a></div>
                </div>

                <div class="Lista-seccion">

                    <div class="Lista-titulo">
                        MARCAS
                    </div>

                    <div class="Toggle Lista-fila">
                        <a href=# class="Lista-item">Motorola</a>
                        <a href=# class="Lista-item">Samsung</a>
                        <a href=# class="Lista-item">LG</a>
                        <a href=# class="Lista-item">Drean</a>
                        <a href=# class="Lista-item">Philips</a>
                    </div>
                </div>

                <div class="Lista-seccion">
                    <div class="Lista-titulo">
                        SERVICIOS
                    </div>

                    <div class="Toggle Lista-fila">
                        <a href=# class="Lista-item">Comprá con Crédito</a>
                        <a href=# class="Lista-item">Área clientes</a>
                        <a href=# class="Lista-item">Estado de Cuenta</a>
                        <a href=# class="Lista-item">Cupón de Cancelación</a>
                        <a href=# class="Lista-item">Catálogo</a>
                        <a href=# class="Lista-item">Cómo pago mis cuotas?</a>
                        <a href=# class="Lista-item">Pedir Turno</a>
                        <a href=# class="Lista-item">Megatone Express</a>
                    </div>
                </div>

                <div class="Lista-seccion">
                    <div class="Lista-titulo">
                        MEGATONE
                    </div>

                    <div class="Toggle Lista-fila">
                        <a href=# class="Lista-item">Sucursales</a>
                        <a href=# class="Lista-item">Trabajá con nosotros</a>
                        <a href=# class="Lista-item">Contacto</a>
                        <a href=# class="Lista-item">Términos y Condiciones</a>
                        <a href=# class="Lista-item">Cambios y Devoluciones</a>
                        <a href=# class="Lista-item">Política de Privacidad</a>
                        <a href=# class="Lista-item">Cyber Monday</a>
                        <a href=# class="Lista-item">Hot Sale</a>
                        <a href=# class="Lista-item">Black Friday</a>
                        <a href=# class="Lista-item">ElectroFest</a></div>
                </div>

                <div class="Lista-seccion">
                    <div class="Lista-titulo">
                       PRODUCTOS
                    </div>

                    <div class="Toggle Lista-fila">
                        <a href=# class="Lista-item">Ofertas del Día de la Madre </a>
                        <a href=# class="Lista-item">Regalos para navidad</a>
                        <a href=# class="Lista-item">Promociones</a>
                        <a href=# class="VtasCorp md"></a>
                    </div>

                    <div class="Ekomi">
                        <div>
                            <a href="#">
                                <img src="./images/distincionCliente.svg" alt="EKomi bronze seal">
                            </a>
                        </div>
                        <div class="Ekomi-stars-white">
                            <div class="Ekomi-stars-yellow"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `;

    el.appendChild(footerEl);

    const form = document.getElementById('form');
    const suscripcionValida = document.getElementById('F-SuscripcionVal');
    const suscripcionError = document.getElementById('F-SuscripcionError');

    function btnSuscripcion() {
        const btnVolver = document.querySelectorAll('.Volver');
        for (const i of btnVolver) {
            i.addEventListener('click', () => {
                suscripcionError.classList.add('dN');
                suscripcionValida.classList.add('dN');
                form.classList.remove('dN');
            });
        }
    }
    btnSuscripcion();


    function validarEmailSuscripcion(formEl) {

        formEl.addEventListener('submit', e => {
            e.preventDefault();

            const email = formEl['email'].value;

            if ((validarEmail(email))) {
                console.log(validarEmail(email));
                emailValido(formEl);
                const emaill = form['email'];
                enviarEmail(e, emaill);
            } else {
                emailInvalido(formEl)
            }
            // if ((email === "") || (!validarEmail(email))) {
            //     emailInvalido(formEl);
            // } else {
            //     console.log(!validarEmail(email));
            //     emailValido(formEl);
            //     const emaill = form['email'];
            //     enviarEmail(e, emaill);
            // }
        });

    }
    validarEmailSuscripcion(form);

    function enviarEmail(e, email) {

        const formData = new FormData(e.target);

        const object = Object.fromEntries(formData.entries());

        const message = `¡
        Bienvenido a Megatones! <br>
        Mail: ${object.email} <br>
        Gracias por suscribirte!
        `;

        fetch("https://apx-api.vercel.app/api/utils/dwf", {
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({
                    to: "stradalucas@hotmail.com",

                    message: message,
                }),
            })
            .then(() => {
                console.log(`
    Mensaje enviado.Gracias por suscribirte!`);
                // Reset email 
                email.value = "";

            })
            .catch(() => {
                console.log("Error al enviar");
            });
    }

    // Funciones auxiliares
    function emailInvalido(formEl) {
        formEl.classList.add('dN');
        suscripcionError.classList.remove('dN');
    }

    function emailValido(formEl) {
        formEl.classList.add('dN');
        suscripcionValida.classList.remove('dN');
    }

    function validarEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    // Funciones auxiliares-Fin

    function desplegableFooter() {
        // const mediaQuery = window.matchMedia('(max-width: 1000px)')
        const secciones = document.querySelectorAll(".FMain .Lista-seccion");
        for (const i of secciones) {
            const desplegable = i.childNodes[3];
            const titulo = i.childNodes[1];
            titulo.addEventListener("click", () => {
                desplegable.classList.toggle("Toggle");
            });
        }
    }
    desplegableFooter();
}