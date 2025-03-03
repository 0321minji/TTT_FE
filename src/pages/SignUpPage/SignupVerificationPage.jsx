import { useState } from "react";
import { useNavigate } from "react-router-dom";

import BackNavigation from "../../components/BackNavigation";
import NextConfirmButton from "../../components/NextConfirmButton";

export default function SignupVerificationPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    carrier: "",
    phone: "",
    verificationCode: "",
  });

  const [isCodeSent, setIsCodeSent] = useState(false); // 인증번호 요청 여부

  function handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData, // 기존 데이터 유지
      [key]: value, // 해당 입력 필드 값 업데이트
    });
  }

  function next() {
    navigate("/auth/signup/account");
  }

  const isFormComplete =
    formData.carrier && formData.phone && formData.verificationCode;

  return (
    <div className="flex flex-col min-h-screen">
      <BackNavigation />
      <div className="flex-grow w-full mx-auto p-6">
        <h2 className="text-xl font-bold">본인 인증을 진행해주세요.</h2>

        <div className="mt-8 space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">통신사</label>
            <select
              name="carrier"
              value={formData.carrier}
              onChange={handleChange}
              className="input-style"
            >
              <option value="">통신사 선택</option>
              <option value="SKT">SKT</option>
              <option value="KT">KT</option>
              <option value="LG U+">LG U+</option>
              <option value="알뜰폰">알뜰폰</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">전화번호</label>
            <input
              type="input"
              name="phone"
              placeholder="전화번호 입력"
              value={formData.phone}
              onChange={handleChange}
              className="input-style"
            ></input>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">인증번호</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                name="verificationCode"
                placeholder="인증번호 입력"
                value={formData.verificationCode} // ⚠️ 변수명 수정 (passwordConfirm → verificationCode)
                onChange={handleChange}
                className="input-style flex-1" // ✅ flex-1 추가
              />
              <button
                className={`p-2 rounded-lg text-white font-bold ${
                  formData.phone
                    ? "bg-gray-500"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
                disabled={!formData.phone}
              >
                인증 요청
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <NextConfirmButton
          text="다음"
          onClick={next}
          disabled={!isFormComplete}
        />
      </div>
    </div>
  );
}
