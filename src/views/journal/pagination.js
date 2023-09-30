import {Pagination, Paper, styled} from "@mui/material";

export const PaginationBox = ({setPage, count}) => {
    const onChange = (e, p) => {
        setPage(p);
    };

    return (
        <StyledPaper>
            <StyledPagination
                count={count}
                size="small"
                color="secondary"
                showFirstButton
                showLastButton
                shape="rounded"
                hideNextButton={true}
                hidePrevButton={true}
                onChange={(e, p) => onChange(e, p)}
            />
        </StyledPaper>
    );
};

const StyledPaper = styled(Paper)(() => ({
    padding: "20px",
    width: "100%",
    maxWidth: "400px",
    borderRadius: "12px",
    "@media (max-width: 700px)": {
        maxWidth: "none",
    },
    "@media (max-width: 540px)": {
        padding: "10px",
    },
}));

const StyledPagination = styled(Pagination)(() => ({
    "> ul": {
        justifyContent: "space-between",
    },
}));