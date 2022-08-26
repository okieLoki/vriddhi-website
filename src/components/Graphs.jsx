import React, {useState, useEffect} from 'react'

import './Graphs.css'

import{
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import {Bar} from 'react-chartjs-2';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
);


const Graphs = () => {

    const [chartData, setChartData] = useState({
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({

    });

    useEffect(() => {
        setChartData({
            labels: ["Amit", "Shreya", "Deepanshi", "Ayush", "Param"],
            datasets:[
                {
                    label: "Progress of children",
                    data: [45, 55, 40,66, 36],
                    borderColor: "rgb(10,39,39)",
                    backgroundColor: "rgba(	255, 100, 100)"
                },
            ],
        });
        setChartOptions({
            responsive: true,
            plugins:{
                legend:{
                    position: "top"
                },

            }
        })
    },[]);

    var height;
    var width;

    function screenSize() {
        var screenSize = window.innerWidth;
        

        if(screenSize>800){
            height=300;
            width=200;
        }

        // else if(screenSize===640){
        //     height=100;
        //     width=120;
        // }
        else{
            height=100;
            width=90;
        }
    }

    return (
        <div className='graphs'>
            <div className='container'>

                <div className='left'>
                    
                    <Bar options={chartOptions} data={chartData} height={height} width={width}/>
                </div>

                <div className='left'>
                    <h3>Check out the progress that parents have reported after their kids started using Vriddhi</h3>
                    <br></br>
                    <p>We even collect monthly feedback from the parents and provide them sessions on better child development.</p>
                </div>
            </div>
        </div>
    )
}

export default Graphs