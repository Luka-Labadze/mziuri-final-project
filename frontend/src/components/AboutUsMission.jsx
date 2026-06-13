import "react";
import { useTranslation } from "react-i18next";

function AboutUsMission() {
  const { t } = useTranslation();
  return (
    <div className="aboutUsMission">
      <div className="AUMWrapper">
        <div className="AUMTextSection">
          <ul className="AUMTextSectionWrapper">
            <li className="AUMTextSectionItems">
              <h3 className="AUMTitle">{t("About-our-mission")}</h3>
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
              <button className="AUMBtn">{t("Read-more")}</button>
            </li>
          </ul>
        </div>
        <div className="skillContainer">
          <ul className="skillContainerWrapper">
            <li className="skillItems">
              <span className="skillLabel">{t("UI-UX-design")}</span>
              <div className="progressBar">
                <div className="progressFill" style={{ width: "85%" }}>
                  <span className="percentage">85%</span>
                </div>
              </div>
            </li>
            <li className="skillItems">
              <span className="skillLabel">{t("Web-design")}</span>
              <div className="progressBar">
                <div className="progressFill" style={{ width: "95%" }}>
                  <span className="percentage">70%</span>
                </div>
              </div>
            </li>
            <li className="skillItems">
              <span className="skillLabel">{t("App-design")}</span>
              <div className="progressBar">
                <div className="progressFill" style={{ width: "75%" }}>
                  <span className="percentage">75%</span>
                </div>
              </div>
            </li>
            <li className="skillItems">
              <span className="skillLabel">{t("Sketch-design")}</span>
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
