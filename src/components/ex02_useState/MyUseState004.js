import React, { useState } from "react";

const MyUseState004 = () => {
  const [customer, setCustomer] = useState({
    name: "고수",
    address: "서울시 강남구",
    phone: "010-0000-0000",
  });

  const handleChangeName = (e) => {
    //setCustomer({ ...customer, name: e.target.value });
    setCustomer((prevState) => {
      return { ...prevState, name: e.target.value };
    });
  };

  const handleChangeAddress = (e) => {
    setCustomer((prevState) => {
      return { ...prevState, address: e.target.value };
    });
  };

  const handleChandgePhone = (e) => {
    setCustomer((prevState) => {
      return { ...prevState, phone: e.target.value };
    });
  };

  const handleClick = (e) => {};
  return (
    <div>
      <p>
        <span>이름</span>
        <input type="text" onChange={handleChangeName} value={customer.name} />
      </p>

      <p>
        <span>주소</span>
        <input
          type="text"
          onChange={handleChangeAddress}
          value={customer.address}
        />
      </p>

      <p>
        <span>전화번호</span>
        <input
          type="text"
          onChange={handleChandgePhone}
          value={customer.phone}
        />
      </p>

      <button onClick={handleClick}>확인</button>
    </div>
  );
};

export default MyUseState004;
