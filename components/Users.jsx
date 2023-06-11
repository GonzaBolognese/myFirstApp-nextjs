"use client"
import { useRouter } from "next/navigation";



function Users({ userData }) {
    const router = useRouter(); 

  return (
    <ul className='list-group'>
    {
    userData.map ((u) => (
    <li key={u.id}
        className="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
        onClick={()=>{
            router.push(`/users/${u.id}`)
        }}
    >
        <div>
            <h3>{u.id} - {u.first_name} {u.last_name}</h3>
            <p>{u.email}</p>
        </div>
        <img src={u.avatar} alt={`${u.first_name} ${u.last_name} image`} style={{borderRadius:"50%"}} />
    </li> 
    ))
}
</ul>
  )
}

export default Users