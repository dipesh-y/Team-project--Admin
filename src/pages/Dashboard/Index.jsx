import React from 'react'
import { FaPlus } from "react-icons/fa";
import DashboardBoxes from '../../components/DashboardBoxes'
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import Progress from '../../components/Progress bar';
import { CiEdit } from "react-icons/ci";
import { IoMdEye } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';

const Dashboard = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
   <>
   <div className="w-full bg-white px-5 border bg-[#87c8eb] border-[rgba(9,154,67,0.1)] flex items-center gap-8 mb-5 justify-between rounded-md">
      <div className="info">
        <h1 className="text-[35px] font-[600] font-bold leading-10 mb-3">Good Morning,
          Cameron
        </h1>
        
        <p>Here's What happening on your store today.See the statistics at once.</p>
        <br/>
        <button className="btn-blue !capitalize flex items-center gap-2"> <FaPlus/> Add Product</button>
   </div>
   <img src="https://img.freepik.com/free-vector/shopping-paper-sheet-composition_1284-21402.jpg" srcset="https://img.freepik.com/free-vector/shopping-paper-sheet-composition_1284-21402.jpg?t=st=1761569545~exp=1761573145~hmac=4a2ad604f17947a7727ff26b45dee8ec1c3e9a9b785a2bf0781557a585572015&amp;w=360 360w, https://img.freepik.com/free-vector/shopping-paper-sheet-composition_1284-21402.jpg?t=st=1761569545~exp=1761573145~hmac=4a2ad604f17947a7727ff26b45dee8ec1c3e9a9b785a2bf0781557a585572015&amp;w=740 740w, https://img.freepik.com/free-vector/shopping-paper-sheet-composition_1284-21402.jpg?t=st=1761569545~exp=1761573145~hmac=4a2ad604f17947a7727ff26b45dee8ec1c3e9a9b785a2bf0781557a585572015&amp;w=1060 1060w, https://img.freepik.com/free-vector/shopping-paper-sheet-composition_1284-21402.jpg?t=st=1761569545~exp=1761573145~hmac=4a2ad604f17947a7727ff26b45dee8ec1c3e9a9b785a2bf0781557a585572015&amp;w=1480 1480w, https://img.freepik.com/free-vector/shopping-paper-sheet-composition_1284-21402.jpg?t=st=1761569545~exp=1761573145~hmac=4a2ad604f17947a7727ff26b45dee8ec1c3e9a9b785a2bf0781557a585572015&amp;w=2000 2000w" width="626" height="625" alt="shopping paper sheet composition" fetchpriority="high" sizes="(max-width: 480px) 100vw, (min-aspect-ratio: 626/625) 100%, (max-width: 1024px) calc(100vw - 40px), calc(100vw - 540px)" className="w-[300px] h-[250px] object-cover rounded-md"/>
   </div>
   <DashboardBoxes />





   <div className="card my-3 shadow-md sm:rounded-lg bg-white">
    <div className="flex items-center justify-between px-3 py-5 ">
      <h2 className="text-[18px] font-[600]">  Products</h2>
    </div>


