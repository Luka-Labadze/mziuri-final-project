import "react";
import { useTranslation } from "react-i18next";

function Description() {
  const { t } = useTranslation();

  return (
    <div className="description">
      <div className="upperSide">
        <ol className="upperSideList">
          <li id="descriptionTitle">{t("Description")}</li>
          <li>{t("Reviews")}</li>
          <li>{t("Comments")}</li>
        </ol>
      </div>

      <div className="bottomSide">
        <p>{t("Description-text-1")}</p>
        <br />
        <p>{t("Description-text-2")}</p>
      </div>
    </div>
  );
}

export default Description;