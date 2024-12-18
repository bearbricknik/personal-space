"use client"

function page(params) {

    console.log(params.slug)

    return (
        <div>
            {params.slug}
        </div>
    )
}

export default page