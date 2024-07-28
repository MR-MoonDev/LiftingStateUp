import React from 'react'

const FetchApiDesgn = ({data}) => {
  return (
    <div>
         <div className="container mx-auto p-4">
            <h1 className='text-3xl text-center mb-10 text-amber-900'>Fetch Api</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((item) => (
                    <div key={item.id} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
                        <div className="w-32 h-32 mb-4">
                            <img className="w-full h-full object-cover rounded" src={item.thumbnailUrl} alt={item.title} />
                        </div>
                        <div className="text-center">
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-500 mb-2">ID: {item.id}</p>
                            <a className="text-blue-500 hover:underline" href={item.url} target="_blank" rel="noopener noreferrer">
                                View Image
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default FetchApiDesgn