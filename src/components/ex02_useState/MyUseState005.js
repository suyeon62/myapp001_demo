import React, { useState } from "react";

const MyUseState005 = () => {
  const [customer, setCustomer] = useState({
    name: "고수",
    address: "서울시 강남구",
    phone: "010-0000-0000",
  }); // dict 형태

  const handleChange = (e) => {
    console.log(e.target);
    //setCustomer({ ...customer, [e.target]: e.target.value });

    // setCustomer((prevState) => {
    //   return { ...prevState, [e.target.id]: e.target.value };
    // });

    console.log(e.target);
    const { id, value } = e.target;
    setCustomer((prevState) => {
      return { ...prevState, [id]: value };
    }); //key는 [대괄호]로, value는 그냥 적음
  };

  return (
    <div>
      <p>
        <span>이름</span>
        <input
          type="text"
          value={customer.name}
          id="name"
          onChange={handleChange}
        />
      </p>

      <p>
        <span>주소</span>
        <input
          type="text"
          value={customer.address}
          id="address"
          onChange={handleChange}
        />
      </p>

      <p>
        <span>전화번호</span>
        <input
          type="text"
          value={customer.phone}
          id="phone"
          onChange={handleChange}
        />
      </p>

      <button>확인</button>
    </div>
  );
};

export default MyUseState005;
