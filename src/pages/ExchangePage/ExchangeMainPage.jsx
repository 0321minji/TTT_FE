import BackNavigation from "../../components/BackNavigation";
import TripGoalSwiper from "../../components/TripGoalSwiper";
import ExchangeTabs from "../../components/ExchangeComponent/ExchangeTabs";
import ExchangeTab from "../../components/ExchangeComponent/ExchangeTab";
import OwnedCurrencyList from "../../components/ExchangeComponent/OwnedCurrencyList";
import ExchangeRateList from "../../components/ExchangeComponent/ExchangeRateList";
import ShowMoreButton from "../../components/ShowMoreButton";

import { getCountryCodeFromCountryName } from "../../constants/countryMappings";

import walletImg from "../../assets/images/exchange-wallet.svg";

export default function ExchangeMainPage() {
  const tripGoals = [
    {
      country: "미국",
      amountKRW: 1000000,
      amountUSD: 220.54,
    },
    {
      country: "일본",
      amountKRW: 1000000,
      amountUSD: 220.54,
    },
    {
      country: "영국",
      amountKRW: 1000000,
      amountUSD: 220.54,
    },
  ];

  const ownedCurrencyData = [
    { currencyCode: "USD", amount: 45.67 },
    { currencyCode: "JPY", amount: 5000 },
    { currencyCode: "EUR", amount: 30.5 },
    { currencyCode: "GBP", amount: 25.75 },
    { currencyCode: "KRW", amount: 100000 },
  ];

  const exchangeRates = [
    {
      changePrice: 0.32,
      changeRate: 0.08,
      cur_nm: "아랍에미리트 디르함",
      tts: "393.74",
    },
    {
      changePrice: -5.01,
      changeRate: -0.55,
      cur_nm: "호주 달러",
      tts: "912.35",
    },
    {
      changePrice: 3.05,
      changeRate: 0.08,
      cur_nm: "바레인 디나르",
      tts: "3,836.97",
    },
    {
      changePrice: -0.91,
      changeRate: -0.08,
      cur_nm: "브루나이 달러",
      tts: "1,080.63",
    },
    {
      changePrice: -1.37,
      changeRate: -0.14,
      cur_nm: "캐나다 달러",
      tts: "1,008.55",
    },
  ];

  return (
    <div className="flex flex-col">
      <BackNavigation text="환전 지갑" />

      <div className="w-full">
        {/* 여행 목표 카드 */}
        <TripGoalSwiper>
          {tripGoals.map((tripGoal, index) => (
            <div key={index}>
              <div className="flex items-center mb-4 space-x-2">
                <img
                  src={`https://flagsapi.com/${getCountryCodeFromCountryName(
                    tripGoal.country
                  )}/flat/64.png`}
                  alt={`${getCountryCodeFromCountryName(
                    tripGoal.country
                  )} flag`}
                  className="h-10"
                />
                <p className="text-lg font-bold">{tripGoal.country}</p>
              </div>
              <div className="flex justify-between items-end mb-2">
                <div>
                  <p className="text-sm font-bold">환전 가능 금액</p>
                  <p className="text-sm">원화 {tripGoal.amountKRW}</p>
                  <p className="text-sm">달러 {tripGoal.amountUSD}</p>
                </div>
                <div>
                  <img src={walletImg} alt="walletImg" className="w-100px" />
                </div>
              </div>
              <div className="flex justify-center">
                <button className="text-custom-gray-3 border-b">
                  환전하러 가기
                </button>
              </div>
            </div>
          ))}
        </TripGoalSwiper>

        {/* 여행 목표 카드 하단 */}
        <ExchangeTabs>
          <ExchangeTab label="내 지갑">
            <OwnedCurrencyList
              ownedCurrencyData={ownedCurrencyData}
              showLimited={true}
            />
            <div className="py-2">
              <ShowMoreButton />
            </div>
          </ExchangeTab>
          <ExchangeTab label="실시간 환율">
            <ExchangeRateList
              exchangeRates={exchangeRates}
              showLimited={true}
            />
            <div className="py-2">
              <ShowMoreButton />
            </div>
          </ExchangeTab>
        </ExchangeTabs>
      </div>
    </div>
  );
}
