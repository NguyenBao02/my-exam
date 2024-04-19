import videoHomePage from '../../assets/video/video-homepage.mp4'

const Homepage = (props) => {
    return (
        <div className='homepage-container container'>
            <div className='row'>
                <div className='homepage-video col-lg-6 d-flex'>
                    <video className='container-fluid rounded' autoPlay muted loop>
                        <source src={videoHomePage} type='video/mp4'/>
                    </video>
                </div>
                <div className='homepage-content col-lg-6 d-flex flex-column align-self-center'>
                    <h1 className='homepage-content-title mb-5'>Make forms worth filling out</h1>
                    <p className='homepage-content-text mb-4'>Get more data—like signups, feedback, and anything else—with forms designed to be refreshingly different.</p>
                    <div className='mt-3'>
                        <button className='homepage-content-btn btn btn-dark px-4 p-3'>Get started—it's free</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;