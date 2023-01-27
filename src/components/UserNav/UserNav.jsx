import React from "react";
import s from "../UserNav/UserNav.module.css";
import logofff from "../../assets/imgs/logofff.svg";
import { Link, NavLink } from "react-router-dom";
import ava from "../../assets/icons/ava.png";

const UserNav = () => {
  return (
    <>
      <nav className={s.userNav}>
        <div className={s.userNav_container}>
          <ul className={s.userNav_lists}>
            <li className={s.logofff_list}>
              <Link>
                <img src={logofff} alt="logofff" />
              </Link>
            </li>
            <li className={s.userNav_right_lists}>
              <select className={s.til} name="language">
                <option className={s.til__opt} value="ru">
                  Русский
                </option>
                <option className={s.til_opt} value="uz">
                  O'zbek
                </option>
              </select>
              <span className={s.nav_avtor_content}>
                <b>Фамилия Имя</b>
                <p>Автор</p>
              </span>
              <Link className={s.avatar_link}>
                <img src={ava} alt="Avatar" />
              </Link>
            </li>
          </ul>
        </div>

        <div className={s.userNav_container}>
          <ul className={s.admin_routes}>
            <li><NavLink>
            Структура ТЗ
              </NavLink></li>
            <li><NavLink>Справочники</NavLink></li>
            <li>
              <NavLink>Шаблоны</NavLink>
            </li>
            <li>
              <NavLink>Контент сайта</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default UserNav;
