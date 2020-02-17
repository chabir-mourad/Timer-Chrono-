import React  ,{Component}from 'react';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';


class Timer extends Component{
   constructor(props){
     super(props);
     this.state ={
       hh:0,
       mm:0,
       ss:0,
       ms:0,
       start:false
     };
     setInterval(()=>{
      if (this.state.start)
      this.setState({
        ms: this.state.ms + 1000,
        hh: parseInt(this.state.ms / 3600000),
        mm: parseInt((this.state.ms % 3600000) / 60000),
        ss: parseInt(((this.state.ms % 3600000) % 60000) / 1000)
      });
  }, 1000);
}
clicked = () =>
this.setState({
  start: !this.state.start
});
reset = () => {
this.setState({
  start: false,
  ms: 0,
  ss: 0,
  mm: 0,
  hh: 0
});
};
render() {
  return (
    <div className="container">
      <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Chronometre</Card.Title>
    <Card.Text>
     <span>   {String(this.state.hh).padStart(2, "0")}</span><span>hh:</span><span>   {String(this.state.mm).padStart(2, "0")}</span><span>mm:</span><span>    {String(this.state.ss).padStart(2, "0")}</span><span>ss:</span>
    </Card.Text>
    <Button variant="primary" onClick={this.clicked}>
    {this.state.start ? "Pause" : "Start"}</Button>
    <Button variant="danger" onClick={this.reset}>Reset</Button>
  </Card.Body>
</Card>
     
    </div>
  );
}
}
export default Timer;