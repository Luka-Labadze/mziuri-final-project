import "react";
import { convertNumToArr } from "../utils/convertNumToArr";
// import './Pagination.css'

function Pagination({ activePage, totalPages, setActivePage }) {
  const pagesNumToShow = 3;

  const renderPages = () => {
    let pages = convertNumToArr(totalPages);
    const lastPage = pages[pages.length - 1];
    if (
      pages.slice(activePage - 1, activePage + pagesNumToShow - 1).length ===
      pagesNumToShow
    ) {
      pages = pages.slice(activePage - 1, activePage + pagesNumToShow - 1);
    } else {
      pages = pages.slice(pages.length - pagesNumToShow, pages.length);
    }
    if (!pages.includes(lastPage)) pages.push(lastPage);

    return pages;
  };

  return (
    <div className="pagination">
      {activePage !== 1 && (
        <button onClick={() => setActivePage(activePage - 1)}>{"<"}</button>
      )}
      {renderPages().map((item) => {
        return (
          <div key={item}>
            {activePage <= totalPages - pagesNumToShow &&
              item === totalPages && <span className="threeDots">...</span>}
            <button onClick={() => setActivePage(item)}>{item}</button>
          </div>
        );
      })}
      {activePage !== totalPages && (
        <button onClick={() => setActivePage(activePage + 1)}>{">"}</button>
      )}
    </div>
  );
}

export default Pagination;
