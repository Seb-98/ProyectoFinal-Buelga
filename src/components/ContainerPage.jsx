import NavBar from './NavBar';
import PageTitle from './PageTitle';
import Footer from './Footer';

const ContainerPage = ({ children }) => {
    return (
        // estilos para ajustar el footer y contenido de la pagina
        <div className="d-flex flex-column min-vh-100">
            <NavBar />
            <PageTitle />

            <div className="flex-fill my-4">
                {children}
            </div>
            
            <Footer />
        </div>
    )
}

export default ContainerPage;