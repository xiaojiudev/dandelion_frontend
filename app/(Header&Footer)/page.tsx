'use client'
import Image from 'next/image'
import { Breadcrumb } from 'antd'



export default function Home() {

    

    return (
        <div className="my-6" >
            <div className=''>
                <Breadcrumb items={[{ title: 'sample' }, { title: 'list' }, { title: 'app' }]} className='mb-3' />
                <div className='bg-white min-h-screen p-4 shadow-sm rounded'>
                    Content

                </div>
            </div>
        </div>
    )
}
