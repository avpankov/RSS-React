import { IProduct } from 'interfaces';
import React, { createRef, FormEvent, RefObject } from 'react';
import { Form } from 'react-router-dom';
import { determineTodaysDate } from '../utils/utils';
import products from '../data/products.json';
import ListOfCards from './ListOfCards';

interface FormStateType {
  productImageUrl: string;
  products: IProduct[];
}

class MyForm extends React.Component<unknown, FormStateType> {
  title: RefObject<HTMLInputElement>;
  description: RefObject<HTMLTextAreaElement>;
  price: RefObject<HTMLInputElement>;
  discountPercentage: RefObject<HTMLInputElement>;
  rating: RefObject<HTMLInputElement>;
  stock: RefObject<HTMLInputElement>;
  brand: RefObject<HTMLInputElement>;
  category: RefObject<HTMLSelectElement>;
  thumbnail: RefObject<HTMLInputElement>;
  images: RefObject<HTMLInputElement>;
  date: RefObject<HTMLInputElement>;
  agreement: RefObject<HTMLInputElement>;
  notifications: RefObject<HTMLDivElement>;

  constructor(props: IProduct) {
    super(props);
    this.title = createRef();
    this.description = createRef();
    this.price = createRef();
    this.discountPercentage = createRef();
    this.rating = createRef();
    this.stock = createRef();
    this.brand = createRef();
    this.category = createRef();
    this.thumbnail = createRef();
    this.images = createRef();
    this.date = createRef();
    this.agreement = createRef();
    this.notifications = createRef();
    this.state = {
      productImageUrl: '',
      products: products.products,
    };
  }

