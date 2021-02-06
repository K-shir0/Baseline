import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { pageTransitionNormal } from '../../assets/script';
import { UserData } from '../Molecules/Bar';
import { MyActivity as IMyActivity, User } from '../../services/models';
import { GearIcon, PencilIcon, TrashIcon } from '../../assets/images';
import { Comment } from '../Molecules/Card';
import { MyActivity } from '../Organisms/Activity';

interface StateProps {
  isLoading: boolean;
  user: User;
}

export const MyPage: FC<StateProps> = ({ user, isLoading = true }) => {
  // TODO 神関数
  // const test = user.companyInformation?.flatMap(({ myActivities }) =>
  //   myActivities === undefined ? [] : [...myActivities],
  // );
  //
  // const companyInformationList = user.companyInformation?.flatMap(({ myActivities }) =>
  //   myActivities === undefined ? [] : [...myActivities],
  // );

  const companyInformationList = user.companyInformation?.flatMap(data =>
    data.myActivities === undefined ? [] : data,
  );

  return (
    <>
      {!isLoading && (
        <motion.section
          className="app-main mypage single"
          initial="out"
          animate="in"
          exit="out"
          variants={pageTransitionNormal}
        >
          <h2 className="heading1">マイページ</h2>
          <UserData user={user} />
          <Link to="/01/account-setting" className="icon-txt icon-txt--normal">
            <img src={GearIcon} alt="" />
            アカウント設定へ
          </Link>
          <div className="activity-list">
            {/* TODO 記事のリスト */}
            {companyInformationList &&
              companyInformationList.map(myActivity => (
                <MyActivity author={user} companyInformation={myActivity} />
              ))}
          </div>
        </motion.section>
      )}
    </>
  );
};
