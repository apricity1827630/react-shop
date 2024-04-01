import { useState } from 'react';
import { button } from 'react-bootstrap';
import { useEffect } from 'react';

const Sub4=()=>{
  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);
    /*
    useEffect(()=>{
      setTimeout(()=>{setAlert(false)},3000)
    }) */
    //브라우저는 이 코드가 모두 실행된 다음(에러없이) html코드를 실행
    /*
    */ for (let i = 1; i < 10000; i++) {
    //console.log{}
  }
  useEffect(() => {
    setTimeout(() => { setAlert(false); }, 3000);
  });
  useEffect(() => {
    setTimeout(() => { setAlert(false); }, 3000);
    console.log(2);
  }, [count]);
  return (
    <div>
      <h1>useEffect</h1>
      {count}
      <button onClick={() => setCount(count + 1)}>버튼</button>
      {alert === true
        ? <div className='alert alert-danger'>3초이내 구매시 20% 할인</div>
        : null}
    </div>
  );
}

export default Sub4
