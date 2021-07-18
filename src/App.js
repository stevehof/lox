import './App.css';
import {Accordion, Alert, Button, Card, Form, FormControl, InputGroup, ListGroup, Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Component} from "react";
import {Number} from "./components/Number";
import {Cylinder} from "./components/Cylinder";
import {DemandRow} from "./components/DemandRow";
import {MdSave, MdSettings} from "react-icons/md";

// eslint-disable-next-line no-undef
class App extends Component {
    constructor(props) {
        super(props);
        const savedState = this.getSavedState()
        this.state = savedState || {vie_total_supply: 47,
            lox_exp_ratio: 861,
            lox_l_per_kg: 0.8767,
            ambient_pressure: 1013,
            cylinders: [{cylinder_count:1,
            cylinder_volume:2,
            cylinder_atm:134}],
            litres_per_min_use:1835,
            tons_per_day_usage:3.5,
            litres_per_min_capacity:3000,
            demand_prediction:[
                {what:"Ventilated patients",criterion:"liters/min per vent:",patients:30,flow_req:40},
                {what:"CPAP systems",criterion:"",patients:10,flow_req:30},
                {what:"HFNC systems",criterion:"",patients:6,flow_req:60},
                {what:"Face-mask Oxygen",criterion:"",patients:50,flow_req:10},
                {what:"\"Double-barrel\" NPO2:",criterion:"",patients:5,flow_req:15},
                {what:"Patients on NPO2",criterion:"liters/min per pt:",patients:20,flow_req:5},
                {what:"Patients under anaesthesia",criterion:"liters/min average:",patients:10,flow_req:2},
            ],
            saveAlert:false
        }
    }

    onChange(item, value) {
        let state = {}
        state[item] = value
        this.setState(state)
    }
    onChangeCylinder(id, item, value){
        let state = this.state
        state.cylinders[id][item] = value
        this.setState(state)
    }
    onChangeDemand(id, item, value){
        let state = this.state
        state.demand_prediction[id][item] = value
        this.setState(state)
    }

