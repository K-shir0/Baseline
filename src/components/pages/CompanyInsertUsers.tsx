import React from 'react';
import {UserListWindow} from '../user';
import {Link} from 'react-router-dom';
import {CompanyBar} from '../company';
import {Avatar} from '../../assets/images/index'

interface Props {
    thisPage: string;
}

const CompanyInsertUsers:React.FC<Props> = props => {
  let pageTtl;
  if(props.thisPage === 'insert-users') {
      pageTtl = '情報提供に協力した方';
  } else if (props.thisPage === 'company-users') {
       pageTtl = 'この会社に就職した方';
  }
  return (
    <>
        <section className="app-main company-detail">
            <div className="left-col">
                <CompanyBar thisPage="insertUsers" companyId={"1"} hasActionBtn={true} />

                <section className="companyDetail-contents userCard">
                    <h2 className="heading4 withAccent">{pageTtl}</h2>
                    <div className="userCard-list">
                        <article className="user-card">
                            <Link to="/user/01">
                                <img src={Avatar} alt=""/>
                                <div className="user-card__wrapper">
                                    <h1 className="user-card__name">山本 仁</h1>
                                    <div className="user-card__wrap">
                                        <p>22卒</p>
                                        <p>デザイナー希望</p>
                                    </div>
                                </div>
                            </Link>
                        </article>
                        <article className="user-card">
                            <Link to="/user/01">
                                <img src={Avatar} alt=""/>
                                <div className="user-card__wrapper">
                                    <h1 className="user-card__name">山本 仁</h1>
                                    <div className="user-card__wrap">
                                        <p>22卒</p>
                                        <p>デザイナー希望</p>
                                    </div>
                                </div>
                            </Link>
                        </article>

                        <article className="user-card">
                            <Link to="/user/01">
                                <img src={Avatar} alt=""/>
                                <div className="user-card__wrapper">
                                    <h1 className="user-card__name">山本 仁</h1>
                                    <div className="user-card__wrap">
                                        <p>22卒</p>
                                        <p>デザイナー希望</p>
                                    </div>
                                </div>
                            </Link>
                        </article>
                        <article className="user-card">
                            <Link to="/user/01">
                                <img src={Avatar} alt=""/>
                                <div className="user-card__wrapper">
                                    <h1 className="user-card__name">山本 仁</h1>
                                    <div className="user-card__wrap">
                                        <p>22卒</p>
                                        <p>デザイナー希望</p>
                                    </div>
                                </div>
                            </Link>
                        </article>

                        <article className="user-card">
                            <Link to="/user/01">
                                <img src={Avatar} alt=""/>
                                <div className="user-card__wrapper">
                                    <h1 className="user-card__name">山本 仁</h1>
                                    <div className="user-card__wrap">
                                        <p>22卒</p>
                                        <p>デザイナー希望</p>
                                    </div>
                                </div>
                            </Link>
                        </article>
                        <article className="user-card">
                            <Link to="/user/01">
                                <img src={Avatar} alt=""/>
                                <div className="user-card__wrapper">
                                    <h1 className="user-card__name">山本 仁</h1>
                                    <div className="user-card__wrap">
                                        <p>22卒</p>
                                        <p>デザイナー希望</p>
                                    </div>
                                </div>
                            </Link>
                        </article>
                    </div>

                </section>
            </div>

            <div className="right-col">
                {props.thisPage === 'insert-users' && <UserListWindow thisPage="insert-users" />}
                {props.thisPage === 'company-users' && <UserListWindow thisPage="company-users" />}
            </div>
            
        </section>
    </>
  );
}

export default CompanyInsertUsers;
