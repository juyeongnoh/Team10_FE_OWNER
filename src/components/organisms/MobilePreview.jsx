import "react-responsive-carousel/lib/styles/carousel.min.css";
import IconWithLabel from "../molecules/IconWIthLabel";
import { telFormatter } from "../../utils/telFormatter";

const MobilePreview = ({ inputs }) => {
  const KEYPOINT = {
    8: {
      icon: "underside",
      label: "하부세차",
    },
    9: {
      icon: "garage",
      label: "개러지형 독립공간",
    },
    10: {
      icon: "light",
      label: "야간조명",
    },
    11: {
      icon: "tapwater",
      label: "100% 수돗물",
    },
    12: {
      icon: "breakroom",
      label: "휴게실",
    },
    13: {
      icon: "ac",
      label: "에어컨",
    },
    14: {
      icon: "waterproof",
      label: "발수코팅건",
    },
  };

  return (
    <div className="relative overflow-auto bg-white shadow-xl rounded-xl grow">
      <div className="p-4 grid-4">
        {/* 세차장 이름, 별점, 예약베이 */}
        <div className="flex-between">
          <div>
            <div className="text-xl font-bold">{inputs.carwashName}</div>
            <div className="flex item-center">
              <IconWithLabel icon="star" />
              <div className="text-sm">5.0</div>
              <div className="text-sm text-gray-500">(999)</div>
            </div>
          </div>
          <div>
            <div className="text-3xl text-center text-primary">4</div>
            <div className="text-sm font-semibold">예약베이</div>
          </div>
        </div>

        {/* 영업시간, 주소 */}
        <div className="p-4 text-sm bg-gray-100 grid-1 rounded-xl">
          <IconWithLabel
            icon="time"
            label={
              <div className="flex-1">
                <div>평일</div>
                <div>
                  {inputs.weekdayOpenTime}~{inputs.weekdayCloseTime}
                </div>
              </div>
            }
          />

          <div className="flex-1 ml-6">
            <div>주말</div>
            <div>
              {inputs.weekendOpenTime}~{inputs.weekendCloseTime}
            </div>
          </div>
          <IconWithLabel icon="tel" label={telFormatter(inputs.carwashTel)} />
          <IconWithLabel icon="location" label={inputs.carwashAddress} />
        </div>

        {/* 키포인트 */}
        <div className="p-4 bg-gray-100 grid-2 rounded-xl">
          <div className="font-bold">키포인트</div>
          <div className="grid-cols-2 text-xs grid-2">
            {Object.keys(KEYPOINT).map((key) => {
              if (inputs.keypoint.includes(Number(key))) {
                return (
                  <IconWithLabel
                    key={key}
                    icon={KEYPOINT[key].icon}
                    label={KEYPOINT[key].label}
                    size="xl"
                  />
                );
              }
            })}
          </div>
        </div>

        {/* 세차장 설명 */}
        <p className="overflow-auto text-sm whitespace-pre-wrap h-60">
          {inputs.carwashDescription}
        </p>
      </div>
    </div>
  );
};

export default MobilePreview;
