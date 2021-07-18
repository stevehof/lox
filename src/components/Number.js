import {FormControl, InputGroup} from "react-bootstrap";
import {Component} from "react";


export class Number extends Component{

    onChange(event){
        if(this.props.onChange){
            this.props.onChange(this.props.item, event.target.value)
        }
    }

    render(){
        return(<InputGroup className="mb-3">
            <InputGroup.Text>{this.props.label}</InputGroup.Text>
            <FormControl readOnly={this.props.readonly} type={"number"} value={this.props.value} aria-label={this.props.tooltip} onChange={this.onChange.bind(this)}/>
                {this.props.suffix ? <InputGroup.Text>{this.props.suffix}</InputGroup.Text> : null }
        </InputGroup>
        );
    }
}