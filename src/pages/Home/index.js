import Axios from "axios";
import React, { useEffect, useState } from "react";
import { CardNews } from "../../components/moleculs";
import "./home.scss";

const Home = () => {
    const [news, setNews] = useState({ data: [] });

    const urlApi = "https://www.news.developeridn.com/";
    const proxy = "https://cors-anywhere.herokuapp.com/";

    useEffect(() => {
        const fetchData = async() => {
            const result = await Axios(`${proxy}${urlApi}`);
            setNews(result.data);
        };

        fetchData();
    }, []);

    return ( <
        div className = "home-wrapper" >
        <
        h1 > Semua Berita Terkini < /h1> <
        div className = "content-wrapper" > {
            news.data.map((item) => {
                return ( <
                    CardNews key = { item.id }
                    title = { item.judul }
                    desc = { item.waktu }
                    photo = { item.poster }
                    link = { item.link }
                    />
                );
            })
        } < /div> </div >
    );
};

export default Home;