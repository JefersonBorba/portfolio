import {Container} from "./style"
import SadCaramelo from "../../imgs/sadCaramelo.gif"
import NormalCaramelo from "../../imgs/normalCaramelo.png"
import DeliveryCaramelo from "../../imgs/deliveryCaramelo.png"

const SnackBar = ({snackMessage, displaySnack, selectedCaramelo}) => {
    const Caramelo = [NormalCaramelo, DeliveryCaramelo, SadCaramelo]
    return (
        <Container style={{bottom: (displaySnack === true ? "30px" : "-60px")}}>
            <img src={Caramelo[selectedCaramelo]} alt="Delivery Dog"/>
            {snackMessage}
        </Container>
    )
}

export default SnackBar;