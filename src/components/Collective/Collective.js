import Specialists from './Specialists/Specialists';

import collective from '../../assets/Collective/сollective.png';

const Collective = () => {
    const scrollToTop = (e,element) => {
        e.preventDefault;
        element.scrollIntoView();
    }


    return(
        <section className="collective">
            <div className="collective_container">
                <div className="collective_title">
                    <h1 className="collective_title-text">Коллектив</h1>
                    <div className="collective_subtitles">
                        <h2 
                            className="collective_subtitle"
                            onClick={(e) => scrollToTop(e,document.querySelector('.collective_description-title'))}    
                        >О НАС</h2>
                        <h2 
                            className="collective_subtitle"
                            onClick={(e) => scrollToTop(e,document.querySelector('.collective_specialists'))}    
                        >СПЕЦИАЛИСТЫ</h2>
                    </div>
                </div>
                <div className="collective_content">
                    <div className="collective_content-text">
                        <img src={collective} alt="" />
                        <div className="collective_description">
                            <h2 className="collective_description-title">О нас</h2>
                            <div className="collective_description-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
                        </div>
                    </div>
                    <Specialists />
                </div>
            </div>
        </section>
    )
}

export default Collective