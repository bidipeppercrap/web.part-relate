import { ComponentChildren } from "preact";
import { asset, Head } from "$fresh/runtime.ts";
import { PageProps } from "$fresh/server.ts";

interface PageContainer {
    children: ComponentChildren;
}

export function Container({ children }: PageContainer) {
    return (
        <>
            <Head>
                <title>Part Relate</title>
                <link rel="stylesheet" href={asset("style.css")} />
            </Head>
            <main className="wrapper">
                {children}
            </main>
        </>
    )
}