  handleUploadedImage() {
    const files = (this.thumbnail.current?.files as FileList)[0];
    if (files) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(files);
      fileReader.onload = () => {
        if (typeof fileReader.result === 'string') {
          this.setState({ productImageUrl: fileReader.result });
        }
      };
    }
  }

  handleRadioValue() {
    const radio = this.notifications.current;
    const inputs = radio?.querySelectorAll('input') as NodeListOf<HTMLInputElement>;
    const arr = Array.from(inputs);
    console.log(determineTodaysDate());
    return arr.find((el) => el.checked)?.value;
  }

  handleSubmit(event: FormEvent) {
    const arr = this.state.products;
    const newProduct: IProduct = {
      id: arr.length + 1,
      title: this.title.current ? this.title.current.value : '',
      description: this.description.current ? this.description.current.value : '',
      price: this.price.current ? Number(this.price.current.value) : 0,
      discountPercentage: this.discountPercentage.current
        ? Number(this.discountPercentage.current.value)
        : 0,
      brand: this.brand.current ? this.brand.current.value : '',
      category: this.category.current ? this.category.current.value : '',
      thumbnail: this.state.productImageUrl,
      images: null,
      agreement: this.agreement.current ? this.agreement.current.checked : false,
      notifications: this.handleRadioValue(),
    };
    arr.push(newProduct);
    this.setState({ products: arr });
    console.log(this.state.products);
    event.preventDefault();
  }

  render() {
    return (
      <div className="container mx-auto">
        <div className="w-1/2 mx-auto py-6">
          <h2 className="text-xl font-semibold">New product form</h2>
          <Form onSubmit={(event) => this.handleSubmit(event)}>
            <div className="my-6">
              <label className="flex w-full items-center">
                <span className="w-[32%] font-semibold">Product name</span>
                <input
                  type="text"
                  name="title"
                  ref={this.title}
                  className="w-[68%] h-[48px] p-4 rounded-md border border-slate-200 outline-brand"
                />
              </label>
            </div>
            <div className="my-6">
              <label className="flex w-full items-center">
                <span className="w-[32%] font-semibold">Brand name</span>
                <input
                  type="text"
                  name="brand"
                  ref={this.brand}
                  className="w-[68%] h-[48px] p-4 rounded-md border border-slate-200 outline-brand"
                />
              </label>
            </div>
            <div className="my-6">
              <label className="flex w-full items-center">
                <span className="w-[32%] font-semibold">Category</span>
                <select
                  name="category"
                  ref={this.category}
                  className="w-[68%] h-[48px] px-4 py-2 rounded-md border border-slate-200 outline-brand"
                >
                  <option value="smartphones">smartphones</option>
                  <option value="laptops">laptops</option>
                  <option value="fragrances">fragrances</option>
                  <option value="skincare">skincare</option>
                  <option value="groceries">groceries</option>
                  <option value="home">home-decoration</option>
                  <option value="furniture">furniture</option>
                  <option value="tops">tops</option>
                  <option value="womens-dresses">womens-dresses</option>
                  <option value="womens-shoes">womens-shoes</option>
                  <option value="mens-shirts<">mens-shirts</option>
                  <option value="mens-shoes">mens-shoes</option>
                  <option value="mens-watches">mens-watches</option>
                  <option value="womens-watches">womens-watches</option>
                  <option value="womens-bags">womens-bags</option>
                  <option value="womens-jewellery">womens-jewellery</option>
                  <option value="sunglasses">sunglasses</option>
                  <option value="automotive">automotive</option>
                  <option value="motorcycle">motorcycle</option>
                  <option value="lighting">lighting</option>
                </select>
              </label>
            </div>
            <div className="my-6">
              <label className="flex w-full items-center">
                <span className="w-[32%] font-semibold">Price ($)</span>
                <input
                  type="number"
                  name="price"
                  min={1}
                  ref={this.price}
                  className="w-[68%] h-[48px] p-4 rounded-md border border-slate-200 outline-brand"
                />
              </label>
            </div>
            <div className="my-6">
              <label className="flex w-full items-center">
                <span className="w-[32%] font-semibold">Discount (%)</span>
                <input
                  type="number"
                  name="price"
                  min={1}
                  max={99}
                  ref={this.discountPercentage}
                  className="w-[68%] h-[48px] p-4 rounded-md border border-slate-200 outline-brand"
                />
              </label>
            </div>
            <div className="my-6">
              <label className="flex w-full items-center">
                <span className="w-[32%] font-semibold">Delivery availability from</span>
                <input
                  type="date"
                  name="date"
                  min={determineTodaysDate()}
                  ref={this.date}
                  className="w-[68%] h-[48px] p-4 rounded-md border border-slate-200 outline-brand"
                />
              </label>
            </div>
            <div className="my-6">
              <label className="flex w-full items-center">
                <span className="w-[32%] font-semibold">Agreement to terms of use</span>
                <input type="checkbox" name="agreement" ref={this.agreement} />
              </label>
            </div>
            <div className="my-6">
              <div className="flex w-full items-center">
                <span className="w-[32%] font-semibold">
                  Receive notifications about promo, sales, etc.
                </span>
                <div className="flex space-x-4" ref={this.notifications}>
                  <label className="flex items-center space-x-1">
                    <input type="radio" name="notifications" value="on" defaultChecked />
                    <span>on</span>
                  </label>
                  <label className="flex items-center space-x-1">
                    <input type="radio" name="notifications" value="off" />
                    <span>off</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="my-6">
              <label className="flex w-full items-center">
                <span className="w-[32%] font-semibold">Upload image</span>
                <input
                  type="file"
                  name="thumbnail"
                  ref={this.thumbnail}
                  accept=".jpg, .jpeg, .png"
                  onChange={() => this.handleUploadedImage()}
                />
              </label>
            </div>
            <div className="my-6">
              <label className="flex w-full items-center">
                <span className="w-[32%] font-semibold">Description</span>
                <textarea
                  name="description"
                  ref={this.description}
                  rows={3}
                  className="w-[68%] px-4 py-2 rounded-md border border-slate-200 outline-brand"
                ></textarea>
              </label>
            </div>
            <div className="space-x-4">
              <button
                type="submit"
                className="h-10 px-6 font-semibold rounded-md bg-brand text-white"
              >
                Save
              </button>
              <button
                type="button"
                className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
              >
                Cancel
              </button>
            </div>
          </Form>
        </div>
        <section className="flex flex-row flex-wrap justify-start gap-6">
          <ListOfCards products={this.state.products.filter((product) => product.notifications)} />
        </section>
      </div>
    );
  }
}

export default MyForm;
