'use client';
import React, {useReducer} from 'react'

export const Career = () => {
    let careerReducer = (state, action) => {
        return { ...state, [action.target.name]: action.target.value }
    }

    let [career, setCareer] = useReducer(careerReducer, {})

    const handleSubmit = (e) => {
        e.preventDefault()
        addCareer(career)
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                } else {
                    console.log(data)
                }
            })
    }

    console.log(career)
  return (
    <>
    <div className='flex justify-center h-screen'>
            <div className='border-2 shadow-lg rounded-md lg:mt-14 mt-10 lg:w-2/5 w-5/6 lg:p-7 md:h-3/4 h-4/6'>
                <h1 className='font-bold lg:text-3xl  pb-4 lg:text-left text-center p-4 md:text-2xl'>Add Career</h1>
                <table className='lg:w-full w-11/12 md:text-xl text-sm'> 
                    <tr className='flex md:block'>
                        <td className=''>
                            <label className='pl-3 md:text-lg text-sm'>Career_Title:</label>
                        </td>
                        <td className=''>
                            <input type="text" name="title" className='border-2 border-black rounded-md md:h-10 h-8 my-3 w-full' onChange={setCareer} />
                        </td>
                    </tr>
                    <tr className=''>
                        <td>
                            <label className='pl-3 md:text-lg text-sm'>vacancyNumber:</label>
                        </td>
                        <td className=''>
                            <input type="text" name="vacancyNumber" className='border-2 border-black rounded-md md:h-10 h-8 my-3 w-full' onChange={setCareer} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='pl-3 md:text-lg'>offered_salary:</label>
                        </td>
                        <td>
                            <input type="text" name="offered_salary" className='border-2 border-black rounded-md md:h-10 h-8 my-3 w-full' onChange={setCareer} />

                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='pl-3 md:text-lg'>posted_date:</label>
                        </td>
                        <td>
                            <input type="text" name="posted_date" className='border-2 border-black rounded-md md:h-10 h-8 my-3 w-full' onChange={setCareer} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className='pl-3 md:text-lg'>deadline:</label>
                        </td>
                        <td>
                            <input type="text" name="deadline" className='border-2 border-black rounded-md md:h-10 h-8 my-3 w-full' onChange={setCareer} />
                        </td>
                    </tr>
                </table>
                <button onClick={handleSubmit} className="border border-none bg-blue-600 rounded-md w-20 h-10 mt-1 m-5 md:text-lg"><a href="#" className=' hover:text-white'>Add</a></button>
            </div>
        </div>

    </>
  )
}

// export default Career