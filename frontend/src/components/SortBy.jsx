import "react";
import Grid from "../assets/icons/grid.png";
function SortBy() {
  return (
    <div className="sortBy">
      <div className="gridView">
        <img src={Grid} alt="grid" className="gridImg" />
        <p style={{ scale: 1.6 }} className="gridImg2">
          ⋮☰
        </p>
      </div>
      <div className="showingProducts">
        <p>Showing 1 - 15 of 44 result</p>
      </div>
      <div className="sorting">
        <p>Sort by</p>
        <select name="sorting" id="sorting">
          <option value="alphabeticallyReverse">Alphabetically, Z-A</option>
          <option value="featured">Featured</option>
          <option value="alphabetically">Alphabetically, A-Z</option>
          <option value="priceLowToHigh">Price low to high</option>
          <option value="priceHighToLow">Price high to low</option>
        </select>
      </div>
    </div>
  );
}

export default SortBy;
