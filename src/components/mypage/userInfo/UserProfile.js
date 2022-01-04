import axios from 'axios';
import React, { useEffect, useState } from 'react';



const UserProfile = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    const result = axios({
      url: 'http://localhost:8080/mypage/userUpdate',
      method: 'get',
      params: { userId: 'phyw1129@naver.com', userPassword: 1234 }
    });
    result.then((res) => {
      console.log(res);
      console.log(res.data);
      setUser(res.data);
    }, []);//deps
  }, []);
  return (
    <div class="col-lg-6" id="contents">
      <h3> My Profile</h3>

      <div class="mt-3  bg-light bg-gradient">
        <div>
          <label>
            <p class="my-3 p-1 fs-4 "><b class="text-black-60">아이디 :&nbsp;&nbsp;</b><span>{user.email}</span>
            </p>
          </label>
        </div>
        <label>
          <p class="my-3 p-1 fs-4"><b class="text-black-60">생년월일 :&nbsp;&nbsp;</b><span>
            {user.birth}
          </span></p>

        </label>
        <br />
        <label>
          <p class="my-3 p-1 fs-4"><b class="text-black-60">이름 :&nbsp;&nbsp;</b><span>{user.name}</span></p>
        </label>
        <br />
        <label>
          <p class="my-3 p-1 fs-4"><b>휴대전화 번호 :&nbsp;&nbsp;</b><span class="fs-4">{user.phone}</span></p>
        </label>
        <br />
        <label>
          <p class="my-3 p-1 fs-4"><b>주소 :</b></p>
          <span class="fs-4">&nbsp;&nbsp;{user.address}</span>
        </label>
        <br />
        <label>
          <p class="my-3 p-1 fs-4"><b>가입일 :</b><span class="fs-4">&nbsp;&nbsp;
            {user.createdDate}
          </span></p>
        </label>
      </div>

    </div>
  );
};

export default UserProfile;