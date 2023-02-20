import React from 'react'
import { Link } from 'react-router-dom';
import arrowBottom from '../../assets/icons/arrowBottom.svg';
import s from '../../components/CreateTZ1-component/CreateTZ1.module.css';
import Fade from "react-reveal/Fade";
import { templates } from '../../templates';
import { useTranslation } from 'react-i18next';

const CreateTZ1right = () => {
  const { t } = useTranslation();
  return (
       <Fade bottom cascade>
              <div className={s.craete1_right}>
       <h2>{t("createtz26")}</h2>
       <p>
        {t("createtz27")}
       </p>
       <div className={s.create1_punktlar}>
         {templates?.slice(0, 3).map((el) => {
           return (
             <div className={s.create1_punktlar_card} key={el.id}>
               <h3>{el.punkt}</h3>
               <p>
                 {el.desc.slice(0, 189)}
                 {"..."}
               </p>
               <div className={s.center}>
                 <Link to={`/templatePunkt/${el.id}`}>
                   <button className={s.craete1_right_btn}>
                     {t("btn.3")}
                     <img src={arrowBottom} alt="Arrow-Bottom" />
                   </button>
                 </Link>
               </div>
             </div>
           );
         })}
       </div>
     </div>
       </Fade>
  )
}

export default CreateTZ1right