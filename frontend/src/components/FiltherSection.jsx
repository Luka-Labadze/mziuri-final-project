import React from "react";

function FiltherSection() {
  return (
    <div className="filther">
      <div className="availability">
        <h2 className="availabilityTitle">Availability</h2>
        <ul className="availability-olst">
          <ol>
            <input type="checkbox" id="stock" />
            <label htmlFor="stock">In Stock (41)</label>
          </ol>
          <ol>
            <input type="checkbox" id="outOfStock" />
            <label htmlFor="outOfStock">Out of stock (5)</label>
          </ol>
        </ul>
      </div>
      <div className="price">
        <h2 className="priceTitle">Price</h2>
        <div className="bottomPrice">
          <div className="leftSide">
            <label className="priceUnits">$</label>
            <input type="number" placeholder="0.00" className="priceInput" />
            <label className="priceUnits">From</label>
          </div>
          <div className="rightSide">
            <label className="priceUnits">$</label>
            <input type="number" placeholder="150.00" className="priceInput" />
            <label className="priceUnits">To</label>
          </div>
        </div>
        <div className="productType">
          <h2 className="productTypeTitle">Product Type</h2>
          <label className="selected">{0} selected</label>
          <ul className="productTypeList">
            <ol>
              <input type="checkbox" id="assorted" />
              <label htmlFor="assorted">assorted ({11})</label>
            </ol>
            <ol>
              <input type="checkbox" id="box" />
              <label htmlFor="box">box ({2})</label>
            </ol>
            <ol>
              <input type="checkbox" id="chair" />
              <label htmlFor="chair">chair ({3})</label>
            </ol>
            <ol>
              <input type="checkbox" id="pant" />
              <label htmlFor="pant">pant ({4})</label>
            </ol>
            <ol>
              <input type="checkbox" id="shirt" />
              <label htmlFor="shirt">shirt ({5})</label>
            </ol>
            <ol>
              <input type="checkbox" id="table" />
              <label htmlFor="table">table ({6})</label>
            </ol>
            <ol>
              <input type="checkbox" id="tableLamp" />
              <label htmlFor="tableLamp">table-lamp ({7})</label>
            </ol>
            <ol>
              <input type="checkbox" id="watch" />
              <label htmlFor="watch">watch ({8})</label>
            </ol>
          </ul>
        </div>
      </div>
      <div className="brand">
        <h2 className="brandTitle">Brand</h2>
        <label className="selected">{0} selected</label>
        <ul className="brandList">
          <ol>
            <input type="checkbox" id="brothers" />
            <label htmlFor="brothers">brothers ({1})</label>
          </ol>
          <ol>
            <input type="checkbox" id="hatil" />
            <label htmlFor="hatil">hatil ({2})</label>
          </ol>
          <ol>
            <input type="checkbox" id="navana" />
            <label htmlFor="navana">navana ({3})</label>
          </ol>
          <ol>
            <input type="checkbox" id="nike" />
            <label htmlFor="nike">nike ({4})</label>
          </ol>
          <ol>
            <input type="checkbox" id="otobi" />
            <label htmlFor="otobi">otobi ({5})</label>
          </ol>
          <ol>
            <input type="checkbox" id="raggery" />
            <label htmlFor="raggery">raggery ({6})</label>
          </ol>
          <ol>
            <input type="checkbox" id="rokomari" />
            <label htmlFor="rokomari">rokomari ({7})</label>
          </ol>
        </ul>
      </div>
      <div className="color">
        <h2 className="colorTitle">Color</h2>
        <label className="selected">{0} selected</label>
        <ul className="sidebar-style">
          <ol>
            <input type="checkbox" id="Filter-color-black" />
            <label htmlFor="Filter-color-black">black (11)</label>
          </ol>

          <ol>
            <input type="checkbox" id="Filter-color-blue" />
            <label htmlFor="Filter-color-blue">blue (10)</label>
          </ol>

          <ol>
            <input type="checkbox" id="Filter-color-brown" />
            <label htmlFor="Filter-color-brown">brown (8)</label>
          </ol>

          <ol>
            <input type="checkbox" id="Filter-color-cyan" />
            <label htmlFor="Filter-color-cyan">cyan (7)</label>
          </ol>

          <ol>
            <input type="checkbox" id="Filter-color-gold" />
            <label htmlFor="Filter-color-gold">gold (9)</label>
          </ol>

          <ol>
            <input type="checkbox" id="Filter-color-gray" />
            <label htmlFor="Filter-color-gray">gray (13)</label>
          </ol>

          <ol>
            <input type="checkbox" id="Filter-color-green" />
            <label htmlFor="Filter-color-green">green (8)</label>
          </ol>

          <ol>
            <input type="checkbox" id="Filter-color-magenta" />
            <label htmlFor="Filter-color-magenta">magenta (11)</label>
          </ol>

          <ol>
            <input type="checkbox" id="Filter-color-orange" />
            <label htmlFor="Filter-color-orange">orange (10)</label>
          </ol>

          <ol>
            <input type="checkbox" id="Filter-color-pink" />
            <label htmlFor="Filter-color-pink">pink (7)</label>
          </ol>

          <ol>
            <input type="checkbox" id="Filter-color-purple" />
            <label htmlFor="Filter-color-purple">purple (7)</label>
          </ol>

          <ol>
            <input type="checkbox" id="Filter-color-red" />
            <label htmlFor="Filter-color-red">red (8)</label>
          </ol>

          <ol>
            <input type="checkbox" id="Filter-color-violet" />
            <label htmlFor="Filter-color-violet">violet (7)</label>
          </ol>

          <ol>
            <input type="checkbox" id="Filter-color-white" />
            <label htmlFor="Filter-color-white">white (12)</label>
          </ol>

          <ol>
            <input type="checkbox" id="Filter-color-yellow" />
            <label htmlFor="Filter-color-yellow">yellow (11)</label>
          </ol>
        </ul>
      </div>
      <div className="material">
        <h2 className="materialTitle">Material</h2>
        <label className="selected">{0} selected</label>
        <ul>
          <ol>
            <input type="checkbox" id="glass" />
            <label htmlFor="glass">glass (16)</label>
          </ol>
          <ol>
            <input type="checkbox" id="partex" />
            <label htmlFor="partex">partex (18)</label>
          </ol>
          <ol>
            <input type="checkbox" id="steel" />
            <label htmlFor="steel">steel (4)</label>
          </ol>
          <ol>
            <input type="checkbox" id="wood" />
            <label htmlFor="wood">wood (20)</label>
          </ol>
        </ul>
      </div>
      <div className="size">
        <h2 className="sizeTitle">Size</h2>
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

export default FiltherSection;
