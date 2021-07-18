import {FormControl, InputGroup} from "react-bootstrap";
import {Component} from "react";

export class Cylinder extends Component{

    onChangeCylinderCount(event){
        if(this.props.onChange){
            this.props.onChange(this.props.id, "cylinder_count", event.target.value)
        }
    }
    onChangeCylinderVolume(event){
        if(this.props.onChange){
            this.props.onChange(this.props.id, "cylinder_volume", event.target.value)
        }
    }
    onChangeCylinderATM(event){
        if(this.props.onChange){
            this.props.onChange(this.props.id, "cylinder_atm", event.target.value)
        }
    }
    removeCylinder(event){
        this.props.removeCylinder(this.props.id)
    }

    render(){
        return(<InputGroup className="mb-3">
            <InputGroup.Text>Set {this.props.id+1}</InputGroup.Text>
            <InputGroup.Text>#</InputGroup.Text>
            <FormControl type={"number"} value={this.props.cylinder_count} aria-label={""} onChange={this.onChangeCylinderCount.bind(this)}/>
            <InputGroup.Text>{"Cylinders with Volume"}</InputGroup.Text>
            <FormControl type={"number"} value={this.props.cylinder_volume} aria-label={""} onChange={this.onChangeCylinderVolume.bind(this)}/>
            <InputGroup.Text>{"litres at full pressure"}</InputGroup.Text>
            <FormControl type={"number"} value={this.props.cylinder_atm} aria-label={""} onChange={this.onChangeCylinderATM.bind(this)}/>
            <InputGroup.Text>{"ATM"}</InputGroup.Text>
            <FormControl type={"button"} value="-" className={"removeCylinder"} onClick={this.removeCylinder.bind(this)}/>
        </InputGroup>
        );
    }
}