import React from 'react'

const Card = ({doc}) => {
  return (
    <div
    className='card glass h-full w-full text-center p-4 text-[#161010] hover:cursor-pointer hover:scale-110 transition-all'
    // onClick={() => {router.push(`/doctors/${doc.path}`)}}
    onClick={()=>document.getElementById('my_modal_5').showModal()}
    >
        <dialog id="my_modal_5" className="modal text-sm">
        <div className="modal-box bg-gradient-to-tr from-[#D3ADBC] to-[#C794BE] text-sm w-[250px]">
        <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
            <h3 className="font-bold text-xl">Contact</h3>
            <p className="pt-3">
            <span className='font-bold'>ADK Hospital:</span>
            <br />
            Tel: (+960) 331 3553
            <br />
            Fax: (+960) 331 3554
            <br />
            Email: info@adkhospital.com
            </p>
            <div className="modal-action">
            {/* <form method="dialog">
                <button className="btn">Close</button>
            </form> */}
            
            </div>
            <button className='btn w-full'>Book now! <br/> (coming later)</button>
        </div>
        </dialog>
        <h1 className='font-bold m-auto'>{doc.name}</h1>
        <span>{doc.department}</span>
        <span>{doc.designation}</span>
    </div>
  )
}

export default Card