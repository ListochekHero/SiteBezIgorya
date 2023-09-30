import {DescriptionList} from "./descriptionList";
import {Box, CardMedia, Paper, styled, Typography} from "@mui/material";

export const Sprint = ({title, date, snapshotURL, description, id}) => {
    return (
        <WrapperInfo elevation={0}>
            <StyledBox>
                <Title variant="h4" component="h4">
                    Sprint #{id} - {title}
                </Title>
                <Date variant="h6" component="h6">
                    Date: {date}
                </Date>
                <StyledMedia image={snapshotURL}/>
            </StyledBox>
            <DescriptionList description={description}/>
        </WrapperInfo>
    );
};

const WrapperInfo = styled(Paper)(() => ({
    display: "flex",
    gap: "10px",
    justifyContent: "space-between",
    padding: "20px",
    width: "100%",
    borderRadius: "15px",
    "@media (max-width: 700px)": {
        flexWrap: "wrap",
    },
    "@media (max-width: 540px)": {
        padding: "10px",
    },
}));

const StyledBox = styled(Box)(() => ({
    minWidth: "calc(50% - 5px)",
    "@media (max-width: 700px)": {
        minWidth: "100%",
    },
}));

const StyledMedia = styled(CardMedia)(() => ({
    width: "100%",
    height: "300px",
    borderRadius: "6px",
    "@media (max-width: 900px)": {
        height: "200px",
    },
}));

const Title = styled(Typography)(() => ({
    textAlign: "center",
    "@media (max-width: 540px)": {
        fontSize: "22px",
    },
}));

const Date = styled(Typography)(() => ({
    "@media (max-width: 540px)": {
        fontSize: "14px",
    },
}));