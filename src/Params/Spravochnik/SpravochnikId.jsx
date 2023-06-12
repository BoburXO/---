import React, { useContext, useState } from "react";
import s from "../Spravochnik/spravochnik.module.css";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import createIcon from "../../assets/icons/createIcon.svg";
import deleteIcon from "../../assets/icons/deleteIcon.svg";
import { useTranslation } from "react-i18next";
import UserNav from "../../components/UserNav/UserNav";
import { Context } from "../../Context/Context";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Loader from "../../components/Loader/Loader";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "none",
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
};

const SpravochnikId = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const {
    spravochnik,
    getAllSpraSearch,
    spraSearch,
    removeElementById,
    updateElements,
    updateSlug,
    createElement,
    contUz,
    contRu,
    setContRu,
    setContUz,
  } = useContext(Context);

  //modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //modal

  const { t } = useTranslation();
  const { id } = useParams();
  const ParamsSlug = spravochnik?.results?.find((el) => {
    return el?.id === id;
  });

  React.useEffect(() => {
    if (!localStorage.getItem("ConstructorRoleAccessToken")) {
      navigate("/");
    }
    getAllSpraSearch().then(() => setIsLoading(false));
  }, [spraSearch]);

  if (isLoading) return <Loader />;
  return (
    <>
      <UserNav />
      <div className={s.spravochnikId_head}>
        <div className={s.container}>
          <h2>{t("spra_id")}</h2>
          <br />
          <br />
          <br />
          <div className={s.spravochnik_id_parent}>
            <div
              style={{
                width: "55%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <h3>{t("uz")}:</h3>
              <h3>{t("ru")}:</h3>
            </div>
            <form
              onSubmit={(e) => updateSlug(e, ParamsSlug?.slug)}
              className={s.spra_title_parent}
            >
              <div>
                <h3>{ParamsSlug?.title_uz}</h3>
                <div className={s.spravochnik_params}>
                  <input type="text" placeholder={t("spra_id1")} />
                </div>
              </div>
              <div>
                <h3>{ParamsSlug?.title_ru}</h3>
                <div className={s.spravochnik_params}>
                  <input type="text" placeholder={t("spra_id1")} />
                  <button type="submit" className={s.createParams}>
                    <img src={createIcon} alt="" />
                  </button>
                </div>
              </div>
            </form>
            <br />
            <br />
            <div className={s.spra_element_parent}>
              <h2>{t("spra_id3")}:</h2>
              {ParamsSlug?.elements?.map((el) => {
                return (
                  <form onSubmit={(e) => updateElements(e, el.id)} key={el.id}>
                    <div>
                      <p>{el.content_uz}</p>
                      <input type="text" placeholder={t("spra_id2")} />
                    </div>
                    <div>
                      {el.content_ru === null ? (
                        <p style={{ color: "gray" }}>{t("spra10")}...</p>
                      ) : (
                        <p>{el.content_ru}</p>
                      )}
                      <div className={s.inp_btn}>
                        <input type="text" placeholder={t("spra_id2")} />
                        <button type="submit" className={s.createParams}>
                          <img src={createIcon} alt="" />
                        </button>
                        <button
                          onClick={() => removeElementById(el.id)}
                          className={s.deleteParams}
                        >
                          <img src={deleteIcon} alt="" />
                        </button>
                      </div>
                    </div>
                  </form>
                );
              })}
            </div>
          </div>
        </div>
        <div className={s.createElement}>
          <button onClick={handleOpen}>+</button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className={s.createElementForm}>
                <h2>{t("create.element")}</h2>
                <br />
                <input
                  value={contUz}
                  onChange={(e) => setContUz(e.target.value)}
                  type="text"
                  placeholder={t("uz")}
                />
                <br />
                <input
                  value={contRu}
                  onChange={(e) => setContRu(e.target.value)}
                  disabled={!contUz}
                  type="text"
                  placeholder={t("ru")}
                />
                <br />
                <div className={s.createElementFormBtns}>
                  {" "}
                  <button
                    onClick={() => handleClose()}
                    className={s.shablon_cancel_btn}
                  >
                    {t("btn.5")}
                  </button>
                  <button
                    disabled={!contRu}
                    onClick={() => createElement(ParamsSlug?.id)}
                    className={s.shablon_save_btn}
                  >
                    {t("btn.4")}
                  </button>
                </div>
              </div>
            </Box>
          </Modal>
        </div>
        <div className={s.back}>
          <button
            onClick={() => navigate("/lkadminspravochnik")}
            className={s.shablon_cancel_btn}
          >
            {t("btn.1")}
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SpravochnikId;
