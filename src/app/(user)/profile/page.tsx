"use client"

import React from "react"
import Provider from "@/app/context/provider";
import GetMe from "@/components/user/GetMe";



export default function page() {
    return (
        <Provider>
            <GetMe/>
        </Provider>
    )


}
