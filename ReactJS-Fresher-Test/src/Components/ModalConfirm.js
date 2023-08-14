import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { deleteUser } from "../Service/UserService";

const ModalConfirm = (props) => {
  let { show, setShow, dataUserDelete, handleDeleteUserFromModal } = props;

  const handleClose = () => setShow(false);

  const confirmDelete = async () => {
    try {
      let res = await deleteUser(dataUserDelete.id);
      if (res && +res.statusCode === 204) {
        toast.success("Deleted successfully!");
        handleClose();
        handleDeleteUserFromModal(dataUserDelete);
      } else {
        toast.error("Delete failed!");
      }
    } catch (err) {
      console.error(err);
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
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span>This action can't be undone! </span>
          <br />
          <span>Do you want to delete this user ?</span>
          <br />
          <span>Email: {dataUserDelete.email}</span>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              confirmDelete();
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalConfirm;
