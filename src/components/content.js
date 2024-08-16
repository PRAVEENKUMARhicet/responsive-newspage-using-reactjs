import './content.css';

function Content() {
    return (
        <div>
            <h1 id="editorspick">Editor's Pick</h1>
        <div className="content-container">
            <div className="card" style={{ width: "18rem" }}>
                <img src="news1.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">China-based inventors lead on global GenAI patents: UN report</p>
                </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
                <img src="news2.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">‘Trust and respect’ feeds interfaith rice growing success in the Philippines</p>
                </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
                <img src="news3.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">Bangladesh at a crossroad, says senior UN official</p>
                </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
                <img src="news4.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">Historic first medal for Refugee Olympic Team</p>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Content;
