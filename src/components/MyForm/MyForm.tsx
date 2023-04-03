import { IProduct } from 'interfaces';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Form } from 'react-router-dom';
import productsData from '../../data/products.json';
import ListOfCards from '../ListOfCards/ListOfCards';
import { determineTodaysDate } from '../../utils/utils';
import { ReactComponent as IconCheck } from '../../assets/icons/check.svg';
import { FieldValues, useForm } from 'react-hook-form';

function MyForm() {
  const [message, setMessage] = useState(false);
  const [products, setProducts] = useState<IProduct[]>(productsData.products);
  const [file, setFile] = useState<File>();
  const [fileDataURL, setFileDataURL] = useState('');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  useEffect(() => {
    let fileReader: FileReader;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = () => {
        if (typeof fileReader.result === 'string') {
          setFileDataURL(fileReader.result);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  const onSubmit = (data: FieldValues) => {
    const arr: IProduct[] = products;

    const newProduct: IProduct = {
      id: arr.length + 1,
      title: data.title,
      description: data.description,
      price: Number(data.price),
      discountPercentage: Number(data.discount),
      stock: Number(data.stock),
      brand: data.brand,
      category: data.category,
      thumbnail: fileDataURL,
      delivery: data.delivery,
      tracking: data.tracking,
      new: true,
    };

    arr.push(newProduct);
    setProducts(arr);
    setMessage(true);
    setTimeout(() => {
      setMessage(false);
    }, 3000);
    reset();
  };

  return (
    <div className="container mx-auto">
      {
        <div
          className={`fixed flex items-center space-x-3 px-5 py-3 bg-green-500 text-white rounded-md right-2 top-[6px] opacity-0 duration-[0.3s] select-none ${
            message && 'opacity-100'
          }`}
        >
          <span>
            <IconCheck className="w-[22px] h-[22px] fill-white" />
          </span>
          <span className="font-semibold">Data has been saved</span>
        </div>
      }
      <div className="w-1/2 mx-auto py-6">
        <h2 className="text-xl font-semibold">New product form</h2>
        <Form onSubmit={handleSubmit(onSubmit)} onReset={() => reset()} name="myForm">
          <div className="my-6">
            <label className="flex w-full items-center relative">
              <span className="w-[32%] font-semibold">Product title</span>
              <input
                type="text"
                className={`${
                  errors.title ? 'border-2 border-red-500' : 'border border-slate-200'
                } w-[68%] h-[48px] p-4 rounded-md outline-brand`}
                {...register('title', { required: true })}
              />
              <span
                className={`${
                  errors.title ? 'visible' : 'invisible'
                } absolute -bottom-5 left-[32%] text-red-500 text-sm`}
              >
                This field is required.
              </span>
            </label>
          </div>
          <div className="my-6">
            <label className="flex w-full items-center relative">
              <span className="w-[32%] font-semibold">Brand</span>
              <input
                type="text"
                {...register('brand', { required: true })}
                className={`${
                  errors.brand ? 'border-2 border-red-500' : 'border border-slate-200'
                } w-[68%] h-[48px] p-4 rounded-md outline-brand`}
              />
              <span
                className={`${
                  errors.brand ? 'visible' : 'invisible'
                } absolute -bottom-5 left-[32%] text-red-500 text-sm`}
              >
                This field is required.
              </span>
            </label>
          </div>
          <div className="my-6">
            <label className="flex w-full items-center relative">
              <span className="w-[32%] font-semibold">Category</span>
              <select
                defaultValue=""
                {...register('category', { required: 'Choose category' })}
                className={`${
                  errors.category ? 'border-2 border-red-500' : 'border border-slate-200'
                } w-[68%] h-[48px] px-4 py-2 rounded-md outline-brand`}
              >
                <option value="" disabled>
                  Choose category
                </option>
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
              <span
                className={`${
                  errors.category ? 'visible' : 'invisible'
                } absolute -bottom-5 left-[32%] text-red-500 text-sm`}
              >
                This field is required.
              </span>
            </label>
          </div>
          <div className="my-6">
            <label className="flex w-full items-center relative">
              <span className="w-[32%] font-semibold">Price ($)</span>
              <input
                type="number"
                {...register('price', { required: true, min: 1 })}
                className={`${
                  errors.price ? 'border-2 border-red-500' : 'border border-slate-200'
                } w-[68%] h-[48px] p-4 rounded-md outline-brand`}
              />
              <span
                className={`${
                  errors.price ? 'visible' : 'invisible'
                } absolute -bottom-5 left-[32%] text-red-500 text-sm`}
              >
                This field is required.
              </span>
            </label>
          </div>
          <div className="my-6">
            <label className="flex w-full items-center relative">
              <span className="w-[32%] font-semibold">Discount (%)</span>
              <input
                type="number"
                {...register('discount', { required: true, min: 1, max: 99 })}
                className={`${
                  errors.discount ? 'border-2 border-red-500' : 'border border-slate-200'
                } w-[68%] h-[48px] p-4 rounded-md outline-brand`}
              />
              <span
                className={`${
                  errors.discount ? 'visible' : 'invisible'
                } absolute -bottom-5 left-[32%] text-red-500 text-sm`}
              >
                This field is required.
              </span>
            </label>
          </div>
          <div className="my-6">
            <label className="flex w-full items-center relative">
              <span className="w-[32%] font-semibold">Stock</span>
              <input
                type="number"
                {...register('stock', { required: true, min: 1 })}
                className={`${
                  errors.stock ? 'border-2 border-red-500' : 'border border-slate-200'
                } w-[68%] h-[48px] p-4 rounded-md outline-brand`}
              />
              <span
                className={`${
                  errors.stock ? 'visible' : 'invisible'
                } absolute -bottom-5 left-[32%] text-red-500 text-sm`}
              >
                This field is required.
              </span>
            </label>
          </div>
          <div className="my-6">
            <label className="flex w-full items-center relative">
              <span className="w-[32%] font-semibold">Delivery availability from</span>
              <input
                type="date"
                min={determineTodaysDate()}
                {...register('date', { required: true })}
                className={`${
                  errors.date ? 'border-2 border-red-500' : 'border border-slate-200'
                } w-[68%] h-[48px] p-4 rounded-md outline-brand`}
              />
              <span
                className={`${
                  errors.date ? 'visible' : 'invisible'
                } absolute -bottom-5 left-[32%] text-red-500 text-sm`}
              >
                This field is required.
              </span>
            </label>
          </div>
          <div className="my-6">
            <label className="flex w-full items-center relative">
              <span className="w-[32%] font-semibold">Free delivery</span>
              <input type="checkbox" {...register('delivery')} />
            </label>
          </div>
          <div className="my-6">
            <div className="flex w-full items-center relative">
              <span className="w-[32%] font-semibold">Track delivery status</span>
              <div className="flex space-x-4" {...register('tracking')}>
                <label className="flex items-center space-x-1">
                  <input type="radio" name="tracking" value="on" />
                  <span>on</span>
                </label>
                <label className="flex items-center space-x-1">
                  <input type="radio" name="tracking" value="off" defaultChecked />
                  <span>off</span>
                </label>
              </div>
            </div>
          </div>
          <div className="my-6">
            <label className="flex w-full items-center relative">
              <span className="w-[32%] font-semibold">Upload image</span>
              <input
                type="file"
                {...register('thumbnail', { required: true })}
                accept=".jpg, .jpeg, .png"
                onChange={(e) => handleFileChange(e)}
              />
              <span
                className={`${
                  errors.thumbnail ? 'visible' : 'invisible'
                } absolute -bottom-5 left-[32%] text-red-500 text-sm`}
              >
                This field is required.
              </span>
            </label>
          </div>
          <div className="my-6">
            <label className="flex w-full items-center relative">
              <span className="w-[32%] font-semibold">Description</span>
              <textarea
                {...register('description')}
                rows={2}
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
              type="reset"
              className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
            >
              Cancel
            </button>
          </div>
        </Form>
      </div>
      {products.filter((product) => product.new).length > 0 && (
        <h2 className="text-xl font-semibold mb-6">List of my products</h2>
      )}
      <section className="flex flex-row flex-wrap justify-start gap-6 mb-6">
        <ListOfCards products={products.filter((product) => product.new)} />
      </section>
    </div>
  );
}

export default MyForm;
