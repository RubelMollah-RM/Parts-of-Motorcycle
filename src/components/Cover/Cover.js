import React from 'react';
import cover from '../../mcphoto/rapsole.png';

const Cover = () => {
    return (
        <div className='h-screen bg-fixed bg-cover  hidden lg:block' style={{ backgroundImage: `url(${cover})` }}>
            <div className='flex justify-center items-center py-[250px] px-[100px] w-[600px]'>
                <div>
                    <h1 className='text-4xl py-3 text-orange-700'>Welcome Our services</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi eaque nobis dolor quasi iusto, doloremque odio repudiandae eos dolorum veritatis aliquid dolore quo asperiores fugit officia ducimus nulla eius eum?</p>
                    <button className='btn-outline p-3 mt-11 border border-green-300 rounded-md hover:text-black hover:border-red-900 hover:bg-orange-500'>More information</button>
                </div>
            </div>
        </div>
    );
};

export default Cover;