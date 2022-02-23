import Head from "next/head";

const CustomHead = ({ title, description, url, image }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="title" content={title} />
            <meta name="description" content={description} />

            <meta property="og:type" content="website" />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image || "https://i.ibb.co/Jz19Sj2/volir-meta.png"} />

            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image || "https://i.ibb.co/Jz19Sj2/volir-meta.png"} />
        </Head>
    );
}

export default CustomHead;