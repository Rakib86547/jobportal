/* eslint-disable react/no-typos */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { Box } from "@mui/material";
import {  } from "react";


const LIMIT = 8;

const totalPagesCalculator = (total, limit) => {
    const pages = [];
    for (let x = 1; x <= parseInt(total) / limit; x++) {
        pages.push(x);
    }

    return pages;
}

const Pagination = ({ activePage, setActivePage, totalData }) => {
   
    return (
        <div className="">
            <Box sx={{ display: 'flex', justifyContent: 'end', padding: '25px' }}>
                <Box
                sx={{
                    display: 'flex',
                    gap: '5px',
                    border: '1px solid #e3f8e2',
                    // padding: '0 20px',
                    alignItems: 'center',
                    background: '#e3f8e2'
                }}
                >
                    {activePage !== 1 &&
                        <a
                            className="px-2"
                            onClick={() => setActivePage(activePage - 1)}
                            href="#">Previous</a>
                    }

                    {totalPagesCalculator(totalData, LIMIT).map(page => (
                        <a
                            className={`${activePage === page ? 'bg-[#1DBF73] text-white border' : ''} border px-4 py-2 text-gray-700 transition-colors duration-300 transform sm:inline hover:bg-[#1DBF73] hover:text-white`} key={page}
                            href="#"
                            onClick={() => setActivePage(page)}
                        >{page}</a>
                    ))}

                    {activePage !== totalPagesCalculator(totalData, LIMIT).length &&
                        <a
                            className="px-2"
                            onClick={() => setActivePage(activePage + 1)}
                            href="#">Next</a>
                    }
                </Box>
            </Box>
        </div>
    );
};

export default Pagination;