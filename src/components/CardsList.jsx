import ReactPaginate from "react-paginate";
import cardsData from "../photos.json";
import { useEffect, useState, memo } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import CardElement from "./CardElement";

function Cards() {
  const itemsPerPage = 20;
  const items = cardsData;
  const [currentItems, setCurrentItems] = useState(cardsData);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [input, setInput] = useState("");

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  const CardsList = currentItems.map((card) => {
    return (
      <Grid item md={6} lg={3}>
        <CardElement
          id={card.id}
          title={card.title}
          cardImage={card.thumbnailUrl}
          bigImage={card.url}
          key={card.id}
          currentItems={currentItems}
        />
      </Grid>
    );
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    let searchResultValue = cardsData.filter((item) => {
      return item.id === Number(input);
    });

    if (searchResultValue.length) {
      setCurrentItems(searchResultValue);
    } else {
      setCurrentItems(cardsData);
    }
  };

  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", marginTop: "5rem" }}
    >
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => {
            return setInput(e.target.value);
          }}
        />
        <button>filter</button>
      </form>

      <Grid container spacing={2} my={10}>
        {CardsList}
      </Grid>

      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </Container>
  );
}

export default memo(Cards);
