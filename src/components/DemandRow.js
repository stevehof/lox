import {Component} from "react";
import {FormControl} from "react-bootstrap";


export class DemandRow extends Component{

    onFlowReqChange(event){
        this.props.onChangeDemand(this.props.id, "flow_req", event.target.value)
    }
    onPatientsChange(event){
        this.props.onChangeDemand(this.props.id, "patients", event.target.value)

    }

    render(){
      return(<tr>
          <td className="text-sm-start align-middle form-control-sm">{this.props.what}</td>
          <td><FormControl type={"number"} value={this.props.patients} aria-label={this.props.tooltip} onChange={this.onPatientsChange.bind(this)}/></td>
          <td className="text-sm-center align-middle form-control-sm">{this.props.criterion}</td>
            <td><FormControl type={"number"} value={this.props.flow_req} aria-label={this.props.tooltip} onChange={this.onFlowReqChange.bind(this)}/></td>
          <td><FormControl type={"number"} value={this.props.use_per_category || this.props.patients*this.props.flow_req} aria-label={this.props.tooltip} readOnly={true} /></td>

        </tr>
      );
    }
}