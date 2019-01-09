import React from 'react';
import './App.css';

function importAll(r) {
	  let images = {};
	r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
	  return images;
}

const images = importAll(require.context('./photos', false, /\.(png|JPE?G|jpe?g|svg)$/));


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			menu: [
				{name: "Portfolio"},
				{name: "Book"},
				{name: "Voyages"},
				{name: "Me contacter"},
			]
		};
	}
	render() {
		return (
			<div className="App">
				<div className="First-title">
					<header className="App-header">
						<div className="menu-list">{
							this.state.menu.map((element) => <div className="menu-element">{element.name}</div>)
						}</div>
					<div className="Instagram-name" href="https://www.instagram.com/gaspardlieto/?hl=en" target="_blank" onClick={()=> window.open("https://www.instagram.com/gaspardlieto/?hl=en", "_blank")}>Gaspard Lïeto</div>
        	</header>
				</div>
				{/*<div className="Transit-div">
					<div className="transit-image"></div>
				</div>*/}
				<div className="Travels">
					<Travel photo={images['DSC_0603.jpg']} country="PORTUGAL" title="Road trip Ibérique" subtitle="Sagaró"/>
					<Travel photo={images['DSC_0718.JPG']} country="ITALIE" title="Voyage familial" subtitle="Rome"/>
					<Travel photo={images['DSC_0441.JPG']} country="BRESIL" title="Séjour touristique" subtitle="Rio De Janeiro"/>
					<Travel photo={images['DSC_1052.jpg']} country="PORTUGAL" title="Surf trip" subtitle="FARO"/>
				</div>
      </div>
    );
  }
}

class Travel extends React.Component {
	render() {
		return(
			<div className="travel-wrapper" style={{backgroundImage: `url(${this.props.photo})`}}>
				<div className="travel-container">
					<div className="travel-country">{this.props.country}</div>
					<div className="travel-content">
						<div className="travel-title">{this.props.title}</div>
						<div className="travel-subtitle">{this.props.subtitle}</div>
					</div>
				</div>
			</div>
		);
	}
}
export default App;
