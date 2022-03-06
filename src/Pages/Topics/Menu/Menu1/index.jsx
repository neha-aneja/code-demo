import React, {useState} from 'react';
import Card from '../../Card';

const Menu1 = () => {

    const [inputList, setInputList] = useState("");
    const [listElement, setListElement] = useState([]);

    const showListInput = (event) => {
        setInputList(event.target.value);
    }

    const showListElement = () => {
        setListElement((items) => {
            return [...items, inputList];
        });
        setInputList("");
    }

    const arr = [
        {
            // img: "Images/react.png",
            title: "React",
            desc: "React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage.",
            // link: "https://reactjs.org/docs/getting-started.html"
        },
        {
            // img: "Images/bootstrap.png",
            title: "Bootstrap",
            desc: "Bootstrap, the world’s most popular framework for building responsive, mobile-first sites, with jsDelivr and a template starter page.",
            // link: "https://getbootstrap.com/docs/4.1/getting-started/introduction/"
        },
        {
            // img: "Images/redux.jpg",
            title: "Redux",
            desc: "Redux, A predictable state container for JS apps.",
            // link: "https://redux.js.org/"
        }
    ]


    return (

        <>
            <div className="container">
                <div className="row justify-content-evenly">
                    {
                        arr.map((val) => (

                            <div className="col-lg-4 col-12 pt-5">
                                <Card
                                    // img={val.img}
                                    title={val.title}
                                    desc={val.desc}
                                    // link={val.link}
                                />
                            </div>
                        ))
                    }
                </div>
                <div className="list-box">
                    <h1>List</h1>
                    <input type="text" placeholder="enter list items" onChange={showListInput} value={inputList}/>
                    <button onClick={showListElement}>+</button>
                    <ol>
                    {
                        listElement.map((el) => {
                            return (
                                <li> {el} </li>
                            );
                        })
                    }
                    </ol>
                </div>
                </div>

        </>
    )
}
export default Menu1;