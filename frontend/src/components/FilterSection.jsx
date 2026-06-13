import "react";
import { useTranslation } from "react-i18next";

function FilterSection() {
  const { t } = useTranslation();

  return (
    <div className="filter">
      <div className="availability">
        <h2 className="availabilityTitle">{t("Availability")}</h2>
        <ul className="availability-olst">
          <ol>
            <input type="checkbox" id="stock" />
            <label htmlFor="stock">{t("In-Stock")} (41)</label>
          </ol>
          <ol>
            <input type="checkbox" id="outOfStock" />
            <label htmlFor="outOfStock">{t("Out-of-stock")} (5)</label>
          </ol>
        </ul>
      </div>

      <div className="price">
        <h2 className="priceTitle">{t("Price")}</h2>

        <div className="bottomPrice">
          <div className="leftSide">
            <label className="priceUnits">$</label>
            <input type="number" placeholder="0.00" className="priceInput" />
            <label className="priceUnits">{t("From")}</label>
          </div>

          <div className="rightSide">
            <label className="priceUnits">$</label>
            <input type="number" placeholder="150.00" className="priceInput" />
            <label className="priceUnits">{t("To")}</label>
          </div>
        </div>

        <div className="productType">
          <h2 className="productTypeTitle">{t("Product-Type")}</h2>

          <label className="selected">{t("Selected-count", { 0: 0 })}</label>

          <ul className="productTypeList">
            <ol>
              <input type="checkbox" id="assorted" />
              <label htmlFor="assorted">{t("assorted")} (11)</label>
            </ol>

            <ol>
              <input type="checkbox" id="box" />
              <label htmlFor="box">{t("box")} (2)</label>
            </ol>

            <ol>
              <input type="checkbox" id="chair" />
              <label htmlFor="chair">{t("chair")} (3)</label>
            </ol>

            <ol>
              <input type="checkbox" id="pant" />
              <label htmlFor="pant">{t("pant")} (4)</label>
            </ol>

            <ol>
              <input type="checkbox" id="shirt" />
              <label htmlFor="shirt">{t("shirt")} (5)</label>
            </ol>

            <ol>
              <input type="checkbox" id="table" />
              <label htmlFor="table">{t("table")} (6)</label>
            </ol>

            <ol>
              <input type="checkbox" id="tableLamp" />
              <label htmlFor="tableLamp">{t("table-lamp")} (7)</label>
            </ol>

            <ol>
              <input type="checkbox" id="watch" />
              <label htmlFor="watch">{t("watch")} (8)</label>
            </ol>
          </ul>
        </div>
      </div>

      <div className="brand">
        <h2 className="brandTitle">{t("Brand")}</h2>

        <label className="selected">{t("Selected-count", { 0: 0 })}</label>

        <ul className="brandList">
          <ol>
            <input type="checkbox" id="brothers" />
            <label htmlFor="brothers">{t("brothers")} (1)</label>
          </ol>

          <ol>
            <input type="checkbox" id="hatil" />
            <label htmlFor="hatil">{t("hatil")} (2)</label>
          </ol>

          <ol>
            <input type="checkbox" id="navana" />
            <label htmlFor="navana">{t("navana")} (3)</label>
          </ol>

          <ol>
            <input type="checkbox" id="nike" />
            <label htmlFor="nike">{t("nike")} (4)</label>
          </ol>

          <ol>
            <input type="checkbox" id="otobi" />
            <label htmlFor="otobi">{t("otobi")} (5)</label>
          </ol>

          <ol>
            <input type="checkbox" id="raggery" />
            <label htmlFor="raggery">{t("raggery")} (6)</label>
          </ol>

          <ol>
            <input type="checkbox" id="rokomari" />
            <label htmlFor="rokomari">{t("rokomari")} (7)</label>
          </ol>
        </ul>
      </div>

      <div className="color">
        <h2 className="colorTitle">{t("Color")}</h2>

        <label className="selected">{t("Selected-count", { 0: 0 })}</label>

        <ul className="sidebar-style">
          <ol>
            <input type="checkbox" id="Filter-color-black" />
            <label htmlFor="Filter-color-black">{t("black")} (11)</label>
          </ol>

          <ol>
            <input type="checkbox" id="Filter-color-blue" />
            <label htmlFor="Filter-color-blue">{t("blue")} (10)</label>
          </ol>

          <ol>
            <input type="checkbox" id="Filter-color-brown" />
            <label htmlFor="Filter-color-brown">{t("brown")} (8)</label>
          </ol>

          <ol>
            <input type="checkbox" id="Filter-color-cyan" />
            <label htmlFor="Filter-color-cyan">{t("cyan")} (7)</label>
          </ol>

          <ol>
            <input type="checkbox" id="Filter-color-gold" />
            <label htmlFor="Filter-color-gold">{t("gold")} (9)</label>
          </ol>

          <ol>
            <input type="checkbox" id="Filter-color-gray" />
            <label htmlFor="Filter-color-gray">{t("gray")} (13)</label>
          </ol>

          <ol>
            <input type="checkbox" id="Filter-color-green" />
            <label htmlFor="Filter-color-green">{t("green")} (8)</label>
          </ol>

          <ol>
            <input type="checkbox" id="Filter-color-magenta" />
            <label htmlFor="Filter-color-magenta">{t("magenta")} (11)</label>
          </ol>

          <ol>
            <input type="checkbox" id="Filter-color-orange" />
            <label htmlFor="Filter-color-orange">{t("orange")} (10)</label>
          </ol>

          <ol>
            <input type="checkbox" id="Filter-color-pink" />
            <label htmlFor="Filter-color-pink">{t("pink")} (7)</label>
          </ol>

          <ol>
            <input type="checkbox" id="Filter-color-purple" />
            <label htmlFor="Filter-color-purple">{t("purple")} (7)</label>
          </ol>

          <ol>
            <input type="checkbox" id="Filter-color-red" />
            <label htmlFor="Filter-color-red">{t("red")} (8)</label>
          </ol>

          <ol>
            <input type="checkbox" id="Filter-color-violet" />
            <label htmlFor="Filter-color-violet">{t("violet")} (7)</label>
          </ol>

          <ol>
            <input type="checkbox" id="Filter-color-white" />
            <label htmlFor="Filter-color-white">{t("white")} (12)</label>
          </ol>

          <ol>
            <input type="checkbox" id="Filter-color-yellow" />
            <label htmlFor="Filter-color-yellow">{t("yellow")} (11)</label>
          </ol>
        </ul>
      </div>

      <div className="material">
        <h2 className="materialTitle">{t("Material")}</h2>

        <label className="selected">{t("Selected-count", { 0: 0 })}</label>

        <ul>
          <ol>
            <input type="checkbox" id="glass" />
            <label htmlFor="glass">{t("glass")} (16)</label>
          </ol>
          <ol>
            <input type="checkbox" id="partex" />
            <label htmlFor="partex">{t("partex")} (18)</label>
          </ol>
          <ol>
            <input type="checkbox" id="steel" />
            <label htmlFor="steel">{t("steel")} (4)</label>
          </ol>
          <ol>
            <input type="checkbox" id="wood" />
            <label htmlFor="wood">{t("wood")} (20)</label>
          </ol>
        </ul>
      </div>

      <div className="size">
        <h2 className="sizeTitle">{t("Size")}</h2>
        <label className="selected">{0} selected</label>

        <ul>
          <ol>
            <input type="checkbox" id="xs" />
            <label htmlFor="xs">xs (21)</label>
          </ol>
          <ol>
            <input type="checkbox" id="m" />
            <label htmlFor="m">M (13)</label>
          </ol>
          <ol>
            <input type="checkbox" id="L" />
            <label htmlFor="L">L (13)</label>
          </ol>
          <ol>
            <input type="checkbox" id="xl" />
            <label htmlFor="xl">xl (21)</label>
          </ol>
          <ol>
            <input type="checkbox" id="ml" />
            <label htmlFor="ml">ml (21)</label>
          </ol>
          <ol>
            <input type="checkbox" id="x" />
            <label htmlFor="x">X (13)</label>
          </ol>
        </ul>
      </div>
    </div>
  );
}

export default FilterSection;
