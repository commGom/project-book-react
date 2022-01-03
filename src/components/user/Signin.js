import React from 'react';
import { Button, Col, Input, Row } from 'antd'
import "antd/dist/antd.css";
import styles from "./Signin.module.css";
const Signin = () => {
  return (
    <Row align="middle" className={styles.signin_row}>
      <Col span={24}>
        <Row className={styles.signin_contents}>
          {/* Col 하나는 이미지, 하나는 로그인 폼 */}
          <Col span={12}>
            <img src="/image/user/bg_signin01.jpg" alt="First Book" className={styles.signin_bg}></img>
            <img src="/image/user/bg_signin02.jpg" alt="Second Book" className={styles.signin_bg}></img>
          </Col>
          <Col span={12}>
            <div className={styles.signin_title}>My Books</div>
            <div className={styles.signin_subtitle}>Please Note Your Opinion</div>
            <div className={styles.signin_underline}></div>
            <div className={styles.email_title}>
              Email
              <span className={styles.required}>*</span>
            </div>
            <div className={styles.input_area}>
              <Input className={styles.input} placeholder="email" autoComplete="email" name="email"></Input>
            </div>
            <div className={styles.password_title}>
              Password
              <span className={styles.required}>*</span>
            </div>
            <div className={styles.input_area}>
              <Input className={styles.input} type="password" autoComplete="current" name="password"></Input>
            </div>
            <div className={styles.button_area}>
              <Button className={styles.button} size="large">Sign In</Button>
            </div>
          </Col>
        </Row>

      </Col>
    </Row>
  );
};

export default Signin;