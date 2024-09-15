import React, { useState } from 'react';
import './styles.css';
import Pagination from '@mui/material/Pagination';


export default function PaginationComponent() {
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <div className='pagination-component'>

            <Pagination
                sx={{
                    "& .MuiPaginationItem-text": {
                        color: "#fff !important",
                        border: "1px solid var(--grey)",
                    },
                    "& .MuiPaginationItem-text:hover": {
                        backgroundColor: "transparent !important",
                    },
                    "& .Mui-selected  ": {
                        backgroundColor: "var(--blue)",
                        borderColor: "var(--blue)",
                    },
                    "& .MuiPaginationItem-ellipsis": {
                        border: "none",
                    },
                }}
                count={10} page={page} onChange={handleChange} />
        </div>
    );
}

