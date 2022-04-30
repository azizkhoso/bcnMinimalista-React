import React, { useState } from "react";
import Footer from "../ui/Footer";
import Modal from "react-modal/lib/components/Modal";
// import Modal from "react-modal";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../../styles/components/InformComponent.css";

const validationSchema = Yup.object({
  article: Yup.string().min(1, "Required").required("Required"),
  link: Yup.string().min(1, "Required").required("Required"),
});

const Inform = (props) => {
  Modal.setAppElement(document.getElementById("root"));
  const [modalOneIsOpen, setModalOneIsOpen] = useState(false);
  const [modalTwoIsOpen, setModalTwoIsOpen] = useState(false);
  const formik = useFormik({
    initialValues: {
      article: "",
      link: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      setModalOneIsOpen(false);
      setModalTwoIsOpen(true)
      resetForm();
    },
  });
  return (
    <React.Fragment>
      <div className="container-inform">
        <div className="inform__title-btn">
          <div className="inform__title">
            <p className="inform__title-text">news in local waste reduction</p>
          </div>

          <button
            onClick={() => setModalOneIsOpen(true)}
            className="inform__modal-btn"
            color="success"
            outline
            id="suggestButton"
          >
            Suggest article
          </button>
        </div>
        <div className="inform__list-container">
          {props.informList.map((inform) => {
            return (
              <div className="inform__list-row" key={inform.id}>
                <img
                  src={inform.img}
                  alt={inform.alt}
                  className="inform__list-img"
                />

                <div className="inform__list-body">
                  <a href={inform.src} target="_blank" rel="noreferrer">
                    <p className="inform__list-body-header">{inform.title}</p>
                    <p className="inform__list-body-caption">
                      {inform.caption}
                    </p>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <Modal
          isOpen={modalOneIsOpen}
          style={{
            overlay: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "white",
              overlayClassName: "inform__modal-suggest",
            },
            content: {
              position: "absolute",
              top: "28%",
              left: "10%",
              right: "10%",
              bottom: "15%",
              border: "3px solid green",
              background: "white",
              overflow: "auto",
              WebkitOverflowScrolling: "touch",
              borderRadius: "10px",
              outline: "none",
              padding: "20px",
            },
          }}
        >
          <form
            onSubmit={formik.handleSubmit}
            className="inform__modal-suggest"
          >
            <label htmlFor="article" className="form-group">
              Article Description
            </label>
            <textarea
              type="text"
              name="article"
              rows="5"
              value={formik.values.article}
              onChange={formik.handleChange}
              className="form-control"
            />
            {formik.errors.article && formik.touched.article ? (
              <div className="inform__errors">{formik.errors.article}</div>
            ) : null}
            <label htmlFor="article" className="form-group">
              Link
            </label>
            <input
              type="text"
              name="link"
              value={formik.values.link}
              onChange={formik.handleChange}
              className="form-control"
            />
            {formik.errors.link && formik.touched.link ? (
              <div className="inform__errors">{formik.errors.link}</div>
            ) : null}
            <div className="inform__modal-btn-group">
              <button
                onClick={() => {
                  setModalOneIsOpen(false);
                }}
              >
                close
              </button>
              <button
                type="submit"
              >
                submit
              </button>
            </div>
          </form>
        </Modal>
        <Modal
          isOpen={modalTwoIsOpen}
          style={{
            overlay: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "white",
              overlayClassName: "inform__modal-suggest",
            },
            content: {
              position: "absolute",
              top: "28%",
              left: "20%",
              right: "20%",
              bottom: "35%",
              border: "3px solid green",
              background: "white",
              overflow: "auto",
              WebkitOverflowScrolling: "touch",
              borderRadius: "10px",
              outline: "none",
              padding: "20px",
            },
          }}
        >
          <div className="inform__modal-suggest-response">
            <div>
              Thank you for submitting this
              <a
                href={formik.values.link}
                target="_blank"
                style={{ color: "green" }}
              >
                {" "}
                INFO!
              </a>
              , we will look into featuring it on the site
            </div>
            <button
              onClick={() => {
                setModalTwoIsOpen(false);
              }}
            >
              close
            </button>
          </div>
        </Modal>

        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Inform;
