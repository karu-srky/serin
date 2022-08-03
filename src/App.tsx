import { useState } from 'react';
import Body from './main/body'
import Footer from './main/footer'
import Header from './main/header'

const App = () => {
  const contentsTitle = [
    {
        title: "TOP",
        flag: "top"
    },
    {
        title: "COMPANY",
        flag: "company"
    },
    {
        title: "BUSINESS",
        flag: "business"
    },
    {
        title: "CONTACT",
        flag: "contact"
    },
    {
        title: "RECRUIT",
        flag: "recruit"
    }
  ]
  
  //bodyを表示状況を管理するstate
  const [bodyState, setBodyState] = useState("top");
  
  //ToDo 引数をopen,closeのstringに変更する
  //Drawerのstate管理
  const selectBody = (bodyKey: string) => {
    setBodyState(bodyKey)
  }
  return (
    <>
      <Header
        selectBody={selectBody}
        contentsTitle={contentsTitle}
      />
      <Body
        bodyState={bodyState}
      />
      <Footer />
    </>
  );
}

export default App;