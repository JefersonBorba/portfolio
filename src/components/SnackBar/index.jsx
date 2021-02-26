import {Container} from "./style"

const SnackBar = ({snackMessage, displaySnack}) => {
    return (
        <Container style={{bottom: (displaySnack === true ? "30px" : "-60px")}}>
            {snackMessage}
        </Container>
    )
}

export default SnackBar;