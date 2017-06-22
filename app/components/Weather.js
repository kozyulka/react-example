import React from "react";
import WeatherForm from "./WeatherForm";
import WeatherMessage from "./WeatherMessage";
import ErrorModal from "./ErrorModal";
import openWeatherMap from "../api/openWeatherMap";


export default class Weather extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
        }
    }

    handleSearch(location) {
        let that = this; //menyaetsya kontekst this v promise, poetomu ya ego sverxu soxranyayu v peremennuyu
        this.setState({ isLoading: true });

        openWeatherMap.getTemp(location).then((temp) => {
            that.setState ({
                location: location,
                temp: temp,
                isLoading: false
            });
        }).catch((error) => {
            that.setState({
                isLoading: false,
                errorMessage: error.message
            })
        })

    }

    componentDidMount() {
        //todo sdelat tak,4tobi example locations i search rabotali (video 07. 060)
       // let location = this.props.location.query.location;
       // if(location && location.length > 0) {
       //     this.handleSearch(location);
       // }
        console.log(this.props.location);
    }

    //4tobi dobavit indikator zagruzki, dobavlyayu isLoading state, kotoriy pokajet soobwenie, do togo,kak zagruzyatsya dannie
    //posle zagruzki, ego nujno otklyu4it
    //Poskolku 2 if statementa, sna4ala zagruzitsya fetching weather
    render() {
        let { isLoading, location, temp, errorMessage } = this.state; //lu4we vinesti sverxu,4tobi potom ne menyalsya kontekst this

        function renderMessage() {
            if (isLoading) {
                return <h3>Fetching weather...</h3>
            } else if (location && temp) {
                return  <WeatherMessage location={location} temp={temp}/>
            }
        }

        function renderError() {
            if (typeof errorMessage === 'string') {
                return <ErrorModal message={errorMessage}/>
            }
        }

        return (
            <div className="text-center page-title">
                <h1>Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch.bind(this)}/>
                {renderMessage()}
                {renderError()}
            </div>
        )
    }
}