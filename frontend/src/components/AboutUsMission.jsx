import "react";

function AboutUsMission() {
  return (
    <div className="aboutUsMission">
      <div className="AUMWrapper">
        <div className="AUMTextSection">
          <ul className="AUMTextSectionWrapper">
            <li className="AUMTextSectionItems">
              <h3 className="AUMTitle">ABOUT OUR MISSION</h3>
            </li>
            <li className="AUMTextSectionItems">
              <p className="AUMFirstParagraph">
                Rian must explain to you how all this mistaken idea of
                denouncing pleasure and <br /> praising pain was born and I will
                give you a complete account of the system, and <br /> expound
                the actual teachings of the great explorer of the truth, the
                master-builder of <br /> human happiness. No one rejects,
                dislikes, or avoids pleasure
              </p>
            </li>
            <li className="AUMTextSectionItems">
              <p className="AUMSecondParagraph">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia <br /> sequuntur magni dolores eos qui
                ratione em
              </p>
            </li>
            <li className="AUMTextSectionItems">
              <button className="AUMBtn">READ MORE</button>
            </li>
          </ul>
        </div>
        <div className="skillContainer">
          <ul className="skillContainerWrapper">
            <li className="skillItems">
              <span className="skillLabel">UI & UX DESIGN</span>
              <div className="progressBar">
                <div className="progressFill" style={{ width: "85%" }}>
                  <span className="percentage">85%</span>
                </div>
              </div>
            </li>
            <li className="skillItems">
              <span className="skillLabel">WEB DESIGN</span>
              <div className="progressBar">
                <div className="progressFill" style={{ width: "95%" }}>
                  <span className="percentage">70%</span>
                </div>
              </div>
            </li>
            <li className="skillItems">
              <span className="skillLabel">APP DESIGN</span>
              <div className="progressBar">
                <div className="progressFill" style={{ width: "75%" }}>
                  <span className="percentage">75%</span>
                </div>
              </div>
            </li>
            <li className="skillItems">
              <span className="skillLabel">SKETCH DESIGN</span>
              <div className="progressBar">
                <div className="progressFill" style={{ width: "68%" }}>
                  <span className="percentage">68%</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutUsMission;
