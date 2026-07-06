import "react";
import Grid from "../assets/icons/grid.png";
import { useTranslation } from "react-i18next";

function SortBy({ sortOption, setSortOption }) {
  const { t } = useTranslation();

  return (
    <div className="sortBy">
      <div className="gridView">
        <img src={Grid} alt="grid" className="gridImg" />
        <p style={{ scale: 1.6 }} className="gridImg2">
          ⋮☰
        </p>
      </div>

      <div className="showingProducts">
        <p>{t("Showing-results", { from: 1, to: 15, total: 44 })}</p>
      </div>

      <div className="sorting">
        <p>{t("Sort-by")}</p>

        <select
          name="sorting"
          id="sorting"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="alphabeticallyReverse">
            {t("Alphabetically-Z-A")}
          </option>

          <option value="featured">{t("Featured")}</option>

          <option value="alphabetically">{t("Alphabetically-A-Z")}</option>

          <option value="priceLowToHigh">{t("Price-low-to-high")}</option>

          <option value="priceHighToLow">{t("Price-high-to-low")}</option>
        </select>
      </div>
    </div>
  );
}

export default SortBy;