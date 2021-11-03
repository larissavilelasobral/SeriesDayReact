import React from 'react'
import { Footer } from '../../components/Footer/Footer';
import Header from '../../components/Header/Header'
import logoMini from '../../img/block.png';
import './home.scss'

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="main">
        <section className="home-page">
          <div className="box1 services">
            <img src={logoMini} className="mini-logo-img" alt="logo"></img>
            <h3 className="box-title">Interação</h3>
            <p className="box-txt">Processo de interação (atrativa ou repulsiva) de partículas elementares carregadas, que resulta da atuação de forças.</p>
          </div>
          <div className="box2 services">
            <img src={logoMini} className="mini-logo-img" alt="logo"></img>
            <h3 className="box-title">Engajamento</h3>
            <p className="box-txt">Relação de uma ou mais pessoas com uma causa. Decerto, você já deve ter encontrado essa palavra em contextos empresariais.</p>
          </div>
          <div className="box3 services">
            <img src={logoMini} className="mini-logo-img" alt="logo"></img>
            <h3 className="box-title">Pluralidade</h3>
            <p className="box-txt">Condição do que existe em grande quantidade; fato de não existir ou ser único, de ser diverso ou diferente.</p>
          </div>
          <div className="box4 services">
            <img src={logoMini} className="mini-logo-img" alt="logo"></img>
            <h3 className="box-title">Pluralidade</h3>
            <p className="box-txt">Condição do que existe em grande quantidade; fato de não existir ou ser único, de ser diverso ou diferente.</p>
          </div>
        </section>
        <article className="article">
          <h2 className="title-article">Proposta do Projeto e Planejamento no GitHub</h2>
          <p className="part-1-article">O SeriesDay é uma rede social para todos os apaixonados por séries e foi desenvolvida para que eles possam compartilhar resenhas/reviews dos seriados assistidos. O seu principal objetivo é promover a interação e comunicação entre usuários que possuem esse interesse em comum. Com essa troca de experiências, o SeriesDay busca ajudá-los a escolher o que assistir entre as milhares de opções dos catálogos dos serviços de streaming.</p>

          <p className="part-2-article" id="anchor">O layout do site baseia-se nos acessórios cinematográficos, o que remete à produção audiovisual das séries. A intenção é apresentar para o público uma aplicação temática, intuitiva e aconchegante que propicie uma ótima experiência de usuário. Para isso, nos pontos de interação do usuário, foram utilizadas cores vivas que mudam de acordo com o seu manuseio, pop-ups de informações e de respostas para guiá-lo na usabilidade do produto.

          O seu design é mobile first também responsivo para tablet e desktop, o que proporciona a versatilidade e adaptabilidade desejada pelos usuários. A sua idealização foi feita a partir de protótipos de baixa e de alta fidelidade que nortearam a construção do site de acordo com as necessidades dos clientes. Nele, é possível criar uma conta de acesso, logar-se com ela, criar, editar, deletar e dar likes em publicações. Além disso, existe uma área editável de perfil, onde o cliente pode alterar sua imagem de exibição.</p>
        </article>
        <Footer />
      </main>
    </>
  )
}

export default HomePage