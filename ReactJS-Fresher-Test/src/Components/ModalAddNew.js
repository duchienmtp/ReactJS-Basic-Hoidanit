import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { postCreateUser } from "../Service/UserService";
import { toast } from "react-toastify";

const ModalAddNew = (props) => {
  let { show, setShow, handleUpdateTable } = props;
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  const handleSaveUser = async () => {
    try {
      let res = await postCreateUser(name, job);

      if (res && res.id) {
        handleClose();
        setName("");
        setJob("");
        toast.success("A user has been created!");
        handleUpdateTable({
          first_name: name,
          id: res.id,
          email: `${name}@gmail.com`,
        });
      } else {
        toast.error("Failed to create user!");
      }
    } catch (err) {
      console.error(">>> Check fetch data error: ", err);
    }
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New User</Modal.Title>
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
              handleSaveUser();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalAddNew;
