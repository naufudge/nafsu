import React from 'react'

const Card = ({doc}) => {
  return (
    <div
    className='card glass h-full w-full text-center p-4 text-[#161010] hover:cursor-pointer hover:scale-110 transition-all'
    // onClick={() => {router.push(`/doctors/${doc.path}`)}}
    onClick={()=>document.getElementById('my_modal_5').showModal()}
    >
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-gradient-to-l from-[#D3ADBC] to-[#C794BE] text-sm">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Press ESC key or click the button below to close</p>
            <div className="modal-action">
            <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
            </form>
            </div>
        </div>
        </dialog>
        <h1 className='font-bold m-auto'>{doc.name}</h1>
        <span>{doc.department}</span>
        <span>{doc.designation}</span>
    </div>
  )
}

export default Card