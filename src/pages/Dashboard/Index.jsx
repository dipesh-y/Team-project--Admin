import React from 'react'
import { FaPlus } from "react-icons/fa";
import DashboardBoxes from '../../components/DashboardBoxes'
const Dashboard = () => {
  return (
   <>
   <div className="w-full bg-white p-5 border border-[rgba(0,0,0,0.1)] flex items-center gap-8 mb-5 justify-between rounded-md">
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
    <div className="flex items-center justify-between px-3 py-5">
      <h2 className="text-[18px] font-[600]"> Recent orders</h2>
    </div>
    

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Google Pixel Phone
                </th>
                <td class="px-6 py-4">
                    Gray
                </td>
                <td class="px-6 py-4">
                    Phone
                </td>
                <td class="px-6 py-4">
                    $799
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
            <tr>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple Watch 5
                </th>
                <td class="px-6 py-4">
                    Red
                </td>
                <td class="px-6 py-4">
                    Wearables
                </td>
                <td class="px-6 py-4">
                    $999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>


   </div>
   </>
  )
}

export default Dashboard