import videoHomePage from '../../assets/video/video-homepage.mp4'

const Homepage = (props) => {
    return (
        <div className='homepage-container'>
            <video autoPlay muted loop>
                <source src={videoHomePage} type='video/mp4' />
            </video>
        </div>
    );
};

export default Homepage;