<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right ">
        <thead class="text-xs  uppercase">
            <tr>
                <th scope="col" className="px-6 py-3" width="10%"> 
                    <div className='w-[60px]'> 
                     <Checkbox {...label } size='small' />
                     </div>
                </th>
                <th scope="col" class="px-6 py-3">
                   Product  
                </th>
                <th scope="col" class="px-6 py-3">
                   Category 
                </th>
               <th scope="col" class="px-6 py-3">
                    Sub-Category
                </th>
                
                <th scope="col" class="px-6 py-3">
                   Price 
                </th>
               <th scope="col" class="px-6 py-3">
                  Sales
                   </th>
                <th scope="col" class="px-6 py-3">
                  Action 
                   </th>
            </tr>
        </thead>
        <tbody>
            <tr  className="bg-white border-b dark:border-gray-700 border-gray-200">
                <td className='px-6 py-3'>
                    <div className='w-[60px]'> 
                     <Checkbox {...label} size='small'/>
                     </div>
                </td>
                <td className="px-6 py-2">
                    <div className='flex items-center gap-4'>
                        <div className='w-[65px] h-[65px] rounded-md overflow-hidden group'>
                            <Link to="/product/45745"> 
                            <img  className='w-full group-hover:scale-110 transition-all' src='https://ecme-react.themenate.net/img/products/product-1.jpg'>
                            </img>
                            </Link>
                            
                        </div>

                        <div className='info w-[75%]'>
                            <h4 className='font-[400] text-[12px] leading-4 hover:text-blue-400'>
                                <Link to="/product/45745">
                                VNEED Women Embroidered Rayon Kurta Pant Set | Kurta set for women
                                </Link>
                            </h4>
                            <span className='text-[12px]'>Brooks</span>
                        </div>
                    </div>

                </td>
                <td className="px-6 py-2">
                    electronics 
                </td>
               <td className="px-6 py-2">Women </td>

                
                <td className="px-6 py-2">
                    <div className='flex gap-1 flex-col'>
                        <span className='line-through text-[12px] text-gray-400 mr-2'>$300</span>
                        <span className='font-[600] text-[14px]'>$250</span> 
                    </div>
                </td>


                <td className="px-6 py-2">
                    <p className='text-[16px] w-[150px]  itmes-center'>
                        <span className='font-[600] w-[150px] mr-2'>
                        234
                        </span>
                        sale
                    </p>
                    <Progress value={20} type="success"/>
                 </td>

                <td className="px-6 py-2">
                    <div className='flex items-center gap-4'>
                         <Tooltip title="Edit Product Details" placement="top">
                    <button className='!w-[40px] !h-[35px] !rounded-full bg-[#fcfcfc] min-w-[35px] hover:bg-blue-200'>
                        <CiEdit className='text-[rgba(0,0,0,0,0.7)] text-[18px]'/>

                    </button> 
                    </Tooltip>

                    <Tooltip title="See Product" placement="top">
                    <button className='!w-[40px] !h-[35px] bg-[#fcfcfc] min-w-[35px] hover:bg-blue-200'>
                        <IoMdEye className='text-[rgba(0,0,0,0,0.7)] text-[18px]'/>

                    </button>
                    </Tooltip>
                    <Tooltip title="Remove Product" placement="top">
                    <button className='!w-[40px] !h-[35px] bg-[#fcfcfc] min-w-[35px] hover:bg-blue-200'>
                        <FaTrashAlt className='text-[rgba(0,0,0,0,0.7)] text-[18px]'/>


                    </button> 
                    </Tooltip>

                    </div>

                </td>




            </tr>
             
        </tbody>
         <tbody>
            <tr  className="bg-white border-b dark:border-gray-700 border-gray-200">
                <td className='px-6 py-3'>
                    <div className='w-[60px]'> 
                     <Checkbox {...label} size='small'/>
                     </div>
                </td>
                <td className="px-6 py-2">
                    <div className='flex items-center gap-4'>
                        <div className='w-[65px] h-[65px] rounded-md overflow-hidden group'>
                            <Link to="/product/45745"> 
                            <img  className='w-full group-hover:scale-110 transition-all' src='https://ecme-react.themenate.net/img/products/product-1.jpg'>
                            </img>
                            </Link>
                            
                        </div>

                        <div className='info w-[75%]'>
                            <h4 className='font-[400] text-[12px] leading-4 hover:text-blue-400'>
                                <Link to="/product/45745">
                                VNEED Women Embroidered Rayon Kurta Pant Set | Kurta set for women
                                </Link>
                            </h4>
                            <span className='text-[12px]'>Brooks</span>
                        </div>
                    </div>

                </td>
                <td className="px-6 py-2">
                    electronics 
                </td>
               <td className="px-6 py-2">Women </td>

                
                <td className="px-6 py-2">
                    <div className='flex gap-1 flex-col'>
                        <span className='line-through text-[12px] text-gray-400 mr-2'>$300</span>
                        <span className='font-[600] text-[14px]'>$250</span> 
                    </div>
                </td>


                <td className="px-6 py-2">
                    <p className='text-[16px] w-[150px]  itmes-center'>
                        <span className='font-[600] w-[150px] mr-2'>
                        234
                        </span>
                        sale
                    </p>
                    <Progress value={20} type="success"/>
                 </td>

                <td className="px-6 py-2">
                    <div className='flex items-center gap-4'>
                         <Tooltip title="Edit Product Details" placement="top">
                    <button className='!w-[40px] !h-[35px] !rounded-full bg-[#fcfcfc] min-w-[35px] hover:bg-blue-200'>
                        <CiEdit className='text-[rgba(0,0,0,0,0.7)] text-[18px]'/>

                    </button> 
                    </Tooltip>

                    <Tooltip title="See Product" placement="top">
                    <button className='!w-[40px] !h-[35px] bg-[#fcfcfc] min-w-[35px] hover:bg-blue-200'>
                        <IoMdEye className='text-[rgba(0,0,0,0,0.7)] text-[18px]'/>

                    </button>
                    </Tooltip>
                    <Tooltip title="Remove Product" placement="top">
                    <button className='!w-[40px] !h-[35px] bg-[#fcfcfc] min-w-[35px] hover:bg-blue-200'>
                        <FaTrashAlt className='text-[rgba(0,0,0,0,0.7)] text-[18px]'/>


                    </button> 
                    </Tooltip>

                    </div>

                </td>




            </tr>
             
        </tbody>
         <tbody>
            <tr  className="bg-white border-b dark:border-gray-700 border-gray-200">
                <td className='px-6 py-3'>
                    <div className='w-[60px]'> 
                     <Checkbox {...label} size='small'/>
                     </div>
                </td>
                <td className="px-6 py-2">
                    <div className='flex items-center gap-4'>
                        <div className='w-[65px] h-[65px] rounded-md overflow-hidden group'>
                            <Link to="/product/45745"> 
                            <img  className='w-full group-hover:scale-110 transition-all' src='https://ecme-react.themenate.net/img/products/product-1.jpg'>
                            </img>
                            </Link>
                            
                        </div>

                        <div className='info w-[75%]'>
                            <h4 className='font-[400] text-[12px] leading-4 hover:text-blue-400'>
                                <Link to="/product/45745">
                                VNEED Women Embroidered Rayon Kurta Pant Set | Kurta set for women
                                </Link>
                            </h4>
                            <span className='text-[12px]'>Brooks</span>
                        </div>
                    </div>

                </td>
                <td className="px-6 py-2">
                    electronics 
                </td>
               <td className="px-6 py-2">Women </td>

                
                <td className="px-6 py-2">
                    <div className='flex gap-1 flex-col'>
                        <span className='line-through text-[12px] text-gray-400 mr-2'>$300</span>
                        <span className='font-[600] text-[14px]'>$250</span> 
                    </div>
                </td>


                <td className="px-6 py-2">
                    <p className='text-[16px] w-[150px]  itmes-center'>
                        <span className='font-[600] w-[150px] mr-2'>
                        234
                        </span>
                        sale
                    </p>
                    <Progress value={20} type="success"/>
                 </td>

                <td className="px-6 py-2">
                    <div className='flex items-center gap-4'>
                         <Tooltip title="Edit Product Details" placement="top">
                    <button className='!w-[40px] !h-[35px] !rounded-full bg-[#fcfcfc] min-w-[35px] hover:bg-blue-200'>
                        <CiEdit className='text-[rgba(0,0,0,0,0.7)] text-[18px]'/>

                    </button> 
                    </Tooltip>

                    <Tooltip title="See Product" placement="top">
                    <button className='!w-[40px] !h-[35px] bg-[#fcfcfc] min-w-[35px] hover:bg-blue-200'>
                        <IoMdEye className='text-[rgba(0,0,0,0,0.7)] text-[18px]'/>

                    </button>
                    </Tooltip>
                    <Tooltip title="Remove Product" placement="top">
                    <button className='!w-[40px] !h-[35px] bg-[#fcfcfc] min-w-[35px] hover:bg-blue-200'>
                        <FaTrashAlt className='text-[rgba(0,0,0,0,0.7)] text-[18px]'/>


                    </button> 
                    </Tooltip>

                    </div>

                </td>




            </tr>
             
        </tbody>
         <tbody>
            <tr  className="bg-white border-b dark:border-gray-700 border-gray-200">
                <td className='px-6 py-3'>
                    <div className='w-[60px]'> 
                     <Checkbox {...label} size='small'/>
                     </div>
                </td>
                <td className="px-6 py-2">
                    <div className='flex items-center gap-4'>
                        <div className='w-[65px] h-[65px] rounded-md overflow-hidden group'>
                            <Link to="/product/45745"> 
                            <img  className='w-full group-hover:scale-110 transition-all' src='https://ecme-react.themenate.net/img/products/product-1.jpg'>
                            </img>
                            </Link>
                            
                        </div>

                        <div className='info w-[75%]'>
                            <h4 className='font-[400] text-[12px] leading-4 hover:text-blue-400'>
                                <Link to="/product/45745">
                                VNEED Women Embroidered Rayon Kurta Pant Set | Kurta set for women
                                </Link>
                            </h4>
                            <span className='text-[12px]'>Brooks</span>
                        </div>
                    </div>

                </td>
                <td className="px-6 py-2">
                    electronics 
                </td>
               <td className="px-6 py-2">Women </td>

                
                <td className="px-6 py-2">
                    <div className='flex gap-1 flex-col'>
                        <span className='line-through text-[12px] text-gray-400 mr-2'>$300</span>
                        <span className='font-[600] text-[14px]'>$250</span> 
                    </div>
                </td>


                <td className="px-6 py-2">
                    <p className='text-[16px] w-[150px]  itmes-center'>
                        <span className='font-[600] w-[150px] mr-2'>
                        234
                        </span>
                        sale
                    </p>
                    <Progress value={20} type="success"/>
                 </td>

                <td className="px-6 py-2">
                    <div className='flex items-center gap-4'>
                         <Tooltip title="Edit Product Details" placement="top">
                    <button className='!w-[40px] !h-[35px] !rounded-full bg-[#fcfcfc] min-w-[35px] hover:bg-blue-200'>
                        <CiEdit className='text-[rgba(0,0,0,0,0.7)] text-[18px]'/>

                    </button> 
                    </Tooltip>

                    <Tooltip title="See Product" placement="top">
                    <button className='!w-[40px] !h-[35px] bg-[#fcfcfc] min-w-[35px] hover:bg-blue-200'>
                        <IoMdEye className='text-[rgba(0,0,0,0,0.7)] text-[18px]'/>

                    </button>
                    </Tooltip>
                    <Tooltip title="Remove Product" placement="top">
                    <button className='!w-[40px] !h-[35px] bg-[#fcfcfc] min-w-[35px] hover:bg-blue-200'>
                        <FaTrashAlt className='text-[rgba(0,0,0,0,0.7)] text-[18px]'/>


                    </button> 
                    </Tooltip>

                    </div>

                </td>




            </tr>
             
        </tbody>
         <tbody>
            <tr  className="bg-white border-b dark:border-gray-700 border-gray-200">
                <td className='px-6 py-3'>
                    <div className='w-[60px]'> 
                     <Checkbox {...label} size='small'/>
                     </div>
                </td>
                <td className="px-6 py-2">
                    <div className='flex items-center gap-4'>
                        <div className='w-[65px] h-[65px] rounded-md overflow-hidden group'>
                            <Link to="/product/45745"> 
                            <img  className='w-full group-hover:scale-110 transition-all' src='https://ecme-react.themenate.net/img/products/product-1.jpg'>
                            </img>
                            </Link>
                            
                        </div>

                        <div className='info w-[75%]'>
                            <h4 className='font-[400] text-[12px] leading-4 hover:text-blue-400'>
                                <Link to="/product/45745">
                                VNEED Women Embroidered Rayon Kurta Pant Set | Kurta set for women
                                </Link>
                            </h4>
                            <span className='text-[12px]'>Brooks</span>
                        </div>
                    </div>

                </td>
                <td className="px-6 py-2">
                    electronics 
                </td>
               <td className="px-6 py-2">Women </td>

                
                <td className="px-6 py-2">
                    <div className='flex gap-1 flex-col'>
                        <span className='line-through text-[12px] text-gray-400 mr-2'>$300</span>
                        <span className='font-[600] text-[14px]'>$250</span> 
                    </div>
                </td>


                <td className="px-6 py-2">
                    <p className='text-[16px] w-[150px]  itmes-center'>
                        <span className='font-[600] w-[150px] mr-2'>
                        234
                        </span>
                        sale
                    </p>
                    <Progress value={20} type="success"/>
                 </td>

                <td className="px-6 py-2">
                    <div className='flex items-center gap-4'>
                         <Tooltip title="Edit Product Details" placement="top">
                    <button className='!w-[40px] !h-[35px] !rounded-full bg-[#fcfcfc] min-w-[35px] hover:bg-blue-200'>
                        <CiEdit className='text-[rgba(0,0,0,0,0.7)] text-[18px]'/>

                    </button> 
                    </Tooltip>

                    <Tooltip title="See Product" placement="top">
                    <button className='!w-[40px] !h-[35px] bg-[#fcfcfc] min-w-[35px] hover:bg-blue-200'>
                        <IoMdEye className='text-[rgba(0,0,0,0,0.7)] text-[18px]'/>

                    </button>
                    </Tooltip>
                    <Tooltip title="Remove Product" placement="top">
                    <button className='!w-[40px] !h-[35px] bg-[#fcfcfc] min-w-[35px] hover:bg-blue-200'>
                        <FaTrashAlt className='text-[rgba(0,0,0,0,0.7)] text-[18px]'/>


                    </button> 
                    </Tooltip>

                    </div>

                </td>




            </tr>
             
        </tbody>
         <tbody>
            <tr  className="bg-white border-b dark:border-gray-700 border-gray-200">
                <td className='px-6 py-3'>
                    <div className='w-[60px]'> 
                     <Checkbox {...label} size='small'/>
                     </div>
                </td>
                <td className="px-6 py-2">
                    <div className='flex items-center gap-4'>
                        <div className='w-[65px] h-[65px] rounded-md overflow-hidden group'>
                            <Link to="/product/45745"> 
                            <img  className='w-full group-hover:scale-110 transition-all' src='https://ecme-react.themenate.net/img/products/product-1.jpg'>
                            </img>
                            </Link>
                            
                        </div>

                        <div className='info w-[75%]'>
                            <h4 className='font-[400] text-[12px] leading-4 hover:text-blue-400'>
                                <Link to="/product/45745">
                                VNEED Women Embroidered Rayon Kurta Pant Set | Kurta set for women
                                </Link>
                            </h4>
                            <span className='text-[12px]'>Brooks</span>
                        </div>
                    </div>

                </td>
                <td className="px-6 py-2">
                    electronics 
                </td>
               <td className="px-6 py-2">Women </td>

                
                <td className="px-6 py-2">
                    <div className='flex gap-1 flex-col'>
                        <span className='line-through text-[12px] text-gray-400 mr-2'>$300</span>
                        <span className='font-[600] text-[14px]'>$250</span> 
                    </div>
                </td>


                <td className="px-6 py-2">
                    <p className='text-[16px] w-[150px]  itmes-center'>
                        <span className='font-[600] w-[150px] mr-2'>
                        234
                        </span>
                        sale
                    </p>
                    <Progress value={20} type="success"/>
                 </td>

                <td className="px-6 py-2">
                    <div className='flex items-center gap-4'>
                         <Tooltip title="Edit Product Details" placement="top">
                    <button className='!w-[40px] !h-[35px] !rounded-full bg-[#fcfcfc] min-w-[35px] hover:bg-blue-200'>
                        <CiEdit className='text-[rgba(0,0,0,0,0.7)] text-[18px]'/>

                    </button> 
                    </Tooltip>

                    <Tooltip title="See Product" placement="top">
                    <button className='!w-[40px] !h-[35px] bg-[#fcfcfc] min-w-[35px] hover:bg-blue-200'>
                        <IoMdEye className='text-[rgba(0,0,0,0,0.7)] text-[18px]'/>

                    </button>
                    </Tooltip>
                    <Tooltip title="Remove Product" placement="top">
                    <button className='!w-[40px] !h-[35px] bg-[#fcfcfc] min-w-[35px] hover:bg-blue-200'>
                        <FaTrashAlt className='text-[rgba(0,0,0,0,0.7)] text-[18px]'/>


                    </button> 
                    </Tooltip>

                    </div>

                </td>




            </tr>
             
        </tbody>
         <tbody>
            <tr  className="bg-white border-b dark:border-gray-700 border-gray-200">
                <td className='px-6 py-3'>
                    <div className='w-[60px]'> 
                     <Checkbox {...label} size='small'/>
                     </div>
                </td>
                <td className="px-6 py-2">
                    <div className='flex items-center gap-4'>
                        <div className='w-[65px] h-[65px] rounded-md overflow-hidden group'>
                            <Link to="/product/45745"> 
                            <img  className='w-full group-hover:scale-110 transition-all' src='https://ecme-react.themenate.net/img/products/product-1.jpg'>
                            </img>
                            </Link>
                            
                        </div>

                        <div className='info w-[75%]'>
                            <h4 className='font-[400] text-[12px] leading-4 hover:text-blue-400'>
                                <Link to="/product/45745">
                                VNEED Women Embroidered Rayon Kurta Pant Set | Kurta set for women
                                </Link>
                            </h4>
                            <span className='text-[12px]'>Brooks</span>
                        </div>
                    </div>

                </td>
                <td className="px-6 py-2">
                    electronics 
                </td>
               <td className="px-6 py-2">Women </td>

                
                <td className="px-6 py-2">
                    <div className='flex gap-1 flex-col'>
                        <span className='line-through text-[12px] text-gray-400 mr-2'>$300</span>
                        <span className='font-[600] text-[14px]'>$250</span> 
                    </div>
                </td>


                <td className="px-6 py-2">
                    <p className='text-[16px] w-[150px]  itmes-center'>
                        <span className='font-[600] w-[150px] mr-2'>
                        234
                        </span>
                        sale
                    </p>
                    <Progress value={20} type="success"/>
                 </td>

                <td className="px-6 py-2">
                    <div className='flex items-center gap-4'>
                         <Tooltip title="Edit Product Details" placement="top">
                    <button className='!w-[40px] !h-[35px] !rounded-full bg-[#fcfcfc] min-w-[35px] hover:bg-blue-200'>
                        <CiEdit className='text-[rgba(0,0,0,0,0.7)] text-[18px]'/>

                    </button> 
                    </Tooltip>

                    <Tooltip title="See Product" placement="top">
                    <button className='!w-[40px] !h-[35px] bg-[#fcfcfc] min-w-[35px] hover:bg-blue-200'>
                        <IoMdEye className='text-[rgba(0,0,0,0,0.7)] text-[18px]'/>

                    </button>
                    </Tooltip>
                    <Tooltip title="Remove Product" placement="top">
                    <button className='!w-[40px] !h-[35px] bg-[#fcfcfc] min-w-[35px] hover:bg-blue-200'>
                        <FaTrashAlt className='text-[rgba(0,0,0,0,0.7)] text-[18px]'/>


                    </button> 
                    </Tooltip>

                    </div>

                </td>




            </tr>
             
        </tbody>
    </table>
</div>


   </div>


    





   </>
  )
}

export default Dashboard;