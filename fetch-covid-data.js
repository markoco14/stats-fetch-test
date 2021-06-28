//a js file
//it worked!

/*fetch("owid-covid-data.json")
.then(res => res.json())
.then(data => console.log(data))*/

let url1 = "https://github.com/owid/covid-19-data/blob/master/public/data/owid-covid-data.json";
let url2 = "owid-covid-data.json";

const loadData = async () => {
	try {
		const res = await fetch(url1, {
			'Access-Control-Allow-Origin': '*'
		});
		console.log(res);
		covidData = await res.json();
		console.log(covidData);
		taiwanData = covidData.TWN.data;
		console.log(taiwanData);
	} catch (err){
		console.log(err);
	}
}

loadData();