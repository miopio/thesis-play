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

    // naive stem identifier
    var isStem = function(s) {
        // array of stem substrings
        var stemNames = ["math", "physic", "chemistry", "medicine", "engineering", "neuro", "bio"];
        var containsName = function(name) {
          return !(s.toLowerCase().indexOf(name) === -1);
        }
        // array of true or false, where true if includes any of stemNames
        var res = stemNames.map(containsName);
        // return true if _any_ of the results are true
        return res.some(function(b){ return b === true ;})
    }

    // filter out asmdData that's a stem!
    var myStems = this.asmdData.filter(function(element){
      var toInspect = element['Discipline'];
      if(toInspect.length < 1){ return false; }
      return isStem(toInspect);
    })

    // we need this to convert a date of the form 2000 to 2000-01-01:12:00:000
    var parseDate = d3.timeParse("%Y");

    // Set the ranges of x and y
    var x = d3.scaleTime()
        .rangeRound([0,this.width])
        .domain([new Date(1980, 1, 1), new Date(2018, 12, 31)])

    // create a histogram
    var histogram = d3.histogram()
      .domain(x.domain())
      .thresholds(x.ticks(38))
      .value(function(d) { return parseDate(d['Outcome Year']);})
    
    var bins = histogram(myStems);

    console.log(bins)

    // Y axis: scale and draw:
    var y = d3.scaleLinear()
      .range([this.height, 0]);
      y.domain([0, d3.max(bins, function(d) { return d.length; })]);

    // takes a string of format 'Incident 1234`
    // and returns `1234`
    var parseIncidentNumber = function(s) {
        return s.split(' ')[1];
    };

    console.log("🤟 nr stems: ", myStems.length);
 
    // this is the main graph
    const svg = d3
      .select(this.$refs.asmdCircleGraphSVG)
      .attr("width", this.width)
      .attr("height", this.height);

    // append the bar rectangles to the svg element
    svg.selectAll("rect")
      .data(bins)
      .enter()
      .append("rect")
        .attr("x", 1)
        .attr("transform", function(d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; })
        .attr("width", function(d) { return (d.x1) - x(d.x0) -1 ; })
        .attr("height", function(d) { return y(d.length); })
        .style("fill", "#29b3a2")

    // add x axis
    svg.append("g")
      .style("font", "12px futura-pt")
      .attr("class", "axis axis--x")
      .call(d3.axisBottom(x));

    // add y axis
    svg.append("g")
      .style("font", "12px futura-pt")
      .attr("class", "axis axis--y")
      .call(d3.axisRight(y));

  },
  watch: {
    }
};
</script>

