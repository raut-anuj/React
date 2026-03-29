import React, {useId} from 'react'

function Select({
    options,
    label,
    className="",
    ...props
}, ref) {
    const id = useId()
  return (
    <div className='w-full'>
        {label && 
        <label htmlFor={id} className=''></label>}
        <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        >
            {/* //options joh ha woh array mh ah th ha, aur opyions koh jaurri nhi ha ki id unique deh nh ka ku ki woh khud unique ho th ha */}
            {/* dhayan rakhna ki jab hm options bheja gh tb woh ek array he ho gh, is liye hm yha ph options pr map kr rhe ha. */}
            {/* yha ph options.length bhi kr sakte ha check if else mh */}
            {options?.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
  )
}

export default React.forwardRef(Select)