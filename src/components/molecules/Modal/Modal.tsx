import { useContext } from "react";
import { AppContext } from "../../../contexts/AppContext";

const Modal = () => {
  const {
    selectedPhoneState: [selectedPhone, setSelectedPhone],
  } = useContext(AppContext);
  const { name } = selectedPhone;

  const descriptionItem = (key: any, value: any) => (
    <h6 key={key}>{`${key}: ${value}`}</h6>
  );

  return (
    <div
      className="modal fade"
      id="phoneModal"
      tabIndex={-1}
      aria-labelledby="phoneModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="phoneModalLabel">
              {name}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {Object.keys(selectedPhone).map((key: any) =>
              descriptionItem(key, selectedPhone[key])
            )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
