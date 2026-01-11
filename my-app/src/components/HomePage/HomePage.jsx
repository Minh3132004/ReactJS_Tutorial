import VideoHomePage from '../../assets/video-homepage.mp4';

function HomePage() {
    return (
        <div className="homepage-container">
            <div className="homepage-content">
                <span className="content-label">DATA COLLECTION</span>
                <h1 className="content-title">Get 3.5x more data with a form expert</h1>
                <p className="content-description">
                    Backed by over a decade of experience, Typeform AI helps you build expertly-designed, best-practice forms proven to get more responses.
                </p>
                <button className="content-btn">See plans</button>
            </div>
            <div className="homepage-video-wrapper">
                <video autoPlay loop muted className="homepage-video">
                    <source type="video/mp4" src={VideoHomePage}/>
                </video>
            </div>
        </div>
    );
}

export default HomePage;