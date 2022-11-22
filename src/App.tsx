import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Header from './components/header';
import MissaoVisaoValores from './pages/missao-visao-valores';
import Footer from './components/footer';
import PageTitle from './components/pageTitle';
import PageNotFound from './pages/PageNotFound';
import SuporteRemoto from './pages/suporte-remoto';

export default () => {
    return (
        <div>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<PageTitle title='Home' page={<Home />} />} />
                    <Route
                        path='/missao-visao-valores'
                        element={
                            <PageTitle
                                title='Missão, Visão e Valores'
                                page={<MissaoVisaoValores />}
                            />
                        }
                    />
                    <Route
                        path='/suporte-remoto'
                        element={<PageTitle title='Suporte Remoto' page={<SuporteRemoto />} />}
                    />
                    <Route path='*' element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
};
