"use client";

import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import Cookies from "js-cookie";
import { createContext } from "vm";
const refreshToken = JSON.parse(Cookies.get("refreshToken") || "{}");

const wixClient = createClient({
    modules: {
        products,
        //   currentCart,
    },
    auth: OAuthStrategy({
        clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
        tokens: {
            refreshToken,
            accessToken: { value: "", expiresAt: 0 },
        },
    }),
});

export type wixClient = typeof wixClient;

export const WicClientContext = createContext<wixClient>(wixClient);
