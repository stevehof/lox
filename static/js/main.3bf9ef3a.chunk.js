(this.webpackJsonplox=this.webpackJsonplox||[]).push([[0],{33:function(e,t,n){},34:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(16),r=n.n(i),l=(n(33),n(6)),c=n(7),o=n(9),h=n(8),d=(n(34),n(48)),u=n(47),p=n(51),j=n(50),b=n(49),x=n(45),m=n(24),y=n(46),O=(n(35),n(1)),_=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(c.a)(n,[{key:"onChange",value:function(e){this.props.onChange&&this.props.onChange(this.props.item,e.target.value)}},{key:"render",value:function(){return Object(O.jsxs)(x.a,{className:"mb-3",children:[Object(O.jsx)(x.a.Text,{children:this.props.label}),Object(O.jsx)(m.a,{readOnly:this.props.readonly,type:"number",value:this.props.value,"aria-label":this.props.tooltip,onChange:this.onChange.bind(this)}),this.props.suffix?Object(O.jsx)(x.a.Text,{children:this.props.suffix}):null]})}}]),n}(a.Component),g=(n(40),function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(c.a)(n,[{key:"onChangeCylinderCount",value:function(e){this.props.onChange&&this.props.onChange(this.props.id,"cylinder_count",e.target.value)}},{key:"onChangeCylinderVolume",value:function(e){this.props.onChange&&this.props.onChange(this.props.id,"cylinder_volume",e.target.value)}},{key:"onChangeCylinderATM",value:function(e){this.props.onChange&&this.props.onChange(this.props.id,"cylinder_atm",e.target.value)}},{key:"removeCylinder",value:function(e){this.props.removeCylinder(this.props.id)}},{key:"render",value:function(){return Object(O.jsxs)(x.a,{className:"mb-3",children:[Object(O.jsxs)(x.a.Text,{children:["Set ",this.props.id+1]}),Object(O.jsx)(x.a.Text,{children:"#"}),Object(O.jsx)(m.a,{type:"number",value:this.props.cylinder_count,"aria-label":"",onChange:this.onChangeCylinderCount.bind(this)}),Object(O.jsx)(x.a.Text,{children:"Cylinders with Volume"}),Object(O.jsx)(m.a,{type:"number",value:this.props.cylinder_volume,"aria-label":"",onChange:this.onChangeCylinderVolume.bind(this)}),Object(O.jsx)(x.a.Text,{children:"litres at full pressure"}),Object(O.jsx)(m.a,{type:"number",value:this.props.cylinder_atm,"aria-label":"",onChange:this.onChangeCylinderATM.bind(this)}),Object(O.jsx)(x.a.Text,{children:"ATM"}),Object(O.jsx)(m.a,{type:"button",value:"-",className:"removeCylinder",onClick:this.removeCylinder.bind(this)})]})}}]),n}(a.Component)),f=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(e){return Object(l.a)(this,n),t.call(this,e)}return Object(c.a)(n,[{key:"onFlowReqChange",value:function(e){this.props.onChangeDemand(this.props.id,"flow_req",e.target.value)}},{key:"onPatientsChange",value:function(e){this.props.onChangeDemand(this.props.id,"patients",e.target.value)}},{key:"render",value:function(){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{className:"text-sm-start align-middle form-control-sm",children:this.props.what}),Object(O.jsx)("td",{children:Object(O.jsx)(m.a,{type:"number",value:this.props.patients,"aria-label":this.props.tooltip,onChange:this.onPatientsChange.bind(this)})}),Object(O.jsx)("td",{className:"text-sm-center align-middle form-control-sm",children:this.props.criterion}),Object(O.jsx)("td",{children:Object(O.jsx)(m.a,{type:"number",value:this.props.flow_req,"aria-label":this.props.tooltip,onChange:this.onFlowReqChange.bind(this)})}),Object(O.jsx)("td",{children:Object(O.jsx)(m.a,{type:"number",value:this.props.use_per_category||this.props.patients*this.props.flow_req,"aria-label":this.props.tooltip,readOnly:!0})})]})}}]),n}(a.Component),v=n(27),C=function(e){Object(o.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={vie_total_supply:47,lox_exp_ratio:861,lox_l_per_kg:.8767,ambient_pressure:1013,cylinders:[{cylinder_count:1,cylinder_volume:2,cylinder_atm:134}],litres_per_min_use:1835,tons_per_day_usage:3.5,litres_per_min_capacity:3e3,demand_prediction:[{what:"Ventilated patients",criterion:"liters/min per vent:",patients:30,flow_req:40},{what:"CPAP systems",criterion:"",patients:10,flow_req:30},{what:"HFNC systems",criterion:"",patients:6,flow_req:60},{what:"Face-mask Oxygen",criterion:"",patients:50,flow_req:10},{what:'"Double-barrel" NPO2:',criterion:"",patients:5,flow_req:15},{what:"Patients on NPO2",criterion:"liters/min per pt:",patients:20,flow_req:5},{what:"Patients under anaesthesia",criterion:"liters/min average:",patients:10,flow_req:2}]},a}return Object(c.a)(n,[{key:"onChange",value:function(e,t){var n={};n[e]=t,this.setState(n)}},{key:"onChangeCylinder",value:function(e,t,n){var a=this.state;a.cylinders[e][t]=n,this.setState(a)}},{key:"onChangeDemand",value:function(e,t,n){var a=this.state;a.demand_prediction[e][t]=n,this.setState(a)}},{key:"addCylinder",value:function(){var e=this.state.cylinders;e.push({cylinder_count:0,cylinder_volume:0,cylinder_atm:0}),this.setState({cylinders:e})}},{key:"removeCylinder",value:function(e){if(1!==this.state.cylinders.length){var t=this.state.cylinders;t.pop(e),this.setState({cylinders:t})}}},{key:"render",value:function(){var e=this,t=this.state.lox_exp_ratio*this.state.lox_l_per_kg*1e3,n=Math.round(this.state.vie_total_supply*t),a=this.state.cylinders.map((function(e){return e.cylinder_volume*e.cylinder_atm*e.cylinder_count})).reduce((function(e,t,n){return e+t})),s=this.state.cylinders.map((function(t,n){return Object(O.jsx)(g,{id:n,cylinder_count:t.cylinder_count,cylinder_volume:t.cylinder_volume,cylinder_atm:t.cylinder_atm,removeCylinder:e.removeCylinder.bind(e),onChange:e.onChangeCylinder.bind(e)},n)}));return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsxs)("header",{className:"App-header",children:["Oxygen supply/demand calculator",Object(O.jsx)("div",{className:"subHeader text-secondary",children:"Figures entered here are for GSH but feel free to copy and use"})]}),Object(O.jsx)("body",{className:"App-body",children:Object(O.jsx)(d.a,{style:{width:"836px"},children:Object(O.jsxs)(u.a,{defaultActiveKey:"0",children:[Object(O.jsx)(u.a.Toggle,{as:p.a,className:!0,eventKey:"config",style:{position:"fixed",right:"10px",top:"5px"},children:Object(O.jsx)(v.a,{size:30})}),Object(O.jsx)(u.a.Collapse,{eventKey:"config",children:Object(O.jsx)(j.a,{className:"extra-margin",children:Object(O.jsxs)(j.a.Body,{children:[Object(O.jsx)(_,{label:"Ambient Pressure",value:this.state.ambient_pressure,onChange:this.onChange.bind(this),item:"ambient_pressure",suffix:"mBar"}),Object(O.jsx)(_,{label:"LOx - Expansion Ratio",value:this.state.lox_exp_ratio,onChange:this.onChange.bind(this),item:"lox_exp_ratio",suffix:"x STP"}),Object(O.jsx)(_,{label:"LOx - Litre per KG",value:this.state.lox_l_per_kg,onChange:this.onChange.bind(this),item:"lox_l_per_kg",suffix:"Litres"})]})})}),Object(O.jsxs)(j.a,{children:[Object(O.jsx)(j.a.Header,{children:"Supply"}),Object(O.jsxs)(j.a.Body,{children:[Object(O.jsx)("span",{className:"subHeader",children:"LOx Supply"}),Object(O.jsx)(_,{label:"VIE Total Supply",value:this.state.vie_total_supply,tooltip:"",onChange:this.onChange.bind(this),item:"vie_total_supply",suffix:"tons (excludes 1 ton minimum remaining volume)",children:"test"}),Object(O.jsx)(_,{label:"VIE Total Supply",value:n,tooltip:"",suffix:"litres (at ambient)",readonly:!0}),Object(O.jsx)(p.a,{onClick:this.addCylinder.bind(this),style:{float:"left"},size:"sm",children:" + "}),Object(O.jsx)("span",{className:"subHeader",children:"Bank Supply"}),Object(O.jsx)("br",{}),Object(O.jsx)(b.a,{children:Object(O.jsx)(b.a.Item,{children:s})}),Object(O.jsx)(_,{label:"at Full Pressure",value:a,tooltip:"",suffix:"Litres at ambient",readonly:!0})]})]}),Object(O.jsxs)(j.a,{className:"extra-margin",children:[Object(O.jsx)(j.a.Header,{children:"Usage"}),Object(O.jsxs)(j.a.Body,{children:[Object(O.jsxs)(x.a,{className:"mb-3",children:[Object(O.jsx)(x.a.Text,{children:"LOx used at"}),Object(O.jsx)(m.a,{type:"number",value:this.state.tons_per_day_usage,onChange:function(t){e.onChange("tons_per_day_usage",t.target.value)},onBlur:function(n){e.onChange("litres_per_min_use",(n.target.value*t/1440).toFixed(2))}}),Object(O.jsx)(x.a.Text,{children:"Tons/Day"}),Object(O.jsx)(m.a,{type:"number",value:this.state.litres_per_min_use,onChange:function(t){e.onChange("litres_per_min_use",t.target.value)},onBlur:function(n){e.onChange("tons_per_day_usage",(24*n.target.value*60/t).toFixed(2))}}),Object(O.jsx)(x.a.Text,{children:"litres/min average"})]}),Object(O.jsxs)(x.a,{className:"mb-3",children:[Object(O.jsx)(x.a.Text,{children:"LOx Supplied from Engineering:"}),Object(O.jsx)(m.a,{type:"number",value:this.state.litres_per_min_capacity,onChange:function(t){e.onChange("litres_per_min_capacity",t.target.value)}})]}),Object(O.jsxs)(x.a,{className:"mb-3",children:[Object(O.jsx)(x.a.Text,{children:"LOx available at current rate:"}),Object(O.jsx)(m.a,{type:"number",value:((n+a)/this.state.litres_per_min_use).toFixed(1)}),Object(O.jsx)(x.a.Text,{children:"Max Rate based on Supply:"}),Object(O.jsx)(m.a,{type:"number",value:((n+a)/this.state.litres_per_min_capacity).toFixed(1)}),Object(O.jsx)(x.a.Text,{children:"Minutes"})]}),Object(O.jsxs)(x.a,{className:"mb-3",children:[Object(O.jsx)(x.a.Text,{children:"LOx available at current rate:"}),Object(O.jsx)(m.a,{type:"number",value:((n+a)/this.state.litres_per_min_use/60).toFixed(1)}),Object(O.jsx)(x.a.Text,{children:"Max Rate based on Supply:"}),Object(O.jsx)(m.a,{type:"number",value:((n+a)/this.state.litres_per_min_capacity/60).toFixed(1)}),Object(O.jsx)(x.a.Text,{children:"Hours"})]}),Object(O.jsxs)(x.a,{className:"mb-3",children:[Object(O.jsx)(x.a.Text,{children:"LOx available at current rate:"}),Object(O.jsx)(m.a,{type:"number",value:((n+a)/this.state.litres_per_min_use/60/24).toFixed(1)}),Object(O.jsx)(x.a.Text,{children:"Max Rate based on Supply:"}),Object(O.jsx)(m.a,{type:"number",value:((n+a)/this.state.litres_per_min_capacity/60/24).toFixed(1)}),Object(O.jsx)(x.a.Text,{children:"Days"})]})]})]}),Object(O.jsxs)(j.a,{className:"extra-margin",children:[Object(O.jsx)(j.a.Header,{children:"Demand Prediction"}),Object(O.jsxs)(j.a.Body,{children:[Object(O.jsxs)(y.a,{striped:!0,bordered:!0,hover:!0,size:"sm",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{style:{width:"200px"}}),Object(O.jsx)("th",{style:{width:"100px"},className:"form-control-sm",children:"Patients"}),Object(O.jsx)("th",{style:{width:"250px"},className:"form-control-sm",children:"Criterion"}),Object(O.jsx)("th",{className:"form-control-sm",children:"Flow req"}),Object(O.jsx)("th",{className:"form-control-sm",children:"Use per category"})]})}),Object(O.jsxs)("tbody",{children:[Object(O.jsx)(f,{what:"Leakage/Loss",criterion:"liters/min (estimated):",patients:"0.5% of current flow rate",id:"leakage",flow_req:.005*this.state.litres_per_min_use,use_per_category:.005*this.state.litres_per_min_use,onChangeDemand:this.onChangeDemand.bind(this)},"leakage"),this.state.demand_prediction.map((function(t,n){return Object(O.jsx)(f,{what:t.what,criterion:t.criterion,patients:t.patients,id:n,flow_req:t.flow_req,onChangeDemand:e.onChangeDemand.bind(e)},n)}))]})]}),Object(O.jsxs)(x.a,{className:"mb-3",children:[Object(O.jsx)(x.a.Text,{children:"Total Use"}),Object(O.jsx)(m.a,{type:"number",value:.005*this.state.litres_per_min_use+this.state.demand_prediction.map((function(e){return e.flow_req*e.patients})).reduce((function(e,t){return e+t}))}),Object(O.jsx)(x.a.Text,{children:"l/min"})]}),Object(O.jsxs)(x.a,{className:"mb-3",children:[Object(O.jsx)(x.a.Text,{children:"Total Use"}),Object(O.jsx)(m.a,{type:"number",value:60*this.state.demand_prediction.map((function(e){return e.flow_req*e.patients})).reduce((function(e,t){return e+t}))}),Object(O.jsx)(x.a.Text,{children:"l/hr"})]}),Object(O.jsxs)(x.a,{className:"mb-3",children:[Object(O.jsx)(x.a.Text,{children:"Total Use"}),Object(O.jsx)(m.a,{type:"number",value:60*this.state.demand_prediction.map((function(e){return e.flow_req*e.patients})).reduce((function(e,t){return e+t}))*24}),Object(O.jsx)(x.a.Text,{children:"l/day"})]}),Object(O.jsxs)(x.a,{className:"mb-3",children:[Object(O.jsx)(x.a.Text,{children:"Total Use"}),Object(O.jsx)(m.a,{type:"number",value:60*this.state.demand_prediction.map((function(e){return e.flow_req*e.patients})).reduce((function(e,t){return e+t}))*24/t}),Object(O.jsx)(x.a.Text,{children:"tons/day"})]})]})]})]})})})]})}}]),n}(a.Component),T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,52)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),i(e),r(e)}))};r.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(C,{})}),document.getElementById("root")),T()}},[[41,1,2]]]);
//# sourceMappingURL=main.3bf9ef3a.chunk.js.map