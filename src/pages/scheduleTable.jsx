import React, { useContext, useState } from "react";
import Layouts from "../layouts/layouts";
import axiosInstance from "../components/config/axiosInstance.js";
import { GlobalContext } from "../context/globalContext";

function ScheduleTable() {
    const { contextHolder } = useContext(GlobalContext);

    return (

        <Layouts>
            {contextHolder}
            <div class="px-4 py-10 sm:px-6 lg:px-20 lg:py-14 mx-auto">
                <div class="flex flex-col">
                    <div class="-m-0 overflow-x-auto">
                    <div class="p-0 min-w-full inline-block align-middle">
                        <div class="rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
                            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead class="bg-inherit">
                                    <tr>
                                        <th scope="col" class="">                                
                                        </th>
                                        <th scope="col" class="px-12 py-5 text-start">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                Segunda
                                                </span>
                                            </div>
                                        </th>

                                        <th scope="col" class="px-12 py-5 text-start">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                Terça
                                                </span>
                                            </div>
                                        </th>

                                        <th scope="col" class="px-12 py-5 text-start">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                Quarta
                                                </span>
                                            </div>
                                        </th>

                                        <th scope="col" class="px-12 py-5 text-start">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                Quinta
                                                </span>
                                            </div>
                                        </th>

                                        <th scope="col" class="px-12 py-5 text-start">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                Sexta
                                                </span>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>

                                <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                                    <tr class="bg-green-200 dark:bg-slate-900 dark:hover:bg-slate-800">
                                        <td class="h-px w-px whitespace-nowrap bg-white">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="block px-12 py-5">
                                                    <span class="font-mono text-center text-sm text-black dark:text-blue-500">13:20</span>
                                                </span>
                                            </div>
                                        </td>
                                        <td class="h-px w-px hover:bg-gray-50 whitespace-nowrap">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="block px-12 py-5">
                                                    <span class="font-mono text-center text-sm text-black dark:text-blue-500">-</span>
                                                </span>
                                            </div>
                                        </td>
                                        <td class="h-px w-px hover:bg-gray-50 whitespace-nowrap">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="block px-12 py-5">
                                                    <span class="font-mono text-center text-sm text-black dark:text-blue-500">-</span>
                                                </span>
                                            </div>
                                        </td>
                                        <td class="h-px w-px hover:bg-gray-50 whitespace-nowrap">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="block px-12 py-5">
                                                    <span class="font-mono text-center text-sm text-black dark:text-blue-500">-</span>
                                                </span>
                                            </div>
                                        </td>
                                        <td class="h-px w-px hover:bg-gray-50 whitespace-nowrap">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="block px-12 py-5">
                                                    <span class="font-mono text-center text-sm text-black dark:text-blue-500">-</span>
                                                </span>
                                            </div>
                                        </td>
                                        <td class="h-px w-px hover:bg-gray-50 whitespace-nowrap">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="block px-12 py-5">
                                                    <span class="font-mono text-center text-sm text-black dark:text-blue-500">-</span>
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="bg-green-200 dark:bg-slate-900 dark:hover:bg-slate-800">
                                        <td class="h-px w-px whitespace-nowrap bg-white">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="block px-12 py-5">
                                                    <span class="font-mono text-center text-sm text-black dark:text-blue-500">14:10</span>
                                                </span>
                                            </div>
                                        </td>
                                        <td class="h-px w-px hover:bg-gray-50 whitespace-nowrap">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="block px-12 py-5">
                                                    <span class="font-mono text-center text-sm text-black dark:text-blue-500">-</span>
                                                </span>
                                            </div>
                                        </td>
                                        <td class="h-px w-px hover:bg-gray-50 whitespace-nowrap">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="block px-12 py-5">
                                                    <span class="font-mono text-center text-sm text-black dark:text-blue-500">-</span>
                                                </span>
                                            </div>
                                        </td>
                                        <td class="h-px w-px hover:bg-gray-50 whitespace-nowrap">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="block px-12 py-5">
                                                    <span class="font-mono text-center text-sm text-black dark:text-blue-500">-</span>
                                                </span>
                                            </div>
                                        </td>
                                        <td class="h-px w-px hover:bg-gray-50 whitespace-nowrap">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="block px-12 py-5">
                                                    <span class="font-mono text-center text-sm text-black dark:text-blue-500">-</span>
                                                </span>
                                            </div>
                                        </td>
                                        <td class="h-px w-px hover:bg-gray-50 whitespace-nowrap">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="block px-12 py-5">
                                                    <span class="font-mono text-center text-sm text-black dark:text-blue-500">-</span>
                                                </span>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr class="bg-green-200 dark:bg-slate-900 dark:hover:bg-slate-800">
                                        <td class="h-px w-px whitespace-nowrap bg-white">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="block px-12 py-5">
                                                    <span class="font-mono text-center text-sm text-black dark:text-blue-500">15:10</span>
                                                </span>
                                            </div>
                                        </td>
                                        <td class="h-px w-px hover:bg-gray-50 whitespace-nowrap">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="block px-12 py-5">
                                                    <span class="font-mono text-center text-sm text-black dark:text-blue-500">-</span>
                                                </span>
                                            </div>
                                        </td>
                                        <td class="h-px w-px hover:bg-gray-50 whitespace-nowrap">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="block px-12 py-5">
                                                    <span class="font-mono text-center text-sm text-black dark:text-blue-500">-</span>
                                                </span>
                                            </div>
                                        </td>
                                        <td class="h-px w-px hover:bg-gray-50 whitespace-nowrap">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="block px-12 py-5">
                                                    <span class="font-mono text-center text-sm text-black dark:text-blue-500">-</span>
                                                </span>
                                            </div>
                                        </td>
                                        <td class="h-px w-px hover:bg-gray-50 whitespace-nowrap">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="block px-12 py-5">
                                                    <span class="font-mono text-center text-sm text-black dark:text-blue-500">-</span>
                                                </span>
                                            </div>
                                        </td>
                                        <td class="h-px w-px hover:bg-gray-50 whitespace-nowrap">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="block px-12 py-5">
                                                    <span class="font-mono text-center text-sm text-black dark:text-blue-500">-</span>
                                                </span>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr class="bg-green-200 dark:bg-slate-900 dark:hover:bg-slate-800">
                                        <td class="h-px w-px whitespace-nowrap bg-white">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="block px-12 py-5">
                                                    <span class="font-mono text-center text-sm text-black dark:text-blue-500">16:00</span>
                                                </span>
                                            </div>
                                        </td>
                                        <td class="h-px w-px hover:bg-gray-50 whitespace-nowrap">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="block px-12 py-5">
                                                    <span class="font-mono text-center text-sm text-black dark:text-blue-500">-</span>
                                                </span>
                                            </div>
                                        </td>
                                        <td class="h-px w-px hover:bg-gray-50 whitespace-nowrap">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="block px-12 py-5">
                                                    <span class="font-mono text-center text-sm text-black dark:text-blue-500">-</span>
                                                </span>
                                            </div>
                                        </td>
                                        <td class="h-px w-px hover:bg-gray-50 whitespace-nowrap">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="block px-12 py-5">
                                                    <span class="font-mono text-center text-sm text-black dark:text-blue-500">-</span>
                                                </span>
                                            </div>
                                        </td>
                                        <td class="h-px w-px hover:bg-gray-50 whitespace-nowrap">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="block px-12 py-5">
                                                    <span class="font-mono text-center text-sm text-black dark:text-blue-500">-</span>
                                                </span>
                                            </div>
                                        </td>
                                        <td class="h-px w-px hover:bg-gray-50 whitespace-nowrap">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="block px-12 py-5">
                                                    <span class="font-mono text-center text-sm text-black dark:text-blue-500">-</span>
                                                </span>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr class="bg-green-200 dark:bg-slate-900 dark:hover:bg-slate-800">
                                        <td class="h-px w-px whitespace-nowrap bg-white">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="block px-12 py-5">
                                                    <span class="font-mono text-center text-sm text-black dark:text-blue-500">16:50</span>
                                                </span>
                                            </div>
                                        </td>
                                        <td class="h-px w-px hover:bg-gray-50 whitespace-nowrap">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="block px-12 py-5">
                                                    <span class="font-mono text-center text-sm text-black dark:text-blue-500">-</span>
                                                </span>
                                            </div>
                                        </td>
                                        <td class="h-px w-px hover:bg-gray-50 whitespace-nowrap">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="block px-12 py-5">
                                                    <span class="font-mono text-center text-sm text-black dark:text-blue-500">-</span>
                                                </span>
                                            </div>
                                        </td>
                                        <td class="h-px w-px hover:bg-gray-50 whitespace-nowrap">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="block px-12 py-5">
                                                    <span class="font-mono text-center text-sm text-black dark:text-blue-500">-</span>
                                                </span>
                                            </div>
                                        </td>
                                        <td class="h-px w-px hover:bg-gray-50 whitespace-nowrap">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="block px-12 py-5">
                                                    <span class="font-mono text-center text-sm text-black dark:text-blue-500">-</span>
                                                </span>
                                            </div>
                                        </td>
                                        <td class="h-px w-px hover:bg-gray-50 whitespace-nowrap">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="block px-12 py-5">
                                                    <span class="font-mono text-center text-sm text-black dark:text-blue-500">-</span>
                                                </span>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr class="bg-green-200 dark:bg-slate-900">
                                        <td class="h-px w-px whitespace-nowrap bg-white">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="block px-12 py-5">
                                                    <span class="font-mono text-center text-sm text-black dark:text-blue-500">17:40</span>
                                                </span>
                                            </div>
                                        </td>
                                        <td class="h-px w-px hover:bg-gray-50 whitespace-nowrap">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="block px-12 py-5">
                                                    <span class="font-mono text-center text-sm text-black dark:text-blue-500">-</span>
                                                </span>
                                            </div>
                                        </td>
                                        <td class="h-px w-px hover:bg-gray-50 whitespace-nowrap">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="block px-12 py-5">
                                                    <span class="font-mono text-center text-sm text-black dark:text-blue-500">-</span>
                                                </span>
                                            </div>
                                        </td>
                                        <td class="h-px w-px hover:bg-gray-50 whitespace-nowrap">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="block px-12 py-5">
                                                    <span class="font-mono text-center text-sm text-black dark:text-blue-500">-</span>
                                                </span>
                                            </div>
                                        </td>
                                        <td class="h-px w-px hover:bg-gray-50 whitespace-nowrap">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="block px-12 py-5">
                                                    <span class="font-mono text-center text-sm text-black dark:text-blue-500">-</span>
                                                </span>
                                            </div>
                                        </td>
                                        <td class="h-px w-px hover:bg-gray-50 whitespace-nowrap">
                                            <div class="flex items-center justify-center gap-x-2">
                                                <span class="block px-12 py-5">
                                                    <span class="font-mono text-center text-sm text-black dark:text-blue-500">-</span>
                                                </span>
                                            </div>
                                        </td>
                                    </tr>                                                        
                                </tbody>
                            </table>                    
                        </div>
                    </div>
                </div>
            </div>
            </div> 
        </Layouts>
    );

}
export default ScheduleTable;