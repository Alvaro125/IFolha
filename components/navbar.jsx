import Head from 'next/head'
import { faSearch, faBars, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Nav = () => {
    return(
        <>
        <div class="wrapper">
        <nav>
          <input type="checkbox" id="show-search"/>
          <input type="checkbox" id="show-menu"/>
          <label for="show-menu" class="menu-icon"><FontAwesomeIcon icon={faBars}/></label>
          <div class="content">
          <div class="logo"><a href="#"><img src="/icone.png" alt="logo IFolha" height="100%"/></a></div>
            <ul class="links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Sobre</a></li>
              <li>
                <a href="#" class="desktop-link">Categorias</a>
                <input type="checkbox" id="show-features"/>
                <label for="show-features">Features</label>
                <ul>
                  <li><a href="#">Atualidades</a></li>
                  <li><a href="#">Educação</a></li>
                  <li><a href="#">Esportes</a></li>
                  <li><a href="#">Games</a></li>
                  <li><a href="#">IFofoca</a></li>
                  <li><a href="#">Politica</a></li>
                  <li><a href="#">Arte e Cultura</a></li>
                </ul>
              </li>
              <li>
                <a href="#" class="desktop-link">Serviços</a>
                <input type="checkbox" id="show-services"/>
                <label for="show-services">Serviços</label>
                <ul>
                  <li><a href="#">Clubes</a></li>
                  <li><a href="#">Canal</a></li>
                  <li><a href="#">IFMS</a></li>
                  <li>
                    <a href="#" class="desktop-link">Grêmio</a>
                    <input type="checkbox" id="show-items"/>
                    <label for="show-items">Grêmio</label>
                    <ul>
                      <li><a href="#">Diretorias</a></li>
                      <li><a href="#">Membros</a></li>
                      <li><a href="#">Projetos</a></li>
                      <li><a href="#">Caixa</a></li>
                      <li><a href="#">Transparência</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li><a href="#">Feedback</a></li>
            </ul>
          </div>
          <label for="show-search" class="search-icon"><FontAwesomeIcon icon={faSearch}/></label>
          <form action="#" class="search-box">
            <input type="text" placeholder="Buscar..." required/>
            <button type="submit" class="go-icon"><FontAwesomeIcon icon={faLongArrowAltRight} /></button>
          </form>
        </nav>
      </div>
      </>
    )
}
export default Nav;