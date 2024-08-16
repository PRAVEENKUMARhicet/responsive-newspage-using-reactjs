import './footer.css';

function Footer(){
    return(
        <div class="foot">
        <div class="footer-lists">
            <div className="resource">
                <h2>RESOURCES</h2>
                <ul>
                    <li>Navigate the News</li>
                    <li>Information for BroadCasters</li>
                    <li>UN System Links</li>
                    <li>Media Alert</li>
                    <li>UN journal</li>
                    <li>Meetings Coverage</li>
                    <li>Audiovisual Library</li>
                </ul>
            </div>
            <div className="spoke">
                <h2>SPOKESPERSON'S OFFICE</h2>
                <ul>
                    <li>Latest Statements</li>
                    <li>Briefing Highlights</li>
                    <li>Briefing Transcripts</li>
                    <li>Notes to Correspondents</li>
                </ul>
            </div>
            <div className="secretary">
                <h2>SECRETARY-GENERAL</h2>
                <ul>
                    <li>All Statements</li>
                    <li>Official Travels</li>
                    <li>Press Encounters</li>
                    <li>SG Twitter</li>
                </ul>
            </div>
            <div className="find">
                <h2>FIND US</h2>
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Youtube</li>
                </ul>
            </div>
        </div>
        <div className="contact">
            <img src="instagram-brands-solid.svg" alt="" />
            <img src="linkedin.png" alt="" />
            <img src="facebook.png" alt="" />
            <img src="twitter-brands-solid.svg" alt="" />
            <h4>This Page was developed by WN &copy;</h4>
        </div>
    </div>
    )
}
export default Footer;