import React, { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { SelectSecondary } from "../Atoms/Input/index";
import { Secondary } from "../Atoms/TextInput";
import { RoundedBtn } from "../Atoms/Btn";
import { motion } from "framer-motion";
import { Avatar, CameraIcon } from "../../assets/images/index";
import { pageTransitionNormal } from "../../assets/script/pageTransition";

interface Props {
  myData: any;
}
const ProfileEdit: React.FC<Props> = (props) => {
  const history = useHistory();
  const handleLink = (path: string) => history.push(path);
  const isError = [
    { isEmpty1: false },
    { isEmpty2: false },
    { isEmpty3: false },
  ];
  const yearList = [
    { value: "21卒" },
    { value: "22卒" },
    { value: "23卒" },
    { value: "24卒" },
    { value: "25卒" },
    { value: "26卒" },
  ];
  const jobList = [
    { value: "企画職" },
    { value: "デザイナー" },
    { value: "エンジニア" },
  ];

  useEffect(() => {
    selectBtnChanges();
  }, []);

  const selectBtnChanges = () => {
    const selectBtns = document.querySelectorAll(".select-btn");
    console.log(selectBtns);
    selectBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        selectBtns.forEach((item) => {
          item.classList.remove("current");
        });
        btn.classList.add("current");
      });
    });
  };

  return (
    <motion.section
      className="app-main profile-edit single"
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransitionNormal}
    >
      <button className="btn pageBack-link" onClick={() => history.goBack()}>
        <span className="heading4">マイページへ</span>
      </button>
      <form>
        <div className="contentBox contentBox--big">
          <h2 className="heading4">プロフィール編集</h2>

          <div className="userEdit-header">
            <div className="userEdit-header__left-col">
              <label className="select-image">
                <div className="select-image__wrap">
                  <img className="select-image__avatar" src={Avatar} alt="" />
                  <div className="select-image__overlay">
                    <img
                      className="select-image__icon"
                      src={CameraIcon}
                      alt=""
                    />
                    <span className="select-image__txt">画像を選択</span>
                  </div>
                </div>
                <input type="file" />
              </label>
            </div>

            <div className="userEdit-header__right-col">
              <Secondary
                name="name"
                type="text"
                labelTxt="名前"
                isRequired={false}
                isRequiredTxt={false}
                defaultValue={""}
                placeholderTxt="山本 仁"
                isError={isError}
                isIcon={false}
              />
              <div className="gender-select">
                <p className="gender-select__heading">性別</p>
                <ul className="gender-select-list">
                  <li>
                    <label className="btn select-btn current">
                      <span>男性</span>
                      <input type="checkbox" name="" />
                    </label>
                  </li>
                  <li>
                    <label className="btn select-btn">
                      <span>女性</span>
                      <input type="checkbox" name="" />
                    </label>
                  </li>
                  <li>
                    <label className="btn select-btn">
                      <span>その他</span>
                      <input type="checkbox" name="" />
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="contentBox contentBox--big">
          <SelectSecondary ttl="希望職種" name="job" selectObj={jobList} />
          <SelectSecondary
            ttl="卒業年次"
            name="graduation_year"
            selectObj={yearList}
          />
          <div className="contentBox__wrap">
            <p className="contentBox__cansel btn">
              <Link to="/mypage">キャンセル</Link>
            </p>
            <div onClick={() => handleLink("/mypage")}>
              <RoundedBtn txt="変更する" />
            </div>
          </div>
        </div>
      </form>
    </motion.section>
  );
};

export default ProfileEdit;
