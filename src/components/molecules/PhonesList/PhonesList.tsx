import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { Phone } from "../../../models/Phone";
import Card from "../../atoms/Card/Card";
import { CardContainer } from "./styles";

const PhonesList = () => {
  const {
    phonesState: [phones, setPhones],
  } = useContext(AppContext);

  return (
    <>
      {phones.map((phone: Phone) => (
        <CardContainer key={phone.id}>
          <Card phone={phone} />
        </CardContainer>
      ))}
    </>
  );
};

export default PhonesList;
