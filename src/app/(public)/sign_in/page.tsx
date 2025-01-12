"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function SignInPage() {
    
    const handleSignIn = async() => {
        try {
            await signIn("google", { callbackUrl: "/"});
        } catch (error) {
            console.log("Failed to sign in*", error);
        }
    }


    return (
        <main className="">
            <div className="flex flex-col">
                <h1 className="text-2xl">ログイン</h1>
                <p>
                    以下のリンクをクリックしてください
                </p>
            </div>
            <Button onClick={() => handleSignIn()}>
                Googleでログイン
            </Button>


        </main>
    )
}
