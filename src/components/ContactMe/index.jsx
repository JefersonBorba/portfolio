import { Container, Title } from "./style";
import { useForm } from "react-hook-form";
import axios from "axios";

const ContactMe = ({setFormError}) => {

    const { register, handleSubmit } = useForm();
    const senderData = {
        email: "contato@jefersonborba.dev",
        message: "Value",
        nome: "Value",
        sender: "Value"}
    const onSubmit = (data) => {
        senderData.message = data.message;
        senderData.nome = data.nome;
        senderData.sender = data.sender;
        sendMessage(senderData);
    };

    const sendMessage = (data) => {
        axios.post("https://api.sendwithses.com/send-email", data, {headers: {'x-api-key': "a2aa10acPyVacc7ScWXNaaLyo4iOuaefFxVA3pkDHIk2ZwHya5lMtKXbRmE6"}})
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }
    return(
        <Container>
            <Title className="title" id="contact-me">ContactMe</Title>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="nes-field">
                    <label htmlFor="name_field">Your name</label>
                    <input type="text" id="name_field" className="nes-input" name="nome" ref={register({ required: true, maxLength: 20 })} />
                </div>
                <div className="nes-field">
                    <label htmlFor="name_field">Your email</label>
                    <input type="text" id="name_field" className="nes-input" name="sender" ref={register({ required: true })}/>
                </div>
                <div className="nes-field">
                    <label htmlFor="textarea_field">Your message</label>
                    <textarea id="textarea_field" className="nes-textarea" name="message" ref={register({ required: true, maxLength: 120 })}></textarea>
                </div>
                <button type="submit" className="nes-btn is-primary" onClick={() => setFormError(true)}>Send message</button>
            </form>
        </Container>
    )
}

export default ContactMe;