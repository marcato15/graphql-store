import React from 'react';
import { shallow } from 'enzyme';
import ProductForm from './ProductForm';

it('Product Form Renders inputs with data from props', () => {
    const wrapper = shallow(<ProductFrom price="foo" title="bar" />);
	const priceInput = <input type="text" value="bar" name="title" /> 
	const titleInput = <input type="text" value="foo" name="price" /> 
    expect(wrapper.contains(priceInput)).toEqual(true);
    expect(wrapper.contains(titleInput)).toEqual(true);
});
