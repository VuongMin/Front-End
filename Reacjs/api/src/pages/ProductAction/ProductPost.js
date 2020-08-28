import React, { Component } from "react";
import CallApi from "../../utils/CallAPI";
export default class ProductPost extends Component {
  constructor(props) {
    super(props);
    this.state ={
       name:"",
       price:0,
       status:false
    }
  }
  //Load data into form 
  componentDidMount() {
    var {match} =this.props;
     if(match){
        CallApi("GET",`products/${match.params.id}`,'json',null).then(res=>{
          if(res.data){
            this.setState({
                name:res.data.name,
                id: res.data.id,
                price:res.data.price,
                status:res.data.status
            })
          }
        })
     }
  }
  fnOnchange =(e)=>{
      var {value,name} =e.target;
      if(e.target.type ==="checkbox"){
          value = (Boolean)(value);
      }
      this.setState({[name]:value});
  }
  fnOnsumt =(e)=>{
    e.preventDefault();
    var {match} =this.props;
    if(match){
       CallApi("PUT",`products/${match.params.id}`,'json',this.state).then(res=>{
           if(res.status===200){
            var {history} = this.props;
            history.goBack();
           }
       })
    }else{
     
      CallApi("POST","products","json",this.state).then(res=>{
         if(res.status ===201){
            var {history} = this.props;
            history.goBack();
         }
      })
    }
  }
  render() {
    return (
      <form onSubmit={(e)=>this.fnOnsumt(e)} className="needs-validation container" noValidate>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationCustom01"> Product name:</label>
            <input
            onChange = {(e)=> this.fnOnchange(e)}
              type="text"
              className="form-control"
              id="validationCustom01"
            
              name="name"
              placeholder={this.state.name}
              required
            />
           
          </div>
         
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationCustom03">Price</label>
            <input
            onChange = {(e)=> this.fnOnchange(e)}
              type="number"
              className="form-control"
              id="validationCustom03"
              name="price"
              placeholder={this.state.price}
              required
            />
           
          </div>
          
        </div>
        <div className="form-group">
          <div className="form-check">
            <input
            onChange = {(e)=> this.fnOnchange(e)}
              className="form-check-input"
              type="checkbox"
             checked={this.state.status}
              id="invalidCheck"
              name="status"
              required
            />
            <label className="form-check-label" htmlFor="invalidCheck">
              Agree to terms and conditions
            </label>
          
          </div>
        </div>
        <button className="btn btn-primary" type="submit">
          Submit form
        </button>
      </form>
    );
  }
}