    addCylinder(){
        let cyls = this.state.cylinders
        cyls.push({cylinder_count:0,
            cylinder_volume:0,
            cylinder_atm:0})
        this.setState({cylinders:cyls})
    }
    removeCylinder(id){
        if (this.state.cylinders.length === 1){
            return
        }
        let cyls = this.state.cylinders
        cyls.pop(id)
        this.setState({cylinders:cyls})
    }
    saveState(){
        this.setState({saveAlert:true})
        let state = this.state
        state.saveAlert = false
        localStorage.setItem('LOxSavedState', JSON.stringify(state));
        setTimeout(this.hideSaveAlert.bind(this), 2000)
    }
    getSavedState(){
        return JSON.parse(localStorage.getItem('LOxSavedState'));
    }
    hideSaveAlert(){
        this.setState({saveAlert:false})
    }
    render() {
        const l_o2_stp = this.state.lox_exp_ratio * this.state.lox_l_per_kg * 1000
        const calculated_supply = Math.round(this.state.vie_total_supply * l_o2_stp)
        const calculated_cylinder_volume = this.state.cylinders.map((cyl)=>{return cyl.cylinder_volume * cyl.cylinder_atm * cyl.cylinder_count}).reduce((total, cyl, i)=>{
            return total+cyl
        })
        let cylinders = this.state.cylinders.map((cylinder, index)=>{
            return <Cylinder key={index} id={index} cylinder_count={cylinder.cylinder_count}
                             cylinder_volume={cylinder.cylinder_volume}
                             cylinder_atm={cylinder.cylinder_atm}
                             removeCylinder={this.removeCylinder.bind(this)}
                             onChange={this.onChangeCylinder.bind(this)}/>
        })

        return (
            <div className="App">

                                <Button variant={"secondary"} style={{position:"fixed",right:"70px",top:"5px"}} onClick={this.saveState.bind(this)}><MdSave size={20}/></Button>
                <header className="App-header">
                Oxygen supply/demand calculator
                    <div className="subHeader text-secondary">Figures entered here are for GSH but feel free to copy and use</div>

                    <br/>
                </header>
                <body className="App-body">
                                {this.state.saveAlert ?   <Alert key={"saved"} variant={"success"} className={"btn-sm"} onClose={this.hideSaveAlert.bind(this)}dismissable> Saved to browser storage </Alert>: null}
                    <Form style={{maxWidth:"836px", width:"100vw"}}>
                    <Accordion defaultActiveKey="0" >
                            <Accordion.Toggle as={Button} variant={"secondary"} eventKey="config" style={{position:"fixed",right:"10px",top:"5px"}}><MdSettings size={20}/></Accordion.Toggle>
                            <Accordion.Collapse eventKey="config">

                            <Card className="extra-margin">

                                <Card.Body>
                                    <Number label={"Ambient Pressure"} value={this.state.ambient_pressure}
                                            onChange={this.onChange.bind(this)} item={"ambient_pressure"}
                                            suffix={"mBar"}/>
                                    <Number label={"LOx - Expansion Ratio"} value={this.state.lox_exp_ratio}
                                            onChange={this.onChange.bind(this)} item={"lox_exp_ratio"}
                                            suffix={"x STP"}/>
                                    <Number label={"LOx - Litre per KG"} value={this.state.lox_l_per_kg}
                                            onChange={this.onChange.bind(this)} item={"lox_l_per_kg"}
                                            suffix={"Litres"}/>
                                </Card.Body>
                        </Card>

                            </Accordion.Collapse>
                        <Card>
                            <Card.Header>Supply</Card.Header>
                            <Card.Body>
                                <div className="internalHeader" >LOx Supply</div>
                                <Number label={"VIE Total Supply"} value={this.state.vie_total_supply}
                                        tooltip={""} onChange={this.onChange.bind(this)} item={"vie_total_supply"}
                                        suffix={"tons (excludes 1 ton minimum remaining volume)"}>test</Number>
                                <Number label={"VIE Total Supply"} value={calculated_supply}
                                        tooltip={""} suffix={"litres (at ambient)"} readonly={true}/>
                                <div className="internalHeader">Bank Supply</div>
                                <ListGroup>
                                    <ListGroup.Item>
                                        {cylinders}
                                                                        <Button variant={"secondary"} onClick={this.addCylinder.bind(this)} style={{float: "left"}} size={"sm"}> + </Button>
                                    </ListGroup.Item>
                                </ListGroup>
                                <Number label={"at Full Pressure"} value={calculated_cylinder_volume}
                                        tooltip={""} suffix={"Litres at ambient"} readonly={true}/>
                            </Card.Body>
                        </Card>
                        <Card className="extra-margin">
                            <Card.Header>Usage</Card.Header>
                            <Card.Body>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>{"LOx used at"}</InputGroup.Text>
                                    <FormControl type={"number"} value={this.state.tons_per_day_usage}
                                                  onChange={(event)=>{this.onChange("tons_per_day_usage", event.target.value)}}
                                                 onBlur={(event)=>{this.onChange("litres_per_min_use", (event.target.value*l_o2_stp/(24*60)).toFixed(2))}}/>
                                    <InputGroup.Text>{"Tons/Day"}</InputGroup.Text>
                                    <FormControl type={"number"} value={this.state.litres_per_min_use}
                                                 onChange={(event)=>{this.onChange("litres_per_min_use", event.target.value)}}
                                                 onBlur={(event)=>{this.onChange("tons_per_day_usage", (event.target.value*24*60/l_o2_stp).toFixed(2))}}/>
                                    <InputGroup.Text>{"litres/min average"}</InputGroup.Text>
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>{"LOx Supplied from Engineering:"}</InputGroup.Text>
                                    <FormControl type={"number"} value={this.state.litres_per_min_capacity} onChange={(event)=>{this.onChange("litres_per_min_capacity", event.target.value)}}/>
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>{"LOx available at current rate:"}</InputGroup.Text>
                                    <FormControl type={"number"} value={((calculated_supply+calculated_cylinder_volume)/this.state.litres_per_min_use).toFixed(1)}/>
                                    <InputGroup.Text>{"Max Rate based on Supply:"}</InputGroup.Text>
                                    <FormControl type={"number"} value={((calculated_supply+calculated_cylinder_volume)/this.state.litres_per_min_capacity).toFixed(1)}/>
                                    <InputGroup.Text>{"Minutes"}</InputGroup.Text>
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>{"LOx available at current rate:"}</InputGroup.Text>
                                    <FormControl type={"number"} value={((calculated_supply+calculated_cylinder_volume)/this.state.litres_per_min_use/60).toFixed(1)}/>
                                    <InputGroup.Text>{"Max Rate based on Supply:"}</InputGroup.Text>
                                    <FormControl type={"number"} value={((calculated_supply+calculated_cylinder_volume)/this.state.litres_per_min_capacity/60).toFixed(1)}/>
                                    <InputGroup.Text>{"Hours"}</InputGroup.Text>
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>{"LOx available at current rate:"}</InputGroup.Text>
                                    <FormControl type={"number"} value={((calculated_supply+calculated_cylinder_volume)/this.state.litres_per_min_use/60/24).toFixed(1)}/>
                                    <InputGroup.Text>{"Max Rate based on Supply:"}</InputGroup.Text>
                                    <FormControl type={"number"} value={((calculated_supply+calculated_cylinder_volume)/this.state.litres_per_min_capacity/60/24).toFixed(1)}/>
                                    <InputGroup.Text>{"Days"}</InputGroup.Text>
                                </InputGroup>
                            </Card.Body>
                        </Card>
                        <Card className="extra-margin">
                            <Card.Header>Demand Prediction</Card.Header>
                            <Card.Body>
                                <Table striped bordered hover size="sm">
                                  <thead>
                                    <tr>
                                      <th style={{width:"200px"}}></th>
                                      <th style={{width:"100px"}} className="form-control-sm">Patients</th>
                                      <th style={{width:"250px"}} className="form-control-sm">Criterion</th>
                                      <th className="form-control-sm">Flow req</th>
                                      <th className="form-control-sm">Use per category</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                  <DemandRow key={"leakage"} what={"Leakage/Loss"} criterion={"liters/min (estimated):"} patients={"0.5% of current flow rate"} id={"leakage"}
                                                        flow_req={this.state.litres_per_min_use*0.005} use_per_category={this.state.litres_per_min_use*0.005} onChangeDemand={this.onChangeDemand.bind(this)}/>
                                  {this.state.demand_prediction.map((demand, id)=>{
                                      return <DemandRow key={id} what={demand.what} criterion={demand.criterion} patients={demand.patients} id={id}
                                                        flow_req={demand.flow_req} onChangeDemand={this.onChangeDemand.bind(this)}/>
                                    })}
                                  </tbody>
                                </Table>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>{"Total Use"}</InputGroup.Text>
                                    <FormControl type={"number"} value={this.state.litres_per_min_use*0.005+this.state.demand_prediction.map((d)=>d.flow_req*d.patients).reduce((a,b)=>a+b)}/>
                                    <InputGroup.Text>{"l/min"}</InputGroup.Text>
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>{"Total Use"}</InputGroup.Text>
                                    <FormControl type={"number"} value={this.state.demand_prediction.map((d)=>d.flow_req*d.patients).reduce((a,b)=>a+b)*60}/>
                                    <InputGroup.Text>{"l/hr"}</InputGroup.Text>
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>{"Total Use"}</InputGroup.Text>
                                    <FormControl type={"number"} value={this.state.demand_prediction.map((d)=>d.flow_req*d.patients).reduce((a,b)=>a+b)*60*24}/>
                                    <InputGroup.Text>{"l/day"}</InputGroup.Text>
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>{"Total Use"}</InputGroup.Text>
                                    <FormControl type={"number"} value={this.state.demand_prediction.map((d)=>d.flow_req*d.patients).reduce((a,b)=>a+b)*60*24/l_o2_stp}/>
                                    <InputGroup.Text>{"tons/day"}</InputGroup.Text>
                                </InputGroup>
                                </Card.Body>
                        </Card>
                    </Accordion>
                    </Form>
                <div className="subHeader text-secondary" style={{fontSize:"15px"}}>Developed by Ross Hofmeyr and coded by Steve Hofmeyr. <a href="https://github.com/stevehof/lox">Source Code</a></div>
                </body>
            </div>
        );
    }
}

export default App;
