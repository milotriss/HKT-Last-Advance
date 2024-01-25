import React, { ChangeEvent, useState } from "react";
import './home.css'
import { Link } from "react-router-dom";
interface Props {
    getData:Function
}
const Home = (props:Props): JSX.Element => {
    const [data,setData] = useState<any>({
        limit:'',
        category:'',
        level:''
    })
    const changeData = (e:ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setData({
            ...data,
            [e.target.name]:Number(e.target.value)
        })
    }
    props.getData(data)
  return (
    <section className="homeOverlay">
      <div className="home">
        <h1>Setup Quiz</h1>
        <div className="homeItemInput">
          <label htmlFor="">Number Of Questions</label>
          <input name="limit" onChange={changeData} type="text" />
        </div>
        <div className="homeItemSelect">
          <label htmlFor="">Category</label>
          <select onChange={changeData} name="category" id="">
            <option value="1">History</option>
            <option value="2">Math</option>
          </select>
        </div>
        <div className="homeItemSelect">
          <label htmlFor="">Difficult</label>
          <select onChange={changeData} name="level" id="">
            <option value="1">Easy</option>
            <option value="2">Medium</option>
            <option value="3">Hard</option>
          </select>
        </div>
        <Link to={'/questions-detail'}>Start</Link>
      </div>
    </section>
  );
};

export default Home;
