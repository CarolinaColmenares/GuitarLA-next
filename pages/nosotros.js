import Layout from '../components/Layout'
import Image from 'next/image'
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
    return (

        <Layout
            pagina='Nosotros'
        >
            <main className='contenedor'>
                <h2 className='heading'>Nosotros</h2>
                <div className={styles.contenido}>
                        <Image layout='responsive' width={600} height={450} src="/img/nosotros.jpg" 
                        alt="Imagen sobre nosotros" />

                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel efficitur augue. Aenean id varius velit. Donec mollis, velit et elementum ullamcorper, dui nulla facilisis orci, sit amet pretium eros mi vel leo. Nunc varius ornare nunc quis posuere. Vestibulum ligula lacus, mattis non dapibus eu, blandit vitae nulla</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel efficitur augue. Aenean id varius velit. Donec mollis, velit et elementum ullamcorper, dui nulla facilisis orci, sit amet pretium eros mi vel leo. Nunc varius ornare nunc quis posuere. Vestibulum ligula lacus, mattis non dapibus eu, blandit vitae nulla</p>
                   
                    </div>
                </div>
            </main>
        </Layout>
    )
}

export default Nosotros