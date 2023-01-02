import Head from "next/head";
import { useEffect, useState } from "react";
import Card from "../comps/Card";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Head>
        <title>Frontend Mentor | Job Listings with Filtering</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="head-img"></div>
      <div className="card-div">
        {/* Dont forget to map the stuff oo */}
        {/* <Card
          src="/photosnap.svg"
          name="Photosnap"
          new={false}
          featured={true}
          title="Senior Frontend Developer"
          tags="1d ago • Full Time • USA only"
          stacks={["Frontend", "Senior", "HTML", "CSS", "JavaScript"]}
        /> */}
        {data.map((dat) => (
          <Card
            src={dat.logo}
            name={dat.company}
            title={dat.position}
            new={dat.new}
            featured={dat.featured}
            tags={`${dat.postedAt} • ${dat.contract} • ${dat.location}`}
            stacks={[dat.role, dat.level, ...dat.languages, ...dat.tools]}
          />
        ))}
      </div>
    </>
  );
};

export default Home;