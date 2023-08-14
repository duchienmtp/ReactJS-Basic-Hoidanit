import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { updateUser } from "../Service/UserService";

const ModalEditUser = (props) => {
  let { show, setShow, dataUserEdit, handleEditUserFromModal } = props;
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  const handleEditUser = async () => {
    try {
      let res = await updateUser(name, job, dataUserEdit.id);
      if (res && res.updatedAt) {
        handleClose();
        handleEditUserFromModal({
          first_name: name,
          id: dataUserEdit.id,
        });
      }
      console.log(res);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (show) {
      //   setName(`${dataUserEdit.first_name} ${dataUserEdit.last_name}`);
      setName(dataUserEdit.first_name);
    }
  }, [dataUserEdit]);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputJob" className="form-label">
                Job
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputJob"
                value={job}
                onChange={(event) => setJob(event.target.value)}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleEditUser();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalEditUser;
