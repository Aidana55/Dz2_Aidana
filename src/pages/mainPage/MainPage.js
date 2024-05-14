import React from 'react';
import About from "../../component/About/About";
import Title from "../../component/title/Title";

const MainPage = () => {
    return (
        <div>
            <About info={{title:"Aidana", body:"18"}}/>
            <Title title={"Hello world!"}/>

        </div>
    );
};

export default MainPage;