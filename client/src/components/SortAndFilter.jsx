export const SortAndFilterButtons = ({ handleSort }) => {
  return (
    <div className="sortButtons">
      <button
        className="sortByTitleAsc"
        onClick={() => {
          handleSort("City", 1);
        }}
      >
        City Asc{" "}
      </button>
      <button
        className="sortByTitleDesc"
        onClick={() => {
          handleSort("City", -1);
        }}
      >
        City Desc
      </button>
      <button
        className="sortByPriceAsc"
        onClick={() => {
          handleSort("Rating", 1);
        }}
      >
        Rating asc
      </button>
      <button
        className="sortByPriceDesc"
        onClick={() => {
          handleSort("Rating", -1);
        }}
      >
        Rating desc
      </button>
      <button
        className="sortByPriceAsc"
        onClick={() => {
          handleSort("Cost_per_day", 1);
        }}
      >
        Cost asc
      </button>
      <button
        className="sortByPriceDesc"
        onClick={() => {
          handleSort("Cost_per_day", -1);
        }}
      >
        Cost desc
      </button>
    </div>
  );
};
