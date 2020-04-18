<template>
  <div>
    <h2>ASMD test</h2>

     <svg ref="asmdCircleGraphSVG">

    <!-- <ul>
      <li v-for="(asmd, index) in asmdData" :key="index">{{asmd.Person}} ({{asmd.Outcome}})</li>
    </ul> -->
   
    </svg>
  </div>
</template>

<style>
</style>

<script>
import * as d3 from "d3";

export default {
  name: "asmd",
  data(){
    return{
      chartTitle: "Academic Sexual Misconduct Cases",
      height: 800, //why does window.innerHeight not work?
      width: 800,
      margin: {top: 25, left: 25, bottom: 25, right: 25 },
      //data: this.asmdData,
    }
  },
  props: {
    // this component requires the outer "page" that uses this component
    // to populate `asmdData`, and it should be an array
    asmdData: {
      type: Array,
      required: true
    }
  },
  methods: {
  },
  computed: {
  },
  mounted() {

    console.log("ASMD mounted 😷");

    // this exists, because it is defined as `required` in the props
    const asmdData = this.asmdData;
    
    // prepare the data for drawing
        
    // we need this to convert a date of the form 2000 to 2000-01-01:12:00:000
    var parseDate = d3.timeParse("%Y");

    // Set the ranges of x and y
    var x = d3.scaleTime()
        .rangeRound([0,this.width])
        .domain([new Date(1980, 1, 1), new Date(2018, 12, 31)])
    var y = d3.scaleLinear()
        .range([this.height, 0])
        

    // this is the main graph
    const svg = d3
      .select(this.$refs.asmdCircleGraphSVG)
      // set origin to the mid-point of the div(?)
      .attr("viewBox", [
        -this.width / 2,
        -this.height / 2,
        this.width,
        this.height
      ])
      .attr("width", this.width)
      .attr("height", this.height);
    
    svg.append('g')
    .selectAll("dot")
    .data(asmdData) 
    .enter()
    .append("circle")
      .attr("cx", function (d) { return x(parseDate(d['Outcome Year'])); } )
      .attr("cy", function (d) { return 200; } )
      .attr("r", 20)
      .style("fill", "#69b3a2")
      .style("opacity", "0.7")
      .attr("stroke", "black")
  },
  watch: {
    }
};
</script>

