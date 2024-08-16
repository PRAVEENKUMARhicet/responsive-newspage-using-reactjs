import './newsgrid.css';

function Newsgrid(){
    return(
        <div id="newsgrid">
            <div className="row1">
                <div class="topstories">
                    <h1>Top Stories</h1>
                </div>
                <div className="headnewsgrid">
                    <img src="headnews.jpg" alt="" />
                    <h4>In America's 'overdose capital', where former addicts are helping people get sober</h4>
                </div>
                <div className="secondgrid">
                    <img src="ukaine.jpg" alt="" />
                    <h4>Captured rifles and roubles: Grinning Ukrainian soldiers show 'trophies' from Kursk incursion</h4>
                </div>
            </div>
            <div className="content-container">
            <div className="card" style={{ width: "18rem" }}>
                <img src="uk.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">Girl stabbed in Leicester Square was Australian tourist, Ministry says</p>
                </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
                <img src="taylorshift.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">Taylor Swift return to UK for first live shows since foiled terror plot</p>
                </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
                <img src="nasa.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">NASA says stuck astronauts may have to remain in space until February</p>
                </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
                <img src="socialmedia.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">Social media platforms failing to remove suicide and self-harm content-study</p>
                </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
                <img src="lyamal.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">Father of Spain's teenage star Lamine Yamal 'stabbed multiple times'</p>
                </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
                <img src="bank.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">Bankrupt Birmingham council to sell off athletes' village at over &euro;300M loss</p>
                </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
                <img src="frontpage.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">Thursday's national newspaper front pags</p>
                </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
                <img src="iran.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">Iran's president tells Starmer retaliation against Israel is a rigth in rare phone call</p>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Newsgrid;