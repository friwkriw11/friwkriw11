import React from "react";
import DataTable from "react-data-table-component";

import { columns } from "./headers";
import "./table.scss"
import Profile from "../../../../../components/modals/champions_profile/Profile";

const TableData = ({ data }) => {
  const [searchText, setSearchText] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(
    false
  );




  const filteredData = data.filter((item) => {
    const full_name = item.first_name + " " + item.last_name;

    const nameMatch = full_name.toLowerCase().includes(searchText.toLowerCase()) ||
      searchText === '';

    const statusMatch =
    item.status.toLowerCase() === (status.toLowerCase()) ||
      status === '';

    return nameMatch && statusMatch;
  });

  const handleSearch = (value) => {
    setSearchText(value);
    setResetPaginationToggle(!resetPaginationToggle);
  };

  const handleStatus = (value) => {
    setStatus(value);
    setResetPaginationToggle(!resetPaginationToggle);

  };

  const paginationOptions = {
    rowsPerPageText: "Rows per page:",
    rangeSeparatorText: "of",
    noRowsPerPage: false,
    selectAllRowsItem: false,
    selectAllRowsItemText: "All"
  };

  const customPagination = () => {


    const page = Math.ceil(filteredData.length / paginationPerPage);
    const pageButtons = [];

    for (let i = 1; i <= page; i++) {
      pageButtons.push(
        <button
          key={i}
          className={`btn-pagination ${currentPage === i ? "active" : "off"}`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }





    return (
      <div className="pagination-container">
        <button
          className="btn-pagination"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          ‹
        </button>
        {pageButtons}
        <button
          className="btn-pagination"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === page}
        >
          ›
        </button>
      </div>
    );
  };

  const paginationPerPage = 10;
  const [currentPage, setCurrentPage] = React.useState(1);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * paginationPerPage,
    currentPage * paginationPerPage
  );

  const columnsWithViewButton = [
    ...columns,
    {
      name: 'Options',
      cell: (row) => <Profile row={row} champions={data} />,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      conditionalCellStyles: [
        {
          when: (row) => true, // Add your condition here if needed
          style: {
            backgroundColor: '#B6B8B7',
            width: "670px",

          },
        },
      ],
    },
  ];



  return (
    <div className='container'>

      <DataTable
        columns={columnsWithViewButton}
        data={paginatedData}
        pagination

        paginationTotalRows={filteredData.length}
        onChangePage={(page) => setCurrentPage(page)}
        paginationComponentOptions={paginationOptions}
        paginationComponent={customPagination}
        stickyHeader
        highlightOnHover
        pointerOnHover
        subHeader
        subHeaderAlign="left"
        subHeaderComponent={
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center"
            }}
          >

            <div style={{ marginRight: "20px" }}>

              <input
                className="search_input"
                type="text"
                placeholder="Search..."
                value={searchText}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>


            <div className="select">
              <select value={status}
                onChange={(e) => handleStatus(e.target.value)} className=' w-[470px] h-[56px] ' name="status" >
                <option value="">All</option>
                <option value="PAID">PAID</option>
                <option value="NON PAID">NON PAID</option>
              </select>
            </div>


          </div>
        }
      />
    </div>
  );
};

export default TableData;
