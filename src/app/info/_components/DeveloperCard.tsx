import React from "react";
import Header3 from "./Header3";

const DeveloperCard = () => {
  return (
    <div className='flex flex-col gap-[1.5rem]'>
      <Header3>어떤 개발자가 되고 싶나요?</Header3>
      <div className='text-[2.4rem] text-[#333] flex flex-col gap-[1.5rem]'>
        <p>
          라는 질문을 받았을 때, “사용자 경험을 우선하는 개발자", “회사와 동료의
          편의까지 고려하는 개발자" 같은 답변이 떠올랐고 정말로 그렇게
          되고싶었다.
        </p>
        <p>
          나보다 남을 위하는 개발자가 되려면 어떻게 해야하는걸까. 일터에 앉아
          개발을 하는 내 모습을 떠올렸을 때 어떤 사람이 거기 앉아있어야
          하는걸까.
        </p>
        <p>
          굿피플이라는 종영된 TV프로그램 출연자 ‘임현서'의 일기를 때마침
          마주쳤다.
          <strong>
            누구에겐 쉬운 해답이더라도 나는 그 시간을 견뎌야 하는 것이었다.
            지금까지 내 앞의 도전들, 크고 작은 어려움에 맞서 해답을 찾으려고노력
            했던 시간이 스쳐지나갔다. 어쩌면 내게는 그렇게 해서 찾았던 그때그때
            해결책, 해답, 결과보다는 무던히 포기하지 않고 견디고 견뎠던 그
            시간들이 변함없는 단 하나의 해답이었던 것이다.
          </strong>
        </p>
      </div>
    </div>
  );
};

export default DeveloperCard;
