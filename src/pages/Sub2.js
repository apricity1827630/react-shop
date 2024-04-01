import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
/* component */
let TitleBox = styled.div`
padding-top:50px;
margin-bottom:40px;
`
let TextBox = styled.p`
margin-bottom: ${props => props.mb};
font-weight:${props => props.fw};
`
let DefaultBtn = styled.button`
border:none;
width:160px; height:40px;
border-redius:4px;
color:${props=>props.bg === 'seagreen' ? 'white':'black'};
background:${props=>props.bg}
`


const Sub2 = () => {
  return (
    <div className='container author'>
      <TitleBox>
        <h2>작가소개</h2>
        <TextBox mb="15px" fw="600">
          시원상
        </TextBox>
        <TextBox mb="10px" fw="400">
          우리는 주어진 것에 급급해 하느라 일상의 권태로움을 지겨워하며 살아가고 있는 것은 아닐까요. 이런 권태로움에서 벗어나기 위해 필요한 것은 일상을 낯설게 보는 새로운 시선, 그런 시선을 갖게 하는 신선한 자극입니다.
        </TextBox>
      </TitleBox>
      <DefaultBtn bg="seagreen">지원하기</DefaultBtn>
      <Outlet />
    </div>
  )
}

export default Sub2