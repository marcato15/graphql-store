import React, { Component } from "react";
import LoadProducts from "./queries/LoadProducts";

class ProductForm extends Component {

    constructor(props){
        super(props);
		const { id, title, price, desc } = props;
		this.state = { id, title, price, desc };
        this.updateField = this.updateField.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

	submitForm(event){
		event.preventDefault();	
		this.props.mutate({
			variables: this.state,
			refetchQueries: [LoadProducts]
		});
		this.props.onSubmit();
	}

    updateField(event){
		const { name, value } = event.target;
        this.setState({[name]: value});
    }

    render(){
        return(
            <form  onSubmit={this.submitForm}>
				<div>
					<label for="title">Title:</label>
					<input type="text" value={this.state.title} name="title" onChange={this.updateField} />
				</div>
				<div>
					<label for="title">Price:</label>
					<input type="text" value={this.state.price} name="price" onChange={this.updateField} />
				</div>
				<div>
					<label for="title">Desc:</label>
					<input type="text" value={this.state.desc} name="desc" onChange={this.updateField} />
				</div>
				<div>
					<input type="submit" value="Submit" />
				</div>
            </form>
        );
    }

}

export default ProductForm;
