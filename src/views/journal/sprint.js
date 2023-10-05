import {DescriptionList} from "./descriptionList";
import {Box, CardMedia, Paper, styled, Typography} from "@mui/material";
import {Title} from "../../components/UI/title";
import {Subtitle} from "../../components/UI/subtitle";

export const Sprint = ({title, date, snapshotURL, description, id}) => {
    return (
        <WrapperInfo elevation={0}>
            <StyledBox>
                <Title>Sprint #{id} - {title}</Title>
                <Subtitle>
                    Date: {date}
                </Subtitle>
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