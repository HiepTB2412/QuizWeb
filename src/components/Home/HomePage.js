import videoHomePage from '../../assets/video-homepage.mp4'

const HomePage = () => {
    return (
        <div className="homepage-container">
            <video autoPlay muted loop>
                <source
                    src={videoHomePage}
                    type='video/mp4' />
            </video>

            <div className='homepage-content'>
                <div className='title1'>Make forms worth filling out</div>
                <div className='title2'>Get more data—like signups, feedback, and anything else—with forms designed to be refreshingly different.</div>
                <div className='title3'><button>Get started—it's free</button></div>
            </div>
        </div>
    )
}

export default HomePage