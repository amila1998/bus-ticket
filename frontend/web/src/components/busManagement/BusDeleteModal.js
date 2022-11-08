import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import React from "react";

const BusDeleteModal= (props) => {
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        borderRadius: "10px",
        transform: "translate(-50%, -50%)",
        width: 550,
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 4,
        borderColor: "red",
      };
      const { id, open, handleClose,handleCancel, close, deleteBusRoute } = props;
      console.log("🚀 ~ file: BusDeleteModal.js ~ line 19 ~ BusDeleteModal ~ id", id)
  return (
    <>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div class="container">
          <div class="row">
            <div class="col-sm-11 ">
              <h2
                className="popupTittle"
                style={{
                  fontWeight: "bold",
                  fontSize: "22px",
                  color: "red",
                }}
              >
                Delete Bus 
              </h2>
            </div>
            <div class="col-sm-1 ">
              <img
                src={close}
                style={{
                  width: "21px",
                  height: "24px",
                  cursor: "pointer",
                }}
                onClick={handleCancel}
                alt="close"
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="ms-2" style={{ fontWeight: "400", fontSize: "20px" }}>
          Are you want to delete this Bus?
        </div>{" "}
        <br />
        <br />
        <div>
          <div>
            <center>
              <button className="editBtn" onClick={handleCancel}>
                Cancel
              </button>
              <button
                className="deleteBtn"
                onClick={() => deleteBusRoute(id)}
              >
                Delete
              </button>
            </center>
          </div>
        </div>
        <br />
      </Box>
    </Modal>
  </>
  )
}

export default BusDeleteModal