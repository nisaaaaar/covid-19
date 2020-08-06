import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import NumberFormat from "react-number-format";
import GoogleMapReact from 'google-map-react';

function Home() {
  const [latest, setLatest] = useState([]);
  const [results, setResults] = useState([]);
  const [searchCountries, setSearchCountries] = useState("");
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    axios
      .all([
        axios.get("https://corona.lmao.ninja/v2/all"),
        axios.get("https://corona.lmao.ninja/v2/countries"),
      ])
      .then((responseArr) => {
        console.log(responseArr.data)
        setLatest(responseArr[0].data);
        setResults(responseArr[1].data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const date = new Date(parseInt(latest.updated));
  const lastUpdated = date.toString();

  const countriesLocations = results.map((data, i) => {
    return (

            <div
              lat={data.countryInfo.lat}
              lng={data.countryInfo.long}
              style={
                {
                  color:"#F86666",
                  backgroundColor: "red",
                  height: "25px",
                  width: "45px",
                  textAlign: "center",
                  borderRadius: "30%"
                }
              }
              >
              <img height = "10px" src={data.countryInfo.flag} />
              <br />
              {data.cases}
            </div>
    );
  });

  return (
    <div>      
      <br />
      <h1
        data-tip="Last modified date: 16/05/2020 - v2.2"
        style={{ textAlign: "center" ,textDecoration:"underline",color:"#cc6699"}}
      >
        COVID-19 Worldwide
      </h1>
     
      <br />
      <CardDeck className="stats-card ml-2 mr-2">
        <Card
          text="white"
          className="text-center"
          style={{ margin: "10px",  borderRadius: "5%",background: "#8BBDE8" ,boxShadow:"5px 5px 20px black" }}
        >
          <Card.Body>
            <Card.Title>Cases</Card.Title>
            {/* <Card.Text>{latest.cases}</Card.Text> */}
            <NumberFormat
              value={latest.cases}
              displayType={"text"}
              thousandSeparator={true}
              style={{ fontSize: "30px" }}
            />
          </Card.Body>
          <Card.Footer>
            <small>Last updated {lastUpdated}</small>
          </Card.Footer>
        </Card>
        <Card
          text={"white"}
          className="text-center"
          style={{ margin: "10px",borderRadius: "5%" ,background: "#F86666",boxShadow:"5px 5px 20px black" }}
        >
          <Card.Body>
            <Card.Title>Deaths</Card.Title>
            <Card.Text>
              {" "}
              <NumberFormat
                value={latest.deaths}
                displayType={"text"}
                thousandSeparator={true}
                style={{ fontSize: "30px" }}
              />
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated {lastUpdated}</small>
          </Card.Footer>
        </Card>
        <Card
          text={"white"}
          className="text-center"
          style={{ margin: "10px",borderRadius: "5%", background:"#3CAD2C" ,boxShadow:"5px 5px 20px black" }}
        >
          <Card.Body>
            <Card.Title>Recovered</Card.Title>
            <Card.Text>
              {" "}
              <NumberFormat
                value={latest.recovered}
                displayType={"text"}
                thousandSeparator={true}
                style={{ fontSize: "30px" }}
              />
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small>Last updated {lastUpdated}</small>
          </Card.Footer>
        </Card>
      </CardDeck>
      <br />    
      <div className="block-map border-10  mb-5"
       style={
        { height: '100vh', width: '80%',  margin: "auto", border: "5px solid black", borderRadius:"10px" ,boxShadow:"10px 10px 30px #cc6699"}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:"AIzaSyAzUvt-N4u0IEyEt1-JZeMaSmsVM498bKA"}}
          defaultCenter={{
                            lat: 28,
                            lng: 84
                          }}
          defaultZoom={4}
        >
         {countriesLocations}
        </GoogleMapReact>
      </div>    
    </div>
  );
}

export default Home;
