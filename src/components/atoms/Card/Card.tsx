import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";
import { CardContainer } from "./styles";

const Card = ({ phone }: any) => {
  const { name, description, imageFileName } = phone;
  const {
    selectedPhoneState: [selectedPhone, setSelectedPhone],
  } = useContext(AppContext);

  return (
    <CardContainer className="card text-center">
      <img src={imageFileName} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#phoneModal"
          onClick={() => setSelectedPhone(phone)}
        >
          More info
        </button>
      </div>
    </CardContainer>
  );
};

export default Card;
